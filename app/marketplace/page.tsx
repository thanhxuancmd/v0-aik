import { Section } from "@/common/section-wrapper"
import { Button } from "@/common/button"
import { Input } from "@/common/input"
import {
  Search,
  Filter,
  Star,
  Download,
  Zap,
  MessageSquare,
  BarChart3,
  FileText,
  ShoppingCart,
  Users,
  Calendar,
  Mail,
} from "lucide-react"
import Link from "next/link"

const categories = [
  { id: "all", name: "Tất cả danh mục", icon: Zap, count: 500 },
  { id: "customer-service", name: "Chăm sóc khách hàng", icon: MessageSquare, count: 120 },
  { id: "analytics", name: "Phân tích dữ liệu", icon: BarChart3, count: 85 },
  { id: "content", name: "Tạo nội dung", icon: FileText, count: 95 },
  { id: "ecommerce", name: "Thương mại điện tử", icon: ShoppingCart, count: 67 },
  { id: "hr", name: "Nhân sự", icon: Users, count: 43 },
  { id: "scheduling", name: "Lập lịch", icon: Calendar, count: 38 },
  { id: "email", name: "Email Marketing", icon: Mail, count: 52 },
]

const featuredAgents = [
  {
    id: "1",
    name: "ChatBot Pro Tiếng Việt",
    description: "Chatbot chăm sóc khách hàng tiên tiến với xử lý ngôn ngữ tự nhiên và hỗ trợ đa ngôn ngữ.",
    category: "Chăm sóc khách hàng",
    rating: 4.9,
    downloads: 12500,
    price: "₫690,000/tháng",
    image: "/placeholder.svg?height=200&width=300&text=ChatBot+Pro",
    tags: ["NLP", "Đa ngôn ngữ", "Hỗ trợ 24/7"],
    developer: "AI Solutions Việt Nam",
  },
  {
    id: "2",
    name: "Phân tích Dữ liệu AI",
    description: "Agent phân tích mạnh mẽ xử lý dữ liệu lớn và tạo ra những thông tin chi tiết có thể hành động.",
    category: "Phân tích dữ liệu",
    rating: 4.8,
    downloads: 8900,
    price: "₫1,190,000/tháng",
    image: "/placeholder.svg?height=200&width=300&text=Data+Analyzer",
    tags: ["Big Data", "Machine Learning", "Trực quan hóa"],
    developer: "DataTech Labs",
  },
  {
    id: "3",
    name: "AI Tạo Nội dung",
    description: "Tạo nội dung AI cho blog, mạng xã hội và tài liệu marketing chuyên nghiệp.",
    category: "Tạo nội dung",
    rating: 4.7,
    downloads: 15600,
    price: "₫490,000/tháng",
    image: "/placeholder.svg?height=200&width=300&text=Content+Creator",
    tags: ["SEO tối ưu", "Đa định dạng", "Giọng điệu thương hiệu"],
    developer: "Creative AI Studio",
  },
  {
    id: "4",
    name: "Trợ lý Thương mại điện tử",
    description: "Tự động hóa thương mại điện tử hoàn chỉnh bao gồm quản lý kho và hỗ trợ khách hàng.",
    category: "Thương mại điện tử",
    rating: 4.9,
    downloads: 7800,
    price: "₫950,000/tháng",
    image: "/placeholder.svg?height=200&width=300&text=E-commerce+Assistant",
    tags: ["Quản lý kho", "Đơn hàng", "Hỗ trợ khách hàng"],
    developer: "ShopBot Technologies",
  },
  {
    id: "5",
    name: "AI Tuyển dụng",
    description: "Tối ưu hóa quy trình tuyển dụng với sàng lọc ứng viên và lập lịch phỏng vấn tự động.",
    category: "Nhân sự",
    rating: 4.6,
    downloads: 5400,
    price: "₫1,450,000/tháng",
    image: "/placeholder.svg?height=200&width=300&text=HR+Recruiter",
    tags: ["Sàng lọc", "Lập lịch", "Phân tích"],
    developer: "TalentAI Corp",
  },
  {
    id: "6",
    name: "Email Marketing AI",
    description: "Chiến dịch email tự động với cá nhân hóa và phân khúc nâng cao.",
    category: "Email Marketing",
    rating: 4.8,
    downloads: 9200,
    price: "₫590,000/tháng",
    image: "/placeholder.svg?height=200&width=300&text=Email+Marketer",
    tags: ["Cá nhân hóa", "A/B Testing", "Phân tích"],
    developer: "MailBot Solutions",
  },
]

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-[--background] dark:bg-[--dark-background]">
      {/* Hero Section */}
      <Section className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
              Thị trường AI Agents
            </h1>
            <p className="text-xl text-[--text-secondary] dark:text-[--dark-text-secondary]">
              Khám phá, triển khai và quản lý AI agents cho mọi nhu cầu kinh doanh
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[--text-secondary] w-5 h-5" />
                <Input
                  placeholder="Tìm kiếm AI agents..."
                  className="pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-[--border] dark:border-[--dark-border] focus:border-[--accent-500]"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-xl">
                  <Filter className="w-4 h-4 mr-2" />
                  Lọc
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Categories */}
      <Section className="py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-[--text-primary] dark:text-[--dark-text-primary] mb-8">
            Duyệt theo danh mục
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Link
                  key={category.id}
                  href={`/marketplace?category=${category.id}`}
                  className="group p-4 rounded-xl border border-[--border] dark:border-[--dark-border] hover:border-[--accent-500] transition-all duration-300 text-center"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-[--surface-secondary] dark:bg-[--dark-surface-secondary] flex items-center justify-center group-hover:bg-[--accent-500]/10 transition-colors">
                      <IconComponent className="w-6 h-6 text-[--text-secondary] group-hover:text-[--accent-500] transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[--text-primary] dark:text-[--dark-text-primary] text-sm">
                        {category.name}
                      </h3>
                      <p className="text-xs text-[--text-secondary] dark:text-[--dark-text-secondary]">
                        {category.count} agents
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Featured Agents */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
              AI Agents Nổi bật
            </h2>
            <Link href="/marketplace/all">
              <Button variant="outline">Xem tất cả</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAgents.map((agent) => (
              <div
                key={agent.id}
                className="group bg-white dark:bg-gray-900 rounded-2xl border border-[--border] dark:border-[--dark-border] overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-[--accent-500]/10 to-[--accent-600]/5 p-6 flex items-center justify-center">
                  <img
                    src={agent.image || "/placeholder.svg"}
                    alt={agent.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[--accent-500] bg-[--accent-500]/10 px-2 py-1 rounded-full">
                        {agent.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-[--text-primary] dark:text-[--dark-text-primary]">
                          {agent.rating}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
                      {agent.name}
                    </h3>

                    <p className="text-[--text-secondary] dark:text-[--dark-text-secondary] text-sm leading-relaxed">
                      {agent.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {agent.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-[--surface-secondary] dark:bg-[--dark-surface-secondary] text-[--text-secondary] dark:text-[--dark-text-secondary] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[--border] dark:border-[--dark-border]">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-[--text-secondary] dark:text-[--dark-text-secondary]">
                        <Download className="w-4 h-4" />
                        <span>{agent.downloads.toLocaleString()} lượt tải</span>
                      </div>
                      <div className="text-lg font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
                        {agent.price}
                      </div>
                    </div>

                    <Link href={`/marketplace/agent/${agent.id}`}>
                      <Button className="group">
                        Triển khai
                        <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-[--surface-secondary] dark:bg-[--dark-surface-secondary]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[--accent-500]">500+</div>
              <div className="text-[--text-secondary] dark:text-[--dark-text-secondary]">AI Agents</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[--accent-500]">50K+</div>
              <div className="text-[--text-secondary] dark:text-[--dark-text-secondary]">Người dùng hoạt động</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[--accent-500]">1M+</div>
              <div className="text-[--text-secondary] dark:text-[--dark-text-secondary]">Lượt triển khai</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[--accent-500]">99.9%</div>
              <div className="text-[--text-secondary] dark:text-[--dark-text-secondary]">Thời gian hoạt động</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
