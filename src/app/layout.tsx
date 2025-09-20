// src/app/layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Portfolio App',
  description: 'A simple portfolio application built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      <body className="flex flex-col min-h-screen bg-gray-100">
        <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
          <div className="text-2xl font-bold">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Portfolio App</Link>
          </div>
          <nav className="sticky top-0 z-50 flex gap-6">
            <Link
              href="/"
              className="hover:text-yellow-400 transition-colors font-medium"
            >
              นักศึกษา
            </Link>
            <Link
              href="/teacher"
              className="hover:text-yellow-400 transition-colors font-medium"
            >
              หน้าอาจารย์
            </Link>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
      
        </main>
      <footer className="bg-gray-900 text-white text-center py-4 mt-10">
        &copy; {new Date().getFullYear()} Portfolio App. All rights reserved.
      </footer> 
      </body>
      
    </html>
  );
}