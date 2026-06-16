"use client";

import { useRef, useState, useCallback } from "react";

export default function Honors() {
  /* ── Academy Award video state ── */
  const academyRef = useRef<HTMLVideoElement>(null);
  const [academyPlaying, setAcademyPlaying] = useState(false);
  const [academyHover, setAcademyHover] = useState(false);

  const toggleAcademy = useCallback(() => {
    const video = academyRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setAcademyPlaying(true);
    } else {
      video.pause();
      setAcademyPlaying(false);
    }
  }, []);

  /* ── Shared glass-card box shadow ── */
  const cardShadow =
    "0 4px 32px rgba(0,0,0,0.4), 0 1px 2px rgba(255,255,255,0.04) inset, 0 20px 60px rgba(37,99,235,0.06)";

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(15,23,42,0.97) 0%, rgba(2,6,23,0.98) 55%, #020617 100%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none select-none bg-grid opacity-[0.03] [background-size:48px_48px]" />

      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] top-10 left-1/2 -translate-x-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] bottom-0 right-0 translate-x-1/4"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <div className="mb-14 text-center">
          <p className="section-label">项目展示</p>
          <h2 className="section-heading" style={{ color: "#fff" }}>
            Featured Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            独立跑通全链路创作管线 —— 从文本脚本到高表现力视觉大片
          </p>
        </div>

        {/* ── Grid: 2-col desktop / 1-col mobile ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ══════════════════════════════════════════════════
              Card 1 — Academy Award AI 赛道作品
              ══════════════════════════════════════════════════ */}
          <div
            className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-500 hover:scale-[1.01] hover:border-white/[0.14] animate-fade-scale"
            style={{ boxShadow: cardShadow }}
          >
            {/* Badge + Project name */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide w-fit"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245,158,11,0.18), rgba(234,179,8,0.10))",
                  color: "#fbbf24",
                  border: "1px solid rgba(245,158,11,0.25)",
                }}
              >
                <span className="text-sm">🏆</span>
                2026 学院奖 AI 赛道
              </span>
              <p className="text-xs sm:text-sm font-semibold text-white/60 tracking-wide">
                大广节学院奖 AI 赛道参赛作品
              </p>
            </div>

            {/* Video player */}
            <div
              className="relative group/video rounded-xl overflow-hidden"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.08), 0 0 40px rgba(37,99,235,0.10), 0 8px 32px rgba(0,0,0,0.5)",
              }}
              onMouseEnter={() => setAcademyHover(true)}
              onMouseLeave={() => setAcademyHover(false)}
            >
              <video
                ref={academyRef}
                src="/videos/academy-award-ai.mp4"
                className="w-full h-auto block rounded-xl"
                muted
                loop
                playsInline
                autoPlay
                controls
                onPlay={() => setAcademyPlaying(true)}
                onPause={() => setAcademyPlaying(false)}
                style={{ background: "#000" }}
              />

              {/* Custom play/pause overlay */}
              <button
                onClick={toggleAcademy}
                aria-label={academyPlaying ? "暂停视频" : "播放视频"}
                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-500 cursor-pointer ${
                  academyPlaying && !academyHover ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  background: academyPlaying
                    ? "transparent"
                    : "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 70%)",
                }}
              >
                <span
                  className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full transition-all duration-300 ${
                    academyHover || !academyPlaying
                      ? "scale-100 opacity-100"
                      : "scale-75 opacity-0"
                  } backdrop-blur-md`}
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 100%)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    boxShadow:
                      "0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05) inset",
                  }}
                >
                  {academyPlaying ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="drop-shadow-lg"
                    >
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="drop-shadow-lg ml-1"
                    >
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  )}
                </span>
              </button>

              {/* Hover glow ring */}
              <div
                className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500"
                style={{
                  opacity: academyHover ? 1 : 0,
                  boxShadow:
                    "inset 0 0 0 1px rgba(255,255,255,0.12), 0 0 60px rgba(37,99,235,0.12)",
                }}
              />
            </div>

            {/* Tech stack tags */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              {(
                [
                  { label: "小云雀大模型", color: "blue" },
                  { label: "可灵 Kling", color: "violet" },
                  { label: "Runway Gen-4", color: "emerald" },
                  { label: "达芬奇调色", color: "amber" },
                ] as const
              ).map(({ label, color }) => {
                const colorMap: Record<string, { bg: string; text: string; border: string }> =
                  {
                    blue: {
                      bg: "rgba(37,99,235,0.10)",
                      text: "#93c5fd",
                      border: "rgba(37,99,235,0.20)",
                    },
                    violet: {
                      bg: "rgba(124,58,237,0.10)",
                      text: "#c4b5fd",
                      border: "rgba(124,58,237,0.20)",
                    },
                    emerald: {
                      bg: "rgba(16,185,129,0.10)",
                      text: "#6ee7b7",
                      border: "rgba(16,185,129,0.20)",
                    },
                    amber: {
                      bg: "rgba(245,158,11,0.10)",
                      text: "#fcd34d",
                      border: "rgba(245,158,11,0.20)",
                    },
                  };
                const c = colorMap[color];
                return (
                  <span
                    key={label}
                    className="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 cursor-default"
                    style={{
                      background: c.bg,
                      color: c.text,
                      border: `1px solid ${c.border}`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {label}
                  </span>
                );
              })}
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-slate-400/80">
              <span className="font-semibold text-slate-300">全链路工作流：</span>
              文本脚本 → AI 精准分镜提示词 → 多模态流媒体高表现力视频生成 →
              音视频对齐剪辑。攻克大模型对视觉镜头（推拉摇移、转场控制）的解析壁垒，实现极具艺术网感与先锋视觉的高清短视频产出。
            </p>
          </div>

          {/* ══════════════════════════════════════════════════
              Card 2 — 揽菊品牌创意短视频
              ══════════════════════════════════════════════════ */}
          <div
            className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-500 hover:scale-[1.01] hover:border-white/[0.14] animate-fade-scale"
            style={{ boxShadow: cardShadow }}
          >
            {/* Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(16,185,129,0.18), rgba(52,211,153,0.10))",
                  color: "#6ee7b7",
                  border: "1px solid rgba(16,185,129,0.25)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 1l2 3h3l-2 2 1 3-3-2-3 2 1-3-2-2h3l2-3z" />
                </svg>
                大广节学院奖
              </span>
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold"
                style={{
                  background: "rgba(16,185,129,0.15)",
                  color: "#6ee7b7",
                  border: "1px solid rgba(16,185,129,0.25)",
                }}
              >
                优秀奖
              </span>
            </div>

            {/* Title & Role */}
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-1">
              《揽菊品牌创意短视频》
            </h3>
            <p className="text-sm text-slate-400 font-medium mb-4">
              核心主创 / 导演 / 剪辑
            </p>

            {/* Video player */}
            <div
              className="w-full aspect-video rounded-xl overflow-hidden mb-4"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.5)",
              }}
            >
              <video
                controls
                preload="metadata"
                playsInline
                className="w-full h-full object-cover"
                poster="/videos/lanju-award-poster.jpg"
                style={{ background: "#000" }}
              >
                <source src="/videos/lanju-award.mp4" type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {["脚本策划", "现场导演", "后期剪辑", "品牌创意"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "#cbd5e1",
                    border: "1px solid rgba(255,255,255,0.10)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-400/80">
              围绕国民品牌「揽菊」进行新媒体视听语言的创意大单突破。
              负责从脚本分镜撰写、现场调度拍摄到后期精细化剪辑的全流程。
              作品从全国高校数万件参赛作品中脱颖而出，获得行业专家与品牌方高度认可。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
