const DollarSign = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
    />
  </svg>
)

const Users = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
)

const TrendingUp = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const Star = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
)

export function Callout() {
  const backgroundPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%
Tôi thấy có lỗi parse trong 2 file:
1. app/_sections/callout-1/index.tsx
2. app/agents/page.tsx

Lỗi này xảy ra do chuỗi URL trong className có chứa dấu ngoặc kép không được escape đúng cách. Cụ thể là trong phần bg-[url('data:image/svg+xml,...')] có các dấu ngoặc kép bên trong chuỗi SVG data URL gây conflict với JSX parsing.

Tôi cần sửa các chuỗi URL này bằng cách:
1. Sử dụng template literals với backticks thay vì dấu ngoặc kép
2. Hoặc escape các dấu ngoặc kép bên trong
3. Hoặc tách ra thành biến riêng

Hãy sửa cả 2 file này.
</Thinking>

Tôi thấy có lỗi parse JSX do dấu ngoặc kép trong URL data. Hãy sửa các lỗi này:

<CodeProject id="hello-world" taskNameActive="Fixing JSX parse errors in background URLs" taskNameComplete="Fixed JSX parse errors in background URLs">

```typescript file="app/_sections/callout-1/index.tsx"
import { Button } from "@/components/ui/button"\
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const DollarSign = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
    />
  </svg>
)

const Users = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
)

const TrendingUp = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const Star = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
)

export function Callout() {
  const backgroundPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: backgroundPattern }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
              💰 Cơ hội kiếm tiền
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Biến kỹ năng AI thành Doanh thu thực tế
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tham gia cộng đồng 15,000+ developers đang kiếm tiền từ AI agents. Từ ý tưởng đến doanh thu chỉ trong vài tuần.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign />
                </div>
                <div className="text-2xl font-bold text-white mb-2">₫2.8B+</div>
                <div className="text-gray-300 text-sm">Tổng doanh thu developers</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users />
                </div>
                <div className="text-2xl font-bold text-white mb-2">15,420+</div>
                <div className="text-gray-300 text-sm">Developers đang kiếm tiền</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp />
                </div>
                <div className="text-2xl font-bold text-white mb-2">₫45M</div>
                <div className="text-gray-300 text-sm">Doanh thu trung bình/tháng</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star />
                </div>
                <div className="text-2xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-gray-300 text-sm">Đánh giá từ khách hàng</div>
              </CardContent>
            </Card>
          </div>

          {/* Success Story */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  MH
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-xl text-white mb-4">
                  "Từ một developer freelance, giờ tôi có startup AI với doanh thu ₫180M/tháng. AIK Marketplace đã thay đổi cuộc đời tôi hoàn toàn."
                </blockquote>
                <div className="text-gray-300">
                  <div className="font-semibold">Minh Hoàng</div>
                  <div className="text-sm">Founder, AI Solutions Vietnam</div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-400">₫180M</div>
                  <div className="text-gray-300 text-sm">Doanh thu/tháng</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/marketplace" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 rounded-xl px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Bắt đầu bán ngay
              </Button>
            </Link>
            <Link href="/learn-more" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-md rounded-xl px-8 py-4 text-lg font-medium transition-all duration-300 bg-transparent">
                Tìm hiểu thêm
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export const calloutFragment = {
  title: "Biến kỹ năng AI thành Doanh thu thực tế",
  description: "Tham gia cộng đồng 15,000+ developers đang kiếm tiền từ AI agents",
  stats: [
    { label: "Tổng doanh thu developers", value: "₫2.8B+", icon: "dollar" },
    { label: "Developers đang kiếm tiền", value: "15,420+", icon: "users" },
    { label: "Doanh thu trung bình/tháng", value: "₫45M", icon: "trending" },
    { label: "Đánh giá từ khách hàng", value: "4.9/5", icon: "star" },
  ],
  testimonial: {
    quote:
      "Từ một developer freelance, giờ tôi có startup AI với doanh thu ₫180M/tháng. AIK Marketplace đã thay đổi cuộc đời tôi hoàn toàn.",
    author: "Minh Hoàng",
    role: "Founder, AI Solutions Vietnam",
    revenue: "₫180M",
  },
}
