import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | OromoTech Hub",
  description: "OromoTech Hub privacy policy fi iccitii odeeffannoo kee.",
};

export default function PrivacyPage() {
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
          🔒 Privacy <span className="text-green-600">Policy</span>
        </h1>

        <div className="space-y-8 text-gray-600 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Odeeffannoo Sassaabnu</h2>
            <p>Maqaa, email, fi odeeffannoo account kee qofa sassaabna. Odeeffannoo kee namoota sadaffaaf hin gurgurinnu.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Akkamitti Fayyadamna</h2>
            <p>Odeeffannoon kee barumsa kee fooyyessuu fi account keef qofa fayyadamna. Email kee yadannoo barumsa barbaachisaa erguuf ni fayyadamna.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Nageenyaa (Security)</h2>
            <p>Firebase Authentication fayyadamuun password kee encryption cimaa waliin ni eegna. Password kee kaayyoo biroof hin ilaallu.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Quunnamtii</h2>
            <p>Gaaffii yoo qabaatte, dursee <Link href="/about" className="text-green-600 hover:underline">About</Link> fuula keenya ilaali.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
