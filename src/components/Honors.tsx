export default function Honors() {
  return (
    <section id="honors" className="py-24 sm:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="section-label">荣誉</p>
          <h2 className="section-heading">Award-winning Work</h2>
        </div>

        {/* Card — two-column on desktop, single-column on mobile */}
        <div className="glow-card overflow-hidden animate-fade-scale">
          <div className="flex flex-col lg:flex-row">
            {/* Left: Text content */}
            <div className="flex-1 p-5 sm:p-7 lg:pr-4 flex flex-col justify-center">
              {/* Award badge */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="badge">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
                    <path d="M7 1l2 3h3l-2 2 1 3-3-2-3 2 1-3-2-2h3l2-3z"/>
                  </svg>
                  大广节学院奖
                </span>
                <span className="badge-success">优秀奖</span>
              </div>

              {/* Work title */}
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 mb-1">
                《揽菊品牌创意短视频》
              </h3>
              <p className="text-sm text-slate-400 font-medium mb-4">
                核心主创 / 导演 / 剪辑
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-600 mb-5">
                围绕国民品牌「揽菊」进行新媒体视听语言的创意大单突破。
                负责从脚本分镜撰写、现场调度拍摄到后期精细化剪辑的全流程。
                作品从全国高校数万件参赛作品中脱颖而出，获得行业专家与品牌方高度认可。
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap items-center gap-2">
                {["脚本策划", "现场导演", "后期剪辑", "品牌创意"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-slate-200 bg-white/60 text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Video player */}
            <div className="flex-1 p-5 sm:p-7 lg:pl-4 lg:pt-7 flex items-center">
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/videos/lanju-award-poster.jpg"
                >
                  <source src="/videos/lanju-award.mp4" type="video/mp4" />
                  您的浏览器不支持视频播放。
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
