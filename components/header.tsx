"use client"

import * as React from "react"
import Link from "next/link"
import { Search, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "./language-switcher"
import { ThemeToggle } from "./theme-switcher"
import { AIKLogo } from "./aik-logo"
import { cn } from "@/lib/utils"

const ecosystemItems = [
  {
    title: "Hệ sinh thái",
    href: "/ecosystem",
    description: "Khám phá toàn bộ hệ sinh thái AI agents của AIK",
  },
  {
    title: "Cộng đồng",
    href: "/community",
    description: "Tham gia cộng đồng developer và người dùng AIK",
  },
  {
    title: "Blog & Tin tức",
    href: "/blog",
    description: "Cập nhật tin tức mới nhất về AI và công nghệ",
  },
  {
    title: "Sự kiện",
    href: "/events",
    description: "Tham gia các sự kiện, workshop và webinar",
  },
]

const browseItems = [
  {
    title: "Duyệt tất cả",
    href: "/agents",
    description: "Xem toàn bộ AI agents có sẵn",
  },
  {
    title: "Customer Service",
    href: "/agents/customer-service",
    description: "AI agents hỗ trợ chăm sóc khách hàng",
  },
  {
    title: "Analytics",
    href: "/agents/analytics",
    description: "AI agents phân tích dữ liệu và báo cáo",
  },
  {
    title: "Content",
    href: "/agents/content",
    description: "AI agents tạo và quản lý nội dung",
  },
  {
    title: "Automation",
    href: "/agents/automation",
    description: "AI agents tự động hóa quy trình",
  },
  {
    title: "Latest",
    href: "/agents/latest",
    description: "AI agents mới nhất được thêm vào",
  },
]

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <AIKLogo size={28} className="text-foreground" />
          <span className="font-bold text-xl">AIK</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex mx-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Duyệt Agents</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {browseItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Hệ sinh thái</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {ecosystemItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Bảng giá
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/enterprise" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Doanh nghiệp
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search */}
        <div className="flex-1 flex justify-center px-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Tìm kiếm AI agents..." className="pl-8" />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              Đăng nhập
            </Button>
            <Button size="sm">Đăng ký</Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Duyệt Agents</h4>
                  {browseItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Hệ sinh thái</h4>
                  {ecosystemItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <Link
                    href="/pricing"
                    className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    Bảng giá
                  </Link>
                  <Link
                    href="/enterprise"
                    className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    Doanh nghiệp
                  </Link>
                </div>
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                    Đăng nhập
                  </Button>
                  <Button size="sm" onClick={() => setIsOpen(false)}>
                    Đăng ký
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
