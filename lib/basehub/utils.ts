// Stub utilities for compatibility with legacy code

export function getArticleSlugFromSlugPath(slugPath: string): string {
  const parts = slugPath.split("/")
  return parts[parts.length - 1] || slugPath
}

export function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date
  return new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d)
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length) + "..."
}
