import type React from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log("[v0] AdminLayout rendering")

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="ml-64 min-h-screen bg-white">
        <div className="p-8">
          {console.log("[v0] AdminLayout children rendering")}
          {children}
        </div>
      </main>
    </div>
  )
}
