import { PUBLIC_WA_URL } from "@/lib/constants";

export function AlertBar() {
  return (
    <div className="w-full py-3 px-4 border-b" style={{ backgroundColor: "rgb(27,45,79)", borderColor: "rgba(255,255,255,0.1)" }}>
      <p className="text-center text-sm font-medium" style={{ color: "#F1D27A" }}>
        ⚠️ <strong>Atenção:</strong> após a apreensão, a lei prevê <strong>5 dias para pagamento integral</strong> e <strong>15 dias para defesa</strong>.{" "}
        <a
          href={PUBLIC_WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline cursor-pointer hover:opacity-80 transition-opacity"
        >
          Consulte seu caso com urgência.
        </a>
      </p>
    </div>
  );
}
