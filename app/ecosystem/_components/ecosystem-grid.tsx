"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star } from "lucide-react"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 animate-pulse">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl"></div>
              <div className="flex-1">
                <div className="h-4 bg-white/10 rounded mb-2"></div>
                <div className="h-3 bg-white/10 rounded w-2/3"></div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-3 bg-white/10 rounded"></div>
              <div className="h-3 bg-white/10 rounded w-4/5"></div>
            </div>
            <div className="flex gap-2 mb-4">
              <div className="h-6 bg-white/10 rounded-full w-16"></div>
              <div className="h-6 bg-white/10 rounded-full w-20"></div>
            </div>
            <div className="h-9 bg-white/10 rounded-xl"></div>
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
        return "from-green-600/20 to-emerald-600/20 border-green-500/30 text-green-200"
      case "Freemium":
        return "from-blue-600/20 to-cyan-600/20 border-blue-500/30 text-blue-200"
      case "Paid":
        return "from-purple-600/20 to-pink-600/20 border-purple-500/30 text-purple-200"
      case "Enterprise":
        return "from-orange-600/20 to-red-600/20 border-orange-500/30 text-orange-200"
      default:
        return "from-gray-600/20 to-gray-600/20 border-gray-500/30 text-gray-200"
    }
  }

  return (
    <div className="space-y-16">
      {Object.entries(groupedItems).map(([category, categoryItems]) => (
        <section key={category}>
          {/* Category Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{category}</h2>
            <Badge className="rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-200 px-4 py-2">
              {categoryItems.length} công cụ
            </Badge>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:scale-[1.02] hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 border border-white/20">
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
                    <h3 className="text-lg font-bold text-white truncate group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={`rounded-full text-xs ${getPricingColor(item.pricing)}`}>{item.pricing}</Badge>
                      <div className="flex items-center gap-1 text-xs text-white/50">
                        <Star className="h-3 w-3 fill-current" />
                        <span>{item.popularity}/10</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-sm mb-4 line-clamp-3 leading-relaxed">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      className="rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 text-blue-200 text-xs hover:bg-blue-600/30 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {item.tags.length > 3 && (
                    <Badge className="rounded-full bg-white/10 border border-white/20 text-white/60 text-xs">
                      +{item.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Action Button */}
                <Button
                  className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                  onClick={() => window.open(item.website, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Xem chi tiết
                </Button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
