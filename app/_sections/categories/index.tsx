"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Headphones,
  ShoppingCart,
  Megaphone,
  Code2,
  BarChart3,
  FlaskConical,
  Palette,
  GraduationCap,
  Wallet,
  Users,
  Cog,
  Scale,
  Stethoscope,
  Building2,
  Bot,
  Search,
  ArrowRight,
} from "lucide-react"

type Category = {
  slug: string
  name: string
  desc: string
  count: number
  icon: React.ComponentType<{ className?: string }>
  // visual classes (TAILWIND tokens, not dynamic)
  gradient: string
  chip: string
  iconBg: string
  iconColor: string
  ring: string
}

const categories: Category[] = [
  {
    slug: "customer-support",
    name: "Customer Support",
    desc: "Tự động phản hồi, phân loại ticket và hỗ trợ đa kênh.",
    count: 980,
    icon: Headphones,
    gradient: "from-blue-500/15 to-cyan-500/15",
    chip: "bg-blue-100 text-blue-800 border border-blue-200",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    ring: "ring-1 ring-blue-500/30",
  },
  {
    slug: "sales",
    name: "Sales",
    desc: "Tạo lead, nuôi dưỡng khách hàng, nhắc lịch và chốt đơn.",
    count: 860,
    icon: ShoppingCart,
    gradient: "from-emerald-500/15 to-teal-500/15",
    chip: "bg-emerald-100 text-emerald-800 border border-emerald-200",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    ring: "ring-1 ring-emerald-500/30",
  },
  {
    slug: "marketing",
    name: "Marketing",
    desc: "Content, quảng cáo, social và tối ưu chiến dịch.",
    count: 1120,
    icon: Megaphone,
    gradient: "from-pink-500/15 to-rose-500/15",
    chip: "bg-pink-100 text-pink-800 border border-pink-200",
    iconBg: "bg-pink-500/15",
    iconColor: "text-pink-400",
    ring: "ring-1 ring-pink-500/30",
  },
  {
    slug: "coding",
    name: "Coding",
    desc: "Code generation, review, test và fix bug.",
    count: 740,
    icon: Code2,
    gradient: "from-teal-500/15 to-blue-500/15",
    chip: "bg-teal-100 text-teal-800 border border-teal-200",
    iconBg: "bg-teal-500/15",
    iconColor: "text-teal-400",
    ring: "ring-1 ring-teal-500/30",
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    desc: "Phân tích, trực quan hóa và dự đoán dữ liệu.",
    count: 690,
    icon: BarChart3,
    gradient: "from-green-500/15 to-lime-500/15",
    chip: "bg-green-100 text-green-800 border border-green-200",
    iconBg: "bg-green-500/15",
    iconColor: "text-green-400",
    ring: "ring-1 ring-green-500/30",
  },
  {
    slug: "research",
    name: "Research",
    desc: "Tổng hợp tài liệu, trích xuất insight và lập báo cáo.",
    count: 520,
    icon: FlaskConical,
    gradient: "from-purple-500/15 to-indigo-500/15",
    chip: "bg-purple-100 text-purple-800 border border-purple-200",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
    ring: "ring-1 ring-purple-500/30",
  },
  {
    slug: "design",
    name: "Design",
    desc: "Ý tưởng, UI/UX, hình ảnh và video sáng tạo.",
    count: 600,
    icon: Palette,
    gradient: "from-fuchsia-500/15 to-violet-500/15",
    chip: "bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-200",
    iconBg: "bg-fuchsia-500/15",
    iconColor: "text-fuchsia-400",
    ring: "ring-1 ring-fuchsia-500/30",
  },
  {
    slug: "education",
    name: "Education",
    desc: "Trợ giảng, luyện thi, giáo trình và chấm điểm.",
    count: 430,
    icon: GraduationCap,
    gradient: "from-yellow-500/15 to-orange-500/15",
    chip: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    iconBg: "bg-yellow-500/15",
    iconColor: "text-yellow-400",
    ring: "ring-1 ring-yellow-500/30",
  },
  {
    slug: "finance",
    name: "Finance",
    desc: "Phân tích đầu tư, kế toán và báo cáo tài chính.",
    count: 410,
    icon: Wallet,
    gradient: "from-amber-500/15 to-orange-500/15",
    chip: "bg-amber-100 text-amber-800 border border-amber-200",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
    ring: "ring-1 ring-amber-500/30",
  },
  {
    slug: "hr",
    name: "HR",
    desc: "Tuyển dụng, sàng lọc CV và onboard nhân sự.",
    count: 350,
    icon: Users,
    gradient: "from-sky-500/15 to-blue-500/15",
    chip: "bg-sky-100 text-sky-800 border border-sky-200",
    iconBg: "bg-sky-500/15",
    iconColor: "text-sky-400",
    ring: "ring-1 ring-sky-500/30",
  },
  {
    slug: "operations",
    name: "Operations",
    desc: "Tối ưu quy trình, RPA và quản trị vận hành.",
    count: 480,
    icon: Cog,
    gradient: "from-slate-500/15 to-gray-500/15",
    chip: "bg-slate-100 text-slate-800 border border-slate-200",
    iconBg: "bg-slate-500/15",
    iconColor: "text-slate-300",
    ring: "ring-1 ring-slate-500/30",
  },
  {
    slug: "legal",
    name: "Legal",
    desc: "Soạn thảo hợp đồng, kiểm tra rủi ro và tuân thủ.",
    count: 290,
    icon: Scale,
    gradient: "from-neutral-500/15 to-zinc-500/15",
    chip: "bg-neutral-100 text-neutral-800 border border-neutral-200",
    iconBg: "bg-neutral-500/15",
    iconColor: "text-neutral-300",
    ring: "ring-1 ring-neutral-500/30",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    desc: "Hỗ trợ lâm sàng, tóm tắt EMR và tư vấn sức khỏe.",
    count: 260,
    icon: Stethoscope,
    gradient: "from-rose-500/15 to-red-500/15",
    chip: "bg-rose-100 text-rose-800 border border-rose-200",
    iconBg: "bg-rose-500/15",
    iconColor: "text-rose-400",
    ring: "ring-1 ring-rose-500/30",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    desc: "Tìm listing, sàng lọc khách và tư vấn khoản vay.",
    count: 220,
    icon: Building2,
    gradient: "from-indigo-500/15 to-blue-500/15",
    chip: "bg-indigo-100 text-indigo-800 border border-indigo-200",
    iconBg: "bg-indigo-500/15",
    iconColor: "text-indigo-400",
    ring: "ring-1 ring-indigo-500/30",
  },
  {
    slug: "chatbots",
    name: "Chatbots",
    desc: "Đối thoại tự nhiên đa nền tảng, đa ngôn ngữ.",
    count: 1250,
    icon: Bot,
    gradient: "from-cyan-500/15 to-teal-500/15",
    chip: "bg-cyan-100 text-cyan-800 border border-cyan-200",
    iconBg: "bg-cyan-500/15",
    iconColor: "text-cyan-400",
    ring: "ring-1 ring-cyan-500/30",
  },
  {
    slug: "search",
    name: "Search & RAG",
    desc: "RAG, tìm kiếm ngữ nghĩa và truy vấn tài liệu.",
    count: 540,
    icon: Search,
    gradient: "from-lime-500/15 to-green-500/15",
    chip: "bg-lime-100 text-lime-800 border border-lime-200",
    iconBg: "bg-lime-500/15",
    iconColor: "text-lime-400",
    ring: "ring-1 ring-lime-500/30",
  },
]

