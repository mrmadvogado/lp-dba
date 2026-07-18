import { ExternalLink } from "lucide-react";
import { AlertBar } from "@/components/AlertBar";
import { Navbar } from "@/components/Navbar";
import {
  PreviewInstitutionalReviewsSection,
  PreviewMainHeroSection,
  PreviewServicesSection,
} from "@/components/PreviewMainCopySections";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { DiagnosticSection } from "@/components/DiagnosticSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { CookieConsent } from "@/components/CookieConsent";
import { RevealObserver } from "@/components/RevealObserver";
import { ADDRESS, CNPJ, LEGAL_NAME, OAB, PHONE, SITE_URL, SOCIETY_OAB } from "@/lib/constants";
import { PUBLIC_FAQS } from "@/lib/faq";
import { getMtLocation, type MtLocation } from "@/lib/mtLocations";

const basePath = "/defesa-busca-apreensao";
const assetOrigin = `${SITE_URL}/defesa-busca-apreensao-assets`;

function getCityWaUrl(city: string) {
  const message = `Olá! Meu veículo foi apreendido ou está em risco de busca e apreensão em ${city}. Gostaria de consultar um especialista.`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

function LocationJsonLd({ location }: { location: MtLocation }) {
  const url = `${SITE_URL}${basePath}/mato-grosso/${location.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${SITE_URL}/#organization`,
        name: "MRM Advogados",
        legalName: LEGAL_NAME,
        taxID: CNPJ,
        url: SITE_URL,
        telephone: `+${PHONE}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.streetAddress,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.state,
          postalCode: ADDRESS.postalCode,
          addressCountry: "BR",
        },
        identifier: { "@type": "PropertyValue", name: "OAB/MT PJ", value: SOCIETY_OAB },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Defesa em busca e apreensão de veículo em ${location.city}`,
        description: location.description,
        url,
        serviceType: "Advocacia em busca e apreensão de veículo",
        areaServed: {
          "@type": "City",
          name: location.city,
          containedInPlace: { "@type": "State", name: "Mato Grosso" },
        },
        provider: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: location.title,
        description: location.description,
        inLanguage: "pt-BR",
        dateModified: "2026-07-18",
        reviewedBy: { "@type": "Person", name: "Marlon Rocha", identifier: OAB },
        mainEntity: { "@id": `${url}#service` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Defesa de Busca e Apreensão", item: `${SITE_URL}${basePath}` },
          { "@type": "ListItem", position: 2, name: "Mato Grosso", item: `${SITE_URL}${basePath}/mato-grosso` },
          { "@type": "ListItem", position: 3, name: location.city, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [...location.faqs, ...PUBLIC_FAQS].map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LocationLandingPage({ location }: { location: MtLocation }) {
  const waUrl = getCityWaUrl(location.city);
  const heroTitle = `Advogado Busca e Apreensão de Veículo em ${location.city}`;
  const useTrackerHero = location.slug === "sinop";
  const displayedContext = location.slug === "sinop"
    ? [
        "Sinop tem população estimada de 223.780 habitantes em 2025, segundo o IBGE, e figura entre os principais centros urbanos do norte de Mato Grosso.",
        "O município registrou PIB per capita de R$ 59.782,63 em 2023 e receitas brutas realizadas superiores a R$ 1,37 bilhão em 2024. Essa relevância financeira torna Sinop uma praça importante para operações de crédito, financiamentos de veículos e outros contratos bancários.",
        "A ampla circulação de crédito também aumenta a exposição de consumidores e empresas a contratos complexos e a possíveis cobranças abusivas por bancos e financeiras. Nos financiamentos de veículos, a análise da notificação, da constituição em mora, das taxas cobradas e dos atos do processo pode revelar fundamentos relevantes para a defesa.",
      ]
    : location.context.filter((paragraph) =>
        !/(atendimento online|atendimento é online|atende online|sede da MRM|sede física|unidade física|filial|endereço virtual|a sede fica|a sede institucional|a partir de Cuiabá)/i.test(paragraph),
      );

  return (
    <>
      <LocationJsonLd location={location} />
      <RevealObserver />

      <div className="fixed left-0 right-0 top-0 z-50 flex flex-col">
        <AlertBar />
        <Navbar waUrl={waUrl} ctaLabel="Consultar Especialista" />
      </div>

      <main>
        <PreviewMainHeroSection
          title={heroTitle}
          question={`Seu veículo foi apreendido ou está com risco de busca e apreensão em ${location.city}?`}
          description="Entenda as opções jurídicas aplicáveis ao seu caso, os prazos que precisam ser observados e as medidas que podem ser analisadas para buscar a retomada do veículo."
          locationLabel={`Atendimento em ${location.city}`}
          waUrl={waUrl}
          heroImageSrc={useTrackerHero ? `${assetOrigin}/images/services/busca-apreensao-reboque-comercial-v2.png` : undefined}
          heroImageAlt={useTrackerHero ? "Veículo Chevrolet Tracker sendo colocado em caminhão de reboque durante busca e apreensão" : undefined}
          heroImageLandscape={useTrackerHero}
          showHeroIdentity={!useTrackerHero}
          showHeroCredentials={!useTrackerHero}
        />

        <PreviewInstitutionalReviewsSection />

        <section className="border-y border-border/50 bg-white py-16" aria-labelledby={`defesa-${location.slug}`}>
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-5xl">
              <div className="reveal">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#806315]">Defesa na sua cidade</p>
                <h2 id={`defesa-${location.slug}`} className="mt-3 text-3xl font-bold leading-tight lg:text-5xl" style={{ fontFamily: "var(--font-poppins)" }}>
                  Busca e apreensão de veículo em {location.city}
                </h2>
                <div className="mt-6 space-y-4 text-base leading-8 text-foreground/75">
                  {displayedContext.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <a href={location.ibgeUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-foreground/55 hover:text-primary">
                  Informações territoriais: IBGE <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {location.judicial && (
                <div className="reveal mt-12">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#806315]">Como funciona na comarca</p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight lg:text-3xl" style={{ fontFamily: "var(--font-poppins)" }}>
                    O processo de busca e apreensão em {location.city}
                  </h3>
                  <div className="mt-6 grid gap-5 md:grid-cols-3">
                    {location.judicial.map((item) => (
                      <article key={item.title} className="rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
                        <h4 className="text-lg font-bold">{item.title}</h4>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/70">{item.text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              <div className="reveal mt-12 grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#806315]">Atendimento local</p>
                  <ul className="mt-4 space-y-4">
                    {location.localPoints.map((point) => (
                      <li key={point.title} className="rounded-xl border border-border/50 bg-background p-4">
                        <p className="font-semibold">{point.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/70">{point.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#806315]">Antes do primeiro contato</p>
                  <ul className="mt-4 space-y-3">
                    {location.processNotes.map((note) => (
                      <li key={note} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/75">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#806315]" aria-hidden />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PreviewServicesSection basePath={basePath} imageOrigin={assetOrigin} />
        <HowItWorksSection variant="preview-copy" city={location.city} waUrl={waUrl} />

        <section className="bg-background py-16" aria-labelledby={`prazos-${location.slug}`}>
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#806315]">Orientação imediata</p>
              <h2 id={`prazos-${location.slug}`} className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight lg:text-4xl" style={{ fontFamily: "var(--font-poppins)" }}>
                O que precisa ser analisado após a apreensão em {location.city}
              </h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <article className="reveal rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold text-[#806315]">01</p><h3 className="mt-2 text-xl font-bold">Processo e decisão</h3><p className="mt-3 text-sm leading-relaxed text-foreground/70">Conferimos a liminar, o mandado, a data do cumprimento e os prazos que começaram a correr no caso concreto.</p>
              </article>
              <article className="reveal rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold text-[#806315]">02</p><h3 className="mt-2 text-xl font-bold">Notificação e mora</h3><p className="mt-3 text-sm leading-relaxed text-foreground/70">A notificação, o endereço do contrato e os documentos usados pelo banco são confrontados com o processo.</p>
              </article>
              <article className="reveal rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold text-[#806315]">03</p><h3 className="mt-2 text-xl font-bold">Contrato e valores</h3><p className="mt-3 text-sm leading-relaxed text-foreground/70">Analisamos parcelas, juros, tarifas, pagamentos e o saldo apresentado para identificar as opções juridicamente aplicáveis.</p>
              </article>
            </div>
            <p className="mx-auto mt-7 max-w-4xl text-center text-sm leading-relaxed text-foreground/65">A apreensão não encerra automaticamente a possibilidade de defesa. A devolução do veículo pode ser buscada quando houver fundamento para combater abusividades.</p>
          </div>
        </section>

        <CaseStudySection waUrl={waUrl} variant="preview-copy" />
        <DiagnosticSection variant="preview-copy" waUrl={waUrl} />
        <FAQSection compact items={[...location.faqs, ...PUBLIC_FAQS]} />

        {location.nearby.length > 0 && (
          <section className="border-t border-border/50 bg-white py-10" aria-label="Atendimento na região">
            <div className="mx-auto max-w-5xl px-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#806315]">Atendimento na região</p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {location.nearby.map((slug) => {
                  const neighbor = getMtLocation(slug);
                  if (!neighbor) return null;
                  return (
                    <a
                      key={slug}
                      href={`${basePath}/mato-grosso/${slug}`}
                      className="rounded-full border border-border/60 px-4 py-2 text-sm font-semibold text-foreground/70 transition-colors hover:border-[#806315] hover:text-[#806315]"
                    >
                      {neighbor.city}
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <CTASection
          buttonLabel="Consultar Especialista"
          description={`Atuação em casos de busca e apreensão de veículos em ${location.city}, com análise individual das medidas juridicamente aplicáveis.`}
          variant="preview-copy"
          waUrl={waUrl}
        />

      </main>

      <Footer variant="preview-copy" waUrl={waUrl} basePath={basePath} />
      <WhatsAppFAB waUrl={waUrl} label="Consultar Especialista" />
      <MobileStickyBar waUrl={waUrl} label="Consultar Especialista" />
      <CookieConsent />
    </>
  );
}
