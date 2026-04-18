import { Scale, Info } from "lucide-react";

export function LegalNoticesSection() {
  return (
    <section className="py-16 bg-background border-t border-border/50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <Scale className="w-5 h-5 text-foreground/40" />
          <div>
            <p className="text-xs font-bold tracking-widest text-foreground/50 uppercase">
              Avisos Legais
            </p>
            <p className="text-xs text-foreground/40">Avisos Importantes</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left */}
          <div className="space-y-3">
            <p className="text-sm text-foreground/60 leading-relaxed">
              As informações deste site têm caráter informativo e educativo e
              não substituem consulta jurídica individualizada.
            </p>
            <p className="text-sm text-foreground/70 leading-relaxed font-medium italic">
              Cada situação deve ser analisada caso a caso, por profissional
              legalmente habilitado.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground/60">
              Atendimento
            </p>
            <p className="text-sm text-foreground/50">
              O atendimento inicial é informativo e de orientação geral.
            </p>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 pt-6 border-t border-border/40 flex items-center gap-2">
          <span className="text-xs text-foreground/30">⚖️</span>
          <p className="text-xs font-semibold tracking-widest text-foreground/30 uppercase">
            Conteúdo Institucional. Não constitui parecer jurídico
          </p>
        </div>
      </div>
    </section>
  );
}
