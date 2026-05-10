"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Course } from "@/data/courses";

interface CourseDetailClientProps {
  course: Course;
  slug: string;
}

export default function CourseDetailClient({ course, slug }: CourseDetailClientProps) {
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("content"); // 'content' or 'about'
  const [completedLessons, setCompletedLessons] = useState(new Set<number>());
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  const activeLesson = course.lessons[activeLessonIndex];

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(`course-progress-${slug}`);
    if (savedProgress) {
      setCompletedLessons(new Set(JSON.parse(savedProgress)));
    }
  }, [slug]);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem(`course-progress-${slug}`, JSON.stringify([...completedLessons]));
  }, [completedLessons, slug]);

  const progressPercentage = Math.round((completedLessons.size / course.lessons.length) * 100);

  const goToNextLesson = () => {
    if (activeLessonIndex < course.lessons.length - 1) {
      setActiveLessonIndex(activeLessonIndex + 1);
    }
  };

  const goToPreviousLesson = () => {
    if (activeLessonIndex > 0) {
      setActiveLessonIndex(activeLessonIndex - 1);
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">Loading course access...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
          <div className="flex items-center space-x-4">
            <Link href="/courses" className="text-gray-400 hover:text-green-600 transition">←</Link>
            <h1 className="text-lg font-bold text-green-600">OromoTech Hub</h1>
          </div>
          <div>
            <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-bold">
              Course Preview
            </span>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-10">
              <h1 className="text-4xl font-black mb-4">{course.title}</h1>
              <p className="text-lg text-green-100 max-w-3xl">{course.description}</p>
            </div>

            <div className="p-8 space-y-8">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl bg-gray-50 p-6">
                  <h2 className="text-sm uppercase font-bold tracking-[0.3em] text-gray-500 mb-3">Duration</h2>
                  <p className="text-gray-700 font-semibold">{course.duration}</p>
                </div>
                <div className="rounded-3xl bg-gray-50 p-6">
                  <h2 className="text-sm uppercase font-bold tracking-[0.3em] text-gray-500 mb-3">Level</h2>
                  <p className="text-gray-700 font-semibold">{course.level}</p>
                </div>
                <div className="rounded-3xl bg-gray-50 p-6">
                  <h2 className="text-sm uppercase font-bold tracking-[0.3em] text-gray-500 mb-3">Instructor</h2>
                  <p className="text-gray-700 font-semibold">{course.instructor}</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Preview Lessons</h2>
                <div className="grid gap-4">
                  {course.lessons.slice(0, 3).map((lesson, index) => (
                    <div key={index} className="p-5 rounded-3xl border border-gray-100 bg-gray-50">
                      <h3 className="font-bold text-gray-900">{lesson.title}</h3>
                      <p className="mt-3 text-sm text-gray-500">{lesson.content.slice(0, 140)}...</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Full access requires login</h2>
                <p className="text-gray-600 leading-relaxed">
                  To unlock the complete course dashboard, full lesson list, progress tracking, and all learning tools, please sign in or create an account.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/login" className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-4 text-sm font-bold text-white hover:bg-green-700 transition">
                    Login to access course
                  </Link>
                  <Link href="/signup" className="inline-flex items-center justify-center rounded-2xl border border-green-600 px-6 py-4 text-sm font-bold text-green-600 hover:bg-green-50 transition">
                    Create account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <Link href="/courses" className="text-gray-400 hover:text-green-600 transition">←</Link>
          <h1 className="text-lg font-bold text-green-600">OromoTech Hub</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">
            Progress: {progressPercentage}%
          </span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center">
                <span className="text-4xl">🎓</span>
              </div>
            </div>
            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{course.title}</h1>
              <p className="text-green-100 mb-4 text-lg">{course.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">⏱️ {course.duration}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">📚 {course.level}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">👨‍🏫 {course.instructor}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">🏷️ {course.category}</span>
              </div>
              {course.tags && course.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {course.tags.map((tag, index) => (
                    <span key={index} className="bg-white/10 text-xs px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-grow flex flex-col lg:flex-row max-w-7xl mx-auto px-6 py-8 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* LEFT COLUMN: Video Player & Content */}
        <div className="flex-grow space-y-6">
          {/* VIDEO PLAYER */}
          <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-green-700 transition">
                  <span className="text-2xl">▶</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{activeLesson.title}</h3>
                <p className="text-gray-300">Click play to start learning</p>
              </div>
              {/* Navigation Buttons */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <button
                  onClick={goToPreviousLesson}
                  disabled={activeLessonIndex === 0}
                  className="bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-semibold transition"
                >
                  <span>←</span>
                  <span>Previous</span>
                </button>
                <button
                  onClick={goToNextLesson}
                  disabled={activeLessonIndex === course.lessons.length - 1}
                  className="bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-semibold transition"
                >
                  <span>Next</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* LESSON CONTENT */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h1 className="text-2xl font-bold text-gray-800">{activeLesson.title}</h1>
            <div className="flex space-x-4 mt-4 border-b border-gray-100 pb-2">
              <button
                onClick={() => setActiveTab("content")}
                className={`pb-2 px-2 font-bold text-sm transition ${
                  activeTab === "content" ? "border-b-2 border-green-600 text-green-600" : "text-gray-400"
                }`}
              >
                Qabiyyee Barumsaa
              </button>
              <button
                onClick={() => setActiveTab("about")}
                className={`pb-2 px-2 font-bold text-sm transition ${
                  activeTab === "about" ? "border-b-2 border-green-600 text-green-600" : "text-gray-400"
                }`}
              >
                Waa'ee Koorsii
              </button>
            </div>

            <div className="mt-6 text-gray-600 leading-relaxed text-sm">
              {activeTab === "content" ? (
                <p>{activeLesson.content}</p>
              ) : (
                <p>{course.description}</p>
              )}
            </div>

            {activeTab === "content" && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setCompletedLessons(prev => new Set([...prev, activeLessonIndex]))}
                  disabled={completedLessons.has(activeLessonIndex)}
                  className={`px-6 py-2 rounded-lg font-semibold text-sm transition ${
                    completedLessons.has(activeLessonIndex)
                      ? "bg-green-100 text-green-700 cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  {completedLessons.has(activeLessonIndex) ? "✅ Completed" : "Mark as Completed"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Lesson List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[600px]">
          <div className="p-5 border-b border-gray-50 bg-gray-50/50">
            <h2 className="font-bold text-gray-800 flex items-center justify-between">
              <span>📚 Tarree Barumsaa</span>
              <span className="text-xs text-gray-400 font-normal">{course.lessons.length} Lessons</span>
            </h2>
          </div>

          <div className="overflow-y-auto flex-grow p-4 space-y-3 custom-scrollbar">
            {course.lessons.map((lesson, index) => (
              <button
                key={index}
                onClick={() => setActiveLessonIndex(index)}
                className={`w-full text-left p-4 rounded-xl transition flex items-start space-x-3 border ${
                  activeLessonIndex === index
                    ? "bg-green-50 border-green-200 ring-1 ring-green-200"
                    : "bg-white border-transparent hover:bg-gray-50 hover:border-gray-200"
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${
                  completedLessons.has(index)
                    ? "bg-green-600 text-white"
                    : activeLessonIndex === index
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}>
                  {completedLessons.has(index) ? "✓" : index + 1}
                </span>
                <div className="flex-grow">
                  <h4 className={`text-sm font-bold ${activeLessonIndex === index ? "text-green-700" : "text-gray-700"}`}>
                    {lesson.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">🕒 10:00</p>
                </div>
                {activeLessonIndex === index && <span className="text-green-600">▶</span>}
              </button>
            ))}
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-100">
            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-green-100 hover:bg-green-700 transition active:scale-95">
              Certficate Argadhu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}