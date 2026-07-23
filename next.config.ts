import type { NextConfig } from "next";

const googleScriptSources = "https://www.googletagmanager.com https://tagmanager.google.com";
const googleConnectSources = [
  "https://*.google-analytics.com",
  "https://*.analytics.google.com",
  "https://www.googletagmanager.com",
  "https://*.g.doubleclick.net",
  "https://*.google.com",
  "https://pagead2.googlesyndication.com",
].join(" ");

const scriptSrc = process.env.NODE_ENV === "development"
  ? `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${googleScriptSources}`
  : `script-src 'self' 'unsafe-inline' ${googleScriptSources}`;

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  scriptSrc,
  `script-src-elem 'self' 'unsafe-inline' ${googleScriptSources}`,
  "style-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://tagmanager.google.com https://fonts.googleapis.com",
  `connect-src 'self' ${googleConnectSources}`,
  "frame-src 'self' https://www.googletagmanager.com",
].join("; ");

const nextConfig: NextConfig = {
  assetPrefix: "/defesa-busca-apreensao",
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
