"use client";

import { useState } from "react";

export default function OroTechDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState("DASHBOARD");
  const [activeLesson, setActiveLesson] = useState("HTML Home");

  const megaMenuData = [
    { name: "HTML", cat: "WEB BASICS" },
    { name: "CSS", cat: "WEB BASICS" },
    { name: "RWD", cat: "WEB BASICS" },
    { name: "BOOTSTRAP", cat: "WEB BASICS" },
    { name: "W3.CSS", cat: "WEB BASICS" },
    { name: "JAVASCRIPT", cat: "FRONTEND" },
    { name: "REACT", cat: "FRONTEND" },
    { name: "JQUERY", cat: "FRONTEND" },
    { name: "VUE", cat: "FRONTEND" },
    { name: "ANGULAR", cat: "FRONTEND" },
    { name: "NODE.JS", cat: "BACKEND" },
    { name: "EXPRESS.JS", cat: "BACKEND" },
    { name: "PYTHON", cat: "BACKEND" },
    { name: "DJANGO", cat: "BACKEND" },
    { name: "PHP", cat: "BACKEND" },
    { name: "SQL", cat: "DATABASE" },
    { name: "MONGODB", cat: "DATABASE" },
    { name: "POSTGRESQL", cat: "DATABASE" },
    { name: "FIREBASE", cat: "DATABASE" },
    { name: "AWS", cat: "CLOUD" },
    { name: "DOCKER", cat: "DEVOPS" },
    { name: "GIT & GITHUB", cat: "TOOLS" },
    { name: "TYPESCRIPT", cat: "FRONTEND" },
    { name: "C++", cat: "PROGRAMMING" },
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
        "HTML is the foundation of every modern website on the internet. It gives structure to web pages, organizes content, and helps browsers understand how information should appear on the screen. Every professional website, dashboard, landing page, portfolio, or SaaS application begins with HTML.\n\n" +
        "With HTML5, developers can build responsive, fast, and accessible web experiences. HTML works together with CSS for styling and JavaScript for interactivity. When these three technologies are combined, they create powerful modern applications.\n\n" +
        "This tutorial teaches you the core concepts of HTML step by step using beginner-friendly explanations and real-world examples. You will learn how headings, paragraphs, images, links, tables, forms, semantic tags, and layouts work in professional web development.\n\n" +
        "Mastering HTML helps you become confident in frontend development and prepares you for frameworks like React, Next.js, and Vue.",
      code:
        "<!DOCTYPE html>\n" +
        "<html lang='en'>\n" +
        "<head>\n" +
        "  <meta charset='UTF-8'>\n" +
        "  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n" +
        "  <title>OroTech HTML Course</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "  <header>\n" +
        "    <h1>Welcome to OroTech Hub</h1>\n" +
        "  </header>\n\n" +
        "  <main>\n" +
        "    <section>\n" +
        "      <h2>Start Learning HTML</h2>\n" +
        "      <p>Build modern websites from scratch.</p>\n" +
        "    </section>\n" +
        "  </main>\n" +
        "</body>\n" +
        "</html>",
      tips: [
        "HTML gives structure to websites",
        "HTML5 supports modern web apps",
        "HTML works with CSS and JavaScript",
      ],
    },

    "HTML Introduction": {
      title: "Introduction to HTML",
      desc:
        "HTML stands for HyperText Markup Language. It is the standard language used to create web pages and web applications. HTML describes the structure of a webpage using elements called tags.\n\n" +
        "Browsers read HTML code and render it visually for users. Tags like <h1>, <p>, <img>, and <a> define headings, text, images, and links.\n\n" +
        "HTML is not a programming language. Instead, it is a markup language designed to organize and display content properly.",
      code:
        "<!DOCTYPE html>\n" +
        "<html>\n" +
        "<body>\n" +
        "  <h1>Hello World</h1>\n" +
        "  <p>This is my first HTML page.</p>\n" +
        "</body>\n" +
        "</html>",
      tips: [
        "HTML uses tags",
        "Browsers interpret HTML visually",
        "HTML is easy for beginners",
      ],
    },

    "HTML Editors": {
      title: "HTML Editors",
      desc:
        "HTML code can be written using many editors. Beginners often start with Notepad, while professional developers use editors like VS Code, Sublime Text, or WebStorm.\n\n" +
        "Modern editors provide syntax highlighting, auto-completion, extensions, and debugging tools that improve developer productivity.",
      code:
        "<h1>My First Page</h1>\n" +
        "<p>Created using a code editor.</p>",
      tips: [
        "VS Code is the most popular editor",
        "Extensions improve workflow",
        "Save files with .html extension",
      ],
    },

    "HTML Basic": {
      title: "Basic HTML Structure",
      desc:
        "Every HTML document follows a standard structure. The document starts with <!DOCTYPE html>, followed by html, head, and body tags.\n\n" +
        "The head contains metadata like title and styles, while the body contains visible content displayed on the webpage.",
      code:
        "<!DOCTYPE html>\n" +
        "<html>\n" +
        "<head>\n" +
        "  <title>My Page</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "  <h1>Welcome</h1>\n" +
        "  <p>Basic HTML example.</p>\n" +
        "</body>\n" +
        "</html>",
      tips: [
        "DOCTYPE tells browser HTML5 is used",
        "Head stores metadata",
        "Body contains visible content",
      ],
    },

    "HTML Elements": {
      title: "HTML Elements",
      desc:
        "HTML elements are the building blocks of web pages. Most elements include a start tag, content, and an end tag.\n\n" +
        "Elements can contain text, images, videos, buttons, and even other elements.",
      code:
        "<h1>Main Heading</h1>\n" +
        "<p>This is a paragraph.</p>\n" +
        "<br>",
      tips: [
        "Elements define webpage content",
        "Some elements are self-closing",
        "Nested elements create layouts",
      ],
    },

    "HTML Attributes": {
      title: "HTML Attributes",
      desc:
        "Attributes provide additional information about HTML elements. They are written inside opening tags and usually contain name/value pairs.\n\n" +
        "Common attributes include href, src, alt, width, height, and class.",
      code:
        "<a href='https://example.com'>Visit Site</a>\n" +
        "<img src='photo.jpg' alt='Profile Image'>",
      tips: [
        "Attributes customize elements",
        "Always use quotes for values",
        "Alt improves accessibility",
      ],
    },

    "HTML Headings": {
      title: "HTML Headings",
      desc:
        "HTML headings define titles and subtitles on webpages. There are six levels from h1 to h6.\n\n" +
        "Search engines use headings to understand content structure and SEO.",
      code:
        "<h1>Main Heading</h1>\n" +
        "<h2>Sub Heading</h2>\n" +
        "<h3>Section Heading</h3>",
      tips: [
        "Use one h1 per page",
        "Headings improve SEO",
        "Structure content logically",
      ],
    },

    "HTML Paragraphs": {
      title: "HTML Paragraphs",
      desc:
        "Paragraphs organize written content into readable blocks. Browsers automatically add spacing between paragraphs.\n\n" +
        "The paragraph element uses the <p> tag.",
      code:
        "<p>This is paragraph one.</p>\n" +
        "<p>This is paragraph two.</p>",
    },

    "HTML Styles": {
      title: "HTML Styles",
      desc:
        "Styles define how HTML elements appear visually. Inline styles can change colors, fonts, spacing, and alignment directly inside tags.",
      code:
        "<p style='color:red;'>Red text</p>\n" +
        "<h1 style='font-size:40px;'>Large Heading</h1>",
    },

    "HTML Formatting": {
      title: "HTML Formatting",
      desc:
        "Formatting elements give special meaning and appearance to text. You can create bold, italic, marked, and emphasized text.",
      code:
        "<b>Bold</b>\n" +
        "<i>Italic</i>\n" +
        "<strong>Important</strong>\n" +
        "<mark>Highlighted</mark>",
    },

    "HTML Quotations": {
      title: "HTML Quotations",
      desc:
        "Quotation elements are used for quotes, citations, abbreviations, and references from external sources.",
      code:
        "<blockquote>This is a quote.</blockquote>\n" +
        "<q>Inline quote</q>",
    },

    "HTML Comments": {
      title: "HTML Comments",
      desc:
        "Comments help developers understand code without displaying anything in the browser.",
      code:
        "<!-- This is a comment -->\n" +
        "<p>Visible text</p>",
    },

    "HTML Colors": {
      title: "HTML Colors",
      desc:
        "Colors improve design and visual communication. HTML supports named colors, HEX values, RGB, and HSL.",
      code:
        "<h1 style='color:blue;'>Blue Heading</h1>\n" +
        "<p style='background:black;color:white;'>Dark Box</p>",
    },

    "HTML CSS": {
      title: "HTML with CSS",
      desc:
        "CSS is used to style HTML pages professionally. CSS controls layouts, spacing, colors, typography, and responsiveness.",
      code:
        "<style>\n" +
        "  body {\n" +
        "    background: #111;\n" +
        "    color: white;\n" +
        "  }\n" +
        "</style>",
    },

    "HTML Links": {
      title: "HTML Links",
      desc:
        "Links connect webpages together and allow users to navigate between pages and websites.",
      code:
        "<a href='https://google.com' target='_blank'>Open Google</a>",
    },

    "HTML Images": {
      title: "HTML Images",
      desc:
        "Images make websites more engaging and visually attractive. The img tag embeds images into webpages.",
      code:
        "<img src='image.jpg' alt='Nature' width='400'>",
    },

    "HTML Tables": {
      title: "HTML Tables",
      desc:
        "Tables display structured data using rows and columns. They are useful for schedules, pricing, and reports.",
      code:
        "<table>\n" +
        "  <tr>\n" +
        "    <th>Name</th>\n" +
        "    <th>Age</th>\n" +
        "  </tr>\n" +
        "  <tr>\n" +
        "    <td>Ali</td>\n" +
        "    <td>24</td>\n" +
        "  </tr>\n" +
        "</table>",
    },

    "HTML Lists": {
      title: "HTML Lists",
      desc:
        "Lists organize related items clearly. Ordered lists use numbers while unordered lists use bullet points.",
      code:
        "<ul>\n" +
        "  <li>HTML</li>\n" +
        "  <li>CSS</li>\n" +
        "</ul>",
    },

    "HTML Blocks": {
      title: "Block and Inline Elements",
      desc:
        "Block elements take full width while inline elements only take required space.",
      code:
        "<div>Block Element</div>\n" +
        "<span>Inline Element</span>",
    },

    "HTML Classes": {
      title: "HTML Classes",
      desc:
        "Classes allow multiple elements to share the same styling and behavior.",
      code:
        "<style>\n" +
        ".card {\n" +
        "  background: #04AA6D;\n" +
        "  color: white;\n" +
        "}\n" +
        "</style>\n\n" +
        "<div class='card'>Course Card</div>",
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
                    if (course.name === "HTML") {
                      setView("HTML_TUTORIAL");
                      setIsMenuOpen(false);
                    }
                  }}
                  className="group relative p-8 rounded-[2rem] bg-zinc-900/10 border border-zinc-900 transition-all duration-500 hover:border-green-600/50 hover:bg-zinc-900/30 cursor-pointer"
                >
                  <span className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.2em] mb-3 block group-hover:text-green-600">
                    {course.cat}
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
                  HTML Tutorial
                </h2>

                {htmlSidebarLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => setActiveLesson(link)}
                    className={`w-full text-left px-6 py-2 text-[14px] transition-colors ${
                      activeLesson === link
                        ? "bg-[#04AA6D] text-white font-bold"
                        : "text-zinc-700 hover:bg-zinc-300"
                    }`}
                  >
                    {link}
                  </button>
                ))}
              </div>
            </aside>

            {/* CONTENT */}
            <div className="flex-1 p-12 lg:p-20 bg-white">
              <div className="max-w-5xl mx-auto">
                <div className="mb-6 flex items-center gap-3">
                  <span className="bg-[#04AA6D] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    HTML Course
                  </span>

                  <span className="text-zinc-400 text-sm">
                    Beginner to Advanced
                  </span>
                </div>

                <h1 className="text-5xl font-normal mb-6 text-zinc-900 leading-tight">
                  {currentLesson.title}
                </h1>

                <div className="flex justify-between mb-12">
                  <button
                    onClick={handlePrev}
                    className={`bg-[#E7E9EB] text-zinc-900 px-6 py-2 rounded font-bold hover:bg-zinc-300 transition-all ${
                      activeLesson === htmlSidebarLinks[0]
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    ❮ Previous
                  </button>

                  <button
                    onClick={handleNext}
                    className={`bg-[#04AA6D] text-white px-8 py-2 rounded font-bold hover:bg-[#059862] transition-all ${
                      activeLesson ===
                      htmlSidebarLinks[htmlSidebarLinks.length - 1]
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
                    {currentLesson.desc}
                  </p>

                  {currentLesson.tips && (
                    <div className="mt-8">
                      <h4 className="font-bold text-zinc-900 mb-4 text-xl">
                        Key Points
                      </h4>

                      <ul className="space-y-3">
                        {currentLesson.tips.map((tip, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-zinc-700"
                          >
                            <span className="text-[#04AA6D] font-bold">
                              ✓
                            </span>

                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CODE */}
                <div className="bg-[#E7E9EB] p-8 rounded-xl border border-zinc-300 shadow-inner">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-zinc-900">
                      Example Code
                    </h3>

                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">
                      HTML5
                    </span>
                  </div>

                  <div className="bg-white p-6 border-l-4 border-[#04AA6D] font-mono text-sm leading-loose shadow-sm whitespace-pre-wrap text-zinc-800 overflow-auto rounded-lg">
                    {currentLesson.code}
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button className="bg-[#04AA6D] text-white px-6 py-2.5 rounded font-bold hover:bg-zinc-900 transition-colors">
                      Try it Yourself »
                    </button>

                    <button className="bg-zinc-900 text-white px-6 py-2.5 rounded font-bold hover:bg-zinc-700 transition-colors">
                      Copy Code
                    </button>
                  </div>
                </div>

                {/* FOOTER CARD */}
                <div className="mt-12 bg-zinc-900 text-white rounded-2xl p-10">
                  <h3 className="text-3xl font-black mb-4">
                    Continue Learning
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-6">
                    Practice consistently and build real projects to
                    improve your frontend development skills. HTML is
                    the first step toward becoming a professional web
                    developer.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 rounded-full bg-zinc-800 text-sm">
                      HTML5
                    </span>

                    <span className="px-4 py-2 rounded-full bg-zinc-800 text-sm">
                      CSS3
                    </span>

                    <span className="px-4 py-2 rounded-full bg-zinc-800 text-sm">
                      JavaScript
                    </span>

                    <span className="px-4 py-2 rounded-full bg-zinc-800 text-sm">
                      React
                    </span>
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