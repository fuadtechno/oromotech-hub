"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { freshmanCourses, FreshmanCourse } from "@/data/freshmanCourses";

const buttonStyles =
  "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border border-slate-200 hover:border-emerald-500";

function FreshmanCourseCard({ course }: { course: FreshmanCourse }) {
  return (
    <Link href={`/freshman/${course.id}`}>
      <div className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 cursor-pointer">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="text-xs uppercase tracking-[0.35em] text-emerald-600 font-black">
          {course.universityReference}
        </span>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
          course.isRequired
            ? "bg-emerald-100 text-emerald-700"
            : "bg-amber-100 text-amber-700"
        }`}>
          {course.isRequired ? "Required" : "Elective"}
        </span>
      </div>
      <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
        {course.title}
      </h3>
      <p className="text-sm leading-6 text-slate-500 mb-4">{course.description}</p>
      <div className="flex items-center justify-between text-xs text-slate-600 font-semibold">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          {course.duration}
        </span>
        <span className="bg-slate-100 px-2.5 py-1 rounded-full">
          {course.credits} credits
        </span>
      </div>
      </div>
    </Link>
  );
}

export default function FreshmanCoursesLoader() {
  const [courses, setCourses] = useState<FreshmanCourse[]>([]);
  const [activeSemester, setActiveSemester] = useState<"All Semesters" | "1st Semester" | "2nd Semester">("All Semesters");
  const [activeFilter, setActiveFilter] = useState<"All" | "Required" | "Elective">("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCourses(freshmanCourses);
      setIsLoading(false);
    }, 500);

    return () => window.clearTimeout(timer);
  }, []);

  const displayedCourses = useMemo(() => {
    let filtered = courses;
    
    if (activeSemester !== "All Semesters") {
      filtered = filtered.filter((course) => course.semester === activeSemester);
    }
    
    if (activeFilter === "Required") {
      filtered = filtered.filter((course) => course.isRequired);
    } else if (activeFilter === "Elective") {
      filtered = filtered.filter((course) => !course.isRequired);
    }
    
    return filtered;
  }, [activeSemester, activeFilter, courses]);

  const semesterStats = useMemo(() => {
    const sem1 = courses.filter((c) => c.semester === "1st Semester");
    const sem2 = courses.filter((c) => c.semester === "2nd Semester");
    const sem1Credits = sem1.reduce((sum, c) => sum + c.credits, 0);
    const sem2Credits = sem2.reduce((sum, c) => sum + c.credits, 0);
    
    return {
      semester1: { count: sem1.length, credits: sem1Credits },
      semester2: { count: sem2.length, credits: sem2Credits },
    };
  }, [courses]);

  return (
    <section className="min-h-screen py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-600 font-black mb-4">
            🎓 Ethiopian University
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Freshman Curriculum 2025
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto leading-8 mb-8">
            Complete first-year course structure with semester organization, faculty grouping, and academic calendar.
          </p>
        </div>

        <div className="mb-12 max-w-4xl mx-auto text-left rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Ethiopian Freshman University PDF</h2>
          <p className="text-slate-600 leading-8">
            Starting university is a big step, especially for Ethiopian students beginning their higher education. One of the most helpful tools for freshmen is the Ethiopian Freshman University PDF. This document gives a clear picture of the courses and subjects you will study in your first year. It's not just a list of classes; it's a guide to help you succeed in your studies.
          </p>
          <p className="text-slate-600 leading-8 mt-4">
            The first year of university is all about building a strong foundation. You will take courses that teach you important skills like critical thinking, communication, and problem-solving. These subjects are chosen to prepare you for the challenges and opportunities you will face in your studies and future career. Knowing what to expect can help you plan your studies and stay on track.
          </p>
        </div>

        {/* REAL-TIME LEARNING PLATFORMS */}
        <div className="mb-16 grid md:grid-cols-3 gap-6">
          <a 
            href="https://lms.amu.edu.et" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-black text-slate-900 mb-4">🎓 Addis Ababa University</h3>
            <p className="text-sm text-slate-600">Access AAU learning management system and course materials</p>
          </a>

          <a 
            href="https://ddu.edu.et" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-black text-slate-900 mb-4">🎓 Dire Dawa University</h3>
            <p className="text-sm text-slate-600">Explore DDU courses and real-time learning resources</p>
          </a>

          <a 
            href="https://haramaya.edu.et" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-black text-slate-900 mb-4">🎓 Haramaya University</h3>
            <p className="text-sm text-slate-600">Join Haramaya online classes and learning community</p>
          </a>
        </div>

        {/* SEMESTER TABS */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <div className="flex gap-3">
            {['All Semesters', '1st Semester', '2nd Semester'].map((sem) => (
              <button
                key={sem}
                type="button"
                onClick={() => {
                  setActiveSemester(sem as "All Semesters" | "1st Semester" | "2nd Semester");
                  setActiveFilter("All");
                }}
                className={`${buttonStyles} ${
                  activeSemester === sem
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white text-slate-700"
                }`}
              >
                {sem}
              </button>
            ))}
          </div>

          <div className="border-l border-slate-300 h-8" />

          <div className="flex gap-3">
            {["All", "Required", "Elective"].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter as typeof activeFilter)}
                className={`${buttonStyles} ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-slate-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* SEMESTER STATS */}
        <div className="mb-12 grid md:grid-cols-2 gap-6">
          <div className={`rounded-3xl border-2 p-6 text-center ${
            activeSemester === "1st Semester"
              ? "bg-emerald-50 border-emerald-300"
              : "bg-slate-50 border-slate-200"
          }`}>
            <h3 className="text-lg font-black text-slate-900 mb-2">First Semester</h3>
            <p className="text-sm text-slate-600">
              {semesterStats.semester1.count} courses · {semesterStats.semester1.credits} total credits
            </p>
          </div>
          <div className={`rounded-3xl border-2 p-6 text-center ${
            activeSemester === "2nd Semester"
              ? "bg-emerald-50 border-emerald-300"
              : "bg-slate-50 border-slate-200"
          }`}>
            <h3 className="text-lg font-black text-slate-900 mb-2">Second Semester</h3>
            <p className="text-sm text-slate-600">
              {semesterStats.semester2.count} courses · {semesterStats.semester2.credits} total credits
            </p>
          </div>
        </div>

        {/* COURSES TABLE */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
          {isLoading ? (
            <div className="p-8 space-y-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="h-16 rounded-2xl bg-slate-100 animate-pulse" />
              ))}
            </div>
          ) : (
            <table className="min-w-full border-collapse text-left">
              <thead className="bg-sky-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em]">
                    Course Name
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em]">
                    Category
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em]">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayedCourses.map((course) => (
                  <tr key={course.id} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="px-6 py-5 text-sm font-semibold text-slate-900">
                      {course.title}
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-600">
                      {course.category}
                    </td>
                    <td className="px-6 py-5">
                      {course.pdfUrl ? (
                        <a
                          href={course.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-500/20 hover:bg-emerald-700 transition"
                        >
                          Download
                        </a>
                      ) : (
                        <span className="inline-flex items-center justify-center rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-500">
                          Not available
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {!isLoading && displayedCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg font-semibold">No courses found in this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
