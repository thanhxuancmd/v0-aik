"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Clock, User, ArrowRight, Flame, Bot, Newspaper } from "lucide-react"
import Link from "next/link"

type News = {
  title: string
  summary: string
  url: string
  source: string
  date: string
}

type NewsItem = {
  title: string
  date: string
  excerpt: string
}

const newsData = [
  {
    id: 1,
    title: "Vietcombank triển khai AI Agents cho 15 triệu khách hàng",
    excerpt:
      "Ngân hàng lớn nhất Việt Nam chính thức áp dụng AI Agents để tự động hóa 70% quy trình chăm sóc khách hàng, giảm thời gian chờ từ 15 phút xuống 30 giây.",
    category: "Case study",
    author: "Minh Hoàng",
    publishedAt: "2024-01-15",
    readTime: "5 phút",
    trending: true,
    featured: true,
    image: "/placeholder.svg?height=200&width=400&text=Vietcombank+AI",
  },
  {
    id: 2,
    title: "FPT Software ra mắt nền tảng AI Agents 'Made in Vietnam'",
    excerpt:
      "Nền tảng AI Agents đầu tiên do Việt Nam phát triển, hỗ trợ đầy đủ tiếng Việt và tích hợp sâu với hệ thống doanh nghiệp trong nước.",
    category: "Sản phẩm",
    author: "Thu Hà",
    publishedAt: "2024-01-14",
    readTime: "7 phút",
    trending: true,
    featured: false,
    image: "/placeholder.svg?height=200&width=400&text=FPT+AI+Platform",
  },
  {
    id: 3,
    title: "Vingroup đầu tư 500 tỷ VNĐ vào AI Agents cho bán lẻ",
    excerpt:
      "Tập đoàn Vingroup công bố kế hoạch triển khai AI Agents tại toàn bộ hệ thống VinMart và Vincom, dự kiến tăng 40% hiệu quả bán hàng.",
    category: "Đầu tư",
    author: "Đức Anh",
    publishedAt: "2024-01-13",
    readTime: "4 phút",
    trending: false,
    featured: false,
    image: "/placeholder.svg?height=200&width=400&text=Vingroup+AI",
  },
  {
    id: 4,
    title: "Startup Việt Zalo AI đạt 10 triệu người dùng AI Assistant",
    excerpt:
      "Zalo AI trở thành nền tảng AI Assistant phổ biến nhất Việt Nam với 10 triệu người dùng hoạt động hàng tháng, vượt mặt các đối thủ quốc tế.",
    category: "Startup",
    author: "Quang Minh",
    publishedAt: "2024-01-12",
    readTime: "6 phút",
    trending: true,
    featured: false,
    image: "/placeholder.svg?height=200&width=400&text=Zalo+AI+Success",
  },
  {
    id: 5,
    title: "Bộ GD&ĐT phê duyệt AI Agents trong giáo dục công lập",
    excerpt:
      "Bộ Giáo dục và Đào tạo chính thức cho phép sử dụng AI Agents hỗ trợ giảng dạy tại các trường công lập, mở ra kỷ nguyên mới cho giáo dục Việt Nam.",
    category: "Chính sách",
    author: "Lan Anh",
    publishedAt: "2024-01-11",
    readTime: "8 phút",
    trending: false,
    featured: false,
    image: "/placeholder.svg?height=200&width=400&text=Education+AI+Policy",
  },
  {
    id: 6,
    title: "Techcombank tiết kiệm 200 tỷ VNĐ nhờ AI Agents",
    excerpt:
      "Ngân hàng Techcombank báo cáo tiết kiệm được 200 tỷ VNĐ chi phí vận hành trong năm 2024 nhờ triển khai AI Agents cho các quy trình nội bộ.",
    category: "Tài chính",
    author: "Hoàng Nam",
    publishedAt: "2024-01-10",
    readTime: "5 phút",
    trending: false,
    featured: false,
    image: "/placeholder.svg?height=200&width=400&text=Techcombank+Savings",
  },
]

