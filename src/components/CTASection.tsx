import { MessageCircle } from "lucide-react";

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
          Seu veículo tem defesa.
          <br />Mas o prazo não espera.
        </h2>
        <p className="text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
          Fale agora com o Dr. Marlon Rocha. Avaliação gratuita, atendimento
          sigiloso e análise técnica do seu contrato, notificação e processo.
          Descubra o que é possível fazer antes que os prazos se fechem.
        </p>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[rgb(37,211,102)] text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-[rgb(30,190,90)] transition-all shadow-[0_0_28px_rgba(37,211,102,0.55)] hover:shadow-[0_0_40px_rgba(37,211,102,0.75)] uppercase tracking-wide"
        >
          <MessageCircle className="w-6 h-6" />
          Avaliar Meu Caso Agora, Gratuitamente
        </a>

      </div>
    </section>
  );
}
