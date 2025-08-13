import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Section } from "../../../common/section-wrapper"
import { Heading } from "../../../common/heading"
import { Avatar } from "../../../common/avatar"
import { PageView } from "../../../components/page-view"
import { formatDate } from "../../_utils/dates"

export const dynamic = "force-static"
export const revalidate = 30

const sampleBlogPosts = [
  {
    _slug: "xu-huong-ai-agents-2024",
    _title: "Xu hướng AI Agents trong năm 2024",
    description: "Khám phá những xu hướng mới nhất trong lĩnh vực AI Agents và cách chúng đang thay đổi cách làm việc.",
    authors: [
      {
        _id: "author1",
        _title: "Nguyễn Văn A",
        image: { url: "/placeholder-user.jpg", alt: "Nguyễn Văn A", width: 40, height: 40 },
      },
    ],
    publishedAt: "2024-01-15",
    categories: ["AI", "Technology"],
    image: {
      light: { url: "/placeholder.jpg", alt: "AI Agents 2024", width: 1200, height: 630, aspectRatio: 1.9 },
      dark: { url: "/placeholder.jpg", alt: "AI Agents 2024", width: 1200, height: 630, aspectRatio: 1.9 },
    },
    body: {
      content: `
        <h2>Giới thiệu về AI Agents</h2>
        <p>AI Agents đang trở thành một trong những công nghệ quan trọng nhất trong năm 2024. Chúng không chỉ đơn thuần là chatbot mà là những trợ lý thông minh có khả năng thực hiện nhiều tác vụ phức tạp.</p>
        
        <h3>Các xu hướng chính</h3>
        <ul>
          <li>Tự động hóa quy trình kinh doanh</li>
          <li>Hỗ trợ khách hàng 24/7</li>
          <li>Phân tích dữ liệu thông minh</li>
          <li>Tích hợp đa nền tảng</li>
        </ul>
        
        <p>Với sự phát triển mạnh mẽ của công nghệ AI, chúng ta có thể kỳ vọng vào một tương lai nơi AI Agents sẽ trở thành một phần không thể thiếu trong mọi doanh nghiệp.</p>
      `,
    },
  },
]

export const generateStaticParams = async () => {
  return sampleBlogPosts.map((post) => ({
    slug: post._slug,
  }))
}

export const generateMetadata = async ({
  params: _params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata | undefined> => {
  const { slug } = await _params
  const post = sampleBlogPosts.find((p) => p._slug === slug)

  if (!post) return undefined

  return {
    title: post._title,
    description: post.description,
    openGraph: {
      images: [{ url: post.image.light.url }],
      type: "article",
    },
    twitter: {
      images: [post.image.light.url],
      card: "summary_large_image",
    },
  }
}

export default async function BlogPage({ params: _params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await _params
  const blogpost = sampleBlogPosts.find((p) => p._slug === slug)

  if (!blogpost) return notFound()

  return (
    <>
      <PageView />
      <Section>
        <Heading subtitle={blogpost.description}>
          <h1>{blogpost._title}</h1>
        </Heading>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex max-w-screen-lg items-center justify-center gap-12 text-base">
            {blogpost.authors.map((author) => (
              <figure key={author._id} className="flex items-center gap-2">
                <Avatar key={author._id} {...author.image} alt="" className="!size-11" />
                {author._title}
              </figure>
            ))}
          </div>
          <div className="flex divide-x divide-border text-sm font-normal text-muted-foreground">
            <p className="pr-2">{formatDate(blogpost.publishedAt)}</p>
            <span className="pl-2">
              {blogpost.categories.map((category) => (
                <span key={category} className="mr-1 capitalize">
                  {category}
                </span>
              ))}
            </span>
          </div>
        </div>
      </Section>
      <div className="w-full">
        <img
          src={blogpost.image.light.url || "/placeholder.svg"}
          alt={blogpost.image.light.alt}
          className="h-full max-h-[720px] w-full object-cover"
          style={{ aspectRatio: blogpost.image.light.aspectRatio }}
        />
      </div>
      <Section>
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: blogpost.body.content }} />
        </div>
      </Section>
    </>
  )
}
