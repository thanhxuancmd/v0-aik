"use client"

import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576L12 2z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const StarIcon = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
)

const FilterIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
    />
  </svg>
)

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
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {agent.image_url && (
              <div className="w-14 h-14 rounded-xl bg-gray-100 border border-gray-200 p-2 overflow-hidden">
                <img
                  src={agent.image_url || "/placeholder.svg"}
                  alt={agent.name}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{agent.name}</h3>
              <p className="text-sm text-gray-600">{agent.category}</p>
            </div>
          </div>
          {agent.featured && (
            <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs flex items-center gap-1">
              <StarIcon />
              Nổi bật
            </div>
          )}
        </div>

        <p className="text-sm text-gray-700 mb-4 flex-1 line-clamp-3">{agent.description}</p>

        {agent.tags && agent.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {agent.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs border border-gray-200"
              >
                {tag}
              </span>
            ))}
            {agent.tags.length > 3 && (
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs border border-gray-200">
                +{agent.tags.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center gap-1 text-gray-600">
            <UsersIcon />
            <span>{agent.users_count?.toLocaleString() || 0}</span>
          </div>
          <div className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-xs border border-green-200">
            {agent.pricing}
          </div>
        </div>

        <div className="flex gap-2">
          {agent.demo_url && (
            <Button size="sm" className="flex-1 bg-black hover:bg-gray-800 text-white rounded-xl" asChild>
              <a href={agent.demo_url} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon />
                <span className="ml-1">Demo</span>
              </a>
            </Button>
          )}
          {agent.github_url && (
            <Button
              size="sm"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl border border-gray-200"
              asChild
            >
              <a href={agent.github_url} target="_blank" rel="noopener noreferrer">
                <GithubIcon />
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
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Thư viện <span className="text-black">AI Agents</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Khám phá và tìm kiếm các AI Agent tốt nhất từ cộng đồng developer toàn cầu
          </p>
        </div>

        <div className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <div className="relative group max-w-2xl mx-auto">
                <div className="relative flex items-center bg-white border-2 border-gray-200 rounded-2xl p-2 focus-within:border-black transition-colors">
                  <SearchIcon />
                  <Input
                    placeholder="Tìm kiếm AI agents, chatbots, automation tools..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-transparent border-0 text-gray-900 placeholder-gray-500 text-lg px-4 focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-gray-600">
                <FilterIcon />
                <span className="text-sm">Bộ lọc:</span>
              </div>

              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="md:max-w-xs bg-white border-gray-200 text-gray-900 rounded-xl">
                  <SelectValue placeholder="Chọn danh mục" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="all">Tất cả danh mục</SelectItem>
                  <SelectItem value="productivity">Năng suất</SelectItem>
                  <SelectItem value="creative">Sáng tạo</SelectItem>
                  <SelectItem value="business">Kinh doanh</SelectItem>
                  <SelectItem value="development">Phát triển</SelectItem>
                  <SelectItem value="research">Nghiên cứu</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="md:max-w-xs bg-white border-gray-200 text-gray-900 rounded-xl">
                  <SelectValue placeholder="Sắp xếp theo" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="popular">Phổ biến nhất</SelectItem>
                  <SelectItem value="newest">Mới nhất</SelectItem>
                  <SelectItem value="users">Nhiều người dùng</SelectItem>
                  <SelectItem value="name">Tên A-Z</SelectItem>
                </SelectContent>
              </Select>

              <Select value={pricing} onValueChange={setPricing}>
                <SelectTrigger className="md:max-w-xs bg-white border-gray-200 text-gray-900 rounded-xl">
                  <SelectValue placeholder="Giá cả" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
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
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Đang tải agents...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-red-600 mb-4">Lỗi: {error}</p>
              <Button onClick={fetchAgents} className="bg-red-600 hover:bg-red-700 text-white rounded-xl">
                Thử lại
              </Button>
            </div>
          </div>
        )}

        {!loading && !error && agents.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-gray-600">Không tìm thấy agents nào phù hợp với bộ lọc của bạn.</p>
            </div>
          </div>
        )}

        {!loading && !error && agents.length > 0 && (
          <>
            <div className="mb-8 text-center">
              <p className="text-gray-600">
                Tìm thấy <span className="text-gray-900 font-semibold">{agents.length}</span> agents
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
