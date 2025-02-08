"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";

interface ClientArticleDetailProps {
  title: string;
  date: string;
  image?: string;
  mdxSource: MDXRemoteSerializeResult;
}

export default function ClientArticleDetail({
  title,
  date,
  image,
  mdxSource,
}: ClientArticleDetailProps) {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-sm text-gray-600 mb-4">{date}</p>
      {image && (
        <div className="relative w-full h-64 mb-6">
          <Image src={image} alt={title} fill className="object-cover rounded-md" />
        </div>
      )}
      <div className="prose prose-lg mb-8">
        <MDXRemote {...mdxSource} />
      </div>
      <Link href="/articles" className="text-blue-500 hover:underline">
        ← 記事一覧に戻る
      </Link>
    </main>
  );
}
