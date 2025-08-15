import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/database"

export async function GET() {
  try {
    const db = getDatabase()
    
    // Get categories with updated agent counts
    const categories = db.prepare(`
      SELECT 
        c.*,
        COALESCE(agent_counts.count, 0) as agent_count
      FROM categories c
      LEFT JOIN (
        SELECT category, COUNT(*) as count 
        FROM agents 
        GROUP BY category
      ) agent_counts ON c.slug = agent_counts.category
      ORDER BY c.id
    `).all()

    // Update the "all" category count
    const totalAgents = db.prepare('SELECT COUNT(*) as total FROM agents').get() as { total: number }
    const processedCategories = categories.map((cat: any) => ({
      ...cat,
      agent_count: cat.slug === 'all' ? totalAgents.total : cat.agent_count,
      created_at: cat.created_at,
      updated_at: cat.updated_at
    }))

    return NextResponse.json(processedCategories)
  } catch (error) {
    console.error("Error fetching categories:", error)
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 })
  }
}