"use client";

import { useState } from "react";
import Link from "next/link";

// Fakkeenya data koorsii (Kun gara fuulduraa Database irraa dhufa)
const courseData = {
  title: "HTML Basics Course",
  description: "HTML bu'uura irraa hanga sadarkaa olaanaatti baradhu. Weebsaayitii qabatamaa qopheessi.",
  lessons: [
    { id: 1, title: "Seensa HTML", duration: "10:00", videoId: "dQw4w9WgXcQ" },
    { id: 2, title: "Caasaa HTML (Structure)", duration: "12:30", videoId: "video2" },
    { id: 3, title: "Headings & Paragraphs", duration: "08:45", videoId: "video3" },
    { id: 4, title: "Links & Navigation", duration: "15:00", videoId: "video4" },
    { id: 5, title: "Images & Media", duration: "11:20", videoId: "video5" },
  ]
};

export default function CourseDetailPage() {
  const [activeLesson, setActiveLesson] = useState(courseData.lessons[0]);
  const [activeTab, setActiveTab] = useState("content"); // 'content' ykn 'about'

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <Link href="/courses" className="text-gray-400 hover:text-green-600 transition">←</Link>
          <h1 className="text-lg font-bold text-green-600">OromoTech Hub</h1>
        </div>
        <div className="flex items-center space-x-4">
           <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">Progress: 20%</span>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-8 grid md:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Video Player & Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeLesson.videoId}`}
              title={activeLesson.title}
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h1 className="text-2xl font-bold text-gray-800">{activeLesson.title}</h1>
            <div className="flex space-x-4 mt-4 border-b border-gray-100 pb-2">
              <button 
                onClick={() => setActiveTab("content")}
                className={`pb-2 px-2 font-bold text-sm transition ${activeTab === "content" ? "border-b-2 border-green-600 text-green-600" : "text-gray-400"}`}
              >
                Qabiyyee Barumsaa
              </button>
              <button 
                onClick={() => setActiveTab("about")}
                className={`pb-2 px-2 font-bold text-sm transition ${activeTab === "about" ? "border-b-2 border-green-600 text-green-600" : "text-gray-400"}`}
              >
                Waa'ee Koorsii
              </button>
            </div>

            <div className="mt-6 text-gray-600 leading-relaxed text-sm">
              {activeTab === "content" ? (
                <p>Barumsa kana keessatti waa'ee <strong>{activeLesson.title}</strong> bal'inaan ni baratta. Gochaan (practice) shaakaluu hin dagatin!</p>
              ) : (
                <p>{courseData.description}</p>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Lesson List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[600px]">
          <div className="p-5 border-b border-gray-50 bg-gray-50/50">
            <h2 className="font-bold text-gray-800 flex items-center justify-between">
              <span>📚 Tarree Barumsaa</span>
              <span className="text-xs text-gray-400 font-normal">{courseData.lessons.length} Lessons</span>
            </h2>
          </div>
          
          <div className="overflow-y-auto flex-grow p-4 space-y-3 custom-scrollbar">
            {courseData.lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setActiveLesson(lesson)}
                className={`w-full text-left p-4 rounded-xl transition flex items-start space-x-3 border ${
                  activeLesson.id === lesson.id 
                  ? "bg-green-50 border-green-200 ring-1 ring-green-200" 
                  : "bg-white border-transparent hover:bg-gray-50 hover:border-gray-200"
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${
                  activeLesson.id === lesson.id ? "bg-green-600 text-white" : "bg-gray-100 text-gray-500"
                }`}>
                  {lesson.id}
                </span>
                <div className="flex-grow">
                  <h4 className={`text-sm font-bold ${activeLesson.id === lesson.id ? "text-green-700" : "text-gray-700"}`}>
                    {lesson.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">🕒 {lesson.duration}</p>
                </div>
                {activeLesson.id === lesson.id && <span className="text-green-600">▶</span>}
              </button>
            ))}
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-100">
            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-green-100 hover:bg-green-700 transition active:scale-95">
              Certficate Argadhu
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}