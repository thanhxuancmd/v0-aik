import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"
import clsx from "clsx"

const $headingContainer = cva("flex flex-col gap-6", {
  variants: {
    align: {
      center: "items-center self-center",
      left: "items-start self-start",
      right: "items-end self-end",
      none: "",
    },
  },
  defaultVariants: {
    align: "center",
  },
})

type HeadingProps = {
  children: React.ReactNode
  tag?: React.ReactNode
  subtitle?: React.ReactNode
  className?: string
  title?: string
  align?: string | null
} & VariantProps<typeof $headingContainer>

export function Heading({ tag, subtitle, className, align = "center", ...props }: HeadingProps) {
  align = align ?? "center"
  const Comp = Slot

  if (align === "none") return null

  return (
    <div className={$headingContainer({ align, className })}>
      {tag ? <Tag>{tag}</Tag> : null}
      <div
        className={clsx(
          "flex max-w-[900px] flex-col justify-center gap-2",
          {
            "items-start self-start": align === "left",
            "items-center self-center": align === "center" || !align,
            "items-end self-end": align === "right",
          },
          "[&>*]:text-pretty [&>*]:text-3xl [&>*]:font-bold md:[&>*]:text-5xl [&>*]:text-white",
          {
            "[&>*]:text-center": align === "center",
            "[&>*]:text-left": align === "left",
            "[&>*]:text-right": align === "right",
          },
        )}
      >
        <Comp {...props} />
      </div>
      {subtitle ? (
        <p
          className={clsx("max-w-screen-md text-pretty text-lg md:text-xl text-white/70 leading-relaxed", {
            "text-center": align === "center",
            "text-left": align === "left",
            "text-right": align === "right",
          })}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export function Tag({
  className,
  children,
  asChild,
  ...props
}: React.AllHTMLAttributes<HTMLDivElement> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h3"

  return (
    <Comp
      className={clsx(
        "flex min-h-8 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/80 md:text-base hover:bg-white/10 transition-all duration-300",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
