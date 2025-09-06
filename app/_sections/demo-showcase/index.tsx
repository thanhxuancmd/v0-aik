"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
)

export function DemoShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Xem AI Agents hoạt động thực tế</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá cách các doanh nghiệp Việt Nam đang sử dụng AI Agents để tự động hóa quy trình và tăng hiệu quả
          </p>
        </div>

        {/* Main Demo Video */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-600 to-purple-600">
              <Image src="/placeholder-4axkf.png" alt="AI Agents Platform Demo" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 rounded-full p-6"
                >
                  <PlayIcon className="w-8 h-8" />
                </Button>
              </div>
              <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">Demo 3 phút • Xem cách Vietcombank tiết kiệm 2 tỷ VNĐ/năm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-32 mb-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl overflow-hidden">
              <Image src="/placeholder-j0bt1.png" alt="Vietcombank AI Success" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-black mb-2">Vietcombank</h3>
            <p className="text-sm text-gray-600 mb-3">AI xử lý 80% giao dịch khách hàng tự động</p>
            <div className="text-green-600 font-semibold text-sm">Tiết kiệm 2 tỷ VNĐ/năm</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-32 mb-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl overflow-hidden">
              <Image src="/placeholder-8brhg.png" alt="FPT Software AI Success" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-black mb-2">FPT Software</h3>
            <p className="text-sm text-gray-600 mb-3">AI code review tự động cho 1000+ developers</p>
            <div className="text-green-600 font-semibold text-sm">Tăng 300% tốc độ</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-32 mb-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
              <Image src="/placeholder-ftwzs.png" alt="Vingroup AI Success" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-black mb-2">Vingroup</h3>
            <p className="text-sm text-gray-600 mb-3">AI dự đoán nhu cầu cho 2000+ cửa hàng</p>
            <div className="text-green-600 font-semibold text-sm">Giảm 40% tồn kho</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-32 mb-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden">
              <Image src="/placeholder-9yva9.png" alt="Techcombank AI Success" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-black mb-2">Techcombank</h3>
            <p className="text-sm text-gray-600 mb-3">AI chatbot xử lý 95% câu hỏi khách hàng</p>
            <div className="text-green-600 font-semibold text-sm">Tăng 250% hài lòng</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-xl px-8 py-4 text-lg font-medium">
            Bắt đầu dùng thử miễn phí
          </Button>
          <p className="text-gray-600 mt-4">Không cần thẻ tín dụng • Thiết lập trong 5 phút</p>
        </div>
      </div>
    </section>
  )
}
