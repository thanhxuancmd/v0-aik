export interface Agent {
  id: number
  name: string
  slug: string
  description: string
  pricing: "free" | "freemium" | "paid"
  source_type: "open_source" | "closed_source" | "api"
  website_url: string | null
  github_url: string | null
  demo_url: string | null
  popularity: number
  autonomy: number
  users_count: number
  rating: number
  created_at: string
  category_name?: string
  category_slug?: string
}

export interface Category {
  id: number
  name: string
  slug: string
  description: string | null
  icon: string | null
  agent_count: number
  created_at: string
}

export interface AgentFilters {
  search: string
  category: string
  pricing: string
  sourceType: string
  sortBy: string
  sortOrder: "asc" | "desc"
}

export interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
  hasMore: boolean
}

export interface AgentsResponse {
  success: boolean
  data: Agent[]
  agents: Agent[] // For backward compatibility
  pagination: Pagination
  message?: string
  error?: string
}

export interface CategoriesResponse {
  success: boolean
  data: Category[]
  categories: Category[] // For backward compatibility
  message?: string
  error?: string
}

export interface ApiError {
  success: false
  error: string
  message?: string
}
