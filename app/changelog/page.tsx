import Link from "next/link"
import { Heading } from "../../common/heading"
import { PageView } from "../../components/page-view"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

export const dynamic = "force-static"
export const revalidate = 30

export const generateMetadata = async (): Promise<Metadata | undefined> => {
  return {
    title: "Changelog - AIK Marketplace",
    description: "Theo dõi các cập nhật và tính năng mới của AIK Marketplace",
  }
}

// Sample changelog data
const sampleChangelog = {
  title: "Changelog",
  subtitle: "Theo dõi các cập nhật mới nhất",
  socialLinksTitle: "Theo dõi",
  socialLinks: [
    {
      _id: "1",
      _title: "Twitter",
      url: "https://twitter.com/aik_marketplace",
      icon: { url: "/placeholder.svg" },
    },
    {
      _id: "2",
      _title: "GitHub",
      url: "https://github.com/aik-marketplace",
      icon: { url: "/placeholder.svg" },
    },
  ],
  posts: {
    items: [
      {
        _id: "1",
        _title: "Phiên bản 2.1.0 - Cải thiện hiệu suất",
        _slug: "v2-1-0-cai-thien-hieu-suat",
        publishedAt: "2024-01-15",
        excerpt: "Cải thiện hiệu suất tải trang và thêm tính năng tìm kiếm nâng cao.",
        content: "Chi tiết về các cải thiện trong phiên bản này...",
        tags: ["Performance", "Search", "UI/UX"],
      },
      {
        _id: "2",
        _title: "Phiên bản 2.0.0 - Giao diện mới",
        _slug: "v2-0-0-giao-dien-moi",
        publishedAt: "2024-01-10",
        excerpt: "Ra mắt giao diện hoàn toàn mới với thiết kế hiện đại và trải nghiệm người dùng tốt hơn.",
        content: "Chi tiết về giao diện mới...",
        tags: ["UI/UX", "Design", "Major Update"],
      },
    ],
  },
}

export default function ChangelogPage() {
  const changelog = sampleChangelog

  return (
    <>
      <PageView />
      <div className="flex items-center justify-between border-b border-[--border] dark:border-[--dark-border]">
        <div className="mx-auto flex w-full max-w-screen-md flex-col items-start justify-between gap-4 border-r border-[--border] px-8 py-24 dark:border-[--dark-border] md:flex-row md:items-center">
          <Heading align="left" className="flex-1 !flex-col-reverse" subtitle={changelog.subtitle}>
            <h1>{changelog.title}</h1>
          </Heading>
          <div className="flex items-center gap-2 md:flex-col">
            <p className="text-sm text-[--text-tertiary] dark:text-[--dark-text-tertiary]">
              {changelog.socialLinksTitle}
            </p>
            <div className="flex gap-2">
              {changelog.socialLinks.map((link) => (
                <Link key={link._id} className="aspect-square hover:brightness-90" href={link.url} target="_blank">
                  <img alt={link._title} height={18} src={link.icon?.url ?? "/placeholder.svg"} width={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="!mx-auto !max-w-screen-md px-8 pt-16">
        {/* Temporary: Changelog list will be implemented later */}
        {notFound()}
      </div>
    </>
  )
}
