import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Veículo Bloqueado ou em Busca e Apreensão? Entenda Seus Direitos",
  description:
    "Seu veículo foi bloqueado ou tomado pelo banco? Existem direitos que a financeira não te conta. Antes de desistir do seu bem, entenda o que a lei permite - com transparência.",
  icons: {
    icon: "/images/miniatura.png",
    apple: "/images/miniatura.png",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
