"use client";

import dynamic from "next/dynamic";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

// 動的インポートで MDXRemote を読み込む（SSR を無効化）
const MDXRemoteDynamic = dynamic(
  async () => {
    const mod = await import("next-mdx-remote");
    return mod.MDXRemote;
  },
  { ssr: false }
);

interface MdxRendererProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function MdxRenderer({ mdxSource }: MdxRendererProps) {
  return <MDXRemoteDynamic {...mdxSource} />;
}
