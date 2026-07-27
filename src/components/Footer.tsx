import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { ADDRESS, CNPJ, GOOGLE_BUSINESS_URL, SITE_URL, SOCIAL, SOCIETY_OAB } from "@/lib/constants";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";

type FooterProps = {
  variant?: "default" | "preview-copy";
  waUrl?: string;
  basePath?: string;
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M14.2 8H17V4.2c-.5-.1-2.1-.2-4-.2-3.9 0-6.5 2.3-6.5 6.7V14H3v4.3h3.5V24h4.3v-5.7h3.6L15 14h-4.2v-2.9C10.8 9.9 11.1 8 14.2 8Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M5.4 7.8H1.8V22h3.6V7.8ZM3.6 2A2.1 2.1 0 1 0 3.6 6.2 2.1 2.1 0 0 0 3.6 2ZM22 13.9c0-4.3-2.3-6.3-5.4-6.3-2.5 0-3.6 1.4-4.2 2.3V7.8H8.8V22h3.6v-7c0-1.8.4-3.6 2.7-3.6 2.3 0 2.3 2.1 2.3 3.8V22H22v-8.1Z" />
    </svg>
  );
}

const previewServices = [
  ["Defesa de Busca e Apreensão", `${SITE_URL}/defesa-busca-apreensao`],
  ["Revisão de Contrato Veicular", `${SITE_URL}/#contato`],
  ["Empréstimo Bancário", `${SITE_URL}/#contato`],
  ["Cartão de Crédito / Cheque Especial", `${SITE_URL}/#contato`],
  ["Capital de Giro", `${SITE_URL}/#contato`],
  ["Renegociação de Dívida", `${SITE_URL}/#contato`],
  ["Execução Judicial e Extrajudicial", `${SITE_URL}/#contato`],
  ["Defesa de Execução", `${SITE_URL}/#contato`],
] as const;

