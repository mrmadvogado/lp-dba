import {
  ADDRESS,
  CNPJ,
  GOOGLE_BUSINESS_URL,
  LANDING_URL,
  LEGAL_NAME,
  OAB,
  PHONE,
  SITE_URL,
  SOCIAL,
  SOCIETY_OAB,
} from "@/lib/constants";
import { PUBLIC_FAQS } from "@/lib/faq";

const organizationSchema = {
  "@context": "https://schema.org",
  "@id": `${SITE_URL}/#organization`,
  "@type": "LegalService",
  name: "MRM Advogados",
  legalName: LEGAL_NAME,
  taxID: CNPJ,
  foundingDate: "2026-06-17",
  identifier: [
    { "@type": "PropertyValue", name: "CNPJ", value: CNPJ },
    { "@type": "PropertyValue", name: "Registro da sociedade na OAB/MT", value: SOCIETY_OAB },
  ],
  alternateName: "Dr. Marlon Rocha – Advogado",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-mrm.png`,
  image: `${SITE_URL}/images/foto-marlon.png`,
  telephone: `+${PHONE}`,
  hasMap: GOOGLE_BUSINESS_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.streetAddress,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.state,
    postalCode: ADDRESS.postalCode,
    addressCountry: "BR",
  },
  description:
    "Escritório especializado em defesa de busca e apreensão de veículos, revisão de contratos de financiamento e renegociação de dívidas bancárias.",
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  knowsAbout: [
    "Busca e apreensão de veículos",
    "Alienação fiduciária",
    "Financiamento de veículos",
    "RENAJUD",
    "Direito do consumidor bancário",
    "Revisão de contratos",
  ],
  sameAs: [
    SOCIAL.instagram,
    SOCIAL.facebook,
    SOCIAL.linkedin,
    GOOGLE_BUSINESS_URL,
  ],
  founder: {
    "@id": `${SITE_URL}/#marlon-rocha`,
    "@type": "Person",
    name: "Marlon Rocha",
    jobTitle: "Advogado",
    description: `Advogado com atuação em Direito Bancário – ${OAB}`,
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@id": `${SITE_URL}/#website`,
  "@type": "WebSite",
  url: SITE_URL,
  name: "MRM Advogados",
  inLanguage: "pt-BR",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

function getLandingSchemas(landingUrl: string) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@id": `${landingUrl}#service`,
    "@type": "Service",
    name: "Defesa em busca e apreensão de veículo",
    serviceType: "Advocacia em defesa de busca e apreensão de veículos",
    url: landingUrl,
    description:
      "Serviço jurídico para análise e defesa em ações de busca e apreensão de veículos financiados.",
    inLanguage: "pt-BR",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Brasil" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@id": `${landingUrl}#breadcrumb`,
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Defesa em busca e apreensão de veículo",
        item: landingUrl,
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@id": `${landingUrl}#webpage`,
    "@type": "WebPage",
    url: landingUrl,
    name: "Advogado para busca e apreensão de veículo",
    description:
      "Defesa em busca e apreensão de veículo com atendimento online em todo o Brasil e presencial em Cuiabá.",
    inLanguage: "pt-BR",
    dateModified: "2026-07-18",
    reviewedBy: { "@id": `${SITE_URL}/#marlon-rocha` },
    about: { "@id": `${landingUrl}#service` },
    mainEntity: { "@id": `${landingUrl}#service` },
    breadcrumb: { "@id": `${landingUrl}#breadcrumb` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  return { serviceSchema, breadcrumbSchema, webPageSchema };
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PUBLIC_FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export function JsonLd({ landingUrl = LANDING_URL }: { landingUrl?: string }) {
  const { serviceSchema, breadcrumbSchema, webPageSchema } = getLandingSchemas(landingUrl);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
