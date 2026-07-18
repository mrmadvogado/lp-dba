import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock3,
  FileSearch,
  MessageCircle,
  ShieldAlert,
} from "lucide-react";
import { AlertBar } from "@/components/AlertBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { CookieConsent } from "@/components/CookieConsent";
import { PREVIEW_WA_URL } from "@/components/PreviewDbaV2";
import { SITE_URL } from "@/lib/constants";
import { getPreviewService, type PreviewService } from "@/lib/previewServices";

function ServiceJsonLd({ service }: { service: PreviewService }) {
  const url = `${SITE_URL}/defesa-busca-apreensao/servicos/${service.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        description: service.description,
        url,
        areaServed: { "@type": "Country", name: "Brasil" },
        provider: { "@id": `${SITE_URL}/#organization` },
        serviceType: "Serviço jurídico em Direito Bancário",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Defesa de Busca e Apreensão", item: `${SITE_URL}/defesa-busca-apreensao` },
          { "@type": "ListItem", position: 3, name: service.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function PreviewServiceDetail({
  service,
  basePath = "/preview-dba-copy",
  publicPage = false,
  imageOrigin,
}: {
  service: PreviewService;
  basePath?: string;
  publicPage?: boolean;
  imageOrigin?: string;
}) {
  const related = service.relatedSlugs
    .map((slug) => getPreviewService(slug))
    .filter((item): item is PreviewService => Boolean(item));

  return (
    <>
      {publicPage && <ServiceJsonLd service={service} />}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <AlertBar />
        <Navbar waUrl={PREVIEW_WA_URL} ctaLabel="Consultar Especialista" />
      </div>

      <main>
        <section className="bg-background pb-14 pt-36 lg:pb-20 lg:pt-44">
          <div className="mx-auto max-w-7xl px-4">
            <nav aria-label="Navegação estrutural" className="flex flex-wrap items-center gap-2 text-sm text-foreground/55">
              <Link href={basePath} className="hover:text-primary">Defesa de Busca e Apreensão</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{service.title}</span>
            </nav>

            <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#806315]">
                  Defesa em busca e apreensão de veículo
                </p>
                <h1 className="mt-4 text-4xl font-bold leading-tight lg:text-6xl" style={{ fontFamily: "var(--font-poppins)" }}>
                  {service.title}
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-foreground/75">{service.intro}</p>
                <a href={PREVIEW_WA_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-[#0F7A32] px-6 py-4 font-semibold text-white shadow-sm transition-colors hover:bg-[#0C6429]">
                  <MessageCircle className="h-5 w-5" />
                  Consultar Especialista
                </a>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={imageOrigin ? `${imageOrigin}${service.image}` : service.image}
                  alt={service.imageAlt}
                  fill
                  unoptimized={Boolean(imageOrigin)}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B213C]/55 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/50 bg-white py-14 lg:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#806315]">Visão geral</p>
                <h2 className="mt-3 text-3xl font-bold leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
                  O que você precisa saber
                </h2>
                <p className="mt-4 leading-relaxed text-foreground/70">{service.summary}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {service.points.map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-border/60 bg-background p-4 text-sm leading-relaxed text-foreground/70">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <article className="bg-background py-16 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_280px]">
            <div className="space-y-14">
              {service.sections.map((section, index) => (
                <section key={section.heading} aria-labelledby={`section-${index}`}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#806315]">{String(index + 1).padStart(2, "0")}</p>
                  <h2 id={`section-${index}`} className="mt-2 text-3xl font-bold leading-tight lg:text-4xl" style={{ fontFamily: "var(--font-poppins)" }}>
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-8 text-foreground/75">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.items && (
                    <div className="mt-7 grid gap-4 md:grid-cols-3">
                      {section.items.map((item) => (
                        <div key={item.title} className="rounded-2xl border border-border/60 bg-white p-5 shadow-sm">
                          <h3 className="font-bold text-primary">{item.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-foreground/65">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              <aside className="flex gap-4 rounded-2xl border border-amber-300/60 bg-amber-50 p-6" aria-label="Orientação importante">
                <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-[#806315]" />
                <div>
                  <h2 className="font-bold text-primary">Atenção antes de decidir</h2>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{service.alert}</p>
                </div>
              </aside>
            </div>

            <aside className="h-fit rounded-2xl border border-border/60 bg-white p-5 shadow-sm lg:sticky lg:top-36">
              <FileSearch className="h-7 w-7 text-[#806315]" />
              <h2 className="mt-3 text-xl font-bold">Análise individual do caso</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                Envie o que tiver disponível. A qualificação e a conferência dos documentos continuam no atendimento.
              </p>
              <a href={PREVIEW_WA_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F7A32] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0C6429]">
                <MessageCircle className="h-4 w-4" /> Consultar Especialista
              </a>
              <div className="mt-5 flex gap-2 border-t border-border/60 pt-4 text-xs leading-relaxed text-foreground/55">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0" />
                Prazos são contados conforme os atos do processo. Informe a data da apreensão, se já ocorreu.
              </div>
            </aside>
          </div>
        </article>

        <section className="border-y border-border/50 bg-white py-16" aria-labelledby="faq-servico">
          <div className="mx-auto max-w-4xl px-4">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#806315]">Dúvidas frequentes</p>
            <h2 id="faq-servico" className="mt-3 text-center text-3xl font-bold lg:text-4xl" style={{ fontFamily: "var(--font-poppins)" }}>
              Perguntas sobre {service.title.toLocaleLowerCase("pt-BR")}
            </h2>
            <div className="mt-8 divide-y divide-border/60 rounded-2xl border border-border/60 bg-background px-6">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 font-semibold text-primary marker:hidden">{faq.question}</summary>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16" aria-labelledby="servicos-relacionados">
          <div className="mx-auto max-w-6xl px-4">
            <h2 id="servicos-relacionados" className="text-3xl font-bold" style={{ fontFamily: "var(--font-poppins)" }}>Serviços relacionados</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} href={`${basePath}/servicos/${item.slug}`} className="group rounded-2xl border border-border/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/65">{item.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#806315]">Saiba mais <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </Link>
              ))}
            </div>
            <Link href={`${basePath}#dores`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" /> Ver todas as áreas
            </Link>
            <p className="mt-8 text-xs text-foreground/55">Conteúdo jurídico revisado por Dr. Marlon Rocha, OAB/MT 35.470, em 18 de julho de 2026.</p>
          </div>
        </section>

        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">Seu veículo foi apreendido ou está em risco?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/75">Converse com um especialista para analisar a situação conforme os documentos e os prazos do seu caso.</p>
            <a href={PREVIEW_WA_URL} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2.5 rounded-xl bg-[#0F7A32] px-6 py-4 font-semibold text-white hover:bg-[#0C6429]">
              <MessageCircle className="h-5 w-5" /> Consultar Especialista
            </a>
          </div>
        </section>
      </main>

      <Footer variant={publicPage ? "preview-copy" : undefined} waUrl={PREVIEW_WA_URL} basePath={basePath} />
      <WhatsAppFAB waUrl={PREVIEW_WA_URL} label="Consultar Especialista" />
      <MobileStickyBar waUrl={PREVIEW_WA_URL} label="Consultar Especialista" />
      <CookieConsent />
    </>
  );
}
