"use client";

import dynamic from "next/dynamic";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

// MDXRemote を通常のインポートではなく、動的にインポートして SSR を無効化します。
const MDXRemoteDynamic = dynamic(
  () => import("next-mdx-remote").then((mod) => mod.MDXRemote),
  { ssr: false }
);

interface MdxRendererProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function MdxRenderer({ mdxSource }: MdxRendererProps) {
  return <MDXRemoteDynamic {...mdxSource} />;
}
