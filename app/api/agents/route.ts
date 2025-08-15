import { type NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/database"

export async function GET(request: NextRequest) {
  try {
    console.log('GET /api/agents called')
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category") || "all"
    const search = searchParams.get("search") || ""
    const sortBy = searchParams.get("sortBy") || "popular"
    const pricing = searchParams.get("pricing") || "all"
    const sourceType = searchParams.get("sourceType") || "all"
    const limit = Number.parseInt(searchParams.get("limit") || "50")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    console.log('Query params:', { category, search, sortBy, pricing, sourceType, limit, offset })

    const db = await getDatabase()

    const result = db.queryAgents({
      category: category !== "all" ? category : undefined,
      search: search.trim() || undefined,
      pricing: pricing !== "all" ? pricing : undefined,
      sourceType: sourceType !== "all" ? sourceType : undefined,
      sortBy,
      limit,
      offset
    })

    console.log('Found agents:', result.agents.length, 'total:', result.total)

    // Parse tags JSON for each agent
    const processedAgents = result.agents.map((agent: any) => ({
      ...agent,
      tags: agent.tags ? JSON.parse(agent.tags) : [],
      featured: Boolean(agent.featured)
    }))

    console.log('Returning response:', {
      agentsCount: processedAgents.length,
      total: result.total,
      hasMore: result.hasMore,
      page: result.page,
      totalPages: result.totalPages,
    })

    return NextResponse.json({
      agents: processedAgents,
      total: result.total,
      hasMore: result.hasMore,
      page: result.page,
      totalPages: result.totalPages,
    })
  } catch (error) {
    console.error("Error fetching agents:", error)
    console.error("Error stack:", error instanceof Error ? error.stack : 'No stack trace')
    return NextResponse.json({ error: "Failed to fetch agents" }, { status: 500 })
  }
}