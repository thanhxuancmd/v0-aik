"use client"
import clsx from "clsx"
import { CustomTooltip } from "./tooltip"
import type { ImageProps } from "next/image"

interface AuthorProps {
  image: {
    url: string
    alt?: string
    width: number
    height: number
  }
  _title: string
}

interface AvatarProps {
  url: string
  alt?: string
  width?: number
  height?: number
  className?: string
}

export function Author({ image, _title, ...props }: AuthorProps & Omit<ImageProps, "src" | "alt">) {
  return (
    <CustomTooltip content={_title}>
      <img
        src={image.url || "/placeholder-user.jpg"}
        alt={image.alt ?? `Avatar for ${_title}`}
        className="size-8 rounded-full border-2 border-background object-cover transition-all dark:border-dark-background"
        height={image.height}
        width={image.width}
        {...props}
      />
    </CustomTooltip>
  )
}

export function Avatar({
  className,
  alt,
  url,
  width = 28,
  height = 28,
  ...props
}: AvatarProps & Omit<ImageProps, "src" | "alt">) {
  return (
    <img
      src={url || "/placeholder-user.jpg"}
      alt={alt ?? "Avatar"}
      className={clsx(
        "size-7 shrink-0 rounded-full border-2 border-background object-cover dark:border-dark-background",
        className,
      )}
      height={height}
      width={width}
      {...props}
    />
  )
}
