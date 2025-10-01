"use client"

import { useState, useEffect } from "react"
import type { Category, CategoriesResponse } from "@/lib/types/agent"

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch("/api/categories")
        const result: CategoriesResponse = await response.json()

        if (!response.ok) {
          throw new Error(result.message || result.error || "Failed to fetch categories")
        }

        if (result.success && Array.isArray(result.data)) {
          setCategories(result.data)
        } else {
          throw new Error("Invalid response format")
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error occurred"
        setError(errorMessage)
        console.error("Error fetching categories:", err)
        setCategories([])
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return {
    categories,
    loading,
    error,
    refetch: () => {
      setLoading(true)
      setError(null)
      // Re-trigger the effect
      setCategories([])
    },
  }
}
