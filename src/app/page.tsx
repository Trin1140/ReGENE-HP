// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* ヒーローセクション */}
      <section className="relative w-full h-screen">
        <div className="relative w-full h-full">
          <Image 
            src="/images/projects/usa/01-top-usa.png"  // public/images/projects/usa/01-top-usa.png に配置
            alt="ヒーロー背景"
            fill
            className="object-cover"
            priority
          />
          {/* グローバルCSS で定義した .animate-fadeOut クラスを利用 */}
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

      {/* 最新情報セクション */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            最新情報
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {/* イベントカード 1 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <Image 
                src="/images/projects/usa/event1.jpg"  // public/images/projects/usa/event1.jpg に配置
                alt="イベント1"
                width={400}
                height={250}
                className="rounded-md w-full h-auto"
              />
              <h3 className="text-lg sm:text-xl font-semibold mt-3">イベント1</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                このイベントの概要や詳細情報を記述します。
              </p>
            </div>
            {/* イベントカード 2 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <Image 
                src="/images/projects/usa/event2.jpg"  // public/images/projects/usa/event2.jpg に配置
                alt="イベント2"
                width={400}
                height={250}
                className="rounded-md w-full h-auto"
              />
              <h3 className="text-lg sm:text-xl font-semibold mt-3">イベント2</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                このイベントの概要や詳細情報を記述します。
              </p>
            </div>
            {/* イベントカード 3 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <Image 
                src="/images/projects/usa/event3.jpg"  // public/images/projects/usa/event3.jpg に配置
                alt="イベント3"
                width={400}
                height={250}
                className="rounded-md w-full h-auto"
              />
              <h3 className="text-lg sm:text-xl font-semibold mt-3">イベント3</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                このイベントの概要や詳細情報を記述します。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
