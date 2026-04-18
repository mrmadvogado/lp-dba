import { AlertCircle } from "lucide-react";

const problems = [
  "O banco mandou equipe para buscar e apreender meu veículo",
  "Meu veículo foi bloqueado no DETRAN (RENAJUD) e não consigo usar",
  "A financeira exige um valor que não consigo pagar de uma vez",
  "A notificação do banco foi enviada para endereço errado - ou devolvida como \"ausente\" e perdi o prazo",
  "O carro já foi tomado e não sei se ainda tenho alguma saída",
  "Quero negociar a dívida mas o banco não aceita uma proposta razoável",
];

export function ProblemsSection() {
  return (
    <section id="dores" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-xs font-semibold tracking-widest text-[#B8902A] uppercase mb-4">
            Reconhece essa situação?
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Você está passando por algum desses problemas?
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Essas são as situações mais comuns que nossos clientes vivenciam
            quando chegam até nós.
          </p>
        </div>

        {/* Problem cards grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="reveal flex items-start gap-3 bg-[rgb(253,240,238)] border border-[rgb(254,226,226)] rounded-2xl p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <p
                className="text-sm font-medium text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: problem.replace(
                    /\*\*(.*?)\*\*/g,
                    "<strong>$1</strong>"
                  ),
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal text-center max-w-2xl mx-auto">
          <p className="text-sm text-foreground/60 leading-relaxed">
            Se você se identificou com ao menos um desses pontos, você precisa
            entender o que a lei permite antes de perder definitivamente seu
            veículo.{" "}
            <strong className="text-foreground">
              Cada dia sem orientação pode fechar portas jurídicas importantes.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
