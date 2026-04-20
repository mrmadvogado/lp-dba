const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mrmadvogados.com.br";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "MRM Advogados",
  alternateName: "Dr. Marlon Rocha – Advogado",
  url: siteUrl,
  telephone: "+556592618251",
  description:
    "Escritório especializado em defesa de busca e apreensão de veículos, revisão de contratos de financiamento e renegociação de dívidas bancárias.",
  areaServed: {
    "@type": "State",
    name: "Mato Grosso",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Busca e apreensão de veículos",
    "Alienação fiduciária",
    "Financiamento de veículos",
    "RENAJUD",
    "Direito do consumidor bancário",
    "Revisão de contratos",
  ],
  founder: {
    "@type": "Person",
    name: "Marlon Rocha",
    jobTitle: "Advogado",
    description: "Especialista em defesa de financiamentos de veículos e busca e apreensão – OAB/MT 35.470",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "3",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O veículo já foi retirado - ainda dá para fazer alguma coisa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, há dois caminhos imediatos. O primeiro é a purgação da mora: após a apreensão, a lei garante 5 dias para pagar a integralidade da dívida e reaver o bem (Art. 3º, § 2º, DL 911/69). O segundo é a contestação: você tem 15 dias para apresentar defesa com base em irregularidades do processo, como notificação inválida ou juros abusivos (Art. 3º, § 3º).",
      },
    },
    {
      "@type": "Question",
      name: "Quanto custa o atendimento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O primeiro contato serve para entendermos os detalhes do seu processo e verificarmos a viabilidade jurídica. Se houver necessidade de contratação, todos os termos serão tratados com total transparência.",
      },
    },
    {
      "@type": "Question",
      name: "O banco pode bloquear meu veículo no DETRAN sem me avisar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O bloqueio via RENAJUD decorre de uma decisão judicial. A lei exige que a notificação de mora seja enviada ao endereço que consta no contrato. Se chegou em endereço diferente, foi devolvida como 'ausente' ou 'não procurado', a mora pode não ter sido comprovada corretamente – o que é fundamento para contestar ou extinguir a ação (STJ, AREsp 2007339).",
      },
    },
    {
      "@type": "Question",
      name: "O banco pode retomar meu veículo sem ordem judicial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. Embora a Lei 14.711/2023 (Marco Legal das Garantias) tenha criado um procedimento extrajudicial, a parte que autorizava a apreensão física sem ordem judicial foi vetada pelo Presidente e o veto foi mantido pelo Congresso. Na prática, a instituição financeira ainda precisa de uma ordem judicial para fisicamente tomar o veículo.",
      },
    },
    {
      "@type": "Question",
      name: "O atendimento é presencial ou pode ser feito remotamente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O atendimento é 100% remoto. Todo o processo pode ser realizado pelo WhatsApp, e-mail e videoconferência, sem necessidade de deslocamento.",
      },
    },
    {
      "@type": "Question",
      name: "Os juros do meu contrato são abusivos - isso me ajuda na defesa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pode ajudar significativamente. Se o contrato cobra capitalização diária de juros sem informar expressamente a taxa diária, há violação do dever de informação ao consumidor (Art. 6º, III, CDC). Quando o juiz reconhece essa abusividade, a mora do devedor pode ser descaracterizada – tornando a ação de busca e apreensão improcedente (TJ-SC, Ap. 5005028-50.2021).",
      },
    },
  ],
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
