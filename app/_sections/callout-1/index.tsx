'use client'

import { ArrowRight, Users, Star, TrendingUp, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Người dùng hoạt động',
    description: 'Cộng đồng developer và doanh nghiệp tin tùng'
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Đánh giá trung bình',
    description: 'Từ hơn 10,000 reviews của khách hàng'
  },
  {
    icon: TrendingUp,
    value: '300%',
    label: 'Tăng trưởng năng suất',
    description: 'Hiệu quả công việc được cải thiện đáng kể'
  },
  {
    icon: Award,
    value: '99.9%',
    label: 'Độ tin cậy',
    description: 'Uptime và chất lượng dịch vụ ổn định'
  }
]

const testimonial = {
  content: "AIK đã thay đổi hoàn toàn cách chúng tôi làm việc. Từ việc tự động hóa quy trình đến tạo nội dung, mọi thứ đều trở nên dễ dàng và hiệu quả hơn rất nhiều.",
  author: {
    name: "Nguyễn Minh Tuấn",
    role: "CEO, TechViet Solutions",
    avatar: "/placeholder-user.jpg"
  },
  company: "TechViet Solutions"
}

export const calloutFragment = {
  title: "Tham gia cộng đồng AI hàng đầu Việt Nam",
  subtitle: "Hơn 50,000 doanh nghiệp và developer đã tin tưởng sử dụng AIK để tối ưu hóa công việc",
  stats,
  testimonial,
  cta: {
    primary: "Bắt đầu miễn phí",
    secondary: "Xem demo"
  }
}

export function Callout1() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fillOpacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/10 text-white border-white/20 backdrop-blur-sm">
            🚀 Được tin tưởng bởi hàng nghìn doanh nghiệp
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {calloutFragment.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {calloutFragment.subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-purple-200 mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm text-gray-400">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Testimonial */}
        <div className="mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-200 italic mb-6">
                  "{testimonial.content}"
                </blockquote>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.author.avatar || "/placeholder.svg"} alt={testimonial.author.name} />
                  <AvatarFallback className="bg-white/20 text-white">
                    {testimonial.author.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-semibold text-white">
                    {testimonial.author.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.author.role}
                  </div>
                  <div className="text-sm text-purple-300">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-3"
            >
              {calloutFragment.cta.primary}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
            >
              {calloutFragment.cta.secondary}
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            Miễn phí 14 ngày dùng thử • Không cần thẻ tín dụng • Hủy bất cứ lúc nào
          </p>
        </div>
      </div>
    </section>
  )
}

export default Callout1
