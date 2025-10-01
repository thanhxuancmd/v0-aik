import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Callout1() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(156,146,172,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold">Sẵn sàng khám phá AI?</h2>
          </div>

          <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Tham gia cộng đồng hàng nghìn người dùng đang sử dụng AI để tối ưu hóa công việc
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3" asChild>
              <a href="/agents">
                Duyệt AI Agents
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 bg-transparent"
              asChild
            >
              <a href="/marketplace">Khám phá Marketplace</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 text-sm opacity-75">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              <span>1000+ AI Agents</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              <span>Miễn phí sử dụng</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              <span>Cập nhật hàng ngày</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
