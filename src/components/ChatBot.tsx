"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ── Types ───────────────────────────────────────── */
interface Message {
  role: "user" | "assistant";
  content: string;
}

/* ── Opening line ─────────────────────────────────── */
const OPENING_MESSAGE: Message = {
  role: "assistant",
  content:
    "我是 Klee 的赛博分身。找我聊 AIGC 工作流落地、新媒体内容全案，或者想看看我自学折腾的自动化脚本系统，直接出招吧。",
};

/* ── Component ────────────────────────────────────── */
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([OPENING_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [closing, setClosing] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* ── Auto-scroll ──────────────────────────────── */
  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    });
  }, []);

  useEffect(() => {
    if (open) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [open, scrollToBottom]);

  useEffect(() => { scrollToBottom(); }, [messages, loading, scrollToBottom]);

  /* ── Close with animation ─────────────────────── */
  const closePanel = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 250);
  };

  /* ── Send ─────────────────────────────────────── */
  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

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
    <>
      {/* ═══════════════════════════════════════════════
          FLOATING HOLOGRAPHIC ORB
          ═══════════════════════════════════════════════ */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "关闭聊天" : "打开 AI 助手"}
        className={`
          fixed bottom-8 right-8 z-50
          w-14 h-14 rounded-full
          bg-zinc-950/40 backdrop-blur-md
          border border-white/10
          shadow-[0_0_30px_-6px_rgba(99,102,241,0.15)]
          hover:scale-105 active:scale-95
          transition-all duration-300 ease-out
          flex items-center justify-center
          ${open ? "opacity-0 pointer-events-none scale-75" : "opacity-100"}
        `}
      >
        {/* Concentric holographic rings */}
        <span className="relative flex items-center justify-center w-9 h-9">
          {/* Outer ring — slow rotation */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/30 via-violet-500/20 to-teal-400/30 animate-[spin_8s_linear_infinite] blur-[1px]" />
          {/* Middle ring — reverse rotation */}
          <span className="absolute inset-[3px] rounded-full bg-gradient-to-bl from-violet-400/25 via-blue-400/15 to-transparent animate-[spin_5s_linear_infinite_reverse] blur-[1px]" />
          {/* Inner core — breathing pulse */}
          <span className="absolute inset-[7px] rounded-full bg-gradient-to-br from-blue-400/60 to-violet-500/40 animate-pulse shadow-[0_0_12px_rgba(139,92,246,0.4)]" />
          {/* Center micro-dot */}
          <span className="relative w-1 h-1 rounded-full bg-white/80" />
        </span>
      </button>

      {/* ═══════════════════════════════════════════════
          SPATIAL CARD PANEL
          ═══════════════════════════════════════════════ */}
      {open && (
        <div className={`
          fixed z-50
          bottom-24 right-8
          w-[calc(100vw-2rem)] sm:w-[420px]
          h-[560px] sm:h-[600px] max-h-[calc(100dvh-8rem)]
          animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300
          ${closing ? "animate-out fade-out zoom-out-95 slide-out-to-bottom-4 duration-200" : ""}
        `}>
          <div className="
            h-full flex flex-col
            bg-zinc-950/45 backdrop-blur-xl
            border border-white/10
            shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),0_0_60px_-10px_rgba(99,102,241,0.08)]
            rounded-2xl
            overflow-hidden
          ">
            {/* ── Header ─────────────────────────── */}
            <div className="shrink-0 flex items-center justify-between px-5 py-4 border-b border-white/6">
              <div className="flex items-center gap-3">
                {/* Mini orb in header */}
                <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900/60 border border-white/10">
                  <span className="absolute inset-[4px] rounded-full bg-gradient-to-br from-blue-400/50 to-violet-500/40 animate-pulse" />
                  <span className="relative w-1 h-1 rounded-full bg-white/70" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white/90 leading-tight tracking-wide">
                    Klee 的赛博分身
                  </p>
                  <p className="text-[10px] text-zinc-500 tracking-widest uppercase leading-tight">
                    Digital Twin · Online
                  </p>
                </div>
              </div>

              <button
                onClick={closePanel}
                className="text-zinc-500 hover:text-zinc-300 transition-colors p-2 rounded-full hover:bg-white/5"
                aria-label="关闭"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M3 3l8 8M11 3l-8 8" />
                </svg>
              </button>
            </div>

            {/* ── Messages ───────────────────────── */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-5 py-4 space-y-5"
            >
              {messages.map((msg, i) => (
                <div key={i} className="flex">
                  {msg.role === "assistant" ? (
                    /* ── AI: clean text + left micro accent line ── */
                    <div className="flex gap-3 max-w-full">
                      <span className="shrink-0 w-0.5 rounded-full bg-gradient-to-b from-blue-400/50 via-violet-400/30 to-transparent mt-1.5 self-stretch" />
                      <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">
                        {msg.content}
                        {/* Blinking terminal cursor when loading the LAST assistant msg */}
                        {loading && i === messages.length - 1 && (
                          <span className="inline-block w-[7px] h-4 bg-white/60 ml-0.5 align-text-bottom animate-pulse rounded-[1px]" />
                        )}
                      </p>
                    </div>
                  ) : (
                    /* ── User: subtle translucent wrap ── */
                    <div className="ml-auto max-w-[85%]">
                      <p className="text-sm text-white/80 leading-relaxed px-4 py-2.5 rounded-2xl bg-white/5 border border-white/5 whitespace-pre-wrap">
                        {msg.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}

              {/* ── Loading skeleton (only when no assistant msg is streaming) ── */}
              {loading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex gap-3">
                  <span className="shrink-0 w-0.5 rounded-full bg-gradient-to-b from-blue-400/40 via-violet-400/20 to-transparent mt-1.5 self-stretch" />
                  <span className="text-sm text-zinc-500 italic">syncing...</span>
                </div>
              )}
            </div>

            {/* ── Input ──────────────────────────── */}
            <div className="shrink-0 px-4 py-3 border-t border-white/6">
              <div className="flex items-center gap-2.5">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="输入消息..."
                  disabled={loading}
                  className="
                    flex-1 bg-white/4 border border-white/8
                    rounded-xl px-4 py-2.5
                    text-sm text-white placeholder-zinc-500
                    focus:outline-none focus:border-violet-400/30 focus:bg-white/6
                    transition-colors duration-200
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}
