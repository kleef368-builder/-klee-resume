"use client";

import { useRef, useState, useCallback } from "react";

export default function AcademyAward() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const handlePlay = useCallback(() => setIsPlaying(true), []);
  const handlePause = useCallback(() => setIsPlaying(false), []);

  return (
    <section
      id="academy-award"
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
          className="bg-orb w-[500px] h-[500px] top-10 left-1/2 -translate-x-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="bg-orb w-[350px] h-[350px] bottom-0 right-0 translate-x-1/4"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-blue-400/80 mb-3">
            Featured Video Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            流媒体<span className="gradient-text">全息作品</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            独立跑通 AI 全链路视频创作管线 —— 从文本脚本到高表现力视觉大片
          </p>
        </div>

        {/* ── Glass Holographic Video Card ── */}
        <div
          className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-4 sm:p-5 transition-all duration-500 hover:scale-[1.01] hover:border-white/[0.14] animate-fade-scale"
          style={{
            boxShadow:
              "0 4px 32px rgba(0,0,0,0.4), 0 1px 2px rgba(255,255,255,0.04) inset, 0 20px 60px rgba(37,99,235,0.06)",
          }}
        >
          {/* ── Header Row: Badge + Title ── */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 px-1">
            {/* Badge */}
            <div className="flex items-center gap-2.5">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide"
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
            </div>

            {/* Project name */}
            <p className="text-sm sm:text-base font-semibold text-white/70 tracking-wide">
              大广节学院奖 AI 赛道参赛作品
            </p>
          </div>

          {/* ── Video Player ── */}
          <div
            className="relative group/video rounded-xl overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.08), 0 0 40px rgba(37,99,235,0.10), 0 8px 32px rgba(0,0,0,0.5)",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <video
              ref={videoRef}
              src="/videos/academy-award-ai.mp4"
              className="w-full h-auto block rounded-xl"
              muted
              loop
              playsInline
              autoPlay
              controls
              onPlay={handlePlay}
              onPause={handlePause}
              style={{ background: "#000" }}
            />

            {/* ── Custom Play/Pause Overlay Button ── */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "暂停视频" : "播放视频"}
              className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-500 cursor-pointer ${
                isPlaying && !isHovering ? "opacity-0" : "opacity-100"
              }`}
              style={{
                background: isPlaying
                  ? "transparent"
                  : "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 70%)",
              }}
            >
              {/* Play/Pause icon circle */}
              <span
                className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full transition-all duration-300 ${
                  isHovering || !isPlaying
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
                {isPlaying ? (
                  /* Pause icon */
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
                  /* Play triangle */
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

            {/* ── Glow ring on hover ── */}
            <div
              className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500"
              style={{
                opacity: isHovering ? 1 : 0,
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.12), 0 0 60px rgba(37,99,235,0.12)",
              }}
            />
          </div>

          {/* ── Tech Stack Tags ── */}
          <div className="flex flex-wrap items-center gap-2 mt-4 px-1">
            {[
              { label: "小云雀大模型", color: "blue" },
              { label: "可灵 Kling", color: "violet" },
              { label: "Runway Gen-4", color: "emerald" },
              { label: "达芬奇调色", color: "amber" },
            ].map(({ label, color }) => {
              const colorMap: Record<string, { bg: string; text: string; border: string }> = {
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

          {/* ── Description ── */}
          <p className="mt-4 px-1 text-sm leading-relaxed text-slate-400/80 max-w-3xl">
            <span className="font-semibold text-slate-300">全链路工作流：</span>
            文本脚本 → AI 精准分镜提示词 → 多模态流媒体高表现力视频生成 → 音视频对齐剪辑。
            攻克大模型对视觉镜头（推拉摇移、转场控制）的解析壁垒，实现极具艺术网感与先锋视觉的高清短视频产出。
          </p>
        </div>
      </div>
    </section>
  );
}
