import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | OromoTech Hub",
  description: "OromoTech Hub waa'ee isaa baradhu.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <Link href="/" className="text-xl font-extrabold text-green-600 tracking-tight">
          OromoTech Hub
        </Link>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/courses" className="text-gray-600 hover:text-green-600 transition">Courses</Link>
          <Link href="/login" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Login</Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-black text-gray-900 mb-6">
          🌍 Waa'ee <span className="text-green-600">OromoTech Hub</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          OromoTech Hub dargaggoota Oromoo fi Afaan Oromoo dubbatanif teeknoolojii fi koodingii barachuuf carraa salphaa fi mijataa uumuuf hundaa'e.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Koorsiiwwan keenya Afaan Oromootiin dhiyaatu, karaa salphaa fi hubachuu salphatti barsiisu. Beekumsa kanaan duraa tokko malee barumsa jalqabuu ni dandeessa.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Pirojektiin kun barsiisa sadarkaa olaanaa (Senior Project) irratti hunda'e — garuu hawwiin isaa guddaa dha: biyyaa keenyaaf tekinoloojii fiduu.
        </p>

        <Link
          href="/signup"
          className="mt-12 inline-block bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-green-200 hover:scale-105 transform transition"
        >
          Barumsa Jalqabi →
        </Link>
      </main>
    </div>
  );
}
