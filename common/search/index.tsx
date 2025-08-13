"use client"
import * as React from "react"
import { useSearch, SearchBox, type Hit } from "basehub/react-search"
import { SearchIcon } from "lucide-react"
import NextLink from "next/link"
import clsx from "clsx"
import * as Popover from "@radix-ui/react-popover"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import type { AuthorFragment } from "../../lib/basehub/fragments"
import { getArticleSlugFromSlugPath } from "../../lib/basehub/utils"

import { Avatar } from "../../common/avatar"
import { AvatarsGroup } from "../../common/avatars-group"
import { useSearchHits } from "../../context/search-hits-context"

export function SearchContent({
  _searchKey,
  placeholder = "Tìm kiếm...",
}: { _searchKey: string; placeholder?: string }) {
  const search = useSearch({
    _searchKey,
    queryBy: ["_title", "body", "description", "categories", "authors"],
    limit: 20,
  })

  const [searchQuery, setSearchQuery] = React.useState("")
  const [open, setOpen] = React.useState(false)
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search logic here
    console.log("Searching for:", searchQuery, "with key:", _searchKey)
  }

  React.useEffect(() => {
    if (search.query) setOpen(true)
    else setOpen(false)
  }, [search.query])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && event.metaKey) {
        event.preventDefault()
        searchInputRef.current?.blur()
        searchInputRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
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
          if (searchQuery) setOpen(true)
        }}
      />
      <Button type="submit" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
        Tìm
      </Button>
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Portal>
          <Popover.Content
            align="end"
            className="z-[999]"
            sideOffset={8}
            onOpenAutoFocus={(e) => {
              e.preventDefault()
            }}
          >
            <div className="relative mx-5 min-h-20 w-[calc(100vw_-_2.5rem)] scroll-py-2 overflow-y-auto overscroll-y-contain rounded-xl border border-[--surface-tertiary] bg-[--surface-primary] p-2 shadow-md dark:border-[--dark-surface-tertiary] dark:bg-[--dark-surface-primary] md:mx-0 md:max-h-[320px] md:w-[550px]">
              <SearchBox.Empty className="absolute left-1/2 top-1/2 w-fit max-w-full -translate-x-1/2 -translate-y-1/2 items-center overflow-hidden text-ellipsis whitespace-nowrap px-2 py-1 text-[--dark-text-tertiary]">
                No results for <span className="font-medium">&ldquo;{searchQuery}&rdquo;</span>
              </SearchBox.Empty>

              <SearchBox.Placeholder className="space-y-2">
                <div className="box-content h-[88px] animate-pulse rounded-md bg-[--surface-tertiary] px-4 py-3 dark:bg-[--dark-surface-secondary]" />
                <div className="box-content h-[88px] animate-pulse rounded-md bg-[--surface-tertiary] px-4 py-3 dark:bg-[--dark-surface-secondary]" />
                <div className="box-content h-[88px] animate-pulse rounded-md bg-[--surface-tertiary] px-4 py-3 dark:bg-[--dark-surface-secondary]" />
              </SearchBox.Placeholder>

              <HitList hits={search.result?.hits ?? []} />
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </form>
  )
}

function HitList({ hits }: { hits: Hit[] }) {
  return (
    <SearchBox.HitList className="space-y-2">
      {hits.map((hit) => {
        const pathname = getArticleSlugFromSlugPath(hit.document._slugPath ?? "")

        const field = hit._getField("authors")
        let firstHighlightedAuthorId: string | undefined = undefined

        for (const h of hit.highlights) {
          if (h.fieldPath.startsWith("authors")) {
            const index = h.fieldPath.split(".")[1]

            if (!index) continue
            const id = hit._getField(`authors.${index}._id`)

            if (typeof id === "string") {
              firstHighlightedAuthorId = id
            }
            break
          }
        }

        return (
          <div key={hit._key} className="relative w-full">
            <SearchBox.HitItem asChild hit={hit} href={pathname}>
              <NextLink
                className={clsx(
                  "flex grid-rows-[auto_1fr_auto] flex-col gap-y-0.5 rounded-md px-4 py-3",
                  "data-[selected='true']:bg-[--surface-tertiary]",
                  "dark:data-[selected='true']:bg-[--dark-surface-tertiary]",
                  "[&_mark]:bg-transparent [&_mark]:text-[--accent-500]",
                )}
                href={pathname}
              >
                <SearchBox.HitSnippet
                  components={{
                    container: HitTitleContainer,
                  }}
                  fieldPath="_title"
                />
                <SearchBox.HitSnippet
                  components={{
                    container: HitBodyContainer,
                  }}
                  fallbackFieldPaths={["description"]}
                  fieldPath="body"
                />
                <div className="mt-3 flex justify-between gap-x-1">
                  <CustomAvatarHit match={firstHighlightedAuthorId} authors={field as AuthorFragment[]} />
                  <SearchBox.HitSnippet
                    components={{
                      container: HitContainer,
                    }}
                    fieldPath="categories"
                  />
                </div>
              </NextLink>
            </SearchBox.HitItem>
          </div>
        )
      })}
    </SearchBox.HitList>
  )
}

function HitTitleContainer({ children }: React.PropsWithChildren) {
  return <p className="truncate leading-normal text-[--text-primary] dark:text-[--dark-text-primary]">{children}</p>
}

function HitBodyContainer({ children }: React.PropsWithChildren) {
  return <p className="truncate text-sm text-[--text-tertiary] dark:text-[--dark-text-tertiary]">{children}</p>
}

function CustomAvatarHit({
  match,
  authors,
}: {
  match: string | undefined
  authors: { _title: string; _id: string }[]
}) {
  const { authorsAvatars } = useSearchHits()

  if (match) {
    const author = authorsAvatars[match]

    if (!author) return null

    return (
      <div className="flex items-center gap-x-1.5">
        <Avatar {...author} />
        <SearchBox.HitSnippet
          components={{
            container: HitContainer,
          }}
          fieldPath="authors"
        />
      </div>
    )
  }

  return (
    <AvatarsGroup>
      {authors.map((author) => {
        const avatar = authorsAvatars[author._id]

        if (!avatar) return null

        return <Avatar key={author._id} {...avatar} alt={author._title} />
      })}
    </AvatarsGroup>
  )
}

function HitContainer({ children }: React.PropsWithChildren) {
  return <p className="text-sm text-[--text-secondary] dark:text-[--dark-text-tertiary]">{children}</p>
}
