"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  {
    name: "Về trang chủ",
    href: "/",
    icon: "🏠",
  },
  {
    name: "Bảng điều khiển",
    href: "/admin",
    icon: "📊",
  },
  {
    name: "Quản lý Agents",
    href: "/admin/agents",
    icon: "🤖",
  },
  {
    name: "Quản lý Danh mục",
    href: "/admin/categories",
    icon: "📁",
  },
  {
    name: "Quản lý Blog",
    href: "/admin/blog",
    icon: "📝",
  },
  {
    name: "Hệ sinh thái",
    href: "/admin/ecosystem",
    icon: "🌐",
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 top-0 h-full w-64 border-r border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
            <span className="text-2xl">⚡</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">AIK Admin</h1>
            <p className="text-sm text-white/60">AI Agent Store</p>
          </div>
        </div>
      </div>

      <nav className="p-4">
        <div className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 group",
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                    : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-[1.02]",
                )}
              >
                <span className="text-lg">{item.icon}</span>
                <span className={cn("transition-all duration-300", isActive && "text-white font-semibold")}>
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
            <span className="text-white font-semibold">A</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">Admin</p>
            <p className="text-xs text-white/60">Quản trị viên</p>
          </div>
        </div>
      </div>
    </div>
  )
}
