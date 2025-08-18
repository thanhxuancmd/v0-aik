import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cộng đồng AIK - Kết nối với cộng đồng AI",
  description: "Tham gia cộng đồng developer và người dùng AIK để chia sẻ kinh nghiệm và học hỏi về AI agents",
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Cộng đồng AIK</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Kết nối với hàng nghìn developer và người dùng AI agents. Chia sẻ kinh nghiệm, học hỏi và cùng nhau phát
            triển.
          </p>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">10,000+</div>
              <div className="text-gray-600">Thành viên</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">500+</div>
              <div className="text-gray-600">Dự án chia sẻ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">50+</div>
              <div className="text-gray-600">Sự kiện hàng tháng</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-black mb-8">Tham gia cộng đồng</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Discord</h3>
              <p className="text-gray-600 mb-4">Chat trực tiếp với cộng đồng, hỏi đáp và chia sẻ</p>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Tham gia Discord
              </button>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Forum</h3>
              <p className="text-gray-600 mb-4">Thảo luận chuyên sâu về AI agents và công nghệ</p>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Vào Forum
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
