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

    // Build WHERE clause
    let whereConditions = []
    let params: any[] = []

    // Filter by category
    if (category !== "all") {
      whereConditions.push("category = ?")
      params.push(category)
    }

    // Filter by search
    if (search.trim()) {
      whereConditions.push("(name LIKE ? OR description LIKE ? OR tags LIKE ?)")
      const searchPattern = `%${search}%`
      params.push(searchPattern, searchPattern, searchPattern)
    }

    // Filter by pricing
    if (pricing !== "all") {
      whereConditions.push("pricing = ?")
      params.push(pricing)
    }

    // Filter by source type
    if (sourceType !== "all") {
      whereConditions.push("source_type = ?")
      params.push(sourceType)
    }

    const whereClause = whereConditions.length > 0 ? `WHERE ${whereConditions.join(" AND ")}` : ""

    // Build ORDER BY clause
    let orderBy = "ORDER BY popularity DESC"
    switch (sortBy) {
      case "autonomy":
        orderBy = "ORDER BY autonomy DESC"
        break
      case "users":
        orderBy = "ORDER BY users_count DESC"
        break
      case "newest":
        orderBy = "ORDER BY updated_at DESC"
        break
      case "name":
        orderBy = "ORDER BY name ASC"
        break
      default:
        orderBy = "ORDER BY popularity DESC"
    }

    // Get total count
    const countQuery = `SELECT COUNT(*) as total FROM agents ${whereClause}`
    console.log('Count query:', countQuery, 'params:', params)
    
    const countResult = db.exec(countQuery, params)
    const total = countResult[0]?.values[0]?.[0] || 0

    // Get agents with pagination
    const agentsQuery = `
      SELECT * FROM agents 
      ${whereClause} 
      ${orderBy} 
      LIMIT ? OFFSET ?
    `
    console.log('Executing query:', agentsQuery)
    console.log('Query params:', [...params, limit, offset])
    
    const agentsResult = db.exec(agentsQuery, [...params, limit, offset])
    const agentsData = agentsResult[0]
    
    let agents = []
    if (agentsData && agentsData.values) {
      const columns = agentsData.columns
      agents = agentsData.values.map((row: any[]) => {
        const agent: any = {}
        columns.forEach((col: string, index: number) => {
          agent[col] = row[index]
        })
        return agent
      })
    }
    
    console.log('Found agents:', agents.length)

    // Parse tags JSON for each agent
    const processedAgents = agents.map((agent: any) => ({
      ...agent,
      tags: agent.tags ? JSON.parse(agent.tags) : [],
      featured: Boolean(agent.featured)
    }))

    console.log('Returning response:', {
      agentsCount: processedAgents.length,
      total,
      hasMore: offset + limit < total,
      page: Math.floor(offset / limit) + 1,
      totalPages: Math.ceil(total / limit),
    })

    return NextResponse.json({
      agents: processedAgents,
      total,
      hasMore: offset + limit < total,
      page: Math.floor(offset / limit) + 1,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {
    console.error("Error fetching agents:", error)
    console.error("Error stack:", error.stack)
    return NextResponse.json({ error: "Failed to fetch agents" }, { status: 500 })
  }
}