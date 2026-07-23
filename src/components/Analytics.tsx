"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-45HY9FXZLY";
const CONSENT_KEY = "mrm-consent-v1";
const ATTRIBUTION_KEY = "mrm-attribution-v1";
const SESSION_KEY = "mrm-session-v1";
const ATTRIBUTION_REFERENCE_KEY = "mrm-attribution-reference-v1";
const TRACKING_VERSION = "2026-07-23.1";
const OFFICIAL_WHATSAPP = "5565992618251";
const CLICK_PARAMETERS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
  "dclid",
  "fbclid",
  "ttclid",
  "msclkid",
] as const;

type ConsentChoice = {
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

type Attribution = Record<string, string> & {
  first_landing_page?: string;
  first_touch_at?: string;
  last_landing_page?: string;
  last_touch_at?: string;
};
type EventParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readJson<T>(key: string): T | null {
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch {
    return null;
  }
}

function updateConsent(choice: ConsentChoice | null) {
  const analyticsState = choice?.analytics ? "granted" : "denied";
  const marketingState = choice?.marketing ? "granted" : "denied";

  window.gtag?.("consent", "update", {
    analytics_storage: analyticsState,
    ad_storage: marketingState,
    ad_user_data: marketingState,
    ad_personalization: marketingState,
  });

  document.documentElement.dataset.mrmAnalyticsConsent = analyticsState;
  document.documentElement.dataset.mrmMarketingConsent = marketingState;
}

function captureAttribution(persist = false): Attribution {
  const params = new URLSearchParams(window.location.search);
  const current = persist ? (readJson<Attribution>(ATTRIBUTION_KEY) ?? {}) : {};
  let foundCampaignParameter = false;

  for (const key of CLICK_PARAMETERS) {
    const value = params.get(key);
    if (value) {
      current[key] = value.slice(0, 200);
      foundCampaignParameter = true;
    }
  }

  if (persist && (foundCampaignParameter || !current.first_touch_at)) {
    const now = new Date().toISOString();
    const landingPage = `${window.location.pathname}${window.location.search}`;
    current.first_touch_at ??= now;
    current.first_landing_page ??= landingPage.slice(0, 500);
    current.last_touch_at = now;
    current.last_landing_page = landingPage.slice(0, 500);
  }

  if (persist && Object.keys(current).length) {
    window.localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(current));
  }
  return current;
}

function classifyPage(pathname: string): EventParameters {
  const path = pathname
    .replace(/^\/defesa-busca-apreensao2/, "/defesa-busca-apreensao")
    .replace(/\/+$/, "") || "/";
  const segments = path.split("/").filter(Boolean);
  const context: EventParameters = {
    business_area: "direito_bancario",
    service: "dba",
    content_cluster: "busca_apreensao",
    funnel_stage: "consideration",
  };

  if (segments[1] === "mato-grosso") {
    context.state = "mato_grosso";
    if (segments[2]) {
      context.page_type = "city_landing_page";
      context.city = segments[2];
    } else {
      context.page_type = "state_hub";
    }
    return context;
  }

  if (segments[1] === "servicos" && segments[2]) {
    return {
      ...context,
      page_type: "service_detail",
      service_detail: segments[2],
    };
  }

  if (path.startsWith("/preview-")) {
    return {
      ...context,
      page_type: "preview",
      analytics_environment: "preview",
    };
  }

  if (path === "/politica-de-privacidade") {
    return {
      ...context,
      page_type: "legal",
      funnel_stage: "support",
    };
  }

  return { ...context, page_type: "landing_page" };
}

function analyticsEnvironment() {
  return /^(www\.)?mrmadvogado\.com\.br$/.test(window.location.hostname)
    ? "production"
    : "preview";
}

function sessionId() {
  const existing = window.sessionStorage.getItem(SESSION_KEY);
  if (existing) return existing;
  const created = crypto.randomUUID();
  window.sessionStorage.setItem(SESSION_KEY, created);
  return created;
}

function eventContext() {
  return {
    page_path: window.location.pathname,
    page_title: document.title,
    page_location: window.location.href,
    analytics_environment: analyticsEnvironment(),
    event_version: TRACKING_VERSION,
    session_reference: sessionId(),
    ...classifyPage(window.location.pathname),
    ...(readJson<Attribution>(ATTRIBUTION_KEY) ?? {}),
    ...captureAttribution(false),
  };
}

