import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | OromoTech Hub",
  description:
    "OromoTech Hub privacy policy fi iccitii odeeffannoo kee.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#040816] text-white overflow-hidden relative">

      {/* PREMIUM BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_40%)]"></div>

      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-2xl">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-black tracking-tight"
          >

            <span className="text-white">
              OromoTech
            </span>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {" "}Hub
            </span>

          </Link>

          <div className="flex items-center gap-4 md:gap-6 text-sm font-semibold">

            <Link
              href="/courses"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all duration-300"
            >
              Courses
            </Link>

            <Link
              href="/login"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all duration-300"
            >
              Login
            </Link>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative">

        <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-emerald-500/20 bg-white/5 backdrop-blur-xl mb-8">

            <span className="text-lg">🔒</span>

            <span className="text-sm font-black tracking-[0.2em] text-emerald-300 uppercase">
              Privacy & Security
            </span>

          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">

            Privacy
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400">
              {" "}Policy
            </span>

          </h1>

          {/* Paragraph */}
          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-10 max-w-3xl mx-auto">

            OromoTech Hub keessatti odeeffannoo kee
            nageenya olaanaa waliin eegna. Iccitiin,
            amanamummaan fi security priority keenya keessaa isa guddaadha.

          </p>

        </div>

      </section>

      {/* CONTENT */}
      <main className="relative max-w-5xl mx-auto px-6 pb-24">

        <div className="grid gap-8">

          {/* CARD 1 */}
          <section className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-10 hover:border-emerald-400/30 hover:-translate-y-1 transition-all duration-500">

            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full"></div>

            <div className="relative">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/20">
                  📁
                </div>

                <div>

                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    Odeeffannoo Sassaabnu
                  </h2>

                  <p className="text-emerald-300 text-sm mt-1">
                    Information We Collect
                  </p>

                </div>

              </div>

              <p className="text-gray-300 leading-9 text-lg">

                Maqaa, email, fi odeeffannoo account kee qofa sassaabna.
                Odeeffannoo dhuunfaa kee namoota sadaffaaf hin gurgurru,
                hin qoodnu, akkasumas security cimaa keessatti eegna.

              </p>

            </div>

          </section>

          {/* CARD 2 */}
          <section className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-10 hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-500">

            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>

            <div className="relative">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/20">
                  ⚡
                </div>

                <div>

                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    Akkamitti Fayyadamna
                  </h2>

                  <p className="text-cyan-300 text-sm mt-1">
                    How We Use Information
                  </p>

                </div>

              </div>

              <p className="text-gray-300 leading-9 text-lg">

                Odeeffannoon kee learning experience kee fooyyessuuf,
                progress tracking, authentication fi notification
                barbaachisaa qofaaf fayyadama. Spam ykn ads hin erginu.

              </p>

            </div>

          </section>

          {/* CARD 3 */}
          <section className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-2xl p-8 md:p-10 hover:border-emerald-400/30 hover:-translate-y-1 transition-all duration-500">

            <div className="absolute top-0 left-1/3 w-56 h-56 bg-emerald-400/10 blur-3xl rounded-full"></div>

            <div className="relative">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/20">
                  🛡️
                </div>

                <div>

                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    Nageenyaa (Security)
                  </h2>

                  <p className="text-emerald-300 text-sm mt-1">
                    Advanced Security Protection
                  </p>

                </div>

              </div>

              <p className="text-gray-200 leading-9 text-lg">

                Authentication system ammayyaa fi encryption cimaa
                fayyadamuun password fi data kee eegna.
                Odeeffannoo kee qaama biraaf hin kenninu.

              </p>

            </div>

          </section>

          {/* CARD 4 */}
          <section className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-10 hover:border-violet-400/30 hover:-translate-y-1 transition-all duration-500">

            <div className="absolute bottom-0 right-0 w-40 h-40 bg-violet-500/10 blur-3xl rounded-full"></div>

            <div className="relative">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-3xl shadow-lg shadow-violet-500/20">
                  📞
                </div>

                <div>

                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    Quunnamtii
                  </h2>

                  <p className="text-violet-300 text-sm mt-1">
                    Contact & Support
                  </p>

                </div>

              </div>

              <p className="text-gray-300 leading-9 text-lg">

                Gaaffii ykn yaaddoo yoo qabaatte,
                dura <Link
                  href="/about"
                  className="text-emerald-400 hover:text-cyan-400 underline underline-offset-4 transition"
                >
                  About
                </Link>{" "}
                fuula keenya ilaali ykn support keenya qunnami.

              </p>

            </div>

          </section>

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20">

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 backdrop-blur-2xl p-10 md:p-14 text-center">

            <div className="absolute top-0 left-1/3 w-72 h-72 bg-emerald-400/10 blur-3xl rounded-full"></div>

            <div className="relative">

              <p className="uppercase tracking-[0.3em] text-emerald-300 text-sm font-black mb-5">
                Trusted Learning Platform
              </p>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">

                Secure.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  {" "}Modern.
                </span>
                Reliable.

              </h2>

              <p className="mt-8 text-gray-300 text-lg leading-9 max-w-2xl mx-auto">

                OromoTech Hub keessatti privacy fi security
                technology ammayyaa irratti hundaa’e waliin eegama.

              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-5">

                <Link
                  href="/courses"
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 rounded-2xl font-bold text-white shadow-2xl shadow-emerald-500/20 hover:scale-105 transition-all duration-300"
                >
                  Explore Courses
                </Link>

                <Link
                  href="/login"
                  className="border border-white/10 bg-white/5 px-8 py-4 rounded-2xl font-bold text-white hover:bg-white/10 transition-all duration-300"
                >
                  Login
                </Link>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}