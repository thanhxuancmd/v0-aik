import { Heading } from "../../common/heading";
import { Section } from "../../common/section-wrapper";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = 30;

export const generateMetadata = async (): Promise<Metadata | undefined> => {
  return {
    title: "Blog - AIK Marketplace",
    description: "Tin tức và insights về AI agents và công nghệ",
  };
};

const mockPosts = [
  {
    id: "1",
    title: "Cách tạo AI Agent đầu tiên của bạn",
    description: "Hướng dẫn từng bước để tạo ra AI agent đầu tiên",
    publishedAt: "2024-01-15",
    slug: "cach-tao-ai-agent-dau-tien",
    authors: [{ name: "Nguyễn Văn A" }],
  },
  {
    id: "2", 
    title: "Xu hướng AI trong năm 2024",
    description: "Những xu hướng AI đáng chú ý trong năm 2024",
    publishedAt: "2024-01-10",
    slug: "xu-huong-ai-2024",
    authors: [{ name: "Trần Thị B" }],
  },
];

export default async function BlogPage() {
  if (mockPosts.length === 0) {
    notFound();
  }

  return (
    <Section className="gap-16">
      <div className="grid grid-cols-1 gap-5 self-stretch">
        <Heading align="left">
          <h2>Blog & Tin tức</h2>
        </Heading>
        <div className="grid gap-6 md:grid-cols-2">
          {mockPosts.map((post) => (
            <article key={post.id} className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="text-sm text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString('vi-VN')} • {post.authors[0].name}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}