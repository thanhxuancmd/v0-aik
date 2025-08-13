"use client"
import * as React from "react"
import { SearchIcon } from "lucide-react"
import NextLink from "next/link"
import * as Popover from "@radix-ui/react-popover"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchContent({
  _searchKey,
  placeholder = "Tìm kiếm...",
}: {
  _searchKey: string
  placeholder?: string
}) {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [open, setOpen] = React.useState(false)
  const [results, setResults] = React.useState<any[]>([])
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setResults([
        {
          _key: "1",
          document: { _title: `Kết quả cho "${searchQuery}"`, _slugPath: "/blog/sample" },
          highlights: [],
        },
      ])
      setOpen(true)
    } else {
      setResults([])
      setOpen(false)
    }
  }

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && event.metaKey) {
        event.preventDefault()
        searchInputRef.current?.blur()
        searchInputRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <form onSubmit={handleSearch} className="relative">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 pr-20"
        ref={searchInputRef}
        onFocus={() => {
          if (searchQuery && results.length > 0) setOpen(true)
        }}
      />
      <Button type="submit" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
        Tìm
      </Button>
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Portal>
          <Popover.Content align="end" className="z-[999]" sideOffset={8} onOpenAutoFocus={(e) => e.preventDefault()}>
            <div className="relative mx-5 min-h-20 w-[calc(100vw_-_2.5rem)] scroll-py-2 overflow-y-auto overscroll-y-contain rounded-xl border border-border bg-background p-2 shadow-md dark:border-dark-border dark:bg-dark-background md:mx-0 md:max-h-[320px] md:w-[550px]">
              {results.length === 0 ? (
                <div className="absolute left-1/2 top-1/2 w-fit max-w-full -translate-x-1/2 -translate-y-1/2 items-center overflow-hidden text-ellipsis whitespace-nowrap px-2 py-1 text-muted-foreground">
                  Không có kết quả cho <span className="font-medium">&ldquo;{searchQuery}&rdquo;</span>
                </div>
              ) : (
                <div className="space-y-2">
                  {results.map((result) => (
                    <NextLink
                      key={result._key}
                      href={result.document._slugPath}
                      className="flex flex-col gap-y-0.5 rounded-md px-4 py-3 hover:bg-muted"
                    >
                      <p className="truncate leading-normal text-foreground">{result.document._title}</p>
                    </NextLink>
                  ))}
                </div>
              )}
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </form>
  )
}
