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

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Status badge — internship focused */}
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

        {/* Core Title / Golden Quote */}
        <div className="animate-fade-up delay-200 mb-8">
          <p className="text-sm sm:text-base font-semibold text-slate-700 tracking-tight">
            AI-Driven Media Operations &amp; Growth Specialist
          </p>
          <div className="mt-3 inline-block mx-auto max-w-lg px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-50/80 via-violet-50/80 to-teal-50/80 border border-blue-100/60 backdrop-blur-sm">
            <p className="text-sm sm:text-base font-medium text-slate-600 leading-relaxed italic">
              「用 AI Agent 赋能内容全链路，用数据画布重构数字传媒的增长红利。」
            </p>
          </div>
        </div>

        {/* Title tags */}
        <div className="animate-fade-up delay-200 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 mb-8 text-sm sm:text-base text-slate-500 font-medium">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">新媒体全栈运营</span>
          <span className="dot-divider hidden sm:block" />
          <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">AI 提示词工程师</span>
          <span className="dot-divider hidden sm:block" />
          <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-semibold">独立开发者 · 找实习中</span>
        </div>

        {/* Detailed Bio — two paragraphs */}
        <div className="animate-fade-up delay-300 max-w-2xl mx-auto text-left sm:text-center mb-10 space-y-5">
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            在 <strong className="text-slate-800 font-semibold">AIGC 与数字传媒深度融合</strong>的浪潮中，
            我立足于<strong className="text-slate-800 font-semibold">创意内容生产（Creative Content）</strong>
            与<strong className="text-slate-800 font-semibold">现代数字化运营（Digital Operations）</strong>的交汇点。
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            我专注于探索并将 <strong className="text-slate-800 font-semibold">AI Agent（智能体工作流）</strong>
            深度嵌入传统新媒体的<strong className="text-slate-800 font-semibold">「选题-脚本-多渠道分发-数据回溯」全链路</strong>。
            从独立操盘高质感视听内容项目（如《揽菊》等全案落地），到利用
            <strong className="text-slate-800 font-semibold">AIGC 工具搭建批量内容生产矩阵</strong>，
            我具备极强的审美感知力与技术落地能力。
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            通过对用户行为、留存曲线及转化漏斗的<strong className="text-slate-800 font-semibold">精细化数据分析</strong>，
            我致力于用<strong className="text-slate-800 font-semibold">「技术硬内功」</strong>为内容运营注入确定性的增长。
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-semibold">
            我不只是内容的创作者，更是用 AI 降本增效、用数据驱动增长的数字化运营解题人。
          </p>
        </div>

        {/* Tech Matrix — 2x2 glass grid */}
        <div className="animate-fade-up delay-400 max-w-2xl mx-auto grid sm:grid-cols-2 gap-3 mb-10 text-left">
          {[
            {
              emoji: "🤖",
              title: "AI Agent & AIGC 工作流集成",
              desc: "熟练运用 AI 智能体工具及高阶提示词工程（Prompt Engineering），实现文案、脚本及音视频内容的半自动化高效产出，擅长用技术构建新媒体内容的高频工业化流水线。",
            },
            {
              emoji: "📊",
              title: "数据驱动的精准增长运营",
              desc: "对流量、点击率（CTR）、完播率及转化漏斗具备极高的数据敏锐度。擅长清洗用户行为大数据，通过精细化数据建模，反向指导内容选题与投放策略。",
            },
            {
              emoji: "🎬",
              title: "全栈传媒全案落地",
              desc: "具备敏阅的网感与极佳的视觉审美。从前期的市场洞察、创意脑暴，到中后期的视听工业化打磨（涵盖分镜、剪辑、动效），具备独立跑通爆款项目全周期闭环的实战经验。",
            },
            {
              emoji: "💻",
              title: "现代数字化全栈工程技能",
              desc: "基于 macOS 生态进行敏捷开发，熟练运用现代化前端及自动化脚本工具部署个人数字资产，能与技术团队、产品团队无缝对话。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass-card p-4 flex items-start gap-3"
            >
              <span className="text-2xl shrink-0 leading-none mt-0.5">{item.emoji}</span>
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="animate-fade-up delay-500 flex flex-col xs:flex-row items-center justify-center gap-3">
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
        <div className="animate-fade-up delay-500 flex flex-wrap items-center justify-center gap-3 mt-8 text-xs text-slate-400">
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
