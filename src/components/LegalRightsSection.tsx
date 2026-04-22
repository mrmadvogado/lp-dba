const rights = [
  {
    num: "01",
    title: "Notificação inválida anula a ação",
    body: "A lei exige que a notificação da mora seja enviada ao endereço correto do contrato. Se foi enviada para o endereço errado, devolvida como 'ausente' ou 'não procurado', a mora não foi comprovada - e a ação pode ser extinta. (STJ, AREsp 2007339)",
  },
  {
    num: "02",
    title: "Juros abusivos descaracterizam a mora",
    body: "Se o contrato cobra capitalização diária de juros sem informar a taxa diária, viola o dever de informação ao consumidor. Essa abusividade pode descaracterizar a mora e tornar a busca e apreensão improcedente. (TJ-SC, Ap. 5005028-50.2021)",
  },
  {
    num: "03",
    title: "5 dias após a apreensão ainda há saída",
    body: "Mesmo após o veículo ser tomado, a lei garante 5 dias para pagar a integralidade da dívida (purgação da mora) e reaver o bem. Após esse prazo, outros fundamentos de defesa podem ser usados em até 15 dias. (Art. 3º, §§ 2º e 3º, DL 911/69)",
  },
];

export function LegalRightsSection() {
  return (
    <section
      id="direitos"
      className="py-20"
      style={{ backgroundColor: "rgba(229,225,209,0.3)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-xs font-semibold tracking-widest text-[#B8902A] uppercase mb-4">
            Entenda seus direitos
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Busca e apreensão não é sentença: é o começo da defesa
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Existem fundamentos legais que muita gente desconhece, e que os
            bancos definitivamente não vão te contar.
          </p>
        </div>

        {/* Rights grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {rights.map((item, i) => (
            <div
              key={i}
              className="reveal relative overflow-hidden p-8 rounded-2xl border bg-white border-[rgba(226,217,208,0.5)] transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Number */}
              <span
                className="block text-5xl font-bold text-foreground/10 mb-4 leading-none"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {item.num}
              </span>
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
