const SKILL_CATEGORIES = [
  {
    title: "AI 与独立开发",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-blue-600">
        <path d="M9 1l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4l2-4z"/>
        <circle cx="9" cy="9" r="2"/>
      </svg>
    ),
    iconClass: "icon-box",
    skills: [
      "Vibe Coding（AI 辅助前端开发）",
      "大模型提示词工程（可灵 Kling / 小云雀 Skylark / Midjourney）",
      "LLM 工作流搭建与效率优化",
      "AIGC 运营内容批量生产",
    ],
  },
  {
    title: "数据分析与运营",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-teal-600">
        <rect x="1" y="11" width="3" height="6" rx="0.5"/>
        <rect x="7" y="7" width="3" height="10" rx="0.5"/>
        <rect x="13" y="3" width="3" height="14" rx="0.5"/>
      </svg>
    ),
    iconClass: "icon-box-teal",
    skills: [
      "基础数据分析（抖音后台 / 千川基础版）",
      "核心运营数据复盘（浏览量、收藏率、完播率、点赞率）",
      "多平台账号矩阵运营",
    ],
  },
  {
    title: "媒体制作与软实力",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-violet-600">
        <rect x="2" y="3" width="14" height="11" rx="2"/>
        <path d="M8 11l3-2-3-2v4z"/><circle cx="13" cy="6" r="1"/>
      </svg>
    ),
    iconClass: "icon-box-purple",
    skills: [
      "播音主持表达",
      "人际沟通与团队协作",
      "视频剪辑（剪映）",
      "基础调色（达芬奇）",
      "视觉设计（Canva 海报设计）",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="section-label">技能</p>
          <h2 className="section-heading">Skills & Expertise</h2>
        </div>

        {/* Grid — 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className="glass-card p-5 animate-fade-scale"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-3">
                <div className={cat.iconClass}>{cat.icon}</div>
                <h3 className="text-sm font-bold tracking-tight text-slate-900">
                  {cat.title}
                </h3>
              </div>

              {/* Skills list */}
              <ul className="space-y-1.5">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-xs text-slate-500 leading-relaxed">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" className="shrink-0 mt-1">
                      <path d="M2 5l2 2 4-4"/>
                    </svg>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
