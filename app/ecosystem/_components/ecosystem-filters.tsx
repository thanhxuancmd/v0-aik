"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const categories = [
  "Tất cả",
  "Công cụ quan sát Agent",
  "Nền tảng phục vụ mô hình AI",
  "AI Agents tiền điện tử",
  "Trợ lý lập trình",
  "AI Agents video",
  "Framework phát triển AI Agent",
  "AI Robotics",
  "Agents dịch vụ khách hàng",
  "Trợ lý AI cá nhân",
  "AI Agents nghiên cứu",
  "Nhân viên ảo",
  "Nền tảng phát triển AI Agent",
  "Thư viện lập trình, SDKs",
  "AI Agents tài chính",
  "Agents năng suất",
  "AI Agents bán hàng",
  "AI Agents giọng nói",
  "Nhà phân tích dữ liệu AI",
  "Agents tạo nội dung",
  "AI Agents marketing",
  "Agents lập trình",
  "Agents kiểm thử phần mềm",
  "Agents tự động hóa quy trình",
  "Khác",
]

export function EcosystemFilters() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          placeholder="Tìm kiếm agents, công cụ, framework..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="md:max-w-md"
        />
        <Button variant="outline">Lọc nâng cao</Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  )
}
