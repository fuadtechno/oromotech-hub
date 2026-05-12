"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Code2,
  Globe,
  ShieldCheck,
  Rocket,
  ArrowRight,
  Layers3,
  BrainCircuit,
  Orbit,
  Cpu,
  Binary,
  Zap,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutClient() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  const features = [
    {
      icon: <Code2 className="h-7 w-7 text-cyan-300" />,
      title: "Modern Tech Education",
      desc: "Premium engineering education with real-world systems, scalable architecture, and production-level software development.",
    },

    {
      icon: <BrainCircuit className="h-7 w-7 text-cyan-300" />,
      title: "AI Powered Learning",
      desc: "Advanced AI systems personalize learning experiences, recommendations, progress tracking, and adaptive education.",
    },

    {
      icon: <Rocket className="h-7 w-7 text-cyan-300" />,
      title: "Future Career Skills",
      desc: "Master AI engineering, Next.js, SaaS systems, cybersecurity, automation, cloud systems, and scalable technology.",
    },
  ];

  const founderCards = [
    {
      icon: <Globe className="h-5 w-5 text-cyan-300" />,
      title: "Global Vision",
      desc: "Building world-class African developers prepared for the future global technology economy.",
    },

    {
      icon: <ShieldCheck className="h-5 w-5 text-cyan-300" />,
      title: "Real Engineering",
      desc: "Focused on production-grade software engineering, AI systems, scalable infrastructure, and cybersecurity.",
    },

    {
      icon: <Layers3 className="h-5 w-5 text-cyan-300" />,
      title: "Immersive Experience",
      desc: "Futuristic interfaces, cinematic visuals, advanced interactions, and next-generation learning experiences.",
    },
  ];

  const stats = [
    ["20+", "Premium Courses"],
    ["AI", "Integrated Platform"],
    ["24/7", "Learning Access"],
    ["2026", "Next Generation"],
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* ================================================= */}
      {/* FUTURISTIC BACKGROUND */}
      {/* ================================================= */}

      <div className="fixed inset-0 -z-50 overflow-hidden">

        {/* Base */}
        <div className="absolute inset-0 bg-[#030712]" />

        {/* Tech Image */}
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          alt="Technology Background"
          fill
          priority
          className="object-cover opacity-[0.10] scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/90 via-[#030712]/85 to-[#030712]" />

        {/* Cursor Glow */}
        <div
          className="absolute inset-0 transition duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,211,238,0.12), transparent 20%)`,
          }}
        />

        {/* Aurora */}
        <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] animate-[spin_30s_linear_infinite] rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute right-[-10%] top-[20%] h-[700px] w-[700px] animate-[spin_40s_linear_infinite_reverse] rounded-full bg-blue-500/20 blur-[140px]" />

        <div className="absolute bottom-[-10%] left-[30%] h-[600px] w-[600px] animate-pulse rounded-full bg-violet-500/10 blur-[140px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.15),transparent_40%)]" />

        {/* Lines */}
        <div className="absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

        <div className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

        <div className="absolute bottom-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />

        {/* SVG Lines */}
        <svg className="absolute inset-0 h-full w-full opacity-20">
          <path
            d="M0 200 Q400 100 800 300 T1600 200"
            stroke="cyan"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* Particles */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-pulse rounded-full bg-cyan-300/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

      </div>

      {/* Floating Icons */}
      <Cpu className="absolute left-10 top-40 h-14 w-14 animate-pulse text-cyan-400/10" />

      <Binary className="absolute bottom-32 left-20 h-14 w-14 animate-pulse text-cyan-400/10" />

      <Zap className="absolute right-20 top-48 h-14 w-14 animate-pulse text-blue-400/10" />

      <Orbit className="absolute bottom-40 right-20 h-14 w-14 animate-pulse text-violet-400/10" />

      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-3xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-4">

            <div className="relative">

              <div className="absolute inset-0 rounded-2xl bg-cyan-400 blur-xl opacity-60 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 font-black shadow-2xl shadow-cyan-500/30">
                O
              </div>

            </div>

            <div>

              <h1 className="text-lg font-black tracking-wide">
                OromoTech{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Hub
                </span>
              </h1>

              <p className="text-xs text-gray-400">
                Future Technology Education
              </p>

            </div>

          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="/courses"
              className="text-sm text-gray-300 transition duration-300 hover:text-white"
            >
              Courses
            </Link>

            <Link
              href="/about"
              className="text-sm text-gray-300 transition duration-300 hover:text-white"
            >
              About
            </Link>

            <Link
              href="/privacy"
              className="text-sm text-gray-300 transition duration-300 hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/signup"
              className="group relative overflow-hidden rounded-2xl bg-white px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >

              <span className="relative z-10">
                Get Started
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 transition duration-300 group-hover:opacity-100" />

            </Link>

          </nav>

        </div>

      </header>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32">

        {/* Binary */}
        <div className="absolute inset-0 opacity-[0.05]">

          <div className="absolute left-10 top-20 rotate-[-8deg] font-mono text-xs leading-6 text-cyan-400">
            01001001 01000001 01010100
            <br />
            10101010 01010101 10101010
            <br />
            11100011 10101010 11001010
          </div>

          <div className="absolute bottom-20 right-10 rotate-[8deg] font-mono text-xs leading-6 text-blue-400">
            10101111 11100001 01010101
            <br />
            00101010 10101010 11100001
            <br />
            01010101 11110000 00110011
          </div>

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs text-gray-300 backdrop-blur-xl"
          >

            <Sparkles className="h-4 w-4 text-cyan-300" />

            Building Africa’s Next Generation of AI Engineers

          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-6xl text-5xl font-black leading-tight tracking-tight md:text-7xl xl:text-8xl"
          >

            The Future of

            <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Technology Education
            </span>

            Starts Here

          </motion.h1>

          {/* Desc */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-400 md:text-xl"
          >

            OromoTech Hub is a futuristic learning ecosystem focused on
            software engineering, AI systems, cybersecurity,
            SaaS architecture, cloud systems, and next-generation digital skills.

          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
          >

            <Link
              href="/signup"
              className="group flex items-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 font-black text-black shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >

              Start Learning

              <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />

            </Link>

            <Link
              href="/courses"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
            >
              Explore Courses
            </Link>

          </motion.div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 gap-5 md:grid-cols-4">

            {stats.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                key={i}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
              >

                <h3 className="text-4xl font-black text-cyan-300">
                  {item[0]}
                </h3>

                <p className="mt-3 text-sm text-gray-400">
                  {item[1]}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* Separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      {/* ================================================= */}
      {/* FEATURES */}
      {/* ================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-28">

        <div className="mb-20 text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-300">

            <Orbit className="h-4 w-4" />

            Platform Features

          </div>

          <h2 className="text-4xl font-black md:text-6xl">
            The Future of Learning
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Modern educational experiences powered by AI systems,
            immersive technology, and scalable engineering.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {features.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              key={i}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/30"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Shine */}
              <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />

              <div className="relative z-10">

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                  {item.icon}
                </div>

                <h3 className="mb-4 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* Separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      {/* ================================================= */}
      {/* FOUNDER */}
      {/* ================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-28">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >

            <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]">

              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative z-10">

                <div className="mb-8 flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/30">

                    <GraduationCap className="h-8 w-8" />

                  </div>

                  <div>

                    <h3 className="text-3xl font-black">
                      About The Founder
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      Student • Developer • Visionary Builder
                    </p>

                  </div>

                </div>

                <div className="space-y-6 leading-8 text-gray-300">

                  <p>
                    OromoTech Hub was founded by
                    <span className="font-bold text-white">
                      {" "}Fuad Aliy
                    </span>,
                    an Information Technology student at
                    <span className="font-semibold text-cyan-300">
                      {" "}Dire Dawa University
                    </span>.
                  </p>

                  <p>
                    His mission is to create a world-class educational
                    ecosystem where African developers can master
                    modern technologies in a practical and future-focused way.
                  </p>

                  <p>
                    Fuad specializes in Next.js, AI systems,
                    SaaS engineering, cybersecurity,
                    scalable UI systems, and full-stack development.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Right */}
          <div className="space-y-6">

            {founderCards.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                key={i}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
              >

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                    {item.icon}
                  </div>

                  <div>

                    <h4 className="mb-3 text-2xl font-black">
                      {item.title}
                    </h4>

                    <p className="leading-8 text-gray-400">
                      {item.desc}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* Separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

  {/* Separator */}
<div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

{/* ================================================= */}
{/* JOURNEY SECTION */}
{/* ================================================= */}

<section className="relative mx-auto max-w-7xl px-6 py-32">

  {/* Glow */}
  <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 mb-24 text-center"
  >

    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-300">

      <Star className="h-4 w-4" />

      Founder Journey

    </div>

    <h2 className="text-4xl font-black md:text-6xl">
      My Journey At
      <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
        Dire Dawa University
      </span>
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
      From university student to building advanced software systems,
      AI-powered platforms, and futuristic technology experiences.
    </p>

  </motion.div>

  {/* Timeline */}
  <div className="relative mx-auto max-w-5xl">

    {/* Center Line */}
    <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 md:block" />

    <div className="space-y-16">

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative grid gap-10 md:grid-cols-2"
      >

        <div className="absolute left-1/2 top-10 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#030712] bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.8)] md:block" />

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]">

          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/30">

            <GraduationCap className="h-8 w-8 text-white" />

          </div>

          <h3 className="text-3xl font-black">
            Beginning The Journey
          </h3>

          <p className="mt-5 leading-8 text-gray-400">
            Fuad Aliy started his technology journey at
            Dire Dawa University as an Information Technology student.
          </p>

          <p className="mt-4 leading-8 text-gray-400">
            During university life, he became deeply passionate about
            software engineering, futuristic systems,
            AI technologies, cybersecurity,
            and scalable digital platforms.
          </p>

        </div>

        <div />

      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative grid gap-10 md:grid-cols-2"
      >

        <div />

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]">

          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 shadow-2xl shadow-cyan-500/30">

            <Code2 className="h-8 w-8 text-white" />

          </div>

          <h3 className="text-3xl font-black">
            Building Real Projects
          </h3>

          <p className="mt-5 leading-8 text-gray-400">
            Fuad built multiple advanced systems and real-world projects
            including authentication systems,
            admin dashboards, educational platforms,
            modern SaaS interfaces, and futuristic web applications.
          </p>

          <p className="mt-4 leading-8 text-gray-400">
            His development stack includes
            Next.js, TypeScript, MongoDB,
            Tailwind CSS, AI integrations,
            and scalable full-stack architecture.
          </p>

        </div>

      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative grid gap-10 md:grid-cols-2"
      >

        <div className="absolute left-1/2 top-10 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#030712] bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.8)] md:block" />

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]">

          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/30">

            <BrainCircuit className="h-8 w-8 text-white" />

          </div>

          <h3 className="text-3xl font-black">
            Creating OromoTech Hub
          </h3>

          <p className="mt-5 leading-8 text-gray-400">
            OromoTech Hub was created to empower African students
            with modern technology education,
            practical engineering experience,
            and next-generation digital skills.
          </p>

          <p className="mt-4 leading-8 text-gray-400">
            The vision is to build one of the most futuristic
            learning ecosystems in Africa powered by AI,
            modern software engineering,
            and immersive educational experiences.
          </p>

        </div>

        <div />

      </motion.div>

      {/* CARD 4 */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative grid gap-10 md:grid-cols-2"
      >

        <div />

        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]">

          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative z-10">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/30">

              <Rocket className="h-8 w-8 text-white" />

            </div>

            <h3 className="text-3xl font-black">
              Building The Future
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Fuad continues building futuristic platforms,
              AI-powered systems,
              scalable software architectures,
              and immersive digital experiences.
            </p>

            <p className="mt-4 leading-8 text-gray-300">
              His mission is not only to teach technology,
              but to inspire the next generation of African innovators,
              engineers, creators, and startup founders.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">

              <Zap className="h-4 w-4" />

              Building The Future One System At A Time

            </div>

          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>

{/* Separator */}
<div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

{/* ================================================= */}
{/* CTA */}
{/* ================================================= */}
      
      <section className="mx-auto max-w-6xl px-6 py-28">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-[3rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400 to-blue-600 p-14 text-center text-black shadow-2xl shadow-cyan-500/20"
        >

          {/* Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent_60%)]" />

          {/* Shine */}
          <div className="absolute inset-0 animate-[shine_6s_linear_infinite] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)]" />

          <div className="relative z-10">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-black/10 px-4 py-2 text-sm font-semibold backdrop-blur-xl">
              🚀 Build Your Future
            </div>

            <h2 className="text-4xl font-black md:text-6xl">
              Start Your Technology Journey
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
              Join OromoTech Hub and learn software engineering,
              AI systems, cybersecurity,
              modern web development, and next-generation technologies.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <Link
                href="/signup"
                className="group inline-flex items-center gap-2 rounded-2xl bg-black px-8 py-4 font-black text-white shadow-2xl transition-all duration-300 hover:scale-105"
              >

                Create Account

                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />

              </Link>

              <Link
                href="/courses"
                className="rounded-2xl border border-black/10 bg-white/20 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:bg-white/30"
              >
                Explore Courses
              </Link>

            </div>

          </div>

        </motion.div>

      </section>

   

      <footer className="relative border-t border-white/10 py-14 text-center text-sm text-gray-500">

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />

        <div className="relative z-10">

          <div className="mb-3 text-xl font-black text-white">
            OromoTech Hub
          </div>

          <p>
            © {new Date().getFullYear()} OromoTech Hub.
            All rights reserved.
          </p>

          <p className="mt-2 text-gray-600">
            Designed & Developed by Fuad Aliy
          </p>

        </div>

      </footer>

    </div>
  );
}