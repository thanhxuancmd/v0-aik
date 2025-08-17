import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const agents = await sql`
      SELECT * FROM agents 
      ORDER BY created_at DESC
    `
    return NextResponse.json(agents)
  } catch (error) {
    console.error("Error fetching agents:", error)
    return NextResponse.json({ error: "Failed to fetch agents" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      description,
      category,
      image_url,
      demo_url,
      github_url,
      author_name,
      author_avatar,
      tags,
      pricing,
      source_type,
      autonomy,
      popularity,
      featured,
    } = body

    const result = await sql`
      INSERT INTO agents (
        name, description, category, image_url, demo_url, github_url,
        author_name, author_avatar, tags, pricing, source_type,
        autonomy, popularity, featured, users_count, created_at, updated_at
      ) VALUES (
        ${name}, ${description}, ${category}, ${image_url}, ${demo_url}, ${github_url},
        ${author_name}, ${author_avatar}, ${tags}, ${pricing}, ${source_type},
        ${autonomy || 0}, ${popularity || 0}, ${featured || false}, 0, NOW(), NOW()
      ) RETURNING *
    `

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("Error creating agent:", error)
    return NextResponse.json({ error: "Failed to create agent" }, { status: 500 })
  }
}
