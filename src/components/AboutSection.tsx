import Image from "next/image";
import { ExternalLink, CheckCircle, Star } from "lucide-react";

const reviews = [
  {
    text: "Excelente atendimento. O Dr. Marlon Rocha conseguiu extinguir um processo que me perseguia há anos por conta de um financiamento de veículo.",
    author: "Gisele Maria",
  },
  {
    text: "Meu carro estava bloqueado no DETRAN e eu não sabia o que fazer. O escritório do Dr. Marlon conseguiu o desbloqueio rápido e ainda revisou meu contrato!",
    author: "Rômulo Alves",
  },
  {
    text: "Indico de olhos fechados! Profissional sério, atencioso e muito competente. Resolveu meu caso com agilidade e sempre me manteve informado em cada etapa.",
    author: "Vitor Pardim",
  },
];

const GOOGLE_URL = "https://share.google/3dg33GIdESjASkytz";

export function AboutSection() {
  return (
    <section id="reconhecimento" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="space-y-6 reveal">
            <p className="text-xs font-semibold tracking-widest text-[#B8902A] uppercase">
              Quem vai defender você
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Especialista em busca e apreensão e em fazer os bancos cumprirem a lei
            </h2>
            <p className="text-foreground/60 leading-relaxed">
              Dr. Marlon Rocha atua exclusivamente na defesa dos clientes que
              estão com seus veículos apreendidos ou ameaçados pelo banco, com
              bloqueio via RENAJUD, busca e apreensão em andamento e revisão de
              contratos com juros abusivos. Atendimento online.
            </p>

            {/* Stars */}
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#D4AA40] text-[#D4AA40]"
                />
              ))}
              <span className="font-bold text-foreground ml-1">5.0</span>
              <span className="text-foreground/50 text-sm">de 5.0</span>
            </div>

            <p className="text-sm text-foreground/60">
              Confira o que os clientes falam a nosso respeito:
            </p>

            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
            >
              Ver Avaliações no Google
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-4 text-sm text-foreground/50">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Verificação Independente
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-600" />
                100% Avaliações Reais
              </span>
            </div>
          </div>

          {/* Right: Google-style review card */}
          <div className="reveal">
            <div className="bg-white rounded-3xl border border-[rgba(226,217,208,0.5)] p-8 shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-border flex items-center justify-center bg-white">
                    <Image
                      src="/images/logo-mrm.png"
                      alt="MRM Advogados"
                      width={40}
                      height={40}
                      className="object-contain w-full h-full p-1"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">MRM Advogados</p>
                    <p className="text-xs text-foreground/50">
                      Dr. Marlon Rocha
                    </p>
                  </div>
                </div>
                {/* Google G */}
                <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-600">G</span>
                </div>
              </div>

              {/* Reviews */}
              <div className="space-y-5">
                {reviews.map((review, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="w-4 h-4 fill-[#D4AA40] text-[#D4AA40]"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-foreground/70 italic leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <p className="text-xs text-foreground/40">
                      - {review.author}
                    </p>
                  </div>
                ))}
              </div>

              {/* Badge */}
              <div className="mt-6 pt-4 border-t border-border/50">
                <p className="text-xs font-semibold tracking-widest text-foreground/40 uppercase">
                  Avaliações verificadas · Google Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
