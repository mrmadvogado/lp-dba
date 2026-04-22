"use client";

import { useState } from "react";

const faqs = [
  {
    q: "O veículo já foi apreendido - ainda dá para fazer alguma coisa?",
    a: "Sim, há dois caminhos imediatos. O primeiro é a purgação da mora: após a apreensão, a lei garante 5 dias para pagar a integralidade da dívida e reaver o bem (Art. 3º, § 2º, DL 911/69). O segundo é a contestação: você tem 15 dias para apresentar defesa com base em irregularidades do processo, como notificação inválida ou juros abusivos (Art. 3º, § 3º). Entre em contato o quanto antes para não perder esses prazos.",
  },
  {
    q: "Quanto custa o atendimento?",
    a: "O primeiro contato serve para entendermos os detalhes do seu processo e verificarmos a viabilidade jurídica. Se houver necessidade de contratação, todos os termos serão tratados com total transparência.",
  },
  {
    q: "O banco pode bloquear meu veículo no DETRAN sem me avisar?",
    a: "O bloqueio via RENAJUD decorre de uma decisão judicial. A lei exige que a notificação de mora seja enviada ao endereço que consta no contrato. Se chegou em endereço diferente, foi devolvida como 'ausente' ou 'não procurado', a mora pode não ter sido comprovada corretamente - o que é fundamento para contestar ou extinguir a ação (STJ, AREsp 2007339).",
  },
  {
    q: "O banco pode tomar meu veículo sem ordem judicial?",
    a: "Não. Embora a Lei 14.711/2023 (Marco Legal das Garantias) tenha criado um procedimento extrajudicial de consolidação de propriedade, a parte que autorizava a apreensão física sem ordem judicial foi vetada pelo Presidente e o veto foi mantido pelo Congresso. Na prática, a instituição financeira ainda precisa de uma ordem judicial para fisicamente tomar o veículo.",
  },
  {
    q: "O atendimento é presencial ou pode ser feito remotamente?",
    a: "O atendimento é 100% remoto. Todo o processo pode ser realizado pelo WhatsApp, e-mail e videoconferência, sem necessidade de deslocamento.",
  },
  {
    q: "Funciona para qualquer tipo de financiamento de veículo?",
    a: "A maioria dos financiamentos no Brasil é por alienação fiduciária, regime regido especificamente pelo Decreto-Lei 911/69. É a modalidade mais sujeita à busca e apreensão. Outros tipos de contrato têm regras diferentes. Cada caso tem particularidades que precisam ser analisadas individualmente.",
  },
  {
    q: "Os juros do meu contrato são abusivos - isso me ajuda na defesa?",
    a: "Pode ajudar significativamente. Se o contrato cobra capitalização diária de juros sem informar expressamente a taxa diária, há violação do dever de informação ao consumidor (Art. 6º, III, CDC). Quando o juiz reconhece essa abusividade no período de normalidade do contrato, a mora do devedor pode ser descaracterizada - tornando a ação de busca e apreensão improcedente (TJ-SC, Ap. 5005028-50.2021).",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-xs font-semibold tracking-widest text-[#B8902A] uppercase mb-4">
            Dúvidas frequentes
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            As perguntas que mais recebemos, respondidas sem enrolação
          </h2>
        </div>

        {/* Accordion */}
        <div className="reveal space-y-0 divide-y divide-border/60">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="w-full">
                <h3 className="m-0">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-foreground/80 transition-colors"
                  >
                    <span className="text-sm font-semibold text-foreground">
                      {item.q}
                    </span>
                    <span className="text-xl font-light text-foreground/40 shrink-0 leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div className="pb-5">
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