function ctaLocation(anchor: HTMLAnchorElement) {
  const labelledContainer = anchor.closest<HTMLElement>("[data-analytics-location]");
  if (labelledContainer?.dataset.analyticsLocation) {
    return labelledContainer.dataset.analyticsLocation;
  }

  const section = anchor.closest<HTMLElement>("section[id]");
  if (section?.id) return section.id;
  if (anchor.closest("footer")) return "footer";
  if (anchor.closest("header, nav")) return "navigation";
  if (anchor.closest('[class*="fixed"], [class*="sticky"]')) return "sticky_or_floating";
  return "content";
}

function eventLinkContext(anchor: HTMLAnchorElement) {
  return {
    ...eventContext(),
    cta_text: (anchor.textContent ?? anchor.getAttribute("aria-label") ?? "link")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 100),
    cta_location: ctaLocation(anchor),
  };
}

function sendEvent(name: string, parameters: EventParameters) {
  const envelope = {
    event_id: crypto.randomUUID(),
    occurred_at: new Date().toISOString(),
    debug_mode: new URLSearchParams(window.location.search).get("analytics_debug") === "1",
    ...parameters,
  };
  window.dataLayer.push({ event: name, ...envelope });
  window.gtag?.("event", name, envelope);
}

function officialWhatsAppLink(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute("href") ?? "";
  return (
    (href.includes("wa.me") || href.includes("api.whatsapp.com")) &&
    href.includes(OFFICIAL_WHATSAPP)
  );
}

function safeErrorMessage(value: unknown) {
  if (value instanceof Error) return value.message.slice(0, 160);
  return String(value ?? "unknown_error").slice(0, 160);
}

function attributionPayload() {
  const context: EventParameters = eventContext();
  const consent = readJson<ConsentChoice>(CONSENT_KEY);
  const attribution = Object.fromEntries(
    CLICK_PARAMETERS.flatMap((key) => {
      const value = context[key];
      return typeof value === "string" ? [[key, value]] : [];
    }),
  );
  const stored = readJson<Attribution>(ATTRIBUTION_KEY) ?? {};
  for (const key of [
    "first_landing_page",
    "first_touch_at",
    "last_landing_page",
    "last_touch_at",
  ]) {
    if (stored[key]) attribution[key] = stored[key];
  }
  return {
    ...context,
    event_id: crypto.randomUUID(),
    analytics_consent: Boolean(consent?.analytics),
    marketing_consent: Boolean(consent?.marketing),
    is_test:
      new URLSearchParams(window.location.search).get("analytics_debug") === "1" &&
      new URLSearchParams(window.location.search).get("utm_campaign") === "mrm_e2e_test",
    attribution,
  };
}

let attributionRequest: Promise<string | null> | null = null;

function getGaClientId() {
  return new Promise<string | null>((resolve) => {
    if (!window.gtag) return resolve(null);
    const timeout = window.setTimeout(() => resolve(null), 1200);
    window.gtag("get", GA_MEASUREMENT_ID, "client_id", (value: unknown) => {
      window.clearTimeout(timeout);
      resolve(typeof value === "string" ? value.slice(0, 100) : null);
    });
  });
}

async function enrichedAttributionPayload() {
  const consent = readJson<ConsentChoice>(CONSENT_KEY);
  const payload = attributionPayload();
  if (!consent?.analytics) return payload;
  return { ...payload, ga_client_id: await getGaClientId() };
}

async function refreshAttributionReference() {
  const reference = window.sessionStorage.getItem(ATTRIBUTION_REFERENCE_KEY);
  if (!reference) return;
  await fetch("/api/lead-attribution", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...(await enrichedAttributionPayload()),
      reference_code: reference,
    }),
    keepalive: true,
  }).catch(() => undefined);
}

function ensureAttributionReference() {
  const existing = window.sessionStorage.getItem(ATTRIBUTION_REFERENCE_KEY);
  if (existing) return Promise.resolve(existing);
  if (attributionRequest) return attributionRequest;

  attributionRequest = enrichedAttributionPayload()
    .then((payload) =>
      fetch("/api/lead-attribution", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }),
    )
    .then(async (response) => {
      if (!response.ok) return null;
      const result = (await response.json()) as { reference_code?: string };
      if (!result.reference_code) return null;
      window.sessionStorage.setItem(ATTRIBUTION_REFERENCE_KEY, result.reference_code);
      return result.reference_code;
    })
    .catch(() => null)
    .finally(() => {
      attributionRequest = null;
    });
  return attributionRequest;
}

