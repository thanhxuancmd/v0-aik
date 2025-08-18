import { BlogpostCard } from "./_components/blogpost-card"
import { PageView } from "../../components/page-view"
import { Search, Filter } from "lucide-react"
import type { Metadata } from "next"

export const dynamic = "force-static"
export const revalidate = 30

export const generateMetadata = async (): Promise<Metadata | undefined> => {
  return {
    title: "Blog - AIK Marketplace",
    description: "Tin tức và bài viết mới nhất về AI, công nghệ và marketplace",
  }
}

// Sample blog posts data
const samplePosts = [
  {
    _id: "1",
    _title: "Xu hướng AI Agents trong năm 2024",
    _slug: "xu-huong-ai-agents-2024",
    excerpt: "Khám phá những xu hướng mới nhất trong lĩnh vực AI Agents và cách chúng đang thay đổi cách làm việc.",
    publishedAt: "2024-01-15",
    author: {
      _id: "author1",
      _title: "Nguyễn Văn A",
      image: { url: "/placeholder-user.jpg" },
    },
    tags: ["AI", "Technology", "Trends"],
    image: { url: "/placeholder.jpg" },
  },
  {
    _id: "2",
    _title: "Cách tạo AI Agent đầu tiên của bạn",
    _slug: "cach-tao-ai-agent-dau-tien",
    excerpt: "Hướng dẫn từng bước để tạo ra AI Agent đầu tiên với các công cụ hiện đại.",
    publishedAt: "2024-01-12",
    author: {
      _id: "author2",
      _title: "Trần Thị B",
      image: { url: "/placeholder-user.jpg" },
    },
    tags: ["Tutorial", "AI", "Development"],
    image: { url: "/placeholder.jpg" },
  },
  {
    _id: "3",
    _title: "Marketplace AI: Tương lai của thương mại điện tử",
    _slug: "marketplace-ai-tuong-lai-thuong-mai",
    excerpt: "Phân tích về cách AI đang thay đổi ngành thương mại điện tử và marketplace.",
    publishedAt: "2024-01-10",
    author: {
      _id: "author3",
      _title: "Lê Văn C",
      image: { url: "/placeholder-user.jpg" },
    },
    tags: ["E-commerce", "AI", "Business"],
    image: { url: "/placeholder.jpg" },
  },
]

const featuredPosts = samplePosts.slice(0, 2)

export default async function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageView />

      {/* Hero Section */}
      <div className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Blog & Tin tức
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              Khám phá những xu hướng mới nhất về AI, công nghệ và marketplace
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-16 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                className="w-full rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm pl-12 pr-4 py-4 text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
              />
            </div>
            <button className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-4 text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Bộ lọc
            </button>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Bài viết nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <BlogpostCard key={post._id} type="card" {...post} />
            ))}
          </div>
        </div>
      </div>

      {/* All Posts */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-4xl font-bold mb-12">Tất cả bài viết</h3>
          <div className="space-y-6">
            {samplePosts.map((post) => (
              <BlogpostCard key={post._id} type="list" {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
