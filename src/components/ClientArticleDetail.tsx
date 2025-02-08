"use client"; // 🚀 クライアントコンポーネントとして明示

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import styles from "../styles/article.module.css"; // ✅ 統一CSSを適用

interface Props {
  title: string;
  date: string;
  image?: string;
  mdxSource: MDXRemoteSerializeResult | null;
}

export default function ClientArticleDetail({ title, date, image, mdxSource }: Props) {
  if (!mdxSource) {
    return <p className={styles.error}>記事のデータが読み込めませんでした。</p>;
  }

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.date}>{date}</p>
      {image && <Image src={image} alt={title} width={800} height={450} className={styles.image} />}
      <MDXRemote {...mdxSource} />
    </article>
  );
}
