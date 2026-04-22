"use client";

import Image from "next/image";
import { Shield, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const WA_URL =
  "https://wa.me/556592618251?text=Ol%C3%A1!+Meu+ve%C3%ADculo+foi+bloqueado+e+gostaria+de+entender+meus+direitos.";

const navLinks = [
  { label: "O Problema", id: "dores" },
  { label: "Como Funciona", id: "como-funciona" },
  { label: "Avaliações", id: "reconhecimento" },
  { label: "FAQ", id: "faq" },
  { label: "Contato", id: "contato" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        {/* Logo — recarrega a página no topo */}
        <button
          onClick={() => window.location.reload()}
          className="flex items-center shrink-0"
          aria-label="MRM Advogados - Início"
        >
          <Image
            src="/images/logo-mrm.png"
            alt="MRM Advogados"
            width={240}
            height={51}
            className="h-14 w-auto"
            priority
          />
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side desktop */}
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

        {/* Mobile: hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border/40 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { scrollTo(link.id); setMobileOpen(false); }}
              className="text-left text-sm font-medium text-foreground/80 hover:text-foreground py-3 border-b border-border/30 last:border-0 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 bg-primary text-white text-sm font-medium px-4 py-3 rounded-xl"
          >
            <MessageCircle className="w-4 h-4" />
            Falar agora no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
