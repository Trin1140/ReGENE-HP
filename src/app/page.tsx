// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // サンプルデータ：最新トピック（更新日を追加）
  const topics = [
    {
      id: 1,
      title: "地域活性化の新たな一歩",
      content:
        "学生主体のプロジェクトが地域に新風を吹き込み、持続可能なまちづくりに向けた取り組みが進行中です。",
      date: "2025-02-10",
    },
    {
      id: 2,
      title: "テクノロジーで変わるまちづくり",
      content:
        "最新技術の導入で、地域経済と生活の質向上を実現する新たな試みが注目されています。",
      date: "2025-02-09",
    },
    {
      id: 3,
      title: "未来を見据えた環境対策",
      content:
        "環境に優しく、持続可能な未来を築くための革新的な取り組みが現場から報告されています。",
      date: "2025-02-08",
    },
    {
      id: 4,
      title: "地域の伝統と革新",
      content:
        "歴史ある伝統文化と最新技術が融合し、新たな魅力を生み出すプロジェクトがスタート。",
      date: "2025-02-07",
    },
    {
      id: 5,
      title: "コミュニティの絆を深める",
      content:
        "地域住民が一丸となり、交流を深めるためのイベントやプロジェクトが続々開催中。",
      date: "2025-02-06",
    },
  ];

  // サンプルデータ：更新された記事
  const articles = [
    {
      id: 1,
      title: "未来を切り拓く学生たちの挑戦",
      summary:
        "地域の課題に挑む学生たちが、革新的なアイデアで新しい未来を創造するプロジェクトをレポート。",
      image: "/article1.jpg", // public/article1.jpg に配置
      date: "2025-02-01",
      link: "/articles/1",
    },
    {
      id: 2,
      title: "成功への道：地域密着型イノベーション",
      summary:
        "地域の声に耳を傾け、共に成長するプロジェクトの裏側に迫るインタビュー記事。",
      image: "/article2.jpg", // public/article2.jpg に配置
      date: "2025-01-20",
      link: "/articles/2",
    },
    {
      id: 3,
      title: "変革を生むアイディアの現場から",
      summary:
        "実際の現場で試行錯誤されるアイデアとその成果。現場の生の声をお届けします。",
      image: "/article3.jpg", // public/article3.jpg に配置
      date: "2025-01-15",
      link: "/articles/3",
    },
  ];

  return (
    <main className="font-sans text-gray-800">
      {/* ヒーローセクション */}
      <section className="relative w-full h-screen">
        <div className="relative w-full h-full">
          <Image
            src="/images/projects/usa/01-top-usa.png" // public/images/projects/usa/01-top-usa.png に配置
            alt="ヒーロー背景"
            fill
            className="object-cover"
            priority
          />
          {/* オーバーレイ（フェードアウトアニメーションで最終的に opacity:0.3 に） */}
          <div className="absolute inset-0 bg-black animate-fadeOut"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              未来を創る、まちづくり
            </h1>
            <p className="text-sm sm:text-xl mb-8">
              学生と地域が共に歩む、新たな挑戦
            </p>
            <Link
              href="/about"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300"
            >
              詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* 最新トピックセクション（枠で囲んでコンテンツとして主張） */}
      <section className="py-4 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h2 className="text-sm font-bold mb-2 text-center">最新トピック</h2>
            <ul className="divide-y divide-gray-300">
              {topics.map((topic) => (
                <li
                  key={topic.id}
                  className="py-1 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium">{topic.title}</span>
                    <span className="text-[10px] text-gray-500">
                      {topic.date}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-1">
                    {topic.content}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 更新された記事セクション */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            更新された記事
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 hover:underline cursor-pointer">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-2">{article.date}</p>
                  <p className="text-lg leading-relaxed mb-4">
                    {article.summary}
                  </p>
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

      {/* Call-to-Action (CTA) セクション */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            プロジェクトに参加しよう！
          </h2>
          <p className="text-xl mb-8">
            学生と地域が共に未来を創る。あなたもその一員になりませんか？
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </main>
  );
}