export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center gap-3">
        {/* Vibe Coding credit — gradient glow */}
        <p className="text-xs font-medium tracking-wide text-center animate-fade-up">
          <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-teal-500 bg-clip-text text-transparent">
            Designed &amp; Developed via Vibe Coding with Claude Code by k.Lee
          </span>
          <span className="inline-block ml-1.5 align-middle">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500" />
            </span>
          </span>
        </p>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full pt-1">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} 李凯锋 (Kaifeng Lee). All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <a href="mailto:gxep63@aliyun.com" className="hover:text-blue-600 transition-colors font-medium">
              邮箱
            </a>
            <span className="w-px h-3 bg-slate-200" />
            <a href="tel:13680992835" className="hover:text-blue-600 transition-colors font-medium">
              电话
            </a>
            <span className="w-px h-3 bg-slate-200" />
            <span>
              Built with <span className="text-blue-500">AI</span> + Next.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
