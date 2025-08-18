"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, FolderOpen, FileText, Home, Settings } from "lucide-react"

const navigation = [
  { name: "Trang chủ", href: "/", icon: Home },
  { name: "Bảng điều khiển", href: "/admin", icon: LayoutDashboard },
  { name: "Quản lý Agents", href: "/admin/agents", icon: Users },
  { name: "Quản lý Danh mục", href: "/admin/categories", icon: FolderOpen },
  { name: "Quản lý Blog", href: "/admin/blog", icon: FileText },
]

export function TopNavigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">AIK Admin</h1>
                  <p className="text-xs text-white/60">AI Agent Store</p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:ml-8 sm:flex sm:space-x-2">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                      isActive
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                        : "text-white/70 hover:text-white hover:bg-white/10",
                    )}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-white">Admin</p>
                <p className="text-xs text-white/60">Quản trị viên</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                <span className="text-white font-semibold">A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
