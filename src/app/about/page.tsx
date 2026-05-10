"use client";

import Link from "next/link";
import {
  Sparkles,
  GraduationCap,
  Code2,
  Globe,
  ShieldCheck,
  Rocket,
  ArrowRight,
  Cpu,
  Layers3,
} from "lucide-react";

export default function AboutClient() {
  const features = [
    {
      icon: <Code2 className="w-6 h-6 text-sky-400" />,
      title: "Barnoota Ammayyaa",
      desc: "Koorsiiwwan sirna qabeessa ta’an, projectii dhugaa irratti hundaa’an fi experience barnootaa premium.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-sky-400" />,
      title: "AItiin Deeggarame",
      desc: "Sirna barnootaa smart ta’e kan AI fayyadamuun qajeelfama, feedback fi gargaarsa kennu.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-sky-400" />,
      title: "Hojiif Qophaa’e",
      desc: "Skills hojii irratti barbaachisan, software engineering fi startup technology irratti xiyyeeffate.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1220] text-white overflow-x-hidden relative">

      {/* ===== GLOBAL BACKGROUND ===== */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.15),transparent_35%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_30%)]" />

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* ===== FLOATING ORBS ===== */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />

      {/* ========== NAVBAR ========== */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400 blur-xl opacity-60 group-hover:opacity-100 transition" />

              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center font-bold shadow-2xl shadow-sky-500/30">
                O
              </div>
            </div>

            <div>
              <h1 className="font-bold text-lg leading-tight tracking-wide">
                OromoTech{" "}
                <span className="text-sky-400">Hub</span>
              </h1>

              <p className="text-xs text-gray-400">
                SaaS Learning Platform
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <Link
              href="/courses"
              className="hover:text-white transition duration-300 hover:scale-105"
            >
              Koorsiiwwan
            </Link>

            <Link
              href="/about"
              className="hover:text-white transition duration-300 hover:scale-105"
            >
              Waa’ee Keenya
            </Link>

            <Link
              href="/signup"
              className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
            >
              Jalqabi
            </Link>
          </nav>

        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center pt-32">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent rotate-6" />
          <div className="absolute top-[30%] left-[-10%] w-[120%] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -rotate-6" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center z-10">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs text-gray-300 mb-8 hover:border-sky-400/40 transition-all duration-300 animate-pulse">
            <Sparkles className="w-4 h-4 text-sky-400" />
            Developeroota Afrikaa dhaloota haaraaf ijaarame
          </div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-tight tracking-tight">

            Teknooloojii Baradhu{" "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 animate-pulse">
              Afaan Oromootiin
            </span>

          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            OromoTech Hub platformii barnootaa ammayyaa dha kan coding,
            AI, cybersecurity, software engineering fi web technology
            ammayyaa irratti xiyyeeffatu. Sirni kun saffisa, salphina,
            accessibility fi premium experience waliin ijaarame.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">

            <Link
              href="/signup"
              className="group px-7 py-4 rounded-2xl bg-sky-500 text-black font-bold hover:scale-105 transition-all duration-300 shadow-2xl shadow-sky-500/30 flex items-center gap-2"
            >
              Barnoota Jalqabi
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>

            <Link
              href="/courses"
              className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-sky-400/40 transition-all duration-300 backdrop-blur-xl"
            >
              Koorsii Ilaali
            </Link>

          </div>

          {/* stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">

            {[
              ["20+", "Koorsii"],
              ["AI", "Powered"],
              ["24/7", "Barnoota"],
              ["100%", "Modern UI"],
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 hover:border-sky-400/30 transition-all duration-500"
              >
                <h3 className="text-3xl font-black text-sky-400">
                  {item[0]}
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                  {item[1]}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ========== FEATURES ========== */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <p className="text-sky-400 font-semibold uppercase tracking-[0.2em] text-sm">
            Features
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Barnoota Gara Fuulduraatti
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden hover:-translate-y-3 transition-all duration-500"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-sky-500/10 to-blue-500/10" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ========== ABOUT FOUNDER ========== */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div className="relative">

            <div className="absolute inset-0 bg-sky-500/10 blur-3xl rounded-full" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 overflow-hidden">

              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 blur-3xl rounded-full" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-xl shadow-sky-500/30">
                  <GraduationCap className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    Waa’ee Founder
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Student • Developer • Builder
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-gray-300 leading-relaxed">

                <p>
                  OromoTech Hub kan hundeesse{" "}
                  <span className="text-white font-semibold">
                    Fuad Aliy
                  </span>{" "}
                  jechuun studentii IT waggaa 4ffaa{" "}
                  <span className="text-sky-400 font-semibold">
                    Dire Dawa University (DDU)
                  </span>{" "}
                  keessatti baratu dha.
                </p>

                <p>
                  Kaayyoon isaa guddaan Afaan Oromoo keessatti barnoota
                  teknooloojii sadarkaa addunyaatti geessu uumuudha.
                  Developeroonni Afrikaa coding, AI, cybersecurity fi
                  software engineering akka salphaatti baratan irratti
                  xiyyeeffata.
                </p>

                <p>
                  Fuad systems ammayyaa kanneen akka Next.js, SaaS
                  architecture, UI/UX design, AI integration fi scalable
                  applications ijaaruun irratti hojjechaa jira.
                </p>

                <p>
                  OromoTech Hub project qofa miti — movement guddaa
                  developeroota Oromoo fi Afrikaa gara technology future
                  keessatti akka hirmaatan taasisu dha.
                </p>

                <p>
                  Vision isaa guddaan platformii technology education
                  premium kan Afrikaa keessaa tokko ijaaruu fi developeroota
                  kumaatamaan lakkaa’aman gara success geessuudha.
                </p>

              </div>

            </div>

          </div>

          {/* right cards */}
          <div className="space-y-6">

            {[
              {
                icon: <Globe className="w-5 h-5 text-sky-400" />,
                title: "Vision Addunyaa",
                desc: "Developeroota Afrikaa sadarkaa addunyaatti dorgoman uumuuf.",
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-sky-400" />,
                title: "Skills Dhugaa",
                desc: "Coding, cybersecurity, AI systems fi scalable SaaS applications irratti xiyyeeffata.",
              },
              {
                icon: <Layers3 className="w-5 h-5 text-sky-400" />,
                title: "2026 Premium Experience",
                desc: "Modern animations, responsive UI fi premium futuristic design waliin ijaarame.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 hover:border-sky-400/30 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-sky-500 to-blue-600 p-12 text-black text-center shadow-2xl shadow-sky-500/20">

          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.2),transparent_60%)]" />

          <div className="relative z-10">

            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Gara Fuulduraatti Ijaari 🚀
            </h2>

            <p className="text-lg mb-8 max-w-2xl mx-auto">
              OromoTech Hub waliin software engineering, AI,
              cybersecurity fi web development ammayyaa keessatti
              imala kee jalqabi.
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-7 py-4 bg-black text-white rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Account Uumi
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

        </div>

      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-white/10 py-12 text-center text-gray-500 text-sm relative">

        <div className="mb-3 text-white font-semibold">
          OromoTech Hub
        </div>

        <p>
          © {new Date().getFullYear()} OromoTech Hub. Mirgi hundi seeraan eegama.
        </p>

        <p className="mt-2 text-gray-600">
          Designed & Developed by Fuad Aliy
        </p>

      </footer>

    </div>
  );
}