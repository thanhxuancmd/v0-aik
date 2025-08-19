"use client"

import type React from "react"

import { useState, useEffect } from "react"

const TrendingUpIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const BuildingIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
)

const DollarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

interface StatItem {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
  description: string
  trend: string
  color: string
}

const stats: StatItem[] = [
  {
    icon: TrendingUpIcon,
    value: "285%",
    label: "Tăng trưởng AI tại Việt Nam",
    description: "Tốc độ tăng trưởng thị trường AI Việt Nam năm 2024, dẫn đầu Đông Nam Á",
    trend: "+45% so với 2023",
    color: "text-green-600",
  },
  {
    icon: BuildingIcon,
    value: "12,500+",
    label: "Doanh nghiệp áp dụng AI",
    description: "Số lượng doanh nghiệp Việt Nam đã triển khai AI trong vận hành",
    trend: "+180% trong 2 năm",
    color: "text-blue-600",
  },
  {
    icon: DollarIcon,
    value: "$2.8B",
    label: "Đầu tư AI tại Việt Nam",
    description: "Tổng vốn đầu tư vào các startup và dự án AI Việt Nam năm 2024",
    trend: "+320% so với 2022",
    color: "text-purple-600",
  },
  {
    icon: UsersIcon,
    value: "850K+",
    label: "Người dùng AI hàng ngày",
    description: "Số lượng người Việt sử dụng AI tools và agents trong công việc hàng ngày",
    trend: "+150% năm qua",
    color: "text-orange-600",
  },
]

const marketInsights = [
  {
    title: "Việt Nam dẫn đầu ASEAN về ứng dụng AI",
    description:
      "Theo báo cáo của McKinsey, Việt Nam có tỷ lệ doanh nghiệp áp dụng AI cao nhất khu vực với 68% doanh nghiệp lớn đã triển khai ít nhất 1 giải pháp AI.",
    source: "McKinsey Global Institute 2024",
  },
  {
    title: "Chính phủ Việt Nam đầu tư mạnh vào AI",
    description:
      "Chiến lược AI quốc gia 2030 với ngân sách 15,000 tỷ VNĐ, mục tiêu đưa Việt Nam vào top 10 thế giới về AI.",
    source: "Bộ KH&CN Việt Nam 2024",
  },
  {
    title: "Startup AI Việt Nam thu hút đầu tư kỷ lục",
    description:
      "Năm 2024, các startup AI Việt Nam huy động được 2.8 tỷ USD, tăng 320% so với năm 2022, với nhiều unicorn tiềm năng.",
    source: "Vietnam Startup Report 2024",
  },
]

function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState("0")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`counter-${value}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [value])

  useEffect(() => {
    if (!isVisible) return

    const numericValue = Number.parseFloat(value.replace(/[^0-9.]/g, ""))
    const suffix = value.replace(/[0-9.,]/g, "")

    if (isNaN(numericValue)) {
      setDisplayValue(value)
      return
    }

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const currentValue = Math.floor(numericValue * progress)
      setDisplayValue(currentValue.toLocaleString() + suffix)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, duration])

  return <span id={`counter-${value}`}>{displayValue}</span>
}

export function VietnamAIStats() {
  return (
    <section className="bg-gradient-to-br from-red-50 via-white to-orange-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 mb-6">
            <span className="text-sm text-red-700 font-medium">🇻🇳 Thị trường AI Việt Nam</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Việt Nam - Cường quốc AI <br />
            <span className="text-red-600">Đông Nam Á</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Với tốc độ tăng trưởng vượt trội và sự đầu tư mạnh mẽ từ chính phủ, Việt Nam đang trở thành trung tâm AI
            hàng đầu khu vực
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-bl-2xl opacity-50"></div>

                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center mb-4 ${stat.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                    <AnimatedCounter value={stat.value} />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-sm text-gray-600 mb-3">{stat.description}</p>

                  <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                    <TrendingUpIcon className="w-3 h-3" />
                    {stat.trend}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Market Insights */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Báo cáo thị trường AI Việt Nam</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những con số và xu hướng nổi bật từ các tổ chức nghiên cứu uy tín về thị trường AI tại Việt Nam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketInsights.map((insight, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-xl p-6 h-full border border-gray-100 hover:border-red-200 transition-colors">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {insight.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{insight.description}</p>
                  <div className="text-xs text-gray-500 font-medium">Nguồn: {insight.source}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Tham gia cùng 500+ doanh nghiệp Việt Nam</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Đừng để doanh nghiệp của bạn bị bỏ lại phía sau trong cuộc cách mạng AI. Bắt đầu hành trình chuyển đổi số
              với AI ngay hôm nay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors">
                Khám phá AI Agents
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-xl font-semibold transition-colors">
                Tư vấn miễn phí
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VietnamAIStats
