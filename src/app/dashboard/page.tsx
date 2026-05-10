"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { courses, Course } from "@/data/courses";

export default function OroTechDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState("DASHBOARD");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

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

  const currentLesson = selectedCourse?.lessons[activeLessonIndex];

  const handleNext = () => {
    if (selectedCourse && activeLessonIndex < selectedCourse.lessons.length - 1) {
      setActiveLessonIndex(activeLessonIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeLessonIndex > 0) {
      setActiveLessonIndex(activeLessonIndex - 1);
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <p className="text-lg font-semibold">Loading your dashboard...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 font-black mb-4">Authentication Required</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Please sign in to access your learning dashboard.
          </h1>
          <p className="text-gray-600 leading-relaxed mb-10">
            The full OromoTech Hub learning experience is reserved for logged-in students. Login or create an account to unlock lessons, progress tracking, and the complete course dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/login")}
              className="rounded-3xl bg-green-600 px-8 py-4 text-white font-bold hover:bg-green-700 transition"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/signup")}
              className="rounded-3xl border border-green-600 px-8 py-4 text-green-600 font-bold hover:bg-green-50 transition"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen font-sans selection:bg-green-500/30 transition-colors duration-500 ${
        view === "DASHBOARD"
          ? "bg-[#050505] text-white"
          : "bg-white text-zinc-900"
      }`}
    >
      {/* HEADER */}
      <header
        className={`h-24 flex items-center px-8 border-b sticky top-0 z-[100] transition-all ${
          view === "DASHBOARD"
            ? "bg-[#050505] border-zinc-900/50"
            : "bg-white border-zinc-200"
        }`}
      >
        <div className="flex items-center gap-8 w-full max-w-[1800px] mx-auto">
          {view === "DASHBOARD" ? (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`group flex items-center gap-4 px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 border ${
                isMenuOpen
                  ? "bg-zinc-900 border-zinc-700 text-zinc-400"
                  : "bg-green-600 border-green-500 text-black"
              }`}
            >
              <div className="relative w-5 h-4 flex flex-col justify-between overflow-hidden">
                <span
                  className={`h-[2px] w-full bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                ></span>

                <span
                  className={`h-[2px] w-full bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? "translate-x-full opacity-0" : ""
                  }`}
                ></span>

                <span
                  className={`h-[2px] w-full bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                ></span>
              </div>

              <span>
                {isMenuOpen ? "Close Menu" : "Browse Courses"}
              </span>
            </button>
          ) : (
            <button
              onClick={() => setView("DASHBOARD")}
              className="text-zinc-500 hover:text-black font-bold text-xs uppercase tracking-widest"
            >
              ❮ Back to Library
            </button>
          )}

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setView("DASHBOARD")}
          >
            <div className="bg-green-600 text-black font-black px-2 py-0.5 rounded-sm text-[11px] italic">
              OH
            </div>

            <span
              className={`font-black text-2xl tracking-tighter uppercase italic ${
                view === "DASHBOARD"
                  ? "text-white"
                  : "text-zinc-900"
              }`}
            >
              OROTECH
              <span className="text-green-600 font-light ml-1">
                HUB
              </span>
            </span>
          </div>
        </div>
      </header>

      {/* MEGA MENU */}
      {view === "DASHBOARD" && (
        <div
          className={`absolute top-24 left-0 w-full bg-[#050505] border-b border-zinc-800 z-[90] transition-all duration-700 ${
            isMenuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="max-w-[1800px] mx-auto p-12 lg:p-20">
            <div className="mb-16">
              <h2 className="text-green-600 text-6xl font-black italic uppercase tracking-tighter">
                Learning Library
              </h2>

              <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mt-3">
                Professional Web Development Curriculum
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {megaMenuData.map((course, index) => (
                <div
                  key={index}
                  onClick={() => {
                    const foundCourse = courses.find(c => c.slug === course.slug);
                    if (foundCourse) {
                      setSelectedCourse(foundCourse);
                      setActiveLessonIndex(0);
                      setView("LEARNING");
                      setIsMenuOpen(false);
                    }
                  }}
                  className="group relative p-8 rounded-[2rem] bg-zinc-900/10 border border-zinc-900 transition-all duration-500 hover:border-green-600/50 hover:bg-zinc-900/30 cursor-pointer"
                >
                  <span className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.2em] mb-3 block group-hover:text-green-600">
                    {course.category}
                  </span>

                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black uppercase tracking-tighter text-zinc-300 group-hover:text-white">
                      {course.name}
                    </h3>

                    <span className="text-green-600 text-xl opacity-0 group-hover:opacity-100 transition-all">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MAIN */}
      <main>
        {view === "DASHBOARD" ? (
          <div
            className={`flex flex-col items-center justify-center h-[70vh] text-center transition-opacity duration-1000 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            <h1 className="text-[15vw] font-black italic opacity-[0.02] absolute select-none tracking-tighter uppercase">
              Library
            </h1>

            <div className="relative space-y-6">
              <div className="w-16 h-[2px] bg-green-600 mx-auto"></div>

              <h3 className="text-5xl md:text-7xl font-black italic tracking-tighter text-zinc-900 uppercase">
                Start Journey
              </h3>

              <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em]">
                Learn Modern Web Development Step by Step
              </p>
            </div>
          </div>
        ) : (
          <div className="flex animate-in fade-in slide-in-from-right duration-500">
            {/* SIDEBAR */}
            <aside className="w-64 bg-[#E7E9EB] h-[calc(100vh-6rem)] sticky top-24 overflow-y-auto">
              <div className="py-8">
                <h2 className="px-6 mb-6 text-xl font-bold text-zinc-800 uppercase tracking-tighter border-b border-zinc-300 pb-2 mx-4">
                  {selectedCourse?.title} Tutorial
                </h2>

                {selectedCourse?.lessons.map((lesson, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveLessonIndex(index)}
                    className={`w-full text-left px-6 py-2 text-[14px] transition-colors ${
                      activeLessonIndex === index
                        ? "bg-[#04AA6D] text-white font-bold"
                        : "text-zinc-700 hover:bg-zinc-300"
                    }`}
                  >
                    {lesson.title}
                  </button>
                ))}
              </div>
            </aside>

            {/* CONTENT */}
            <div className="flex-1 p-12 lg:p-20 bg-white">
              <div className="max-w-5xl mx-auto">
                <div className="mb-6 flex items-center gap-3">
                  <span className="bg-[#04AA6D] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {selectedCourse?.title}
                  </span>

                  <span className="text-zinc-400 text-sm">
                    {selectedCourse?.level} • {selectedCourse?.duration}
                  </span>
                </div>

                <h1 className="text-5xl font-normal mb-6 text-zinc-900 leading-tight">
                  {currentLesson?.title}
                </h1>

                <div className="flex justify-between mb-12">
                  <button
                    onClick={handlePrev}
                    className={`bg-[#E7E9EB] text-zinc-900 px-6 py-2 rounded font-bold hover:bg-zinc-300 transition-all ${
                      activeLessonIndex === 0
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    ❮ Previous
                  </button>

                  <button
                    onClick={handleNext}
                    className={`bg-[#04AA6D] text-white px-8 py-2 rounded font-bold hover:bg-[#059862] transition-all ${
                      selectedCourse && activeLessonIndex === selectedCourse.lessons.length - 1
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    Next ❯
                  </button>
                </div>

                {/* DESCRIPTION */}
                <div className="bg-[#D9EEE1] p-12 rounded-xl mb-10 border-l-8 border-[#04AA6D]">
                  <p className="text-zinc-700 text-lg leading-relaxed whitespace-pre-line">
                    {currentLesson?.content}
                  </p>

                  {currentLesson?.duration && (
                    <div className="mt-4 text-zinc-600 text-sm">
                      Duration: {currentLesson.duration}
                    </div>
                  )}
                </div>

                {/* VIDEO OR CODE */}
                {currentLesson?.videoUrl ? (
                  <div className="bg-[#E7E9EB] p-8 rounded-xl border border-zinc-300 shadow-inner mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-zinc-900">
                        Video Lesson
                      </h3>
                      <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">
                        {currentLesson.type?.toUpperCase() || 'VIDEO'}
                      </span>
                    </div>
                    <div className="aspect-video">
                      <iframe
                        src={currentLesson.videoUrl}
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#E7E9EB] p-8 rounded-xl border border-zinc-300 shadow-inner mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-zinc-900">
                        Lesson Content
                      </h3>
                      <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">
                        {currentLesson?.type?.toUpperCase() || 'TEXT'}
                      </span>
                    </div>
                    <div className="bg-white p-6 border-l-4 border-[#04AA6D] font-mono text-sm leading-loose shadow-sm whitespace-pre-wrap text-zinc-800 overflow-auto rounded-lg">
                      {currentLesson?.content}
                    </div>
                  </div>
                )}

                {/* FOOTER CARD */}
                <div className="mt-12 bg-zinc-900 text-white rounded-2xl p-10">
                  <h3 className="text-3xl font-black mb-4">
                    Continue Learning {selectedCourse?.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-6">
                    Practice consistently and build real projects to improve your {selectedCourse?.tags.join(', ')} skills. {selectedCourse?.title} is the foundation for modern web development.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {selectedCourse?.tags.map((tag, index) => (
                      <span key={index} className="px-4 py-2 rounded-full bg-zinc-800 text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}