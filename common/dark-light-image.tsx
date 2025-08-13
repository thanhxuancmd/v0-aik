import clsx from "clsx"
import type { ImageProps } from "next/image"

interface DarkLightImageProps {
  light: {
    url: string
    alt?: string
    width: number
    height: number
    aspectRatio?: string
    blurDataURL?: string
  }
  dark?: {
    url: string
    alt?: string
    width: number
    height: number
    aspectRatio?: string
    blurDataURL?: string
  }
  alt?: string
  className?: string
  width?: number
  height?: number
  withPlaceholder?: boolean
}

export function DarkLightImage({
  alt,
  dark,
  light,
  className,
  width,
  height,
  withPlaceholder,
  ...props
}: DarkLightImageProps & Omit<ImageProps, "src" | "alt">) {
  return (
    <>
      {dark ? (
        <img
          src={dark.url || "/placeholder.svg"}
          alt={dark.alt ?? alt ?? ""}
          className={clsx("hidden dark:block", className)}
          height={height ?? dark.height}
          width={width ?? dark.width}
          {...props}
        />
      ) : null}
      <img
        src={light.url || "/placeholder.svg"}
        alt={light.alt ?? alt ?? ""}
        className={clsx(dark && "dark:hidden", className)}
        height={height ?? light.height}
        width={width ?? light.width}
        {...props}
      />
    </>
  )
}

export function DarkLightImageAutoscale(props: DarkLightImageProps) {
  const aspectRatio = props.light.aspectRatio ? Number.parseFloat(props.light.aspectRatio) : 1
  let logoStyle

  switch (true) {
    case aspectRatio <= 1.2:
      logoStyle = "square"
      break
    case aspectRatio < 1.4:
      logoStyle = "4/3"
      break
    case aspectRatio < 4:
      logoStyle = "portrait"
      break
    default:
      logoStyle = "landscape"
      break
  }

  return (
    <DarkLightImage
      alt="logo"
      className={clsx("w-auto max-w-[200px] object-contain", {
        "h-10": logoStyle === "square",
        "h-9": logoStyle === "4/3",
        "h-8": logoStyle === "portrait",
        "h-6": logoStyle === "landscape",
      })}
      style={{
        aspectRatio: props.light.aspectRatio,
      }}
      {...props}
    />
  )
}
