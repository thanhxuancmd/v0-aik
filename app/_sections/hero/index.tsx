"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// SVG Components to replace lucide-react icons
const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
  </svg>
)

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white text-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 backdrop-blur-sm border border-red-200">
            <SparklesIcon className="w-4 h-4 text-red-600" />
            <span className="text-sm text-red-700 font-medium">🇻🇳 Nền tảng AI Agents #1 Việt Nam</span>
          </div>
        </div>

        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
            Nền tảng <span className="text-red-600 font-bold">AI Agents</span>
            <br />
            <span className="text-black">hàng đầu</span> Việt Nam
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Marketplace AI Agents lớn nhất và uy tín nhất tại Việt Nam. Kết nối doanh nghiệp Việt với 25,000+ AI agents
            chất lượng cao, được tin dùng bởi hơn 500 công ty hàng đầu.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative group">
            <div className="relative flex items-center bg-black/5 backdrop-blur-sm border border-black/20 rounded-2xl p-2">
              <SearchIcon className="w-6 h-6 text-gray-600 ml-4" />
              <Input
                placeholder="Tìm AI agents cho doanh nghiệp Việt: chatbot, tự động hóa, phân tích dữ liệu..."
                className="flex-1 bg-transparent border-0 text-black placeholder-gray-500 text-lg px-4 focus:ring-0 focus:outline-none"
              />
              <Button className="bg-red-600 text-white hover:bg-red-700 rounded-xl px-6 py-3 font-medium">
                Tìm kiếm
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
          <Link href="/agents" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white rounded-xl px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Khám phá AI Agents
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-red-600/30 text-red-600 hover:bg-red-50 rounded-xl px-8 py-4 text-lg font-medium transition-all duration-300 backdrop-blur-sm bg-transparent"
          >
            Đăng bán AI Agent
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-black/30 text-black hover:bg-black/10 rounded-xl px-8 py-4 text-lg font-medium transition-all duration-300 backdrop-blur-sm bg-transparent"
          >
            Giải pháp doanh nghiệp
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">25K+</div>
            <div className="text-gray-600">AI Agents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">500+</div>
            <div className="text-gray-600">Doanh nghiệp Việt</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">4.9</div>
            <div className="text-gray-600">Đánh giá trung bình</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">99.9%</div>
            <div className="text-gray-600">Độ tin cậy</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
