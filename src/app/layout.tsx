import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LANDING_URL, SITE_URL } from "@/lib/constants";
import { Analytics } from "@/components/Analytics";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Advogado para Busca e Apreensão de Veículo | MRM",
  description:
    "Advogado para defesa em busca e apreensão de veículo. Atendimento online em todo o Brasil e presencial em Cuiabá. Solicite uma análise do seu caso.",
  authors: [{ name: "Dr. Marlon Rocha", url: SITE_URL }],
  category: "Direito Bancário",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: LANDING_URL,
  },
  openGraph: {
    type: "website",
    url: LANDING_URL,
    siteName: "MRM Advogados",
    title: "Advogado para Busca e Apreensão de Veículo | MRM",
    description:
      "Defesa em busca e apreensão de veículo com atendimento online em todo o Brasil e presencial em Cuiabá.",
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
    title: "Advogado para Busca e Apreensão de Veículo | MRM",
    description:
      "Defesa em busca e apreensão de veículo com atendimento online em todo o Brasil e presencial em Cuiabá.",
    images: ["/images/foto-marlon.png"],
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
        <Analytics />
        {children}
      </body>
    </html>
  );
}
