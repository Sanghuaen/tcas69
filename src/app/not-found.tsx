import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - ไม่พบหน้า</h1>
        <p className="text-lg mb-8">ขออภัย ไม่พบหน้าที่คุณกำลังมองหา</p>
        <Link 
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          กลับไปหน้าหลัก
        </Link>
      </div>
    </div>
  );
}