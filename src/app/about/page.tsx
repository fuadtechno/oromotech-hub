import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | OromoTech Hub",
  description: "OromoTech Hub waa'ee isaa baradhu.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 overflow-x-hidden text-gray-900">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white font-black shadow-lg shadow-sky-300/40">
              O
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight text-slate-900">
                OromoTech
                <span className="text-sky-600"> Hub</span>
              </h1>

              <p className="text-xs text-slate-500 font-medium">
                Learn Tech in Afaan Oromo
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-6 text-sm font-semibold">

            <Link
              href="/courses"
              className="text-slate-600 hover:text-sky-600 transition duration-300"
            >
              Courses
            </Link>

            <Link
              href="/login"
              className="bg-gradient-to-r from-sky-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:scale-105 hover:shadow-xl hover:shadow-sky-300/40 transition duration-300"
            >
              Login
            </Link>

          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">

       {/* BACKGROUND IMAGE (CLEAR + PREMIUM) */}
<div
  className="absolute inset-0 bg-cover bg-center scale-105"
  style={{
    backgroundImage: "url('/fuad1.png')",
  }}
/>

{/* LIGHTER OVERLAY (fix blur/dark issue) */}
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Animated Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-sky-400/30 rounded-full blur-3xl animate-pulse"></div>

          <div className="absolute bottom-10 right-[10%] w-[450px] h-[450px] bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

          <div className="inline-flex items-center gap-3 border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full font-semibold mb-8 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-sky-300 animate-ping"></span>
            🌍 OromoTech Hub Platform
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8">

            Afaan Oromootiin <br />

            <span className="bg-gradient-to-r from-sky-200 via-white to-blue-300 bg-clip-text text-transparent">
              Teknoolojii Ijaarru
            </span>

          </h1>

          <p className="max-w-3xl mx-auto text-sky-100 text-lg md:text-2xl leading-9 mb-12">
            Platform barnootaa ammayyaa coding, AI,
            software engineering, cybersecurity,
            fi digital innovation Afaan Oromootiin
            barsiisuuf ijaarame.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">

            <Link
              href="/signup"
              className="group bg-white text-sky-700 px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition duration-300 shadow-2xl"
            >
              Barumsa Jalqabi
              <span className="inline-block ml-2 group-hover:translate-x-1 transition">
                →
              </span>
            </Link>

            <Link
              href="/courses"
              className="border border-white/20 bg-white/10 backdrop-blur-lg px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition duration-300"
            >
              Courses Ilaali
            </Link>

          </div>

        </div>

      </section>

      {/* ================= MAIN CONTENT ================= */}
      <main className="relative max-w-7xl mx-auto px-6 py-28">

        {/* ABOUT SECTION */}
        <section className="relative bg-white/80 backdrop-blur-xl border border-sky-100 rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_80px_rgba(14,165,233,0.10)] overflow-hidden">

          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-40"></div>

          <div className="relative grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-5 py-2 rounded-full text-sm font-black tracking-wide mb-8">
                ABOUT OROMOTECH HUB
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
                Teknooloojii
                <span className="text-sky-600"> Afaan Oromootti</span>
              </h2>

              <div className="space-y-7 text-gray-700 text-lg leading-9">

                <p>
                  OromoTech Hub jechuun platform
                  dargaggoota Oromoo fi Afaan Oromoo
                  dubbatanif coding, AI,
                  software engineering,
                  fi teknooloojii ammayyaa
                  barachuuf ijaarame dha.
                </p>

                <p>
                  Kaayyoon isaa guddaan teknooloojii
                  salphisuun Afaan Oromootiin
                  dhiyeessuudha.
                  Namni kamiyyuu background
                  teknooloojii osoo hin qabin
                  coding jalqabuu akka danda'u
                  ni deeggarra.
                </p>

                <p>
                  Platform kun tutorials,
                  exercises, quizzes,
                  live coding practice,
                  fi AI-powered learning system
                  of keessaa qaba.
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div className="space-y-7">

              <div className="group bg-gradient-to-br from-sky-50 to-white border border-sky-100 rounded-[2rem] p-8 hover:-translate-y-2 transition duration-300 shadow-lg">

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center text-3xl">
                    🎯
                  </div>

                  <h3 className="text-3xl font-black text-sky-700">
                    Vision
                  </h3>
                </div>

                <p className="text-gray-700 leading-8 text-lg">
                  Afrikaa keessatti platform
                  barnoota teknooloojii
                  Afaan Oromoo sadarkaa
                  addunyaa ijaaruu.
                </p>

              </div>

              <div className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-[2rem] p-8 hover:-translate-y-2 transition duration-300 shadow-lg">

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">
                    🚀
                  </div>

                  <h3 className="text-3xl font-black text-blue-700">
                    Mission
                  </h3>
                </div>

                <p className="text-gray-700 leading-8 text-lg">
                  Dargaggoota coding, AI,
                  cybersecurity,
                  fi software development
                  salphaatti akka baratan gochuu.
                </p>

              </div>

              <div className="group bg-gradient-to-br from-slate-900 to-blue-950 rounded-[2rem] p-8 text-white hover:-translate-y-2 transition duration-300 shadow-2xl">

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl">
                    🌍
                  </div>

                  <h3 className="text-3xl font-black">
                    Future Goal
                  </h3>
                </div>

                <p className="text-slate-300 leading-8 text-lg">
                  OromoTech Hub gara startup
                  technology company guddaatti
                  guddisuun developers Afrikaa
                  waliin ecosystem innovation
                  ijaaruu.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ================= FOUNDER ================= */}
        <section className="mt-32">

          <div className="text-center mb-20">

            <p className="text-sky-600 font-black uppercase tracking-[0.35em] mb-5">
              Founder Story
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-slate-900">
              Waa'ee Fuad Aliyi
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT CARD */}
            <div className="relative overflow-hidden bg-white border border-sky-100 rounded-[2rem] p-10 shadow-2xl">

              <div className="absolute top-0 right-0 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-40"></div>

              <div className="relative">

                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-4xl shadow-xl shadow-sky-300/40 mb-8">
                  👨‍💻
                </div>

                <h3 className="text-4xl font-black text-sky-700 mb-8">
                  Developer
                </h3>

                <div className="space-y-6 text-gray-700 leading-9 text-lg">

                  <p>
                    Fuad Aliyi barataa IT
                    waggaa 4ffaa
                    Dire Dawa University
                    keessatti barachaa jiru.
                  </p>

                  <p>
                    Full-stack development,
                    AI systems,
                    cloud technologies,
                    fi startup innovation irratti
                    fedhii guddaa qaba.
                  </p>

                  <p>
                    Ofiin barachuun,
                    GitHub, YouTube,
                    documentation,
                    fi AI tools fayyadamuun
                    dandeettii software engineering
                    guddisaa jira.
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT CARD */}
            <div className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-blue-700 to-slate-950 rounded-[2rem] p-10 text-white shadow-[0_20px_80px_rgba(14,165,233,0.35)]">

              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/3 w-80 h-80 bg-white rounded-full blur-3xl"></div>
              </div>

              <div className="relative">

                <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-lg flex items-center justify-center text-4xl mb-8">
                  💡
                </div>

                <h3 className="text-4xl font-black mb-8">
                  Why OromoTech Hub?
                </h3>

                <div className="space-y-6 text-sky-100 leading-9 text-lg">

                  <p>
                    Teknooloojii Afaan Oromoo
                    keessatti babal’isuuf.
                  </p>

                  <p>
                    Dargaggoonni coding fi AI
                    salphaatti akka baratan
                    gochuuf.
                  </p>

                  <p>
                    Startup ecosystem Afrikaa keessaa
                    ijaaruu fi developers
                    wal qunnamsiisuuf.
                  </p>

                  <p>
                    Platform SaaS sadarkaa addunyaa
                    Afrikaa keessaa uumuuf.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= FEATURES ================= */}
        <section className="mt-32">

          <div className="text-center mb-20">

            <p className="text-sky-600 font-black uppercase tracking-[0.35em] mb-5">
              Platform Features
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-slate-900">
              Maal Of keessaa qaba?
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {[
              {
                icon: "💻",
                title: "Coding Courses",
                desc: "HTML, CSS, JavaScript, React, Next.js fi technologies hedduu.",
              },
              {
                icon: "🤖",
                title: "AI Learning",
                desc: "Artificial Intelligence fi AI-powered learning systems.",
              },
              {
                icon: "🛡️",
                title: "Cybersecurity",
                desc: "Security, ethical hacking, fi digital protection.",
              },
              {
                icon: "🚀",
                title: "Startup Innovation",
                desc: "SaaS projects, startup systems, fi digital entrepreneurship.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white border border-sky-100 rounded-[2rem] p-8 hover:-translate-y-3 transition duration-300 shadow-xl"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-sky-50 to-blue-50"></div>

                <div className="relative">

                  <div className="text-6xl mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-3xl font-black text-slate-900 mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-8 text-lg">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* ================= CTA ================= */}
        <section className="mt-32">

          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-sky-700 via-blue-800 to-slate-950 p-14 md:p-20 text-center text-white shadow-[0_25px_100px_rgba(14,165,233,0.35)]">

            {/* Glow */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/3 w-80 h-80 bg-sky-300 rounded-full blur-3xl"></div>
            </div>

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

            <div className="relative max-w-4xl mx-auto">

              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                Barumsa Jalqabi
              </h2>

              <p className="text-sky-100 text-xl leading-9 mb-12">
                OromoTech Hub waliin coding,
                AI, cybersecurity,
                fi software engineering
                Afaan Oromootiin baradhu.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5">

                <Link
                  href="/signup"
                  className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition duration-300 shadow-2xl"
                >
                  Barumsa Jalqabi →
                </Link>

                <Link
                  href="/courses"
                  className="border border-white/20 bg-white/10 backdrop-blur-lg px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition duration-300"
                >
                  Courses Ilaali
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="relative mt-32 bg-gradient-to-br from-slate-950 via-blue-950 to-sky-950 text-white overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-sky-400 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

            {/* BRAND */}
            <div className="space-y-7">

              <div>

                <h2 className="text-5xl font-black tracking-tight">
                  OROMOTECH
                  <span className="text-sky-400"> HUB</span>
                </h2>

                <div className="w-24 h-1 bg-sky-400 rounded-full mt-4"></div>

              </div>

              <p className="text-sky-100 leading-8 text-[17px]">
                Platform coding, AI,
                software engineering,
                fi innovation Afaan Oromootiin barsiisu.
              </p>

              <p className="text-sky-200 leading-8 text-[16px]">
                Kaayyoon keenya guddaan
                teknooloojii Afrikaa keessatti
                babal’isuu dha.
              </p>

            </div>

            {/* LINKS */}
            <div className="space-y-7">

              <h3 className="text-3xl font-black">
                Quick Links
              </h3>

              <div className="flex flex-col gap-5 text-sky-100 text-lg">

                <Link
                  href="/"
                  className="hover:text-sky-300 transition"
                >
                  Home
                </Link>

                <Link
                  href="/courses"
                  className="hover:text-sky-300 transition"
                >
                  Courses
                </Link>

                <Link
                  href="/login"
                  className="hover:text-sky-300 transition"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="hover:text-sky-300 transition"
                >
                  Signup
                </Link>

              </div>

            </div>

            {/* VISION */}
            <div className="space-y-7">

              <h3 className="text-3xl font-black">
                Vision
              </h3>

              <div className="space-y-5">

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                  <h4 className="font-black text-sky-300 mb-3 text-lg">
                    Mission
                  </h4>

                  <p className="text-sky-100 leading-7">
                    Coding fi AI Afaan Oromootiin
                    salphaatti barsiisuu.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                  <h4 className="font-black text-sky-300 mb-3 text-lg">
                    Future
                  </h4>

                  <p className="text-sky-100 leading-7">
                    Startup technology company
                    guddaa Afrikaa ijaaruu.
                  </p>
                </div>

              </div>

            </div>

            {/* FOUNDER */}
            <div className="space-y-7">

              <h3 className="text-3xl font-black">
                Founder
              </h3>

              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-7 backdrop-blur-2xl">

                <p className="text-sky-300 uppercase tracking-[0.3em] text-xs font-black mb-3">
                  Founder & Developer
                </p>

                <h4 className="text-3xl font-black mb-5">
                  Fuad Aliyi
                </h4>

                <p className="text-sky-100 leading-8">
                  Barataa IT waggaa 4ffaa
                  Dire Dawa University.
                </p>

                <div className="mt-7 space-y-4">

                  <a
                    href="mailto:fuadaliyi066@gmail.com"
                    className="block text-sky-200 hover:text-white transition"
                  >
                    fuadaliyi066@gmail.com
                  </a>

                  <p className="text-sky-200">
                    Dire Dawa, Ethiopia
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Divider */}
          <div className="my-16 border-t border-white/10"></div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <p className="text-sky-200 text-sm text-center md:text-left">
              © {new Date().getFullYear()} OromoTech Hub.
              All rights reserved.
            </p>

            <p className="text-sky-300 text-sm text-center">
              Built with ❤️ by Fuad Aliyi
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}