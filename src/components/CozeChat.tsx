"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    cozeWebSDK: {
      init: (config: Record<string, unknown>) => void;
    };
  }
}

export default function CozeChat() {
  useEffect(() => {
    // SDK initializes automatically after script loads (auto-init via data attributes or inline script)
    // We handle it in the onLoad callback below to ensure dark theme
  }, []);

  const handleSDKLoad = () => {
    if (typeof window !== "undefined" && window.cozeWebSDK) {
      window.cozeWebSDK.init({
        projectId: "7649776107855806473",
        refreshToken: () =>
          Promise.resolve(
            process.env.NEXT_PUBLIC_COZE_TOKEN || "<YOUR_TOKEN>"
          ),
        ui: {
          theme: "dark",
          // Mobile-friendly positioning — float above footer content
          position: "bottom-right",
        },
      });
    }
  };

  return (
    <>
      {/* Coze Web SDK — external script */}
      <Script
        src="https://lf-cdn.coze.cn/obj/unpkg/latest/coze/web-sdk/dist/js-umd/index.min.js"
        strategy="afterInteractive"
        onLoad={handleSDKLoad}
      />

      {/* Prevent Coze bubble from overlapping footer on mobile */}
      <style jsx global>{`
        /* Add bottom padding on mobile so the Coze chat bubble doesn't cover content */
        @media (max-width: 640px) {
          body {
            padding-bottom: env(safe-area-inset-bottom, 0px);
          }
        }
        /* Ensure Coze iframe/web-component respects z-index without breaking layout */
        coze-web-chat,
        [class*="coze"] {
          --coze-chat-z-index: 40;
        }
      `}</style>
    </>
  );
}
