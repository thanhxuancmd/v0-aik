"use client"

import { useState, useEffect, useCallback } from "react"
import { useDebounce } from "./use-debounce"
import type { Agent, AgentFilters, Pagination, AgentsResponse } from "@/lib/types/agent"

const initialFilters: AgentFilters = {
  search: "",
  category: "all",
  pricing: "all",
  sourceType: "all",
  sortBy: "popularity",
  sortOrder: "desc",
}

const initialPagination: Pagination = {
  page: 1,
  limit: 12,
  total: 0,
  totalPages: 0,
  hasMore: false,
}

export function useAgents() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<AgentFilters>(initialFilters)
  const [pagination, setPagination] = useState<Pagination>(initialPagination)

  const debouncedSearch = useDebounce(filters.search, 500)

  const buildQueryString = useCallback(
    (currentFilters: AgentFilters, page = 1) => {
      const params = new URLSearchParams()

      if (currentFilters.search) params.set("search", currentFilters.search)
      if (currentFilters.category !== "all") params.set("category", currentFilters.category)
      if (currentFilters.pricing !== "all") params.set("pricing", currentFilters.pricing)
      if (currentFilters.sourceType !== "all") params.set("sourceType", currentFilters.sourceType)
      if (currentFilters.sortBy) params.set("sortBy", currentFilters.sortBy)
      if (currentFilters.sortOrder) params.set("sortOrder", currentFilters.sortOrder)
      params.set("page", page.toString())
      params.set("limit", pagination.limit.toString())

      return params.toString()
    },
    [pagination.limit],
  )

  const fetchAgents = useCallback(
    async (currentFilters: AgentFilters, page = 1, append = false) => {
      try {
        if (!append) {
          setLoading(true)
        }
        setError(null)

        const queryString = buildQueryString(currentFilters, page)
        const response = await fetch(`/api/agents?${queryString}`)
        const result: AgentsResponse = await response.json()

        if (!response.ok) {
          throw new Error(result.message || result.error || "Failed to fetch agents")
        }

        if (result.success && Array.isArray(result.data)) {
          if (append) {
            setAgents((prev) => [...prev, ...result.data])
          } else {
            setAgents(result.data)
          }
          setPagination(result.pagination)
        } else {
          throw new Error("Invalid response format")
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error occurred"
        setError(errorMessage)
        console.error("Error fetching agents:", err)

        if (!append) {
          setAgents([])
          setPagination(initialPagination)
        }
      } finally {
        setLoading(false)
      }
    },
    [buildQueryString],
  )

  // Fetch agents when filters change
  useEffect(() => {
    const currentFilters = { ...filters, search: debouncedSearch }
    fetchAgents(currentFilters, 1, false)
  }, [debouncedSearch, filters, fetchAgents])

  const updateFilters = useCallback((newFilters: Partial<AgentFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }, [])

  const resetFilters = useCallback(() => {
    setFilters(initialFilters)
  }, [])

  const loadMore = useCallback(() => {
    if (pagination.hasMore && !loading) {
      const currentFilters = { ...filters, search: debouncedSearch }
      fetchAgents(currentFilters, pagination.page + 1, true)
    }
  }, [pagination.hasMore, pagination.page, loading, filters, debouncedSearch, fetchAgents])

  const refetch = useCallback(() => {
    const currentFilters = { ...filters, search: debouncedSearch }
    fetchAgents(currentFilters, 1, false)
  }, [filters, debouncedSearch, fetchAgents])

  return {
    agents,
    loading,
    error,
    pagination,
    filters,
    updateFilters,
    resetFilters,
    loadMore,
    refetch,
  }
}
