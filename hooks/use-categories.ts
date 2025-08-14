"use client"

import { useState, useEffect } from "react"
import type { Category } from "@/lib/types/agent"

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

        if (!response.ok) {
          throw new Error("Failed to fetch categories")
        }

        const result = await response.json()
        setCategories(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { categories, loading, error }
}
