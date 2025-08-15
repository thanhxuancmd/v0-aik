'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function AgentsPageContent() {
  const searchParams = useSearchParams()
  
  // Initialize state from URL parameters
  const initialCategory = searchParams.get('category') || 'all'
  const initialSearch = searchParams.get('search') || ''
  const initialSortBy = searchParams.get('sortBy') || 'popular'
  const initialPricing = searchParams.get('pricing') || 'all'
  const initialSourceType = searchParams.get('sourceType') || 'all'

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">AI Agents Directory</h1>
      
      <div className="mb-6">
        <p>Category: {initialCategory}</p>
        <p>Search: {initialSearch}</p>
        <p>Sort: {initialSortBy}</p>
        <p>Pricing: {initialPricing}</p>
        <p>Source Type: {initialSourceType}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Agent cards will be rendered here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Loading agents...</h3>
          <p className="text-gray-600">Please wait while we load the AI agents.</p>
        </div>
      </div>
    </div>
  )
}

export default function AgentsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AgentsPageContent />
    </Suspense>
  )
}