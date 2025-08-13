'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet"
import { 
  MessageSquare, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  FileText, 
  BarChart3, 
  Palette, 
  Code, 
  ShoppingCart,
  Zap
} from 'lucide-react'

interface Agent {
  id: number
  name: string
  description: string
  category: string
  price: string
  rating: number
  users: number
  author: string
  updatedAt: string
  featured: boolean
  tags: string[]
  image: string
}

interface DemoMessage {
  id: number
  type: 'user' | 'bot'
  content: string
  timestamp: string
}

interface AgentDemoModalProps {
  agent: Agent
  children: React.ReactNode
}

const getCategoryIcon = (category: string) => {
  const icons = {
    content: FileText,
    chatbots: MessageSquare,
    ecommerce: ShoppingCart,
    analytics: BarChart3,
    design: Palette,
    development: Code,
    productivity: Zap,
    smart: Sparkles
  }
  const Icon = icons[category as keyof typeof icons] || Bot
  return <Icon className="w-5 h-5" />
}

const getDemoMessages = (agent: Agent): DemoMessage[] => {
  const baseMessages = [
    {
      id: 1,
      type: 'bot' as const,
      content: `Xin chào! Tôi là ${agent.name}. ${agent.description}`,
      timestamp: '10:00'
    }
  ]

  const categorySpecificMessages = {
    content: [
      {
        id: 2,
        type: 'user' as const,
        content: 'Tạo cho tôi một bài viết blog về AI trong marketing',
        timestamp: '10:01'
      },
      {
        id: 3,
        type: 'bot' as const,
        content: '🚀 **AI Trong Marketing: Cuộc Cách Mạng Đang Diễn Ra**\n\nTrong thời đại số hóa, AI đang thay đổi cách chúng ta tiếp cận marketing:\n\n✨ **Cá nhân hóa trải nghiệm khách hàng**\n📊 **Phân tích dữ liệu thông minh**\n🎯 **Tối ưu hóa chiến dịch tự động**\n\nBạn có muốn tôi phát triển thêm phần nào không?',
        timestamp: '10:02'
      }
    ],
    chatbots: [
      {
        id: 2,
        type: 'user' as const,
        content: 'Làm sao để tạo chatbot cho website bán hàng?',
        timestamp: '10:01'
      },
      {
        id: 3,
        type: 'bot' as const,
        content: '🤖 Tôi sẽ hướng dẫn bạn tạo chatbot bán hàng:\n\n1️⃣ **Thiết lập kịch bản chào hỏi**\n2️⃣ **Tích hợp catalog sản phẩm**\n3️⃣ **Xử lý thanh toán tự động**\n4️⃣ **Theo dõi đơn hàng**\n\nBạn muốn bắt đầu với bước nào?',
        timestamp: '10:02'
      }
    ],
    ecommerce: [
      {
        id: 2,
        type: 'user' as const,
        content: 'Phân tích doanh số bán hàng tháng này',
        timestamp: '10:01'
      },
      {
        id: 3,
        type: 'bot' as const,
        content: '📈 **Báo Cáo Doanh Số Tháng 1/2024**\n\n💰 Tổng doanh thu: **₫45,2M** (+12%)\n📦 Đơn hàng: **1,240** (+8%)\n🎯 Tỷ lệ chuyển đổi: **3.2%** (+0.5%)\n⭐ Đánh giá TB: **4.7/5**\n\n🔥 **Sản phẩm bán chạy**: Áo thun basic, Giày sneaker\n\nBạn muốn xem chi tiết theo danh mục nào?',
        timestamp: '10:02'
      }
    ],
    analytics: [
      {
        id: 2,
        type: 'user' as const,
        content: 'Tạo dashboard theo dõi KPI marketing',
        timestamp: '10:01'
      },
      {
        id: 3,
        type: 'bot' as const,
        content: '📊 **Dashboard Marketing KPI**\n\n🎯 **Acquisition Metrics**\n• CTR: 2.8% | CPC: ₫12,500\n• Conversion Rate: 4.2%\n\n📈 **Engagement Metrics**\n• Social Media Reach: 125K\n• Email Open Rate: 28%\n\n💡 **Insights**: Chiến dịch Facebook Ads hiệu quả nhất với ROAS 3.2x\n\nBạn muốn drill-down vào metric nào?',
        timestamp: '10:02'
      }
    ],
    design: [
      {
        id: 2,
        type: 'user' as const,
        content: 'Thiết kế logo cho startup công nghệ',
        timestamp: '10:01'
      },
      {
        id: 3,
        type: 'bot' as const,
        content: '🎨 **Concept Logo Startup Tech**\n\n✨ **Style 1**: Minimalist với geometric shapes\n🚀 **Style 2**: Modern với gradient effects\n⚡ **Style 3**: Bold typography với tech icons\n\n🎯 **Màu sắc đề xuất**: Blue (#2563EB), Purple (#7C3AED)\n📐 **Format**: Vector SVG, PNG, PDF\n\nBạn thích concept nào nhất?',
        timestamp: '10:02'
      }
    ],
    development: [
      {
        id: 2,
        type: 'user' as const,
        content: 'Review code React component này',
        timestamp: '10:01'
      },
      {
        id: 3,
        type: 'bot' as const,
        content: '👨‍💻 **Code Review Results**\n\n✅ **Good Practices**:\n• Proper TypeScript typing\n• Clean component structure\n\n⚠️ **Suggestions**:\n• Add error boundaries\n• Implement memo for performance\n• Extract custom hooks\n\n🔧 **Refactor**: Tôi có thể tự động optimize code này. Bạn có muốn không?',
        timestamp: '10:02'
      }
    ],
    productivity: [
      {
        id: 2,
        type: 'user' as const,
        content: 'Lên lịch công việc tuần này',
        timestamp: '10:01'
      },
      {
        id: 3,
        type: 'bot' as const,
        content: '📅 **Lịch Tuần 15-21/01**\n\n🔥 **Ưu tiên cao**:\n• Thứ 2: Họp team (9:00-10:30)\n• Thứ 4: Deadline dự án A\n• Thứ 6: Presentation cho client\n\n⚡ **Tự động hóa**:\n• Email reports: Đã schedule\n• Social posts: Đã queue\n\n💡 **Gợi ý**: Block 2h focus time mỗi sáng',
        timestamp: '10:02'
      }
    ],
    smart: [
      {
        id: 2,
        type: 'user' as const,
        content: 'Brainstorm ý tưởng cho chiến dịch Tết',
        timestamp: '10:01'
      },
      {
        id: 3,
        type: 'bot' as const,
        content: '🧠 **Ý Tưởng Chiến Dịch Tết 2024**\n\n🏮 **Theme**: "Tết Xanh - Tương Lai Bền Vững"\n\n💡 **Concepts**:\n• AR filter "Lì xì ảo" trên social\n• Contest "Món quà Tết ý nghĩa"\n• Collaboration với KOLs về zero waste\n\n🎯 **Channels**: TikTok, Instagram, Facebook\n📊 **Budget**: ₫500M | Timeline: 3 tuần\n\nBạn muốn develop concept nào?',
        timestamp: '10:02'
      }
    ]
  }

  const categoryMessages = categorySpecificMessages[agent.category as keyof typeof categorySpecificMessages] || []
  return [...baseMessages, ...categoryMessages]
}

