"use client";

export function CookiePreferencesButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("mrm:open-consent"))}
      className={className}
    >
      Preferências de cookies
    </button>
  );
}
