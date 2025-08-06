import { Button } from "@/components/ui/button"
import { Shield, Clock, Users, Headphones } from "lucide-react"

export function Callout2() {
  return (
    <section className="py-20 px-6 bg-[--surface-secondary] dark:bg-[--dark-surface-secondary]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Features */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
                <Shield className="h-8 w-8 text-black dark:text-white mb-4" />
                <h3 className="font-semibold text-black dark:text-white mb-2">Bảo mật Doanh nghiệp</h3>
                <p className="text-sm text-[--text-secondary] dark:text-[--dark-text-secondary]">
                  Tuân thủ SOC 2 với mã hóa đầu cuối
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
                <Clock className="h-8 w-8 text-black dark:text-white mb-4" />
                <h3 className="font-semibold text-black dark:text-white mb-2">99.9% Thời gian hoạt động</h3>
                <p className="text-sm text-[--text-secondary] dark:text-[--dark-text-secondary]">
                  Đảm bảo khả năng sẵn sàng với hạ tầng toàn cầu
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
                <Users className="h-8 w-8 text-black dark:text-white mb-4" />
                <h3 className="font-semibold text-black dark:text-white mb-2">Quản lý Nhóm</h3>
                <p className="text-sm text-[--text-secondary] dark:text-[--dark-text-secondary]">
                  Vai trò người dùng và quyền nâng cao
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
                <Headphones className="h-8 w-8 text-black dark:text-white mb-4" />
                <h3 className="font-semibold text-black dark:text-white mb-2">Hỗ trợ Ưu tiên</h3>
                <p className="text-sm text-[--text-secondary] dark:text-[--dark-text-secondary]">
                  Đội ngũ hỗ trợ chuyên biệt cho khách hàng doanh nghiệp
                </p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
                <div>Được xây dựng cho</div>
                <div>Quy mô Doanh nghiệp</div>
              </h2>
              <p className="text-xl text-[--text-secondary] dark:text-[--dark-text-secondary] leading-relaxed">
                Triển khai AI agents trên toàn tổ chức với bảo mật, tuân thủ và hỗ trợ cấp doanh nghiệp. Được tin tưởng
                bởi các công ty Fortune 500 trên toàn thế giới.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                <span className="text-[--text-primary] dark:text-[--dark-text-primary]">
                  Tích hợp Đăng nhập một lần (SSO)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                <span className="text-[--text-primary] dark:text-[--dark-text-primary]">
                  Phân tích và báo cáo nâng cao
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                <span className="text-[--text-primary] dark:text-[--dark-text-primary]">
                  Tùy chọn triển khai tùy chỉnh
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                <span className="text-[--text-primary] dark:text-[--dark-text-primary]">
                  Quản lý tài khoản chuyên biệt
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl">
                Liên hệ Bán hàng
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black px-8 py-4 rounded-xl bg-transparent"
              >
                Xem tính năng Doanh nghiệp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
