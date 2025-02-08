// app/projects/a/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ProjectA() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">プロジェクトA: 地域活性化プロジェクト</h1>
      <div className="mb-6">
        <Image
          src="/project-a-detail.jpg"
          alt="プロジェクトA 詳細画像"
          width={800}
          height={500}
          className="rounded-md object-cover"
        />
      </div>
      <div className="mb-6">
        <p className="text-lg text-gray-700">
          プロジェクトAは、地域の活性化を目的に、学生が主体となって実施する取り組みです。  
          地域の魅力を再発見し、住民と協働でイベントやワークショップを開催しています。  
          詳細な活動内容や実績について、以下の内容でご紹介します。
        </p>
        <p className="text-lg text-gray-700 mt-4">
          ・定期的なコミュニティイベントの開催  
          ・地域資源を活用したプロモーション活動  
          ・住民との意見交換やフィードバックを重視した活動運営
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
