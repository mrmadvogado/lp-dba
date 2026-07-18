import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
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
import { JsonLd } from "@/components/JsonLd";
import { PREVIEW_WA_URL } from "@/components/PreviewDbaV2";
import { SITE_URL } from "@/lib/constants";

const landingUrl = `${SITE_URL}/defesa-busca-apreensao`;
const lpAssetOrigin = `${SITE_URL}/defesa-busca-apreensao-assets`;

export const metadata: Metadata = {
  title: "Advogado Especialista em Busca e Apreensão de Veículo | MRM",
  description:
    "Defesa jurídica em busca e apreensão de veículo. Consulte advogado especialista para analisar apreensão, contrato, notificação e prazos em todo o Brasil.",
  robots: { index: true, follow: true },
  alternates: { canonical: landingUrl },
  openGraph: {
    type: "website",
    url: landingUrl,
    siteName: "MRM Advogados",
    title: "Advogado Especialista em Busca e Apreensão de Veículo | MRM",
    description:
      "Defesa jurídica em busca e apreensão de veículo com atendimento especializado em todo o Brasil.",
    locale: "pt_BR",
    images: [
      {
        url: "/images/foto-marlon.png",
        width: 1200,
        height: 630,
        alt: "Dr. Marlon Rocha, advogado especialista em Direito Bancário",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advogado Especialista em Busca e Apreensão de Veículo | MRM",
    description: "Defesa jurídica em busca e apreensão de veículo.",
    images: ["/images/foto-marlon.png"],
  },
};

export default function DefesaBuscaApreensao2Page() {
  return (
    <>
      <JsonLd landingUrl={landingUrl} />
      <RevealObserver />

      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <AlertBar />
        <Navbar waUrl={PREVIEW_WA_URL} ctaLabel="Consultar Especialista" />
      </div>

      <main>
        <PreviewMainHeroSection />
        <PreviewServicesSection basePath="/defesa-busca-apreensao" imageOrigin={lpAssetOrigin} />
        <PreviewInstitutionalReviewsSection />
        <HowItWorksSection variant="preview-copy" />
        <section className="border-y border-border/50 bg-white py-16" aria-labelledby="orientacao-imediata">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#806315]">
              Orientação inicial
            </p>
            <h2
              id="orientacao-imediata"
              className="mt-3 max-w-3xl text-3xl font-bold leading-tight lg:text-4xl"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              O que fazer após a apreensão do veículo?
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-border/60 bg-background p-6">
                <h3 className="text-xl font-bold">Observe os prazos e busque análise imediata</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  Após a execução da liminar, a legislação prevê cinco dias para o pagamento da
                  integralidade da dívida apresentada pelo banco e quinze dias para apresentação da
                  resposta no processo. Contrato, notificação e andamento judicial precisam ser
                  analisados em conjunto, pois a medida adequada depende dos documentos e da fase do
                  caso. O primeiro passo é confirmar a data da apreensão e obter os dados do processo.
                </p>
                <a
                  href="https://www.planalto.gov.br/ccivil_03/decreto-lei/1965-1988/del0911compilado.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-primary underline underline-offset-4"
                >
                  Consultar o Decreto-Lei 911/69
                </a>
              </article>
              <article className="rounded-2xl border border-border/60 bg-background p-6">
                <h3 className="text-xl font-bold">Ainda é possível buscar a devolução do veículo?</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  A apreensão não encerra automaticamente a possibilidade de defesa. Dependendo do
                  caso, podem ser examinados o envio da notificação ao endereço informado no contrato,
                  a comprovação da mora, as cláusulas do financiamento e a regularidade dos atos do
                  processo. A devolução do veículo depende dos fundamentos encontrados e de decisão
                  judicial; por isso, nenhum resultado pode ser definido sem análise individual.
                </p>
                <a
                  href="https://processo.stj.jus.br/repetitivos/temas_repetitivos/pesquisa.jsp?novaConsulta=true&num_processo_classe=1951888&sg_classe=REsp&tipo_pesquisa=T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-primary underline underline-offset-4"
                >
                  Consultar precedente qualificado do STJ
                </a>
              </article>
            </div>
            <p className="mt-6 text-xs text-foreground/65">
              Conteúdo revisado por Dr. Marlon Rocha, OAB/MT 35.470, em 18 de julho de 2026.
            </p>
          </div>
        </section>
        <CaseStudySection waUrl={PREVIEW_WA_URL} variant="preview-copy" />
        <DiagnosticSection variant="preview-copy" />
        <FAQSection compact />
        <CTASection
          buttonLabel="Consultar Especialista"
          description={null}
          variant="preview-copy"
          waUrl={PREVIEW_WA_URL}
        />
        <section
          className="border-b border-border/50 bg-background py-12"
          aria-labelledby="conteudo-relacionado-dba"
        >
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid items-center gap-8 rounded-3xl border border-border/60 bg-white p-7 shadow-sm md:grid-cols-[1.25fr_0.75fr] md:p-9">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#806315]">
                  Conteúdo relacionado
                </p>
                <h2
                  id="conteudo-relacionado-dba"
                  className="mt-3 text-2xl font-bold lg:text-3xl"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Ainda tem dúvidas sobre a defesa do seu veículo?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/65">
                  Você pode falar diretamente com um especialista agora. Se preferir conhecer antes
                  os principais pontos analisados nesses casos, consulte nosso conteúdo explicativo.
                </p>
              </div>
              <div className="flex flex-col items-stretch gap-3 md:items-end">
                <a
                  href={PREVIEW_WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F7A32] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0C6429]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Consultar Especialista
                </a>
                <Link
                  href="/blog/como-funciona-defesa-busca-e-apreensao"
                  className="inline-flex items-center justify-center gap-2 px-2 py-2 text-sm font-semibold text-primary hover:underline"
                >
                  Ler conteúdo explicativo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="border-b border-border/50 bg-white py-14" aria-labelledby="atendimento-mato-grosso">
          <div className="mx-auto max-w-5xl px-4">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#806315]">Atendimento local</p>
                <h2 id="atendimento-mato-grosso" className="mt-3 text-3xl font-bold" style={{ fontFamily: "var(--font-poppins)" }}>
                  Defesa em busca e apreensão em Mato Grosso
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                  Sede em Cuiabá e atendimento online em cidades priorizadas do estado, com páginas próprias e informações transparentes sobre a modalidade de atendimento.
                </p>
              </div>
              <Link href="/defesa-busca-apreensao/mato-grosso" className="inline-flex shrink-0 items-center gap-2 font-semibold text-primary hover:underline">
                Ver cidades atendidas <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                ["Cuiabá", "cuiaba"], ["Sinop", "sinop"], ["Rondonópolis", "rondonopolis"],
                ["Várzea Grande", "varzea-grande"], ["Lucas do Rio Verde", "lucas-do-rio-verde"],
                ["Primavera do Leste", "primavera-do-leste"], ["Sorriso", "sorriso"],
              ].map(([city, slug]) => (
                <Link key={slug} href={`/defesa-busca-apreensao/mato-grosso/${slug}`} className="rounded-full border border-border/60 bg-background px-4 py-2 text-sm font-medium text-foreground/70 transition hover:border-primary hover:text-primary">
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer
        variant="preview-copy"
        waUrl={PREVIEW_WA_URL}
        basePath="/defesa-busca-apreensao"
      />
      <WhatsAppFAB waUrl={PREVIEW_WA_URL} label="Consultar Especialista" />
      <MobileStickyBar waUrl={PREVIEW_WA_URL} label="Consultar Especialista" />
      <CookieConsent />
    </>
  );
}
