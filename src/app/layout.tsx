// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // エイリアス設定済みの場合
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "学生のまちづくりプロジェクト",
  description: "学生と地域が共に創るまちづくりのプロジェクト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Header を追加 */}
        <Header />
        
        {/* メインコンテンツ */}
        <main>{children}</main>
        
        {/* Footer を追加 */}
        <Footer />
      </body>
    </html>
  );
}
