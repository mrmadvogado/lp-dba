import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PreviewServiceDetail } from "@/components/PreviewServiceDetail";
import { getPreviewService } from "@/lib/previewServices";

export const metadata: Metadata = {
  title: "Prévia — Mandado de Busca e Apreensão | MRM Advogados",
  robots: { index: false, follow: false },
};

export default function Page() {
  const service = getPreviewService("mandado-busca-apreensao");
  if (!service) notFound();
  return <PreviewServiceDetail service={service} />;
}
