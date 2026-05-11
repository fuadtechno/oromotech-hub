"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

export default function CoursesPage() {
  const router = useRouter();

 // SECTION 1: Free Downloadable Resources
const freeResources = [
  {
    title: "Freshman Learning Package",
    desc: "University year-one complete learning modules, tutorials, and academic survival guides.",
    href: "/downloads/1.pdf",
    icon: "🎓",
  },
  {
    title: "Grade 8 Exam Prep",
    desc: "Past exams, model questions, and smart revision materials for Grade 8 national exams.",
    href: "/grade8",
    icon: "📝",
  },
  {
    title: "Grade 12 Entrance",
    desc: "Complete university entrance preparation system with PDFs, practice tests, and guides.",
    href: "/downloads/3.pdf",
    icon: "🏛️",
  },
  {
    title: "Pre-Engineering Academy",
    desc: "Engineering mathematics, physics, and technical foundations for future innovators.",
    href: "/downloads/4.pdf",
    icon: "⚙️",
  },
  {
    title: "Programming Fundamentals",
    desc: "Beginner-friendly coding lessons covering logic building, algorithms, and software basics.",
    href: "/downloads/5.pdf",
    icon: "💻",
  },
  {
    title: "Digital Skills Toolkit",
    desc: "Essential computer skills, productivity apps, typing, and internet mastery resources.",
    href: "/downloads/6.pdf",
    icon: "🧠",
  },
  {
    title: "Scholarship Resources",
    desc: "Scholarship application guides, essay templates, and international opportunity resources.",
    href: "/downloads/7.pdf",
    icon: "🌍",
  },
  {
    title: "AI & Technology Basics",
    desc: "Introduction to artificial intelligence, future technologies, and modern digital systems.",
    href: "/downloads/7.pdf",
    icon: "🤖",
  },
];
 // SECTION 2: Premium System Dashboard Courses
const premiumCourses = [
  { name: "HTML", slug: "html", category: "WEB BASICS", icon: "🌐" },
  { name: "CSS", slug: "css", category: "WEB BASICS", icon: "🎨" },
  { name: "RWD", slug: "rwd", category: "WEB BASICS", icon: "📱" },
  { name: "BOOTSTRAP", slug: "bootstrap", category: "WEB BASICS", icon: "🅱️" },
  { name: "W3.CSS", slug: "w3.css", category: "WEB BASICS", icon: "💠" },

  { name: "JAVASCRIPT", slug: "javascript", category: "FRONTEND", icon: "📜" },
  { name: "REACT", slug: "react", category: "FRONTEND", icon: "⚛️" },
  { name: "JQUERY", slug: "jquery", category: "FRONTEND", icon: "🟡" },
  { name: "VUE", slug: "vue", category: "FRONTEND", icon: "🟢" },
  { name: "ANGULAR", slug: "angular", category: "FRONTEND", icon: "🔺" },
  { name: "TYPESCRIPT", slug: "typescript", category: "FRONTEND", icon: "📘" },

  { name: "NODE.JS", slug: "node.js", category: "BACKEND", icon: "🟢" },
  { name: "EXPRESS.JS", slug: "express.js", category: "BACKEND", icon: "🚂" },
  { name: "PYTHON", slug: "python", category: "BACKEND", icon: "🐍" },
  { name: "DJANGO", slug: "django", category: "BACKEND", icon: "🎯" },
  { name: "PHP", slug: "php", category: "BACKEND", icon: "🐘" },

  { name: "SQL", slug: "sql", category: "DATABASE", icon: "💾" },
  { name: "MONGODB", slug: "mongodb", category: "DATABASE", icon: "🍃" },
  { name: "POSTGRESQL", slug: "postgresql", category: "DATABASE", icon: "🐘" },
  { name: "FIREBASE", slug: "firebase", category: "DATABASE", icon: "🔥" },

  { name: "AWS", slug: "aws", category: "CLOUD", icon: "☁️" },

  { name: "DOCKER", slug: "docker", category: "DEVOPS", icon: "🐳" },

  { name: "GIT & GITHUB", slug: "git-github", category: "TOOLS", icon: "🔧" },

  { name: "C++", slug: "c++", category: "PROGRAMMING", icon: "💻" },
];

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfe] text-slate-900 overflow-x-hidden relative">
      
      {/* BACKGROUND BLURS */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-emerald-200/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-cyan-200/20 rounded-full blur-[100px]"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-3xl px-6 py-3">
          <Link href="/" className="flex items-center gap-2 text-slate-600 font-bold hover:text-emerald-600 transition-colors">
            <span>←</span> Back to Home
          </Link>
          
          <button 
            onClick={() => router.push("/login")}
            className="px-6 py-2 rounded-full bg-emerald-600 text-white font-black text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-[950] tracking-tight text-slate-900 mb-6 uppercase italic">
            Learning <span className="text-emerald-600">Hub</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Explore our library of free educational materials and premium professional technical courses.
          </p>
        </div>
      </section>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {freeResources.map((item, i) => (
    <a
      key={i}
      href={item.href}
      download
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        if (item.title === "Freshman Learning Package") {
          event.preventDefault();
          router.push("/freshman");
        }
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-cyan-200/60 bg-gradient-to-br from-cyan-50 via-white to-cyan-100/40 backdrop-blur-2xl p-8 hover:shadow-2xl hover:shadow-cyan-200/40 transition-all duration-500 hover:-translate-y-2"
    >
     {/* free course  */}
<div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700">

  {/* Top Right Aurora */}
  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cyan-400/20 blur-3xl"></div>

  {/* Bottom Left Glow */}
  <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-sky-300/20 blur-3xl"></div>

  {/* Center Light */}
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-white/5 to-sky-300/5"></div>

  {/* Shine Effect */}
  <div className="absolute inset-0 opacity-40 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.18)_50%,transparent_80%)] translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000"></div>
</div>
      {/* Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-sky-400 to-cyan-400"></div>

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-100 via-sky-50 to-cyan-200 text-4xl shadow-lg shadow-cyan-100/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          {item.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-black mb-3 tracking-tight text-slate-900 group-hover:text-cyan-600 transition-colors duration-300">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-slate-600 mb-8">
          {item.desc}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-cyan-600 font-black text-sm tracking-wide group-hover:text-sky-600 transition-colors">
            DOWNLOAD
          </span>

          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 text-white flex items-center justify-center group-hover:translate-x-1 transition-all shadow-lg shadow-cyan-200">
            ↓
          </div>
        </div>
      </div>
    </a>
  ))}
</div>

      {/* SECTION 2: PREMIUM DASHBOARD COURSES */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-black uppercase tracking-tighter italic text-emerald-700">Premium Dashboard</h2>
            <div className="h-[2px] flex-grow bg-emerald-50"></div>
            <div className="px-3 py-1 bg-emerald-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">Requires Login</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {premiumCourses.map((course, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                onClick={() => router.push("/login")}
                className="relative group cursor-pointer p-6 rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="text-3xl mb-4 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                    {course.icon}
                  </div>
                  <span className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-1">
                    {course.category}
                  </span>
                  <h3 className="text-lg font-black text-white tracking-tight uppercase group-hover:text-emerald-400">
                    {course.name}
                  </h3>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all text-[10px] font-bold text-white/50">
                    CLICK TO START →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-10 rounded-[3rem] bg-gradient-to-r from-emerald-600 to-cyan-700 text-white text-center">
            <h2 className="text-3xl font-black mb-4">Unlock Full Access</h2>
            <p className="max-w-xl mx-auto text-white/80 font-medium mb-8">
              Join our system dashboard to track your progress, access video tutorials, and interact with coding projects.
            </p>
            <button 
              onClick={() => router.push("/signup")}
              className="px-10 py-4 bg-white text-emerald-700 font-black rounded-full hover:scale-105 transition-transform uppercase tracking-widest text-sm shadow-xl"
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