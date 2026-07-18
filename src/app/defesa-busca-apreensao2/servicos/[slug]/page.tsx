import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PreviewServiceDetail } from "@/components/PreviewServiceDetail";
import { getPreviewService, previewServices } from "@/lib/previewServices";
import { SITE_URL } from "@/lib/constants";

export const dynamicParams = false;

export function generateStaticParams() {
  return previewServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getPreviewService(slug);
  if (!service) return {};

  const url = `${SITE_URL}/defesa-busca-apreensao/servicos/${service.slug}`;
  return {
    title: `${service.title} | MRM Advogados`,
    description: service.description,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${service.title} | MRM Advogados`,
      description: service.description,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getPreviewService(slug);
  if (!service) notFound();

  return (
    <PreviewServiceDetail
      service={service}
      basePath="/defesa-busca-apreensao"
      publicPage
      imageOrigin={`${SITE_URL}/defesa-busca-apreensao-assets`}
    />
  );
}
