import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const query = `
      SELECT 
        c.id,
        c.name,
        c.slug,
        c.description,
        c.icon,
        COALESCE(c.agent_count, 0) as agent_count,
        c.created_at
      FROM categories c
      ORDER BY c.name ASC
    `

    const categories = await sql(query)

    return NextResponse.json({
      success: true,
      data: categories,
      categories: categories, // For backward compatibility
    })
  } catch (error) {
    console.error("Error fetching categories:", error)
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
