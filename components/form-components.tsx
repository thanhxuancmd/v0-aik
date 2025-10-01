import type React from "react"
import Image from "next/image"
import Link, { type LinkProps } from "next/link"

export function FormLayout({
  children,
  title,
  subtitle,
  logoUrl,
}: {
  title: string
  subtitle: React.ReactNode
  children: React.ReactNode
  logoUrl?: string
}) {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-5 rounded-xl border border-gray-200 bg-white p-5 shadow-md dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
      <header className="flex flex-col gap-3">
        {logoUrl && (
          <Image
            priority
            alt="Logo"
            className="size-8 self-start"
            height={32}
            src={logoUrl || "/placeholder.svg"}
            width={32}
          />
        )}
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-medium">{title}</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</div>
        </div>
      </header>
      {children}
    </div>
  )
}

function CustomAnchor({ children, ...props }: React.AllHTMLAttributes<HTMLAnchorElement> & LinkProps) {
  return (
    <Link className="text-blue-600 hover:underline dark:text-blue-400" {...props}>
      {children}
    </Link>
  )
}
