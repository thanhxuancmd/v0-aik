"use client"

import Link from "next/link"
import { AIKLogo } from "@/components/aik-logo"
import { ThemeToggle } from "@/components/theme-switcher"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "AI Agents", href: "/agents" },
  { name: "Blog", href: "/blog" },
  { name: "Changelog", href: "/changelog" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <AIKLogo className="h-8 w-8" />
          <span className="text-xl font-bold">AIK</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-sm mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Tìm kiếm AI agents..." className="pl-10 w-full" />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Đăng nhập</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Đăng ký</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="search" placeholder="Tìm kiếm..." className="pl-10" />
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Auth Buttons */}
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href="/login">Đăng nhập</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/signup">Đăng ký</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
