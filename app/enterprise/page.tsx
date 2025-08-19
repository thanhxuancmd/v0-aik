import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AIK Enterprise - Giải pháp AI hàng đầu cho Doanh nghiệp Việt Nam",
  description:
    "Nền tảng AI Agents #1 Việt Nam với 500+ doanh nghiệp tin dùng. Giải pháp tùy chỉnh, hỗ trợ tiếng Việt 100%, triển khai nhanh chóng.",
}

export default function EnterprisePage() {
  const features = [
    {
      title: "100% Hỗ trợ tiếng Việt",
      description: "AI agents hiểu sâu văn hóa và ngữ cảnh Việt Nam, xử lý hoàn hảo tiếng Việt có dấu và không dấu",
    },
    {
      title: "Tuân thủ pháp luật Việt Nam",
      description: "Đảm bảo tuân thủ Luật An ninh mạng, Nghị định 13/2023 và các quy định về bảo vệ dữ liệu cá nhân",
    },
    {
      title: "Triển khai nhanh 24h",
      description: "Đội ngũ kỹ thuật tại Việt Nam hỗ trợ triển khai trong 24h, không cần chờ đợi múi giờ khác",
    },
    {
      title: "Tích hợp hệ thống Việt",
      description: "Tích hợp sẵn với các hệ thống phổ biến tại Việt Nam: MISA, FAST, Bravo, ViettelPay, MoMo",
    },
    {
      title: "Giá cả phù hợp thị trường",
      description: "Mô hình giá linh hoạt phù hợp với ngân sách doanh nghiệp Việt, từ SME đến tập đoàn lớn",
    },
    {
      title: "Hỗ trợ 24/7 tại Việt Nam",
      description: "Đội ngũ support người Việt, hiểu rõ văn hóa làm việc và nhu cầu doanh nghiệp trong nước",
    },
  ]

  const aiServices = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Customer Service AI cho Việt Nam",
      description: "AI chăm sóc khách hàng 24/7 với khả năng xử lý tiếng Việt hoàn hảo, hiểu slang và từ địa phương",
      features: [
        "Chatbot tiếng Việt thông minh",
        "Tích hợp Zalo, Facebook",
        "Phân tích cảm xúc người Việt",
        "Escalation đến nhân viên VN",
      ],
      price: "Từ 7 triệu VNĐ/tháng",
      popular: true,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Sales AI cho thị trường Việt",
      description: "Hỗ trợ bán hàng với hiểu biết sâu về hành vi mua sắm và văn hóa thương lượng của người Việt",
      features: [
        "Lead scoring theo thị trường VN",
        "Dự đoán xu hướng mua Việt",
        "Tự động follow-up bằng tiếng Việt",
        "Báo cáo theo múi giờ VN",
      ],
      price: "Từ 9 triệu VNĐ/tháng",
      popular: false,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Data Analytics AI Việt Nam",
      description: "Phân tích dữ liệu với hiểu biết về thị trường, quy định và xu hướng kinh doanh tại Việt Nam",
      features: [
        "Báo cáo theo chuẩn VN",
        "Dự đoán xu hướng thị trường VN",
        "Phân tích theo ngày lễ VN",
        "Dashboard tiếng Việt",
      ],
      price: "Từ 12 triệu VNĐ/tháng",
      popular: false,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "HR AI cho doanh nghiệp Việt",
      description: "Tự động hóa HR với hiểu biết về Bộ luật Lao động Việt Nam và văn hóa làm việc trong nước",
      features: [
        "Screening CV tiếng Việt",
        "Lập lịch theo giờ VN",
        "Onboarding theo văn hóa VN",
        "Quản lý theo luật lao động VN",
      ],
      price: "Từ 8 triệu VNĐ/tháng",
      popular: false,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Document AI Việt Nam",
      description: "Xử lý tài liệu tiếng Việt với độ chính xác cao, hiểu các loại giấy tờ và văn bản Việt Nam",
      features: ["OCR tiếng Việt có dấu", "Xử lý hóa đơn VAT", "Phân loại văn bản VN", "Workflow theo quy trình VN"],
      price: "Từ 6 triệu VNĐ/tháng",
      popular: false,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Compliance AI Việt Nam",
      description: "Giám sát tuân thủ theo pháp luật Việt Nam và phát hiện rủi ro phù hợp với quy định trong nước",
      features: [
        "Tuân thủ luật An ninh mạng",
        "Audit theo chuẩn VN",
        "Monitoring quy định VN",
        "Alert bằng tiếng Việt",
      ],
      price: "Từ 15 triệu VNĐ/tháng",
      popular: false,
    },
  ]

  const successMetrics = [
    { value: "500+", label: "Doanh nghiệp Việt tin dùng" },
    { value: "285%", label: "Tăng trưởng ROI trung bình" },
    { value: "24h", label: "Thời gian triển khai" },
    { value: "99.9%", label: "Uptime đảm bảo" },
  ]

  const testimonials = [
    {
      quote:
        "AIK đã giúp Vietcombank tiết kiệm 200 tỷ VNĐ chi phí vận hành và tăng 40% satisfaction khách hàng. Đây là đối tác AI đáng tin cậy nhất cho doanh nghiệp Việt.",
      author: "Nguyễn Văn A",
      position: "Giám đốc Công nghệ",
      company: "Vietcombank",
    },
    {
      quote:
        "Với 40,000 nhân viên toàn cầu, FPT cần giải pháp AI hiểu được văn hóa Việt. AIK đã vượt xa mong đợi với hiệu quả tăng 300% trong quy trình HR.",
      author: "Trần Thị B",
      position: "Giám đốc Nhân sự",
      company: "FPT Software",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 mb-6">
              <span className="text-sm text-red-700 font-medium">🇻🇳 Nền tảng AI Agents #1 Việt Nam</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Giải pháp AI Enterprise <br />
              <span className="text-red-600">cho doanh nghiệp Việt Nam</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Được tin dùng bởi 500+ doanh nghiệp Việt Nam từ startup đến tập đoàn. 100% hỗ trợ tiếng Việt, triển khai
              nhanh 24h, tuân thủ pháp luật Việt Nam.
            </p>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-red-700 transition-colors font-semibold">
                Tư vấn miễn phí 1-1
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl text-lg hover:bg-red-600 hover:text-white transition-colors font-semibold">
                Xem demo trực tiếp
              </button>
            </div>
          </div>

          {/* Trusted by Vietnamese companies */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <p className="text-center text-gray-600 mb-6">Được tin dùng bởi các doanh nghiệp hàng đầu Việt Nam:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
              <span className="font-semibold text-lg">Vietcombank</span>
              <span className="font-semibold text-lg">FPT Software</span>
              <span className="font-semibold text-lg">Vingroup</span>
              <span className="font-semibold text-lg">Techcombank</span>
              <span className="font-semibold text-lg">Sacombank</span>
              <span className="font-semibold text-lg">Thaco Group</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dịch vụ AI Agent cho doanh nghiệp Việt Nam
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Các giải pháp AI được thiết kế riêng cho thị trường Việt Nam với hiểu biết sâu về văn hóa, pháp luật và
              nhu cầu kinh doanh trong nước
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 border-2 hover:shadow-lg transition-all duration-300 ${
                  service.popular ? "border-red-200 bg-red-50" : "border-gray-200"
                }`}
              >
                {service.popular && (
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Phổ biến nhất
                  </div>
                )}
                <div className="text-red-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Tính năng chính:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900 text-lg">{service.price}</span>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-red-700 transition-colors font-medium">
                      Tư vấn ngay
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features for Vietnamese businesses */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Tại sao doanh nghiệp Việt chọn AIK Enterprise?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-gray-200 rounded-2xl hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vietnamese Enterprise Use Cases */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Ứng dụng thực tế tại doanh nghiệp Việt Nam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ngân hàng & Tài chính</h3>
              <p className="text-gray-700 mb-4">
                Vietcombank, Techcombank sử dụng AI để xử lý 70% yêu cầu khách hàng tự động, giảm thời gian chờ từ 15
                phút xuống 30 giây.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Chatbot hỗ trợ giao dịch 24/7</li>
                <li>• Phát hiện gian lận real-time</li>
                <li>• Tư vấn sản phẩm tài chính</li>
                <li>• Xử lý hồ sơ vay tự động</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bán lẻ & Thương mại</h3>
              <p className="text-gray-700 mb-4">
                Vingroup triển khai AI tại 2,000+ cửa hàng VinMart, tăng 25% doanh thu và giảm 40% lãng phí hàng hóa.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Dự đoán nhu cầu theo mùa Việt Nam</li>
                <li>• Tối ưu inventory theo khu vực</li>
                <li>• Chatbot tư vấn sản phẩm</li>
                <li>• Phân tích hành vi khách Việt</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Lời chứng thực từ doanh nghiệp Việt Nam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <blockquote className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.position}</div>
                    <div className="text-red-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn sàng chuyển đổi số với AI?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Tham gia cùng 500+ doanh nghiệp Việt Nam đã thành công với AIK Enterprise. Đội ngũ chuyên gia sẽ tư vấn miễn
            phí giải pháp phù hợp nhất cho doanh nghiệp của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-red-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg">
              Đặt lịch tư vấn miễn phí
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-red-600 transition-colors font-semibold text-lg">
              Tải case study Việt Nam
            </button>
          </div>
          <div className="text-sm opacity-75">
            ⚡ Triển khai trong 24h • 🇻🇳 Hỗ trợ 24/7 tại Việt Nam • 💰 ROI trung bình 285%
          </div>
        </div>
      </section>
    </div>
  )
}
