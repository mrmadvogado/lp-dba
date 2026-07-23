import { MessageCircle } from "lucide-react";

const DEFAULT_WA_URL =
  "https://wa.me/5565992618251?text=Ol%C3%A1!+Meu+ve%C3%ADculo+foi+bloqueado+e+gostaria+de+entender+meus+direitos.";

type WhatsAppFABProps = {
  waUrl?: string;
  label?: string;
};

export function WhatsAppFAB({ waUrl = DEFAULT_WA_URL, label = "Falar no WhatsApp" }: WhatsAppFABProps = {}) {
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[rgb(37,211,102)] text-white font-medium px-4 py-3 rounded-full hover:bg-[rgb(30,190,90)] transition-all shadow-[0_0_24px_rgba(37,211,102,0.55)] hover:shadow-[0_0_36px_rgba(37,211,102,0.75)] text-sm"
      aria-label={label}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
