// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* サイトロゴ・サイト名 */}
        <div className="text-xl font-bold">
          <Link href="/">
            学生のまちづくりプロジェクト
          </Link>
        </div>
        {/* ナビゲーションメニュー */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/about">
                団体の説明
              </Link>
            </li>
            <li>
              <Link href="/projects">
                プロジェクト一覧
              </Link>
            </li>
            <li>
              <Link href="/members">
                メンバー
              </Link>
            </li>
            <li>
              <Link href="/articles">
                記事
              </Link>
            </li>
            <li>
              <Link href="/contact">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
