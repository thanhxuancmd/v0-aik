"use client"

import { useState, useEffect } from "react"
import type { Agent, AgentFilters } from "@/lib/types/agent"
import { useDebounce } from "./use-debounce"

interface UseAgentsResult {
  agents: Agent[]
  loading: boolean
  error: string | null
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasMore: boolean
  }
  loadMore: () => void
  retry: () => void
}

export function useAgents(filters: AgentFilters): UseAgentsResult {
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 0,
    hasMore: false,
  })

  const debouncedSearch = useDebounce(filters.search, 500)

  useEffect(() => {
    setPage(1)
    setAgents([])
  }, [debouncedSearch, filters.category, filters.pricing, filters.sourceType, filters.sortBy])

  useEffect(() => {
    async function fetchAgents() {
      try {
        setLoading(true)
        setError(null)

        const params = new URLSearchParams({
          search: debouncedSearch,
          category: filters.category,
          pricing: filters.pricing,
          sourceType: filters.sourceType,
          sortBy: filters.sortBy,
          page: page.toString(),
          limit: "12",
        })

        const response = await fetch(`/api/agents?${params.toString()}`)

        if (!response.ok) {
          throw new Error("Failed to fetch agents")
        }

        const data = await response.json()

        if (page === 1) {
          setAgents(data.agents)
        } else {
          setAgents((prev) => [...prev, ...data.agents])
        }

        setPagination(data.pagination)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred"
        setError(errorMessage)
        console.error("Error fetching agents:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchAgents()
  }, [debouncedSearch, filters.category, filters.pricing, filters.sourceType, filters.sortBy, page])

  const loadMore = () => {
    if (pagination.hasMore && !loading) {
      setPage((prev) => prev + 1)
    }
  }

  const retry = () => {
    setPage(1)
    setAgents([])
    setError(null)
  }

  return {
    agents,
    loading,
    error,
    pagination,
    loadMore,
    retry,
  }
}
