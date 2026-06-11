"use client";

import NeuralChat from "@/components/NeuralChat";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-white to-slate-50/50"
    >
      {/* Background orbs — aligned with global accent palette */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="bg-orb w-[600px] h-[600px] -top-32 -left-64 bg-blue-400" />
        <div className="bg-orb w-[500px] h-[500px] bottom-0 right-0 translate-x-1/3 bg-violet-400" style={{ opacity: 0.08 }} />
        <div className="bg-orb w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-400" style={{ opacity: 0.05 }} />
      </div>

      {/* Grid pattern — matches global .bg-grid */}
      <div className="absolute inset-0 pointer-events-none select-none bg-grid opacity-[0.025]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center">
        {/* Name */}
        <h1 className="animate-fade-up delay-100 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-3 text-center">
          <span className="text-slate-900">李凯锋</span>
          <br />
          <span className="gradient-text">Kaifeng Lee</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up delay-200 text-sm sm:text-base text-slate-500 mb-2 text-center tracking-wide">
          AI Technology &amp; New Media Operations Specialist
        </p>

        {/* Domain tags — light theme pills */}
        <div className="animate-fade-up delay-200 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 mb-10">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[11px] font-semibold">
            新媒体全栈运营
          </span>
          <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-[11px] font-semibold">
            AI 提示词工程
          </span>
          <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[11px] font-semibold">
            独立开发者
          </span>
        </div>

        {/* ── Neural Chat Centerpiece ── */}
        <NeuralChat />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round">
            <path d="M7 8l3 3 3-3" />
            <path d="M7 12l3 3 3-3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
