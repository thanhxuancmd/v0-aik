import type { Metadata } from "next"
import { EcosystemGrid } from "./_components/ecosystem-grid"
import { EcosystemFilters } from "./_components/ecosystem-filters"
import { EcosystemHero } from "./_components/ecosystem-hero"

export const metadata: Metadata = {
  title: "Hệ Sinh Thái AI Agents - Khám Phá Toàn Cảnh AI",
  description:
    "Khám phá hệ sinh thái AI agents toàn diện với các công cụ, framework, platform và agents được cập nhật liên tục.",
}

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-black">
      <EcosystemHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <EcosystemFilters />
        <EcosystemGrid />
      </div>
    </div>
  )
}
