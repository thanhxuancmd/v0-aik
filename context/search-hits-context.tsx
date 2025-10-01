"use client"

import { createContext, useContext, type ReactNode } from "react"

interface SearchHitsContextType {
  authorsAvatars: Record<string, any>
}

const SearchHitsContext = createContext<SearchHitsContextType | undefined>(undefined)

export function SearchHitsProvider({
  children,
  authorsAvatars,
}: {
  children: ReactNode
  authorsAvatars: Record<string, any>
}) {
  return <SearchHitsContext.Provider value={{ authorsAvatars }}>{children}</SearchHitsContext.Provider>
}

export function useSearchHits() {
  const context = useContext(SearchHitsContext)
  if (context === undefined) {
    throw new Error("useSearchHits must be used within a SearchHitsProvider")
  }
  return context
}
