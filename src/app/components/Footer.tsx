// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Re-GENE. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          学生と地域が共に創る未来のまちづくりをサポートします。
        </p>
      </div>
    </footer>
  );
}
