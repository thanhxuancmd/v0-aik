import { NextResponse } from "next"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const result = await sql`
      SELECT 
        id,
        name,
        slug,
        icon,
        description,
        agent_count
      FROM categories
      ORDER BY agent_count DESC, name ASC
    `

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error fetching categories:", error)
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 })
  }
}
