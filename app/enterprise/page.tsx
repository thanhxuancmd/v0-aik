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
