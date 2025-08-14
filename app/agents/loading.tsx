'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent } from '@/components/ui/card'

export default function AgentsLoading() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fillOpacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Skeleton className="h-8 w-8 rounded-full bg-white/10" />
              <Skeleton className="h-6 w-20 bg-white/10" />
            </div>
            <Skeleton className="h-16 w-96 mx-auto mb-6 bg-white/10" />
            <Skeleton className="h-6 w-[600px] mx-auto bg-white/10" />
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters Skeleton */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Skeleton */}
            <div className="relative flex-1">
              <Skeleton className="h-12 w-full bg-white/10" />
            </div>

            {/* Sort Skeleton */}
            <Skeleton className="w-full lg:w-48 h-12 bg-white/10" />

            {/* View Mode Skeleton */}
            <div className="flex bg-white/10 rounded-lg p-1 border border-white/20">
              <Skeleton className="h-10 w-10 bg-white/10" />
              <Skeleton className="h-10 w-10 bg-white/10 ml-1" />
            </div>
          </div>

          {/* Categories Skeleton */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 bg-white/10" />
            ))}
          </div>

          {/* Results Summary Skeleton */}
          <Skeleton className="h-4 w-48 bg-white/10" />
        </div>

        {/* Agents Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="bg-white/10 backdrop-blur-sm border-white/20">
              <div className="relative">
                <Skeleton className="w-full h-48 bg-white/10" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Skeleton className="h-6 w-32 bg-white/10" />
                  <Skeleton className="h-4 w-12 bg-white/10" />
                </div>

                <Skeleton className="h-4 w-full mb-2 bg-white/10" />
                <Skeleton className="h-4 w-3/4 mb-4 bg-white/10" />

                {/* Tags Skeleton */}
                <div className="flex flex-wrap gap-1 mb-4">
                  <Skeleton className="h-5 w-12 bg-white/10" />
                  <Skeleton className="h-5 w-16 bg-white/10" />
                  <Skeleton className="h-5 w-14 bg-white/10" />
                </div>

                {/* Stats Skeleton */}
                <div className="flex items-center gap-4 mb-4">
                  <Skeleton className="h-3 w-8 bg-white/10" />
                  <Skeleton className="h-3 w-16 bg-white/10" />
                </div>

                {/* Author Skeleton */}
                <div className="flex items-center gap-2 mb-4">
                  <Skeleton className="h-6 w-6 rounded-full bg-white/10" />
                  <Skeleton className="h-3 w-20 bg-white/10" />
                </div>

                {/* Price and Actions Skeleton */}
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-20 bg-white/10" />
                  <div className="flex gap-2">
                    <Skeleton className="h-8 w-12 bg-white/10" />
                    <Skeleton className="h-8 w-20 bg-white/10" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Skeleton */}
        <div className="text-center mt-12">
          <Skeleton className="h-12 w-32 mx-auto bg-white/10" />
        </div>
      </section>
    </div>
  )
}
