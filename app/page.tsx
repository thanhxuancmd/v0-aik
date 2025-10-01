import Hero from "@/app/_sections/hero"
import Categories from "@/app/_sections/categories"
import AINews from "@/app/_sections/news"

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Categories />
      <AINews />
    </main>
  )
}
