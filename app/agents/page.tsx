"use client"

import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExternalLink, Github, Users, Star, Search, Filter } from "lucide-react"

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
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10" />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {agent.image_url && (
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-2 overflow-hidden">
                <img
                  src={agent.image_url || "/placeholder.svg"}
                  alt={agent.name}
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold text-white">{agent.name}</h3>
              <p className="text-sm text-gray-400">{agent.category}</p>
            </div>
          </div>
          {agent.featured && (
            <div className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs flex items-center gap-1">
              <Star className="w-3 h-3" />
              Nổi bật
            </div>
          )}
        </div>

        <p className="text-sm text-gray-300 mb-4 flex-1 line-clamp-3">{agent.description}</p>

        {agent.tags && agent.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {agent.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="bg-white/10 text-gray-300 px-2 py-1 rounded-lg text-xs border border-white/20"
              >
                {tag}
              </span>
            ))}
            {agent.tags.length > 3 && (
              <span className="bg-white/10 text-gray-300 px-2 py-1 rounded-lg text-xs border border-white/20">
                +{agent.tags.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center gap-1 text-gray-400">
            <Users className="w-4 h-4" />
            <span>{agent.users_count?.toLocaleString() || 0}</span>
          </div>
          <div className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-lg text-xs border border-emerald-500/30">
            {agent.pricing}
          </div>
        </div>

        <div className="flex gap-2">
          {agent.demo_url && (
            <Button
              size="sm"
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl border-0"
              asChild
            >
              <a href={agent.demo_url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" />
                Demo
              </a>
            </Button>
          )}
          {agent.github_url && (
            <Button
              size="sm"
              className="bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20"
              asChild
            >
              <a href={agent.github_url} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

function AgentsPageContent() {
  const searchParams = useSearchParams()
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Thư viện{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              AI Agents
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Khám phá và tìm kiếm các AI Agent tốt nhất từ cộng đồng developer toàn cầu
          </p>
        </div>

        <div className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <div className="relative group max-w-2xl mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2">
                  <Search className="w-6 h-6 text-gray-400 ml-4" />
                  <Input
                    placeholder="Tìm kiếm AI agents, chatbots, automation tools..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-transparent border-0 text-white placeholder-gray-400 text-lg px-4 focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-gray-400">
                <Filter className="w-4 h-4" />
                <span className="text-sm">Bộ lọc:</span>
              </div>

              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="md:max-w-xs bg-white/5 backdrop-blur-sm border-white/10 text-white rounded-xl">
                  <SelectValue placeholder="Chọn danh mục" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/10">
                  <SelectItem value="all">Tất cả danh mục</SelectItem>
                  <SelectItem value="productivity">Năng suất</SelectItem>
                  <SelectItem value="creative">Sáng tạo</SelectItem>
                  <SelectItem value="business">Kinh doanh</SelectItem>
                  <SelectItem value="development">Phát triển</SelectItem>
                  <SelectItem value="research">Nghiên cứu</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="md:max-w-xs bg-white/5 backdrop-blur-sm border-white/10 text-white rounded-xl">
                  <SelectValue placeholder="Sắp xếp theo" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/10">
                  <SelectItem value="popular">Phổ biến nhất</SelectItem>
                  <SelectItem value="newest">Mới nhất</SelectItem>
                  <SelectItem value="users">Nhiều người dùng</SelectItem>
                  <SelectItem value="name">Tên A-Z</SelectItem>
                </SelectContent>
              </Select>

              <Select value={pricing} onValueChange={setPricing}>
                <SelectTrigger className="md:max-w-xs bg-white/5 backdrop-blur-sm border-white/10 text-white rounded-xl">
                  <SelectValue placeholder="Giá cả" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/10">
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="free">Miễn phí</SelectItem>
                  <SelectItem value="freemium">Freemium</SelectItem>
                  <SelectItem value="paid">Trả phí</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {loading && (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg">Đang tải agents...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-red-400 mb-4">Lỗi: {error}</p>
              <Button onClick={fetchAgents} className="bg-red-600 hover:bg-red-700 rounded-xl">
                Thử lại
              </Button>
            </div>
          </div>
        )}

        {!loading && !error && agents.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-gray-400">Không tìm thấy agents nào phù hợp với bộ lọc của bạn.</p>
            </div>
          </div>
        )}

        {!loading && !error && agents.length > 0 && (
          <>
            <div className="mb-8 text-center">
              <p className="text-gray-400">
                Tìm thấy <span className="text-white font-semibold">{agents.length}</span> agents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          </>
        )}
      </div>
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
