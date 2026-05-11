"use client";

import React, { useState, useMemo } from "react";

const oromiaCourses = [
  { title: "English", pdfUrl: "/downloads/grade8-oromia-english.pdf" },
  { title: "Afaan Oromoo", pdfUrl: "/downloads/grade8-oromia-afaan-oromoo.pdf" },
  { title: "Saayinsii Waliigalaa", pdfUrl: "/downloads/grade8-oromia-general-science.pdf" },
  { title: "Gadaa", pdfUrl: "/downloads/grade8-oromia-gadaa.pdf" },
  { title: "Herrega", pdfUrl: "/downloads/grade8-oromia-mathematics.pdf" },
  { title: "Hawaasa", pdfUrl: "/downloads/grade8-oromia-social-studies.pdf" },
];

const otherRegionCourses = [
  { title: "English", pdfUrl: "/downloads/grade8-other-english.pdf" },
  { title: "Language", pdfUrl: "/downloads/grade8-other-language.pdf" },
  { title: "General Science", pdfUrl: "/downloads/grade8-other-general-science.pdf" },
  { title: "Gadaa Studies", pdfUrl: "/downloads/grade8-other-gadaa-studies.pdf" },
  { title: "Mathematics", pdfUrl: "/downloads/grade8-other-mathematics.pdf" },
  { title: "Social Studies", pdfUrl: "/downloads/grade8-other-social-studies.pdf" },
];

type RegionCourse = {
  title: string;
  pdfUrl: string;
};

export default function Grade8ExamPrep() {
  const [activeRegion, setActiveRegion] = useState("oromia");

  const stats = useMemo(() => {
    if (activeRegion === "oromia") {
      return { courseCount: oromiaCourses.length };
    } else {
      return { courseCount: otherRegionCourses.length };
    }
  }, [activeRegion]);

  const displayedCourses = activeRegion === "oromia" ? oromiaCourses : otherRegionCourses;

  const buttonStyles =
    "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border border-slate-200 hover:border-emerald-500";

  return (
    <section className="min-h-screen py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-600 font-black mb-4">
            📚 Grade 8 Exam Preparation
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Grade 8 National Exam Prep
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto leading-8 mb-8">
            Past exams, model questions, and smart revision materials for Grade 8 national exams across Oromia and other regions.
          </p>
        </div>

        {/* REGION TABS */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setActiveRegion("oromia")}
            className={`${buttonStyles} ${
              activeRegion === "oromia"
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-slate-700"
            }`}
          >
            Oromia Region
          </button>
          <button
            onClick={() => setActiveRegion("other")}
            className={`${buttonStyles} ${
              activeRegion === "other"
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-slate-700"
            }`}
          >
            Other Regions
          </button>
        </div>

        {/* STATS CARD */}
        <div className="mb-12 rounded-3xl border-2 p-6 text-center bg-slate-50 border-slate-200">
          <h3 className="text-lg font-black text-slate-900 mb-2">
            {activeRegion === "oromia" ? "Oromia Region" : "Other Regions"}
          </h3>
          <p className="text-sm text-slate-600">
            {stats.courseCount} courses
          </p>
        </div>

        {/* COURSES TABLE */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full border-collapse text-left">
            <thead className="bg-sky-600 text-white">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em]">
                  Course Name
                </th>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em]">
                  Download
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedCourses.map((course: RegionCourse) => (
                <tr key={course.title} className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-5 text-sm font-semibold text-slate-900">
                    {course.title}
                  </td>
                  <td className="px-6 py-5">
                    <a
                      href={course.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-500/20 hover:bg-emerald-700 transition"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
