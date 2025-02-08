// app/projects/b/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ProjectB() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">プロジェクトB: 学生主導のまちづくり実践</h1>
      <div className="mb-6">
        <Image
          src="/project-b-detail.jpg"
          alt="プロジェクトB 詳細画像"
          width={800}
          height={500}
          className="rounded-md object-cover"
        />
      </div>
      <div className="mb-6">
        <p className="text-lg text-gray-700">
          プロジェクトBは、最新技術を活用しながら学生が主導するまちづくり実践プロジェクトです。  
          デジタル技術やスマートシティの概念を取り入れ、地域の課題解決と未来志向のインフラ構築を目指しています。
        </p>
        <p className="text-lg text-gray-700 mt-4">
          ・住民データの分析と活用による施策立案  
          ・デジタルワークショップや展示会の開催  
          ・地域企業や行政との連携によるプロジェクト推進
        </p>
      </div>
      <div>
        <Link
          href="/projects"
          className="text-blue-500 hover:underline"
        >
          ← プロジェクト一覧に戻る
        </Link>
      </div>
    </div>
  );
}
