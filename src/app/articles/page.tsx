// app/articles/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Articles() {
  // サンプル記事データ（実際は CMS や API から取得することも可能）
  const articles = [
    {
      id: 1,
      title: "未来を切り拓く学生たちの挑戦",
      summary:
        "地域の課題に挑む学生たちが、革新的なアイデアで新しい未来を創造するプロジェクトをレポート。",
      image: "/article1.jpg", // public/article1.jpg
      date: "2025-02-01",
      link: "/articles/1",
    },
    {
      id: 2,
      title: "成功への道：地域密着型イノベーション",
      summary:
        "地域の声に耳を傾け、共に成長するプロジェクトの裏側に迫るインタビュー記事。",
      image: "/article2.jpg", // public/article2.jpg
      date: "2025-01-20",
      link: "/articles/2",
    },
    {
      id: 3,
      title: "変革を生むアイディアの現場から",
      summary:
        "実際の現場で試行錯誤されるアイデアとその成果。現場の生の声をお届けします。",
      image: "/article3.jpg", // public/article3.jpg
      date: "2025-01-15",
      link: "/articles/3",
    },
  ];

  return (
    <main className="font-sans text-gray-800">
      {/* ヒーローセクション */}
      <section className="relative h-96">
        <div className="relative w-full h-full">
          <Image
            src="/images/articles-hero.jpg" // public/images/articles-hero.jpg  ※記事一覧用のヒーロー画像
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
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
              >
                {/* 記事画像 */}
                <div className="relative w-full h-56">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* 記事内容 */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 hover:underline cursor-pointer">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-2">{article.date}</p>
                  <p className="text-lg leading-relaxed mb-4">{article.summary}</p>
                  <Link
                    href={article.link}
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