const news: NewsItem[] = [
  {
    title: "Thaco Group triển khai AI Agents cho chuỗi cung ứng ô tô",
    date: "Hôm nay",
    excerpt:
      "Tập đoàn ô tô lớn nhất Việt Nam sử dụng AI để tối ưu hóa 500+ đại lý trên toàn quốc, dự kiến tăng 25% hiệu quả vận hành.",
  },
  {
    title: "Sacombank ra mắt AI Assistant hỗ trợ vay vốn SME",
    date: "2 giờ trước",
    excerpt:
      "AI Agent mới có thể xử lý hồ sơ vay vốn doanh nghiệp nhỏ trong 15 phút, giảm 80% thời gian so với quy trình truyền thống.",
  },
  {
    title: "Tiki áp dụng AI Agents cho 2 triệu seller trên sàn",
    date: "5 giờ trước",
    excerpt:
      "Nền tảng thương mại điện tử hàng đầu Việt Nam triển khai AI hỗ trợ seller tự động tối ưu listing và quản lý đơn hàng.",
  },
]

const getCategoryColor = (category: string) => {
  const colors = {
    "Case study": "bg-red-100 text-red-800 border-red-200",
    "Sản phẩm": "bg-blue-100 text-blue-800 border-blue-200",
    "Đầu tư": "bg-green-100 text-green-800 border-green-200",
    Startup: "bg-purple-100 text-purple-800 border-purple-200",
    "Chính sách": "bg-orange-100 text-orange-800 border-orange-200",
    "Tài chính": "bg-cyan-100 text-cyan-800 border-cyan-200",
    "Xu hướng": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Công nghệ": "bg-indigo-100 text-indigo-800 border-indigo-200",
  }
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200"
}

export function AINews() {
  const featuredNews = newsData.filter((news) => news.featured)
  const regularNews = newsData.filter((news) => !news.featured)
  const items = [
    {
      id: 1,
      title: "Vietnam AI Summit 2024: 500+ doanh nghiệp tham gia",
      category: "Sự kiện",
      icon: Flame,
    },
    {
      id: 2,
      title: "Bamboo Airways triển khai AI Agents cho dịch vụ khách hàng",
      category: "Case study",
      icon: Bot,
    },
    {
      id: 3,
      title: "Chính phủ Việt Nam phê duyệt Chiến lược AI quốc gia 2030",
      category: "Chính sách",
      icon: Newspaper,
    },
  ]

  return (
    <section className="bg-gray-50 text-black py-16 md:py-24">
      <div className="container mx-auto px-4 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Tin tức AI Việt Nam</h2>
            <p className="text-gray-600 mt-2">Cập nhật mới nhất về thị trường AI tại Việt Nam</p>
          </div>
          <Link href="/blog" className="inline-flex items-center text-sm text-red-600 hover:text-red-700 font-medium">
            Xem tất cả
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ id, title, category, icon: Icon }) => (
            <article
              key={id}
              className="group rounded-2xl border border-black/10 bg-white p-6 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-3 text-sm text-gray-700 mb-3">
                <Icon className="w-4 h-4 text-red-600" />
                <span>{category}</span>
              </div>
              <h3 className="text-lg font-semibold leading-snug group-hover:text-red-600">{title}</h3>
            </article>
          ))}
        </div>

        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-red-50 text-red-700 border-red-200">
            <TrendingUp className="w-4 h-4 mr-2" />
            🇻🇳 Thị trường AI Việt Nam
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Doanh nghiệp Việt dẫn đầu ứng dụng AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Theo dõi những câu chuyện thành công và xu hướng mới nhất của các doanh nghiệp Việt Nam trong việc ứng dụng
            AI Agents
          </p>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news) => (
                <Card
                  key={news.id}
                  className="group bg-white border-black/10 hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden">
                    <img
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={`${getCategoryColor(news.category)} border`}>{news.category}</Badge>
                      {news.trending && (
                        <Badge className="bg-red-500/20 text-red-300 border-red-500/30 border">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-purple-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {news.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {news.readTime}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularNews.map((news) => (
            <Card
              key={news.id}
              className="group bg-white border-black/10 hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                <img
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className={`${getCategoryColor(news.category)} border text-xs`}>{news.category}</Badge>
                  {news.trending && (
                    <Badge className="bg-red-500/20 text-red-300 border-red-500/30 border text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Hot
                    </Badge>
                  )}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{news.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {news.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {news.readTime}
                    </div>
                  </div>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* New News Section */}
        <div className="flex items-center gap-3 mb-8">
          <Newspaper className="h-6 w-6 text-red-600" />
          <h2 className="text-3xl md:text-5xl font-bold">Tin nóng AI Việt Nam</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((n, i) => (
            <article
              key={i}
              className="h-full rounded-2xl p-5 border border-black/10 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold">{n.title}</h3>
              <p className="mt-2 text-gray-700">{n.excerpt}</p>
              <div className="mt-4 flex items-center gap-3 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{n.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AINews
