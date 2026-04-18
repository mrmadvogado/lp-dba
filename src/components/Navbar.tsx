"use client";

import Image from "next/image";
import Link from "next/link";
import { Shield, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WA_URL =
  "https://wa.me/556592618251?text=Ol%C3%A1!+Meu+ve%C3%ADculo+foi+bloqueado+e+gostaria+de+entender+meus+direitos.";

const navLinks = [
  { label: "O Problema", href: "#dores" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Avaliações", href: "#reconhecimento" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="#hero" className="flex items-center shrink-0">
          <Image
            src="/images/logo-mrm.png"
            alt="MRM Advogados"
            width={240}
            height={51}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-sm font-medium text-foreground/70">
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span>OAB/MT 35.470</span>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-grow items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-primary/90"
          >
            <MessageCircle className="w-4 h-4" />
            Falar agora no WhatsApp
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden flex items-center gap-2 bg-primary text-white text-xs font-medium px-3 py-2 rounded-lg"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
