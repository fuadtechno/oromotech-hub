"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <h1 className="text-xl font-extrabold text-green-600 tracking-tight">
        OromoTech Hub
      </h1>

      <div className="space-x-6 text-sm font-medium">
        <Link href="/courses" className="text-gray-600 hover:text-green-600 transition">
          Courses
        </Link>
        <Link href="/login" className="text-gray-600 hover:text-green-600 transition">
          Login
        </Link>
        <Link href="/signup" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-md shadow-green-100">
          Get Started
        </Link>
      </div>
    </nav>
  );
}