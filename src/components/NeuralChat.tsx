"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ── Types ───────────────────────────────────────── */
interface Message {
  role: "user" | "assistant";
  content: string;
}

const OPENING_MESSAGE: Message = {
  role: "assistant",
  content:
    "我是 Klee 的赛博分身。找我聊 AIGC 工作流落地、新媒体内容全案，或者想看看我自学折腾的自动化脚本系统，直接出招吧。",
};

/* ── Component ────────────────────────────────────── */
export default function NeuralChat() {
  const [messages, setMessages] = useState<Message[]>([OPENING_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hasChatted, setHasChatted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);

  /* ── Auto-scroll ──────────────────────────────── */
  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, loading, scrollToBottom]);

  /* ── Mouse parallax on halo ───────────────────── */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!haloRef.current || !focused) return;
      const rect = haloRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      haloRef.current.style.transform = `translate(${x}px, ${y}px) scale(${focused ? 1.15 : 1})`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [focused]);

  /* ── Send ─────────────────────────────────────── */
  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setHasChatted(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || data.error || "大脑暂时短路，请稍后重试。" },
      ]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "网络连接异常，请检查后重试。" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  /* ── Render ───────────────────────────────────── */
  return (
    <div className="w-full max-w-[680px] mx-auto animate-fade-up delay-300">
      {/* ═══════════════════════════════════════════════
          HOLOGRAPHIC HALO BACKGROUND
          ═══════════════════════════════════════════════ */}
      <div className="relative">
        {/* Glow orbs behind the dialog */}
        <div
          ref={haloRef}
          className={`
            absolute inset-0 -inset-x-20 -inset-y-16 pointer-events-none
            transition-all duration-700 ease-out
            ${focused ? "opacity-100" : "opacity-50"}
          `}
        >
          {/* Blue orb */}
          <div className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[500px] h-[500px] rounded-full
            bg-gradient-to-tr from-blue-500/15 via-violet-500/10 to-transparent
            blur-3xl
            transition-all duration-700
            ${focused ? "scale-110" : "scale-100"}
            ${loading ? "animate-pulse" : ""}
          `} />
          {/* Purple ring */}
          <div className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[340px] h-[340px] rounded-full
            border border-white/5
            bg-gradient-to-bl from-violet-500/8 via-blue-500/5 to-teal-500/8
            blur-lg
            transition-all duration-700
            ${focused ? "scale-110 rotate-180" : "scale-100 rotate-0"}
          `} />
          {/* Teal micro-dot */}
          <div className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-2 h-2 rounded-full bg-teal-400/60 blur-[2px]
            transition-all duration-500
            ${loading ? "scale-150 opacity-80" : "scale-100 opacity-40"}
          `} />
        </div>

        {/* ═══════════════════════════════════════════════
            MAIN DIALOG CARD
            ═══════════════════════════════════════════════ */}
        <div className="
          relative
          bg-zinc-950/40 backdrop-blur-xl
          border border-white/10
          rounded-2xl
          shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9),0_0_80px_-20px_rgba(99,102,241,0.08)]
          overflow-hidden
        ">
          {/* ── Messages area ── */}
          <div
            ref={scrollRef}
            className={`
              overflow-y-auto px-5 sm:px-6 space-y-4
              transition-all duration-500
              ${hasChatted ? "py-5 max-h-[420px]" : "py-4 max-h-[120px]"}
            `}
          >
            {messages.map((msg, i) => (
              <div key={i} className="flex">
                {msg.role === "assistant" ? (
                  <div className="flex gap-3 max-w-full">
                    <span className="shrink-0 w-0.5 rounded-full bg-gradient-to-b from-blue-400/50 via-violet-400/30 to-transparent mt-1.5 self-stretch" />
                    <p className="text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap">
                      {msg.content}
                      {loading && i === messages.length - 1 && (
                        <span className="inline-block w-[7px] h-4 bg-white/60 ml-0.5 align-text-bottom animate-pulse rounded-[1px]" />
                      )}
                    </p>
                  </div>
                ) : (
                  <div className="ml-auto max-w-[85%]">
                    <p className="text-sm text-white/75 leading-relaxed px-4 py-2.5 rounded-2xl bg-white/5 border border-white/5 whitespace-pre-wrap">
                      {msg.content}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {loading && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex gap-3">
                <span className="shrink-0 w-0.5 rounded-full bg-gradient-to-b from-blue-400/40 via-violet-400/20 to-transparent mt-1.5 self-stretch" />
                <span className="text-sm text-zinc-500 italic">syncing...</span>
              </div>
            )}
          </div>

          {/* ── Input area ── */}
          <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 border-t border-white/5">
            <div className="flex items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="直接问我任何问题..."
                disabled={loading}
                className="
                  flex-1 bg-transparent
                  text-sm text-white placeholder-zinc-500
                  py-3 px-1
                  focus:outline-none
                  disabled:opacity-30
                "
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="
                  shrink-0 w-9 h-9 rounded-xl
                  bg-white/6 border border-white/8
                  text-zinc-400
                  hover:text-white hover:bg-white/10 hover:border-violet-400/30
                  disabled:opacity-20 disabled:cursor-not-allowed
                  transition-all duration-200
                  flex items-center justify-center
                "
                aria-label="发送"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 1L7 7M13 1L9 13 7 7 1 5 13 1z" />
                </svg>
              </button>
            </div>

            {/* Subtle hint text */}
            {!hasChatted && (
              <p className="text-[11px] text-zinc-600 text-center mt-1">
                按下 Enter 发送 · 支持中文对话
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
