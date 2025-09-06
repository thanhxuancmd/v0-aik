import { Hero } from "@/app/_sections/hero"
import { Categories } from "@/app/_sections/categories"
import { AINews } from "@/app/_sections/news"

import { DemoShowcase } from "@/app/_sections/demo-showcase"

export default function Page() {
  return (
    <>
      <Hero />
      <DemoShowcase />
      <Categories />
      <AINews />
    </>
  )
}
