import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TooltipProvider } from "@/components/ui/tooltip"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["monaco", "monospace"],
})

export const metadata: Metadata = {
  title: "AIK Marketplace - Nền tảng AI Agents hàng đầu Việt Nam",
  description:
    "Khám phá và triển khai AI agents mạnh mẽ cho doanh nghiệp của bạn. Hơn 15,000+ AI agents chất lượng cao từ cộng đồng developer Việt Nam.",
  keywords: "AI agents, artificial intelligence, automation, Vietnam, marketplace, chatbot, AI assistant",
  authors: [{ name: "AIK Team" }],
  creator: "AIK Marketplace",
  publisher: "AIK Marketplace",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aik-marketplace.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/vi",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "AIK Marketplace - Nền tảng AI Agents hàng đầu Việt Nam",
    description:
      "Khám phá và triển khai AI agents mạnh mẽ cho doanh nghiệp của bạn. Hơn 15,000+ AI agents chất lượng cao từ cộng đồng developer Việt Nam.",
    url: "https://aik-marketplace.vercel.app",
    siteName: "AIK Marketplace",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AIK Marketplace - AI Agents Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIK Marketplace - Nền tảng AI Agents hàng đầu Việt Nam",
    description:
      "Khám phá và triển khai AI agents mạnh mẽ cho doanh nghiệp của bạn. Hơn 15,000+ AI agents chất lượng cao từ cộng đồng developer Việt Nam.",
    images: ["/og-image.jpg"],
    creator: "@aik_marketplace",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
