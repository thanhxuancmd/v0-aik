export interface Category {
  id: number
  name: string
  slug: string
  icon: string
  description: string
  agent_count: number
}

export interface Agent {
  id: number
  name: string
  slug: string
  description: string
  category: string
  pricing: "free" | "freemium" | "paid"
  source_type: "open-source" | "closed-source" | "hybrid"
  popularity_score: number
  autonomy_level: number
  active_users: number
  rating: number
  logo_url: string | null
  website_url: string | null
  github_url: string | null
  demo_url: string | null
  tags: string[]
  created_at: string
  updated_at: string
}

export interface AgentFilters {
  search: string
  category: string
  pricing: string
  sourceType: string
  sortBy: string
}

export interface PaginationInfo {
  page: number
  limit: number
  total: number
  totalPages: number
  hasMore: boolean
}
