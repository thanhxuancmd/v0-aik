import { notFound } from "next/navigation"
import type { Metadata } from "next"
import "../../../basehub.config"

export const dynamic = "force-static"
export const revalidate = 30

// Return empty array for now - blog will be implemented later
export const generateStaticParams = async () => {
  return []
}

export const generateMetadata = async ({
  params: _params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await _params

  return {
    title: `Blog - ${slug}`,
    description: "Blog post",
  }
}

export default async function BlogPage({
  params: _params,
}: {
  params: Promise<{ slug: string }>
}) {
  // Return 404 for now - blog will be implemented later
  return notFound()
}
