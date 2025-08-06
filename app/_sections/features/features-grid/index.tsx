import { Bot, Shield, Zap, Globe, Code, BarChart3, Users, Search } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Triển khai Tức thì",
    description:
      "Triển khai AI agents trong vài giây với hệ thống triển khai một cú nhấp chuột. Không cần thiết lập phức tạp.",
  },
  {
    icon: Shield,
    title: "Bảo mật Doanh nghiệp",
    description: "Bảo mật cấp ngân hàng với tuân thủ SOC 2, mã hóa đầu cuối và nhật ký kiểm toán.",
  },
  {
    icon: Bot,
    title: "Agents Đã xác minh",
    description: "Tất cả agents đều được kiểm tra, xác minh và đánh giá bởi cộng đồng nhà phát triển và người dùng.",
  },
  {
    icon: Globe,
    title: "Hệ sinh thái Toàn cầu",
    description: "Kết nối với hệ sinh thái AI agents lớn nhất thế giới với hàng nghìn lựa chọn chất lượng cao.",
  },
  {
    icon: Code,
    title: "Tích hợp Dễ dàng",
    description: "API và SDK đơn giản để tích hợp liền mạch với hệ thống và quy trình làm việc hiện có.",
  },
  {
    icon: BarChart3,
    title: "Phân tích Thời gian thực",
    description: "Giám sát hiệu suất, sử dụng và ROI với các công cụ phân tích và báo cáo toàn diện.",
  },
  {
    icon: Users,
    title: "Cộng đồng Mạnh mẽ",
    description: "Tham gia cộng đồng 100K+ nhà phát triển và doanh nghiệp đang xây dựng tương lai AI.",
  },
  {
    icon: Search,
    title: "Tìm kiếm Thông minh",
    description: "Công cụ tìm kiếm AI giúp bạn tìm đúng agent cho nhu cầu cụ thể trong vài giây.",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Tại sao chọn AIK Marketplace?
          </h2>
          <p className="text-xl text-[--text-secondary] dark:text-[--dark-text-secondary] max-w-3xl mx-auto">
            Nền tảng AI agents hàng đầu với hệ sinh thái hoàn chỉnh. Được xây dựng cho nhà phát triển, được tin tưởng
            bởi doanh nghiệp toàn cầu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">{feature.title}</h3>
              <p className="text-[--text-secondary] dark:text-[--dark-text-secondary] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
