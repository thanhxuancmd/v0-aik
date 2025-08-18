"use client"

import { Search, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

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
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-black/10">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-700">Marketplace AI hàng đầu Việt Nam</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
            Tạo ra điều <span className="text-black font-bold">không thể</span>
            <br />
            với AI Agents
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá, mua và bán AI agents trong marketplace lớn nhất Việt Nam. Hơn 15,000 agents chất lượng cao từ cộng
            đồng developer toàn cầu.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative group">
            <div className="relative flex items-center bg-black/5 backdrop-blur-sm border border-black/20 rounded-2xl p-2">
              <Search className="w-6 h-6 text-gray-600 ml-4" />
              <Input
                placeholder="Tìm kiếm AI agents, chatbots, automation tools..."
                className="flex-1 bg-transparent border-0 text-black placeholder-gray-500 text-lg px-4 focus:ring-0 focus:outline-none"
              />
              <Button className="bg-black text-white hover:bg-gray-800 rounded-xl px-6 py-3 font-medium">
                Tìm kiếm
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
          <Link href="/agents" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white rounded-xl px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Duyệt AI Agents
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-black/30 text-black hover:bg-black/10 rounded-xl px-8 py-4 text-lg font-medium transition-all duration-300 backdrop-blur-sm bg-transparent"
          >
            Đăng AI Agent
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-black/30 text-black hover:bg-black/10 rounded-xl px-8 py-4 text-lg font-medium transition-all duration-300 backdrop-blur-sm bg-transparent"
          >
            AI Automation Agency
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-black mb-2">15K+</div>
            <div className="text-gray-600">AI Agents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-black mb-2">100K+</div>
            <div className="text-gray-600">Người dùng</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-black mb-2">4.8</div>
            <div className="text-gray-600">Đánh giá</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-black mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