export function Categories() {
  return (
    <section className="relative bg-white text-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">AI Agents cho doanh nghiệp Việt</h2>
            <p className="mt-3 text-gray-600">
              Khám phá các giải pháp AI được tin dùng bởi hàng nghìn doanh nghiệp Việt Nam. Từ startup đến tập đoàn lớn,
              tất cả đều tìm thấy AI Agent phù hợp tại đây.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                🏢 <strong>500+</strong> doanh nghiệp Việt tin dùng
              </span>
              <span className="flex items-center gap-1">
                🇻🇳 <strong>100%</strong> hỗ trợ tiếng Việt
              </span>
              <span className="flex items-center gap-1">
                ⚡ <strong>24/7</strong> support tại Việt Nam
              </span>
            </div>
          </div>
          <Link href="/agents">
            <Button className="hidden md:inline-flex rounded-xl bg-red-600 hover:bg-red-700 text-white">
              Duyệt tất cả
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((c) => {
            const Icon = c.icon
            return (
              <Link key={c.slug} href={`/agents?category=${encodeURIComponent(c.slug)}`}>
                <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm hover:shadow-md p-5 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${c.gradient}`}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl ${c.iconBg} ${c.ring} grid place-items-center`}>
                        <Icon className={`h-6 w-6 ${c.iconColor}`} />
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${c.chip}`}>{c.count}+ agents</span>
                    </div>
                    <h3 className="text-xl font-semibold">{c.name}</h3>
                    <p className="mt-2 text-sm text-gray-700">{c.desc}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Link href="/agents">
            <Button
              variant="outline"
              className="rounded-xl border-red-600/30 text-red-600 hover:bg-red-50 bg-transparent"
            >
              Duyệt tất cả
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Categories
