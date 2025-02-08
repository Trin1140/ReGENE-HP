// src/app/projects/a/page.tsx
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Image from "next/image";
import Link from "next/link";

export default async function ProjectA() {
  // 関連する記事情報を取得する処理
  const articlesDirectory = path.join(process.cwd(), 'content', 'articles');

  // 型定義: 関連記事情報に必要な項目
  interface RelatedArticle {
    title: string;
    date: string;
    image?: string;
    slug: string;
  }

  let articles: RelatedArticle[] = [];

  try {
    const filenames = await fs.readdir(articlesDirectory);
    articles = await Promise.all(
      filenames.map(async (filename): Promise<RelatedArticle> => {
        const filePath = path.join(articlesDirectory, filename);
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data } = matter(fileContent);
        return {
          title: data.title as string,
          date: data.date as string,
          image: data.image as string | undefined,
          slug: filename.replace(/\.mdx?$/, ''),
        };
      })
    );
    // 作成日（date）の降順（最新の記事が先頭）にソート
    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error reading articles directory:", error);
  }

  return (
    <div className="container mx-auto p-8">
      {/* プロジェクト詳細部分 */}
      <h1 className="text-4xl font-bold mb-4">船玉神社再生プロジェクト</h1>
      <div className="mb-6">
        <Image
          src="/images/projects/usa/02-top-hunadama.jpg"
          alt="プロジェクトA 詳細画像"
          width={800}
          height={500}
          className="rounded-md object-cover"
        />
      </div>
      <div className="mb-6">
        <p className="text-lg text-gray-700">
          プロジェクトAは、地域の活性化を目的に、学生が主体となって実施する取り組みです。  
          地域の魅力を再発見し、住民と協働でイベントやワークショップを開催しています。  
          詳細な活動内容や実績について、以下の内容でご紹介します。
        </p>
        <p className="text-lg text-gray-700 mt-4">
          ・定期的なコミュニティイベントの開催  
          ・地域資源を活用したプロモーション活動  
          ・住民との意見交換やフィードバックを重視した活動運営
        </p>
      </div>

      {/* 実施期間の欄 */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mt-8 mb-2">実施期間</h2>
        <p className="text-lg text-gray-700">2025年1月 ～ 2025年12月</p>
      </div>

      {/* 参加者の欄 */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mt-8 mb-2">協力</h2>
        <p className="text-lg text-gray-700">
          宇佐八幡宮、香西小学校、香西観光協会、リンクアーキテクツ、香西漁業協同組合、香西地区コミュニティ協議会、笠井郷文化財等振興協議会
        </p>
      </div>

      {/* 関連する記事の欄：横スクロールで表示 */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mt-8 mb-2">関連する記事</h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-4">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="flex-shrink-0 w-48 border border-gray-200 rounded p-2 bg-white"
              >
                {article.image && (
                  <div className="relative w-full h-24">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                )}
                <div className="mt-2">
                  <h3 className="text-sm font-bold">{article.title}</h3>
                  <p className="text-xs text-gray-500">{article.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Link href="/projects" className="text-blue-500 hover:underline">
          ← プロジェクト一覧に戻る
        </Link>
      </div>
    </div>
  );
}
