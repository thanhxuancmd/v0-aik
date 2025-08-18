import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bảng giá AIK - Gói dịch vụ AI Agents",
  description: "Khám phá các gói dịch vụ AIK phù hợp với nhu cầu của bạn, từ cá nhân đến doanh nghiệp",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Miễn phí",
      price: "0đ",
      period: "/tháng",
      features: ["5 AI agents miễn phí", "1,000 requests/tháng", "Hỗ trợ cộng đồng", "Tài liệu cơ bản"],
      popular: false,
    },
    {
      name: "Pro",
      price: "299,000đ",
      period: "/tháng",
      features: [
        "Không giới hạn AI agents",
        "50,000 requests/tháng",
        "Hỗ trợ ưu tiên",
        "API access",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Liên hệ",
      period: "",
      features: [
        "Giải pháp tùy chỉnh",
        "Không giới hạn requests",
        "Dedicated support",
        "On-premise deployment",
        "SLA guarantee",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Bảng giá</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Chọn gói dịch vụ phù hợp với nhu cầu của bạn. Bắt đầu miễn phí và nâng cấp khi cần thiết.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`border rounded-xl p-8 relative ${plan.popular ? "border-black shadow-lg" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-black text-white px-4 py-1 rounded-full text-sm">Phổ biến</span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-black mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-600">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? "bg-black text-white hover:bg-gray-800"
                      : "border border-black text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Liên hệ" : "Bắt đầu"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Câu hỏi thường gặp</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-black mb-2">Tôi có thể thay đổi gói dịch vụ không?</h3>
              <p className="text-gray-600">Có, bạn có thể nâng cấp hoặc hạ cấp gói dịch vụ bất kỳ lúc nào.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-black mb-2">Có hỗ trợ hoàn tiền không?</h3>
              <p className="text-gray-600">Chúng tôi có chính sách hoàn tiền trong 30 ngày đầu tiên.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
