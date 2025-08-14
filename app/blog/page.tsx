import { Heading } from "../../common/heading"
import { Section } from "../../common/section-wrapper"
import { BlogpostCard } from "./_components/blogpost-card"
import { PageView } from "../../components/page-view"
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
    <Section className="gap-16">
      <PageView />
      <div className="grid grid-cols-1 gap-5 self-stretch md:grid-cols-2">
        <Heading align="left">
          <h2>Blog & Tin tức</h2>
        </Heading>
        <div className="flex items-center justify-center p-4 bg-muted rounded-lg">
          <p className="text-muted-foreground">Tìm kiếm blog posts</p>
        </div>
        {featuredPosts.map((post) => (
          <BlogpostCard key={post._id} type="card" {...post} />
        ))}
      </div>
      <div className="w-full space-y-3">
        <Heading align="left">
          <h3 className="!text-xl lg:!text-2xl">Tất cả bài viết</h3>
        </Heading>
        <div className="-mx-4 flex flex-col self-stretch">
          {samplePosts.map((post) => (
            <BlogpostCard key={post._id} {...post} className="-mx-4" />
          ))}
        </div>
      </div>
    </Section>
  )
}
