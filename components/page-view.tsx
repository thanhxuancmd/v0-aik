"use client"

import { useEffect } from "react"

interface PageViewProps {
  ingestKey?: string
}

export function PageView({ ingestKey }: PageViewProps) {
  useEffect(() => {
    // Analytics tracking logic can be implemented here
    if (ingestKey) {
      console.log("Page view tracked with key:", ingestKey)
    }
  }, [ingestKey])

  return null
}
