"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// SVG Icons
const ExternalLinkIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const StarIcon = () => (
  <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="rounded-3xl border border-gray-200 bg-gray-50 p-6 animate-pulse">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-4/5"></div>
            </div>
            <div className="flex gap-2 mb-4">
              <div className="h-6 bg-gray-200 rounded-full w-16"></div>
              <div className="h-6 bg-gray-200 rounded-full w-20"></div>
            </div>
            <div className="h-9 bg-gray-200 rounded-xl"></div>
          </div>
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

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case "Free":
        return "bg-green-100 border-green-300 text-green-800"
      case "Freemium":
        return "bg-blue-100 border-blue-300 text-blue-800"
      case "Paid":
        return "bg-purple-100 border-purple-300 text-purple-800"
      case "Enterprise":
        return "bg-orange-100 border-orange-300 text-orange-800"
      default:
        return "bg-gray-100 border-gray-300 text-gray-800"
    }
  }

  return (
    <div className="space-y-16">
      {Object.entries(groupedItems).map(([category, categoryItems]) => (
        <section key={category}>
          {/* Category Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black">{category}</h2>
            <Badge className="rounded-full bg-gray-100 border border-gray-300 text-gray-800 px-4 py-2">
              {categoryItems.length} công cụ
            </Badge>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl border border-gray-200 bg-white shadow-sm p-6 hover:scale-[1.02] hover:shadow-md transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
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
                    <h3 className="text-lg font-bold text-black truncate group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={`rounded-full text-xs ${getPricingColor(item.pricing)}`}>{item.pricing}</Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <StarIcon />
                        <span>{item.popularity}/10</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      className="rounded-full bg-blue-100 border border-blue-300 text-blue-800 text-xs hover:bg-blue-200 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {item.tags.length > 3 && (
                    <Badge className="rounded-full bg-gray-100 border border-gray-300 text-gray-600 text-xs">
                      +{item.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Action Button */}
                <Button
                  className="w-full rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300"
                  onClick={() => window.open(item.website, "_blank")}
                >
                  <ExternalLinkIcon />
                  <span className="ml-2">Xem chi tiết</span>
                </Button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
