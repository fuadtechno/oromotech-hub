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
  const [activeRegion, setActiveRegion] = useState<"oromia" | "other">(
    "oromia"
  );

  const stats = useMemo(() => {
    return {
      courseCount:
        activeRegion === "oromia"
          ? oromiaCourses.length
          : otherRegionCourses.length,
    };
  }, [activeRegion]);

  const displayedCourses =
    activeRegion === "oromia" ? oromiaCourses : otherRegionCourses;

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
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            Grade 8 National Exam Prep
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Past exams, model questions, and revision materials for Grade 8 students.
          </p>
        </div>

        {/* REGION BUTTONS */}
        <div className="mb-12 flex justify-center gap-4 flex-wrap">
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

        {/* STATS */}
        <div className="mb-10 rounded-3xl border p-6 text-center bg-white shadow-sm">
          <h3 className="text-lg font-bold mb-2">
            {activeRegion === "oromia"
              ? "Oromia Region"
              : "Other Regions"}
          </h3>
          <p className="text-slate-600">
            {stats.courseCount} Courses Available
          </p>
        </div>

        {/* ✅ UPGRADED COURSES TABLE */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-md">
          <table className="min-w-full border-collapse text-left">

            {/* HEADER */}
            <thead className="bg-gradient-to-r from-sky-600 to-emerald-600 text-white">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-widest">
                  Course Name
                </th>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-widest">
                  File Link
                </th>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-widest">
                  Action
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {displayedCourses.map((course: RegionCourse, index: number) => (
                <tr
                  key={course.title + index}
                  className="border-b border-slate-100 hover:bg-slate-50 transition"
                >
                  {/* COURSE NAME */}
                  <td className="px-6 py-5 font-semibold text-slate-900">
                    {course.title}
                  </td>

                  {/* LINK */}
                  <td className="px-6 py-5">
                    <a
                      href={course.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 hover:underline font-medium"
                    >
                      {course.pdfUrl}
                    </a>
                  </td>

                  {/* DOWNLOAD */}
                  <td className="px-6 py-5">
                    <a
                      href={course.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 active:scale-95 transition"
                    >
                      ⬇ Download PDF
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