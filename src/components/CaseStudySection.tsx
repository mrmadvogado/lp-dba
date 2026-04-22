import { Scale, CheckCircle, ExternalLink } from "lucide-react";

const processDetails = [
  { label: "Tribunal", value: "TJMT - Cuiabá" },
  { label: "Processo", value: "Processo sob sigilo - identidade preservada" },
  { label: "Tipo de Dívida", value: "Financiamento de Veículo - Alienação Fiduciária" },
  { label: "Situação Inicial", value: "Busca e apreensão em andamento" },
  { label: "Resultado", value: "Liminar deferida - veículo devolvido" },
  { label: "Atendimento", value: "Online • Todo o Brasil" },
];

const results = [
  "Busca e apreensão suspensa por decisão judicial",
  "Cláusulas abusivas reconhecidas pelo juiz",
  "Veículo devolvido ao proprietário com liminar",
  "Contrato revisado e dívida recalculada",
];

const WA_URL =
  "https://wa.me/556592618251?text=Ol%C3%A1!+Meu+ve%C3%ADculo+foi+bloqueado+e+gostaria+de+entender+meus+direitos.";

export function CaseStudySection() {
  return (
    <section
      id="caso"
      className="py-20"
      style={{ backgroundColor: "rgb(229,225,209)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-xs font-semibold tracking-widest text-[#B8902A] uppercase mb-4">
            Caso real
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Quando o Banco Errou e Perdeu
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Um caso real de defesa bem-sucedida contra busca e apreensão
            indevida de veículo financiado em Mato Grosso.
          </p>
        </div>

        {/* Two cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Process details */}
          <div className="reveal bg-white rounded-2xl border border-[rgba(226,217,208,0.5)] p-8">
            <div className="flex items-center gap-2 mb-6">
              <Scale className="w-5 h-5 text-primary" />
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Detalhes do Processo
              </h3>
            </div>
            <div className="space-y-4">
              {processDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between gap-4 py-3 border-b border-border/50 last:border-0"
                >
                  <span className="text-sm text-foreground/50 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-foreground text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Consultar jurisprudência similar
            </a>
          </div>

          {/* Results */}
          <div className="reveal bg-white rounded-2xl border border-[rgba(226,217,208,0.5)] p-8">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Resultado Obtido
              </h3>
            </div>
            <div className="space-y-3 mb-8">
              {results.map((result) => (
                <div key={result} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                  <span className="text-sm font-medium">{result}</span>
                </div>
              ))}
            </div>
            {/* Quote */}
            <blockquote className="border-l-2 border-primary/30 pl-4 space-y-2">
              <p className="text-sm italic text-foreground/70 leading-relaxed">
                &ldquo;Para a caracterização da mora do devedor-fiduciante, é
                imprescindível a prévia notificação válida. A ausência ou
                irregularidade na notificação afasta a mora e impede a
                consolidação da propriedade em favor do credor.&rdquo;
              </p>
              <footer className="text-xs text-foreground/50">
                - Fundamento legal: DL 911/69 c/c STJ, REsp 1.418.593
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
