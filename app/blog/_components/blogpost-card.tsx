import Link from "next/link"
import { Badge } from "@/components/ui/badge"
const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
)

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface BlogpostCardProps {
  _id: string
  _title: string
  _slug: string
  excerpt: string
  publishedAt: string
  author: {
    _id: string
    _title: string
    image: { url: string }
  }
  tags: string[]
  image: { url: string }
  type?: "card" | "list"
  className?: string
}

export function BlogpostCard({
  _id,
  _title,
  _slug,
  excerpt,
  publishedAt,
  author,
  tags,
  image,
  type = "list",
  className = "",
}: BlogpostCardProps) {
  const isCard = type === "card"

  return (
    <Link href={`/blog/${_slug}`} className="block group">
      <div
        className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:scale-[1.02] hover:bg-white/10 transition-all duration-300 overflow-hidden ${className} ${
          isCard ? "h-full" : "flex flex-col md:flex-row"
        }`}
      >
        {isCard ? (
          <>
            {/* Card Layout */}
            <div className="relative overflow-hidden">
              <img
                src={image.url || "/placeholder.svg?height=300&width=600&query=blog post"}
                alt={_title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            <div className="p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    className="rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-200 hover:bg-purple-600/30 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                {_title}
              </h3>

              {/* Excerpt */}
              <p className="text-white/70 mb-6 line-clamp-3 leading-relaxed">{excerpt}</p>

              {/* Author and Date */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8 border border-white/20">
                    <AvatarImage src={author.image.url || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm">
                      {author._title[0]}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-white/60">{author._title}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Calendar className="h-4 w-4" />
                  {new Date(publishedAt).toLocaleDateString("vi-VN")}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* List Layout */}
            <div className="md:w-80 md:flex-shrink-0">
              <img
                src={image.url || "/placeholder.svg?height=200&width=400&query=blog post"}
                alt={_title}
                className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="flex-1 p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.slice(0, 2).map((tag) => (
                  <Badge
                    key={tag}
                    className="rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 text-blue-200 hover:bg-blue-600/30 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                {_title}
              </h3>

              {/* Excerpt */}
              <p className="text-white/70 mb-6 line-clamp-2 leading-relaxed">{excerpt}</p>

              {/* Author, Date and Arrow */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 border border-white/20">
                      <AvatarImage src={author.image.url || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm">
                        {author._title[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-white/60">{author._title}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <Calendar className="h-4 w-4" />
                    {new Date(publishedAt).toLocaleDateString("vi-VN")}
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  )
}

// Export fragment for compatibility
export const blogpostCardFragment = {
  _id: true,
  _title: true,
  _slug: true,
  excerpt: true,
  publishedAt: true,
  author: {
    _id: true,
    _title: true,
    image: { url: true },
  },
  tags: true,
  image: { url: true },
}