function appendAttributionReference(anchor: HTMLAnchorElement) {
  const reference = window.sessionStorage.getItem(ATTRIBUTION_REFERENCE_KEY);
  if (!reference || anchor.dataset.mrmReferenceAttached === reference) return;
  try {
    const destination = new URL(anchor.href);
    const existingText = destination.searchParams.get("text") ?? "";
    if (!existingText.includes(`Ref. MRM-${reference}`)) {
      destination.searchParams.set(
        "text",
        `${existingText.trim()}\n\nRef. MRM-${reference}`.trim(),
      );
      anchor.href = destination.toString();
    }
    anchor.dataset.mrmReferenceAttached = reference;
  } catch {
    // Mantém o link original se o formato de URL do provedor mudar.
  }
}

function observeWebVitals() {
  if (!("PerformanceObserver" in window)) return () => undefined;

  let lcp = 0;
  let cls = 0;
  let inp = 0;
  let reported = false;
  const observers: PerformanceObserver[] = [];

  const observe = (
    type: string,
    callback: (entry: PerformanceEntry) => void,
  ) => {
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach(callback);
      });
      observer.observe({ type, buffered: true });
      observers.push(observer);
    } catch {
      // O navegador pode não oferecer todos os tipos de entrada.
    }
  };

  observe("largest-contentful-paint", (entry) => {
    lcp = Math.max(lcp, entry.startTime);
  });
  observe("layout-shift", (entry) => {
    const layoutEntry = entry as PerformanceEntry & {
      value?: number;
      hadRecentInput?: boolean;
    };
    if (!layoutEntry.hadRecentInput) cls += layoutEntry.value ?? 0;
  });
  observe("event", (entry) => {
    const eventEntry = entry as PerformanceEntry & { duration?: number };
    inp = Math.max(inp, eventEntry.duration ?? 0);
  });

  const report = () => {
    if (reported) return;
    reported = true;
    const navigation = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    sendEvent("web_vitals", {
      ...eventContext(),
      lcp_ms: Math.round(lcp),
      cls_milli: Math.round(cls * 1000),
      inp_ms: Math.round(inp),
      ttfb_ms: Math.round(navigation?.responseStart ?? 0),
    });
  };
  const handleVisibility = () => {
    if (document.visibilityState === "hidden") report();
  };
  document.addEventListener("visibilitychange", handleVisibility);

  return () => {
    report();
    document.removeEventListener("visibilitychange", handleVisibility);
    observers.forEach((observer) => observer.disconnect());
  };
}

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const consent = readJson<ConsentChoice>(CONSENT_KEY);
    updateConsent(consent);
    captureAttribution(Boolean(consent?.analytics || consent?.marketing));

    const handleConsent = (event: Event) => {
      const choice = (event as CustomEvent<ConsentChoice>).detail;
      updateConsent(choice);
      captureAttribution(Boolean(choice.analytics || choice.marketing));
      void ensureAttributionReference().then(() => refreshAttributionReference());
      if (choice.analytics) {
        sendEvent("consent_update", {
          ...eventContext(),
          analytics_consent: choice.analytics,
          marketing_consent: choice.marketing,
        });
      }
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const faqButton = target?.closest<HTMLButtonElement>(
        'button[aria-expanded], [data-analytics-faq]',
      );
      if (faqButton) {
        window.setTimeout(() => {
          if (faqButton.getAttribute("aria-expanded") !== "false") {
            sendEvent("faq_open", {
              ...eventContext(),
              faq_question: (faqButton.textContent ?? "faq")
                .replace(/\s+/g, " ")
                .trim()
                .slice(0, 160),
            });
          }
        });
      }

      const anchor = target?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const linkContext = eventLinkContext(anchor);

      if (officialWhatsAppLink(anchor)) {
        appendAttributionReference(anchor);
        sendEvent("whatsapp_click", {
          ...linkContext,
          lead_channel: "whatsapp",
          funnel_stage: "intent",
        });
        return;
      }

      if (href.startsWith("tel:")) {
        sendEvent("phone_click", {
          ...linkContext,
          lead_channel: "phone",
          funnel_stage: "intent",
        });
        return;
      }

      if (href.startsWith("mailto:")) {
        sendEvent("email_click", {
          ...linkContext,
          lead_channel: "email",
          funnel_stage: "intent",
        });
        return;
      }

      try {
        const destination = new URL(href, window.location.href);
        if (
          destination.origin === window.location.origin &&
          (destination.pathname !== window.location.pathname || destination.hash)
        ) {
          sendEvent("internal_link_click", {
            ...linkContext,
            destination_path: destination.pathname,
          });
        } else if (destination.origin !== window.location.origin) {
          const isSocial = /instagram|facebook|linkedin|tiktok|youtube/i.test(
            destination.hostname,
          );
          const isMap = /google\.[^/]+\/maps|maps\.app\.goo\.gl|share\.google/i.test(
            destination.href,
          );
          sendEvent(isMap ? "map_click" : isSocial ? "social_click" : "outbound_click", {
            ...linkContext,
            destination_host: destination.hostname,
          });
        }
      } catch {
        // URLs inválidas ou esquemas não navegáveis não geram evento.
      }
    };

    const scrollMilestones = new Set<number>();
    let readTimeReached = false;
    let readDepthReached = false;
    let engagedReadSent = false;
    const sendEngagedRead = () => {
      if (engagedReadSent || !readTimeReached || !readDepthReached) return;
      engagedReadSent = true;
      sendEvent("engaged_read", {
        ...eventContext(),
        engagement_seconds: 30,
        scroll_percent: 50,
      });
    };
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const percent = maxScroll > 0 ? Math.round((window.scrollY / maxScroll) * 100) : 100;
      for (const milestone of [25, 50, 75, 90]) {
        if (percent >= milestone && !scrollMilestones.has(milestone)) {
          scrollMilestones.add(milestone);
          sendEvent("scroll_depth", {
            ...eventContext(),
            scroll_percent: milestone,
          });
        }
      }
      if (percent >= 50) {
        readDepthReached = true;
        sendEngagedRead();
      }
    };
    const readTimer = window.setTimeout(() => {
      readTimeReached = true;
      sendEngagedRead();
    }, 30_000);

    const visibleCtas = new WeakSet<Element>();
    const ctaObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || visibleCtas.has(entry.target)) continue;
          visibleCtas.add(entry.target);
          const anchor = entry.target as HTMLAnchorElement;
          appendAttributionReference(anchor);
          void ensureAttributionReference().then(() => appendAttributionReference(anchor));
          sendEvent("cta_view", {
            ...eventLinkContext(anchor),
            lead_channel: "whatsapp",
          });
        }
      },
      { threshold: 0.6 },
    );
    document
      .querySelectorAll<HTMLAnchorElement>('a[href*="wa.me"], a[href*="api.whatsapp.com"]')
      .forEach((anchor) => {
        if (officialWhatsAppLink(anchor)) ctaObserver.observe(anchor);
      });

    const handleWindowError = (event: ErrorEvent) => {
      sendEvent("client_error", {
        ...eventContext(),
        error_type: "window_error",
        error_message: safeErrorMessage(event.error ?? event.message),
      });
    };
    const handleRejection = (event: PromiseRejectionEvent) => {
      sendEvent("client_error", {
        ...eventContext(),
        error_type: "unhandled_rejection",
        error_message: safeErrorMessage(event.reason),
      });
    };
    const stopWebVitals = observeWebVitals();
    void ensureAttributionReference();

    window.addEventListener("mrm:consent", handleConsent);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("error", handleWindowError);
    window.addEventListener("unhandledrejection", handleRejection);
    document.addEventListener("click", handleClick);
    handleScroll();
    return () => {
      window.removeEventListener("mrm:consent", handleConsent);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("error", handleWindowError);
      window.removeEventListener("unhandledrejection", handleRejection);
      document.removeEventListener("click", handleClick);
      window.clearTimeout(readTimer);
      ctaObserver.disconnect();
      stopWebVitals();
    };
  }, []);

  useEffect(() => {
    const context = eventContext();
    window.dataLayer.push({ event: "virtual_page_view", ...context });
    sendEvent("page_view", context);
  }, [pathname]);

  return (
    <>
      <Script id="mrm-consent-default" strategy="beforeInteractive">
        {`window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});window.gtag('set','url_passthrough',true);window.gtag('set','ads_data_redaction',true);window.gtag('js',new Date());window.gtag('config','${GA_MEASUREMENT_ID}',{send_page_view:false,anonymize_ip:true});`}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
