"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Cookie,
  Globe,
  Sparkles,
  Users,
  Server,
  FileText,
  RefreshCw,
  Menu,
  X,
  BookOpen,
} from "lucide-react";

export default function PrivacyPage() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ================= PREMIUM COURSES =================
  const megaMenuData = [
    { name: "HTML", slug: "html", category: "WEB BASICS" },
    { name: "CSS", slug: "css", category: "WEB BASICS" },
    { name: "RWD", slug: "rwd", category: "WEB BASICS" },
    { name: "BOOTSTRAP", slug: "bootstrap", category: "WEB BASICS" },
    { name: "W3.CSS", slug: "w3.css", category: "WEB BASICS" },

    { name: "JAVASCRIPT", slug: "javascript", category: "FRONTEND" },
    { name: "REACT", slug: "react", category: "FRONTEND" },
    { name: "JQUERY", slug: "jquery", category: "FRONTEND" },
    { name: "VUE", slug: "vue", category: "FRONTEND" },
    { name: "ANGULAR", slug: "angular", category: "FRONTEND" },

    { name: "NODE.JS", slug: "node.js", category: "BACKEND" },
    { name: "EXPRESS.JS", slug: "express.js", category: "BACKEND" },
    { name: "PYTHON", slug: "python", category: "BACKEND" },
    { name: "DJANGO", slug: "django", category: "BACKEND" },
    { name: "PHP", slug: "php", category: "BACKEND" },

    { name: "SQL", slug: "sql", category: "DATABASE" },
    { name: "MONGODB", slug: "mongodb", category: "DATABASE" },
    { name: "POSTGRESQL", slug: "postgresql", category: "DATABASE" },
    { name: "FIREBASE", slug: "firebase", category: "DATABASE" },

    { name: "AWS", slug: "aws", category: "CLOUD" },
    { name: "DOCKER", slug: "docker", category: "DEVOPS" },

    { name: "GIT & GITHUB", slug: "git-github", category: "TOOLS" },
    { name: "TYPESCRIPT", slug: "typescript", category: "FRONTEND" },

    { name: "C++", slug: "c++", category: "PROGRAMMING" },
  ];

  const groupedCourses = megaMenuData.reduce((acc: any, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-hidden">

      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all
        ${
          scrolled
            ? "bg-[#030712]/90 backdrop-blur-xl border-white/10 shadow-lg"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">

          <Link href="/" className="font-black text-xl">
            OromoTech Hub
          </Link>

          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/" className="hover:text-cyan-300">Home</Link>
            <Link href="/courses" className="hover:text-cyan-300">Courses</Link>
            <Link href="/get-started" className="bg-cyan-400 text-black px-4 py-2 rounded-xl font-bold">
              Get Started
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE */}
        {open && (
          <div className="md:hidden px-6 pb-4 space-y-3 border-t border-white/10">
            <Link href="/" className="block">Home</Link>
            <Link href="/courses" className="block">Courses</Link>
            <Link href="/get-started" className="block text-cyan-300">Get Started</Link>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="pt-40 text-center px-6">
        <div className="inline-flex items-center gap-2 text-cyan-300">
          <Sparkles size={16} /> Premium Learning Platform
        </div>

        <h1 className="text-5xl md:text-7xl font-black mt-6">
          Privacy + Premium Courses
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Learn modern web development, backend, cloud, and programming with structured courses.
        </p>
      </section>

      {/* ================= PREMIUM COURSES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="flex items-center gap-2 mb-10">
          <BookOpen className="text-cyan-300" />
          <h2 className="text-2xl font-bold">Premium Courses</h2>
        </div>

        {Object.keys(groupedCourses).map((category) => (
          <div key={category} className="mb-12">

            <h3 className="text-lg font-bold text-cyan-300 mb-4">
              {category}
            </h3>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">

              {groupedCourses[category].map((course: any, i: number) => (
                <Link
                  key={i}
                  href={`/courses/${course.slug}`}
                  className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <p className="font-bold">{course.name}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Start learning {course.name}
                  </p>
                </Link>
              ))}

            </div>
          </div>
        ))}

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500 text-sm">
        <p className="text-white font-bold">OromoTech Hub</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>

    </div>
  );
}