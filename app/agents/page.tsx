"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import {
  Search,
  Grid3X3,
  List,
  Users,
  Calendar,
  Sparkles,
  MessageSquare,
  PenTool,
  BarChart3,
  Zap,
  Brain,
  Code,
  Palette,
  Music,
  Video,
  ShoppingCart,
  Briefcase,
  ArrowRight,
  ExternalLink,
  Github,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { useAgents } from "@/hooks/use-agents"
import { useCategories } from "@/hooks/use-categories"
import type { Agent } from "@/lib/types/agent"

const iconMap: Record<string, any> = {
  Grid3X3,
  Code,
  Brain,
  Zap,
  PenTool,
  MessageSquare,
  BarChart3,
  Palette,
  Music,
  Video,
  ShoppingCart,
  Briefcase,
}

export default function AgentsPage() {
  const searchParams = useSearchParams()
  
  // Initialize state from URL search parameters
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "")
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all")
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "popular")
  const [viewMode, setViewMode] = useState<"grid" | "list">((searchParams.get("view") as "grid" | "list") || "grid")
  const [pricingFilter, setPricingFilter] = useState(searchParams.get("pricing") || "all")
  const [sourceTypeFilter, setSourceTypeFilter] = useState(searchParams.get("source") || "all")

  const { categories, loading: categoriesLoading } = useCategories()
  const {
    data: agentsData,
    loading: agentsLoading,
    error,
  } = useAgents({
    category: selectedCategory,
    search: searchQuery,
    sortBy,
    pricing: pricingFilter,
    sourceType: sourceTypeFilter,
    limit: 50,
  })

  const selectedCategoryData = categories.find((cat) => cat.slug === selectedCategory)

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k"
    }
    return num.toString()
  }

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("vi-VN")
  }

  const getPricingBadge = (pricing: string) => {
    switch (pricing) {
      case "free":
        return <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Miễn phí</Badge>
      case "paid":
        return <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Trả phí</Badge>
      case "freemium":
        return <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Freemium</Badge>
      default:
        return null
    }
  }

  const getSourceBadge = (sourceType: string) => {
    switch (sourceType) {
      case "open-source":
        return (
          <Badge variant="outline" className="border-white/20 text-white">
            Open Source
          </Badge>
        )
      case "closed-source":
        return (
          <Badge variant="outline" className="border-white/20 text-gray-300">
            Closed Source
          </Badge>
        )
      default:
        return null
    }
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Có lỗi xảy ra</h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <Button onClick={() => window.location.reload()}>Thử lại</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(156,146,172,0.1)_1px,transparent_1px)] bg-[length:60px_60px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-purple-400" />
              <Badge variant="secondary" className="text-sm font-medium bg-white/10 text-white border-white/20">
                {agentsData?.total || 0} Agents
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
              {selectedCategory === "all" ? "Khám phá AI Agents" : `${selectedCategoryData?.name} Agents`}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {selectedCategory === "all"
                ? "Tìm kiếm và khám phá các AI Agents chất lượng cao từ cộng đồng toàn cầu để tối ưu hóa công việc và sáng tạo của bạn."
                : `Khám phá các AI Agents chuyên về ${selectedCategoryData?.name.toLowerCase()} được tuyển chọn kỹ lưỡng.`}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Tìm kiếm agents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>

            {/* Pricing Filter */}
            <Select value={pricingFilter} onValueChange={setPricingFilter}>
              <SelectTrigger className="w-full lg:w-40 h-12 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Giá" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="all" className="text-white hover:bg-gray-800">
                  Tất cả
                </SelectItem>
                <SelectItem value="free" className="text-white hover:bg-gray-800">
                  Miễn phí
                </SelectItem>
                <SelectItem value="paid" className="text-white hover:bg-gray-800">
                  Trả phí
                </SelectItem>
                <SelectItem value="freemium" className="text-white hover:bg-gray-800">
                  Freemium
                </SelectItem>
              </SelectContent>
            </Select>

            {/* Source Type Filter */}
            <Select value={sourceTypeFilter} onValueChange={setSourceTypeFilter}>
              <SelectTrigger className="w-full lg:w-48 h-12 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Loại mã nguồn" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="all" className="text-white hover:bg-gray-800">
                  Tất cả
                </SelectItem>
                <SelectItem value="open-source" className="text-white hover:bg-gray-800">
                  Open Source
                </SelectItem>
                <SelectItem value="closed-source" className="text-white hover:bg-gray-800">
                  Closed Source
                </SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48 h-12 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Sắp xếp theo" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="popular" className="text-white hover:bg-gray-800">
                  Phổ biến nhất
                </SelectItem>
                <SelectItem value="autonomy" className="text-white hover:bg-gray-800">
                  Độ tự động
                </SelectItem>
                <SelectItem value="users" className="text-white hover:bg-gray-800">
                  Nhiều người dùng
                </SelectItem>
                <SelectItem value="newest" className="text-white hover:bg-gray-800">
                  Mới nhất
                </SelectItem>
                <SelectItem value="name" className="text-white hover:bg-gray-800">
                  Tên A-Z
                </SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex bg-white/10 rounded-lg p-1 border border-white/20">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`h-10 ${viewMode === "grid" ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : "text-white hover:bg-white/20"}`}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={`h-10 ${viewMode === "list" ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : "text-white hover:bg-white/20"}`}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Categories */}
          {!categoriesLoading && (
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => {
                const IconComponent = iconMap[category.icon] || Grid3X3
                return (
                  <Button
                    key={category.slug}
                    variant={selectedCategory === category.slug ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`h-10 ${
                      selectedCategory === category.slug
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0"
                        : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                    }`}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {category.name}
                    <Badge variant="secondary" className="ml-2 text-xs bg-white/20 text-white border-0">
                      {category.agent_count}
                    </Badge>
                  </Button>
                )
              })}
            </div>
          )}

          {/* Results Summary */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>
              Hiển thị {agentsData?.agents.length || 0} kết quả
              {searchQuery && ` cho "${searchQuery}"`}
            </span>
          </div>
        </div>

        {/* Loading State */}
        {agentsLoading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
            <span className="ml-2 text-gray-400">Đang tải...</span>
          </div>
        )}

        {/* Agents Grid/List */}
        {!agentsLoading && agentsData && agentsData.agents.length > 0 ? (
          <div
            className={
              viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"
            }
          >
            {agentsData.agents.map((agent: Agent) => (
              <Card
                key={agent.id}
                className={`group hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20 hover:border-purple-400 hover:bg-white/15 relative ${
                  viewMode === "list" ? "flex flex-row" : ""
                }`}
              >
                {agent.featured && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Nổi bật
                    </Badge>
                  </div>
                )}

                <div className={viewMode === "list" ? "w-48 flex-shrink-0" : ""}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={
                        agent.image_url ||
                        `/placeholder.svg?height=200&width=300&text=${encodeURIComponent(agent.name)}`
                      }
                      alt={agent.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    {/* Badges overlay */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {getSourceBadge(agent.source_type)}
                      {getPricingBadge(agent.pricing)}
                    </div>
                  </div>
                </div>

                <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="font-semibold text-lg text-white group-hover:text-purple-300 transition-colors">
                      {agent.name}
                    </CardTitle>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{agent.description}</p>

                  {/* Progress Indicators */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                        <span>Phổ biến</span>
                        <span>{agent.popularity}%</span>
                      </div>
                      <Progress value={agent.popularity} className="h-2 bg-white/10" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                        <span>Tự động</span>
                        <span>{agent.autonomy}%</span>
                      </div>
                      <Progress value={agent.autonomy} className="h-2 bg-white/10" />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {agent.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-white/20 text-gray-300 border-0">
                        {tag}
                      </Badge>
                    ))}
                    {agent.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-white/20 text-gray-300 border-0">
                        +{agent.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {formatNumber(agent.users_count)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(agent.updated_at)}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-2 mb-4">
                    <Avatar className="h-6 w-6">
                      <AvatarImage
                        src={agent.author_avatar || `/placeholder.svg?height=24&width=24&text=${agent.author_name[0]}`}
                      />
                      <AvatarFallback className="bg-white/20 text-white text-xs">{agent.author_name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-gray-400">{agent.author_name}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {agent.github_url && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs border-white/20 text-white hover:bg-white/20 bg-transparent"
                          asChild
                        >
                          <a href={agent.github_url} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </a>
                        </Button>
                      )}
                      {agent.demo_url && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs border-white/20 text-white hover:bg-white/20 bg-transparent"
                          asChild
                        >
                          <a href={agent.demo_url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                    <Button
                      size="sm"
                      className="text-xs bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                    >
                      Chi tiết
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          !agentsLoading && (
            /* Empty State */
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Không tìm thấy agents</h3>
              <p className="text-gray-400 mb-6">
                Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc để tìm thấy agents phù hợp.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                  setPricingFilter("all")
                  setSourceTypeFilter("all")
                }}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/20"
              >
                Xóa bộ lọc
              </Button>
            </div>
          )
        )}

        {/* Load More */}
        {agentsData && agentsData.hasMore && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              Tải thêm agents
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </section>
    </div>
  )
}
