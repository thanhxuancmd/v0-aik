"use client"

import { useState, useEffect } from "react"
import type { AgentsResponse, AgentsFilters } from "@/lib/types/agent"

export function useAgents(filters: AgentsFilters = {}) {
  const [data, setData] = useState<AgentsResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        console.log('useAgents: Starting fetch with filters:', filters)
        setLoading(true)
        setError(null)

        const params = new URLSearchParams()

        if (filters.category) params.set("category", filters.category)
        if (filters.search) params.set("search", filters.search)
        if (filters.sortBy) params.set("sortBy", filters.sortBy)
        if (filters.pricing) params.set("pricing", filters.pricing)
        if (filters.sourceType) params.set("sourceType", filters.sourceType)
        if (filters.limit) params.set("limit", filters.limit.toString())
        if (filters.offset) params.set("offset", filters.offset.toString())

        const response = await fetch(`/api/agents?${params.toString()}`)
        console.log('useAgents: API response status:', response.status)

        if (!response.ok) {
          console.error('useAgents: API response not ok:', response.status, response.statusText)
          throw new Error("Failed to fetch agents")
        }

        const result = await response.json()
        console.log('useAgents: Received data:', result)
        setData(result)
      } catch (err) {
        console.error('useAgents: Error occurred:', err)
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchAgents()
  }, [
    filters.category,
    filters.search,
    filters.sortBy,
    filters.pricing,
    filters.sourceType,
    filters.limit,
    filters.offset,
  ])

  console.log('useAgents: Current state:', { data: data?.agents?.length, loading, error })
  return { data, loading, error }
}
