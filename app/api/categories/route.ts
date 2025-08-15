import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/database"

export async function GET() {
  try {
    console.log('GET /api/categories called')
    const db = await getDatabase()
    
    const categories = db.getCategories()

    console.log('Found categories:', categories.length)
    return NextResponse.json(categories)
  } catch (error) {
    console.error("Error fetching categories:", error)
    console.error("Error stack:", error instanceof Error ? error.stack : 'No stack trace')
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 })
  }
}