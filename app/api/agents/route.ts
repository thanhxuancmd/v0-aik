import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // Get query parameters
    const search = searchParams.get("search") || ""
    const category = searchParams.get("category") || "all"
    const pricing = searchParams.get("pricing") || "all"
    const sourceType = searchParams.get("sourceType") || "all"
    const sortBy = searchParams.get("sortBy") || "popularity"
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "12")
    const offset = (page - 1) * limit

    // Build WHERE conditions
    const conditions: string[] = ["is_active = true"]

    if (search) {
      conditions.push(`(name ILIKE '%${search}%' OR description ILIKE '%${search}%')`)
    }

    if (category !== "all") {
      conditions.push(`category = '${category}'`)
    }

    if (pricing !== "all") {
      conditions.push(`pricing = '${pricing}'`)
    }

    if (sourceType !== "all") {
      conditions.push(`source_type = '${sourceType}'`)
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : ""

    // Build ORDER BY clause
    const orderByMap: Record<string, string> = {
      popularity: "popularity_score DESC",
      autonomy: "autonomy_level DESC",
      users: "active_users DESC",
      rating: "rating DESC",
      name: "name ASC",
      newest: "created_at DESC",
    }
    const orderByClause = `ORDER BY ${orderByMap[sortBy] || orderByMap.popularity}`

    // Get total count
    const countQuery = `
      SELECT COUNT(*) as count
      FROM agents
      ${whereClause}
    `
    const countResult = await sql.unsafe(countQuery)
    const total = Number.parseInt(countResult[0].count)

    // Get agents
    const query = `
      SELECT 
        id,
        name,
        slug,
        description,
        category,
        pricing,
        source_type,
        popularity_score,
        autonomy_level,
        active_users,
        rating,
        logo_url,
        website_url,
        github_url,
        demo_url,
        tags,
        created_at,
        updated_at
      FROM agents
      ${whereClause}
      ${orderByClause}
      LIMIT ${limit}
      OFFSET ${offset}
    `

    const agents = await sql.unsafe(query)

    return NextResponse.json({
      agents,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasMore: page * limit < total,
      },
    })
  } catch (error) {
    console.error("Error fetching agents:", error)
    return NextResponse.json({ error: "Failed to fetch agents" }, { status: 500 })
  }
}
