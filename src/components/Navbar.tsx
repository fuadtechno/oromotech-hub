"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      
      {/* Brand Logo */}
      <Link href="/">
        <h1 className="text-2xl font-black text-emerald-600 tracking-tighter cursor-pointer hover:scale-105 transition">
          OromoTech <span className="text-gray-900">Hub</span>
        </h1>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/about" className="text-gray-600 font-bold hover:text-emerald-600 transition">
          About us
        </Link>
        
        <Link href="/courses" className="text-gray-600 font-bold hover:text-emerald-600 transition">
          Courses
        </Link>
        <Link href="/privacy" className="text-gray-600 font-bold hover:text-emerald-600 transition">
          Privacy policy
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        <Link 
          href="/login" 
          className="text-gray-700 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-50 transition"
        >
          Login
        </Link>
        <Link 
          href="/signup" 
          className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-black shadow-lg shadow-emerald-100 hover:bg-emerald-700 hover:scale-105 transition active:scale-95"
        >
          Get Started
        </Link>
      </div>

    </nav>
  );
}