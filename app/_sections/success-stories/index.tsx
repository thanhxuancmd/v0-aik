"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const QuoteIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const DollarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

interface SuccessStory {
  id: number
  company: string
  industry: string
  logo: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    icon: React.ComponentType<{ className?: string }>
    color: string
  }[]
  quote: string
  author: string
  position: string
  timeline: string
  featured: boolean
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    company: "Vietcombank",
    industry: "Ngân hàng",
    logo: "/placeholder.svg?height=60&width=120&text=Vietcombank",
    challenge:
      "Với 15 triệu khách hàng, Vietcombank gặp khó khăn trong việc xử lý 50,000+ yêu cầu hỗ trợ mỗi ngày, thời gian chờ trung bình 15 phút.",
    solution:
      "Triển khai AI Agents cho customer service với khả năng xử lý 70% yêu cầu tự động, tích hợp với hệ thống core banking.",
    results: [
      {
        metric: "Giảm thời gian chờ",
        value: "95%",
        icon: ClockIcon,
        color: "text-green-600",
      },
      {
        metric: "Tiết kiệm chi phí",
        value: "200 tỷ VNĐ",
        icon: DollarIcon,
        color: "text-blue-600",
      },
      {
        metric: "Tăng satisfaction",
        value: "40%",
        icon: TrendingUpIcon,
        color: "text-purple-600",
      },
    ],
    quote:
      "AI Agents đã thay đổi hoàn toàn cách chúng tôi phục vụ khách hàng. Từ 15 phút chờ đợi xuống còn 30 giây, khách hàng cực kỳ hài lòng.",
    author: "Nguyễn Văn A",
    position: "Giám đốc Công nghệ",
    timeline: "Triển khai trong 3 tháng",
    featured: true,
  },
  {
    id: 2,
    company: "FPT Software",
    industry: "Công nghệ",
    logo: "/placeholder.svg?height=60&width=120&text=FPT+Software",
    challenge:
      "Quản lý 40,000+ nhân viên toàn cầu với các quy trình HR phức tạp, tốn 60% thời gian của team HR cho các tác vụ lặp đi lặp lại.",
    solution:
      "Xây dựng hệ thống AI Agents cho HR tự động hóa tuyển dụng, onboarding, và quản lý nhân sự với khả năng xử lý tiếng Việt và tiếng Anh.",
    results: [
      {
        metric: "Tăng hiệu quả HR",
        value: "300%",
        icon: TrendingUpIcon,
        color: "text-green-600",
      },
      {
        metric: "Giảm thời gian tuyển dụng",
        value: "70%",
        icon: ClockIcon,
        color: "text-blue-600",
      },
      {
        metric: "Tiết kiệm chi phí",
        value: "150 tỷ VNĐ",
        icon: DollarIcon,
        color: "text-purple-600",
      },
    ],
    quote:
      "AI Agents giúp chúng tôi tập trung vào chiến lược thay vì các công việc thủ công. Hiệu quả tuyển dụng tăng 300% là con số không thể tin được.",
    author: "Trần Thị B",
    position: "Giám đốc Nhân sự",
    timeline: "Triển khai trong 4 tháng",
    featured: true,
  },
  {
    id: 3,
    company: "Vingroup",
    industry: "Tập đoàn đa ngành",
    logo: "/placeholder.svg?height=60&width=120&text=Vingroup",
    challenge:
      "Quản lý 2,000+ cửa hàng VinMart với hàng triệu giao dịch mỗi ngày, khó khăn trong việc tối ưu hóa inventory và dự đoán nhu cầu.",
    solution:
      "Triển khai AI Agents cho retail analytics, dự đoán nhu cầu, và tối ưu hóa chuỗi cung ứng tự động cho toàn bộ hệ thống.",
    results: [
      {
        metric: "Tăng doanh thu",
        value: "25%",
        icon: TrendingUpIcon,
        color: "text-green-600",
      },
      {
        metric: "Giảm waste",
        value: "40%",
        icon: ClockIcon,
        color: "text-blue-600",
      },
      {
        metric: "ROI",
        value: "450%",
        icon: DollarIcon,
        color: "text-purple-600",
      },
    ],
    quote:
      "AI Agents không chỉ giúp chúng tôi tiết kiệm chi phí mà còn tăng trải nghiệm khách hàng. ROI 450% trong năm đầu là kết quả vượt mong đợi.",
    author: "Lê Văn C",
    position: "CEO VinCommerce",
    timeline: "Triển khai trong 6 tháng",
    featured: false,
  },
  {
    id: 4,
    company: "Techcombank",
    industry: "Ngân hàng",
    logo: "/placeholder.svg?height=60&width=120&text=Techcombank",
    challenge:
      "Xử lý 100,000+ giao dịch nghi ngờ gian lận mỗi tháng với độ chính xác thấp, gây ảnh hưởng đến trải nghiệm khách hàng.",
    solution:
      "Triển khai AI Agents cho fraud detection với machine learning tiên tiến, phân tích real-time và tích hợp với hệ thống cảnh báo.",
    results: [
      {
        metric: "Tăng độ chính xác",
        value: "95%",
        icon: TrendingUpIcon,
        color: "text-green-600",
      },
      {
        metric: "Giảm false positive",
        value: "80%",
        icon: ClockIcon,
        color: "text-blue-600",
      },
      {
        metric: "Tiết kiệm",
        value: "120 tỷ VNĐ",
        icon: DollarIcon,
        color: "text-purple-600",
      },
    ],
    quote:
      "AI Agents đã cách mạng hóa hệ thống chống gian lận của chúng tôi. Độ chính xác 95% giúp bảo vệ khách hàng mà không ảnh hưởng trải nghiệm.",
    author: "Phạm Thị D",
    position: "Giám đốc Rủi ro",
    timeline: "Triển khai trong 5 tháng",
    featured: false,
  },
]

