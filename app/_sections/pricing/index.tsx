import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Khám phá",
    price: "Miễn phí",
    description: "Hoàn hảo để thử nghiệm AI agents và các dự án nhỏ",
    features: ["5 triển khai AI agent", "Phân tích cơ bản", "Hỗ trợ cộng đồng", "Tích hợp tiêu chuẩn", "1GB lưu trữ"],
    cta: "Bắt đầu",
    popular: false,
  },
  {
    name: "Chuyên nghiệp",
    price: "₫690,000",
    period: "/tháng",
    description: "Lý tưởng cho doanh nghiệp đang phát triển và người dùng nâng cao",
    features: [
      "50 triển khai AI agent",
      "Phân tích nâng cao",
      "Hỗ trợ ưu tiên",
      "Tất cả tích hợp",
      "10GB lưu trữ",
      "Thương hiệu tùy chỉnh",
      "Truy cập API",
    ],
    cta: "Bắt đầu dùng thử miễn phí",
    popular: true,
  },
  {
    name: "Doanh nghiệp",
    price: "Tùy chỉnh",
    description: "Cho các tổ chức lớn với nhu cầu nâng cao",
    features: [
      "Triển khai không giới hạn",
      "Phân tích doanh nghiệp",
      "Hỗ trợ chuyên biệt",
      "Tích hợp tùy chỉnh",
      "Lưu trữ không giới hạn",
      "Giải pháp nhãn trắng",
      "Đảm bảo SLA",
      "Triển khai tại chỗ",
    ],
    cta: "Liên hệ Bán hàng",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Bảng giá Đơn giản, Minh bạch
          </h2>
          <p className="text-xl text-[--text-secondary] dark:text-[--dark-text-secondary] max-w-3xl mx-auto">
            Chọn gói hoàn hảo cho nhu cầu của bạn. Tất cả gói đều bao gồm quyền truy cập vào marketplace và các tính
            năng cốt lõi. Nâng cấp hoặc hạ cấp bất cứ lúc nào.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl border-2 p-8 ${
                plan.popular
                  ? "border-black dark:border-white shadow-xl scale-105"
                  : "border-gray-200 dark:border-gray-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Phổ biến nhất
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-black dark:text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-[--text-secondary] dark:text-[--dark-text-secondary]">{plan.period}</span>
                  )}
                </div>
                <p className="text-[--text-secondary] dark:text-[--dark-text-secondary]">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-black dark:text-white flex-shrink-0" />
                    <span className="text-[--text-primary] dark:text-[--dark-text-primary]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 rounded-xl ${
                  plan.popular
                    ? "bg-black hover:bg-gray-800 text-white"
                    : "bg-white hover:bg-gray-50 text-black border-2 border-black dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:border-white"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[--text-secondary] dark:text-[--dark-text-secondary] mb-4">
            Tất cả gói đều bao gồm dùng thử miễn phí 14 ngày • Không phí thiết lập • Hủy bất cứ lúc nào
          </p>
          <Button
            variant="outline"
            className="border-2 border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black bg-transparent"
          >
            So sánh tất cả tính năng
          </Button>
        </div>
      </div>
    </section>
  )
}
