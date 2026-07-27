import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CarFront,
  CheckCircle2,
  CircleAlert,
  Clock3,
  FileCheck2,
  FileText,
  Gavel,
  LockKeyhole,
  MessageCircle,
  Scale,
  SearchCheck,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { OAB } from "@/lib/constants";

export const PREVIEW_WA_URL =
  "https://wa.me/5565992618251?text=Ol%C3%A1%21+Meu+ve%C3%ADculo+foi+apreendido+ou+est%C3%A1+com+risco+de+busca+e+apreens%C3%A3o.+Gostaria+de+consultar+um+especialista.";

const WA_URL = PREVIEW_WA_URL;

type PreviewVariant = "guided" | "direct";

const directServices = [
  {
    icon: CarFront,
    title: "Veículo apreendido pelo banco",
    description:
      "Após a apreensão, existem prazos e etapas processuais que precisam ser observados. O processo, a notificação e o contrato podem ser analisados para identificar as medidas aplicáveis.",
  },
  {
    icon: Gavel,
    title: "Processo ou mandado em andamento",
    description:
      "A análise do processo permite verificar a notificação, a decisão judicial, o cumprimento do mandado e os prazos existentes.",
  },
  {
    icon: CircleAlert,
    title: "Risco de busca e apreensão",
    description:
      "Para quem está com parcelas atrasadas, recebeu cobrança ou identificou sinais de que o banco pode pedir a apreensão do veículo.",
  },
  {
    icon: ShieldCheck,
    title: "Defesa na ação de busca e apreensão",
    description:
      "Os fundamentos apresentados pelo banco e as circunstâncias do financiamento são avaliados para identificar as possibilidades de defesa.",
  },
  {
    icon: FileText,
    title: "Contrato e cobranças abusivas",
    description:
      "Juros, tarifas, encargos e outras condições do contrato de financiamento podem ser examinados de acordo com os documentos do caso.",
  },
  {
    icon: Scale,
    title: "Entrega amigável e saldo devedor",
    description:
      "Antes de devolver o veículo, é importante compreender os efeitos da entrega amigável e a possibilidade de permanecer saldo a pagar.",
  },
];

const guidedSituations = [
  {
    icon: CircleAlert,
    label: "Recebi uma cobrança ou notificação",
    title: "Ainda não houve apreensão",
    description:
      "Organize o contrato e as comunicações recebidas para verificar o estágio da cobrança e as alternativas disponíveis.",
  },
  {
    icon: Gavel,
    label: "Descobri um processo ou mandado",
    title: "Existe risco de apreensão",
    description:
      "Os dados do processo ajudam a identificar decisões, prazos e os documentos necessários para uma análise individual.",
  },
  {
    icon: CarFront,
    label: "O banco já apreendeu o veículo",
    title: "O caso exige atenção imediata",
    description:
      "A data da apreensão e a documentação do financiamento são relevantes para avaliar quais medidas ainda podem ser consideradas.",
  },
  {
    icon: FileCheck2,
    label: "Quero entender contrato ou acordo",
    title: "Preciso avaliar a documentação",
    description:
      "Contrato, parcelas, notificações e histórico de negociação permitem uma orientação mais precisa e responsável.",
  },
];

const guidedSteps = [
  {
    icon: MessageCircle,
    title: "Conte o que aconteceu",
    description:
      "Informe se houve notificação, processo, mandado ou apreensão e em que data isso ocorreu.",
  },
  {
    icon: SearchCheck,
    title: "Envie os documentos disponíveis",
    description:
      "O contrato e os dados do processo são examinados para compreender o contexto específico do caso.",
  },
  {
    icon: Scale,
    title: "Conheça as opções aplicáveis",
    description:
      "Você recebe uma explicação clara sobre os possíveis caminhos, limites, riscos e próximos passos.",
  },
];

const guidedDocuments = [
  "Contrato ou cédula de financiamento",
  "Notificações e mensagens recebidas do banco",
  "Número do processo, mandado ou decisão, se houver",
  "Comprovantes das parcelas e negociações realizadas",
  "Auto ou termo de apreensão, caso o veículo já tenha sido levado",
];

export function PreviewAlertBar({ variant = "direct" }: { variant?: PreviewVariant }) {
  const direct = variant === "direct";
  return (
    <div className="w-full border-b border-white/10 bg-[#1B2D4F] px-4 py-2.5">
      {direct ? (
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-xs font-medium leading-relaxed text-white/75 transition hover:text-white sm:text-sm"
        >
          <Clock3 className="mr-1.5 inline h-4 w-4 text-[#D4AA40]" aria-hidden="true" />
          Veículo apreendido ou prestes a ser? Os prazos podem ser curtos. Fale com um advogado.
        </a>
      ) : (
        <p className="text-center text-xs font-medium leading-relaxed text-white/75 sm:text-sm">
          <Clock3 className="mr-1.5 inline h-4 w-4 text-[#D4AA40]" aria-hidden="true" />
          Os prazos podem ser curtos. A orientação depende da data da apreensão e dos documentos do caso.
        </p>
      )}
    </div>
  );
}

