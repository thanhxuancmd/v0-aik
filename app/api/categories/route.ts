import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/database"

export async function GET() {
  try {
    console.log('GET /api/categories called')
    const db = await getDatabase()
    
    // Get categories with updated agent counts
    const categoriesResult = db.exec(`
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
    `)

    let categories = []
    if (categoriesResult[0] && categoriesResult[0].values) {
      const columns = categoriesResult[0].columns
      categories = categoriesResult[0].values.map((row: any[]) => {
        const category: any = {}
        columns.forEach((col: string, index: number) => {
          category[col] = row[index]
        })
        return category
      })
    }

    console.log('Raw categories from DB:', categories.length)

    // Update the "all" category count
    const totalResult = db.exec('SELECT COUNT(*) as total FROM agents')
    const totalAgents = totalResult[0]?.values[0]?.[0] || 0
    console.log('Total agents count:', totalAgents)
    
    const processedCategories = categories.map((cat: any) => ({
      ...cat,
      agent_count: cat.slug === 'all' ? totalAgents : cat.agent_count,
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