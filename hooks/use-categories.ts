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
        console.log('useCategories: Starting fetch')
        setLoading(true)
        setError(null)

        const response = await fetch("/api/categories")
        console.log('useCategories: API response status:', response.status)

        if (!response.ok) {
          console.error('useCategories: API response not ok:', response.status, response.statusText)
          throw new Error("Failed to fetch categories")
        }

        const result = await response.json()
        console.log('useCategories: Received categories:', result.length)
        setCategories(result)
      } catch (err) {
        console.error('useCategories: Error occurred:', err)
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  console.log('useCategories: Current state:', { categoriesCount: categories.length, loading, error })
  return { categories, loading, error }
}
