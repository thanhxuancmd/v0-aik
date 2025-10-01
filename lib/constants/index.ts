// Site configuration
export const SITE_CONFIG = {
  name: "AIK Marketplace",
  description: "Khám phá và so sánh các công cụ AI tốt nhất",
  url: "https://aik-marketplace.vercel.app",
}

// For compatibility with legacy code
export const siteUrl = SITE_CONFIG.url
export const siteHost = new URL(SITE_CONFIG.url).host

// Filter options
export const PRICING_OPTIONS = [
  { value: "all", label: "Tất cả" },
  { value: "free", label: "Miễn phí" },
  { value: "freemium", label: "Freemium" },
  { value: "paid", label: "Trả phí" },
] as const

export const SOURCE_TYPE_OPTIONS = [
  { value: "all", label: "Tất cả" },
  { value: "open-source", label: "Mã nguồn mở" },
  { value: "closed-source", label: "Mã nguồn đóng" },
] as const

export const SORT_OPTIONS = [
  { value: "popularity", label: "Phổ biến nhất" },
  { value: "autonomy", label: "Tự động nhất" },
  { value: "users", label: "Nhiều người dùng" },
  { value: "rating", label: "Đánh giá cao" },
  { value: "name", label: "Tên A-Z" },
  { value: "created_at", label: "Mới nhất" },
] as const
