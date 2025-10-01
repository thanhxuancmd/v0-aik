// Stub utilities for compatibility with legacy code
// BaseHub is no longer used in the project

export function getArticleSlugFromSlugPath(slugPath: string): string {
  const parts = slugPath.split("/")
  return parts[parts.length - 1] || ""
}

export function formatDate(date: string | number | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length) + "..."
}
