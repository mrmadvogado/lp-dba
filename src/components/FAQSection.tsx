"use client";

import { useState } from "react";
import { PUBLIC_FAQS } from "@/lib/faq";

type FAQSectionProps = {
  compact?: boolean;
  items?: readonly { question: string; answer: string }[];
  title?: string;
};

export function FAQSection({
  compact = false,
  items = PUBLIC_FAQS,
  title = "As perguntas que mais recebemos, respondidas sem enrolação",
}: FAQSectionProps = {}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className={`${compact ? "pt-8 pb-14" : "py-20"} bg-background`}>
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-xs font-semibold tracking-widest text-[#806315] uppercase mb-4">
            Dúvidas frequentes
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {title}
          </h2>
        </div>

        {/* Accordion */}
        <div className="reveal space-y-0 divide-y divide-border/60">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="w-full">
                <h3 className="m-0">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-foreground/80 transition-colors"
                  >
                    <span className="text-sm font-semibold text-foreground">
                      {item.question}
                    </span>
                    <span className="text-xl font-light text-foreground/40 shrink-0 leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div className="pb-5">
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {item.answer}
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
