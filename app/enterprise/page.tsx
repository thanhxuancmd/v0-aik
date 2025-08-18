import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AIK Enterprise - Giải pháp AI cho Doanh nghiệp",
  description: "Giải pháp AI agents tùy chỉnh cho doanh nghiệp với bảo mật cao và hỗ trợ chuyên nghiệp",
}

export default function EnterprisePage() {
  const features = [
    {
      title: "Bảo mật cấp doanh nghiệp",
      description: "Mã hóa end-to-end, SSO, và tuân thủ các tiêu chuẩn bảo mật quốc tế",
    },
    {
      title: "Tùy chỉnh hoàn toàn",
      description: "AI agents được thiết kế riêng cho quy trình và nhu cầu của doanh nghiệp",
    },
    {
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ chuyên gia hỗ trợ kỹ thuật và tư vấn 24/7",
    },
    {
      title: "Tích hợp dễ dàng",
      description: "Tích hợp với hệ thống hiện có qua API và webhook",
    },
    {
      title: "Phân tích chi tiết",
      description: "Dashboard và báo cáo chi tiết về hiệu suất AI agents",
    },
    {
      title: "SLA đảm bảo",
      description: "Cam kết uptime 99.9% với SLA rõ ràng",
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
      title: "Customer Service AI",
      description: "AI agent chăm sóc khách hàng 24/7 với khả năng xử lý đa ngôn ngữ",
      features: ["Chatbot thông minh", "Tích hợp CRM", "Phân tích cảm xúc", "Escalation tự động"],
      price: "Từ $299/tháng",
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
      title: "Sales Assistant AI",
      description: "Hỗ trợ bán hàng với phân tích lead và dự đoán xu hướng mua",
      features: ["Lead scoring", "Dự đoán chuyển đổi", "Tự động follow-up", "Báo cáo bán hàng"],
      price: "Từ $399/tháng",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Data Analysis AI",
      description: "Phân tích dữ liệu doanh nghiệp và tạo insights tự động",
      features: ["Báo cáo tự động", "Dự đoán xu hướng", "Anomaly detection", "Dashboard thông minh"],
      price: "Từ $499/tháng",
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
      title: "HR Assistant AI",
      description: "Tự động hóa quy trình HR từ tuyển dụng đến quản lý nhân sự",
      features: ["Screening CV", "Lập lịch phỏng vấn", "Onboarding tự động", "Performance tracking"],
      price: "Từ $349/tháng",
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
      title: "Document AI",
      description: "Xử lý và phân tích tài liệu tự động với độ chính xác cao",
      features: ["OCR thông minh", "Trích xuất dữ liệu", "Phân loại tài liệu", "Workflow tự động"],
      price: "Từ $249/tháng",
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
      title: "Compliance AI",
      description: "Giám sát tuân thủ quy định và phát hiện rủi ro tự động",
      features: ["Risk assessment", "Audit tự động", "Compliance monitoring", "Alert system"],
      price: "Từ $599/tháng",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">AIK Enterprise</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Giải pháp AI agents tùy chỉnh cho doanh nghiệp với bảo mật cao, hiệu suất tối ưu và hỗ trợ chuyên nghiệp.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-800 transition-colors">
            Liên hệ tư vấn
          </button>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Dịch vụ AI Agent cho Doanh nghiệp</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Các giải pháp AI agent chuyên biệt được thiết kế để tối ưu hóa quy trình và nâng cao hiệu quả kinh doanh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-gray-700 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-black mb-2">Tính năng chính:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-black">{service.price}</span>
                    <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors">
                      Tìm hiểu thêm
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Tính năng doanh nghiệp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Ứng dụng thực tế</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-black mb-4">Chăm sóc khách hàng</h3>
              <p className="text-gray-600 mb-4">
                AI agents xử lý 80% câu hỏi khách hàng tự động, giảm thời gian phản hồi và tăng sự hài lòng.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Chatbot đa ngôn ngữ</li>
                <li>• Tích hợp CRM</li>
                <li>• Phân tích cảm xúc</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-black mb-4">Tự động hóa quy trình</h3>
              <p className="text-gray-600 mb-4">
                Tự động hóa các tác vụ lặp đi lặp lại, giúp nhân viên tập trung vào công việc có giá trị cao hơn.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Xử lý đơn hàng</li>
                <li>• Quản lý tài liệu</li>
                <li>• Báo cáo tự động</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-black mb-8">Sẵn sàng bắt đầu?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Liên hệ với đội ngũ chuyên gia để được tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Đặt lịch demo
            </button>
            <button className="border border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors">
              Tải tài liệu
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
