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
    <div className="min-h-screen bg-background">
      <EcosystemHero />
      <div className="container mx-auto px-4 py-12">
        <EcosystemFilters />
        <EcosystemGrid />
      </div>
    </div>
  )
}
