"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-white to-slate-50/50"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="bg-orb w-[600px] h-[600px] -top-32 -left-64 bg-blue-400" />
        <div className="bg-orb w-[500px] h-[500px] bottom-0 right-0 translate-x-1/3 bg-violet-400" style={{ opacity: 0.08 }} />
        <div className="bg-orb w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-400" style={{ opacity: 0.05 }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none select-none bg-grid opacity-[0.025]" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Name */}
        <h1 className="animate-fade-up delay-100 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
          <span className="text-slate-900">李凯锋</span>
          <br />
          <span className="gradient-text">Kaifeng Lee</span>
        </h1>

        {/* Core Title */}
        <div className="animate-fade-up delay-200 mb-10">
          <p className="text-sm sm:text-base font-semibold text-slate-700 tracking-tight">
            AI Technology &amp; New Media Operations Specialist
          </p>
        </div>

        {/* Title tags */}
        <div className="animate-fade-up delay-200 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 mb-10 text-sm sm:text-base text-slate-500 font-medium">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">新媒体全栈运营</span>
          <span className="dot-divider hidden sm:block" />
          <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">AI 提示词工程师</span>
          <span className="dot-divider hidden sm:block" />
          <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-semibold">独立开发者</span>
        </div>

        {/* CTA buttons */}
        <div className="animate-fade-up delay-300 flex flex-col xs:flex-row items-center justify-center gap-3">
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary w-full xs:w-auto justify-center min-h-[44px]"
          >
            查看经历
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 5l4 4 4-4" />
            </svg>
          </a>
          <a href="mailto:gxep63@aliyun.com" className="btn-glass w-full xs:w-auto justify-center min-h-[44px]">
            联系我
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M7 2v8M3 6l4 4 4-4" />
            </svg>
          </a>
        </div>

        {/* Contact chips */}
        <div className="animate-fade-up delay-300 flex flex-wrap items-center justify-center gap-3 mt-8 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="10" height="8" rx="1"/><path d="M5 7h4M5 5h4"/></svg>
            13680992835
          </span>
          <span className="dot-divider" />
          <span className="inline-flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="2" width="12" height="10" rx="1"/><path d="M1 2l6 5 6-5"/></svg>
            gxep63@aliyun.com
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round">
          <path d="M7 8l3 3 3-3" />
          <path d="M7 12l3 3 3-3" />
        </svg>
      </div>
    </section>
  );
}
