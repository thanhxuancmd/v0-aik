"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Menu, Settings } from "lucide-react"
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
    href: "/agents?category=chatbot",
    description: "AI agents hỗ trợ chăm sóc khách hàng",
  },
  {
    title: "Analytics",
    href: "/agents?category=analytics",
    description: "AI agents phân tích dữ liệu và báo cáo",
  },
  {
    title: "Content",
    href: "/agents?category=content",
    description: "AI agents tạo và quản lý nội dung",
  },
  {
    title: "Automation",
    href: "/agents?category=automation",
    description: "AI agents tự động hóa quy trình",
  },
  {
    title: "Latest",
    href: "/agents?sort=newest",
    description: "AI agents mới nhất được thêm vào",
  },
]

function isActivePath(pathname: string, href: string) {
  if (href === "/agents") {
    return pathname === "/agents" || pathname.startsWith("/agents?")
  }
  return pathname === href || pathname.startsWith(href + "/")
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
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
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const isAgentsActive = pathname === "/agents" || pathname.startsWith("/agents?")
  const isEcosystemActive = ["/ecosystem", "/community", "/blog", "/events"].some(
    (path) => pathname === path || pathname.startsWith(path + "/"),
  )
  const isAdminActive = pathname.startsWith("/admin")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <AIKLogo size={28} className="text-foreground" />
          <span className="text-xl font-black">AIK</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="mx-6 hidden lg:flex">
          <NavigationMenuList>
            {/* Duyệt Agents */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  "relative after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-3/4 data-[state=open]:after:w-3/4",
                  isAgentsActive && "after:w-3/4",
                )}
              >
                Duyệt Agents
              </NavigationMenuTrigger>
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

            {/* Hệ sinh thái */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  "relative after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-3/4 data-[state=open]:after:w-3/4",
                  isEcosystemActive && "after:w-3/4",
                )}
              >
                Hệ sinh thái
              </NavigationMenuTrigger>
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

            {/* Doanh nghiệp */}
            <NavigationMenuItem>
              <Link href="/enterprise" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    "relative after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-3/4",
                    isActivePath(pathname, "/enterprise") && "after:w-3/4",
                  )}
                >
                  Doanh nghiệp
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Admin */}
            <NavigationMenuItem>
              <Link href="/admin" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    "relative after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-3/4",
                    isAdminActive && "after:w-3/4",
                  )}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Admin
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search */}
        <div className="flex flex-1 justify-center px-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm AI agents..."
              className="pl-8 transition-all focus-visible:ring-2 focus-visible:ring-primary/20"
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />

          <div className="hidden items-center space-x-2 md:flex">
            <Button variant="ghost" size="sm" className="transition-colors">
              Đăng nhập
            </Button>
            <Button size="sm" className="transition-colors">
              Đăng ký
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Mở menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col space-y-4">
                <div className="space-y-2">
                  <h4 className="px-2 text-sm font-medium text-muted-foreground">Duyệt Agents</h4>
                  <div className="space-y-1">
                    {browseItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block rounded-md px-2 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="px-2 text-sm font-medium text-muted-foreground">Hệ sinh thái</h4>
                  <div className="space-y-1">
                    {ecosystemItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block rounded-md px-2 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-1 border-t pt-4">
                  <Link
                    href="/enterprise"
                    className="block rounded-md px-2 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    Doanh nghiệp
                  </Link>
                  <Link
                    href="/admin"
                    className="flex items-center rounded-md px-2 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Admin
                  </Link>
                </div>

                <div className="flex flex-col space-y-2 border-t pt-4">
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
