import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin", "vietnamese"] })

export const metadata: Metadata = {
  title: {
    default: "AIK Marketplace - Khám phá AI Agents",
    template: "%s | AIK Marketplace",
  },
  description: "Khám phá và so sánh các công cụ AI tốt nhất cho công việc của bạn",
  keywords: ["AI", "AI Agents", "Machine Learning", "Automation", "ChatGPT", "Claude"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="aik-theme">
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main>{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
