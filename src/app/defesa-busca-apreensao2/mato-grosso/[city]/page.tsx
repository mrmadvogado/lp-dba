import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationLandingPage } from "@/components/LocationLandingPage";
import { getMtLocation, mtLocations } from "@/lib/mtLocations";
import { SITE_URL } from "@/lib/constants";

export const dynamicParams = false;

export function generateStaticParams() {
  return mtLocations.map((location) => ({ city: location.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const location = getMtLocation(city);
  if (!location) return {};
  const url = `${SITE_URL}/defesa-busca-apreensao/mato-grosso/${location.slug}`;
  const socialImage = location.slug === "sinop"
    ? `${SITE_URL}/defesa-busca-apreensao-assets/images/services/busca-apreensao-reboque-comercial-v2.png`
    : `${SITE_URL}/images/foto-marlon.png`;
  return {
    title: `${location.title} | MRM Advogados`,
    description: location.description,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: location.title,
      description: location.description,
      locale: "pt_BR",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: location.title,
      description: location.description,
      images: [socialImage],
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const location = getMtLocation(city);
  if (!location) notFound();
  return <LocationLandingPage location={location} />;
}
