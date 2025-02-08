// app/articles/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Articles() {
  // サンプル記事データ（実際はCMSやAPIから取得することも可能）
  const articles = [
    {
      id: 1,
      title: "未来を切り拓く学生たちの挑戦",
      summary:
        "地域の課題に挑む学生たちが、革新的なアイデアで新しい未来を創造するプロジェクトをレポート。",
      image: "/article1.jpg", // public フォルダ内に配置する画像
      date: "2025-02-01",
      link: "/articles/1", // 詳細ページへのリンク
    },
    {
      id: 2,
      title: "成功への道：地域密着型イノベーション",
      summary:
        "地域の声に耳を傾け、共に成長するプロジェクトの裏側に迫るインタビュー記事。",
      image: "/article2.jpg",
      date: "2025-01-20",
      link: "/articles/2",
    },
    {
      id: 3,
      title: "変革を生むアイディアの現場から",
      summary:
        "実際の現場で試行錯誤されるアイデアとその成果。現場の生の声をお届けします。",
      image: "/article3.jpg",
      date: "2025-01-15",
      link: "/articles/3",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      {/* ページヘッダー */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          未来を変える記事たち
        </h1>
        <p className="text-xl text-gray-600">
          最新のプロジェクトレポート、インタビュー、イベントレポートをチェック！
        </p>
      </header>

      {/* 記事カードのグリッドレイアウト */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* 記事画像 */}
            <div className="relative h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            {/* 記事内容 */}
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {article.date}
              </p>
              <p className="text-gray-700 mb-4">
                {article.summary}
              </p>
              <Link
                href={article.link}
                className="text-blue-500 hover:underline"
              >
                詳細を見る →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
