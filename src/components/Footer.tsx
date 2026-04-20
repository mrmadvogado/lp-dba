import Image from "next/image";
import Link from "next/link";
import { Globe, Lock, Info } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-10 border-t border-border/40"
      style={{ backgroundColor: "rgb(229,225,209)" }}
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-4">
        <Image
          src="/images/logo-mrm.png"
          alt="MRM Advogados"
          width={240}
          height={51}
          className="h-16 w-auto opacity-80"
        />
        <p className="text-sm text-foreground/50 text-center">
          © 2026 Dr. Marlon Rocha - OAB/MT 35.470. Todos os direitos
          reservados.
        </p>
        <p className="text-xs text-foreground/40 text-center">
          Publicidade em conformidade com o Provimento OAB nº 205/2021
        </p>
        <Link
          href="/politica-de-privacidade"
          className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors underline underline-offset-2"
        >
          Política de Privacidade
        </Link>
        <div className="flex items-center gap-4 mt-2">
          <Globe className="w-5 h-5 text-foreground/30" />
          <Lock className="w-5 h-5 text-foreground/30" />
          <Info className="w-5 h-5 text-foreground/30" />
        </div>
      </div>
    </footer>
  );
}
