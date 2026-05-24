"use client";

import { useState } from "react";

export default function OroTechDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState("DASHBOARD");
  const [activeLesson, setActiveLesson] = useState("HTML Home");

  const megaMenuData = [
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

  const htmlSidebarLinks = [
    "HTML Home",
    "HTML Introduction",
    "HTML Editors",
    "HTML Basic",
    "HTML Elements",
    "HTML Attributes",
    "HTML Headings",
    "HTML Paragraphs",
    "HTML Styles",
    "HTML Formatting",
    "HTML Quotations",
    "HTML Comments",
    "HTML Colors",
    "HTML CSS",
    "HTML Links",
    "HTML Images",
    "HTML Tables",
    "HTML Lists",
    "HTML Blocks",
    "HTML Classes",
  ];

  const htmlContent: {
    [key: string]: {
      title: string;
      desc: string;
      code: string;
      tips?: string[];
    };
  } = {
    "HTML Home": {
      title: "Learn Modern HTML Development",
      desc:
        "HTML is the foundation of every modern website on the internet. It gives structure to web pages, organizes content, and helps browsers understand how information should appear on the screen.\n\n" +
        "This tutorial teaches you HTML step by step with real-world examples.It is the markup language used for creating web pages.  A markup language is a set of markup tags, and HTML uses markup tags to describe web pages.  HTML elements form the building blocks of all websites.   HTML allows images and objects to be embedded and can be used to create interactive forms.  It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items.  It can embed scripts in languages such as JavaScript which affect the behavior of HTML webpage.  HTML can also be used to include Cascading Style Sheets CSS) to define the appearance and layout of text. ",
        
      code:
        "<!DOCTYPE html>\n<html>\n<head>\n<title>OroTech</title>\n</head>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>",
      tips: [
        "HTML builds structure",
        "HTML5 powers modern apps",
        "Learn HTML before React",
      ],
    },

    "HTML Introduction": {
      title: "Introduction to HTML",
      desc:
        "HTML stands for HyperText Markup Language. It structures webpages using tags.",
      code:
        "<h1>Hello World</h1>\n<p>This is HTML.</p>",
      tips: [
        "HTML uses tags",
        "Browsers render HTML visually",
        "HTML is beginner friendly",
      ],
    },

    "HTML Editors": {
      title: "HTML Editors",
      desc:
        "VS Code is the most popular editor for modern web development.",
      code:
        "<h1>My First Website</h1>",
    },

    "HTML Basic": {
      title: "Basic HTML Structure",
      desc:
        "Every HTML document starts with a standard structure.",
      code:
        "<!DOCTYPE html>\n<html>\n<head></head>\n<body></body>\n</html>",
    },

    "HTML Elements": {
      title: "HTML Elements",
      desc:
        "Elements are the building blocks of webpages.",
      code:
        "<h1>Heading</h1>\n<p>Paragraph</p>",
    },

    "HTML Attributes": {
      title: "HTML Attributes",
      desc:
        "Attributes provide additional information about HTML elements.",
      code:
        "<a href='https://example.com'>Visit</a>",
    },

    "HTML Headings": {
      title: "HTML Headings",
      desc:
        "Headings structure webpage content.",
      code:
        "<h1>Main</h1>\n<h2>Sub</h2>",
    },

    "HTML Paragraphs": {
      title: "HTML Paragraphs",
      desc:
        "Paragraphs organize text content.",
      code:
        "<p>This is paragraph.</p>",
    },

    "HTML Styles": {
      title: "HTML Styles",
      desc:
        "Styles define visual appearance.",
      code:
        "<p style='color:red'>Red Text</p>",
    },

    "HTML Formatting": {
      title: "HTML Formatting",
      desc:
        "Formatting gives text emphasis.",
      code:
        "<strong>Important</strong>",
    },

    "HTML Quotations": {
      title: "HTML Quotations",
      desc:
        "Quotation tags define quoted text.",
      code:
        "<blockquote>Quote</blockquote>",
    },

    "HTML Comments": {
      title: "HTML Comments",
      desc:
        "Comments help developers understand code.",
      code:
        "<!-- Comment -->",
    },

    "HTML Colors": {
      title: "HTML Colors",
      desc:
        "Colors improve design.",
      code:
        "<h1 style='color:blue'>Blue</h1>",
    },

    "HTML CSS": {
      title: "HTML with CSS",
      desc:
        "CSS styles HTML professionally.",
      code:
        "body {\n background:black;\n color:white;\n}",
    },

    "HTML Links": {
      title: "HTML Links",
      desc:
        "Links connect webpages together.",
      code:
        "<a href='https://google.com'>Google</a>",
    },

    "HTML Images": {
      title: "HTML Images",
      desc:
        "Images improve websites visually.",
      code:
        "<img src='photo.jpg' alt='image'>",
    },

    "HTML Tables": {
      title: "HTML Tables",
      desc:
        "Tables organize structured data.",
      code:
        "<table>\n<tr><td>Name</td></tr>\n</table>",
    },

    "HTML Lists": {
      title: "HTML Lists",
      desc:
        "Lists organize related items.",
      code:
        "<ul>\n<li>HTML</li>\n</ul>",
    },

    "HTML Blocks": {
      title: "Block and Inline Elements",
      desc:
        "Block elements take full width.",
      code:
        "<div>Block</div>\n<span>Inline</span>",
    },

    "HTML Classes": {
      title: "HTML Classes",
      desc:
        "Classes share styles between elements.",
      code:
        "<div class='card'>Card</div>",
    },
  };

  const currentLesson =
    htmlContent[activeLesson] || htmlContent["HTML Home"];

  const handleNext = () => {
    const currentIndex = htmlSidebarLinks.indexOf(activeLesson);

    if (currentIndex < htmlSidebarLinks.length - 1) {
      setActiveLesson(htmlSidebarLinks[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = htmlSidebarLinks.indexOf(activeLesson);

    if (currentIndex > 0) {
      setActiveLesson(htmlSidebarLinks[currentIndex - 1]);
    }
  };

  return (
    <div
      className={`min-h-screen overflow-hidden transition-all duration-500 ${
        view === "DASHBOARD"
          ? "bg-[#040404] text-white"
          : "bg-[#f7f7f7] text-zinc-900"
      }`}
    >
      {/* HEADER */}
      <header
        className={`sticky top-0 z-[100] backdrop-blur-2xl border-b transition-all duration-500 ${
          view === "DASHBOARD"
            ? "bg-black/70 border-zinc-900"
            : "bg-white/80 border-zinc-200"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">
          <div className="flex items-center gap-5">
            {view === "DASHBOARD" ? (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`relative overflow-hidden px-8 py-3 rounded-2xl border font-black uppercase tracking-[0.25em] text-[10px] transition-all duration-500 ${
                  isMenuOpen
                    ? "bg-zinc-900 border-zinc-700 text-zinc-400"
                    : "bg-green-500 text-black border-green-400 shadow-[0_0_40px_rgba(34,197,94,0.4)]"
                }`}
              >
                <span className="relative z-10">
                  {isMenuOpen ? "Close Menu" : "Browse Courses"}
                </span>
              </button>
            ) : (
              <button
                onClick={() => setView("DASHBOARD")}
                className="text-sm font-bold text-zinc-500 hover:text-black transition-all"
              >
                ❮ Back to Library
              </button>
            )}

            <div
              onClick={() => setView("DASHBOARD")}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-2xl bg-green-500 flex items-center justify-center text-black font-black shadow-lg shadow-green-500/30">
                OH
              </div>

              <div>
                <h1
                  className={`text-2xl font-black tracking-tight italic ${
                    view === "DASHBOARD"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  OROTECH
                  <span className="text-green-500 ml-1 font-light">
                    HUB
                  </span>
                </h1>

                <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 font-bold">
                  Modern Learning Platform
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="px-5 py-2 rounded-full bg-zinc-900/40 border border-zinc-800 text-xs uppercase tracking-[0.25em] text-zinc-400">
              24 Courses
            </div>

            <div className="px-5 py-2 rounded-full bg-green-500 text-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-green-500/20">
              Live Platform
            </div>
          </div>
        </div>
      </header>

      {/* MEGA MENU */}
{view === "DASHBOARD" && (
  <div
    className={`fixed top-24 left-0 w-full transition-all duration-700 z-50 ${
      isMenuOpen
        ? "opacity-100 visible"
        : "opacity-0 invisible"
    }`}
  >
    {/* PART 3 PREMIUM MENU */}
    <div className="bg-black/95 backdrop-blur-3xl border-b border-zinc-900 max-h-[85vh] overflow-y-auto">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-8 py-20">
        
        {/* HEADER */}
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          
          <div>
            <p className="text-green-500 uppercase tracking-[0.45em] text-xs font-black mb-5">
              PROFESSIONAL CURRICULUM
            </p>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black italic tracking-tighter text-white leading-none">
              Learning
              <br />
              Library
            </h1>

            <p className="mt-8 text-zinc-500 text-lg leading-relaxed max-w-2xl">
              Master modern software engineering with interactive
              tutorials, real-world projects, and startup-level
              learning experiences.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4 min-w-[320px]">
            
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-4xl font-black text-white">
                24+
              </h3>

              <p className="text-zinc-500 mt-2 uppercase tracking-[0.2em] text-xs font-bold">
                Courses
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-4xl font-black text-green-500">
                Live
              </h3>

              <p className="text-zinc-500 mt-2 uppercase tracking-[0.2em] text-xs font-bold">
                Platform
              </p>
            </div>
          </div>
        </div>

        {/* COURSE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pb-20">
          {megaMenuData.map((course, index) => (
            <div
              key={index}
              onClick={() => {
                if (course.name === "HTML") {
                  setView("HTML_TUTORIAL");
                  setIsMenuOpen(false);
                }
              }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-zinc-900 bg-gradient-to-br from-zinc-900/90 via-black to-black p-8 hover:border-green-500/40 hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(34,197,94,0.15)] transition-all duration-500 cursor-pointer"
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* NUMBER */}
              <div className="absolute top-6 right-6 text-zinc-800 text-5xl font-black italic group-hover:text-zinc-700 transition-all">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
                
                <div>
                  <span className="inline-block px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] uppercase tracking-[0.3em] font-black text-zinc-500 group-hover:text-green-400 transition-all">
                    {course.slug}
                  </span>

                  <h2 className="mt-8 text-3xl font-black tracking-tight text-white leading-tight">
                    {course.name}
                  </h2>

                  <p className="mt-4 text-zinc-500 leading-relaxed text-sm">
                    Learn professional {course.name.toLowerCase()} 
                    development with interactive tutorials and projects.
                  </p>
                </div>

                {/* FOOTER */}
                <div className="mt-10 flex items-center justify-between">
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

                    <span className="text-sm text-zinc-400 font-medium">
                      Start Course
                    </span>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:bg-green-500 group-hover:border-green-500 text-white group-hover:text-black flex items-center justify-center text-xl font-black transition-all duration-500">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER SECTION */}
        <div className="border-t border-zinc-900 pt-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          
          <div>
            <h3 className="text-3xl font-black text-white tracking-tight">
              Build Real Skills
            </h3>

            <p className="mt-3 text-zinc-500 max-w-2xl leading-relaxed">
              OroTech Hub helps students learn modern technologies
              with practical examples, interactive learning,
              and professional developer workflows.
            </p>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3">
            {[
              "Frontend",
              "Backend",
              "Cloud",
              "Database",
              "DevOps",
              "AI",
              "Fullstack",
            ].map((tag) => (
              <span
                key={tag}
                className="px-5 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm hover:border-green-500/40 hover:text-green-400 transition-all cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)}

      {/* MAIN */}
      <main>
        {view === "DASHBOARD" ? (
          <section
            className={`relative flex items-center justify-center min-h-[85vh] transition-all duration-700 ${
              isMenuOpen ? "opacity-10 scale-95" : "opacity-100"
            }`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full"></div>

              <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative z-10 text-center px-6">
              <p className="text-green-500 uppercase tracking-[0.5em] text-xs font-black mb-6">
                OroTech Hub Platform
              </p>

              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black italic tracking-tighter leading-none">
                Build
                <br />
                The Future
              </h1>

              <p className="mt-8 text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
                Learn frontend, backend, cloud, databases, and modern
                software engineering with interactive professional
                tutorials.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="px-8 py-4 rounded-2xl bg-green-500 text-black font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl shadow-green-500/30"
                >
                  Explore Courses
                </button>

                <button className="px-8 py-4 rounded-2xl border border-zinc-800 text-white font-bold hover:bg-zinc-900 transition-all">
                  Start Learning
                </button>
              </div>
            </div>
          </section>
        ) : (
          <div className="flex">
            {/* SIDEBAR */}
            <aside className="w-72 bg-white border-r border-zinc-200 h-[calc(100vh-6rem)] sticky top-24 overflow-y-auto">
              <div className="p-6">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-white mb-8">
                  <p className="uppercase text-[10px] tracking-[0.3em] font-black mb-2">
                    Course
                  </p>

                  <h2 className="text-3xl font-black tracking-tight">
                    HTML
                  </h2>

                  <p className="mt-2 text-sm text-white/80">
                    Beginner to Advanced
                  </p>
                </div>

                <div className="space-y-2">
                  {htmlSidebarLinks.map((link) => (
                    <button
                      key={link}
                      onClick={() => setActiveLesson(link)}
                      className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 text-sm ${
                        activeLesson === link
                          ? "bg-green-500 text-white shadow-lg shadow-green-500/20 font-bold"
                          : "text-zinc-700 hover:bg-zinc-100"
                      }`}
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* CONTENT */}
            <div className="flex-1 bg-[#f5f7fa] p-6 lg:p-12">
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-[2rem] shadow-xl border border-zinc-200 overflow-hidden">
                  {/* TOP */}
                  <div className="p-10 border-b border-zinc-200 bg-gradient-to-r from-white to-zinc-50">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="px-4 py-2 rounded-full bg-green-500 text-white text-xs font-black uppercase tracking-[0.2em]">
                        HTML COURSE
                      </span>

                      <span className="text-zinc-500 font-medium">
                        Interactive Lesson
                      </span>
                    </div>

                    <h1 className="text-5xl font-black tracking-tight text-zinc-900 leading-tight">
                      {currentLesson.title}
                    </h1>
                  </div>

                  {/* NAVIGATION */}
                  <div className="flex items-center justify-between px-10 py-6 border-b border-zinc-200 bg-zinc-50">
                    <button
                      onClick={handlePrev}
                      className={`px-6 py-3 rounded-2xl font-bold transition-all ${
                        activeLesson === htmlSidebarLinks[0]
                          ? "opacity-40 cursor-not-allowed bg-zinc-200"
                          : "bg-white hover:bg-zinc-100 border border-zinc-200"
                      }`}
                    >
                      ❮ Previous
                    </button>

                    <button
                      onClick={handleNext}
                      className={`px-8 py-3 rounded-2xl font-bold text-white transition-all ${
                        activeLesson ===
                        htmlSidebarLinks[
                          htmlSidebarLinks.length - 1
                        ]
                          ? "opacity-40 cursor-not-allowed bg-green-500"
                          : "bg-green-500 hover:scale-105 shadow-lg shadow-green-500/20"
                      }`}
                    >
                      Next Lesson ❯
                    </button>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="p-10">
                    <div className="bg-gradient-to-br from-[#D9EEE1] to-[#edf7f0] rounded-[2rem] p-10 border border-green-200">
                      <p className="text-lg text-zinc-700 leading-loose whitespace-pre-line">
                        {currentLesson.desc}
                      </p>

                      {currentLesson.tips && (
                        <div className="mt-10">
                          <h3 className="text-2xl font-black mb-6 text-zinc-900">
                            Key Points
                          </h3>

                          <div className="grid md:grid-cols-2 gap-4">
                            {currentLesson.tips.map(
                              (tip, index) => (
                                <div
                                  key={index}
                                  className="bg-white rounded-2xl p-5 border border-green-100 flex gap-4 items-start"
                                >
                                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black">
                                    ✓
                                  </div>

                                  <p className="text-zinc-700 font-medium">
                                    {tip}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CODE */}
                    <div className="mt-10 bg-[#111] rounded-[2rem] overflow-hidden shadow-2xl">
                      <div className="flex items-center justify-between px-8 py-5 border-b border-zinc-800">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>

                        <span className="text-xs text-zinc-500 uppercase tracking-[0.3em] font-bold">
                          HTML5 Playground
                        </span>
                      </div>

                      <div className="p-8 overflow-auto">
                        <pre className="text-sm leading-loose text-green-400 whitespace-pre-wrap font-mono">
                          {currentLesson.code}
                        </pre>
                      </div>

                      <div className="px-8 pb-8 flex flex-wrap gap-4">
                        <button className="px-6 py-3 rounded-2xl bg-green-500 text-black font-black hover:scale-105 transition-all">
                          Try it Yourself »
                        </button>

                        <button className="px-6 py-3 rounded-2xl bg-zinc-800 text-white font-bold hover:bg-zinc-700 transition-all">
                          Copy Code
                        </button>
                      </div>
                    </div>

                    {/* FOOTER */}
                    <div className="mt-10 bg-gradient-to-br from-zinc-950 to-zinc-900 rounded-[2rem] p-10 text-white overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/10 blur-[100px] rounded-full"></div>

                      <div className="relative z-10">
                        <p className="uppercase text-[10px] tracking-[0.4em] text-green-400 font-black mb-4">
                          Keep Building
                        </p>

                        <h2 className="text-4xl font-black tracking-tight mb-6">
                          Continue Learning
                        </h2>

                        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                          Practice consistently, build projects, and
                          master professional frontend development with
                          OroTech Hub.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-8">
                          {[
                            "HTML5",
                            "CSS3",
                            "JavaScript",
                            "React",
                            "Next.js",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-5 py-3 rounded-full bg-zinc-800 border border-zinc-700 text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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