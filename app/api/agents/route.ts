import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    // Get query parameters
    const search = searchParams.get("search") || ""
    const category = searchParams.get("category") || "all"
    const pricing = searchParams.get("pricing") || "all"
    const sourceType = searchParams.get("sourceType") || "all"
    const sortBy = searchParams.get("sortBy") || "popularity"
    const sortOrder = searchParams.get("sortOrder") || "desc"
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "12")

    // Validate parameters
    const validSortFields = ["popularity", "autonomy", "users_count", "rating", "name", "created_at"]
    const validSortOrders = ["asc", "desc"]
    const validPricing = ["all", "free", "freemium", "paid"]
    const validSourceTypes = ["all", "open_source", "closed_source", "api"]

    if (!validSortFields.includes(sortBy)) {
      return NextResponse.json({ error: "Invalid sort field" }, { status: 400 })
    }

    if (!validSortOrders.includes(sortOrder)) {
      return NextResponse.json({ error: "Invalid sort order" }, { status: 400 })
    }

    if (!validPricing.includes(pricing)) {
      return NextResponse.json({ error: "Invalid pricing filter" }, { status: 400 })
    }

    if (!validSourceTypes.includes(sourceType)) {
      return NextResponse.json({ error: "Invalid source type filter" }, { status: 400 })
    }

    if (page < 1 || limit < 1 || limit > 100) {
      return NextResponse.json({ error: "Invalid pagination parameters" }, { status: 400 })
    }

    // Build WHERE conditions
    const conditions = ["a.is_active = true"]
    const params: any[] = []
    let paramIndex = 1

    // Search condition
    if (search.trim()) {
      conditions.push(`(
        a.name ILIKE $${paramIndex} OR 
        a.description ILIKE $${paramIndex} OR
        to_tsvector('english', a.name || ' ' || a.description) @@ plainto_tsquery('english', $${paramIndex + 1})
      )`)
      params.push(`%${search.trim()}%`, search.trim())
      paramIndex += 2
    }

    // Category filter
    if (category !== "all") {
      conditions.push(`c.slug = $${paramIndex}`)
      params.push(category)
      paramIndex++
    }

    // Pricing filter
    if (pricing !== "all") {
      conditions.push(`a.pricing = $${paramIndex}`)
      params.push(pricing)
      paramIndex++
    }

    // Source type filter
    if (sourceType !== "all") {
      conditions.push(`a.source_type = $${paramIndex}`)
      params.push(sourceType)
      paramIndex++
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : ""

    // Build ORDER BY clause
    let orderByClause = ""
    if (sortBy === "name") {
      orderByClause = `ORDER BY a.name ${sortOrder.toUpperCase()}`
    } else if (sortBy === "created_at") {
      orderByClause = `ORDER BY a.created_at ${sortOrder.toUpperCase()}`
    } else {
      orderByClause = `ORDER BY a.${sortBy} ${sortOrder.toUpperCase()}`
    }

    // Calculate offset
    const offset = (page - 1) * limit

    // Get total count
    const countQuery = `
      SELECT COUNT(*) as total
      FROM agents a
      LEFT JOIN categories c ON a.category_id = c.id
      ${whereClause}
    `

    const countResult = await sql(countQuery, params)
    const total = Number.parseInt(countResult[0]?.total || "0")

    // Get agents
    const agentsQuery = `
      SELECT 
        a.id,
        a.name,
        a.slug,
        a.description,
        a.pricing,
        a.source_type,
        a.website_url,
        a.github_url,
        a.demo_url,
        a.popularity,
        a.autonomy,
        a.users_count,
        a.rating,
        a.created_at,
        c.name as category_name,
        c.slug as category_slug
      FROM agents a
      LEFT JOIN categories c ON a.category_id = c.id
      ${whereClause}
      ${orderByClause}
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `

    params.push(limit, offset)
    const agents = await sql(agentsQuery, params)

    // Calculate pagination info
    const totalPages = Math.ceil(total / limit)
    const hasMore = page < totalPages

    return NextResponse.json({
      success: true,
      data: agents,
      agents: agents, // For backward compatibility
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasMore,
      },
    })
  } catch (error) {
    console.error("Error fetching agents:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
