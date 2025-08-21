"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// SVG Components to replace lucide-react icons
const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const FlameIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
    />
  </svg>
)

const BotIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
    />
  </svg>
)

const NewspaperIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
    />
  </svg>
)

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
    title: "OpenAI ra mắt GPT-5: Bước đột phá mới trong AI",
    excerpt:
      "GPT-5 mang đến khả năng reasoning mạnh mẽ và hiểu biết sâu sắc hơn về ngữ cảnh, mở ra nhiều ứng dụng mới trong các lĩnh vực khác nhau.",
    category: "Công nghệ",
    author: "Minh Hoàng",
    publishedAt: "2024-01-15",
    readTime: "5 phút",
    trending: true,
    featured: true,
    image: "/placeholder.svg?height=200&width=400&text=GPT-5+Launch",
  },
  {
    id: 2,
    title: "AI Agents tự động hóa 80% công việc văn phòng",
    excerpt:
      "Nghiên cứu mới cho thấy AI Agents có thể thay thế con người trong nhiều tác vụ lặp đi lặp lại, giúp tăng hiệu quả làm việc đáng kể.",
    category: "Nghiên cứu",
    author: "Thu Hà",
    publishedAt: "2024-01-14",
    readTime: "7 phút",
    trending: true,
    featured: false,
    image: "/placeholder.svg?height=200&width=400&text=AI+Automation",
  },
  {
    id: 3,
    title: "Startup Việt Nam phát triển AI chatbot y tế",
    excerpt:
      "Chatbot AI có thể tư vấn sức khỏe ban đầu và hỗ trợ bác sĩ trong việc chẩn đoán, được phát triển bởi team kỹ sư Việt Nam.",
    category: "Startup",
    author: "Đức Anh",
    publishedAt: "2024-01-13",
    readTime: "4 phút",
    trending: false,
    featured: false,
    image: "/placeholder.svg?height=200&width=400&text=Medical+AI",
  },
  {
    id: 4,
    title: "Google Gemini Ultra vượt mặt GPT-4 trong benchmark",
    excerpt:
      "Gemini Ultra đạt điểm số cao hơn GPT-4 trong nhiều bài test đánh giá khả năng reasoning và hiểu biết ngôn ngữ tự nhiên.",
    category: "So sánh",
    author: "Quang Minh",
    publishedAt: "2024-01-12",
    readTime: "6 phút",
    trending: true,
    featured: false,
    image: "/placeholder.svg?height=200&width=400&text=Gemini+vs+GPT",
  },
  {
    id: 5,
    title: "AI trong giáo dục: Cơ hội và thách thức",
    excerpt:
      "Việc ứng dụng AI vào giáo dục mang lại nhiều lợi ích nhưng cũng đặt ra những câu hỏi về đạo đức và tương lai của ngành giáo dục.",
    category: "Giáo dục",
    author: "Lan Anh",
    publishedAt: "2024-01-11",
    readTime: "8 phút",
    trending: false,
    featured: false,
    image: "/placeholder.svg?height=200&width=400&text=AI+Education",
  },
  {
    id: 6,
    title: "Anthropic Claude 3 ra mắt với khả năng xử lý hình ảnh",
    excerpt:
      "Claude 3 không chỉ xử lý văn bản mà còn có thể phân tích hình ảnh, biểu đồ và tài liệu một cách chính xác và chi tiết.",
    category: "Sản phẩm",
    author: "Hoàng Nam",
    publishedAt: "2024-01-10",
    readTime: "5 phút",
    trending: false,
    featured: false,
    image: "/placeholder.svg?height=200&width=400&text=Claude+3+Vision",
  },
]

