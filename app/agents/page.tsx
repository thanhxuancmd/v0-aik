"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Inline SVG components
const Search = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const Filter = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"
    />
  </svg>
)

const Grid3X3 = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h7v7H3V3zM14 3h7v7h-7V3zM14 14h7v7h-7v-7zM3 14h7v7H3v-7z"
    />
  </svg>
)

const List = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
)

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.81l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
)

const Users = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
)

const Calendar = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const MessageSquare = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

const FileText = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)

const ShoppingCart = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v14a2 2 0 004 4h4a2 2 0 002-2z"
    />
  </svg>
)

const BarChart3 = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h-2a2 2 0 00-2-2z"
    />
  </svg>
)

const Palette = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
    />
  </svg>
)

const Code = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const Zap = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const Brain = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
)

const Headphones = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
    />
  </svg>
)

const Sparkles = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    />
  </svg>
)

// Agent data
const agents = [
  {
    id: 1,
    name: "ContentGenie AI",
    description: "Tạo nội dung marketing chuyên nghiệp với AI. Hỗ trợ blog, social media, email marketing.",
    category: "content",
    price: "₫299,000",
    rating: 4.9,
    users: 2840,
    author: "Marketing Pro",
    updatedAt: "2024-01-15",
    featured: true,
    tags: ["Content", "Marketing", "Blog", "Social Media"],
    image: "/placeholder.svg?height=200&width=300&text=ContentGenie",
  },
  {
    id: 2,
    name: "ChatBot Builder Pro",
    description: "Xây dựng chatbot thông minh cho website và fanpage. Tích hợp AI conversation.",
    category: "chatbots",
    price: "₫450,000",
    rating: 4.8,
    users: 1920,
    author: "Bot Master",
    updatedAt: "2024-01-12",
    featured: false,
    tags: ["Chatbot", "AI", "Customer Service", "Automation"],
    image: "/placeholder.svg?height=200&width=300&text=ChatBot+Builder",
  },
  {
    id: 3,
    name: "E-commerce Assistant",
    description: "AI trợ lý bán hàng online. Tự động trả lời khách hàng, quản lý đơn hàng, phân tích dữ liệu.",
    category: "ecommerce",
    price: "₫680,000",
    rating: 4.7,
    users: 1560,
    author: "Shop AI",
    updatedAt: "2024-01-10",
    featured: true,
    tags: ["E-commerce", "Sales", "Analytics", "Customer Support"],
    image: "/placeholder.svg?height=200&width=300&text=E-commerce+Assistant",
  },
  {
    id: 4,
    name: "Data Analyst Pro",
    description: "Phân tích dữ liệu thông minh với AI. Tạo báo cáo, biểu đồ, insights tự động.",
    category: "analytics",
    price: "₫520,000",
    rating: 4.9,
    users: 980,
    author: "Data Guru",
    updatedAt: "2024-01-08",
    featured: false,
    tags: ["Analytics", "Data Science", "Reports", "Business Intelligence"],
    image: "/placeholder.svg?height=200&width=300&text=Data+Analyst",
  },
  {
    id: 5,
    name: "Design AI Studio",
    description: "Tạo thiết kế đồ họa chuyên nghiệp với AI. Logo, banner, poster, social media graphics.",
    category: "design",
    price: "₫380,000",
    rating: 4.6,
    users: 2100,
    author: "Creative AI",
    updatedAt: "2024-01-14",
    featured: false,
    tags: ["Design", "Graphics", "Logo", "Creative"],
    image: "/placeholder.svg?height=200&width=300&text=Design+Studio",
  },
  {
    id: 6,
    name: "Code Assistant AI",
    description: "Trợ lý lập trình thông minh. Code review, bug detection, optimization suggestions.",
    category: "development",
    price: "₫420,000",
    rating: 4.8,
    users: 1340,
    author: "Dev Master",
    updatedAt: "2024-01-11",
    featured: true,
    tags: ["Development", "Code Review", "Programming", "AI Assistant"],
    image: "/placeholder.svg?height=200&width=300&text=Code+Assistant",
  },
  {
    id: 7,
    name: "Productivity Booster",
    description: "Tăng năng suất làm việc với AI. Quản lý task, lịch trình, email automation.",
    category: "productivity",
    price: "₫350,000",
    rating: 4.7,
    users: 1780,
    author: "Productivity Pro",
    updatedAt: "2024-01-13",
    featured: false,
    tags: ["Productivity", "Task Management", "Automation", "Workflow"],
    image: "/placeholder.svg?height=200&width=300&text=Productivity+Booster",
  },
  {
    id: 8,
    name: "Smart Brain AI",
    description: "AI đa năng cho mọi tác vụ. Từ viết lách, phân tích đến sáng tạo nội dung.",
    category: "smart",
    price: "₫590,000",
    rating: 4.9,
    users: 3200,
    author: "AI Innovator",
    updatedAt: "2024-01-16",
    featured: true,
    tags: ["Multi-purpose", "Smart AI", "Creative", "Analysis"],
    image: "/placeholder.svg?height=200&width=300&text=Smart+Brain",
  },
]

