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
        {/* Status badge */}
        <div className="animate-fade-up mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-50 to-violet-50 text-blue-700 border border-blue-200 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            寻找优质实习机会 · Seeking Internship
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-fade-up delay-100 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
          <span className="text-slate-900">李凯锋</span>
          <br />
          <span className="gradient-text">Kaifeng Lee</span>
        </h1>

        {/* Core Title + Golden Quote */}
        <div className="animate-fade-up delay-200 mb-6">
          <p className="text-sm sm:text-base font-semibold text-slate-700 tracking-tight">
            AI Technology &amp; New Media Operations Specialist
          </p>
          <div className="mt-3 inline-block mx-auto max-w-lg px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-50/80 via-violet-50/80 to-teal-50/80 border border-blue-100/60 backdrop-blur-sm">
            <p className="text-sm sm:text-base font-medium text-slate-600 leading-relaxed italic">
              「以硬核工程思维驾驭 AI 智能体，以敏锐数字网感操盘新媒体内容。」
            </p>
          </div>
        </div>

        {/* Title tags */}
        <div className="animate-fade-up delay-200 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 mb-10 text-sm sm:text-base text-slate-500 font-medium">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">新媒体全栈运营</span>
          <span className="dot-divider hidden sm:block" />
          <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">AI 提示词工程师</span>
          <span className="dot-divider hidden sm:block" />
          <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-semibold">独立开发者 · 找实习中</span>
        </div>

        {/* ===== About Me — Pure Text Flow ===== */}
        <div className="animate-fade-up delay-300 text-left max-w-none space-y-6 mb-10">

          {/* Opening: cross-disciplinary + self-learning */}
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            我是一名兼具<strong className="text-slate-900 font-bold">硬核 AI 技术落地能力</strong>与
            <strong className="text-slate-900 font-bold">全栈新媒体运营思维</strong>的跨界复合型人才。
            我拥有极其强悍的<strong className="text-slate-900 font-bold">自驱动与快速自学能力</strong>，
            擅长在短时间内攻克未知领域的底层逻辑——无论是从零部署现代化的全栈网页，
            还是深度独立钻研自动化脚本系统，我始终保持着敏捷进化的特质。
          </p>

          {/* Bridge sentence */}
          <p className="text-sm sm:text-base leading-relaxed text-slate-500">
            我的核心能力图谱由两个完全独立却同样扎实的板块构成：
          </p>

          {/* === AI Stack === */}
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-800 mb-2">
              🤖 AI 与自动化技术栈
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              我专注于探索<strong className="text-slate-900 font-bold">大语言模型（LLM）</strong>的落地应用。
              熟练掌握<strong className="text-slate-900 font-bold">高阶提示词工程（Prompt Engineering）</strong>，
              并能够独立构建<strong className="text-slate-900 font-bold">AI Agent（智能体工作流）</strong>。
              我擅长利用技术手段搭建自动化流水线，将 AI 能力转化为真正能为业务提效、降本的
              <strong className="text-slate-900 font-bold">工业化生产力工具</strong>。
            </p>
          </div>

          {/* === New Media Stack === */}
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-800 mb-2">
              🎬 新媒体运营与内容栈
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              我拥有成熟的<strong className="text-slate-900 font-bold">视听语言审美</strong>与
              <strong className="text-slate-900 font-bold">敏锐的网感</strong>，
              具备独立操盘高质感视听内容全案落地的实战经验
              （涵盖前期洞察、选题脑暴、分镜设计到中后期的全案剪辑与动效制作）。
              同时，我是一个<strong className="text-slate-900 font-bold">实干型的数字化运营者</strong>，
              凡事习惯用<strong className="text-slate-900 font-bold">客观数据说话</strong>，
              通过对播放量、互动率、留存率等核心指标的精细化复盘，
              精准捕捉用户心理，反向驱动创意的敏捷迭代。
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="animate-fade-up delay-400 flex flex-col xs:flex-row items-center justify-center gap-3">
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
        <div className="animate-fade-up delay-400 flex flex-wrap items-center justify-center gap-3 mt-8 text-xs text-slate-400">
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
