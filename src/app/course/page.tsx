"use client";

import Link from "next/link";

export default function CoursePage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Course</h1>

      <Link href="/course/react" className="block p-4 border rounded-xl">
        React Course
      </Link>

      <Link href="/course/nextjs" className="block p-4 border rounded-xl mt-3">
        Next.js Course
      </Link>
    </div>
  );
}