const news: NewsItem[] = [
  {
    title: "Doanh nghiệp tăng tốc triển khai AI Agents cho vận hành",
    date: "Tháng 8 2025",
    excerpt: "Các case study cho thấy tiết kiệm 40% chi phí vận hành khi áp dụng agent vào quy trình.",
  },
  {
    title: "RAG thế hệ mới giúp trả lời theo ngữ cảnh chính xác hơn",
    date: "Tháng 8 2025",
    excerpt: "Kỹ thuật re-ranking và multi-hop reasoning cải thiện độ chính xác của hệ thống tìm kiếm ngữ nghĩa.",
  },
  {
    title: "Tự động hóa quy trình bán hàng đa kênh bằng AI",
    date: "Tháng 8 2025",
    excerpt: "Từ tạo lead đến chăm sóc và chốt đơn, agent có thể theo dõi chiến dịch end-to-end.",
  },
]

const getCategoryColor = (category: string) => {
  const colors = {
    "Công nghệ": "bg-blue-100 text-blue-800 border-blue-200",
    "Nghiên cứu": "bg-green-100 text-green-800 border-green-200",
    Startup: "bg-purple-100 text-purple-800 border-purple-200",
    "So sánh": "bg-orange-100 text-orange-800 border-orange-200",
    "Giáo dục": "bg-pink-100 text-pink-800 border-pink-200",
    "Sản phẩm": "bg-cyan-100 text-cyan-800 border-cyan-200",
    "Xu hướng": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Case study": "bg-gray-100 text-gray-800 border-gray-200",
  }
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200"
}

export function AINews() {
  const featuredNews = newsData.filter((news) => news.featured)
  const regularNews = newsData.filter((news) => !news.featured)
  const items = [
    {
      id: 1,
      title: "Mô hình đa phương thức thế hệ mới tăng tốc tạo nội dung",
      category: "Xu hướng",
      icon: FlameIcon,
    },
    {
      id: 2,
      title: "Doanh nghiệp Việt ứng dụng AI Agents trong chăm sóc khách hàng",
      category: "Case study",
      icon: BotIcon,
    },
    {
      id: 3,
      title: "Cập nhật: Công cụ tạo video AI độ phân giải cao",
      category: "Sản phẩm",
      icon: NewspaperIcon,
    },
  ]

  return (
    <section className="bg-gray-50 text-black py-16 md:py-24">
      <div className="container mx-auto px-4 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold">Tin tức AI nổi bật</h2>
          <Link href="/blog" className="inline-flex items-center text-sm text-gray-700 hover:text-black">
            Xem tất cả
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ id, title, category, icon: Icon }) => (
            <article
              key={id}
              className="group rounded-2xl border border-black/10 bg-white p-6 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-3 text-sm text-gray-700 mb-3">
                <Icon className="w-4 h-4 text-purple-600" />
                <span>{category}</span>
              </div>
              <h3 className="text-lg font-semibold leading-snug group-hover:text-purple-600">{title}</h3>
            </article>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-black/10 text-black border-black/20">
            <TrendingUpIcon className="w-4 h-4 mr-2" />
            Tin tức AI mới nhất
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent mb-4">
            Cập nhật từ thế giới AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Theo dõi những tin tức, nghiên cứu và phát triển mới nhất trong lĩnh vực trí tuệ nhân tạo
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
                        <Badge className="bg-red-500/20 text-red-600 border-red-500/30 border">
                          <TrendingUpIcon className="w-3 h-3 mr-1" />
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
                          <UserIcon className="w-4 h-4" />
                          {news.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          {news.readTime}
                        </div>
                      </div>
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                    <Badge className="bg-red-500/20 text-red-600 border-red-500/30 border text-xs">
                      <TrendingUpIcon className="w-3 h-3 mr-1" />
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
                      <UserIcon className="w-3 h-3" />
                      {news.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-3 h-3" />
                      {news.readTime}
                    </div>
                  </div>
                  <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* New News Section */}
        <div className="flex items-center gap-3 mb-8">
          <NewspaperIcon className="h-6 w-6 text-purple-600" />
          <h2 className="text-3xl md:text-5xl font-bold">Tin tức AI hôm nay</h2>
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
                <ClockIcon className="h-4 w-4" />
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
