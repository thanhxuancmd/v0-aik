import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const query = `
      SELECT 
        c.*,
        COALESCE(agent_counts.count, 0) as agent_count
      FROM categories c
      LEFT JOIN (
        SELECT 
          category_slug,
          COUNT(*) as count
        FROM agents
        GROUP BY category_slug
      ) agent_counts ON c.slug = agent_counts.category_slug
      ORDER BY 
        CASE WHEN c.slug = 'all' THEN 0 ELSE 1 END,
        c.name ASC
    `

    const categories = await sql.query(query)

    // Update the "all" category count to be the total of all agents
    const allCategoryIndex = categories.findIndex((cat) => cat.slug === "all")
    if (allCategoryIndex !== -1) {
      const totalAgents = categories
        .filter((cat) => cat.slug !== "all")
        .reduce((sum, cat) => sum + Number.parseInt(cat.agent_count), 0)
      categories[allCategoryIndex].agent_count = totalAgents
    }

    return NextResponse.json(categories)
  } catch (error) {
    console.error("Error fetching categories:", error)
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 })
  }
}
