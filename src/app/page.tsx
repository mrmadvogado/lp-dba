import { AlertBar } from "@/components/AlertBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemsSection } from "@/components/ProblemsSection";
import { LegalRightsSection } from "@/components/LegalRightsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { DiagnosticSection } from "@/components/DiagnosticSection";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { CookieConsent } from "@/components/CookieConsent";
import { RevealObserver } from "@/components/RevealObserver";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <RevealObserver />

      {/* Fixed header: alert bar + navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <AlertBar />
        <Navbar />
      </div>

      {/* Page content */}
      <main>
        <HeroSection />
        <ProblemsSection />
        <AboutSection />
        <HowItWorksSection />
        <LegalRightsSection />
        <CaseStudySection />
        <DiagnosticSection />
        <FAQSection />
        <section className="border-y border-border/50 bg-white py-12" aria-labelledby="conteudo-relacionado">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B8902A]">
              Conteúdo relacionado
            </p>
            <h2
              id="conteudo-relacionado"
              className="mt-3 text-2xl font-bold"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Entenda como funciona a defesa antes de decidir
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60">
              Consulte nosso artigo explicativo sobre etapas, documentos e pontos que podem ser
              analisados em uma ação envolvendo veículo financiado.
            </p>
            <Link
              href="/blog/como-funciona-defesa-busca-e-apreensao"
              className="mt-5 inline-flex text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
            >
              Como funciona a defesa em busca e apreensão de veículo
            </Link>
          </div>
        </section>
        <CTASection />
      </main>

      <Footer />

      {/* Floating WhatsApp button (desktop) */}
      <WhatsAppFAB />

      {/* Sticky bottom bar (mobile only) */}
      <MobileStickyBar />

      {/* LGPD cookie consent */}
      <CookieConsent />
    </>
  );
}
