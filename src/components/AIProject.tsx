export default function AIProject() {
  return (
    <section id="ai-project" className="py-24 sm:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="section-label">精选项目</p>
          <h2 className="section-heading">Featured AI Project</h2>
        </div>

        {/* Project glow card */}
        <div className="glow-card p-6 sm:p-8 animate-fade-scale relative overflow-hidden group">
          {/* Gradient accent bar at top */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-teal-500 rounded-t-[20px]" />

          {/* Background decorative glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-bl from-violet-100/40 via-blue-50/30 to-transparent rounded-full pointer-events-none" />

          <div className="relative">
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="badge">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
                  <path d="M8 2l2 4M5 2l2 4M3 7h8l-1 6H6L3 7z"/><circle cx="7" cy="2" r="1"/>
                </svg>
                AI Tool
              </span>
              <span className="badge-success">独立开发 · Sole Developer</span>
            </div>

            {/* Project name */}
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-1">
              AI 视频生成提示词工具
            </h3>
            <p className="text-base sm:text-lg text-slate-400 font-medium mb-5">
              AI Video Prompt Generator
            </p>

            {/* Role */}
            <p className="text-sm text-slate-500 mb-4">
              <span className="font-semibold text-slate-700">角色：</span>
              Sole Developer & Prompt Architect
            </p>

            {/* Tech Stack */}
            <p className="text-sm text-slate-500 mb-4">
              <span className="font-semibold text-slate-700">技术底座：</span>
              基于{' '}
              <span className="font-medium text-violet-600">可灵 (Kling)</span>
              {' '}视频模型 &{' '}
              <span className="font-medium text-blue-600">小云雀 (Skylark)</span>
              {' '}大语言模型
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6">
              一个专为短视频创作者和运营打造的 AI 效率工具。通过对接小云雀大模型解析用户的核心脚本意图，
              并自动转化为最适配可灵（Kling）高表现力镜头的视觉、转场及画面控制提示词（Prompt），
              彻底消除创意文案与 AI 视频生成工具之间的「沟通壁垒」。
            </p>

            {/* Impact stat — glowing */}
            <div className="flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-violet-50 to-teal-50 border border-blue-100 mb-6">
              <div className="text-5xl sm:text-6xl font-black gradient-text">
                60<span className="text-3xl">%</span>
              </div>
              <div>
                <p className="text-base font-bold text-slate-800">效率提升</p>
                <p className="text-sm text-slate-500">
                  传统短视频分镜脚本与画面描述的制作效率提升
                  <br />
                  <span className="text-xs text-slate-400">大幅压缩内容流产出周期</span>
                </p>
              </div>
            </div>

            {/* Platform tags */}
            <div className="flex flex-wrap items-center gap-2">
              {["可灵 (Kling)", "小云雀 (Skylark)", "Prompt Engineering"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-slate-200 bg-white/60 text-slate-500 hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
