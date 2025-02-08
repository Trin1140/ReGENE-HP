// src/app/articles/[slug]/page.tsx
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";
import ClientArticleDetail from "./ClientArticleDetail";

export async function generateStaticParams() {
  const articlesDirectory = path.join(process.cwd(), "content", "articles");
  const filenames = await fs.readdir(articlesDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx?$/, ""),
  }));
}

export default async function ArticleDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content", "articles", `${slug}.mdx`);

  let fileContent;
  try {
    fileContent = await fs.readFile(filePath, "utf8");
  } catch {
    notFound();
  }

  const { data, content } = matter(fileContent);
  const mdxSource = await serialize(content);

  return (
    <ClientArticleDetail
      title={data.title as string}
      date={data.date as string}
      image={data.image as string | undefined}
      mdxSource={mdxSource}
    />
  );
}
