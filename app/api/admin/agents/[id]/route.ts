import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
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
      UPDATE agents SET
        name = ${name},
        description = ${description},
        category = ${category},
        image_url = ${image_url},
        demo_url = ${demo_url},
        github_url = ${github_url},
        author_name = ${author_name},
        author_avatar = ${author_avatar},
        tags = ${tags},
        pricing = ${pricing},
        source_type = ${source_type},
        autonomy = ${autonomy},
        popularity = ${popularity},
        featured = ${featured},
        updated_at = NOW()
      WHERE id = ${params.id}
      RETURNING *
    `

    if (result.length === 0) {
      return NextResponse.json({ error: "Agent not found" }, { status: 404 })
    }

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("Error updating agent:", error)
    return NextResponse.json({ error: "Failed to update agent" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const result = await sql`
      DELETE FROM agents WHERE id = ${params.id}
      RETURNING *
    `

    if (result.length === 0) {
      return NextResponse.json({ error: "Agent not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Agent deleted successfully" })
  } catch (error) {
    console.error("Error deleting agent:", error)
    return NextResponse.json({ error: "Failed to delete agent" }, { status: 500 })
  }
}
