// context/ConsentContext.tsx
// Provides analytics consent state to the entire component tree.
// This is a client component — it uses useState, useEffect, and useContext
// which are all browser-only React APIs.
//
// ConsentProvider should wrap the body children in the root layout so that
// both the Footer and the ConsentBanner can read and update consent state
// without prop drilling.

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ConsentStatus } from "@/lib/types";
import { getConsent, setConsent } from "@/lib/utils.client";

// ─── Context shape ────────────────────────────────────────────────────────────
// Defines what consumers of this context receive.
//   consent          → the current consent status
//   updateConsent    → call this to update consent state and persist to localStorage
//   showBanner       → whether the consent banner should currently be visible
//   openPreferences  → call this from the Footer to re-open the banner/modal
interface ConsentContextValue {
  consent: ConsentStatus;
  updateConsent: (status: ConsentStatus) => void;
  showBanner: boolean;
  openPreferences: () => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────
const ConsentContext = createContext<ConsentContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────
export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<ConsentStatus>("undecided");
  const [showBanner, setShowBanner] = useState(false);

  // On mount, read the stored consent value from localStorage and update
  // state. If no value is stored the default "undecided" triggers the banner.
  // This runs client-side only, avoiding any SSR/localStorage mismatch.
  useEffect(() => {
    const stored = getConsent();
    setConsentState(stored);

    // Only show the banner automatically if the user hasn't decided yet.
    if (stored === "undecided") {
      setShowBanner(true);
    }
  }, []);

  // Updates both React state and localStorage in a single call.
  // Called by the ConsentBanner on accept/decline.
  function updateConsent(status: ConsentStatus) {
    setConsentState(status);
    setConsent(status);
    setShowBanner(false);
  }

  // Called by the Footer's "Cookie Preferences" link to reopen the banner.
  // Always shows the banner regardless of the current consent state so the
  // user can change their mind at any time.
  function openPreferences() {
    setShowBanner(true);
  }

  return (
    <ConsentContext.Provider value={{ consent, updateConsent, showBanner, openPreferences }}>
      {children}
    </ConsentContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
// Convenience hook so consumers never import useContext + ConsentContext
// separately. Throws early if used outside the provider tree, which catches
// wiring mistakes during development.
export function useConsent(): ConsentContextValue {
  const context = useContext(ConsentContext);

  if (!context) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }

  return context;
}