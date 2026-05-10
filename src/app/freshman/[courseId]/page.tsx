"use client";

import Link from "next/link";
import { freshmanCourses } from "@/data/freshmanCourses";
import { useParams } from "next/navigation";

const courseResourceLinks: Record<string, { title: string; url: string }[]> = {
  "ss-002": [
    { title: "AAU Civics Course Materials", url: "https://lms.amu.edu.et" },
    { title: "DDU Political Science Resources", url: "https://ddu.edu.et" },
    { title: "Haramaya Ethics & Governance", url: "https://haramaya.edu.et" },
  ],
  "bio-101": [
    { title: "AAU Biology Laboratory", url: "https://lms.amu.edu.et" },
    { title: "DDU Life Sciences", url: "https://ddu.edu.et" },
    { title: "Haramaya Biological Studies", url: "https://haramaya.edu.et" },
  ],
  "chm-101": [
    { title: "AAU Chemistry Resources", url: "https://lms.amu.edu.et" },
    { title: "DDU Chemistry Lab", url: "https://ddu.edu.et" },
    { title: "Haramaya Chemistry Course", url: "https://haramaya.edu.et" },
  ],
  "phy-101": [
    { title: "AAU Physics Course", url: "https://lms.amu.edu.et" },
    { title: "DDU Physics Laboratory", url: "https://ddu.edu.et" },
    { title: "Haramaya Physics Materials", url: "https://haramaya.edu.et" },
  ],
  "mat-101": [
    { title: "AAU Mathematics Course", url: "https://lms.amu.edu.et" },
    { title: "DDU Calculus Resources", url: "https://ddu.edu.et" },
    { title: "Haramaya Mathematics", url: "https://haramaya.edu.et" },
  ],
  "psy-101": [
    { title: "AAU Psychology Course", url: "https://lms.amu.edu.et" },
    { title: "DDU Behavioral Science", url: "https://ddu.edu.et" },
    { title: "Haramaya Psychology", url: "https://haramaya.edu.et" },
  ],
  "soc-101": [
    { title: "AAU Sociology Course", url: "https://lms.amu.edu.et" },
    { title: "DDU Social Sciences", url: "https://ddu.edu.et" },
    { title: "Haramaya Sociology", url: "https://haramaya.edu.et" },
  ],
  "eng-101": [
    { title: "AAU English Language", url: "https://lms.amu.edu.et" },
    { title: "DDU Academic Writing", url: "https://ddu.edu.et" },
    { title: "Haramaya Communication", url: "https://haramaya.edu.et" },
  ],
};

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const course = freshmanCourses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <section className="min-h-screen py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Course Not Found</h1>
          <p className="text-slate-600 mb-8">The course you're looking for doesn't exist.</p>
          <Link href="/freshman" className="inline-block px-8 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition">
            ← Back to Freshman Courses
          </Link>
        </div>
      </section>
    );
  }

  const resources = courseResourceLinks[course.id] || [
    { title: "AAU Learning Portal", url: "https://lms.amu.edu.et" },
    { title: "DDU Courses", url: "https://ddu.edu.et" },
    { title: "Haramaya University", url: "https://haramaya.edu.et" },
  ];

  return (
    <section className="min-h-screen py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-4xl">
        {/* HEADER WITH BACK BUTTON */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition mb-8">
            ← Back to Home
          </Link>
          
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-emerald-600 font-black block mb-3">
                  {course.universityReference}
                </span>
                <h1 className="text-4xl font-black text-slate-900 mb-4">{course.title}</h1>
                <p className="text-slate-600 text-lg leading-8">{course.description}</p>
              </div>
              <span className={`text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap ${
                course.isRequired
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-amber-100 text-amber-700"
              }`}>
                {course.isRequired ? "Required" : "Elective"}
              </span>
            </div>

            {/* COURSE DETAILS */}
            <div className="grid md:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">Category</p>
                <p className="text-lg font-black text-slate-900">{course.category}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">Duration</p>
                <p className="text-lg font-black text-slate-900">{course.duration}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">Credits</p>
                <p className="text-lg font-black text-slate-900">{course.credits}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">Semester</p>
                <p className="text-lg font-black text-slate-900">{course.semester}</p>
              </div>
            </div>
          </div>
        </div>

        {/* LEARNING RESOURCES */}
        <div className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-8">📚 Real-Time Learning Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-600 transition mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-slate-600">Access university course materials, textbooks, and learning modules</p>
                  </div>
                  <span className="text-2xl group-hover:scale-110 transition transform">🔗</span>
                </div>
                <p className="text-xs text-emerald-600 font-semibold mt-4">Click to open →</p>
              </a>
            ))}
          </div>
        </div>

        {/* ADDITIONAL INFO */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
          <h3 className="text-xl font-black text-slate-900 mb-4">📖 How to Access Course Materials</h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex gap-3">
              <span className="text-emerald-600 font-black">1.</span>
              <span>Click any university link above to access their learning management system</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-black">2.</span>
              <span>Log in with your university credentials or explore public course materials</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-black">3.</span>
              <span>Search for "{course.universityReference}" or "{course.title}" in the course catalog</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-black">4.</span>
              <span>Access textbooks, lecture notes, assignments, and real-time course lectures</span>
            </li>
          </ul>
        </div>

        {/* BACK BUTTON */}
        <div className="mt-12 text-center">
          <Link href="/freshman" className="inline-block px-8 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition">
            ← Back to Freshman Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
