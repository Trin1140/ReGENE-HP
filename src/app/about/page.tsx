// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe, FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main className="font-sans">
      {/* ヒーローセクション */}
      <section className="relative h-96">
        <Image
          src="/images/organization-hero.jpg"
          alt="団体のヒーロー画像"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">団体のご紹介</h1>
        </div>
      </section>

      {/* 団体概要セクション */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">私たちのミッション</h2>
        <p className="text-lg mb-12">
          私たちは、革新的なアプローチで社会の課題を解決し、地域コミュニティの発展に寄与することを目指しています。<br />
          長年にわたる実績と信頼を基に、次世代に繋がる持続可能な未来を築いていきます。
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* 団体メンバーの画像 */}
          <div className="md:w-1/2">
            <Image
              src="/images/organization-team.jpg"
              alt="団体チーム"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* 団体の紹介文 */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-lg">
              私たちの団体は、多様なバックグラウンドを持つメンバーが集まり、互いに学び合いながら、社会に新たな価値を提供しています。  
              情熱と誠実さを大切にし、すべてのプロジェクトにおいて高い品質と信頼性を追求しています。
            </p>
          </div>
        </div>
      </section>

      {/* 活動実績セクション */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-semibold mb-8">活動実績</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* プロジェクトカード 1：プロジェクトA */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/project1.jpg"
                alt="プロジェクト1"
                width={600}
                height={400}
                className="object-cover"
              />
              <div className="p-6">
                <Link href="/projects/a">
                  <h3 className="text-2xl font-bold mb-2 hover:underline cursor-pointer">
                    プロジェクトA
                  </h3>
                </Link>
                <p className="text-lg">
                  このプロジェクトでは、地域の課題に対して革新的な解決策を提供し、多くの成果を上げました。
                </p>
              </div>
            </div>
            {/* プロジェクトカード 2：プロジェクトB */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/project2.jpg"
                alt="プロジェクト2"
                width={600}
                height={400}
                className="object-cover"
              />
              <div className="p-6">
                <Link href="/projects/b">
                  <h3 className="text-2xl font-bold mb-2 hover:underline cursor-pointer">
                    プロジェクトB
                  </h3>
                </Link>
                <p className="text-lg">
                  地域の発展と環境保全を目指したプロジェクトで、持続可能な未来への第一歩を実現しました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 各種リンクセクション */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">各種リンク</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="https://www.organization-website.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-700 text-lg"
            >
              <FaGlobe size={20} />
              <span>公式サイト</span>
            </a>
            <a
              href="https://twitter.com/organization"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-700 text-lg"
            >
              <FaTwitter size={20} />
              <span>Twitter</span>
            </a>
            <a
              href="https://www.facebook.com/organization"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-700 text-lg"
            >
              <FaFacebookF size={20} />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/organization"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-700 text-lg"
            >
              <FaInstagram size={20} />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/organization"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-700 text-lg"
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
