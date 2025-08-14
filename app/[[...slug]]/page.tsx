import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "../_sections/hero";
import { FeaturesGrid } from "../_sections/features/features-grid";
import { Callout } from "../_sections/callout-1";
import { Callout2 } from "../_sections/callout-2";
import { Pricing } from "../_sections/pricing";

export const dynamic = "force-static";
export const revalidate = 30;

export const generateStaticParams = async () => {
  return [
    { slug: [] }, // Homepage
  ];
};

export const generateMetadata = async (): Promise<Metadata | undefined> => {
  return {
    title: "AIK Marketplace - Nền tảng AI Agents hàng đầu Việt Nam",
    description: "Khám phá và triển khai AI agents mạnh mẽ cho doanh nghiệp của bạn. Hơn 15,000+ AI agents chất lượng cao từ cộng đồng developer Việt Nam.",
  };
};

export default async function DynamicPage({
  params: _params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await _params;
  const slugs = params.slug;

  // Only handle homepage for now
  if (slugs && slugs.length > 0) {
    return notFound();
  }

  return (
    <>
      <Hero />
      <FeaturesGrid />
      <Callout />
      <Callout2 />
      <Pricing />
    </>
  );
}