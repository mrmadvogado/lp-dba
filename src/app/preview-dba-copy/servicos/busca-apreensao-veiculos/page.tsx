import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PreviewServiceDetail } from "@/components/PreviewServiceDetail";
import { getPreviewService } from "@/lib/previewServices";

export const metadata: Metadata = {
  title: "Prévia — Busca e Apreensão de Veículos | MRM Advogados",
  robots: { index: false, follow: false },
};

export default function Page() {
  const service = getPreviewService("busca-apreensao-veiculos");
  if (!service) notFound();
  return <PreviewServiceDetail service={service} />;
}
