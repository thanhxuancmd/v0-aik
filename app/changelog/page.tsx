import { Heading } from "../../common/heading";
import { Section } from "../../common/section-wrapper";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = 30;

export const generateMetadata = async (): Promise<Metadata | undefined> => {
  return {
    title: "Changelog - AIK Marketplace",
    description: "Cập nhật và thay đổi mới nhất của AIK Marketplace",
  };
};

const mockChangelogs = [
  {
    id: "1",
    title: "Cải thiện tính năng tìm kiếm",
    description: "Tìm kiếm AI agents nhanh hơn và chính xác hơn",
    publishedAt: "2024-01-15",
    version: "v2.1.0",
  },
  {
    id: "2",
    title: "Thêm danh mục AI agents mới",
    description: "Bổ sung thêm nhiều danh mục AI agents chuyên biệt",
    publishedAt: "2024-01-10", 
    version: "v2.0.5",
  },
];

export default async function ChangelogPage() {
  if (mockChangelogs.length === 0) {
    return notFound();
  }

  return (
    <Section>
      <Heading align="left">
        <h1>Changelog</h1>
      </Heading>
      <div className="w-full space-y-6">
        {mockChangelogs.map((changelog) => (
          <article key={changelog.id} className="border-b pb-6">
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {changelog.version}
              </span>
              <span className="text-gray-500 text-sm">
                {new Date(changelog.publishedAt).toLocaleDateString('vi-VN')}
              </span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{changelog.title}</h2>
            <p className="text-gray-600">{changelog.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}