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
            d="M9 19v-6a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
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

      {/* AI Methodology Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Phương pháp tiếp cận AI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi áp dụng các phương pháp tiên tiến nhất để đảm bảo doanh nghiệp của bạn luôn dẫn đầu trong kỷ
              nguyên AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">AI-First</h3>
              <p className="text-gray-600 mb-4">Thiết kế hệ thống với AI làm nền tảng từ đầu, không phải bổ sung sau</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Kiến trúc tối ưu cho AI</li>
                <li>• Tự động hóa từ gốc</li>
                <li>• Scalability cao</li>
              </ul>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">AI-Driven</h3>
              <p className="text-gray-600 mb-4">
                Quyết định kinh doanh được điều hành bởi insights từ AI và machine learning
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dự đoán xu hướng</li>
                <li>• Tối ưu hóa tự động</li>
                <li>• Phản ứng thời gian thực</li>
              </ul>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Data-Driven</h3>
              <p className="text-gray-600 mb-4">
                Mọi chiến lược và quyết định đều dựa trên dữ liệu thực tế và phân tích sâu
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Analytics toàn diện</li>
                <li>• KPI tracking</li>
                <li>• Evidence-based decisions</li>
              </ul>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Data-Science</h3>
              <p className="text-gray-600 mb-4">
                Áp dụng khoa học dữ liệu để khám phá patterns và tạo ra competitive advantage
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Advanced modeling</li>
                <li>• Pattern recognition</li>
                <li>• Predictive analytics</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-black mb-4">Tại sao phương pháp này quan trọng?</h3>
              <p className="text-gray-600 mb-6">
                Trong thời đại chuyển đổi số, các doanh nghiệp áp dụng phương pháp AI-First và Data-Driven có tốc độ
                tăng trưởng nhanh gấp 3 lần so với các đối thủ truyền thống.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">3x</div>
                  <div className="text-sm text-gray-600">Tăng trưởng nhanh hơn</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">60%</div>
                  <div className="text-sm text-gray-600">Giảm chi phí vận hành</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">85%</div>
                  <div className="text-sm text-gray-600">Cải thiện hiệu quả</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
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
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Ứng dụng thực tế</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá cách các doanh nghiệp hàng đầu đang sử dụng AI Agents để tối ưu hóa quy trình và tăng trưởng
              doanh thu
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Banking & Finance */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Ngân hàng & Tài chính</h3>
                  <p className="text-sm text-gray-500">Vietcombank, Techcombank, BIDV</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-black mb-2">AI Customer Service</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Xử lý 85% câu hỏi khách hàng tự động, giảm thời gian chờ từ 15 phút xuống 30 giây
                  </p>
                  <div className="flex space-x-4 text-xs">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">↑ 300% hiệu quả</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">↓ 60% chi phí</span>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-black mb-2">Fraud Detection AI</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Phát hiện gian lận thời gian thực với độ chính xác 99.2%, ngăn chặn 15M USD tổn thất/năm
                  </p>
                  <div className="flex space-x-4 text-xs">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded">↓ 95% false positive</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">$15M tiết kiệm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* E-commerce & Retail */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Thương mại điện tử</h3>
                  <p className="text-sm text-gray-500">Tiki, Shopee, Lazada</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-black mb-2">Personalization Engine</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Tăng conversion rate 45% thông qua gợi ý sản phẩm AI và dynamic pricing
                  </p>
                  <div className="flex space-x-4 text-xs">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">↑ 45% conversion</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">↑ 25% AOV</span>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-black mb-2">Inventory Management AI</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Dự đoán nhu cầu với độ chính xác 92%, giảm 30% hàng tồn kho và 40% stockout
                  </p>
                  <div className="flex space-x-4 text-xs">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">↓ 30% inventory</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">↓ 40% stockout</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Manufacturing */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Sản xuất & Chế tạo</h3>
                  <p className="text-sm text-gray-500">Vingroup, Hoa Phat, Thaco</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-semibold text-black mb-2">Predictive Maintenance</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Giảm 70% downtime máy móc, tiết kiệm 2.5M USD chi phí bảo trì hàng năm
                  </p>
                  <div className="flex space-x-4 text-xs">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">↓ 70% downtime</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">$2.5M tiết kiệm</span>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-black mb-2">Quality Control AI</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Phát hiện lỗi sản phẩm với độ chính xác 99.8%, giảm 85% sản phẩm lỗi ra thị trường
                  </p>
                  <div className="flex space-x-4 text-xs">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded">↓ 85% defects</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">99.8% accuracy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Healthcare */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Y tế & Chăm sóc sức khỏe</h3>
                  <p className="text-sm text-gray-500">Vinmec, FV Hospital, Bệnh viện Chợ Rẫy</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-black mb-2">Medical Diagnosis AI</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Hỗ trợ chẩn đoán hình ảnh y tế với độ chính xác 96%, giảm 50% thời gian chẩn đoán
                  </p>
                  <div className="flex space-x-4 text-xs">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded">96% accuracy</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">↓ 50% thời gian</span>
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-black mb-2">Patient Management</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Tự động hóa lịch hẹn và theo dõi bệnh nhân, tăng 40% hiệu quả vận hành
                  </p>
                  <div className="flex space-x-4 text-xs">
                    <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded">↑ 40% hiệu quả</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">24/7 monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Summary */}
          <div className="bg-gradient-to-r from-black to-gray-800 rounded-xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Tổng quan ROI từ AI Agents</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Dựa trên dữ liệu từ 500+ doanh nghiệp đã triển khai AI Agents trong 2 năm qua
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">285%</div>
                <div className="text-sm text-gray-300">Trung bình ROI</div>
                <div className="text-xs text-gray-400">trong 18 tháng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">65%</div>
                <div className="text-sm text-gray-300">Giảm chi phí vận hành</div>
                <div className="text-xs text-gray-400">so với phương pháp truyền thống</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">4.2x</div>
                <div className="text-sm text-gray-300">Tăng năng suất</div>
                <div className="text-xs text-gray-400">nhân viên trung bình</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">12</div>
                <div className="text-sm text-gray-300">Tháng payback</div>
                <div className="text-xs text-gray-400">thời gian hoàn vốn trung bình</div>
              </div>
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
