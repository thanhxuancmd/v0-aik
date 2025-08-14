import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Tag } from "lucide-react"

interface ChangelogPost {
  _id: string
  _title: string
  _slug: string
  publishedAt: string
  excerpt: string
  content: string
  tags: string[]
}

interface ChangelogListProps {
  changelogPosts: ChangelogPost[]
}

export function ChangelogList({ changelogPosts }: ChangelogListProps) {
  return (
    <div className="space-y-8">
      {changelogPosts.map((post) => (
        <Card key={post._id} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">{post._title}</CardTitle>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <div className="prose dark:prose-invert max-w-none">
              <p>{post.content}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
