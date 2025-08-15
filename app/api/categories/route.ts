import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/database"

export async function GET() {
  try {
    console.log('GET /api/categories called')
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

    console.log('Raw categories from DB:', categories.length)

    // Update the "all" category count
    const totalAgents = db.prepare('SELECT COUNT(*) as total FROM agents').get() as { total: number }
    console.log('Total agents count:', totalAgents.total)
    
    const processedCategories = categories.map((cat: any) => ({
      ...cat,
      agent_count: cat.slug === 'all' ? totalAgents.total : cat.agent_count,
      created_at: cat.created_at,
      updated_at: cat.updated_at
    }))

    console.log('Processed categories:', processedCategories.length)
    return NextResponse.json(processedCategories)
  } catch (error) {
    console.error("Error fetching categories:", error)
    console.error("Error stack:", error.stack)
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 })
  }
}