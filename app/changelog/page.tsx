import type { Metadata } from "next"
import { notFound } from "next/navigation"

export const dynamic = "force-static"
export const revalidate = 30

export const metadata: Metadata = {
  title: "Changelog - AIK Marketplace",
  description: "Cập nhật mới nhất về AIK Marketplace",
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
  // Return 404 for now - changelog listing will be implemented later
  return notFound()
}
