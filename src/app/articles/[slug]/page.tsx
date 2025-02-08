// src/app/articles/[slug]/page.tsx
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MdxRenderer from '../../../components/MdxRenderer';

// 静的生成するパラメータの生成はそのまま
export async function generateStaticParams() {
  const articlesDirectory = path.join(process.cwd(), 'content', 'articles');
  const filenames = await fs.readdir(articlesDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx?$/, ''),
  }));
}

export default async function ArticleDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content', 'articles', `${slug}.mdx`);
  
  let fileContent;
  try {
    fileContent = await fs.readFile(filePath, 'utf8');
  } catch {
    notFound();
  }
  
  // パースしてフロントマターとコンテンツに分割
  const { data, content } = matter(fileContent);
  
  // MDXコンテンツをシリアライズ
  const mdxSource = await serialize(content);

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{data.date}</p>
      {data.image && (
        <div className="relative w-full h-64 mb-6">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
      )}
      {/* クライアントコンポーネント MdxRenderer を利用 */}
      <div className="prose prose-lg mb-8">
        <MdxRenderer mdxSource={mdxSource} />
      </div>
      <Link href="/articles" className="text-blue-500 hover:underline">
        ← 記事一覧に戻る
      </Link>
    </main>
  );
}
