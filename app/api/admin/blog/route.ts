import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const posts = await sql`
      SELECT * FROM blog_posts 
      ORDER BY created_at DESC
    `
    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      slug,
      excerpt,
      content,
      featured_image,
      author_name,
      author_avatar,
      tags,
      categories,
      published,
      featured,
    } = body

    const result = await sql`
      INSERT INTO blog_posts (
        title, slug, excerpt, content, featured_image, author_name, author_avatar,
        tags, categories, published, featured, created_at, updated_at,
        published_at
      ) VALUES (
        ${title}, ${slug}, ${excerpt}, ${content}, ${featured_image}, ${author_name}, ${author_avatar},
        ${tags}, ${categories}, ${published}, ${featured}, NOW(), NOW(),
        ${published ? "NOW()" : null}
      ) RETURNING *
    `

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("Error creating blog post:", error)
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 })
  }
}
