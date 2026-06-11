"use client";

import NeuralChat from "@/components/NeuralChat";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-blue-500/8 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-violet-500/6 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-teal-500/4 blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center">
        {/* Name */}
        <h1 className="animate-fade-up delay-100 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-3 text-center">
          <span className="text-white">李凯锋</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">
            Kaifeng Lee
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up delay-200 text-sm sm:text-base text-zinc-400 mb-2 text-center tracking-wide">
          AI Technology &amp; New Media Operations Specialist
        </p>

        {/* Domain tags */}
        <div className="animate-fade-up delay-200 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 mb-10">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-400 text-[11px] font-medium">
            新媒体全栈运营
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-400 text-[11px] font-medium">
            AI 提示词工程
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-400 text-[11px] font-medium">
            独立开发者
          </span>
        </div>

        {/* ── Neural Chat Centerpiece ── */}
        <NeuralChat />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce mt-12">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#52525b" strokeWidth="1.5" strokeLinecap="round">
            <path d="M7 8l3 3 3-3" />
            <path d="M7 12l3 3 3-3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
