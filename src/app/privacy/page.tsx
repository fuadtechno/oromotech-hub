"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Cookie,
  Globe,
  ArrowRight,
  Sparkles,
  Users,
  Server,
  FileText,
  RefreshCw,
  Menu,
  X,
} from "lucide-react";

export default function PrivacyPage() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Lock className="h-6 w-6 text-cyan-300" />,
      title: "Information We Collect",
      desc: "We collect minimal data like account info, learning progress, device info, and preferences to personalize your experience.",
    },
    {
      icon: <Eye className="h-6 w-6 text-cyan-300" />,
      title: "How We Use Data",
      desc: "Your data is used only to improve learning experience, platform performance, personalization, and security.",
    },
    {
      icon: <Cookie className="h-6 w-6 text-cyan-300" />,
      title: "Cookies & Tracking",
      desc: "Cookies help us keep you signed in, remember preferences, analyze usage, and improve usability.",
    },
    {
      icon: <Shield className="h-6 w-6 text-cyan-300" />,
      title: "Security",
      desc: "We use encryption, secure authentication, firewalls, and modern cloud infrastructure to protect your data.",
    },
    {
      icon: <Database className="h-6 w-6 text-cyan-300" />,
      title: "Your Rights",
      desc: "You can access, update, export, or delete your personal data anytime from your account settings.",
    },
    {
      icon: <Globe className="h-6 w-6 text-cyan-300" />,
      title: "Ethical Policy",
      desc: "We never sell user data. Transparency, safety, and trust are at the core of OromoTech Hub.",
    },
  ];

  const extraSections = [
    {
      icon: <Server className="h-6 w-6 text-cyan-300" />,
      title: "Data Retention",
      desc: "We keep your data only as long as necessary for services or legal requirements.",
    },
    {
      icon: <Users className="h-6 w-6 text-cyan-300" />,
      title: "Third-Party Services",
      desc: "We use trusted providers for hosting, analytics, and authentication.",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-cyan-300" />,
      title: "Policy Updates",
      desc: "We may update this policy and notify users of major changes.",
    },
    {
      icon: <FileText className="h-6 w-6 text-cyan-300" />,
      title: "Children’s Privacy",
      desc: "We do not knowingly collect data from children without consent.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all
        ${
          scrolled
            ? "bg-[#030712]/90 backdrop-blur-xl border-white/10 shadow-lg"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

          <Link href="/" className="text-xl font-black text-white">
            OromoTech Hub
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="text-gray-300 hover:text-cyan-300">
              Home
            </Link>

            <Link href="/courses" className="text-gray-300 hover:text-cyan-300">
              Courses
            </Link>

            <Link
              href="/get-started"
              className="bg-cyan-400 px-4 py-2 font-bold text-black rounded-xl"
            >
              Get Started
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all border-t border-white/10
          ${
            open
              ? "max-h-96 opacity-100 bg-[#030712]/95 backdrop-blur-xl"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 py-4 gap-4 text-sm">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-cyan-300"
            >
              🏠 Home – Start here
            </Link>

            <Link
              href="/courses"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-cyan-300"
            >
              📚 Courses – Learn skills
            </Link>

            <Link
              href="/get-started"
              onClick={() => setOpen(false)}
              className="bg-cyan-400 text-black px-4 py-2 rounded-xl font-bold w-fit"
            >
              🚀 Get Started
            </Link>

          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative pt-40 text-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs text-cyan-300">
          <Sparkles className="h-4 w-4" />
          Privacy • Security • Trust
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-black">
          Privacy Policy
          <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            OromoTech Hub
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-gray-400 leading-8">
          Your privacy is our foundation. We protect your data using modern encryption
          and transparent systems.
        </p>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <div
              key={i}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/30 border border-white/10">
                {item.icon}
              </div>

              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-gray-400 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXTRA ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          {extraSections.map((item, i) => (
            <div
              key={i}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
            >
              <div className="mb-4 flex items-center gap-3">
                {item.icon}
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p className="text-gray-400 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="rounded-[3rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-12 text-center backdrop-blur-3xl">

          <h2 className="text-4xl md:text-5xl font-black">
            Need Help With Privacy?
          </h2>

          <p className="mt-5 text-gray-300">
            Contact us anytime for account or data requests.
          </p>

          <a
            href="mailto:support@oromotech-hub.com"
            className="mt-8 inline-block text-cyan-300 font-bold text-lg"
          >
            support@oromotech-hub.com
          </a>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500 text-sm">
        <p className="text-white font-bold">OromoTech Hub</p>
        <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
      </footer>

    </div>
  );
}