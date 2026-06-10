import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "李凯锋 (Kaifeng Lee) — 全栈运营 · AI 工程师 · 独立开发者",
  description:
    "播音主持专业背景，兼具镜头表现力与深度数据敏感度。擅长将大模型技术转化为业务生产力，用 AI 赋能全栈运营与内容生产。",
  keywords: [
    "李凯锋",
    "Kaifeng Lee",
    "新媒体运营",
    "AI Prompt Engineer",
    "独立开发者",
    "Vibe Coding",
    "全栈运营",
  ],
  openGraph: {
    title: "李凯锋 (Kaifeng Lee) — Portfolio",
    description:
      "全栈运营 · AI Prompt Engineer · 独立开发者",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
