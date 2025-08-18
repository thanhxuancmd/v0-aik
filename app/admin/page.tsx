export default function AdminDashboard() {
  return (
    <div className="text-white">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          Bảng điều khiển
        </h1>
        <p className="text-xl text-white/70">Chào mừng đến với bảng quản trị AI Agent Store</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:scale-[1.02] transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-white/70">Tổng số Agents</div>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-lg">🤖</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">12</div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-lg">📈</span>
            <span className="text-green-400">+2</span>
            <span className="text-white/50">từ tháng trước</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:scale-[1.02] transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-white/70">Danh mục</div>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
              <span className="text-lg">📁</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">8</div>
          <div className="text-sm text-white/50">Danh mục đang hoạt động</div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:scale-[1.02] transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-white/70">Bài viết Blog</div>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center">
              <span className="text-lg">📝</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">24</div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-lg">📈</span>
            <span className="text-green-400">+4</span>
            <span className="text-white/50">tuần này</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:scale-[1.02] transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-white/70">Hệ sinh thái</div>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center">
              <span className="text-lg">🌐</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">156</div>
          <div className="text-sm text-white/50">Tổng số mục</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Hoạt động gần đây</h2>
            <p className="text-white/60">Những thay đổi mới nhất trong cửa hàng của bạn</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-white font-medium mb-1">Agent mới được thêm: GPT-4 Assistant</p>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <span>🕐</span>
                  <span>2 giờ trước</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-white font-medium mb-1">Bài viết blog đã được xuất bản</p>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <span>🕐</span>
                  <span>1 ngày trước</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-white font-medium mb-1">Danh mục đã cập nhật: AI Tools</p>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <span>🕐</span>
                  <span>3 ngày trước</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Thao tác nhanh</h2>
            <p className="text-white/60">Các tác vụ quản trị thường dùng</p>
          </div>

          <div className="space-y-4">
            <button className="w-full text-left p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">➕</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    Thêm Agent mới
                  </div>
                  <div className="text-sm text-white/60">Tạo danh sách AI agent mới</div>
                </div>
              </div>
            </button>

            <button className="w-full text-left p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✏️</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    Viết bài Blog
                  </div>
                  <div className="text-sm text-white/60">Xuất bản nội dung mới</div>
                </div>
              </div>
            </button>

            <button className="w-full text-left p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⚙️</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                    Quản lý Danh mục
                  </div>
                  <div className="text-sm text-white/60">Tổ chức các danh mục agent</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
