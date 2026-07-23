import { MessageCircle } from "lucide-react";
import { PUBLIC_WA_URL } from "@/lib/constants";

type CTASectionProps = {
  buttonLabel?: string;
  description?: string | null;
  variant?: "default" | "preview-copy";
  waUrl?: string;
};

const DEFAULT_DESCRIPTION =
  "Fale agora com o Dr. Marlon Rocha. Avaliação gratuita, atendimento sigiloso e análise técnica do seu contrato, notificação e processo. Descubra o que é possível fazer antes que os prazos se fechem.";

export function CTASection({
  buttonLabel = "Avaliar Meu Caso Agora, Gratuitamente",
  description = DEFAULT_DESCRIPTION,
  variant = "default",
  waUrl = PUBLIC_WA_URL,
}: CTASectionProps = {}) {
  return (
    <section
      id="contato"
      className={variant === "preview-copy" ? "py-16" : "py-24"}
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
        {description && (
          <p className="text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#0F7A32] text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-[#0C6429] transition-all shadow-[0_0_28px_rgba(15,122,50,0.35)] hover:shadow-[0_0_36px_rgba(15,122,50,0.45)] uppercase tracking-wide"
        >
          <MessageCircle className="w-6 h-6" />
          {buttonLabel}
        </a>

      </div>
    </section>
  );
}
