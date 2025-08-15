import { NextResponse } from "next/server"

// Mock data cho development
const mockCategories = [
  { id: 1, name: "Tất cả", slug: "all", icon: "Grid3X3", description: "Tất cả các AI Agents", agent_count: 6 },
  { id: 2, name: "Chatbot", slug: "chatbot", icon: "MessageSquare", description: "Bot trò chuyện và hỗ trợ khách hàng", agent_count: 1 },
  { id: 3, name: "Phát triển", slug: "development", icon: "Code", description: "AI Agents hỗ trợ lập trình và phát triển phần mềm", agent_count: 2 },
  { id: 4, name: "Thiết kế", slug: "design", icon: "Palette", description: "Thiết kế đồ họa và sáng tạo với AI", agent_count: 2 },
  { id: 5, name: "Tự động hóa", slug: "automation", icon: "Zap", description: "Tự động hóa quy trình và workflow", agent_count: 1 },
  { id: 6, name: "AI Assistant", slug: "ai-assistant", icon: "Brain", description: "Trợ lý AI thông minh cho các tác vụ đa dạng", agent_count: 0 },
  { id: 7, name: "Phân tích", slug: "analytics", icon: "BarChart3", description: "Phân tích dữ liệu và business intelligence", agent_count: 0 },
  { id: 8, name: "Nội dung", slug: "content", icon: "PenTool", description: "Tạo và quản lý nội dung với AI", agent_count: 0 },
  { id: 9, name: "Âm thanh", slug: "audio", icon: "Music", description: "Xử lý và tạo nội dung âm thanh", agent_count: 0 },
  { id: 10, name: "Video", slug: "video", icon: "Video", description: "Tạo và chỉnh sửa video với AI", agent_count: 0 },
  { id: 11, name: "Thương mại", slug: "ecommerce", icon: "ShoppingCart", description: "Giải pháp AI cho thương mại điện tử", agent_count: 0 },
  { id: 12, name: "Kinh doanh", slug: "business", icon: "Briefcase", description: "Công cụ AI cho quản lý kinh doanh", agent_count: 0 }
]

export async function GET() {
  try {
    return NextResponse.json(mockCategories)
  } catch (error) {
    console.error("Error fetching categories:", error)
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 })
  }
}