export function PreviewHeroSection({ variant = "direct" }: { variant?: PreviewVariant }) {
  const direct = variant === "direct";
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0D1B2A] pb-16 pt-36 text-white sm:pt-40 lg:min-h-[780px] lg:pb-20 lg:pt-44"
    >
      <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(circle,#D4AA40_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#B8902A]/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div>
          <div className="mb-6 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AA40]/30 bg-[#D4AA40]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#E5C46F]">
              <ShieldCheck className="h-3.5 w-3.5" />
              {direct ? "Defesa em busca e apreensão de veículo" : "Direito Bancário"}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75">
              Atendimento online em todo o Brasil
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[64px]">
            {direct
              ? "Advogado Especialista em Busca e Apreensão de Veículo"
              : "Veículo apreendido ou com risco de busca e apreensão?"}
          </h1>

          {direct && (
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-snug text-white sm:text-2xl">
              Seu veículo foi apreendido ou está com risco de busca e apreensão?
            </p>
          )}

          <p className={`${direct ? "mt-4" : "mt-6"} max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg`}>
            {direct ? (
              <>
                Entenda as opções jurídicas aplicáveis ao seu caso e os prazos que precisam ser observados.
                Se o veículo já foi apreendido, existe mandado ou há indícios de cobranças abusivas no
                contrato, fale com um advogado para avaliar as medidas cabíveis.
              </>
            ) : (
              <>
                Entenda quais medidas podem ser avaliadas no seu caso antes de tomar uma decisão.
                Envie o contrato e os dados do processo para uma orientação individual e responsável.
              </>
            )}
          </p>

          <div className={`mt-8 flex flex-col items-start ${direct ? "gap-3" : "gap-4 sm:flex-row sm:items-center"}`}>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-[0_16px_36px_rgba(37,211,102,0.22)] transition hover:-translate-y-0.5 hover:bg-[#20BD5A] sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              {direct ? "Falar com advogado agora" : "Consultar especialista"}
            </a>
            {direct ? (
              <p className="text-xs text-white/45">Atendimento direto pelo WhatsApp · Sem formulário inicial</p>
            ) : (
              <a
                href="#situacoes"
                className="inline-flex items-center gap-2 px-1 py-2 text-sm font-medium text-white/70 transition hover:text-white"
              >
                Identificar meu cenário
                <ArrowDown className="h-4 w-4" />
              </a>
            )}
          </div>

          <div className="mt-8 grid max-w-2xl gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:grid-cols-3">
            <span className="flex items-center gap-2">
              <UserRoundCheck className="h-4 w-4 text-[#D4AA40]" />
              Atendimento com advogado
            </span>
            <span className="flex items-center gap-2">
              <LockKeyhole className="h-4 w-4 text-[#D4AA40]" />
              Conversa confidencial
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#D4AA40]" />
              Análise individual
            </span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[440px] lg:mx-0 lg:justify-self-end">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
              <Image
                src="/images/foto-marlon.png"
                alt="Marlon Rocha, advogado responsável pela análise de casos de busca e apreensão"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-cover object-left"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/90 to-transparent px-6 pb-6 pt-20">
                <p className="text-xl font-bold text-white">Dr. Marlon Rocha</p>
                <p className="mt-1 text-sm text-white/70">{OAB} · Advogado Especialista</p>
              </div>
            </div>
          </div>
          {!direct && (
            <div className="relative -mt-5 mx-4 rounded-2xl border border-[#D4AA40]/20 bg-[#14283D] px-5 py-4 shadow-xl">
              <p className="text-sm font-semibold text-white">MRM Advogados</p>
              <p className="mt-1 text-xs leading-relaxed text-white/55">
                Direito Bancário · Atendimento presencial em Cuiabá e online em todo o Brasil
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function SituationPathSection({ variant = "direct" }: { variant?: PreviewVariant }) {
  const direct = variant === "direct";
  const situations = direct ? directServices : guidedSituations;
  return (
    <section id="situacoes" className="bg-[#F8F5EC] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#B8902A]">
            {direct ? "Atuação jurídica" : "Comece pelo seu momento atual"}
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {direct ? "Defesa em todas as fases da busca e apreensão" : "Em qual situação o seu veículo está?"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/60 sm:text-base">
            {direct
              ? "A atuação depende do estágio da cobrança, do processo e da apreensão. Conheça os principais pontos que podem ser analisados em cada situação."
              : "O próximo passo depende do estágio da cobrança, do processo e da documentação disponível."}
          </p>
        </div>

        <div className={`grid gap-4 md:grid-cols-2 ${direct ? "lg:grid-cols-3" : ""}`}>
          {situations.map((item) => {
            const Icon = item.icon;
            const label = "label" in item && typeof item.label === "string" ? item.label : null;
            return (
              <a
                key={item.title}
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-5 rounded-2xl border border-[#E2D9D0] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#B8902A]/40 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1B2D4F] text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  {label && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#B8902A]">
                      {label}
                    </span>
                  )}
                  <h3 className={`${label ? "mt-1.5" : ""} text-lg font-bold text-foreground`}>
                    {item.title}
                  </h3>
                  <span className="mt-2 block text-sm leading-relaxed text-foreground/60">
                    {item.description}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {direct ? "Falar sobre este caso" : "Explicar meu caso"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PreviewProcessSection({ variant = "direct" }: { variant?: PreviewVariant }) {
  if (variant === "guided") {
    return (
      <section id="como-funciona" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B8902A]">
                O que acontece depois do contato
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Um atendimento claro, do primeiro relato aos próximos passos
              </h2>

              <div className="mt-10 space-y-5">
                {guidedSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex gap-4 rounded-2xl border border-border/60 bg-[#F8F5EC]/60 p-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1B2D4F] text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-[#B8902A]" />
                          <h3 className="text-lg font-bold">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/60">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <aside className="rounded-3xl bg-[#1B2D4F] p-7 text-white shadow-xl sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <FileText className="h-6 w-6 text-[#D4AA40]" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-white">Se tiver, separe estes documentos</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Você não precisa ter tudo para iniciar a conversa. Os documentos disponíveis tornam a análise mais objetiva.
              </p>

              <ul className="mt-6 space-y-3">
                {guidedDocuments.map((document) => (
                  <li key={document} className="flex items-start gap-3 text-sm leading-relaxed text-white/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AA40]" />
                    {document}
                  </li>
                ))}
              </ul>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#20BD5A]"
              >
                <MessageCircle className="h-5 w-5" />
                Consultar especialista
              </a>
            </aside>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="como-funciona" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-3xl bg-[#1B2D4F] px-6 py-10 text-center text-white shadow-xl sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AA40]">
            Atendimento sem barreiras
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Você não precisa procurar documentos antes de falar conosco
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
            Clique no botão e conte o que aconteceu. A qualificação é feita na própria conversa,
            e o advogado orientará o que pode ser necessário depois.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#20BD5A] sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Iniciar conversa no WhatsApp
          </a>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/45">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[#D4AA40]" /> Sem formulário</span>
            <span className="flex items-center gap-1.5"><UserRoundCheck className="h-3.5 w-3.5 text-[#D4AA40]" /> Atendimento com advogado</span>
            <span className="flex items-center gap-1.5"><LockKeyhole className="h-3.5 w-3.5 text-[#D4AA40]" /> Conversa confidencial</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PreviewFinalCta({ variant = "direct" }: { variant?: PreviewVariant }) {
  const direct = variant === "direct";
  return (
    <section id="contato" className="bg-[#0D1B2A] py-24 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AA40]">
          Orientação individual
        </p>
        <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
          Entenda o seu caso antes que o cenário mude
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
          {direct ? (
            <>
              Clique no botão e conte o que aconteceu. A qualificação do caso é feita no WhatsApp,
              diretamente com o atendimento do escritório.
            </>
          ) : (
            <>
              Fale diretamente com um advogado e informe em que fase está a cobrança, o processo ou a apreensão.
              A análise dos documentos indicará quais medidas podem ser consideradas.
            </>
          )}
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_36px_rgba(37,211,102,0.22)] transition hover:-translate-y-0.5 hover:bg-[#20BD5A]"
        >
          <MessageCircle className="h-5 w-5" />
          Consultar especialista
        </a>
        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-white/40">
          <LockKeyhole className="h-3.5 w-3.5" />
          Atendimento confidencial · Cada caso depende de análise própria
        </p>
      </div>
    </section>
  );
}

export function PreviewRelatedContent() {
  return (
    <section className="border-y border-border/50 bg-white py-10" aria-labelledby="preview-conteudo-relacionado">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#B8902A]">Prefere entender primeiro?</p>
        <h2 id="preview-conteudo-relacionado" className="mt-3 text-2xl font-bold">
          Leia como funciona a defesa em busca e apreensão
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60">
          O artigo reúne informações sobre etapas, documentos e pontos que podem ser analisados em casos envolvendo veículo financiado.
        </p>
        <Link
          href="/blog/como-funciona-defesa-busca-e-apreensao"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
        >
          Acessar conteúdo explicativo
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
