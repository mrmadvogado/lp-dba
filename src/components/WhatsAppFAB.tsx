import { MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/556592618251?text=Ol%C3%A1!+Meu+ve%C3%ADculo+foi+bloqueado+e+gostaria+de+entender+meus+direitos.";

export function WhatsAppFAB() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[rgb(37,211,102)] text-white font-medium px-4 py-3 rounded-full hover:bg-[rgb(30,190,90)] transition-all shadow-[0_0_24px_rgba(37,211,102,0.55)] hover:shadow-[0_0_36px_rgba(37,211,102,0.75)] text-sm"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
