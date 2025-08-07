import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 30;

export const generateStaticParams = async () => {
  return [];
};

export const generateMetadata = async (): Promise<Metadata | undefined> => {
  return {
    title: "Sample",
    description: "Static placeholder page",
  };
};

export default async function DynamicPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">{slug.join("/") || "home"}</h1>
    </main>
  );
}
