"use client"

import { Search, ArrowRight, Sparkles, Palette, MessageSquare, BarChart3, Workflow, Brain, Code2, Target, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Marketplace AI hàng đầu Việt Nam</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
            Tạo ra điều{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              không thể
            </span>
            <br />
            với AI Agents
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Khám phá, mua và bán AI agents trong marketplace lớn nhất Việt Nam. 
            Hơn 15,000 agents chất lượng cao từ cộng đồng developer toàn cầu.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2">
              <Search className="w-6 h-6 text-gray-400 ml-4" />
              <Input 
                placeholder="Tìm kiếm AI agents, chatbots, automation tools..."
                className="flex-1 bg-transparent border-0 text-white placeholder-gray-400 text-lg px-4 focus:ring-0 focus:outline-none"
              />
              <Button className="bg-white text-black hover:bg-gray-100 rounded-xl px-6 py-3 font-medium">
                Tìm kiếm
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
          <Link href="/agents" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Duyệt AI Agents
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 rounded-xl px-8 py-4 text-lg font-medium transition-all duration-300 backdrop-blur-sm">
            Đăng AI Agent
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 rounded-xl px-8 py-4 text-lg font-medium transition-all duration-300 backdrop-blur-sm">
            AI Automation Agency
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">15K+</div>
            <div className="text-gray-400">AI Agents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100K+</div>
            <div className="text-gray-400">Người dùng</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.8</div>
            <div className="text-gray-400">Đánh giá</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Danh mục phổ biến
            </h2>
            <p className="text-xl text-gray-400">
              Khám phá các AI agents được yêu thích nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tạo nội dung */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tạo nội dung</h3>
                <p className="text-gray-400 mb-4">AI agents tạo văn bản, hình ảnh, video chuyên nghiệp</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">980+ agents</span>
                  <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Chatbots */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Chatbots</h3>
                <p className="text-gray-400 mb-4">AI chatbots thông minh cho customer service và support</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">1,250+ agents</span>
                  <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Phân tích dữ liệu */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Phân tích dữ liệu</h3>
                <p className="text-gray-400 mb-4">AI agents phân tích và visualize data phức tạp</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">750+ agents</span>
                  <ArrowRight className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Tự động hóa */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Workflow className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tự động hóa</h3>
                <p className="text-gray-400 mb-4">AI agents tự động hóa workflow và business process</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">650+ agents</span>
                  <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* AI Thông minh */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Thông minh</h3>
                <p className="text-gray-400 mb-4">AI agents với khả năng reasoning và decision making</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">540+ agents</span>
                  <ArrowRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Lập trình */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Lập trình</h3>
                <p className="text-gray-400 mb-4">AI coding assistants và code generation tools</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">420+ agents</span>
                  <ArrowRight className="w-5 h-5 text-teal-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Marketing */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Marketing</h3>
                <p className="text-gray-400 mb-4">AI agents cho digital marketing và advertising</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">380+ agents</span>
                  <ArrowRight className="w-5 h-5 text-pink-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Năng suất */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Năng suất</h3>
                <p className="text-gray-400 mb-4">AI agents tăng productivity và efficiency</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">320+ agents</span>
                  <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
