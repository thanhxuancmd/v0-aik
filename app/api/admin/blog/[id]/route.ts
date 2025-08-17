import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
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
      UPDATE blog_posts SET
        title = ${title},
        slug = ${slug},
        excerpt = ${excerpt},
        content = ${content},
        featured_image = ${featured_image},
        author_name = ${author_name},
        author_avatar = ${author_avatar},
        tags = ${tags},
        categories = ${categories},
        published = ${published},
        featured = ${featured},
        updated_at = NOW(),
        published_at = ${published ? "COALESCE(published_at, NOW())" : null}
      WHERE id = ${params.id}
      RETURNING *
    `

    if (result.length === 0) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("Error updating blog post:", error)
    return NextResponse.json({ error: "Failed to update blog post" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const result = await sql`
      DELETE FROM blog_posts WHERE id = ${params.id}
      RETURNING *
    `

    if (result.length === 0) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Blog post deleted successfully" })
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return NextResponse.json({ error: "Failed to delete blog post" }, { status: 500 })
  }
}
