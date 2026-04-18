"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/556592618251?text=Ol%C3%A1!+Meu+ve%C3%ADculo+foi+bloqueado+e+gostaria+de+entender+meus+direitos.";

const questions = [
  "O banco está ameaçando a busca e apreensão do seu veículo?",
  "O veículo já possui um bloqueio judicial no sistema RENAJUD?",
  "Você tem parcelas em atraso e recebeu notificações de cobrança?",
  "O oficial de justiça já tentou levar o carro e não o encontrou?",
  "Você acredita que o banco está cobrando juros abusivos no seu contrato?",
  "O banco não te notificou formalmente antes de iniciar a ação?",
  "Você deseja proteger seu bem e regularizar sua situação financeira?",
];

export function DiagnosticSection() {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  );

  const count = checked.filter(Boolean).length;

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <section id="checklist" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 reveal">
          <p className="text-xs font-semibold tracking-widest text-[#B8902A] uppercase mb-4">
            Diagnóstico rápido
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Seu Caso Pode se Enquadrar?
          </h2>
          <p className="text-foreground/60">
            Responda às perguntas abaixo para ter uma primeira indicação se o
            seu veículo está em risco e como podemos ajudar.
          </p>
        </div>

        {/* Checklist */}
        <div className="reveal bg-white rounded-2xl border border-border/50 overflow-hidden shadow-sm">
          <div className="divide-y divide-border/50">
            {questions.map((q, i) => (
              <label
                key={i}
                className="flex items-center gap-4 px-6 py-4 cursor-pointer hover:bg-background/50 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={checked[i]}
                  onChange={() => toggle(i)}
                  className="w-5 h-5 rounded border-2 border-border accent-primary cursor-pointer"
                />
                <span
                  className={`text-sm font-medium transition-colors ${
                    checked[i] ? "text-foreground" : "text-foreground/70"
                  }`}
                >
                  {q}
                </span>
              </label>
            ))}
          </div>

          {/* Counter */}
          <div className="px-6 py-4 bg-background/50 border-t border-border/50 flex items-center justify-between">
            <span className="text-sm text-foreground/50">
              Itens marcados
            </span>
            <span className="text-sm font-bold text-primary">
              {count}/{questions.length}
            </span>
          </div>
        </div>

        {/* CTA when items checked */}
        {count >= 2 && (
          <div className="mt-6 text-center reveal reveal-active">
            <p className="text-sm text-foreground/60 mb-4">
              Você marcou <strong>{count} itens</strong> - seu caso merece uma
              análise técnica imediata.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[rgb(37,211,102)] text-white font-semibold px-8 py-4 rounded-full hover:bg-[rgb(30,190,90)] transition-all shadow-[0_0_28px_rgba(37,211,102,0.55)] hover:shadow-[0_0_40px_rgba(37,211,102,0.75)]"
            >
              <MessageCircle className="w-5 h-5" />
              Quero entender meu caso agora
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
