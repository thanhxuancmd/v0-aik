"use client"

import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { AIKLogo } from "@/components/aik-logo"
import { ThemeToggle } from "@/components/theme-switcher"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <AIKLogo className="h-8 w-8" />
          <span className="hidden font-bold sm:inline-block">AIK Marketplace</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Trang chủ
          </Link>
          <Link href="/agents" className="text-sm font-medium transition-colors hover:text-primary">
            AI Agents
          </Link>
          <Link href="/marketplace" className="text-sm font-medium transition-colors hover:text-primary">
            Marketplace
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden flex-1 items-center justify-center px-8 md:flex">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Tìm kiếm AI agents..." className="w-full pl-9" />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("border-t md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="container space-y-4 py-4">
          {/* Mobile Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Tìm kiếm AI agents..." className="pl-9" />
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              href="/agents"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Agents
            </Link>
            <Link
              href="/marketplace"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link
              href="/blog"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
