"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react"
import { BlogPostForm } from "@/components/admin/blog-post-form"

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image: string
  author_name: string
  author_avatar: string
  tags: string[]
  categories: string[]
  published: boolean
  featured: boolean
  created_at: string
  updated_at: string
  published_at: string
}

export default function BlogManagement() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/admin/blog")
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error("Error fetching blog posts:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return

    try {
      await fetch(`/api/admin/blog/${id}`, { method: "DELETE" })
      fetchPosts()
    } catch (error) {
      console.error("Error deleting blog post:", error)
    }
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setShowForm(true)
  }

  const handleFormClose = () => {
    setShowForm(false)
    setEditingPost(null)
    fetchPosts()
  }

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600 mt-2">Create and manage your blog posts</p>
        </div>
        <Button onClick={() => setShowForm(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          New Post
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    {post.published ? (
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        <Eye className="h-3 w-3 mr-1" />
                        Published
                      </Badge>
                    ) : (
                      <Badge variant="secondary">
                        <EyeOff className="h-3 w-3 mr-1" />
                        Draft
                      </Badge>
                    )}
                    {post.featured && (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-sm text-gray-500">/{post.slug}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags?.slice(0, 4).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {post.tags?.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{post.tags.length - 4}
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-4">
                  <span>Author: {post.author_name}</span>
                  <span>Created: {new Date(post.created_at).toLocaleDateString()}</span>
                  {post.published_at && <span>Published: {new Date(post.published_at).toLocaleDateString()}</span>}
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(post)}>
                  <Edit className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleDelete(post.id)}>
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {posts.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">No blog posts found</div>
          <Button onClick={() => setShowForm(true)}>Create your first blog post</Button>
        </div>
      )}

      {showForm && <BlogPostForm post={editingPost} onClose={handleFormClose} />}
    </div>
  )
}
