// components/Header.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // メニューの開閉トグル
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // リンククリック時にメニューを閉じる
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow py-4 relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* サイトロゴ */}
        <div className="text-2xl font-bold">
          <Link href="/">Re-GENE</Link>
        </div>
        {/* デスクトップ用ナビゲーション */}
        <nav className="hidden sm:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/members">Members</Link>
            </li>
            <li>
              <Link href="/articles">Articles</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* モバイル用ハンバーガーアイコン */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* モバイル用オーバーレイとスライドインメニュー */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-30"
          onClick={() => setIsOpen(false)}
        >
          {/* メニュー部分：クリック時にイベント伝播を止める */}
          <div
            className="absolute right-0 top-0 h-full transform transition-transform duration-300 translate-x-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-4 rounded-l-lg shadow-lg min-w-[150px]">
              <ul className="space-y-2 text-right">
                <li>
                  <Link
                    href="/"
                    onClick={handleLinkClick}
                    className="block px-2 py-1"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={handleLinkClick}
                    className="block px-2 py-1"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    onClick={handleLinkClick}
                    className="block px-2 py-1"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/members"
                    onClick={handleLinkClick}
                    className="block px-2 py-1"
                  >
                    Members
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articles"
                    onClick={handleLinkClick}
                    className="block px-2 py-1"
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="block px-2 py-1"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