export function SuccessStories() {
  const [activeStory, setActiveStory] = useState(0)
  const featuredStories = successStories.filter((story) => story.featured)
  const allStories = successStories

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
            <span className="text-sm text-green-700 font-medium">🏆 Câu chuyện thành công</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Doanh nghiệp Việt <br />
            <span className="text-green-600">thành công</span> với AI Agents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá cách các tập đoàn hàng đầu Việt Nam đã chuyển đổi số thành công và đạt được ROI ấn tượng với AI
            Agents
          </p>
        </div>

        {/* Featured Stories */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredStories.map((story, index) => (
              <div
                key={story.id}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-500"
              >
                {/* Company Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-xl border border-gray-200 p-2 flex items-center justify-center">
                    <img
                      src={story.logo || "/placeholder.svg"}
                      alt={story.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{story.company}</h3>
                    <p className="text-gray-600">{story.industry}</p>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="mb-8">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">Thách thức</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Giải pháp</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{story.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {story.results.map((result, idx) => {
                    const Icon = result.icon
                    return (
                      <div key={idx} className="text-center">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mx-auto mb-2 ${result.color}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className={`text-2xl font-bold ${result.color}`}>{result.value}</div>
                        <div className="text-xs text-gray-600">{result.metric}</div>
                      </div>
                    )
                  })}
                </div>

                {/* Quote */}
                <div className="relative">
                  <QuoteIcon className="text-gray-300 mb-4" />
                  <blockquote className="text-gray-700 italic mb-4 leading-relaxed">"{story.quote}"</blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{story.author}</div>
                      <div className="text-sm text-gray-600">{story.position}</div>
                    </div>
                    <div className="text-sm text-gray-500">{story.timeline}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Stories Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Thêm nhiều câu chuyện thành công</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allStories
              .filter((story) => !story.featured)
              .map((story) => (
                <div
                  key={story.id}
                  className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-200 p-1 flex items-center justify-center">
                      <img
                        src={story.logo || "/placeholder.svg"}
                        alt={story.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{story.company}</h4>
                      <p className="text-sm text-gray-600">{story.industry}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {story.results.map((result, idx) => {
                      const Icon = result.icon
                      return (
                        <div key={idx} className="text-center">
                          <div className={`text-xl font-bold ${result.color}`}>{result.value}</div>
                          <div className="text-xs text-gray-600">{result.metric}</div>
                        </div>
                      )
                    })}
                  </div>

                  <blockquote className="text-sm text-gray-700 italic mb-3 line-clamp-3">"{story.quote}"</blockquote>
                  <div className="text-xs text-gray-500">
                    {story.author} - {story.position}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Câu chuyện thành công tiếp theo là của bạn</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Tham gia cùng 500+ doanh nghiệp Việt Nam đã chuyển đổi thành công với AI Agents. Bắt đầu hành trình của
              bạn ngay hôm nay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold">
                Bắt đầu miễn phí
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl font-semibold bg-transparent"
              >
                Tư vấn 1-1
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
