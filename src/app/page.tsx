import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';

export default function Home() {

  // Koorsiiwwan fuula duraa irratti mul'atan
  const topCourses = [
    { title: "HTML Basics", desc: "Caasaa weebsaayitii ijaaruu baradhu.", link: "/courses/html", icon: "🌐" },
    { title: "CSS Fundamentals", desc: "Weebsaayitii kee dizaayiniin bareechi.", link: "/courses/css", icon: "🎨" },
    { title: "JavaScript Basics", desc: "Weebsaayitii kee socho'aa taasisi.", link: "/courses/javascript", icon: "⚡" },
  ];

  return (
   <div className="min-h-screen flex flex-col bg-[#020617] overflow-x-hidden relative text-white">

  {/* PREMIUM BACKGROUND */}
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

    {/* Base Gradient */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),transparent_25%),radial-gradient(circle_at_top_right,_rgba(6,182,212,0.12),transparent_25%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.10),transparent_30%)]"></div>

    {/* Grid */}
    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

    {/* Glow Effects */}
    <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-emerald-500/15 rounded-full blur-[120px]"></div>

    <div className="absolute top-1/3 right-0 w-[650px] h-[650px] bg-cyan-500/10 rounded-full blur-[120px]"></div>

    <div className="absolute bottom-0 left-1/3 w-[650px] h-[650px] bg-violet-500/10 rounded-full blur-[120px]"></div>

  </div>

  {/* 1. NAVBAR - Component irraa dhufe */}
  <Navbar />

  {/* 2. HERO SECTION */}
  <section className="relative overflow-hidden">

    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>

    {/* Glow Effects */}
    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full"></div>

    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

    <div className="relative container mx-auto px-6 py-36">

      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-3xl shadow-[0_0_50px_rgba(16,185,129,0.08)] mb-10">

          <span className="text-lg">🚀</span>

          <span className="text-sm font-black uppercase tracking-[0.25em] text-emerald-300">
             oromotech-hub learning platform
          </span>

        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-[-0.05em]">

          Afaan Oromootiin <br />

          <span className="relative inline-block">

            {/* Glow */}
            <span className="absolute inset-0 blur-3xl bg-emerald-400/20 rounded-full"></span>

            {/* Gradient Text */}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-cyan-400">
              Teknoolojii Baradhu
            </span>

          </span>

        </h1>

        {/* Paragraph */}
        <p className="mt-10 text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-[2.1] font-light">

          OromoTech Hub waliin coding, AI, cybersecurity,
          software engineering fi web development Afaan Oromootiin
          salphatti baradhu. Dandeettii kee gara sadarkaa addunyaatti guddisi.

        </p>

        {/* CTA */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6">

          <Link
            href="/signup"
            className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 via-green-500 to-cyan-500 text-white px-10 py-5 rounded-[1.8rem] font-black text-lg shadow-[0_20px_70px_rgba(16,185,129,0.35)] hover:scale-105 transition duration-500"
          >

            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition"></span>

            <span className="relative">
              Barumsa Jalqabi →
            </span>

          </Link>

          <Link
            href="/courses"
            className="bg-white/[0.05] border border-white/10 text-white px-10 py-5 rounded-[1.8rem] font-bold text-lg hover:bg-white/[0.08] hover:border-emerald-400/20 transition duration-500 backdrop-blur-3xl"
          >
            Courses Ilaali
          </Link>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">

          <div className="group relative overflow-hidden bg-white/[0.04] backdrop-blur-3xl border border-white/10 rounded-[2rem] p-10 shadow-[0_0_40px_rgba(0,0,0,0.35)] hover:-translate-y-2 transition duration-500">

            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

            <div className="relative">

              <h3 className="text-6xl font-black text-emerald-400">
                10+
              </h3>

              <p className="mt-4 text-slate-300 font-medium text-lg">
                Coding Courses
              </p>

            </div>

          </div>

          <div className="group relative overflow-hidden bg-white/[0.04] backdrop-blur-3xl border border-white/10 rounded-[2rem] p-10 shadow-[0_0_40px_rgba(0,0,0,0.35)] hover:-translate-y-2 transition duration-500">

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

            <div className="relative">

              <h3 className="text-6xl font-black text-cyan-400">
                100%
              </h3>

              <p className="mt-4 text-slate-300 font-medium text-lg">
                Afaan Oromoo
              </p>

            </div>

          </div>

          <div className="group relative overflow-hidden bg-white/[0.04] backdrop-blur-3xl border border-white/10 rounded-[2rem] p-10 shadow-[0_0_40px_rgba(0,0,0,0.35)] hover:-translate-y-2 transition duration-500">

            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

            <div className="relative">

              <h3 className="text-6xl font-black text-violet-400">
                24/7
              </h3>

              <p className="mt-4 text-slate-300 font-medium text-lg">
                Online Learning
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>

  {/* TRUSTED TECHNOLOGIES */}
<section className="py-20 border-y border-white/5 bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden">

  {/* Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
  </div>

  <div className="container mx-auto px-6 relative">

    <div className="text-center mb-14">

      <p className="uppercase tracking-[0.45em] text-slate-500 font-black text-sm">
        MODERN TECHNOLOGIES
      </p>

    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">

      {/* React */}
      <Link
        href="/courses/react"
        className="group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04] backdrop-blur-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
      >

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/10 to-transparent transition duration-500"></div>

        <div className="relative z-10">

          <div className="text-5xl mb-5 group-hover:scale-110 transition duration-500">
            ⚛️
          </div>

          <p className="font-black text-white text-2xl tracking-tight">
            React
          </p>

        </div>

      </Link>

      {/* Next.js */}
      <Link
        href="/courses/nextjs"
        className="group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04] backdrop-blur-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
      >

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/10 to-transparent transition duration-500"></div>

        <div className="relative z-10">

          <div className="text-5xl mb-5 group-hover:scale-110 transition duration-500">
            ▲
          </div>

          <p className="font-black text-white text-2xl tracking-tight">
            Next.js
          </p>

        </div>

      </Link>

      {/* Tailwind */}
      <Link
        href="/courses/css"
        className="group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04] backdrop-blur-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
      >

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 to-transparent transition duration-500"></div>

        <div className="relative z-10">

          <div className="text-5xl mb-5 group-hover:scale-110 transition duration-500">
            🎨
          </div>

          <p className="font-black text-white text-2xl tracking-tight">
            Tailwind
          </p>

        </div>

      </Link>

      {/* AI */}
      <Link
        href="/courses/javascript"
        className="group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04] backdrop-blur-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
      >

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-emerald-500/10 to-transparent transition duration-500"></div>

        <div className="relative z-10">

          <div className="text-5xl mb-5 group-hover:scale-110 transition duration-500">
            🤖
          </div>

          <p className="font-black text-white text-2xl tracking-tight">
            AI
          </p>

        </div>

      </Link>

      {/* Cloud */}
      <Link
        href="/courses/html"
        className="group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04] backdrop-blur-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
      >

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-slate-500/10 to-transparent transition duration-500"></div>

        <div className="relative z-10">

          <div className="text-5xl mb-5 group-hover:scale-110 transition duration-500">
            ☁️
          </div>

          <p className="font-black text-white text-2xl tracking-tight">
            Cloud
          </p>

        </div>

      </Link>

    </div>

  </div>

</section>

     {/* DASHBOARD PREVIEW */}
<section className="relative py-36 overflow-hidden">

  {/* BACKGROUND */}
  <div className="absolute inset-0 bg-[#020617]"></div>

  {/* Mesh Gradient */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),transparent_25%),radial-gradient(circle_at_top_right,_rgba(6,182,212,0.12),transparent_25%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.10),transparent_30%)]"></div>

  {/* Grid */}
  <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

  {/* Glow Effects */}
  <div className="absolute top-[-20%] left-[10%] w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[150px]"></div>

  <div className="absolute bottom-[-20%] right-[10%] w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px]"></div>

  <div className="relative container mx-auto px-6">

    {/* Header */}
    <div className="text-center max-w-5xl mx-auto mb-24">

      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-3xl mb-8">

        <span className="text-lg">🧠</span>

        <p className="uppercase tracking-[0.35em] text-emerald-300 font-black text-sm">
          Learning Experience
        </p>

      </div>

      <h2 className="text-6xl md:text-7xl font-black text-white leading-tight tracking-[-0.05em]">

        Modern Learning

        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(16,185,129,0.4)]">
          {" "}Dashboard
        </span>

      </h2>

      <p className="mt-10 text-2xl text-slate-300 leading-[2.1] font-light max-w-4xl mx-auto">

        Students dashboard smart, modern,
        fi user-friendly ta'e keessatti coding,
        quizzes, exercises fi live practice argatu.

      </p>

    </div>

    {/* DASHBOARD CARD */}
    <div className="relative max-w-7xl mx-auto">

      {/* Outer Glow */}
      <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-[5rem]"></div>

      {/* Main Container */}
      <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.04] backdrop-blur-3xl shadow-[0_0_120px_rgba(0,0,0,0.55)]">

        {/* TOP BAR */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-white/[0.03]">

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>

            <div className="ml-4 bg-white/[0.04] border border-white/5 rounded-full px-5 py-2 text-sm text-slate-400 backdrop-blur-xl">
              app.oromotechhub.com/dashboard
            </div>

          </div>

          <div className="hidden md:flex items-center gap-3">

            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center font-black text-black">
              O
            </div>

          </div>

        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-4">

          {/* Sidebar */}
          <div className="relative border-r border-white/5 bg-black/30 backdrop-blur-3xl p-8 space-y-8">

            {/* Logo */}
            <div>

              <h3 className="text-3xl font-black tracking-tight text-white">
                OromoTech
              </h3>

              <p className="text-slate-500 mt-2 text-sm">
                Smart Learning Platform
              </p>

            </div>

            {/* Navigation */}
            <div className="space-y-3 text-slate-300">

              <div className="group flex items-center gap-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/10 border border-emerald-400/20 rounded-2xl px-5 py-4 cursor-pointer">

                <span className="text-xl">📚</span>

                <span className="font-semibold">
                  Courses
                </span>

              </div>

              <div className="group flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/[0.05] transition cursor-pointer">

                <span className="text-xl">⚡</span>

                <span className="font-semibold">
                  Practice
                </span>

              </div>

              <div className="group flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/[0.05] transition cursor-pointer">

                <span className="text-xl">🎯</span>

                <span className="font-semibold">
                  Progress
                </span>

              </div>

              <div className="group flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/[0.05] transition cursor-pointer">

                <span className="text-xl">🤖</span>

                <span className="font-semibold">
                  AI Tutor
                </span>

              </div>

            </div>

            {/* AI Box */}
            <div className="relative overflow-hidden rounded-[2rem] border border-emerald-400/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 p-6">

              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/10 blur-3xl rounded-full"></div>

              <div className="relative">

                <div className="text-4xl mb-4">
                  🤖
                </div>

                <h4 className="text-lg font-black text-white mb-2">
                  AI Learning
                </h4>

                <p className="text-slate-400 text-sm leading-7">
                  Smart coding assistant fi real-time learning support.
                </p>

              </div>

            </div>

          </div>

          {/* MAIN AREA */}
          <div className="lg:col-span-3 p-10">

            {/* STATS */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">

              <div className="group relative overflow-hidden rounded-[2rem] border border-emerald-400/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-7 backdrop-blur-xl hover:-translate-y-2 transition duration-500">

                <div className="absolute inset-0 bg-emerald-400/5 opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative">

                  <h4 className="text-5xl font-black text-emerald-400">
                    12
                  </h4>

                  <p className="mt-3 text-slate-300 text-lg">
                    Active Courses
                  </p>

                </div>

              </div>

              <div className="group relative overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-7 backdrop-blur-xl hover:-translate-y-2 transition duration-500">

                <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative">

                  <h4 className="text-5xl font-black text-cyan-400">
                    87%
                  </h4>

                  <p className="mt-3 text-slate-300 text-lg">
                    Learning Progress
                  </p>

                </div>

              </div>

              <div className="group relative overflow-hidden rounded-[2rem] border border-violet-400/10 bg-gradient-to-br from-violet-500/10 to-transparent p-7 backdrop-blur-xl hover:-translate-y-2 transition duration-500">

                <div className="absolute inset-0 bg-violet-400/5 opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative">

                  <h4 className="text-5xl font-black text-violet-400">
                    24/7
                  </h4>

                  <p className="mt-3 text-slate-300 text-lg">
                    AI Support
                  </p>

                </div>

              </div>

            </div>

            {/* COURSE CARDS */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* HTML */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition duration-500">

                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative">

                  <div className="flex items-center justify-between mb-7">

                    <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-emerald-400/20 to-green-500/20 border border-emerald-400/20 flex items-center justify-center text-4xl">
                      🌐
                    </div>

                    <div className="bg-emerald-500/20 text-emerald-300 text-xs font-black px-4 py-2 rounded-full border border-emerald-400/20">
                      Beginner
                    </div>

                  </div>

                  <h3 className="text-3xl font-black text-white mb-4">
                    HTML Basics
                  </h3>

                  <p className="text-slate-300 leading-8 text-lg">
                    Modern web structure Afaan Oromootiin baradhu.
                  </p>

                </div>

              </div>

              {/* JAVASCRIPT */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition duration-500">

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative">

                  <div className="flex items-center justify-between mb-7">

                    <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/20 flex items-center justify-center text-4xl">
                      ⚡
                    </div>

                    <div className="bg-cyan-500/20 text-cyan-300 text-xs font-black px-4 py-2 rounded-full border border-cyan-400/20">
                      Popular
                    </div>

                  </div>

                  <h3 className="text-3xl font-black text-white mb-4">
                    JavaScript
                  </h3>

                  <p className="text-slate-300 leading-8 text-lg">
                    Dynamic web applications ijaaruu baradhu.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* WHY US */}
      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-green-700 to-cyan-700"></div>

        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 text-white">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <p className="uppercase tracking-[0.3em] font-black text-emerald-100 mb-4">
              Why OromoTech Hub?
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Maaliif Nu Filattu?
            </h2>

            <p className="mt-8 text-emerald-100 text-xl leading-9">
              Platform keenya beginner irraa hanga professional developeritti
              nama geessuuf modern learning system irratti hundaa'e.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 hover:bg-white/15 transition">

              <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-5xl mb-8">
                🌍
              </div>

              <h4 className="text-3xl font-black mb-5">
                Afaan Oromoo
              </h4>

              <p className="text-emerald-50 leading-9 text-lg">
                Barumsa coding fi teknooloojii afaan dhaloota keetiin salphatti baradhu.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 hover:bg-white/15 transition">

              <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-5xl mb-8">
                🛠️
              </div>

              <h4 className="text-3xl font-black mb-5">
                Hojii Qabatamaa
              </h4>

              <p className="text-emerald-50 leading-9 text-lg">
                Theory qofa miti. Real-world projects fi live coding practice ni argatta.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 hover:bg-white/15 transition">

              <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-5xl mb-8">
                🎓
              </div>

              <h4 className="text-3xl font-black mb-5">
                Namoota Jalqabaaf
              </h4>

              <p className="text-emerald-50 leading-9 text-lg">
                Beekumsa coding duraanii tokko malee beginner irraa jalqabuu dandeessa.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
<section className="relative py-36 overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 bg-[#020617]"></div>

  {/* Aurora Lights */}
  <div className="absolute top-[-10%] left-[10%] w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[140px]"></div>

  <div className="absolute bottom-[-20%] right-[5%] w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[140px]"></div>

  <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

  <div className="relative container mx-auto px-6">

    {/* Header */}
    <div className="text-center max-w-4xl mx-auto mb-24">

      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl mb-8">

        <span className="text-lg">💬</span>

        <p className="uppercase tracking-[0.35em] text-emerald-300 font-black text-sm">
          Student Stories
        </p>

      </div>

      <h2 className="text-6xl md:text-7xl font-black text-white leading-tight tracking-[-0.04em]">

        Namoonni
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-cyan-400">
          {" "}Maal jedhu?
        </span>

      </h2>

      <p className="mt-8 text-slate-400 text-xl leading-[2] max-w-3xl mx-auto">

        OromoTech Hub keessatti barattoonni keenya modern learning experience,
        AI-powered system fi practical coding environment irratti maal akka jedhan ilaali.

      </p>

    </div>

    {/* Testimonials Grid */}
    <div className="grid lg:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-3xl p-10 hover:-translate-y-3 transition duration-700 shadow-[0_0_50px_rgba(0,0,0,0.35)]">

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>

        {/* Quote Icon */}
        <div className="relative flex items-center justify-between mb-8">

          <div className="flex items-center gap-1 text-yellow-400 text-2xl">
            ★★★★★
          </div>

          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-2xl">
            💻
          </div>

        </div>

        <p className="relative text-slate-300 text-xl leading-[2.1] font-light">

          “Afaan Oromootiin coding barachuun yeroo jalqabaaf salphaa natti ta'e.
          Barnootni isaanii beginner irraa hanga professionalitti nama geessa.”

        </p>

        {/* User */}
        <div className="relative mt-10 flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center font-black text-lg text-black">
            A
          </div>

          <div>

            <h4 className="font-black text-white text-lg">
              Ahmed Ibrahim
            </h4>

            <p className="text-slate-500 text-sm">
              Frontend Student
            </p>

          </div>

        </div>

      </div>

      {/* Featured Card */}
      <div className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-500 via-green-500 to-cyan-500 p-[1px] shadow-[0_0_90px_rgba(16,185,129,0.4)] hover:-translate-y-4 transition duration-700">

        <div className="h-full rounded-[2.5rem] bg-[#071120]/90 backdrop-blur-3xl p-10">

          {/* Animated Glow */}
          <div className="absolute inset-0 opacity-40">

            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[100px]"></div>

          </div>

          <div className="relative flex items-center justify-between mb-8">

            <div className="flex items-center gap-1 text-yellow-300 text-2xl">
              ★★★★★
            </div>

            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl">
              🚀
            </div>

          </div>

          <p className="relative text-white text-2xl leading-[2] font-light">

            “UI fi learning system isaa modern startup tokko fakkaata.
            Dashboard, animations fi user experience isaa baay’ee premium dha.”

          </p>

          {/* User */}
          <div className="relative mt-10 flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-black text-lg">
              H
            </div>

            <div>

              <h4 className="font-black text-white text-lg">
                Hana Yusuf
              </h4>

              <p className="text-emerald-100 text-sm">
                UI/UX Learner
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Card 3 */}
      <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-3xl p-10 hover:-translate-y-3 transition duration-700 shadow-[0_0_50px_rgba(0,0,0,0.35)]">

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>

        {/* Quote Icon */}
        <div className="relative flex items-center justify-between mb-8">

          <div className="flex items-center gap-1 text-yellow-400 text-2xl">
            ★★★★★
          </div>

          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-2xl">
            ⚡
          </div>

        </div>

        <p className="relative text-slate-300 text-xl leading-[2.1] font-light">

          “Projects fi practice system isaa baay’ee professional dha.
          Real-world skills fi portfolio ijaaruun baay’ee salphaa ta’eera.”

        </p>

        {/* User */}
        <div className="relative mt-10 flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-black text-lg text-black">
            M
          </div>

          <div>

            <h4 className="font-black text-white text-lg">
              Mohammed Ali
            </h4>

            <p className="text-slate-500 text-sm">
              Full Stack Student
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* Bottom Trust Numbers */}
    <div className="grid md:grid-cols-3 gap-8 mt-24">

      <div className="text-center bg-white/[0.03] border border-white/10 rounded-[2rem] p-10 backdrop-blur-2xl">

        <h3 className="text-5xl font-black text-emerald-400">
          4.9★
        </h3>

        <p className="mt-3 text-slate-400 text-lg">
          Student Rating
        </p>

      </div>

      <div className="text-center bg-white/[0.03] border border-white/10 rounded-[2rem] p-10 backdrop-blur-2xl">

        <h3 className="text-5xl font-black text-cyan-400">
          10K+
        </h3>

        <p className="mt-3 text-slate-400 text-lg">
          Active Learners
        </p>

      </div>

      <div className="text-center bg-white/[0.03] border border-white/10 rounded-[2rem] p-10 backdrop-blur-2xl">

        <h3 className="text-5xl font-black text-violet-400">
          24/7
        </h3>

        <p className="mt-3 text-slate-400 text-lg">
          AI Learning Support
        </p>

      </div>

    </div>

  </div>

</section>

      {/* FUTURE SECTION */}
      <section className="py-28">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-emerald-600 uppercase tracking-[0.3em] font-black mb-4">
                Future Vision
              </p>

              <h2 className="text-5xl font-black text-gray-900 leading-tight">

                Teknooloojii
                <span className="text-emerald-600"> Afrikaa</span>
                Jijjiiruuf

              </h2>

              <p className="mt-8 text-xl text-gray-600 leading-10">

                OromoTech Hub future keessatti AI learning platform,
                startup ecosystem, fi digital innovation hub guddaa
                Afrikaa keessaa ta'uuf hojjechaa jira.

              </p>

              <div className="mt-10">

                <Link
                  href="/signup"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
                >
                  Join Community
                  <span>🚀</span>
                </Link>

              </div>

            </div>

            <div className="grid gap-6">

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">

                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  🤖 AI Learning
                </h3>

                <p className="text-gray-600 leading-8">
                  AI-powered education system Afaan Oromoo keessatti.
                </p>

              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-green-500 rounded-3xl p-8 text-white shadow-2xl">

                <h3 className="text-2xl font-black mb-4">
                  💻 Full Stack Development
                </h3>

                <p className="leading-8 text-emerald-50">

                  Modern web technologies React, Next.js,
                  Tailwind CSS fi SaaS development.

                </p>

              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">

                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  🌐 Community
                </h3>

                <p className="text-gray-600 leading-8">
                  Developers, students fi innovators walitti fiduu.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="px-6 pb-28">

        <div className="container mx-auto">

          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-gray-900 via-slate-900 to-black p-14 md:p-20 text-center text-white shadow-2xl">

            <div className="absolute inset-0 opacity-20">

              <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-emerald-400 rounded-full blur-3xl"></div>

            </div>

            <div className="relative max-w-4xl mx-auto">

              <p className="uppercase tracking-[0.3em] text-emerald-300 font-black mb-5">
                Start Your Journey
              </p>

              <h2 className="text-5xl md:text-6xl font-black leading-tight">

                Coding Barachuu
                <br />
                Har'a Jalqabi

              </h2>

              <p className="mt-8 text-xl text-gray-300 leading-10">

                OromoTech Hub waliin software engineering,
                AI, cybersecurity fi web development
                Afaan Oromootiin baradhu.

              </p>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

                <Link
                  href="/signup"
                  className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition"
                >
                  Signup Now →
                </Link>

                <Link
                  href="/courses"
                  className="border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition"
                >
                  Explore Courses
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}