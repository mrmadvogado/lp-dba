import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PreviewServiceDetail } from "@/components/PreviewServiceDetail";
import { getPreviewService } from "@/lib/previewServices";

export const metadata: Metadata = {
  title: "Prévia — Defesa em Alienação Fiduciária | MRM Advogados",
  robots: { index: false, follow: false },
};

export default function Page() {
  const service = getPreviewService("defesa-alienacao-fiduciaria");
  if (!service) notFound();
  return <PreviewServiceDetail service={service} />;
}
