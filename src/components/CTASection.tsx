import { MessageCircle, Lock } from "lucide-react";

const WA_URL =
  "https://wa.me/556592618251?text=Ol%C3%A1!+Meu+ve%C3%ADculo+foi+bloqueado+e+gostaria+de+entender+meus+direitos.";

export function CTASection() {
  return (
    <section
      id="contato"
      className="py-24"
      style={{ backgroundColor: "rgb(27,45,79)" }}
    >
      <div className="max-w-3xl mx-auto px-4 text-center reveal">
        <p className="text-xs font-semibold tracking-widest text-[#D4AA40] uppercase mb-6">
          Não perca mais tempo
        </p>
        <h2
          className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Seu veículo importa.
          <br />E seu prazo também.
        </h2>
        <p className="text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
          Fale agora com nossa equipe. Avaliação detalhada, atendimento sigiloso
          e suporte especializado. Cada dia pode fazer diferença no seu caso.
        </p>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[rgb(37,211,102)] text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-[rgb(30,190,90)] transition-all shadow-[0_0_28px_rgba(37,211,102,0.55)] hover:shadow-[0_0_40px_rgba(37,211,102,0.75)] uppercase tracking-wide"
        >
          <MessageCircle className="w-6 h-6" />
          Falar agora no WhatsApp
        </a>

        {/* Legal disclaimer */}
        <p className="mt-10 text-xs text-white/30 max-w-lg mx-auto leading-relaxed italic">
          Esta página tem caráter meramente informativo e não constitui
          aconselhamento jurídico. Nenhuma promessa de resultado é feita. Cada
          caso é único e será analisado de forma individualizada conforme os
          fatos e documentos apresentados.
        </p>
      </div>
    </section>
  );
}
