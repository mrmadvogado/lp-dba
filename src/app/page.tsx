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
import { LegalNoticesSection } from "@/components/LegalNoticesSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { RevealObserver } from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
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
        <LegalRightsSection />
        <HowItWorksSection />
        <CaseStudySection />
        <DiagnosticSection />
        <AboutSection />
        <FAQSection />
        <CTASection />
        <LegalNoticesSection />
      </main>

      <Footer />

      {/* Floating WhatsApp button */}
      <WhatsAppFAB />
    </>
  );
}
