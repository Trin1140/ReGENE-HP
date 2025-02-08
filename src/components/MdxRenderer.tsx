// src/components/MdxRenderer.tsx
"use client";

import { MDXRemote } from 'next-mdx-remote';

export default function MdxRenderer({ mdxSource }: { mdxSource: any }) {
  return <MDXRemote {...mdxSource} />;
}
