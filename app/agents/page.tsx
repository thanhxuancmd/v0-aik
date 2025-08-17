"use client"

import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExternalLink, Github, Users, Star } from "lucide-react"

interface Agent {
  id: number
  name: string
  description: string
  category: string
  image_url: string
  demo_url: string
  github_url: string
  author_name: string
  author_avatar: string
  tags: string[]
  pricing: string
  source_type: string
  users_count: number
  autonomy: number
  popularity: number
  featured: boolean
}

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {agent.image_url && (
              <img
                src={agent.image_url || "/placeholder.svg"}
                alt={agent.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
            )}
            <div>
              <CardTitle className="text-lg">{agent.name}</CardTitle>
              <CardDescription className="text-sm">{agent.category}</CardDescription>
            </div>
          </div>
          {agent.featured && (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              <Star className="w-3 h-3 mr-1" />
              Nổi bật
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-gray-600 mb-4 flex-1">{agent.description}</p>

        <div className="space-y-3">
          {/* Tags */}
          {agent.tags && agent.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {agent.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {agent.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{agent.tags.length - 3}
                </Badge>
              )}
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {agent.users_count?.toLocaleString() || 0}
            </div>
            <Badge variant="outline">{agent.pricing}</Badge>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            {agent.demo_url && (
              <Button size="sm" className="flex-1" asChild>
                <a href={agent.demo_url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Demo
                </a>
              </Button>
            )}
            {agent.github_url && (
              <Button size="sm" variant="outline" asChild>
                <a href={agent.github_url} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function AgentsPageContent() {
  const searchParams = useSearchParams()
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Initialize state from URL parameters
  const [category, setCategory] = useState(searchParams.get("category") || "all")
  const [search, setSearch] = useState(searchParams.get("search") || "")
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "popular")
  const [pricing, setPricing] = useState(searchParams.get("pricing") || "all")

  const fetchAgents = async () => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams({
        category,
        search,
        sortBy,
        pricing,
        limit: "50",
      })

      const response = await fetch(`/api/agents?${params}`)
      if (!response.ok) {
        throw new Error("Failed to fetch agents")
      }

      const data = await response.json()
      setAgents(data.agents || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      console.error("Error fetching agents:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAgents()
  }, [category, search, sortBy, pricing])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Thư viện AI Agents</h1>
        <p className="text-gray-600">Khám phá và tìm kiếm các AI Agent tốt nhất</p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Tìm kiếm agents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="md:max-w-xs"
          />

          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="md:max-w-xs">
              <SelectValue placeholder="Chọn danh mục" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả danh mục</SelectItem>
              <SelectItem value="productivity">Năng suất</SelectItem>
              <SelectItem value="creative">Sáng tạo</SelectItem>
              <SelectItem value="business">Kinh doanh</SelectItem>
              <SelectItem value="development">Phát triển</SelectItem>
              <SelectItem value="research">Nghiên cứu</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="md:max-w-xs">
              <SelectValue placeholder="Sắp xếp theo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Phổ biến nhất</SelectItem>
              <SelectItem value="newest">Mới nhất</SelectItem>
              <SelectItem value="users">Nhiều người dùng</SelectItem>
              <SelectItem value="name">Tên A-Z</SelectItem>
            </SelectContent>
          </Select>

          <Select value={pricing} onValueChange={setPricing}>
            <SelectTrigger className="md:max-w-xs">
              <SelectValue placeholder="Giá cả" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="free">Miễn phí</SelectItem>
              <SelectItem value="freemium">Freemium</SelectItem>
              <SelectItem value="paid">Trả phí</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Content */}
      {loading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Đang tải agents...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">Lỗi: {error}</p>
          <Button onClick={fetchAgents}>Thử lại</Button>
        </div>
      )}

      {!loading && !error && agents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">Không tìm thấy agents nào phù hợp với bộ lọc của bạn.</p>
        </div>
      )}

      {!loading && !error && agents.length > 0 && (
        <>
          <div className="mb-4">
            <p className="text-sm text-gray-600">Tìm thấy {agents.length} agents</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function AgentsPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <AgentsPageContent />
    </Suspense>
  )
}
