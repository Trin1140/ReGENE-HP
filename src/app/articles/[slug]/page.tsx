import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";
import ClientArticleDetail from "@/components/ClientArticleDetail"; // ✅ 直接 import に修正

export default async function ArticleDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content", "articles", `${slug}.mdx`);

  console.log("🔍 Checking file path:", filePath);

  let fileContent;
  try {
    fileContent = await fs.readFile(filePath, "utf8");
    console.log("✅ MDX File Content Loaded:", fileContent.slice(0, 100)); // 最初の100文字を確認
  } catch (error) {
    console.error(`❌ Error reading file: ${filePath}`, error); // ✅ エラーの内容をログに出す
    notFound();
    return;
  }

  const { data, content } = matter(fileContent);
  console.log("📄 Frontmatter Data:", data);

  let mdxSource;
  try {
    mdxSource = await serialize(content);
    console.log("✅ MDX serialization successful");
  } catch (error) {
    console.error("❌ MDX serialization error:", error);
    notFound();
    return;
  }

  return (
    <ClientArticleDetail
      title={data.title as string}
      date={data.date as string}
      image={data.image as string | undefined}
      mdxSource={mdxSource}
    />
  );
}
