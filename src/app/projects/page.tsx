// app/projects/page.tsx
import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Projects() {
  // サンプルのプロジェクトデータ（実際にはデータベースや CMS から取得可能）
  const projects = [
    {
      id: 1,
      title: "プロジェクトA",
      description:
        "プロジェクトAは地域活性化を目的とした取り組みです。地域の魅力を再発見するためのイベントを多数開催しています。",
      image: "/project-a.jpg", // public/ フォルダ内に配置
      link: "/projects/a",      // 詳細ページへのリンク
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
    <main className="font-sans text-gray-800">
      {/* ヒーローセクション */}
      <section className="relative h-96">
        <div className="relative w-full h-full">
          <Image
            src="/images/projects-hero.jpg" // public/images/projects-hero.jpg に配置（ヒーロー用画像）
            alt="プロジェクト一覧のヒーロー画像"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl sm:text-5xl font-bold">
              プロジェクト一覧
            </h1>
          </div>
        </div>
      </section>

      {/* 活動実績セクション */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            活動実績
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
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
                <div className="p-6">
                  <Link href={project.link}>
                    <h3 className="text-2xl font-bold mb-2 hover:underline cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 各種リンクセクション */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            各種リンク
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="https://www.organization-website.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary-dark text-lg"
            >
              <FaGlobe size={20} />
              <span>公式サイト</span>
            </a>
            <a
              href="https://twitter.com/organization"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary-dark text-lg"
            >
              <FaTwitter size={20} />
              <span>Twitter</span>
            </a>
            <a
              href="https://www.facebook.com/organization"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary-dark text-lg"
            >
              <FaFacebookF size={20} />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/organization"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary-dark text-lg"
            >
              <FaInstagram size={20} />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/organization"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary-dark text-lg"
            >
              <FaYoutube size={20} />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
