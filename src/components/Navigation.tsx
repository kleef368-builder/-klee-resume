"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "首页" },
  { id: "experience", label: "经历" },
  { id: "ai-project", label: "AI 项目" },
  { id: "honors", label: "荣誉" },
  { id: "skills", label: "技能" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_ITEMS.map((i) => document.getElementById(i.id));
      const pos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= pos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/75 backdrop-blur-2xl border-b border-slate-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="text-sm font-bold tracking-tight hover:text-[var(--accent)] transition-colors"
          >
            <span className="gradient-text-static font-extrabold">k</span>
            <span className="font-extrabold">.Lee</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3 py-1.5 text-sm rounded-lg transition-colors font-medium ${
                  activeSection === item.id
                    ? "text-[var(--accent)]"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
                )}
              </button>
            ))}
            {/* Desktop CV Download — glassmorphism pill */}
            <a
              href="/klee-resume.pdf"
              download
              className="ml-2 px-3 py-1.5 text-sm font-medium rounded-lg border border-slate-200/60 bg-white/60 backdrop-blur-md text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-white/90 hover:shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 inline-flex items-center gap-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 1v9M4 7l3 3 3-3M2 11v2h10v-2" />
              </svg>
              <span className="hidden lg:inline">CV</span>
            </a>
          </div>

          {/* Mobile: CV download + hamburger */}
          <div className="flex items-center gap-0.5 sm:hidden">
            <a
              href="/klee-resume.pdf"
              download
              className="p-3 text-slate-500 hover:text-blue-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Download CV"
            >
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 1v9M4 7l3 3 3-3M2 11v2h10v-2" />
              </svg>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-3 -mr-3 text-slate-500 hover:text-slate-900 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <path d="M5 5l10 10M15 5L5 15" />
                ) : (
                  <path d="M4 6h12M4 10h12M4 14h12" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="sm:hidden border-t border-slate-100 py-3 pb-4 flex flex-col gap-1 animate-fade-scale">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all min-h-[44px] ${
                  activeSection === item.id
                    ? "text-[var(--accent)] bg-blue-50"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50 active:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* Mobile CV Download — full row */}
            <a
              href="/klee-resume.pdf"
              download
              className="text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all min-h-[44px] text-slate-500 hover:text-blue-600 hover:bg-slate-50 active:bg-slate-100 flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 1v9M4 7l3 3 3-3M2 11v2h10v-2" />
              </svg>
              下载简历 (PDF)
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
