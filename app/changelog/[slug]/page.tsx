import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"
import { Heading } from "../../../common/heading"
import { ButtonLink } from "../../../common/button"
import { AvatarsGroup } from "../../../common/avatars-group"
import { Author } from "../../../common/avatar"
import { formatDate } from "../../_utils/dates"
import { PageView } from "../../../components/page-view"

export const dynamic = "force-static"
export const revalidate = 30

interface ChangelogPageParams {
  params: Promise<{
    slug: string
  }>
}

const sampleChangelogPosts = [
  {
    _slug: "ai-agents-update-v2",
    _title: "AI Agents Platform Update v2.0",
    excerpt: "Cập nhật lớn với nhiều tính năng mới cho nền tảng AI Agents",
    publishedAt: "2024-01-15",
    authors: [
      {
        _id: "author1",
        _title: "Nguyễn Văn A",
        image: { url: "/placeholder-user.jpg", alt: "Nguyễn Văn A", width: 40, height: 40 },
      },
    ],
    image: {
      url: "/placeholder.jpg",
      alt: "AI Agents Update",
      width: 1200,
      height: 630,
      aspectRatio: 1.9,
    },
    body: {
      content: `
        <h2>Tính năng mới</h2>
        <p>Phiên bản 2.0 mang đến nhiều cải tiến quan trọng cho nền tảng AI Agents của chúng tôi.</p>
        <ul>
          <li>Giao diện người dùng được thiết kế lại hoàn toàn</li>
          <li>Tăng tốc độ xử lý lên 50%</li>
          <li>Hỗ trợ thêm 10 ngôn ngữ mới</li>
          <li>Tích hợp API mới cho developers</li>
        </ul>
      `,
    },
  },
]

const socialLinks = [
  { _id: "twitter", _title: "Twitter", url: "https://twitter.com", icon: { url: "/twitter-icon.svg" } },
  { _id: "facebook", _title: "Facebook", url: "https://facebook.com", icon: { url: "/facebook-icon.svg" } },
]

export const generateStaticParams = async () => {
  return sampleChangelogPosts.map((post) => ({
    slug: post._slug,
  }))
}

export const generateMetadata = async ({ params: _params }: ChangelogPageParams): Promise<Metadata | undefined> => {
  const params = await _params
  const post = sampleChangelogPosts.find((p) => p._slug === params.slug)

  if (!post) return undefined

  return {
    title: post._title,
    description: post.excerpt,
    openGraph: {
      images: [{ url: post.image.url }],
    },
    twitter: {
      images: [post.image.url],
      card: "summary_large_image",
    },
  }
}

export default async function ChangelogPage({ params: _params }: ChangelogPageParams) {
  const params = await _params
  const post = sampleChangelogPosts.find((p) => p._slug === params.slug)

  if (!post) return notFound()

  const postIndex = sampleChangelogPosts.findIndex((p) => p._slug === post._slug)
  const nextPost = sampleChangelogPosts[postIndex + 1] ?? sampleChangelogPosts[0]

  return (
    <>
      <PageView />
      <div className="flex items-center justify-between border-b border-border dark:border-dark-border">
        <div className="mx-auto flex w-full max-w-screen-md flex-col items-start justify-between gap-4 border-r border-border px-8 py-24 dark:border-dark-border md:flex-row md:items-center">
          <div className="flex flex-col gap-1">
            <Link
              className="flex w-max items-center gap-1 text-sm text-muted-foreground hover:underline md:text-sm"
              href={`/changelog#${post._slug}`}
            >
              <ArrowLeftIcon /> Quay lại changelog
            </Link>
            <Heading align="left">
              <h1>{post._title}</h1>
            </Heading>
            <p className="text-sm text-muted-foreground md:text-base">{formatDate(post.publishedAt)}</p>
          </div>
          <div className="flex items-center gap-2 md:flex-col">
            <p className="text-sm text-muted-foreground">Chia sẻ</p>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <Link key={link._id} className="aspect-square hover:brightness-90" href={link.url} target="_blank">
                  <img src={link.icon?.url ?? "/placeholder.svg"} alt={link._title} height={18} width={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-screen-md flex-col gap-8 px-8 pb-20 pt-16">
        <img
          src={post.image.url || "/placeholder.svg"}
          alt={post.image.alt ?? post._title}
          className="h-auto w-full rounded-xl"
          style={{ aspectRatio: post.image.aspectRatio }}
        />
        <p className="text-sm text-muted-foreground md:text-base">{post.excerpt}</p>
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: post.body.content }} />
        </div>
        <div className="flex items-center justify-between">
          {post.authors.length > 1 ? (
            <AvatarsGroup animate>
              {post.authors.map((author) => (
                <Author {...author} key={author._id} />
              ))}
            </AvatarsGroup>
          ) : post.authors[0] ? (
            <div className="flex items-center gap-2">
              <Author {...post.authors[0]} />
              <p className="text-sm text-muted-foreground md:text-base">{post.authors[0]._title}</p>
            </div>
          ) : null}

          {nextPost ? (
            <ButtonLink
              className="text-sm text-muted-foreground hover:underline"
              href={`/changelog/${nextPost._slug}`}
              icon={<ArrowRightIcon />}
              iconSide="right"
              intent="secondary"
            >
              {nextPost._title.slice(0, 35)}
              {nextPost._title.length > 35 ? "..." : ""}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </>
  )
}
