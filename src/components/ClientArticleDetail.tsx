"use client"; // 🚀 クライアントコンポーネントとして明示

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";

interface Props {
  title: string;
  date: string;
  image?: string;
  mdxSource: MDXRemoteSerializeResult | null;
}

export default function ClientArticleDetail({ title, date, image, mdxSource }: Props) {
  if (!mdxSource) {
    return <p>記事のデータが読み込めませんでした。</p>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      {image && <Image src={image} alt={title} width={600} height={400} />}
      <MDXRemote {...mdxSource} />
    </div>
  );
}
