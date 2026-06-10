const EXPERIENCES = [
  {
    period: "2024.10 — 至今",
    company: "自主创业",
    role: "抖音珠宝店铺运营",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-50/30",
    borderGlow: "border-blue-200",
    dotRing: "ring-blue-200",
    highlights: [
      "独立运营珠宝类抖音账号，定位轻量化内容创作，0成本启动（仅手机拍摄剪辑），直播无投放流量。",
      "带动店铺总营业额超 8 万元，利润率 25%。",
      {
        label: "运营动作",
        text: "通过直播间累计积累私域核心客户 100+ 人，复购率 18%；优化直播话术（每周2场），平均场观 30+，转化率 4.2%。",
        color: "blue",
      },
      {
        label: "相关能力",
        text: "基础数据分析（抖音后台/千川基础版）、手机剪辑（剪映）、基础海报设计（Canva）、私域社群维护（微信群/朋友圈种草）。",
        color: "violet",
      },
    ],
  },
  {
    period: "2025.06 — 2025.09",
    company: "新东方",
    role: "新媒体运营实习",
    gradient: "from-red-500 to-orange-500",
    bgGradient: "from-red-50 to-orange-50/30",
    borderGlow: "border-red-200",
    dotRing: "ring-red-200",
    highlights: [
      "内容创作：结合教育场景输出平台适配内容，优化选题与视觉呈现，单条内容最高浏览量超 2 万，单月账号总点赞量稳定在 500-600 区间，内容种草转化率提升 12%。",
      "账号运营：负责小红书、抖音日常互动与答疑，搭建粉丝交流群，2个月内小红书粉丝增长 1300+，抖音增长 900+，粉丝月度互动率达 18%。",
      "活动策划：主导平台专属线上活动，联动教学团队设计活动福利，单场活动带动课程咨询量超 160 组，直接转化课程报名 28 单。",
      "数据复盘：每周拆解小红书、抖音核心数据，基于数据调整内容方向与发布时间，推动小红书账号课程引流效率提升 15%，抖音账号内容曝光量环比提升 22%。",
    ],
  },
  {
    period: "2025.10 — 2026.02",
    company: "太平洋网络公司",
    role: "主播/运营实习",
    gradient: "from-teal-500 to-emerald-500",
    bgGradient: "from-teal-50 to-emerald-50/30",
    borderGlow: "border-teal-200",
    dotRing: "ring-teal-200",
    highlights: [
      "负责直播间全流程运营支持，配合主播完成 80+ 场直播，涵盖脚本策划、内容上架、场控支持、实时数据监控，保障直播零事故落地。",
      "协助设计直播间互动玩法与运营策略，落地后直播间互动率（评论/弹幕）提升 35%，用户平均停留时长从 1分20秒 提升至 2分10秒。",
      "负责直播数据的统计、整理与复盘，输出周度数据报告共 16 份，分析用户行为与转化路径，提出 8 项优化方案并推动落地，后续直播场均在线人数提升 28%。",
      "协助账号粉丝运营，维护核心粉丝社群 2 个，累计回复用户咨询与评论 2000+ 条，粉丝社群活跃度提升 40%，账号粉丝量在实习期间增长 1万+。",
    ],
  },
];

const PROJECTS = [
  {
    period: "独立开发项目",
    company: "AI 智能体辅助研发：基于 MT4/MT5 的自动化 EA 系统与数据回溯",
    role: "联合开发者 / AI 策略与数据负责人",
    gradient: "from-amber-500 to-yellow-500",
    bgGradient: "from-amber-50 to-yellow-50/30",
    borderGlow: "border-amber-200",
    dotRing: "ring-amber-200",
    isProject: true,
    highlights: [
      {
        label: "AI 智能体",
        text: "将最前沿的 AI Agent（智能体）工作流创造性地引入系统迭代中。利用大模型的逻辑推理与文本理解能力，辅助进行 EA 策略在不同市场环境下的参数自适应优化、代码自动化审计与场景微调，大幅提升了系统的自适应效率。",
        color: "blue",
      },
      {
        label: "敏捷自学",
        text: "凭借强悍的自驱力，在短时间内攻克 MQL 语言及底层系统逻辑，协作编写高稳定性的全自动 EA 脚本。成功落地包括对冲（Hedging）、网格（Grid）在内的复杂条件流式执行代码，实现 24 小时全自动闭环。",
        color: "violet",
      },
      {
        label: "数据回溯",
        text: "负责系统运行产生的海量历史行为大数据的导出与清洗。重点针对最大回撤（Max Drawdown）、夏普比率（Sharpe Ratio）等核心指标进行精细化建模，通过硬核的数据回溯，反向修正 EA 底层算法的逻辑缺陷。",
        color: "teal",
      },
    ],
  },
];

function HighlightItem({
  children,
  label,
  color = "blue",
}: {
  children: React.ReactNode;
  label?: string;
  color?: "blue" | "violet" | "teal";
}) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    violet: "bg-violet-100 text-violet-700 border-violet-200",
    teal: "bg-teal-100 text-teal-700 border-teal-200",
  };

  return (
    <li className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 shrink-0" />
      <span>
        {label && (
          <span className={`inline-flex items-center gap-1 mr-1.5 px-1.5 py-0.5 rounded-md text-[11px] font-semibold border ${colorClasses[color]}`}>
            {label}
          </span>
        )}
        {children}
      </span>
    </li>
  );
}

function ExperienceCard({
  exp,
  i,
}: {
  exp: (typeof EXPERIENCES)[0] & { isProject?: boolean };
  i: number;
}) {
  return (
    <div
      className={`glass-card p-5 sm:p-6 ml-6 sm:ml-10 animate-fade-up ${exp.borderGlow}`}
      style={{ animationDelay: `${i * 0.12}s` }}
    >
      {/* Timeline dot */}
      <div className={`timeline-dot bg-gradient-to-br ${exp.gradient} ${exp.dotRing}`} />

      {/* Period badge */}
      <div className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold mb-3 bg-gradient-to-r ${exp.bgGradient}`}>
        <span className={`bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
          {exp.period}
        </span>
      </div>

      {/* Company + Role */}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
        <h3 className="text-xl font-bold tracking-tight text-slate-900">
          {exp.company}
        </h3>
        <span className="text-sm text-slate-400 font-medium">{exp.role}</span>
      </div>

      {/* Highlights */}
      <ul className="space-y-2.5">
        {exp.highlights.map((h, j) =>
          typeof h === "string" ? (
            <HighlightItem key={j}>{h}</HighlightItem>
          ) : (
            <HighlightItem key={j} label={h.label} color={h.color as "blue" | "violet" | "teal"}>
              {h.text}
            </HighlightItem>
          )
        )}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="section-label">经历</p>
          <h2 className="section-heading">Professional Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[6px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-200 via-violet-200 to-teal-200" />

          <div className="flex flex-col gap-8">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={`exp-${i}`} exp={exp} i={i} />
            ))}
          </div>
        </div>

        {/* Projects section */}
        <div className="mt-16 mb-10">
          <p className="section-label">项目</p>
          <h2 className="section-heading">Key Projects</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[6px] top-3 bottom-3 w-px bg-gradient-to-b from-amber-200 to-yellow-200" />

          <div className="flex flex-col gap-8">
            {PROJECTS.map((proj, i) => (
              <ExperienceCard key={`proj-${i}`} exp={proj} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
