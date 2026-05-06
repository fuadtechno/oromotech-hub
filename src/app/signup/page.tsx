"use client";

import { useState } from "react";
import Link from "next/link";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore"; 
import { useRouter } from "next/navigation";
import { CheckCircle, AlertTriangle, Loader2 } from "lucide-react"; // Icons for professional look

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation: Password characters 6 gadi yoo ta'e
    if (password.length < 6) {
      setError("Password-ni characters 6 gadi ta'uu hin qabu.");
      return;
    }

    setLoading(true);

    try {
      // 1. Firebase Auth irratti user uumuu
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Maqaa isaa profile isaa irratti dabaluu
      await updateProfile(user, { displayName: name });

      // 3. Firestore Database irratti odeeffannoo barataa save gochuu
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        fullName: name,
        email: email,
        role: "student",
        points: 0,           // Senior project keetiif tracking
        enrolledCourses: [], // List of courses
        createdAt: serverTimestamp(),
      });

      // 4. Gara Dashboard qaceelchuu
      router.push("/dashboard");
    } catch (err: any) {
      console.error("Signup Error:", err);
      if (err.code === 'auth/email-already-in-use') {
        setError("Email kanaan kanaan dura galmaa'ameera.");
      } else if (err.code === 'auth/weak-password') {
        setError("Password-ni kee baay'ee laafaadha.");
      } else {
        setError("Galmeen hin milkoofne. Maaloo intarneetii kee check godhi.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-[2.5rem] overflow-hidden grid md:grid-cols-2 border border-gray-100">

        {/* LEFT SIDE: Branding */}
        <div className="bg-green-600 text-white p-12 flex flex-col justify-center relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500 rounded-full opacity-50" />
          
          <h1 className="text-4xl font-black mb-4 tracking-tight z-10">OromoTech Hub</h1>
          <p className="text-xl opacity-90 leading-relaxed font-light z-10">
            Maatii OromoTech Hub-tti makamuun ogummaa koodingii kee Afaan Oromootiin guddisi.
          </p>
          
          <ul className="mt-10 space-y-5 z-10">
            {[
              "Koorsiiwwan Afaan Oromoo",
              "Hojii qabatamaa (Projects)",
              "Madda Barnoota Bilisaa"
            ].map((text, i) => (
              <li key={i} className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-green-200" />
                <span className="text-sm font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Galmaa'i</h2>
            <p className="text-gray-500 text-sm mt-1">Account haaraa uumuun barumsa jalqabi.</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl mb-6 text-sm border border-red-100 flex items-center gap-2 animate-shake">
              <AlertTriangle size={18} />
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">Maqaa Guutuu</label>
              <input
                type="text"
                placeholder="Fakkeenya: Caalaa Beenya"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-gray-50/50"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">Email</label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-gray-50/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-gray-50/50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-green-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-100 hover:bg-green-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Galmaa'aa jira...
                </>
              ) : (
                "Account Uumi"
              )}
            </button>
          </form>

          <p className="text-sm mt-8 text-center text-gray-500 font-medium">
            Account qabduu?{" "}
            <Link href="/login" className="text-green-600 font-bold hover:underline">
              Seeni
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}