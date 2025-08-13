import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function AgentsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Hero Section Skeleton */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iIzlDOTJBQyIgZmlsbE9wYWNpdHk9IjAuMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-8 w-32 mx-auto mb-6 bg-white/10" />
            <Skeleton className="h-16 w-96 mx-auto mb-6 bg-white/10" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto bg-white/10" />
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {/* Search and Filters Skeleton */}
          <div className="mb-12">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                {/* Search Bar Skeleton */}
                <Skeleton className="h-12 w-full mb-6 bg-white/10" />

                {/* Categories Skeleton */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 w-24 bg-white/10" />
                  ))}
                </div>

                {/* Controls Skeleton */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-10 w-48 bg-white/10" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-8 w-8 bg-white/10" />
                      <Skeleton className="h-8 w-8 bg-white/10" />
                    </div>
                  </div>
                  <Skeleton className="h-6 w-32 bg-white/10" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Agents Grid Skeleton */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="p-0">
                  <Skeleton className="w-full h-48 rounded-t-lg bg-white/10" />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Skeleton className="h-6 w-3/4 mb-2 bg-white/10" />
                    <Skeleton className="h-4 w-full mb-1 bg-white/10" />
                    <Skeleton className="h-4 w-2/3 bg-white/10" />
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <Skeleton className="h-4 w-12 bg-white/10" />
                    <Skeleton className="h-4 w-16 bg-white/10" />
                    <Skeleton className="h-4 w-20 bg-white/10" />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Skeleton className="h-6 w-16 bg-white/10" />
                    <Skeleton className="h-6 w-20 bg-white/10" />
                    <Skeleton className="h-6 w-14 bg-white/10" />
                  </div>

                  <Skeleton className="h-4 w-24 mb-4 bg-white/10" />

                  <div className="flex gap-2">
                    <Skeleton className="h-10 flex-1 bg-white/10" />
                    <Skeleton className="h-10 w-16 bg-white/10" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Skeleton */}
          <div className="text-center mt-12">
            <Skeleton className="h-12 w-40 mx-auto bg-white/10" />
          </div>
        </div>
      </section>
    </div>
  )
}
