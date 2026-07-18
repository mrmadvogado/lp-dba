import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { LegalRightsSection } from "@/components/LegalRightsSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { CookieConsent } from "@/components/CookieConsent";
import { RevealObserver } from "@/components/RevealObserver";
import {
  PreviewAlertBar,
  PreviewFinalCta,
  PreviewHeroSection,
  PREVIEW_WA_URL,
  PreviewProcessSection,
  PreviewRelatedContent,
  SituationPathSection,
} from "@/components/PreviewDbaV2";

export const metadata: Metadata = {
  title: "Prévia DBA V2 | MRM Advogados",
  description: "Versão de avaliação da landing page de defesa em busca e apreensão.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PreviewDbaV2Page() {
  return (
    <>
      <RevealObserver />

      <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
        <PreviewAlertBar variant="guided" />
        <Navbar waUrl={PREVIEW_WA_URL} ctaLabel="Consultar especialista" />
      </div>

      <main>
        <PreviewHeroSection variant="guided" />
        <SituationPathSection variant="guided" />
        <PreviewProcessSection variant="guided" />
        <AboutSection />
        <LegalRightsSection />
        <CaseStudySection waUrl={PREVIEW_WA_URL} />
        <FAQSection />
        <PreviewRelatedContent />
        <PreviewFinalCta variant="guided" />
      </main>

      <Footer />
      <WhatsAppFAB waUrl={PREVIEW_WA_URL} label="Consultar especialista" />
      <MobileStickyBar waUrl={PREVIEW_WA_URL} label="Consultar especialista" />
      <CookieConsent />
    </>
  );
}
