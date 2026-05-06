"use client";

import { useState } from "react"; 
import { auth } from "@/lib/firebase"; 
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const router = useRouter();

  // 1. Email & Password Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard"); 
    } catch (err: any) {
      // Dogoggora Firebase irraa dhufe qulqulleessuuf
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
        setError("Email ykn Password dogoggora.");
      } else {
        setError("Seenuun hin danda'amne. Maaloo irra deebi'ii yaali.");
      }
    } finally {
      setLoading(false);
    }
  };

  // 2. Google Login
  const handleGoogleLogin = async (e: React.MouseEvent) => {
    e.preventDefault(); // Form akka submit hin goone ittisa
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (err: any) {
      setError("Google Login hin milkoofne.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2 border border-gray-100">

        {/* LEFT SIDE - Info */}
        <div className="bg-green-600 text-white p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          <h1 className="text-4xl font-black mb-4">OromoTech Hub</h1>
          <p className="text-xl opacity-90 leading-relaxed font-light">
            Ogummaa koodingii Afaan Oromootiin baradhuu jireenya kee jijjiiri.
          </p>
          <div className="mt-10 flex items-center space-x-3 bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
            <span className="text-2xl">🚀</span>
            <p className="text-sm font-medium">Baga nagaan deebite! Maaloo account keetti seeni.</p>
          </div>
        </div>

        {/* RIGHT SIDE - Form */}
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Seeni</h2>
          <p className="text-gray-500 mb-8">Odeeffannoo kee galchiitii barumsa itti fufi.</p>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-6 text-sm font-medium border border-red-100">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-green-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-100 hover:bg-green-700 transition active:scale-95 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? "Seenaa jira..." : "Seeni"}
            </button>

            <div className="relative flex items-center justify-center my-8">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-white px-4 text-xs text-gray-400 uppercase tracking-widest absolute">ykn</span>
            </div>

            <button
              onClick={handleGoogleLogin}
              type="button"
              className="w-full border-2 border-gray-100 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-gray-50 transition active:scale-95"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/action/google.svg" className="w-5 h-5" alt="Google" />
              <span>Google'n Itti Fufi</span>
            </button>
          </form>

          <p className="text-sm mt-10 text-center text-gray-500 font-medium">
            Account hin qabduu?{" "}
            <Link href="/signup" className="text-green-600 font-bold hover:underline">
              Galmaa'i
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}