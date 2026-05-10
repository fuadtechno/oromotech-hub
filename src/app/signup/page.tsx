"use client";

import { useState } from "react";
import Link from "next/link";
import { auth, db } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { useRouter } from "next/navigation";

import {
  CheckCircle,
  AlertTriangle,
  Loader2,
  Sparkles,
} from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // SIGNUP
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    // PASSWORD VALIDATION
    if (password.length < 6) {
      setError("Password-ni characters 6 gadi ta'uu hin qabu.");
      return;
    }

    setLoading(true);

    try {
      // FIREBASE AUTH
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      // PROFILE UPDATE
      await updateProfile(user, {
        displayName: name,
      });

      // FIRESTORE SAVE
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        fullName: name,
        email: email,
        role: "student",
        points: 0,
        enrolledCourses: [],
        createdAt: serverTimestamp(),
      });

      // REDIRECT
      router.push("/dashboard");

    } catch (err: any) {
      console.error("Signup Error:", err);

      if (err.code === "auth/email-already-in-use") {
        setError("Email kun kanaan dura galmaa'ameera.");
      } else if (err.code === "auth/weak-password") {
        setError("Password-ni kee baay'ee laafaadha.");
      } else {
        setError(
          "Galmeen hin milkoofne. Maaloo intarneetii kee check godhi."
        );
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1220] overflow-hidden relative px-4 py-10">

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* SKY GLOW */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-sky-500/20 blur-[160px] animate-pulse" />

        <div className="absolute bottom-[-250px] right-[-100px] w-[700px] h-[700px] bg-blue-600/20 blur-[150px] animate-pulse" />

        <div className="absolute top-[30%] left-[-100px] w-[500px] h-[500px] bg-cyan-400/10 blur-[130px] animate-pulse" />

        {/* OCEAN WAVES */}
        <div className="absolute bottom-0 left-0 w-full h-[300px]">

          <div className="absolute bottom-0 left-0 w-[200%] h-[180px] bg-gradient-to-r from-sky-500/20 via-cyan-400/20 to-blue-600/20 blur-3xl rounded-[100%] animate-[wave_12s_linear_infinite]" />

          <div className="absolute bottom-10 left-[-20%] w-[180%] h-[140px] bg-gradient-to-r from-blue-500/10 via-sky-400/10 to-cyan-300/10 blur-2xl rounded-[100%] animate-[wave_18s_linear_infinite]" />

        </div>

        {/* CLOUDS */}
        <div className="absolute top-20 left-[-200px] animate-[cloud_40s_linear_infinite]">
          <div className="w-72 h-24 bg-white/10 blur-2xl rounded-full" />
        </div>

        <div className="absolute top-52 left-[-300px] animate-[cloud_55s_linear_infinite]">
          <div className="w-96 h-28 bg-sky-200/10 blur-3xl rounded-full" />
        </div>

        <div className="absolute top-80 left-[-250px] animate-[cloud_48s_linear_infinite]">
          <div className="w-80 h-24 bg-white/5 blur-2xl rounded-full" />
        </div>

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      {/* ===== MAIN CARD ===== */}
      <div className="w-full max-w-6xl rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-sky-500/10 grid md:grid-cols-2 relative">

        {/* ===== LEFT SIDE ===== */}
        <div className="relative overflow-hidden p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-sky-500/20 to-blue-600/20 border-r border-white/10">

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-sky-400/20 rounded-full blur-[120px]" />

          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]" />

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs text-gray-300 mb-8 w-fit animate-pulse">
            <Sparkles className="w-4 h-4 text-sky-400" />
            Premium 2026 Learning Platform
          </div>

          {/* LOGO */}
          <div className="flex items-center gap-4 mb-8">

            <div className="relative">
              <div className="absolute inset-0 bg-sky-400 blur-xl opacity-60" />

              <div className="relative w-16 h-16 rounded-3xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-2xl font-black shadow-2xl shadow-sky-500/30">
                O
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-black tracking-tight text-white">
                OromoTech Hub
              </h1>

              <p className="text-sky-200 text-sm">
                SaaS Learning Platform
              </p>
            </div>

          </div>

          {/* TEXT */}
          <h2 className="text-5xl font-black leading-tight text-white">
            Future
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
              Developer
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg">
            Maatii OromoTech Hub keessatti makamuun coding,
            AI, cybersecurity fi software engineering
            premium experience waliin baradhu.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-4">

            {[
              "Koorsii Afaan Oromoo",
              "Projects Real-World",
              "AI Powered Learning",
            ].map((text, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 hover:border-sky-400/40 hover:translate-x-2 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 flex items-center justify-center">
                  <CheckCircle className="text-sky-300" />
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    {text}
                  </h4>

                  <p className="text-sm text-gray-400">
                    Modern premium learning system
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center relative">

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">

            {/* HEADER */}
            <div className="mb-10">
              <h2 className="text-4xl font-black text-white mb-3">
                Account Uumi 🚀
              </h2>

              <p className="text-gray-400 text-lg">
                OromoTech Hub keessatti galmaa'uun
                barnoota ammayyaa jalqabi.
              </p>
            </div>

            {/* ERROR */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-300 p-4 rounded-2xl mb-6 text-sm font-medium backdrop-blur-xl flex items-center gap-2">
                <AlertTriangle size={18} />
                {error}
              </div>
            )}

            {/* FORM */}
            <form
              onSubmit={handleSignup}
              className="space-y-6"
            >

              {/* NAME */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Maqaa Guutuu
                </label>

                <input
                  type="text"
                  placeholder="Fuad Aliy"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full rounded-2xl py-4 font-black text-black bg-gradient-to-r from-sky-400 to-blue-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-500/30 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 ${
                  loading
                    ? "opacity-70 cursor-not-allowed"
                    : ""
                }`}
              >
                {loading ? (
                  <>
                    <Loader2
                      className="animate-spin"
                      size={20}
                    />
                    Galmaa'aa Jira...
                  </>
                ) : (
                  "Account Uumi"
                )}
              </button>

            </form>

            {/* LOGIN */}
            <p className="text-sm mt-10 text-center text-gray-400 font-medium">
              Account qabduu?{" "}

              <Link
                href="/login"
                className="text-sky-400 font-bold hover:text-sky-300 transition"
              >
                Seeni
              </Link>
            </p>

          </div>

        </div>

      </div>

      {/* ===== ANIMATIONS ===== */}
      <style jsx global>{`
        @keyframes cloud {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(160vw);
          }
        }

        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
      `}</style>

    </div>
  );
}