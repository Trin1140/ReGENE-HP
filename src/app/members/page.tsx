// app/members/page.tsx
import Image from 'next/image';

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
  const sortedGrades = Object.keys(groupedMembers).sort((a, b) => {
    // 例: "3年生" → 3, "2年生" → 2, "1年生" → 1
    return Number(b[0]) - Number(a[0]);
  });

  return (
    <main className="font-sans">
      {/* ヒーローセクション */}
      <section className="relative h-60 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold drop-shadow-md">メンバー一覧</h1>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Featured Members */}
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">Featured Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {featuredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <div className="mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">学年: {member.grade}</p>
              <p className="text-gray-600">所属: {member.affiliation}</p>
            </div>
          ))}
        </div>

        {/* Other Members（学年ごとのグループ表示） */}
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">Other Members</h2>
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
                      <h4 className="text-xl font-semibold">{member.name}</h4>
                      <p className="text-gray-600">
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
