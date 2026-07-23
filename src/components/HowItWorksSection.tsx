import { MessageCircle, Lock } from "lucide-react";
import { PUBLIC_WA_URL } from "@/lib/constants";

const steps = [
  {
    num: "1",
    title: "Mande uma mensagem",
    body: "Conte sua situação em 2 minutos pelo WhatsApp. Informe se o veículo foi tomado, bloqueado no DETRAN ou se o banco ameaçou a busca e apreensão.",
  },
  {
    num: "2",
    title: "Análise técnica do seu caso",
    body: "Verificamos o contrato, a notificação extrajudicial, a taxa de juros e o histórico do processo - os pontos que a jurisprudência usa para contestar ou extinguir a ação.",
  },
  {
    num: "3",
    title: "Você conhece suas opções reais",
    body: "Antes de decidir, você entende o que a lei permite: purgação da mora, contestação da notificação inválida, revisão de cláusulas abusivas ou outras estratégias de defesa.",
  },
];

const previewSteps = [
  {
    num: "1",
    title: "Mande uma mensagem",
    body: "Conte sua situação em 2 minutos pelo WhatsApp. Informe se o veículo foi apreendido.",
  },
  {
    num: "2",
    title: "Análise técnica do seu caso",
    body: "Verificamos o contrato, a notificação extrajudicial, a taxa de juros e o histórico do processo. Esses são os pontos que a jurisprudência usa para contestar ou extinguir a ação.",
  },
  {
    num: "3",
    title: "Você conhece suas opções reais",
    body: "Você entende quais medidas podem ser adotadas para buscar a retomada do veículo, contestar irregularidades e encontrar uma solução para o financiamento.",
  },
];

const citySteps = [
  {
    num: "1",
    title: "Inicie a conversa",
    body: "Fale diretamente pelo WhatsApp e conheça como funciona a análise jurídica do caso.",
  },
  {
    num: "2",
    title: "Análise técnica do seu caso",
    body: "A situação é examinada sob os aspectos contratuais e processuais relevantes para a busca e apreensão.",
  },
  {
    num: "3",
    title: "Você conhece suas opções reais",
    body: "Você entende quais medidas podem ser adotadas para buscar a retomada do veículo, contestar irregularidades e encontrar uma solução para o financiamento.",
  },
];

type HowItWorksSectionProps = {
  variant?: "default" | "preview-copy";
  city?: string;
  waUrl?: string;
};

export function HowItWorksSection({ variant = "default", city, waUrl = PUBLIC_WA_URL }: HowItWorksSectionProps = {}) {
  const isPreviewCopy = variant === "preview-copy";
  const displayedSteps = city ? citySteps : isPreviewCopy ? previewSteps : steps;

  return (
    <section
      id="como-funciona"
      className={isPreviewCopy ? "py-16" : "py-24"}
      style={{ backgroundColor: "rgb(27,45,79)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-xs font-semibold tracking-widest text-[#D4AA40] uppercase mb-4">
            Como funciona
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Três passos para defender seu veículo
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Você fala diretamente com o Dr. Marlon Rocha. {city
              ? `Atuação em busca e apreensão de veículos em ${city}, com análise individual do caso.`
              : "Atendemos todo o Mato Grosso e o Brasil inteiro com agilidade e sigilo."}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {displayedSteps.map((step, i) => (
            <div
              key={i}
              className="reveal p-8 rounded-2xl border"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.1)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Step number */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mb-6"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                {step.num}
              </div>
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center space-y-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#0F7A32] text-white font-semibold px-10 py-4 rounded-full text-lg hover:bg-[#0C6429] transition-all shadow-[0_0_28px_rgba(15,122,50,0.35)] hover:shadow-[0_0_36px_rgba(15,122,50,0.45)]"
          >
            <MessageCircle className="w-5 h-5" />
            Consultar Especialista
          </a>
          {!isPreviewCopy && (
            <div className="flex items-center justify-center gap-3 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                Atendimento sigiloso
              </span>
              <span>·</span>
              <span>Sem deslocamento</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
