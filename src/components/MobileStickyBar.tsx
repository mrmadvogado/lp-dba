"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WA_URL =
  "https://wa.me/556592618251?text=Ol%C3%A1!+Meu+ve%C3%ADculo+foi+bloqueado+e+gostaria+de+entender+meus+direitos.";

export function MobileStickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 py-3 border-t border-white/10"
      style={{ backgroundColor: "rgb(27,45,79)" }}
    >
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 w-full bg-[rgb(37,211,102)] text-white font-semibold py-3.5 rounded-xl text-sm shadow-[0_0_20px_rgba(37,211,102,0.5)]"
      >
        <MessageCircle className="w-5 h-5" />
        Avaliar Meu Caso Agora, Gratuitamente
      </a>
    </div>
  );
}
