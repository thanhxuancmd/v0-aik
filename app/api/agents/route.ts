import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category") || "all"
    const search = searchParams.get("search") || ""
    const sortBy = searchParams.get("sortBy") || "popular"
    const pricing = searchParams.get("pricing") || "all"
    const sourceType = searchParams.get("sourceType") || "all"
    const limit = Number.parseInt(searchParams.get("limit") || "50")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    // Build WHERE clause
    const whereConditions = []
    const params: any[] = []
    let paramIndex = 1

    if (category !== "all") {
      whereConditions.push(`category_slug = $${paramIndex}`)
      params.push(category)
      paramIndex++
    }

    if (search.trim()) {
      whereConditions.push(`(
        name ILIKE $${paramIndex} OR 
        description ILIKE $${paramIndex} OR 
        $${paramIndex + 1} = ANY(tags)
      )`)
      params.push(`%${search}%`, search)
      paramIndex += 2
    }

    if (pricing !== "all") {
      whereConditions.push(`pricing = $${paramIndex}`)
      params.push(pricing)
      paramIndex++
    }

    if (sourceType !== "all") {
      whereConditions.push(`source_type = $${paramIndex}`)
      params.push(sourceType)
      paramIndex++
    }

    const whereClause = whereConditions.length > 0 ? `WHERE ${whereConditions.join(" AND ")}` : ""

    // Build ORDER BY clause
    let orderBy = "popularity DESC"
    switch (sortBy) {
      case "autonomy":
        orderBy = "autonomy DESC"
        break
      case "users":
        orderBy = "users_count DESC"
        break
      case "newest":
        orderBy = "updated_at DESC"
        break
      case "name":
        orderBy = "name ASC"
        break
      default:
        orderBy = "popularity DESC"
    }

    // Get total count
    const countQuery = `
      SELECT COUNT(*) as total
      FROM agents
      ${whereClause}
    `
    const countResult = await sql(countQuery, params)
    const total = Number.parseInt(countResult[0].total)

    // Get agents
    const agentsQuery = `
      SELECT *
      FROM agents
      ${whereClause}
      ORDER BY ${orderBy}
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `
    params.push(limit, offset)

    const agents = await sql(agentsQuery, params)

    return NextResponse.json({
      agents,
      total,
      hasMore: offset + limit < total,
      page: Math.floor(offset / limit) + 1,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {
    console.error("Error fetching agents:", error)
    return NextResponse.json({ error: "Failed to fetch agents" }, { status: 500 })
  }
}
