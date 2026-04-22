import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lp-dba.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Veículo Bloqueado ou em Busca e Apreensão? Entenda Seus Direitos",
  description:
    "Seu veículo foi bloqueado ou tomado pelo banco? Existem direitos que a financeira não te conta. Antes de desistir do seu bem, entenda o que a lei permite - com transparência.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MRM Advogados",
    title: "Veículo Bloqueado ou em Busca e Apreensão? Entenda Seus Direitos",
    description:
      "Seu veículo foi bloqueado ou tomado pelo banco? Existem direitos que a financeira não te conta. Antes de desistir do seu bem, entenda o que a lei permite - com transparência.",
    locale: "pt_BR",
    images: [
      {
        url: "/images/foto-marlon.png",
        width: 1200,
        height: 630,
        alt: "Dr. Marlon Rocha - Especialista em Busca e Apreensão de Veículos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veículo Bloqueado ou em Busca e Apreensão? Entenda Seus Direitos",
    description:
      "Seu veículo foi bloqueado ou tomado pelo banco? Existem direitos que a financeira não te conta. Antes de desistir do seu bem, entenda o que a lei permite - com transparência.",
    images: ["/images/foto-marlon.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
