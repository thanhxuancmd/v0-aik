"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// SVG Components to replace lucide-react icons
const HeadphonesIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4a1 1 0 001 1h0a1 1 0 001-1v-4m-8 0V9a7 7 0 1114 0v2M7 19h10"
    />
  </svg>
)

const ShoppingCartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6.5-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
    />
  </svg>
)

const MegaphoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m4 0h2a2 2 0 012 2v4a2 2 0 01-2 2h-2M7 4H5a2 2 0 00-2 2v4a2 2 0 002 2h2m0-8v8"
    />
  </svg>
)

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const BarChartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
)

const FlaskIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547A1.934 1.934 0 004 17.5c0 .775.301 1.52.835 2.065.545.556 1.285.935 2.165.935h10c.88 0 1.62-.379 2.165-.935A2.924 2.924 0 0020 17.5a1.934 1.934 0 00-.244-1.072z"
    />
  </svg>
)

const PaletteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2V3z"
    />
  </svg>
)

const GraduationCapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    />
  </svg>
)

const WalletIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const CogIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ScaleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
    />
  </svg>
)

const StethoscopeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l6 6 6-6z"
    />
  </svg>
)

const BuildingIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
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
    name: "Hỗ trợ khách hàng",
    desc: "Tự động phản hồi, phân loại ticket và hỗ trợ đa kênh.",
    count: 980,
    icon: HeadphonesIcon,
    gradient: "from-blue-500/15 to-cyan-500/15",
    chip: "bg-blue-100 text-blue-800 border border-blue-200",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-600",
    ring: "ring-1 ring-blue-500/30",
  },
  {
    slug: "sales",
    name: "Bán hàng",
    desc: "Tạo lead, nuôi dưỡng khách hàng, nhắc lịch và chốt đơn.",
    count: 860,
    icon: ShoppingCartIcon,
    gradient: "from-emerald-500/15 to-teal-500/15",
    chip: "bg-emerald-100 text-emerald-800 border border-emerald-200",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-600",
    ring: "ring-1 ring-emerald-500/30",
  },
  {
    slug: "marketing",
    name: "Marketing",
    desc: "Content, quảng cáo, social và tối ưu chiến dịch.",
    count: 1120,
    icon: MegaphoneIcon,
    gradient: "from-pink-500/15 to-rose-500/15",
    chip: "bg-pink-100 text-pink-800 border border-pink-200",
    iconBg: "bg-pink-500/15",
    iconColor: "text-pink-600",
    ring: "ring-1 ring-pink-500/30",
  },
  {
    slug: "coding",
    name: "Lập trình",
    desc: "Tạo code, review, test và sửa lỗi tự động.",
    count: 740,
    icon: CodeIcon,
    gradient: "from-teal-500/15 to-blue-500/15",
    chip: "bg-teal-100 text-teal-800 border border-teal-200",
    iconBg: "bg-teal-500/15",
    iconColor: "text-teal-600",
    ring: "ring-1 ring-teal-500/30",
  },
  {
    slug: "data-analytics",
    name: "Phân tích dữ liệu",
    desc: "Phân tích, trực quan hóa và dự đoán dữ liệu.",
    count: 690,
    icon: BarChartIcon,
    gradient: "from-green-500/15 to-lime-500/15",
    chip: "bg-green-100 text-green-800 border border-green-200",
    iconBg: "bg-green-500/15",
    iconColor: "text-green-600",
    ring: "ring-1 ring-green-500/30",
  },
  {
    slug: "research",
    name: "Nghiên cứu",
    desc: "Tổng hợp tài liệu, trích xuất insight và lập báo cáo.",
    count: 520,
    icon: FlaskIcon,
    gradient: "from-purple-500/15 to-indigo-500/15",
    chip: "bg-purple-100 text-purple-800 border border-purple-200",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-600",
    ring: "ring-1 ring-purple-500/30",
  },
  {
    slug: "design",
    name: "Thiết kế",
    desc: "Ý tưởng, UI/UX, hình ảnh và video sáng tạo.",
    count: 600,
    icon: PaletteIcon,
    gradient: "from-fuchsia-500/15 to-violet-500/15",
    chip: "bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-200",
    iconBg: "bg-fuchsia-500/15",
    iconColor: "text-fuchsia-600",
    ring: "ring-1 ring-fuchsia-500/30",
  },
  {
    slug: "education",
    name: "Giáo dục",
    desc: "Trợ giảng, luyện thi, giáo trình và chấm điểm.",
    count: 430,
    icon: GraduationCapIcon,
    gradient: "from-yellow-500/15 to-orange-500/15",
    chip: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    iconBg: "bg-yellow-500/15",
    iconColor: "text-yellow-600",
    ring: "ring-1 ring-yellow-500/30",
  },
  {
    slug: "finance",
    name: "Tài chính",
    desc: "Phân tích đầu tư, kế toán và báo cáo tài chính.",
    count: 410,
    icon: WalletIcon,
    gradient: "from-amber-500/15 to-orange-500/15",
    chip: "bg-amber-100 text-amber-800 border border-amber-200",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-600",
    ring: "ring-1 ring-amber-500/30",
  },
  {
    slug: "hr",
    name: "Nhân sự",
    desc: "Tuyển dụng, sàng lọc CV và onboard nhân sự.",
    count: 350,
    icon: UsersIcon,
    gradient: "from-sky-500/15 to-blue-500/15",
    chip: "bg-sky-100 text-sky-800 border border-sky-200",
    iconBg: "bg-sky-500/15",
    iconColor: "text-sky-600",
    ring: "ring-1 ring-sky-500/30",
  },
  {
    slug: "operations",
    name: "Vận hành",
    desc: "Tối ưu quy trình, RPA và quản trị vận hành.",
    count: 480,
    icon: CogIcon,
    gradient: "from-slate-500/15 to-gray-500/15",
    chip: "bg-slate-100 text-slate-800 border border-slate-200",
    iconBg: "bg-slate-500/15",
    iconColor: "text-slate-600",
    ring: "ring-1 ring-slate-500/30",
  },
  {
    slug: "legal",
    name: "Pháp lý",
    desc: "Soạn thảo hợp đồng, kiểm tra rủi ro và tuân thủ.",
    count: 290,
    icon: ScaleIcon,
    gradient: "from-neutral-500/15 to-zinc-500/15",
    chip: "bg-neutral-100 text-neutral-800 border border-neutral-200",
    iconBg: "bg-neutral-500/15",
    iconColor: "text-neutral-600",
    ring: "ring-1 ring-neutral-500/30",
  },
  {
    slug: "healthcare",
    name: "Y tế",
    desc: "Hỗ trợ lâm sàng, tóm tắt EMR và tư vấn sức khỏe.",
    count: 260,
    icon: StethoscopeIcon,
    gradient: "from-rose-500/15 to-red-500/15",
    chip: "bg-rose-100 text-rose-800 border border-rose-200",
    iconBg: "bg-rose-500/15",
    iconColor: "text-rose-600",
    ring: "ring-1 ring-rose-500/30",
  },
  {
    slug: "real-estate",
    name: "Bất động sản",
    desc: "Tìm listing, sàng lọc khách và tư vấn khoản vay.",
    count: 220,
    icon: BuildingIcon,
    gradient: "from-indigo-500/15 to-blue-500/15",
    chip: "bg-indigo-100 text-indigo-800 border border-indigo-200",
    iconBg: "bg-indigo-500/15",
    iconColor: "text-indigo-600",
    ring: "ring-1 ring-indigo-500/30",
  },
  {
    slug: "chatbots",
    name: "Chatbots",
    desc: "Đối thoại tự nhiên đa nền tảng, đa ngôn ngữ.",
    count: 1250,
    icon: BotIcon,
    gradient: "from-cyan-500/15 to-teal-500/15",
    chip: "bg-cyan-100 text-cyan-800 border border-cyan-200",
    iconBg: "bg-cyan-500/15",
    iconColor: "text-cyan-600",
    ring: "ring-1 ring-cyan-500/30",
  },
  {
    slug: "search",
    name: "Tìm kiếm & RAG",
    desc: "RAG, tìm kiếm ngữ nghĩa và truy vấn tài liệu.",
    count: 540,
    icon: SearchIcon,
    gradient: "from-lime-500/15 to-green-500/15",
    chip: "bg-lime-100 text-lime-800 border border-lime-200",
    iconBg: "bg-lime-500/15",
    iconColor: "text-lime-600",
    ring: "ring-1 ring-lime-500/30",
  },
]

export function Categories() {
  return (
    <section className="relative bg-white text-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Danh mục AI Agent</h2>
            <p className="mt-3 text-gray-600">Duyệt các danh mục phổ biến, tham khảo từ hệ sinh thái AI Agent.</p>
          </div>
          <Link href="/agents">
            <Button className="hidden md:inline-flex rounded-xl bg-black text-white hover:bg-gray-800">
              Duyệt tất cả
              <ArrowRightIcon className="ml-2 h-4 w-4" />
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
              className="rounded-xl border-black/20 text-black hover:bg-black/10 bg-transparent"
            >
              Duyệt tất cả
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Categories
