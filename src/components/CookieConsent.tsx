"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "mrm-consent-v1";

type ConsentChoice = {
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

function saveConsent(analytics: boolean, marketing: boolean) {
  const choice: ConsentChoice = {
    analytics,
    marketing,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(choice));
  localStorage.removeItem("cookie-consent");
  window.dispatchEvent(new CustomEvent("mrm:consent", { detail: choice }));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [preferences, setPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    let visibilityTimer: number | undefined;
    const saved = localStorage.getItem(CONSENT_KEY);
    const legacy = localStorage.getItem("cookie-consent");
    if (!saved && legacy === "accepted") {
      saveConsent(true, false);
    } else if (!saved) {
      visibilityTimer = window.setTimeout(() => setVisible(true), 0);
    }

    const openPreferences = () => {
      const current = localStorage.getItem(CONSENT_KEY);
      if (current) {
        try {
          const choice = JSON.parse(current) as ConsentChoice;
          setAnalytics(choice.analytics);
          setMarketing(choice.marketing);
        } catch {
          // Mantém os padrões seguros quando a preferência armazenada é inválida.
        }
      }
      setPreferences(true);
      setVisible(true);
    };

    window.addEventListener("mrm:open-consent", openPreferences);
    return () => {
      if (visibilityTimer !== undefined) window.clearTimeout(visibilityTimer);
      window.removeEventListener("mrm:open-consent", openPreferences);
    };
  }, []);

  if (!visible) return null;

  const finish = (analyticsAllowed: boolean, marketingAllowed: boolean) => {
    saveConsent(analyticsAllowed, marketingAllowed);
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-white/10 bg-[rgb(27,45,79)] shadow-2xl">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-white">Sua privacidade e suas escolhas</p>
            <p className="mt-1 text-xs leading-relaxed text-white/70 sm:text-sm">
              Usamos cookies necessários e, com sua autorização, dados de audiência e publicidade para medir o site e melhorar campanhas. Consulte a{" "}
              <Link href="/politica-de-privacidade" className="text-[#D4AA40] underline underline-offset-2">
                Política de Privacidade
              </Link>.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => finish(false, false)} className="rounded-lg border border-white/25 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10">
              Recusar opcionais
            </button>
            <button onClick={() => setPreferences((value) => !value)} className="rounded-lg border border-white/25 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10">
              Configurar
            </button>
            <button onClick={() => finish(true, true)} className="rounded-lg bg-[#D4AA40] px-4 py-2 text-xs font-semibold text-[rgb(27,45,79)] hover:bg-[#B8902A]">
              Aceitar todos
            </button>
          </div>
        </div>

        {preferences && (
          <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white/5 p-3 text-xs text-white/70">
              <p className="font-semibold text-white">Necessários</p>
              <p className="mt-1">Mantêm segurança, navegação e preferências essenciais. Sempre ativos.</p>
            </div>
            <label className="flex cursor-pointer gap-3 rounded-lg bg-white/5 p-3 text-xs text-white/70">
              <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} className="mt-0.5 accent-[#D4AA40]" />
              <span><strong className="block text-white">Audiência</strong>Permite medir páginas, origem e ações sem enviar dados do caso jurídico.</span>
            </label>
            <label className="flex cursor-pointer gap-3 rounded-lg bg-white/5 p-3 text-xs text-white/70">
              <input type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} className="mt-0.5 accent-[#D4AA40]" />
              <span><strong className="block text-white">Publicidade</strong>Permite atribuição de campanhas e públicos de remarketing.</span>
            </label>
            <button onClick={() => finish(analytics, marketing)} className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-[rgb(27,45,79)] sm:col-start-3">
              Salvar escolhas
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
