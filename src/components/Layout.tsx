// app/layout.tsx
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Re-GENE',
  description: 'Re-GENE organization website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      {/* Next.js 13 では <head> は自動的に metadata から生成されるので記述不要 */}
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
