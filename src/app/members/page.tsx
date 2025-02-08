// app/members/page.tsx
import Image from "next/image";

export default function MembersPage() {
  const featuredMembers = [
    {
      id: 1,
      name: "泉川 時",
      grade: "博士3年",
      affiliation: "早稲田大学 建築学科 後藤春彦研究室",
      image: "/images/member1.jpg",
    },
    {
      id: 2,
      name: "林 泰地",
      grade: "修士2年",
      affiliation: "早稲田大学 建築学科 後藤春彦研究室",
      image: "/images/member2.jpg",
    },
    {
      id: 3,
      name: "各務 弓太",
      grade: "修士2年",
      affiliation: "早稲田大学 建築学科 後藤春彦研究室",
      image: "/images/member3.jpg",
    },
  ];

  const otherMembers = [
    { id: 4, name: "加賀谷 唯", grade: "修士2年", affiliation: "早稲田大学 建築学科 後藤春彦研究室" },
    { id: 5, name: "上原 祐輝", grade: "修士1年", affiliation: "早稲田大学 建築学科 後藤春彦研究室" },
    { id: 6, name: "櫻井 友紀子", grade: "修士1年", affiliation: "早稲田大学 建築学科 後藤春彦研究室" },
    { id: 7, name: "永田 一真", grade: "学部4年", affiliation: "早稲田大学 建築学科 後藤春彦研究室" },
    { id: 8, name: "松島 汐音", grade: "学部4年", affiliation: "早稲田大学 建築学科 後藤春彦研究室" },
    { id: 9, name: "海老澤 理々華", grade: "学部4年", affiliation: "早稲田大学 建築学科 後藤春彦研究室" },
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
          Members
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
                         | 所属: {member.affiliation}
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
