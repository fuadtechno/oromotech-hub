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
    <div className="min-h-screen flex flex-col bg-[#f7fbff] overflow-x-hidden relative">

      {/* PREMIUM BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-300/20 rounded-full blur-3xl"></div>

        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-green-200/20 rounded-full blur-3xl"></div>

      </div>

      {/* 1. NAVBAR - Component irraa dhufe */}
      <Navbar />

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-cyan-50"></div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-300/30 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-300/20 blur-3xl rounded-full"></div>

        <div className="relative container mx-auto px-6 py-32">

          <div className="max-w-5xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-emerald-200 bg-white/80 backdrop-blur-xl shadow-sm mb-8">

              <span className="text-lg">🚀</span>

              <span className="text-sm font-bold text-emerald-700 tracking-wide">
                 oromotech-hub LEARNING PLATFORM
              </span>

            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">

              Afaan Oromootiin <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-cyan-600">
                Teknoolojii Baradhu
              </span>

            </h1>

            {/* Paragraph */}
            <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-10">

              OromoTech Hub waliin coding, AI, cybersecurity,
              software engineering fi web development Afaan Oromootiin
              salphatti baradhu. Dandeettii kee gara sadarkaa addunyaatti guddisi.

            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

              <Link
                href="/signup"
                className="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-emerald-200 hover:scale-105 transition duration-300"
              >
                Barumsa Jalqabi →
              </Link>

              <Link
                href="/courses"
                className="bg-white border border-gray-200 text-gray-800 px-10 py-5 rounded-2xl font-bold text-lg hover:border-emerald-300 hover:text-emerald-600 transition"
              >
                Courses Ilaali
              </Link>

            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-24">

              <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-8 shadow-lg">

                <h3 className="text-5xl font-black text-emerald-600">
                  10+
                </h3>

                <p className="mt-3 text-gray-600 font-medium">
                  Coding Courses
                </p>

              </div>

              <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-8 shadow-lg">

                <h3 className="text-5xl font-black text-cyan-600">
                  100%
                </h3>

                <p className="mt-3 text-gray-600 font-medium">
                  Afaan Oromoo
                </p>

              </div>

              <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-8 shadow-lg">

                <h3 className="text-5xl font-black text-green-600">
                  24/7
                </h3>

                <p className="mt-3 text-gray-600 font-medium">
                  Online Learning
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TRUSTED TECHNOLOGIES */}
      <section className="py-16 border-y border-gray-100 bg-white/70 backdrop-blur-xl">

        <div className="container mx-auto px-6">

          <div className="text-center mb-10">

            <p className="uppercase tracking-[0.3em] text-gray-400 font-black text-sm">
              MODERN TECHNOLOGIES
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">

            <div className="bg-white rounded-3xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-xl transition">
              <div className="text-4xl mb-3">⚛️</div>
              <p className="font-black text-gray-800">React</p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-xl transition">
              <div className="text-4xl mb-3">▲</div>
              <p className="font-black text-gray-800">Next.js</p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-xl transition">
              <div className="text-4xl mb-3">🎨</div>
              <p className="font-black text-gray-800">Tailwind</p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-xl transition">
              <div className="text-4xl mb-3">🤖</div>
              <p className="font-black text-gray-800">AI</p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-xl transition">
              <div className="text-4xl mb-3">☁️</div>
              <p className="font-black text-gray-800">Cloud</p>
            </div>

          </div>

        </div>

      </section>

      {/* 3. TOP COURSES SECTION */}
      <section className="relative py-28">

        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">

            <div>

              <p className="text-emerald-600 font-black uppercase tracking-[0.3em] mb-3">
                Popular Courses
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                🔥 Koorsiiwwan Beekamoo
              </h2>

            </div>

            <Link
              href="/courses"
              className="text-emerald-600 font-black text-lg hover:translate-x-1 transition"
            >
              Hunda ilaali →
            </Link>

          </div>

          {/* Courses */}
          <div className="grid md:grid-cols-3 gap-8">

            {topCourses.map((course, i) => (

              <div
                key={i}
                className="group hover:-translate-y-3 transition duration-500"
              >

                <CourseCard
                  title={course.title}
                  desc={course.desc}
                  link={course.link}
                  icon={course.icon}
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="py-32 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/40 to-white"></div>

        <div className="relative container mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <p className="uppercase tracking-[0.3em] text-emerald-600 font-black mb-5">
              Learning Experience
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">

              Modern Learning
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                {" "}Dashboard
              </span>

            </h2>

            <p className="mt-8 text-xl text-gray-600 leading-10">

              Students dashboard smart, modern,
              fi user-friendly ta'e keessatti coding,
              quizzes, exercises fi live practice argatu.

            </p>

          </div>

          <div className="relative max-w-6xl mx-auto">

            <div className="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-[4rem]"></div>

            <div className="relative bg-white/80 backdrop-blur-2xl border border-white shadow-2xl rounded-[3rem] overflow-hidden">

              <div className="flex items-center gap-3 px-8 py-5 border-b border-gray-100 bg-white/70">

                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>

                <div className="ml-4 bg-gray-100 rounded-full px-5 py-2 text-sm text-gray-500">
                  app.oromotechhub.com/dashboard
                </div>

              </div>

              <div className="grid lg:grid-cols-4">

                {/* Sidebar */}
                <div className="bg-gray-950 text-white p-8 space-y-6">

                  <h3 className="text-2xl font-black">
                    OromoTech
                  </h3>

                  <div className="space-y-4 text-gray-300">

                    <div className="bg-white/10 rounded-2xl px-5 py-4">
                      📚 Courses
                    </div>

                    <div className="px-5 py-4">
                      ⚡ Practice
                    </div>

                    <div className="px-5 py-4">
                      🎯 Progress
                    </div>

                    <div className="px-5 py-4">
                      🤖 AI Tutor
                    </div>

                  </div>

                </div>

                {/* Main */}
                <div className="lg:col-span-3 p-10">

                  <div className="grid md:grid-cols-3 gap-6 mb-10">

                    <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6">

                      <h4 className="text-4xl font-black text-emerald-600">
                        12
                      </h4>

                      <p className="mt-2 text-gray-600">
                        Active Courses
                      </p>

                    </div>

                    <div className="bg-cyan-50 border border-cyan-100 rounded-3xl p-6">

                      <h4 className="text-4xl font-black text-cyan-600">
                        87%
                      </h4>

                      <p className="mt-2 text-gray-600">
                        Learning Progress
                      </p>

                    </div>

                    <div className="bg-violet-50 border border-violet-100 rounded-3xl p-6">

                      <h4 className="text-4xl font-black text-violet-600">
                        24/7
                      </h4>

                      <p className="mt-2 text-gray-600">
                        AI Support
                      </p>

                    </div>

                  </div>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">

                      <div className="flex items-center justify-between mb-6">

                        <div className="text-4xl">🌐</div>

                        <div className="bg-emerald-100 text-emerald-700 text-xs font-black px-3 py-1 rounded-full">
                          Beginner
                        </div>

                      </div>

                      <h3 className="text-2xl font-black text-gray-900 mb-3">
                        HTML Basics
                      </h3>

                      <p className="text-gray-600 leading-8">
                        Modern web structure Afaan Oromootiin baradhu.
                      </p>

                    </div>

                    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">

                      <div className="flex items-center justify-between mb-6">

                        <div className="text-4xl">⚡</div>

                        <div className="bg-cyan-100 text-cyan-700 text-xs font-black px-3 py-1 rounded-full">
                          Popular
                        </div>

                      </div>

                      <h3 className="text-2xl font-black text-gray-900 mb-3">
                        JavaScript
                      </h3>

                      <p className="text-gray-600 leading-8">
                        Dynamic web applications ijaaruu baradhu.
                      </p>

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
      <section className="py-28 bg-gradient-to-b from-white to-emerald-50/40">

        <div className="container mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <p className="uppercase tracking-[0.3em] text-emerald-600 font-black mb-4">
              Student Stories
            </p>

            <h2 className="text-5xl font-black text-gray-900">
              Namoonni Maal jedhu?
            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="bg-white border border-gray-100 rounded-[2rem] p-10 shadow-lg">

              <div className="flex items-center gap-1 text-yellow-400 text-2xl mb-6">
                ★★★★★
              </div>

              <p className="text-gray-600 text-lg leading-9">
                “Afaan Oromootiin coding barachuun yeroo jalqabaaf salphaa natti ta'e.”
              </p>

            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-green-500 text-white rounded-[2rem] p-10 shadow-2xl">

              <div className="flex items-center gap-1 text-2xl mb-6">
                ★★★★★
              </div>

              <p className="text-emerald-50 text-lg leading-9">
                “UI fi learning system isaa modern startup tokko fakkaata.”
              </p>

            </div>

            <div className="bg-white border border-gray-100 rounded-[2rem] p-10 shadow-lg">

              <div className="flex items-center gap-1 text-yellow-400 text-2xl mb-6">
                ★★★★★
              </div>

              <p className="text-gray-600 text-lg leading-9">
                “Projects fi practice system isaa baay’ee professional dha.”
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