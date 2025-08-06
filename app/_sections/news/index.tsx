import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, TrendingUp, Users, Mail, ArrowRight } from "lucide-react"

export function AINews() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI News & Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cập nhật những tin tức mới nhất về AI, automation và xu hướng công nghệ
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Article */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="destructive">Hot</Badge>
                  <Badge variant="outline">Security</Badge>
                </div>
                <CardTitle className="text-2xl leading-tight">
                  Bảo mật AI Agents: Những thách thức và giải pháp trong năm 2024
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>15 Tháng 1, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>5 phút đọc</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Với sự phát triển mạnh mẽ của AI agents trong doanh nghiệp, vấn đề bảo mật trở thành ưu tiên hàng đầu.
                  Từ việc bảo vệ dữ liệu khách hàng đến ngăn chặn các cuộc tấn công prompt injection, doanh nghiệp cần
                  có chiến lược toàn diện.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold">Những đột phá công nghệ:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>End-to-end encryption cho AI conversations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Zero-trust architecture cho AI deployments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Advanced prompt filtering và content moderation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Real-time threat detection cho AI interactions</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-semibold">ROI Insights từ thị trường:</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">300%</div>
                      <div className="text-sm text-muted-foreground">
                        Tăng trưởng ROI trung bình khi triển khai AI agents (Upwork Study 2024)
                      </div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">65%</div>
                      <div className="text-sm text-muted-foreground">
                        Giảm chi phí vận hành sau 6 tháng sử dụng (Walmart Case Study)
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-semibold">Getting Started Guide:</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong>Bước 1:</strong> Đánh giá nhu cầu bảo mật hiện tại của doanh nghiệp
                    </p>
                    <p>
                      <strong>Bước 2:</strong> Chọn AI agents có chứng chỉ bảo mật phù hợp
                    </p>
                    <p>
                      <strong>Bước 3:</strong> Thiết lập monitoring và alerting system
                    </p>
                    <p>
                      <strong>Bước 4:</strong> Training team về best practices và compliance
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full sm:w-auto">
                    Đọc toàn bộ bài viết
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm">AI Adoption</span>
                  </div>
                  <span className="font-semibold">+127%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Active Users</span>
                  </div>
                  <span className="font-semibold">2.3M</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-purple-500" />
                    <span className="text-sm">This Month</span>
                  </div>
                  <span className="font-semibold">+45K</span>
                </div>
              </CardContent>
            </Card>

            {/* Popular Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Customer Service</span>
                  <Badge variant="secondary">2.1K</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Content Creation</span>
                  <Badge variant="secondary">1.8K</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Data Analytics</span>
                  <Badge variant="secondary">1.5K</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Automation</span>
                  <Badge variant="secondary">1.2K</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sales & Marketing</span>
                  <Badge variant="secondary">980</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Newsletter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Nhận tin tức AI mới nhất và insights độc quyền mỗi tuần</p>
                <div className="space-y-2">
                  <Input placeholder="Email của bạn" type="email" />
                  <Button className="w-full" size="sm">
                    Đăng ký ngay
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Hơn 50,000+ professionals đã đăng ký</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