export function AgentDemoModal({ agent, children }: AgentDemoModalProps) {
  const [messages, setMessages] = useState<DemoMessage[]>(() => getDemoMessages(agent))
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: DemoMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      const botMessage: DemoMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: `Cảm ơn bạn đã thử nghiệm ${agent.name}! 🚀\n\nĐây là demo tương tác. Trong phiên bản thực tế, tôi sẽ:\n• Xử lý yêu cầu phức tạp hơn\n• Tích hợp với dữ liệu thực\n• Cung cấp kết quả chính xác\n\nBạn có muốn tìm hiểu thêm về tính năng nào không?`,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-2xl bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 border-white/20">
        <SheetHeader className="pb-6">
          <div className="flex items-center gap-3 mb-2">
            {getCategoryIcon(agent.category)}
            <SheetTitle className="text-white text-xl">{agent.name}</SheetTitle>
          </div>
          <SheetDescription className="text-gray-300">
            {agent.description}
          </SheetDescription>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>⭐ {agent.rating}</span>
            <span>👥 {agent.users.toLocaleString()} người dùng</span>
            <span>{agent.price}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {agent.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-white/10 text-white border-white/20">
                {tag}
              </Badge>
            ))}
          </div>
        </SheetHeader>

        <div className="flex flex-col h-[calc(100vh-300px)]">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-white/10 text-white border border-white/20'
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                  <div className="text-xs opacity-70 mt-1">{message.timestamp}</div>
                </div>
                {message.type === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white/10 text-white border border-white/20 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Nhập tin nhắn để thử nghiệm..."
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <div className="flex items-center gap-2 text-yellow-400 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Đây là demo tương tác. Phiên bản thực tế sẽ có nhiều tính năng hơn!</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
