// src/components/MdxRenderer.tsx
"use client";

import { MDXRemote } from 'next-mdx-remote/client';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MdxRendererProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function MdxRenderer({ mdxSource }: MdxRendererProps) {
  return <MDXRemote {...mdxSource} />;
}
