import Image from "next/image";
import { Calendar, MessageCircle, ArrowRight, Cpu } from "lucide-react";

const WA_URL =
  "https://wa.me/556592618251?text=Ol%C3%A1!+Meu+ve%C3%ADculo+foi+bloqueado+e+gostaria+de+entender+meus+direitos.";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-12 lg:pt-40 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="space-y-6">
            {/* Eyebrow badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[#B8902A] uppercase">
                <span className="w-1 h-1 rounded-full bg-[#B8902A] inline-block" />
                Direito do Consumidor · Financiamentos
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-border text-foreground/70 text-xs font-medium px-3 py-1.5 rounded-full">
                <Cpu className="w-3.5 h-3.5" />
                DL 911/69 • Alienação Fiduciária • RENAJUD
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl lg:text-[72px] font-bold leading-none tracking-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Seu veículo foi bloqueado ou tomado pelo banco?
            </h1>

            {/* Subtext */}
            <p className="text-base lg:text-lg text-foreground/70 leading-relaxed max-w-lg">
              Existem direitos que a financeira não te conta. Antes de desistir
              do seu bem, entenda o que a lei permite - com transparência.
            </p>

            {/* Warning line */}
            <p className="flex items-center gap-1.5 text-sm text-[#B8902A] font-medium">
              <span>⏱️</span>
              Cada dia sem orientação pode custar caro.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary text-white font-medium px-6 py-4 rounded-xl text-base whitespace-nowrap hover:bg-primary/90 transition-colors shadow-sm"
              >
                <Calendar className="w-5 h-5 shrink-0" />
                Iniciar Avaliação do Meu Caso no WhatsApp
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Como funciona
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs tracking-widest text-foreground/40 uppercase font-medium">
              Avaliação Técnica · Suporte Imediato
            </p>
          </div>

          {/* Right: photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px]">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-border/20 group">
                <Image
                  src="/images/foto-marlon.png"
                  alt="Dr. Marlon Rocha - Especialista em Busca e Apreensão de Veículos"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent px-5 py-4">
                  <p className="text-white font-semibold text-lg" style={{ fontFamily: "var(--font-poppins)" }}>
                    Dr. Marlon Rocha
                  </p>
                  <p className="text-white/80 text-sm">Advogado OAB/MT 35.470</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
