// Compatibility exports for legacy code
// These are no longer used but kept to prevent build errors

export function getArticleSlugFromSlugPath(slugPath: string): string {
  // Extract the last segment of the slug path
  const segments = slugPath.split("/")
  return segments[segments.length - 1] || ""
}

export function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date
  return new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d)
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}
