import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
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
    <Link href={`/blog/${_slug}`}>
      <Card
        className={`group hover:shadow-lg transition-all duration-300 ${className} ${isCard ? "h-full" : "flex flex-row"}`}
      >
        {isCard ? (
          <>
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={image.url || "/placeholder.jpg"}
                alt={_title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="group-hover:text-blue-600 transition-colors">{_title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={author.image.url || "/placeholder.svg"} />
                    <AvatarFallback>{author._title[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-500">{author._title}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  {new Date(publishedAt).toLocaleDateString("vi-VN")}
                </div>
              </div>
            </CardContent>
          </>
        ) : (
          <>
            <div className="w-48 flex-shrink-0">
              <img
                src={image.url || "/placeholder.jpg"}
                alt={_title}
                className="w-full h-32 object-cover rounded-l-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors mb-2">{_title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={author.image.url || "/placeholder.svg"} />
                    <AvatarFallback>{author._title[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-500">{author._title}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {new Date(publishedAt).toLocaleDateString("vi-VN")}
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </div>
          </>
        )}
      </Card>
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
