import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | OromoTech Hub",
  description: "OromoTech Hub waa'ee isaa baradhu.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sky-50 overflow-x-hidden">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <Link
          href="/"
          className="text-2xl font-extrabold text-sky-600 tracking-tight"
        >
          OromoTech Hub
        </Link>

        <div className="space-x-6 text-sm font-medium">
          <Link
            href="/courses"
            className="text-gray-600 hover:text-sky-600 transition"
          >
            Courses
          </Link>

          <Link
            href="/login"
            className="bg-sky-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-md"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-600 via-blue-700 to-slate-900 py-28 px-6 text-center text-white">

        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-lg px-5 py-2 rounded-full text-sm font-semibold mb-8">
            🌍 OromoTech Hub Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Afaan Oromootiin <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-300">
              Teknoolojii Ijaarru
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-sky-100 text-xl leading-9">
            Platform barnootaa ammayyaa coding, AI, software engineering,
            cybersecurity, fi digital innovation Afaan Oromootiin barsiisuuf
            ijaarame.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-24">

        {/* Intro Card */}
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-sky-100 border border-sky-100 p-10 md:p-16">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>

              <div className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-black tracking-wide mb-6">
                ABOUT OROMOTECH HUB
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                Teknooloojii
                <span className="text-sky-600"> Afaan Oromootti</span>
              </h2>

              <div className="space-y-6 text-gray-700 text-lg leading-9">

                <p>
                  OromoTech Hub jechuun platform
                  dargaggoota Oromoo fi Afaan Oromoo dubbatanif
                  coding, AI, software engineering,
                  fi teknooloojii ammayyaa barachuuf ijaarame dha.
                </p>

                <p>
                  Kaayyoon isaa guddaan teknooloojii
                  salphisuun Afaan Oromootiin dhiyeessuudha.
                  Namni kamiyyuu background teknooloojii osoo hin qabin
                  coding jalqabuu akka danda'u ni deeggarra.
                </p>

                <p>
                  Platform kun tutorials, exercises,
                  quizzes, live coding practice,
                  fi AI-powered learning system
                  of keessaa qaba.
                </p>

              </div>

            </div>

            {/* Right */}
            <div className="space-y-6">

              <div className="bg-sky-50 border border-sky-100 rounded-3xl p-8">
                <h3 className="text-2xl font-black text-sky-700 mb-4">
                  🎯 Vision
                </h3>

                <p className="text-gray-700 leading-8">
                  Afrikaa keessatti platform barnoota
                  teknooloojii Afaan Oromoo sadarkaa addunyaa ijaaruu.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8">
                <h3 className="text-2xl font-black text-blue-700 mb-4">
                  🚀 Mission
                </h3>

                <p className="text-gray-700 leading-8">
                  Dargaggoota coding, AI, cybersecurity,
                  fi software development salphaatti akka baratan gochuu.
                </p>
              </div>

              <div className="bg-slate-900 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-black mb-4">
                  🌍 Future Goal
                </h3>

                <p className="text-slate-300 leading-8">
                  OromoTech Hub gara startup technology
                  company guddaatti guddisuun
                  developers Afrikaa waliin ecosystem
                  innovation ijaaruu.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Founder Story */}
        <section className="mt-24">

          <div className="text-center mb-16">
            <p className="text-sky-600 font-black uppercase tracking-[0.3em] mb-4">
              Founder Story
            </p>

            <h2 className="text-5xl font-black text-gray-900">
              Waa'ee Fuad Aliyi
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-sky-100">
              <h3 className="text-3xl font-black text-sky-700 mb-6">
                👨‍💻 Developer
              </h3>

              <div className="space-y-5 text-gray-700 leading-8 text-lg">

                <p>
                  Fuad Aliyi barataa IT waggaa 4ffaa
                  Dire Dawa University keessatti barachaa jiru.
                </p>

                <p>
                  Full-stack development, AI systems,
                  cloud technologies, fi startup innovation irratti
                  fedhii guddaa qaba.
                </p>

                <p>
                  Ofiin barachuun, GitHub, YouTube,
                  documentation, fi AI tools fayyadamuun
                  dandeettii software engineering guddisaa jira.
                </p>

              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-600 to-blue-800 rounded-3xl p-10 text-white shadow-2xl">

              <h3 className="text-3xl font-black mb-6">
                💡 Why OromoTech Hub?
              </h3>

              <div className="space-y-5 text-sky-100 leading-8 text-lg">

                <p>
                  Teknooloojii Afaan Oromoo keessatti
                  babal’isuuf.
                </p>

                <p>
                  Dargaggoonni coding fi AI salphaatti
                  akka baratan gochuuf.
                </p>

                <p>
                  Startup ecosystem Afrikaa keessaa
                  ijaaruu fi developers wal qunnamsiisuuf.
                </p>

                <p>
                  Platform SaaS sadarkaa addunyaa
                  Afrikaa keessaa uumuuf.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Features */}
        <section className="mt-28">

          <div className="text-center mb-16">
            <p className="text-sky-600 font-black uppercase tracking-[0.3em] mb-4">
              Platform Features
            </p>

            <h2 className="text-5xl font-black text-gray-900">
              Maal Of keessaa qaba?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100 hover:-translate-y-2 transition">
              <div className="text-5xl mb-5">💻</div>

              <h3 className="text-2xl font-black text-gray-900 mb-4">
                Coding Courses
              </h3>

              <p className="text-gray-600 leading-7">
                HTML, CSS, JavaScript, React,
                Next.js fi technologies hedduu.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100 hover:-translate-y-2 transition">
              <div className="text-5xl mb-5">🤖</div>

              <h3 className="text-2xl font-black text-gray-900 mb-4">
                AI Learning
              </h3>

              <p className="text-gray-600 leading-7">
                Artificial Intelligence fi AI-powered
                learning systems.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100 hover:-translate-y-2 transition">
              <div className="text-5xl mb-5">🛡️</div>

              <h3 className="text-2xl font-black text-gray-900 mb-4">
                Cybersecurity
              </h3>

              <p className="text-gray-600 leading-7">
                Security, ethical hacking,
                fi digital protection.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100 hover:-translate-y-2 transition">
              <div className="text-5xl mb-5">🚀</div>

              <h3 className="text-2xl font-black text-gray-900 mb-4">
                Startup Innovation
              </h3>

              <p className="text-gray-600 leading-7">
                SaaS projects, startup systems,
                fi digital entrepreneurship.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="mt-28">

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-sky-700 to-blue-900 p-14 text-center text-white shadow-2xl">

            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/3 w-72 h-72 bg-sky-300 rounded-full blur-3xl"></div>
            </div>

            <div className="relative">

              <h2 className="text-5xl font-black mb-6">
                Barumsa Jalqabi
              </h2>

              <p className="max-w-2xl mx-auto text-sky-100 text-xl leading-9 mb-10">
                OromoTech Hub waliin coding, AI,
                fi software engineering Afaan Oromootiin baradhu.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5">

                <Link
                  href="/signup"
                  className="bg-white text-sky-700 px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition"
                >
                  Barumsa Jalqabi →
                </Link>

                <Link
                  href="/courses"
                  className="border border-white/30 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition"
                >
                  Courses Ilaali
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="relative mt-24 bg-gradient-to-br from-sky-900 via-blue-900 to-slate-950 text-white overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-sky-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">

          {/* Top Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

            {/* Brand */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-black tracking-tight">
                  OROMOTECH
                  <span className="text-sky-400"> HUB</span>
                </h2>

                <div className="w-20 h-1 bg-sky-400 rounded-full mt-3"></div>
              </div>

              <p className="text-sky-100 leading-8 text-[17px]">
                Platform coding, AI, software engineering,
                fi innovation Afaan Oromootiin barsiisu.
              </p>

              <p className="text-sky-200 leading-8 text-[16px]">
                Kaayyoon keenya guddaan teknooloojii
                Afrikaa keessatti babal’isuu dha.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black">
                Quick Links
              </h3>

              <div className="flex flex-col space-y-4 text-sky-100">

                <Link href="/" className="hover:text-sky-300 transition">
                  Home
                </Link>

                <Link href="/courses" className="hover:text-sky-300 transition">
                  Courses
                </Link>

                <Link href="/login" className="hover:text-sky-300 transition">
                  Login
                </Link>

                <Link href="/signup" className="hover:text-sky-300 transition">
                  Signup
                </Link>

              </div>
            </div>

            {/* Vision */}
            <div className="space-y-6">

              <h3 className="text-2xl font-black">
                Vision
              </h3>

              <div className="space-y-5">

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h4 className="font-black text-sky-300 mb-2">
                    Mission
                  </h4>

                  <p className="text-sky-100 text-sm leading-7">
                    Coding fi AI Afaan Oromootiin
                    salphaatti barsiisuu.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h4 className="font-black text-sky-300 mb-2">
                    Future
                  </h4>

                  <p className="text-sky-100 text-sm leading-7">
                    Startup technology company
                    guddaa Afrikaa ijaaruu.
                  </p>
                </div>

              </div>

            </div>

            {/* Founder */}
            <div className="space-y-6">

              <h3 className="text-2xl font-black">
                Founder
              </h3>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg">

                <p className="text-sky-300 uppercase tracking-[0.3em] text-xs font-black mb-3">
                  Founder & Developer
                </p>

                <h4 className="text-2xl font-black mb-4">
                  Fuad Aliyi
                </h4>

                <p className="text-sky-100 leading-7 text-sm">
                  Barataa IT waggaa 4ffaa
                  Dire Dawa University.
                </p>

                <div className="mt-6 space-y-3">

                  <a
                    href="mailto:fuadaliyi066@gmail.com"
                    className="block text-sky-200 hover:text-white transition"
                  >
                    fuadaliyi066@gmail.com
                  </a>

                  <p className="text-sky-200 text-sm">
                    Dire Dawa, Ethiopia
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Divider */}
          <div className="my-14 border-t border-white/10"></div>

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