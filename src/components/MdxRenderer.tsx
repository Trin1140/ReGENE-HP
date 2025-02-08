"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useEffect, useState } from "react";

interface MdxRendererProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function MdxRenderer({ mdxSource }: MdxRendererProps) {
  // マウント後にレンダリングするための状態管理
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // マウント前は何もレンダリングしない
  if (!isMounted) {
    return null;
  }

  // マウント後は MDXRemote をレンダリング（このタイミングはクライアント側なので、useState も正常に動作する）
  return <MDXRemote {...mdxSource} />;
}
