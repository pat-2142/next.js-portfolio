// utils.client.ts
// Browser-safe helper functions only — no Node.js APIs (no fs, path, etc).
// Imported by client components such as ConsentContext.tsx.

import { ConsentStatus } from "./types";
import { CONSENT } from "./constants";

// Reads the current consent value from localStorage.
// Returns the stored value if it exists and is a valid ConsentStatus,
// otherwise falls back to CONSENT.default ("undecided").
export function getConsent(): ConsentStatus {
  if (typeof window === "undefined") return CONSENT.default as ConsentStatus;

  const stored = localStorage.getItem(CONSENT.storageKey);

  if (stored === "accepted" || stored === "declined" || stored === "undecided") {
    return stored;
  }

  return CONSENT.default as ConsentStatus;
}

// Writes a new consent value to localStorage.
// Called by the ConsentBanner when the user accepts or declines,
// and by the Cookie Preferences modal when the user changes their mind.
export function setConsent(status: ConsentStatus): void {
  if (typeof window === "undefined") return;

  localStorage.setItem(CONSENT.storageKey, status);
}