function PreviewCopyFooter({ waUrl, basePath }: { waUrl: string; basePath: string }) {
  return (
    <footer className="border-t border-white/10 bg-[#102343] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-7 pt-12">
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-[1.25fr_1.35fr_0.85fr_1.3fr_0.8fr] lg:gap-8">
          <div>
            <Image
              src="/images/logo-mrm.png"
              alt="MRM Advogados"
              width={180}
              height={90}
              className="h-12 w-auto brightness-0 invert"
            />
            <div className="mt-5 text-xs leading-relaxed text-white/65">
              <p>CNPJ: {CNPJ}</p>
              <p>{SOCIETY_OAB.replace("OAB/MT", "OAB/MT PJ:")}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Áreas de atuação</p>
            <nav className="mt-5 space-y-3" aria-label="Áreas de atuação no rodapé">
              {previewServices.map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm leading-snug text-white/60 transition hover:text-white">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Navegação</p>
            <nav className="mt-5 space-y-3" aria-label="Navegação do rodapé">
              <Link href={basePath} className="block text-sm text-white/60 transition hover:text-white">Início</Link>
              <Link href={`${basePath}#dores`} className="block text-sm text-white/60 transition hover:text-white">Serviços</Link>
              <Link href={`${basePath}/mato-grosso`} className="block text-sm text-white/60 transition hover:text-white">Atuação em Mato Grosso</Link>
              <Link href={`${SITE_URL}/blog`} className="block text-sm text-white/60 transition hover:text-white">Conteúdos jurídicos</Link>
              <Link href={SITE_URL} className="block text-sm text-white/60 transition hover:text-white">Site institucional</Link>
              <Link href={`${basePath}#reconhecimento`} className="block text-sm text-white/60 transition hover:text-white">O escritório</Link>
              <Link href={`${basePath}#como-funciona`} className="block text-sm text-white/60 transition hover:text-white">Como funciona</Link>
              <Link href={`${basePath}#faq`} className="block text-sm text-white/60 transition hover:text-white">Dúvidas frequentes</Link>
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contato</p>
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex gap-2.5 text-sm leading-relaxed text-white/60 transition hover:text-white"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AA40]" />
              <span>
                {ADDRESS.streetAddress}<br />
                {ADDRESS.neighborhood}, {ADDRESS.city}-{ADDRESS.state}<br />
                CEP {ADDRESS.postalCode}
              </span>
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              (65) 99261-8251
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Redes sociais</p>
            <div className="mt-5 space-y-3">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white">
                <InstagramIcon /> Instagram
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white">
                <LinkedInIcon /> LinkedIn
              </a>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white">
                <FacebookIcon /> Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-center text-[10px] leading-relaxed text-white/60">
          <p>
            Publicidade em conformidade com o Provimento OAB nº 205/2021. Conteúdo informativo;
            cada caso depende da análise individual dos fatos e documentos.
          </p>
          <p className="mt-1">
            Este site não é um produto da Meta Platforms, Inc. ou da Google LLC e não oferece serviços públicos oficiais.
          </p>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-white/10 pb-20 pt-5 text-xs text-white/65 sm:flex-row sm:pb-0 sm:pr-52">
          <p>Copyright © 2026 MRM ADVOGADOS. Todos os direitos reservados.</p>
          <Link href="/politica-de-privacidade" className="transition hover:text-white/70">
            Política de Privacidade
          </Link>
          <CookiePreferencesButton className="transition hover:text-white/70" />
        </div>
      </div>
    </footer>
  );
}

function DefaultFooter() {
  return (
    <footer className="border-t border-border/40" style={{ backgroundColor: "rgb(229,225,209)" }}>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <Image src="/images/logo-mrm.png" alt="MRM Advogados" width={444} height={224} className="h-16 w-auto shrink-0" />
          <div className="flex flex-col items-center justify-center sm:items-start">
            <p className="text-sm text-foreground/60">CNPJ: {CNPJ}</p>
            <p className="mt-1 text-sm text-foreground/60">{SOCIETY_OAB.replace("OAB/MT", "OAB/MT PJ:")}</p>
          </div>
        </div>

        <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="mt-7 flex items-center gap-3 rounded-xl border border-border/60 bg-white/25 px-4 py-3 text-sm text-foreground/60 hover:bg-white/40 hover:text-foreground/85 transition-colors">
          <MapPin className="w-5 h-5 text-[#B8902A] shrink-0" aria-hidden="true" />
          <span>
            {ADDRESS.streetAddress} · {ADDRESS.neighborhood}<br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            {ADDRESS.city}-{ADDRESS.state} · CEP {ADDRESS.postalCode}
          </span>
        </a>

        <div className="mx-auto mt-6 max-w-4xl text-center text-[11px] leading-relaxed text-foreground/35">
          <p>Publicidade em conformidade com o Provimento OAB nº 205/2021. Este site tem caráter informativo, não constitui aconselhamento jurídico e não promete resultados. Cada caso depende da análise individual dos fatos e documentos.</p>
          <p className="mt-2">Este site não é um produto da Meta Platforms, Inc. ou da Google LLC, tampouco oferece serviços públicos oficiais. Somos um escritório de advocacia que oferece serviços jurídicos privativos de advogados, de acordo com a legislação vigente e o Código de Ética e Disciplina da OAB do Brasil.</p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-5 text-xs text-foreground/45 sm:flex-row">
          <p>Copyright © 2026 MRM ADVOGADOS. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/politica-de-privacidade" className="hover:text-foreground/70 transition-colors underline underline-offset-2">Política de Privacidade</Link>
            <CookiePreferencesButton className="hover:text-foreground/70 transition-colors underline underline-offset-2" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Footer({
  variant = "default",
  waUrl,
  basePath = "/preview-dba-copy",
}: FooterProps = {}) {
  if (variant === "preview-copy" && waUrl) {
    return <PreviewCopyFooter waUrl={waUrl} basePath={basePath} />;
  }

  return <DefaultFooter />;
}
