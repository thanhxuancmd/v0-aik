import type React from "react"
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-lg font-semibold text-card-foreground">Admin Panel</h1>
        </div>
      </nav>
      {children}
    </div>
  )
}
