// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe, FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main className="font-sans text-gray-800">
      {/* ヒーローセクション */}
      <section className="relative h-96">
        <div className="relative w-full h-full">
          <Image
            src="/images/organization-hero.jpg" // public/images/organization-hero.jpg に配置
            alt="団体のヒーロー画像"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl sm:text-5xl font-bold">
              ReGENEとは
            </h1>
          </div>
        </div>
      </section>

      {/* 団体概要セクション */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Mission
        </h2>
        <p className="text-lg mb-12 leading-relaxed">
          私たちは、革新的なアプローチで社会の課題を解決し、地域コミュニティの発展に寄与することを目指しています。<br />
          長年にわたる実績と信頼を基に、次世代に繋がる持続可能な未来を築いていきます。
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* 団体メンバーの画像 */}
          <div className="md:w-1/2">
            <Image
              src="/images/about/01-concept.png" // public/images/organization-team.jpg に配置
              alt="団体チーム"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* 団体の紹介文 */}
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed">
              私たちの団体は、多様なバックグラウンドを持つメンバーが集まり、互いに学び合いながら、社会に新たな価値を提供しています。情熱と誠実さを大切にし、すべてのプロジェクトにおいて高い品質と信頼性を追求しています。
            </p>
          </div>
        </div>
      </section>

      {/* 活動実績セクション */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            主な活動
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* プロジェクトカード 1：プロジェクトA */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/projects/usa/02-top-hunadama.jpg" // public/images/project1.jpg に配置
                alt="プロジェクトA"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
              <div className="p-6">
                <Link href="/projects/a">
                  <h3 className="text-2xl font-bold mb-2 hover:underline cursor-pointer">
                    船玉神社再生プロジェクト
                  </h3>
                </Link>
                <p className="text-lg leading-relaxed">
                  香川県高松市の海の安全を守ってきた神社を、地域を見守る神社へと読み替える祭りを計画した。
                </p>
              </div>
            </div>
            {/* プロジェクトカード 2：プロジェクトB */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/project2.jpg" // public/images/project2.jpg に配置
                alt="プロジェクトB"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
              <div className="p-6">
                <Link href="/projects/b">
                  <h3 className="text-2xl font-bold mb-2 hover:underline cursor-pointer">
                    Next project
                  </h3>
                </Link>
                <p className="text-lg leading-relaxed">
                  Next project
                </p>
              </div>
            </div>
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
