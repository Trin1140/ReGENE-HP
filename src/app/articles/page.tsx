// src/app/articles/page.tsx
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

// 各記事のメタデータの型定義
interface ArticleMeta {
  title: string;
  date: string;
  image?: string;
  summary?: string;
  slug: string;
}

export default async function Articles() {
  // MDX ファイルが格納されているディレクトリのパスを生成
  const articlesDirectory = path.join(process.cwd(), 'content', 'articles');
  // ディレクトリ内のすべてのファイル名を取得
  const filenames = await fs.readdir(articlesDirectory);

  // 各 MDX ファイルのフロントマターから記事情報を読み込む
  const articles: ArticleMeta[] = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(articlesDirectory, filename);
      const fileContent = await fs.readFile(filePath, 'utf8');
      const { data } = matter(fileContent);

      // data から必要な情報を取得し、ファイル名から拡張子を除いた部分を slug として追加
      return {
        title: data.title as string,
        date: data.date as string,
        image: data.image as string | undefined,
        summary: data.summary as string | undefined,
        slug: filename.replace(/\.mdx?$/, ''),
      };
    })
  );

  // 日付の降順にソート（new Date(...) の getTime() で数値に変換）
  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="font-sans text-gray-800">
      {/* ヒーローセクション */}
      <section className="relative h-96">
        <div className="relative w-full h-full">
          <Image
            src="/images/articles-hero.jpg"
            alt="記事一覧のヒーロー画像"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl sm:text-5xl font-bold">
              記事一覧
            </h1>
          </div>
        </div>
      </section>

      {/* 記事カードセクション */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            最新記事
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.slug}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
              >
                {article.image && (
                  <div className="relative w-full h-56">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="block text-2xl font-bold mb-2 hover:underline"
                  >
                    {article.title}
                  </Link>
                  <p className="text-sm text-gray-600 mb-2">{article.date}</p>
                  <p className="text-lg leading-relaxed mb-4">
                    {article.summary}
                  </p>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-block bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded transition-colors duration-300"
                  >
                    詳細を見る →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
