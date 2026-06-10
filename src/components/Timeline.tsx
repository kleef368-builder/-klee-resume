const NODES = [
  {
    side: "left" as const,
    period: "2024.10 — 2025.05",
    title: "抖音珠宝店铺运营",
    subtitle: "个人自主创业",
    tags: ["¥80,000+ 总营业额", "25% 利润率"],
    desc: "0 成本启动抖音珠宝账号，独立操盘手机拍摄、精细化剪辑与私域流量沉淀（高复购率 18%），实现学业与商业实战的完美兼容。",
    accent: "from-emerald-400 to-teal-500",
    ring: "ring-emerald-500/20",
  },
  {
    side: "right" as const,
    period: "2025.06 — 至今",
    title: "量化模型交易 EA",
    subtitle: "联合开发者",
    tags: ["24/7 全自动运行", "夏普率 · 最大回撤建模"],
    desc: "依托 MT4/MT5 平台从零攻克底层架构，落地对冲（Hedging）与网格（Grid）流式条件执行逻辑，并创新性引入 AI Agent 工作流进行参数自适应调优。",
    accent: "from-violet-400 to-purple-500",
    ring: "ring-violet-500/20",
  },
  {
    side: "left" as const,
    period: "2025.06 — 2025.10",
    title: "新媒体运营与全栈操盘",
    subtitle: "新东方实习 / 太平洋网络兼职",
    tags: ["80+ 场直播零事故", "互动率 ↑35%", "引流提效 15%"],
    desc: "操盘高质感视听全案，负责小红书与抖音的日常内容矩阵创作。通过每周拆解完播率、互动率、留存漏斗等核心数据快速迭代，新东方单条干货最高浏览量超 2 万。",
    accent: "from-amber-400 to-orange-500",
    ring: "ring-amber-500/20",
  },
  {
    side: "right" as const,
    period: "2026.05 — 至今",
    title: "AI 视频高阶提示词工程",
    subtitle: "独立开发者",
    tags: ["小云雀 LLM", "可灵 Kling 视觉控制"],
    desc: "专为短视频创作者打造的效率工具。通过大模型解析脚本结构，自动转化为最适配可灵高表现力镜头的视觉、转场及画面控制提示词，彻底消除创意文案与多模态生成工具间的沟通壁垒。",
    accent: "from-cyan-400 to-blue-500",
    ring: "ring-cyan-500/20",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 sm:py-32 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-3">
            Dual-Track Evolution
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            双核平行演进
            <span className="block text-lg sm:text-xl font-normal text-zinc-500 mt-2">
              左轨 · 感性内容商业闭环 &nbsp;|&nbsp; 右轨 · 理性技术 AI 原生
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* ── Central spine ── */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

          {/* ── Nodes ── */}
          <div className="flex flex-col">
            {NODES.map((node, i) => {
              const isLeft = node.side === "left";

              return (
                <div
                  key={i}
                  className={`relative flex items-start mb-16 last:mb-0 ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* ── Center dot on spine ── */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 z-10">
                    <span
                      className={`block w-3 h-3 rounded-full bg-gradient-to-br ${node.accent} ring-4 ${node.ring} ring-offset-2 ring-offset-zinc-950`}
                    />
                  </div>

                  {/* ── Card ── */}
                  <div
                    className={`relative w-full sm:w-[calc(50%-2rem)] animate-fade-up ${
                      isLeft ? "sm:pr-10 text-left" : "sm:pl-10 text-left"
                    }`}
                    style={{ animationDelay: `${i * 0.12}s` }}
                  >
                    {/* Mobile connector to spine */}
                    <div className="sm:hidden absolute left-1/2 top-8 w-[calc(50%-0.75rem)] h-px -translate-x-full bg-gradient-to-r from-transparent to-white/10" />

                    <div className="group bg-zinc-900/40 backdrop-blur-xl border border-white/8 rounded-2xl p-5 sm:p-6 hover:border-white/15 transition-all duration-300 hover:bg-zinc-900/60">
                      {/* Period */}
                      <p className="text-[11px] font-medium text-zinc-500 tracking-widest uppercase mb-3">
                        {node.period}
                      </p>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                        {node.title}
                      </h3>
                      <p className="text-sm text-zinc-400 mb-4">{node.subtitle}</p>

                      {/* Data badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {node.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-gradient-to-r ${node.accent} bg-clip-text text-transparent border border-white/5 bg-zinc-800/50`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-zinc-400 leading-relaxed">{node.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
