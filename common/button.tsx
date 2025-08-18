import type React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import Link, { type LinkProps } from "next/link"

export const $button = cva(
  "gap-2 font-semibold shrink-0 rounded-xl ring-black/50 focus-visible:ring-2 outline-hidden outline-0 transition-all duration-300",
  {
    variants: {
      intent: {
        primary: "bg-black text-white hover:bg-gray-800 hover:scale-105 shadow-lg hover:shadow-black/25",
        secondary: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 hover:scale-[1.02]",
        tertiary: "bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 shadow-lg hover:shadow-gray-500/25",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed hover:scale-100",
      },
      onlyButton: {
        true: "rounded-lg",
      },
      iconSide: {
        left: "flex-row-reverse pl-4",
        right: "flex-row pr-4",
      },
      unstyled: {
        true: "px-0 py-0 bg-transparent border-none hover:bg-transparent hover:border-none hover:scale-100",
      },
      size: {
        md: "inline-flex items-center justify-center px-4 py-2 text-sm h-10",
        lg: "inline-flex items-center justify-center h-12 px-6 text-base",
      },
    },
  },
)

type ButtonProps<C extends keyof React.JSX.IntrinsicElements> = VariantProps<typeof $button> &
  React.JSX.IntrinsicElements[C] & {
    icon?: React.ReactNode
    unstyled?: boolean
  }

export const Button = ({
  children,
  intent = "primary",
  disabled = false,
  onlyButton = false,
  icon,
  iconSide = "left",
  unstyled,
  className,
  size = "md",
  ref,
  ...props
}: ButtonProps<"button">) => {
  return (
    <button
      ref={ref}
      className={$button(
        !unstyled
          ? {
              intent,
              disabled,
              onlyButton,
              iconSide: icon ? iconSide : undefined,
              className,
              unstyled,
              size,
            }
          : { className },
      )}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon ? <span>{icon}</span> : null}
    </button>
  )
}

export const ButtonLink = ({
  children,
  intent = "primary",
  disabled = false,
  onlyButton = false,
  icon,
  iconSide = "left",
  unstyled,
  className,
  size = "md",
  ref,
  ...props
}: ButtonProps<"a"> & LinkProps) => {
  return (
    <Link
      ref={ref}
      className={$button(
        !unstyled
          ? {
              intent,
              disabled,
              onlyButton,
              iconSide: icon ? iconSide : undefined,
              className,
              unstyled,
              size,
            }
          : { className },
      )}
      {...props}
    >
      {children}
      {icon ? <span>{icon}</span> : null}
    </Link>
  )
}
