import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, DollarSign, Star } from 'lucide-react'
import Link from "next/link"

export function Callout1() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%239C92AC" fillOpacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
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
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">₫2.8B+</div>
                <div className="text-gray-300 text-sm">Tổng doanh thu developers</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">15,420+</div>
                <div className="text-gray-300 text-sm">Developers đang kiếm tiền</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">₫45M</div>
                <div className="text-gray-300 text-sm">Doanh thu trung bình/tháng</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
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
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-md rounded-xl px-8 py-4 text-lg font-medium transition-all duration-300">
                Tìm hiểu thêm
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Export fragment for reuse
export const calloutFragment = {
  title: "Biến kỹ năng AI thành Doanh thu thực tế",
  description: "Tham gia cộng đồng 15,000+ developers đang kiếm tiền từ AI agents",
  stats: [
    { label: "Tổng doanh thu developers", value: "₫2.8B+", icon: "dollar" },
    { label: "Developers đang kiếm tiền", value: "15,420+", icon: "users" },
    { label: "Doanh thu trung bình/tháng", value: "₫45M", icon: "trending" },
    { label: "Đánh giá từ khách hàng", value: "4.9/5", icon: "star" }
  ],
  testimonial: {
    quote: "Từ một developer freelance, giờ tôi có startup AI với doanh thu ₫180M/tháng. AIK Marketplace đã thay đổi cuộc đời tôi hoàn toàn.",
    author: "Minh Hoàng",
    role: "Founder, AI Solutions Vietnam",
    revenue: "₫180M"
  }
}
