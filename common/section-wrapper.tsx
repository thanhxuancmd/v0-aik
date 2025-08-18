import type React from "react"
import { cva, type VariantProps } from "class-variance-authority"

export const $section = cva("py-16 md:py-24 flex flex-col items-center gap-12 relative bg-black text-white", {
  variants: {
    container: {
      default: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      full: "",
    },
  },
  defaultVariants: {
    container: "default",
  },
})

type SectionProps = React.AllHTMLAttributes<HTMLDivElement> & VariantProps<typeof $section>

export function Section({ className, container, ...props }: SectionProps) {
  return <section className={$section({ className, container })} {...props} />
}
