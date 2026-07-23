import Image from "next/image";
import { MessageCircle, ArrowRight, Scale } from "lucide-react";

const WA_URL =
  "https://wa.me/5565992618251?text=Ol%C3%A1!+Meu+ve%C3%ADculo+foi+bloqueado+e+gostaria+de+entender+meus+direitos.";

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
                Advogado em Direito Bancário · Atendimento Nacional
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-border text-foreground/70 text-xs font-medium px-3 py-1.5 rounded-full">
                <Scale className="w-3.5 h-3.5" />
                DL 911/69 • Alienação Fiduciária • RENAJUD
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl lg:text-[72px] font-bold leading-none tracking-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Advogado para defesa em busca e apreensão de veículo
            </h1>

            {/* Subtext */}
            <p className="text-base lg:text-lg text-foreground/70 leading-relaxed max-w-lg">
              Seu veículo foi bloqueado ou apreendido pelo banco? Entenda as
              opções jurídicas aplicáveis ao seu caso e os prazos que precisam
              ser observados.
            </p>

            {/* Warning line */}
            <p className="flex items-center gap-1.5 text-sm text-[#B8902A] font-medium">
              <span>⏱️</span>
              Após a apreensão, você tem 5 dias. Depois disso, as portas jurídicas começam a fechar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary text-white font-medium px-6 py-4 rounded-xl text-base whitespace-nowrap hover:bg-primary/90 transition-colors shadow-sm"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                Avaliar Meu Caso Agora, Gratuitamente
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Como funciona
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right: photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-border/20 group">
                <Image
                  src="/images/foto-marlon.png"
                  alt="Dr. Marlon Rocha - Especialista em Busca e Apreensão de Veículos"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
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
