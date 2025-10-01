"use client"

import { useState, useEffect } from "react"
import type { Category } from "@/lib/types/agent"

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch("/api/categories")

        if (!response.ok) {
          throw new Error("Failed to fetch categories")
        }

        const data = await response.json()
        setCategories(data)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred"
        setError(errorMessage)
        console.error("Error fetching categories:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { categories, loading, error }
}
