// Site configuration
export const SITE_CONFIG = {
  name: "AIK Marketplace",
  description: "Khám phá và so sánh các AI Agents hàng đầu",
  url: "https://aik-marketplace.vercel.app",
  ogImage: "https://aik-marketplace.vercel.app/og.png",
  links: {
    twitter: "https://twitter.com/aik",
    github: "https://github.com/aik",
  },
}

// For compatibility with legacy code
export const siteUrl = SITE_CONFIG.url
export const siteHost = "aik-marketplace.vercel.app"

// Pricing options for filters
export const PRICING_OPTIONS = [
  { value: "all", label: "Tất cả" },
  { value: "free", label: "Miễn phí" },
  { value: "freemium", label: "Freemium" },
  { value: "paid", label: "Trả phí" },
]

// Source type options for filters
export const SOURCE_TYPE_OPTIONS = [
  { value: "all", label: "Tất cả" },
  { value: "open_source", label: "Mã nguồn mở" },
  { value: "closed_source", label: "Mã nguồn đóng" },
  { value: "api", label: "API" },
]

// Sort options
export const SORT_OPTIONS = [
  { value: "popularity", label: "Phổ biến nhất" },
  { value: "autonomy", label: "Tự động cao nhất" },
  { value: "users", label: "Nhiều người dùng nhất" },
  { value: "rating", label: "Đánh giá cao nhất" },
  { value: "name", label: "Tên A-Z" },
  { value: "newest", label: "Mới nhất" },
]
