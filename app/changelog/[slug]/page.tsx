import { notFound } from "next/navigation"
import type { Metadata } from "next"
import "../../../basehub.config"

export const dynamic = "force-static"
export const revalidate = 30

interface ChangelogPageProps {
  params: Promise<{ slug: string }>
}

// Return empty array for now - changelog will be implemented later
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
    title: `Changelog - ${slug}`,
    description: "Changelog entry",
  }
}

export default async function ChangelogPage({
  params: _params,
}: {
  params: Promise<{ slug: string }>
}) {
  // Return 404 for now - changelog will be implemented later
  return notFound()
}
