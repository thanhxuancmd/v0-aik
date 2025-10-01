export const SITE_CONFIG = {
  name: "AIK Marketplace",
  description: "Nền tảng AI Agents hàng đầu Việt Nam",
  url: "https://aik-marketplace.vercel.app",
}

// Export for compatibility
export const siteUrl = SITE_CONFIG.url
export const siteHost = "aik-marketplace.vercel.app"

export const PRICING_OPTIONS = [
  { value: "all", label: "Tất cả" },
  { value: "free", label: "Miễn phí" },
  { value: "freemium", label: "Freemium" },
  { value: "paid", label: "Trả phí" },
]

export const SOURCE_TYPE_OPTIONS = [
  { value: "all", label: "Tất cả" },
  { value: "open-source", label: "Open Source" },
  { value: "closed-source", label: "Closed Source" },
  { value: "hybrid", label: "Hybrid" },
]

export const SORT_OPTIONS = [
  { value: "popularity", label: "Phổ biến nhất" },
  { value: "autonomy", label: "Độ tự động cao nhất" },
  { value: "users", label: "Nhiều người dùng nhất" },
  { value: "rating", label: "Đánh giá cao nhất" },
  { value: "name", label: "Tên A-Z" },
  { value: "newest", label: "Mới nhất" },
]
