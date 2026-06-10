"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const OPENING_MESSAGE: Message = {
  role: "assistant",
  content:
    "我是 Klee 的赛博分身。找我聊 AIGC 工作流落地、新媒体内容全案，或者想看看我自学折腾的自动化脚本系统，直接出招吧。",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([OPENING_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
      inputRef.current?.focus();
    }
  }, [open, scrollToBottom]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

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

      if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.error || "抱歉，我的大脑暂时短路了，请稍后重试。",
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "网络连接异常，请检查网络后重试。",
        },
      ]);
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

  return (
    <>
      {/* ===== Floating button ===== */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 shadow-lg ${
          open
            ? "bg-zinc-800/90 scale-90 rotate-45"
            : "bg-zinc-900/85 backdrop-blur-xl border border-white/10 hover:scale-105 hover:border-violet-400/30 animate-glow"
        }`}
        aria-label={open ? "关闭聊天" : "打开 AI 助手"}
      >
        <span className={open ? "-rotate-45" : ""}>🤖</span>
      </button>

      {/* ===== Chat window ===== */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-[380px] sm:max-w-[400px] animate-fade-scale">
          <div className="bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/8">
              <div className="flex items-center gap-2.5">
                <span className="text-lg">🤖</span>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">
                    Klee 的赛博分身
                  </p>
                  <p className="text-[10px] text-zinc-500 leading-tight">AI Digital Twin</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
                aria-label="关闭"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-3 space-y-3 max-h-[360px] min-h-[200px]"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] text-sm leading-relaxed px-3.5 py-2.5 rounded-2xl whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-gradient-to-br from-blue-600 to-violet-600 text-white rounded-br-md"
                        : "bg-white/8 text-zinc-200 rounded-bl-md border border-white/5"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/8 text-zinc-400 text-sm px-4 py-3 rounded-2xl rounded-bl-md border border-white/5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/8">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="输入消息..."
                  disabled={loading}
                  className="flex-1 bg-white/6 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-400/40 focus:bg-white/8 transition-colors disabled:opacity-40"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading || !input.trim()}
                  className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-violet-500/20 transition-all active:scale-95"
                  aria-label="发送"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 2l12 6-12 6 4-6-4-6z" />
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
