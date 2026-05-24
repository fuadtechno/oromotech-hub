"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function CoursesPage() {
  const router = useRouter();

  const freeResources = [
    {
      title: "Freshman Learning Package",
      desc: "University year-one complete learning modules and survival guides.",
      href: "/downloads/1.pdf",
      icon: "🎓",
      badge: "Freshman",
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Grade 8 Exam Prep",
      desc: "Past exams, model questions and smart revision resources.",
      href: "/grade8",
      icon: "📝",
      badge: "Grade 8",
      color: "from-cyan-500 to-sky-500",
    },
    {
      title: "Grade 12 Entrance",
      desc: "Complete university entrance preparation system.",
      href: "/downloads/3.pdf",
      icon: "🏛️",
      badge: "Grade 12",
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Network Design",
      desc: "foundation network design full  Accademy.",
      href: "/downloads/4.pdf",
      icon: "⚙️",
      badge: "Engineering",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Programming Fundamentals",
      desc: "Coding lessons covering algorithms and logic.",
      href: "/downloads/5.pdf",
      icon: "💻",
      badge: "Coding",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Digital Skills Toolkit",
      desc: "Computer skills and productivity mastery.",
      href: "/downloads/6.pdf",
      icon: "🧠",
      badge: "Skills",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Scholarship Resources",
      desc: "Scholarship applications and essay guides.",
      href: "/downloads/7.pdf",
      icon: "🌍",
      badge: "Global",
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "AI & Technology Basics",
      desc: "Learn future technology and AI systems.",
      href: "/downloads/8.pdf",
      icon: "🤖",
      badge: "AI",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const premiumCourses = [
    { name: "HTML", slug: "html", category: "FRONTEND", icon: "🌐" },
    { name: "CSS", slug: "css", category: "FRONTEND", icon: "🎨" },
    { name: "JAVASCRIPT", slug: "js", category: "FRONTEND", icon: "🌍" },
    { name: "REACT", slug: "react", category: "FRONTEND", icon: "⚛️" },
    { name: "NEXT.JS", slug: "nextjs", category: "FRONTEND", icon: "▲" },
    { name: "NODE.JS", slug: "node", category: "BACKEND", icon: "🟢" },
    { name: "PYTHON", slug: "python", category: "BACKEND", icon: "🐍" },
    { name: "POSTGRESQL", slug: "postgres", category: "DATABASE", icon: "🐘" },
    { name: "DOCKER", slug: "docker", category: "DEVOPS", icon: "🐳" },
    { name: "BOOTSTRAP", slug: "bootstrap", category: "FRONTEND", icon: "🌈" },
    { name: "JAVA", slug: "java", category: "front/back", icon: "👨‍💻" },
    { name: "NEXT", slug: "next", category: "FRONTEND", icon: "⚛️" },
    { name: "JQUERY", slug: "jq", category: "FRONTEND", icon: "🌍" },
    { name: "ANGULAR", slug: "angular", category: "FRONTEND", icon: "🗄️" },
    { name: "EXPRESS.js", slug: "express.js", category: "BACKEND", icon: "🌍" },
    { name: "DJANGO", slug: "django", category: "BACKEND", icon: "🗄️" },
    { name: "PHP", slug: "php", category: "BACKEND", icon: "🌍" },
    { name: "SQL", slug: "sql", category: "DATABASE", icon: "🗄️" },
    { name: "MONGODB", slug: "mongodb", category: "DATABASE", icon: "🗄️" },
    { name: "FIREBASE", slug: "fbase", category: "BACKENd", icon: "🟢" },
    { name: "AWS", slug: "aws", category: "CLOUD", icon: "🌍" },
    { name: "GIT & GITHUBGIT ", slug: "tools", category: "GITHUB", icon: "🟢" },
    { name: "TYPESCRIPT", slug: "TS", category: "FRONTEND", icon: "🌍" },
    { name: "AI", slug: "ai", category: "PROGRAMMING", icon: "🤖" },
    { name: "OS", slug: "os", category: "PROGRAMMING", icon: "👨‍💻" }, 
    { name: "DSA", slug: "", category: "ALGORESIM", icon: "👨‍💻" }, 
    { name: "MOBILE APP", slug: "MA", category: "PROGRAMMING", icon: "❄️" }, 
    { name: "C#", slug: "csharp", category: "PROGRAMMING", icon: "👨‍💻" }, 
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">

      {/* animated bg */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/20 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.04)_1px,_transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl px-8 py-4 shadow-xl">
          <Link
            href="/"
            className="font-bold text-white hover:text-cyan-400 transition"
          >
            ← Back Home
          </Link>

          <button
            onClick={() => router.push("/login")}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:scale-105 transition shadow-lg"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* hero */}
      <section className="pt-40 pb-20 text-center px-6">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-6"
        >
          Learning{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Hub
          </span>
        </motion.h1>

        <p className="max-w-2xl mx-auto text-slate-300 text-lg">
          Explore free educational resources and unlock premium technical
          courses.
        </p>
      </section>

      {/* free resources */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-black mb-12 text-center">
          Free Learning Resources
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {freeResources.map((item, i) => (
            <motion.a
              whileHover={{ y: -10, scale: 1.03 }}
              key={i}
              href={item.href}
              onClick={(e) => {
                if (item.title === "Freshman Learning Package") {
                  e.preventDefault();
                  router.push("/freshman");
                }
              }}
              className="relative p-8 rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl group shadow-xl"
            >
              {/* hover glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-700 bg-gradient-to-br ${item.color}`}
              />

              {/* shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-1000 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.15)_50%,transparent_80%)] translate-x-[-150%] group-hover:translate-x-[150%]" />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-5xl group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color}`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black mb-3 group-hover:text-cyan-300 transition">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm mb-8">
                  {item.desc}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 font-bold">
                    Explore →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* premium */}
      <section className="py-24 px-6 bg-black/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-black text-center mb-14">
            Premium Dashboard
          </h2>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-1000 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.15)_50%,transparent_80%)] translate-x-[-150%] group-hover:translate-x-[150%]" />

          <div className="grid md:grid-cols-4 gap-6">
            {premiumCourses.map((course, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -6 }}
                onClick={() => router.push("/login")}
                className="cursor-pointer p-8 rounded-3xl bg-white/5 border border-white/10 text-center backdrop-blur-xl hover:border-cyan-400 transition shadow-xl"
              >
                <div className="text-5xl mb-5">{course.icon}</div>

                <p className="text-xs text-cyan-400 font-bold mb-2">
                  {course.category}
                </p>

                <h3 className="font-black text-xl">
                  {course.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button
              onClick={() => router.push("/signup")}
              className="px-10 py-5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 font-black text-lg hover:scale-105 transition shadow-2xl"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}