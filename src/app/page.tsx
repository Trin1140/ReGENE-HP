// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* ヒーローセクション */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src="/hero-background.jpg"        // public フォルダ内の背景画像
            alt="ヒーロー背景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">未来を創る、まちづくり</h1>
          <p className="text-xl mb-8">学生と地域が共に歩む、新たな挑戦</p>
          <Link
            href="/about"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full"
          >
            詳しく見る
          </Link>
        </div>
      </section>

      {/* その他のセクションはそのまま */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">最新情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image 
                src="/event1.jpg"
                alt="イベント1"
                width={400}
                height={250}
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">イベント1</h3>
              <p className="text-gray-600 mt-2">このイベントの概要や詳細情報を記述します。</p>
            </div>
            {/* カード2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image 
                src="/event2.jpg"
                alt="イベント2"
                width={400}
                height={250}
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">イベント2</h3>
              <p className="text-gray-600 mt-2">このイベントの概要や詳細情報を記述します。</p>
            </div>
            {/* カード3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image 
                src="/event3.jpg"
                alt="イベント3"
                width={400}
                height={250}
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">イベント3</h3>
              <p className="text-gray-600 mt-2">このイベントの概要や詳細情報を記述します。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
