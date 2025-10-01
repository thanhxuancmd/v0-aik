"use client"

import { useState } from "react"
import { Search, Grid, List, Filter, X, ExternalLink, Github, Play, Star, Users, Zap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { useAgents } from "@/hooks/use-agents"
import { useCategories } from "@/hooks/use-categories"
import type { Agent } from "@/lib/types/agent"

export default function AgentsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const { agents, loading, error, pagination, filters, updateFilters, resetFilters, loadMore, refetch } = useAgents()
  const { categories, loading: categoriesLoading } = useCategories()

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case "free":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "freemium":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "paid":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getSourceTypeColor = (sourceType: string) => {
    switch (sourceType) {
      case "open_source":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "closed_source":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "api":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getPricingLabel = (pricing: string) => {
    switch (pricing) {
      case "free":
        return "Miễn phí"
      case "freemium":
        return "Freemium"
      case "paid":
        return "Trả phí"
      default:
        return pricing
    }
  }

  const getSourceTypeLabel = (sourceType: string) => {
    switch (sourceType) {
      case "open_source":
        return "Mã nguồn mở"
      case "closed_source":
        return "Mã nguồn đóng"
      case "api":
        return "API"
      default:
        return sourceType
    }
  }

  const getSortLabel = (sortBy: string) => {
    switch (sortBy) {
      case "popularity":
        return "Độ phổ biến"
      case "autonomy":
        return "Tính tự chủ"
      case "users_count":
        return "Số người dùng"
      case "rating":
        return "Đánh giá"
      case "name":
        return "Tên"
      case "created_at":
        return "Ngày tạo"
      default:
        return sortBy
    }
  }

  const hasActiveFilters =
    filters.search || filters.category !== "all" || filters.pricing !== "all" || filters.sourceType !== "all"

  const AgentCard = ({ agent }: { agent: Agent }) => (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              {agent.name.charAt(0)}
            </div>
            <div>
              <CardTitle className="text-lg leading-tight">{agent.name}</CardTitle>
              <div className="flex items-center space-x-2 mt-1">
                <Badge className={getPricingColor(agent.pricing)}>{getPricingLabel(agent.pricing)}</Badge>
                <Badge className={getSourceTypeColor(agent.source_type)}>{getSourceTypeLabel(agent.source_type)}</Badge>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-sm line-clamp-3">{agent.description}</CardDescription>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              <span>Độ phổ biến</span>
            </div>
            <span className="font-medium">{agent.popularity}%</span>
          </div>
          <Progress value={agent.popularity} className="h-2" />

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <Zap className="w-4 h-4 text-purple-500" />
              <span>Tính tự chủ</span>
            </div>
            <span className="font-medium">{agent.autonomy}%</span>
          </div>
          <Progress value={agent.autonomy} className="h-2" />
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{formatNumber(agent.users_count)} người dùng</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{agent.rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 pt-2">
          {agent.website_url && (
            <Button size="sm" variant="outline" asChild>
              <a href={agent.website_url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" />
                Website
              </a>
            </Button>
          )}
          {agent.github_url && (
            <Button size="sm" variant="outline" asChild>
              <a href={agent.github_url} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-1" />
                GitHub
              </a>
            </Button>
          )}
          {agent.demo_url && (
            <Button size="sm" variant="outline" asChild>
              <a href={agent.demo_url} target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4 mr-1" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )

  const AgentListItem = ({ agent }: { agent: Agent }) => (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            {agent.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>
                <p className="text-muted-foreground mb-3 line-clamp-2">{agent.description}</p>
                <div className="flex items-center space-x-3 mb-4">
                  <Badge className={getPricingColor(agent.pricing)}>{getPricingLabel(agent.pricing)}</Badge>
                  <Badge className={getSourceTypeColor(agent.source_type)}>
                    {getSourceTypeLabel(agent.source_type)}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                {agent.website_url && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={agent.website_url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Website
                    </a>
                  </Button>
                )}
                {agent.github_url && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={agent.github_url} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </a>
                  </Button>
                )}
                {agent.demo_url && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={agent.demo_url} target="_blank" rel="noopener noreferrer">
                      <Play className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span>Độ phổ biến</span>
                  </span>
                  <span className="font-medium">{agent.popularity}%</span>
                </div>
                <Progress value={agent.popularity} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center space-x-1">
                    <Zap className="w-4 h-4 text-purple-500" />
                    <span>Tính tự chủ</span>
                  </span>
                  <span className="font-medium">{agent.autonomy}%</span>
                </div>
                <Progress value={agent.autonomy} className="h-2" />
              </div>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{formatNumber(agent.users_count)} người dùng</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{agent.rating.toFixed(1)} đánh giá</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Lỗi tải dữ liệu</h1>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={refetch}>Thử lại</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">AI Agents</h1>
        <p className="text-xl text-muted-foreground">
          Khám phá {pagination.total} AI agents mạnh mẽ cho mọi nhu cầu của bạn
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Tìm kiếm AI agents..."
              value={filters.search}
              onChange={(e) => updateFilters({ search: e.target.value })}
              className="pl-10"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={filters.category} onValueChange={(value) => updateFilters({ category: value })}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Danh mục" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả danh mục</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.slug} value={category.slug}>
                    {category.icon} {category.name} ({category.agent_count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.pricing} onValueChange={(value) => updateFilters({ pricing: value })}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Giá" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="free">Miễn phí</SelectItem>
                <SelectItem value="freemium">Freemium</SelectItem>
                <SelectItem value="paid">Trả phí</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.sourceType} onValueChange={(value) => updateFilters({ sourceType: value })}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Loại mã nguồn" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="open_source">Mã nguồn mở</SelectItem>
                <SelectItem value="closed_source">Mã nguồn đóng</SelectItem>
                <SelectItem value="api">API</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Sắp xếp:</span>
              <Select value={filters.sortBy} onValueChange={(value) => updateFilters({ sortBy: value })}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder={getSortLabel(filters.sortBy)} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Độ phổ biến</SelectItem>
                  <SelectItem value="autonomy">Tính tự chủ</SelectItem>
                  <SelectItem value="users_count">Số người dùng</SelectItem>
                  <SelectItem value="rating">Đánh giá</SelectItem>
                  <SelectItem value="name">Tên</SelectItem>
                  <SelectItem value="created_at">Ngày tạo</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={filters.sortOrder}
                onValueChange={(value) => updateFilters({ sortOrder: value as "asc" | "desc" })}
              >
                <SelectTrigger className="w-32">
                  <SelectValue placeholder={filters.sortOrder === "asc" ? "Tăng dần" : "Giảm dần"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">Giảm dần</SelectItem>
                  <SelectItem value="asc">Tăng dần</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {hasActiveFilters && (
              <Button variant="outline" size="sm" onClick={resetFilters}>
                <X className="w-4 h-4 mr-1" />
                Xóa bộ lọc
              </Button>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results */}
      {loading && agents.length === 0 ? (
        <div
          className={
            viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"
          }
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <Card key={i} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Skeleton className="w-12 h-12 rounded-lg" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <div className="flex space-x-2">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-5 w-20" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-2 w-full" />
                <Skeleton className="h-2 w-full" />
                <div className="flex space-x-2">
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-20" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : agents.length === 0 ? (
        <div className="text-center py-12">
          <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Không tìm thấy AI agents</h3>
          <p className="text-muted-foreground mb-4">Thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm của bạn</p>
          {hasActiveFilters && (
            <Button onClick={resetFilters}>
              <X className="w-4 h-4 mr-1" />
              Xóa tất cả bộ lọc
            </Button>
          )}
        </div>
      ) : (
        <>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {agents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {agents.map((agent) => (
                <AgentListItem key={agent.id} agent={agent} />
              ))}
            </div>
          )}

          {pagination.hasMore && (
            <div className="text-center mt-8">
              <Button onClick={loadMore} disabled={loading} size="lg">
                {loading ? "Đang tải..." : "Tải thêm"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
