import { Hero } from "@/app/_sections/hero"
import { Categories } from "@/app/_sections/categories"
import { VietnamAIStats } from "@/app/_sections/vietnam-ai-stats"
import { SuccessStories } from "@/app/_sections/success-stories"
import { AINews } from "@/app/_sections/news"

export default function Page() {
  return (
    <>
      <Hero />
      <Categories />
      <VietnamAIStats />
      <SuccessStories />
      <AINews />
    </>
  )
}
