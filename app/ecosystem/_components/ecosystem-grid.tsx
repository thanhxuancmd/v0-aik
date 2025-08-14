"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface EcosystemItem {
  id: string
  name: string
  description: string
  category: string
  logo: string
  website: string
  popularity: number
  pricing: "Free" | "Freemium" | "Paid" | "Enterprise"
  tags: string[]
}

export function EcosystemGrid() {
  const [items, setItems] = useState<EcosystemItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEcosystemData()
  }, [])

  const fetchEcosystemData = async () => {
    try {
      const response = await fetch("/api/ecosystem")
      const data = await response.json()
      setItems(data)
    } catch (error) {
      console.error("Error fetching ecosystem data:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  const groupedItems = items.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, EcosystemItem[]>,
  )

  return (
    <div className="space-y-12">
      {Object.entries(groupedItems).map(([category, categoryItems]) => (
        <section key={category}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category}</h2>
            <Badge variant="secondary">{categoryItems.length} công cụ</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <Image
                        src={item.logo || "/placeholder.svg"}
                        alt={`${item.name} logo`}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `/placeholder.svg?height=48&width=48&query=${encodeURIComponent(item.name + " logo")}`
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg truncate">{item.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {item.pricing}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <span>⭐</span>
                          <span>{item.popularity}/10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-sm mb-4 line-clamp-3">{item.description}</CardDescription>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {item.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{item.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    onClick={() => window.open(item.website, "_blank")}
                  >
                    <span className="mr-2">↗</span>
                    Xem chi tiết
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
