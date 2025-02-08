// app/projects/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  // サンプルのプロジェクトデータ（実際にはデータベースや CMS から取得することも可能）
  const projects = [
    {
      id: 1,
      title: "プロジェクトA",
      description:
        "プロジェクトAは地域活性化を目的とした取り組みです。地域の魅力を再発見するためのイベントを多数開催しています。",
      image: "/project-a.jpg", // public/ フォルダ内に配置
      link: "/projects/a", // 詳細ページへのリンク
    },
    {
      id: 2,
      title: "プロジェクトB",
      description:
        "プロジェクトBは学生によるまちづくりの実践プロジェクト。最新技術を活用したまちのインフラ整備を目指しています。",
      image: "/project-b.jpg",
      link: "/projects/b",
    },
    {
      id: 3,
      title: "プロジェクトC",
      description:
        "プロジェクトCは環境保全と地域コミュニティの発展を両立する新たな試みです。",
      image: "/project-c.jpg",
      link: "/projects/c",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">プロジェクト一覧</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* 画像を相対配置のコンテナでラップして、固定高さで表示 */}
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <Link
                href={project.link}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded inline-block"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
