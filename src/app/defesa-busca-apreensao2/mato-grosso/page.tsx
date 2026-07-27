import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, MessageCircle, MonitorSmartphone } from "lucide-react";
import { AlertBar } from "@/components/AlertBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { CookieConsent } from "@/components/CookieConsent";
import { PREVIEW_WA_URL } from "@/components/PreviewDbaV2";
import { mtLocations } from "@/lib/mtLocations";
import { SITE_URL } from "@/lib/constants";

const canonical = `${SITE_URL}/defesa-busca-apreensao/mato-grosso`;
const publicBase = "/defesa-busca-apreensao";

export const metadata: Metadata = {
  title: "Advogado de Busca e Apreensão em Mato Grosso | MRM",
  description: "Defesa em busca e apreensão de veículos em Mato Grosso. Sede em Cuiabá e atendimento online em cidades do estado.",
  robots: { index: true, follow: true },
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title: "Defesa em Busca e Apreensão em Mato Grosso", description: "Sede em Cuiabá e atendimento jurídico online em Mato Grosso.", locale: "pt_BR" },
};

export default function MatoGrossoHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Defesa em busca e apreensão de veículo em Mato Grosso",
        url: canonical,
        areaServed: { "@type": "State", name: "Mato Grosso" },
        provider: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "ItemList",
        name: "Cidades atendidas em Mato Grosso",
        itemListElement: mtLocations.map((location, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: location.city,
          url: `${canonical}/${location.slug}`,
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="fixed left-0 right-0 top-0 z-50 flex flex-col"><AlertBar /><Navbar waUrl={PREVIEW_WA_URL} ctaLabel="Consultar Especialista" /></div>
      <main>
        <section className="bg-background pb-16 pt-36 lg:pb-20 lg:pt-44">
          <div className="mx-auto max-w-7xl px-4">
            <nav aria-label="Navegação estrutural" className="mb-7 flex flex-wrap items-center gap-2 text-sm text-foreground/55">
              <Link href={publicBase} className="hover:text-primary">Defesa de Busca e Apreensão</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Mato Grosso</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#806315]">Atuação estadual</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-poppins)" }}>Advogado de Busca e Apreensão em Mato Grosso</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/75">A MRM Advogados tem sede em Cuiabá e oferece atendimento online para análise de busca e apreensão de veículos em diferentes regiões de Mato Grosso. Cada página abaixo explica como o atendimento funciona na cidade, sem divulgar filiais inexistentes.</p>
            <a href={PREVIEW_WA_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0F7A32] px-6 py-4 font-semibold text-white hover:bg-[#0C6429]"><MessageCircle className="h-5 w-5" /> Consultar Especialista</a>
          </div>
        </section>

        <section className="border-y border-border/50 bg-white py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#806315]">Páginas locais</p>
              <h2 className="mt-3 text-3xl font-bold lg:text-4xl" style={{ fontFamily: "var(--font-poppins)" }}>Escolha sua cidade</h2>
              <p className="mt-4 leading-relaxed text-foreground/70">As cidades foram priorizadas por relevância regional e sinais de demanda. Cuiabá é a única página com endereço físico; nas demais, o atendimento é expressamente online.</p>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {mtLocations.map((location) => (
                <Link key={location.slug} href={`${publicBase}/mato-grosso/${location.slug}`} className="group flex min-h-52 flex-col rounded-2xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center justify-between"><MapPin className="h-6 w-6 text-[#806315]" /><span className="rounded-full border border-border/60 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground/55">{location.hasOffice ? "Sede física" : "Online"}</span></div>
                  <h3 className="mt-5 text-2xl font-bold text-primary">{location.city}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/65">{location.lead}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#806315]">Ver atendimento <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
            <div>
              <MonitorSmartphone className="h-8 w-8 text-[#806315]" />
              <h2 className="mt-4 text-3xl font-bold" style={{ fontFamily: "var(--font-poppins)" }}>Como funciona o atendimento no estado</h2>
              <p className="mt-5 leading-8 text-foreground/70">O contato começa pelo WhatsApp. Com o número do processo, foto do mandado ou dados do veículo, é possível organizar a consulta inicial e solicitar os documentos que realmente importam. Processos eletrônicos permitem leitura e acompanhamento sem deslocamento desnecessário.</p>
              <p className="mt-4 leading-8 text-foreground/70">A sede e o cadastro institucional permanecem em Cuiabá. Essa consistência protege a clareza para o cliente e evita criar sinais locais artificiais para mecanismos de busca.</p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold">O que é verificado</h2>
              <ul className="mt-6 space-y-4">
                {["Processo, liminar, mandado e data de cumprimento", "Notificação extrajudicial e constituição em mora", "Contrato, parcelas, juros, tarifas e saldo", "Prazos e alternativas jurídicas aplicáveis ao caso"].map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/70"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />{item}</li>)}
              </ul>
              <Link href={`${publicBase}/servicos/busca-apreensao-veiculos`} className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">Ler o guia completo <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>

        <section className="border-t border-border/50 bg-white py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold">Outros municípios atendidos online</h2>
            <p className="mt-4 max-w-4xl leading-relaxed text-foreground/70">Também é possível solicitar atendimento a partir de Nova Mutum, Tangará da Serra, Cáceres, Alta Floresta, Pontes e Lacerda e outros municípios de Mato Grosso. Essas localidades permanecem vinculadas a esta página estadual até que exista demanda e conteúdo local suficiente para justificar uma página própria.</p>
          </div>
        </section>

        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4"><h2 className="text-3xl font-bold text-white lg:text-4xl">O veículo foi apreendido em Mato Grosso?</h2><p className="mt-4 text-white/75">Informe a cidade e a data da apreensão para iniciar o atendimento.</p><a href={PREVIEW_WA_URL} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0F7A32] px-6 py-4 font-semibold text-white hover:bg-[#0C6429]"><MessageCircle className="h-5 w-5" /> Consultar Especialista</a></div>
        </section>
      </main>
      <Footer variant="preview-copy" waUrl={PREVIEW_WA_URL} basePath={publicBase} />
      <WhatsAppFAB waUrl={PREVIEW_WA_URL} label="Consultar Especialista" /><MobileStickyBar waUrl={PREVIEW_WA_URL} label="Consultar Especialista" /><CookieConsent />
    </>
  );
}
