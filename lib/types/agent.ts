export interface Agent {
  id: number
  name: string
  slug: string
  description: string
  category_slug: string
  pricing: "free" | "paid" | "freemium"
  source_type: "open-source" | "closed-source"
  popularity: number
  autonomy: number
  users_count: number
  author_name: string
  author_avatar?: string
  image_url?: string
  tags: string[]
  featured: boolean
  github_url?: string
  demo_url?: string
  website_url?: string
  created_at: string
  updated_at: string
}

export interface Category {
  id: number
  name: string
  slug: string
  icon: string
  description?: string
  agent_count: number
  created_at: string
  updated_at: string
}

export interface AgentsResponse {
  agents: Agent[]
  total: number
  hasMore: boolean
  page: number
  totalPages: number
}

export interface AgentsFilters {
  category?: string
  search?: string
  sortBy?: string
  pricing?: string
  sourceType?: string
  limit?: number
  offset?: number
}