// Categories with icons and counts
const categories = [
  { id: "all", name: "Tất cả", icon: Sparkles, count: agents.length },
  { id: "content", name: "Nội dung", icon: FileText, count: agents.filter((a) => a.category === "content").length },
  {
    id: "chatbots",
    name: "Chatbots",
    icon: MessageSquare,
    count: agents.filter((a) => a.category === "chatbots").length,
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: ShoppingCart,
    count: agents.filter((a) => a.category === "ecommerce").length,
  },
  {
    id: "analytics",
    name: "Phân tích",
    icon: BarChart3,
    count: agents.filter((a) => a.category === "analytics").length,
  },
  { id: "design", name: "Thiết kế", icon: Palette, count: agents.filter((a) => a.category === "design").length },
  {
    id: "development",
    name: "Lập trình",
    icon: Code,
    count: agents.filter((a) => a.category === "development").length,
  },
  {
    id: "productivity",
    name: "Năng suất",
    icon: Zap,
    count: agents.filter((a) => a.category === "productivity").length,
  },
  { id: "smart", name: "AI Smart", icon: Brain, count: agents.filter((a) => a.category === "smart").length },
  { id: "support", name: "Hỗ trợ", icon: Headphones, count: 0 },
  { id: "education", name: "Giáo dục", icon: Users, count: 0 },
]

export default function AgentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Filter and sort agents
  const filteredAgents = useMemo(() => {
    let filtered = agents

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (agent) =>
          agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          agent.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((agent) => agent.category === selectedCategory)
    }

    // Sort agents
    switch (sortBy) {
      case "popular":
        return filtered.sort((a, b) => b.users - a.users)
      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating)
      case "newest":
        return filtered.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      case "price-low":
        return filtered.sort(
          (a, b) => Number.parseInt(a.price.replace(/[₫,]/g, "")) - Number.parseInt(b.price.replace(/[₫,]/g, "")),
        )
      case "price-high":
        return filtered.sort(
          (a, b) => Number.parseInt(b.price.replace(/[₫,]/g, "")) - Number.parseInt(a.price.replace(/[₫,]/g, "")),
        )
      default:
        return filtered
    }
  }, [searchQuery, selectedCategory, sortBy])

  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory)

  const backgroundPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: backgroundPattern }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 text-lg px-4 py-2">
              🤖 {selectedCategoryData?.count || 0} AI Agents
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              {selectedCategory === "all" ? "Khám phá AI Agents" : `${selectedCategoryData?.name} Agents`}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {selectedCategory === "all"
                ? "Tìm kiếm và sử dụng các AI agents mạnh mẽ để tự động hóa công việc và tăng năng suất của bạn."
                : `Khám phá các AI agents chuyên biệt cho ${selectedCategoryData?.name.toLowerCase()}. Được tối ưu hóa cho hiệu suất cao nhất.`}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="mb-12">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                {/* Search Bar */}
                <div className="relative mb-6">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Search />
                  </div>
                  <Input
                    placeholder="Tìm kiếm AI agents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12 text-lg"
                  />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {categories.map((category) => {
                    const Icon = category.icon
                    const isActive = selectedCategory === category.id
                    return (
                      <Button
                        key={category.id}
                        variant={isActive ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`${isActive ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0" : "bg-white/10 border-white/20 text-white hover:bg-white/20"} backdrop-blur-md transition-all duration-300`}
                      >
                        <Icon />
                        <span className="ml-2">{category.name}</span>
                        <Badge variant="secondary" className="ml-2 bg-white/20 text-white border-0">
                          {category.count}
                        </Badge>
                      </Button>
                    )
                  })}
                </div>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="popular">Phổ biến nhất</SelectItem>
                        <SelectItem value="rating">Đánh giá cao</SelectItem>
                        <SelectItem value="newest">Mới nhất</SelectItem>
                        <SelectItem value="price-low">Giá thấp đến cao</SelectItem>
                        <SelectItem value="price-high">Giá cao đến thấp</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="flex items-center gap-2">
                      <Button
                        variant={viewMode === "grid" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setViewMode("grid")}
                        className={
                          viewMode === "grid"
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0"
                            : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                        }
                      >
                        <Grid3X3 />
                      </Button>
                      <Button
                        variant={viewMode === "list" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setViewMode("list")}
                        className={
                          viewMode === "list"
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0"
                            : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                        }
                      >
                        <List />
                      </Button>
                    </div>
                  </div>

                  <div className="text-gray-300">Hiển thị {filteredAgents.length} kết quả</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Agents Grid/List */}
          {filteredAgents.length > 0 ? (
            <div
              className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}
            >
              {filteredAgents.map((agent) => (
                <Card
                  key={agent.id}
                  className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src={agent.image || "/placeholder.svg"}
                        alt={agent.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {agent.featured && (
                        <Badge className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                          ⭐ Nổi bật
                        </Badge>
                      )}
                      <div className="absolute top-3 right-3 flex gap-2">
                        <Badge className="bg-black/50 text-white border-0">{agent.price}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {agent.name}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-2">{agent.description}</p>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{agent.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users />
                        <span>{agent.users.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar />
                        <span>{new Date(agent.updatedAt).toLocaleDateString("vi-VN")}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {agent.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>Bởi {agent.author}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
                        Xem chi tiết
                      </Button>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Không tìm thấy AI agents</h3>
              <p className="text-gray-300 mb-6">
                Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc để tìm thấy agents phù hợp.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
              >
                Xóa bộ lọc
              </Button>
            </div>
          )}

          {/* Load More */}
          {filteredAgents.length > 0 && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-md px-8 bg-transparent"
              >
                Tải thêm agents
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
