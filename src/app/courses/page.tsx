"use client";

import { useState } from "react";
import Link from "next/link";

// 1. Data Koorsii (Bor Firebase irraa dhufa)
const allCourses = [
  { id: 1, title: "HTML Basics", category: "free", desc: "Bu'uura weebsaayitii ijaaruu baradhu.", icon: "🌐" },
  { id: 2, title: "CSS Mastery", category: "premium", desc: "Dizaayinii ammayyaawaa qopheessi.", icon: "🎨" },
  { id: 3, title: "JavaScript Basics", category: "free", desc: "Weebsaayitii kee socho'aa taasisi.", icon: "⚡" },
  { id: 4, title: "React Fundamentals", category: "premium", desc: "Appilikeeshinii weebii ijaari.", icon: "⚛️" },
  { id: 5, title: "Freelancing Basics", category: "free", desc: "Akkaataa online irratti hojjatan baradhu.", icon: "💰" },
  { id: 6, title: "AI Introduction", category: "premium", desc: "Waa'ee Artificial Intelligence baradhu.", icon: "🤖" },
];

export default function CoursesPage() {
  const [filter, setFilter] = useState("all");

  // Filter Logic
  const filteredCourses = filter === "all" 
    ? allCourses 
    : allCourses.filter(c => c.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-xl font-black text-green-600">OromoTech Hub</h1>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-green-600 transition">Home</Link>
          <Link href="/login" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Login</Link>
        </div>
      </nav>

      {/* HEADER SECTION */}
      <header className="px-6 py-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-gray-900">
          📚 Koorsiiwwan <span className="text-green-600">Hunda</span>
        </h1>
        <p className="text-gray-500 mt-3 text-lg max-w-2xl font-light">
          Ogummaa koodingii, freelancing fi teeknoolojii Afaan Oromootiin sadarkaa biyya lafaatti baradhu.
        </p>

        {/* FILTER BUTTONS */}
        <div className="flex gap-3 mt-8">
          {["all", "free", "premium"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold capitalize transition border-2 ${
                filter === cat 
                ? "bg-green-600 border-green-600 text-white shadow-lg shadow-green-100" 
                : "bg-white border-gray-100 text-gray-500 hover:border-green-200"
              }`}
            >
              {cat === "all" ? "Hunda" : cat}
            </button>
          ))}
        </div>
      </header>

      {/* COURSE GRID */}
      <main className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="group bg-white p-7 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 relative overflow-hidden"
            >
              {/* Category Badge */}
              <span className={`absolute top-4 right-4 text-[10px] font-black uppercase px-3 py-1 rounded-full ${
                course.category === 'free' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
              }`}>
                {course.category}
              </span>

              <div className="text-4xl mb-5">{course.icon}</div>
              <h2 className="font-bold text-xl text-gray-800 group-hover:text-green-600 transition">{course.title}</h2>
              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                {course.desc}
              </p>
              
              <Link
                href={`/courses/${course.id}`}
                className="mt-6 w-full flex items-center justify-center bg-gray-50 text-gray-700 py-3 rounded-xl font-bold group-hover:bg-green-600 group-hover:text-white transition"
              >
                Barumsa Jalqabi
              </Link>
            </div>
          ))}
        </div>

        {/* No Results found */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">Koorsiin ati barbaadde ammaaf hin jiru.</p>
          </div>
        )}
      </main>

    </div>
  );
}