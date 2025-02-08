// app/projects/c/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ProjectC() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">プロジェクトC: 環境保全と地域共生の挑戦</h1>
      <div className="mb-6">
        <Image
          src="/project-c-detail.jpg"
          alt="プロジェクトC 詳細画像"
          width={800}
          height={500}
          className="rounded-md object-cover"
        />
      </div>
      <div className="mb-6">
        <p className="text-lg text-gray-700">
          プロジェクトCは、環境保全と地域共生を両立させる取り組みとして、持続可能なまちづくりを目指すプロジェクトです。  
          自然資源の保護、エコツーリズムの推進、再生可能エネルギーの活用などを通じて、地域に優しい取り組みを実施しています。
        </p>
        <p className="text-lg text-gray-700 mt-4">
          ・地域の緑地保全と環境教育の実施  
          ・再生可能エネルギー設備の導入支援  
          ・地域住民と専門家による連携活動の促進
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
