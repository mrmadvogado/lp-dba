"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, MessageCircle, Scale, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { CNPJ, GOOGLE_BUSINESS_URL, OAB, SOCIETY_OAB } from "@/lib/constants";
import { PREVIEW_WA_URL } from "@/components/PreviewDbaV2";
import { previewServices } from "@/lib/previewServices";

const reviews = [
  {
    text: "Excelente atendimento. O Dr. Marlon Rocha conseguiu extinguir um processo que me perseguia há anos por conta de um financiamento de veículo.",
    author: "Gisele Maria",
  },
  {
    text: "Meu carro foi apreendido pelo banco e eu não sabia o que fazer. O escritório do Dr. Marlon conseguiu resolver a situação e ainda revisou meu contrato!",
    author: "Rômulo Alves",
  },
  {
    text: "Indico de olhos fechados! Profissional sério, atencioso e muito competente. Resolveu meu caso com agilidade e sempre me manteve informado em cada etapa.",
    author: "Vitor Pardim",
  },
];

export function PreviewMainHeroSection({
  title = "Advogado Especialista em Busca e Apreensão de Veículo",
  question = "Seu veículo foi apreendido ou está com risco de busca e apreensão?",
  description = "Recupere seu veículo apreendido, suspenda mandado de busca e apreensão. Entenda as opções jurídicas aplicáveis ao seu caso e os prazos que precisam ser observados.",
  locationLabel,
  waUrl = PREVIEW_WA_URL,
  heroImageSrc = "/images/foto-marlon.png",
  heroImageAlt = "Dr. Marlon Rocha - Especialista em Busca e Apreensão de Veículos",
  heroImageLandscape = false,
  showHeroIdentity = true,
  showHeroCredentials = true,
}: {
  title?: string;
  question?: string;
  description?: string;
  locationLabel?: string;
  waUrl?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  heroImageLandscape?: boolean;
  showHeroIdentity?: boolean;
  showHeroCredentials?: boolean;
} = {}) {
  return (
    <section
      id="hero"
      className={`relative flex items-center overflow-hidden ${
        heroImageLandscape
          ? "pb-8 pt-32 lg:pb-10 lg:pt-36"
          : "min-h-screen pb-12 pt-32 lg:pb-24 lg:pt-40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className={`grid items-center gap-12 ${heroImageLandscape ? "lg:grid-cols-[0.82fr_1.18fr] lg:gap-10" : "lg:grid-cols-2 lg:gap-16"}`}>
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AA40]/35 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#806315]">
                <span className="w-1 h-1 rounded-full bg-[#806315] inline-block" />
                Defesa em busca e apreensão de veículo
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-border text-foreground/70 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
                <Scale className="w-3.5 h-3.5" />
                {locationLabel ?? "Atendimento especializado"}
              </span>
            </div>

            <h1
              className="text-[42px] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[72px] lg:leading-[1.08]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {title}
            </h1>

            <p className="text-xl lg:text-2xl font-semibold text-foreground leading-snug max-w-xl">
              {question}
            </p>

            <p className="text-base lg:text-lg text-foreground/70 leading-relaxed max-w-xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#0F7A32] px-6 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#0C6429]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                Consultar Especialista
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className={`relative w-full ${heroImageLandscape ? "max-w-[760px]" : "max-w-[420px]"}`}>
              <div className={`relative ${heroImageLandscape ? "aspect-[4/3]" : "aspect-[4/5]"} rounded-2xl overflow-hidden shadow-2xl border border-border/20 group`}>
                <Image
                  src={heroImageSrc}
                  alt={heroImageAlt}
                  fill
                  unoptimized={heroImageSrc.startsWith("http")}
                  sizes={heroImageLandscape ? "(max-width: 1024px) calc(100vw - 32px), 760px" : "(max-width: 640px) calc(100vw - 32px), 420px"}
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${heroImageLandscape ? "object-center" : "object-top"}`}
                  priority
                />
                {showHeroIdentity && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent px-5 py-4">
                    <p className="text-white font-semibold text-lg" style={{ fontFamily: "var(--font-poppins)" }}>
                      Dr. Marlon Rocha
                    </p>
                    <p className="text-white/80 text-sm">{OAB} · Advogado Especialista</p>
                  </div>
                )}
              </div>

              {showHeroCredentials && (
                <div className="mt-5 grid grid-cols-2 gap-4 rounded-2xl border border-border/50 bg-white px-5 py-4 shadow-sm">
                  <div className="flex items-center justify-center gap-3">
                    <span className="h-12 w-1 shrink-0 rounded-full bg-[#D4AA40]" />
                    <div>
                      <p className="font-bold leading-tight text-primary">Membro</p>
                      <p className="mt-1 text-xs leading-snug text-foreground/60">
                        Comissão de Direito Bancário - OAB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <span className="h-12 w-1 shrink-0 rounded-full bg-[#D4AA40]" />
                    <div>
                      <p className="font-bold leading-tight text-primary">Especialista</p>
                      <p className="mt-1 text-xs leading-snug text-foreground/60">
                        Direito Bancário
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PreviewServicesSection({
  basePath = "/preview-dba-copy",
  imageOrigin,
}: {
  basePath?: string;
  imageOrigin?: string;
}) {
  return (
    <section id="dores" className="py-20" style={{ backgroundColor: "rgba(229,225,209,0.4)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 reveal">
          <p className="text-xs font-semibold tracking-widest text-[#806315] uppercase mb-4">
            Atuação especializada
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Defesa Jurídica em Busca e Apreensão
          </h2>
          <p className="text-foreground/60 max-w-3xl text-base lg:text-lg">
            Análise técnica do caso, orientação individual e atuação nas diferentes fases da busca e
            apreensão de veículos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewServices.map((service, index) => (
            <a
              key={service.slug}
              href={`${basePath}/servicos/${service.slug}`}
              className="reveal group relative min-h-[390px] overflow-hidden rounded-2xl bg-[#102743] text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <Image
                src={imageOrigin ? `${imageOrigin}${service.image}` : service.image}
                alt={service.imageAlt}
                fill
                unoptimized={Boolean(imageOrigin)}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B213C] via-[#0B213C]/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="text-2xl font-bold leading-tight text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{service.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                  Saiba mais
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PreviewInstitutionalReviewsSection() {
  const totalSlides = reviews.length;
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % totalSlides);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [totalSlides]);

  const previousSlide = () => {
    setActiveSlide((current) => (current === 0 ? totalSlides - 1 : current - 1));
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % totalSlides);
  };

  return (
    <section id="reconhecimento" className="bg-background pt-6 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="reveal mb-6 flex items-center justify-center gap-6 border-b border-border/50 pb-4">
          <Image
            src="/images/logo-mrm.png"
            alt="MRM Advogados"
            width={190}
            height={89}
            className="h-auto w-[156px] object-contain"
          />
          <div className="border-l border-border py-1 pl-6 text-lg leading-relaxed text-foreground/70">
            <p>CNPJ: {CNPJ}</p>
            <p>OAB/MT PJ: {SOCIETY_OAB.replace("OAB/MT ", "")}</p>
          </div>
        </div>

        <div className="grid items-stretch gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="space-y-6 reveal">
            <p className="text-xs font-semibold tracking-widest text-[#806315] uppercase">
              Quem vai defender você
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Advocacia especializada em Direito Bancário
            </h2>
            <div className="space-y-4 text-foreground/75 leading-relaxed">
              <p>
                A MRM Advogados é um escritório especializado em Direito Bancário, com foco na
                defesa de consumidores em casos de busca e apreensão de veículo, revisão de contratos
                de financiamento e contestação de juros abusivos cobrados por bancos e financeiras.
                Atendimento online para todo o Brasil.
              </p>
              <p>
                À frente do escritório, o Dr. Marlon Rocha ({OAB}) é pós-graduado em Direito Bancário
                e membro da Comissão de Direito Bancário da OAB/MT, contribuindo para uma atuação
                técnica atualizada e uma defesa fundamentada em cada caso.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-5 h-5 fill-[#D4AA40] text-[#D4AA40]" />
              ))}
              <span className="font-bold text-foreground ml-1">5.0</span>
              <span className="text-foreground/65 text-sm">de 5.0</span>
            </div>

            <p className="text-sm text-foreground/60">
              Confira o que os clientes falam a nosso respeito:
            </p>

            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
            >
              Ver Avaliações no Google
              <ExternalLink className="w-4 h-4" />
            </a>

          </div>

          <div className="reveal flex h-full items-end justify-end">
            <div className="group relative aspect-[36/41] w-full max-w-[560px] overflow-hidden rounded-3xl border border-border/20 bg-transparent shadow-2xl">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/images/foto-marlon.png"
                  alt="Dr. Marlon Rocha, advogado especialista em Direito Bancário"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/90 to-transparent px-6 pb-3 pt-14 text-white">
                  <p className="text-lg font-semibold leading-tight text-white">Dr. Marlon Rocha</p>
                  <p className="mt-0.5 text-[11px] text-white/70">{OAB}</p>
                  <div className="mt-2 grid w-full grid-cols-2 gap-8 border-t border-white/20 pt-2">
                    <div className="border-l border-[#D4AA40] pl-2.5">
                      <p className="text-sm font-semibold leading-tight text-white">Membro</p>
                      <p className="mt-0.5 text-[10px] leading-tight text-white/70 sm:whitespace-nowrap">Comissão de Direito Bancário - OAB</p>
                    </div>
                    <div className="border-l border-[#D4AA40] pl-2.5">
                      <p className="text-sm font-semibold leading-tight text-white">Especialista</p>
                      <p className="mt-0.5 text-[10px] leading-tight text-white/70">Direito Bancário</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="reveal mt-5 flex min-h-[250px] w-full flex-col overflow-hidden rounded-3xl border border-[rgba(226,217,208,0.65)] bg-white shadow-sm"
          aria-live="polite"
        >
              <div className="flex items-center justify-between gap-4 border-b border-border/60 px-6 py-3.5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border bg-white">
                    <Image
                      src="/images/logo-mrm.png"
                      alt="MRM Advogados"
                      width={44}
                      height={44}
                      className="h-full w-full object-contain p-1"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">MRM Advogados</p>
                    <p className="text-xs text-foreground/65">Avaliação publicada no Google</p>
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm">
                  <span className="text-base font-bold text-blue-600">G</span>
                </div>
              </div>

              <div className="relative min-h-[135px] flex-1 overflow-hidden">
              {reviews.map((review, reviewIndex) => {
                const isActive = activeSlide === reviewIndex;

                return (
                  <div
                    key={review.author}
                    className={`absolute inset-0 flex flex-col justify-center bg-white px-6 py-4 transition-all duration-500 ease-in-out sm:px-10 ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "pointer-events-none translate-x-5 opacity-0"
                    }`}
                    aria-hidden={!isActive}
                  >
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="h-5 w-5 fill-[#D4AA40] text-[#D4AA40]" />
                      ))}
                    </div>
                    <blockquote className="mt-3 max-w-5xl text-sm italic leading-relaxed text-foreground/70 sm:text-base">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                    <p className="mt-2 text-xs text-foreground/45">- {review.author}</p>
                  </div>
                );
              })}
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-border/60 bg-white px-6 py-2.5">
                <div className="flex gap-2" aria-label={`${activeSlide + 1} de ${totalSlides}`}>
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Exibir avaliação ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        index === activeSlide ? "w-7 bg-primary" : "w-2 bg-border"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={previousSlide}
                    aria-label="Slide anterior"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-foreground/65 transition hover:border-primary hover:text-primary"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Próximo slide"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-foreground/65 transition hover:border-primary hover:text-primary"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
        </div>

      </div>
    </section>
  );
}
