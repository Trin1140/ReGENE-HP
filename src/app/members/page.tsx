// app/members/page.tsx
import Image from "next/image";

export default function MembersPage() {
  const featuredMembers = [
    {
      id: 1,
      name: "山田 太郎",
      grade: "3年生",
      affiliation: "プログラミング部",
      image: "/images/member1.jpg",
    },
    {
      id: 2,
      name: "佐藤 花子",
      grade: "2年生",
      affiliation: "デザイン部",
      image: "/images/member2.jpg",
    },
    {
      id: 3,
      name: "鈴木 次郎",
      grade: "1年生",
      affiliation: "マーケティング部",
      image: "/images/member3.jpg",
    },
  ];

  const otherMembers = [
    { id: 4, name: "高橋 三郎", grade: "3年生", affiliation: "経営学部" },
    { id: 5, name: "中村 四郎", grade: "2年生", affiliation: "ロボット工学部" },
    { id: 6, name: "加藤 五郎", grade: "1年生", affiliation: "情報科学部" },
    { id: 7, name: "伊藤 七郎", grade: "3年生", affiliation: "法学部" },
    { id: 8, name: "渡辺 八郎", grade: "2年生", affiliation: "文学部" },
    { id: 9, name: "斎藤 九郎", grade: "1年生", affiliation: "理学部" },
  ];

  // Other Members を学年ごとにグループ化
  const groupedMembers = otherMembers.reduce((groups, member) => {
    const grade = member.grade;
    if (!groups[grade]) {
      groups[grade] = [];
    }
    groups[grade].push(member);
    return groups;
  }, {} as { [grade: string]: typeof otherMembers });

  // 学年の見出しを「3年生」「2年生」「1年生」の順に表示するためにソート（降順）
  const sortedGrades = Object.keys(groupedMembers).sort((a, b) => Number(b[0]) - Number(a[0]));

  return (
    <main className="font-sans text-gray-800">
      {/* ヒーローセクション */}
      <section className="relative h-96">
        <div className="relative w-full h-full">
          <Image
            src="/images/organization-hero.jpg" // About ページと統一するための背景画像。必要に応じて変更してください。
            alt="メンバー一覧のヒーロー画像"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl sm:text-5xl font-bold">
              メンバー一覧
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        {/* Featured Members セクション */}
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 text-center">
          Featured Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {featuredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 p-6 flex flex-col items-center"
            >
              <div className="mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-lg text-gray-600">学年: {member.grade}</p>
              <p className="text-lg text-gray-600">所属: {member.affiliation}</p>
            </div>
          ))}
        </div>

        {/* Other Members セクション */}
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 text-center">
          Other Members
        </h2>
        <div className="space-y-8">
          {sortedGrades.map((grade) => (
            <div key={grade}>
              <h3 className="text-2xl font-bold mb-4">{grade}</h3>
              <div className="space-y-4">
                {groupedMembers[grade].map((member) => (
                  <div
                    key={member.id}
                    className="bg-white rounded-lg shadow p-4 flex justify-between items-center transition-colors hover:bg-gray-50"
                  >
                    <div>
                      <h4 className="text-2xl font-bold">{member.name}</h4>
                      <p className="text-lg text-gray-600">
                        学年: {member.grade} | 所属: {member.affiliation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
