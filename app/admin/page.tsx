export default function AdminDashboard() {
  return (
    <div className="text-gray-900 bg-white min-h-screen p-8">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">Bảng điều khiển</h1>
        <p className="text-xl text-gray-600">Chào mừng đến với bảng quản trị AI Agent Store</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-gray-500">Tổng số Agents</div>
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-green-600 font-medium">+2</span>
            <span className="text-gray-500">từ tháng trước</span>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-gray-500">Danh mục</div>
            <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">8</div>
          <div className="text-sm text-gray-500">Danh mục đang hoạt động</div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-gray-500">Bài viết Blog</div>
            <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">24</div>
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-green-600 font-medium">+4</span>
            <span className="text-gray-500">tuần này</span>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-gray-500">Hệ sinh thái</div>
            <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">156</div>
          <div className="text-sm text-gray-500">Tổng số mục</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="rounded-lg border border-gray-200 bg-white p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Hoạt động gần đây</h2>
            <p className="text-gray-600">Những thay đổi mới nhất trong cửa hàng của bạn</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium mb-1">Agent mới được thêm: GPT-4 Assistant</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>2 giờ trước</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium mb-1">Bài viết blog đã được xuất bản</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>1 ngày trước</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium mb-1">Danh mục đã cập nhật: AI Tools</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>3 ngày trước</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-lg border border-gray-200 bg-white p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thao tác nhanh</h2>
            <p className="text-gray-600">Các tác vụ quản trị thường dùng</p>
          </div>

          <div className="space-y-4">
            <button className="w-full text-left p-4 rounded-lg border border-blue-200 bg-blue-50 hover:bg-blue-100 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Thêm Agent mới</div>
                  <div className="text-sm text-gray-600">Tạo danh sách AI agent mới</div>
                </div>
              </div>
            </button>

            <button className="w-full text-left p-4 rounded-lg border border-purple-200 bg-purple-50 hover:bg-purple-100 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Viết bài Blog</div>
                  <div className="text-sm text-gray-600">Xuất bản nội dung mới</div>
                </div>
              </div>
            </button>

            <button className="w-full text-left p-4 rounded-lg border border-green-200 bg-green-50 hover:bg-green-100 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Quản lý Danh mục</div>
                  <div className="text-sm text-gray-600">Tổ chức các danh mục agent</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
