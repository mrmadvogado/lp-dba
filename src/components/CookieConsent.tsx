"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-white/10 shadow-lg"
      style={{ backgroundColor: "rgb(27,45,79)" }}
    >
      {/* Mobile: linha única compacta */}
      <div className="sm:hidden flex items-center justify-between gap-3 px-4 py-2.5">
        <p className="text-xs text-white/70 leading-snug">
          Utilizamos cookies ·{" "}
          <Link href="/politica-de-privacidade" className="text-[#D4AA40] underline">
            Saiba mais
          </Link>
        </p>
        <button
          onClick={accept}
          className="shrink-0 bg-[#D4AA40] text-[rgb(27,45,79)] font-semibold text-xs px-4 py-2 rounded-lg"
        >
          Aceitar
        </button>
      </div>

      {/* Desktop: layout completo */}
      <div className="hidden sm:flex max-w-5xl mx-auto items-center gap-4 justify-between px-6 py-4">
        <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
          <Link href="/politica-de-privacidade" className="text-[#D4AA40] underline hover:opacity-80 transition-opacity">
            Política de Privacidade
          </Link>{" "}
          e com a{" "}
          <span className="text-white/60">Lei 13.709/2018 (LGPD)</span>.
        </p>
        <button
          onClick={accept}
          className="shrink-0 bg-[#D4AA40] text-[rgb(27,45,79)] font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-[#B8902A] transition-colors"
        >
          Entendi e aceito
        </button>
      </div>
    </div>
  );
}
