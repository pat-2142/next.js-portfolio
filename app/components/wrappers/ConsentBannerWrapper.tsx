// ConsentBannerWrapper.tsx
// Client component that bridges the consent context and the two client-side
// concerns that depend on it:
//
//   1. GoogleAnalytics — only rendered when consent is "accepted"
//   2. ConsentBanner   — only rendered when showBanner is true
//
// This wrapper exists because layout.tsx is a server component and cannot
// read from context directly. By isolating the context reads here, the root
// layout stays a server component while GA4 and the banner remain reactive
// to the user's consent decision.

"use client";

import { useConsent } from "@/lib/context/ConsentContext";
import { GA4 } from "@/lib/constants";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ConsentBanner } from "../ui";

export default function ConsentBannerWrapper() {
  const { consent, showBanner, updateConsent } = useConsent();

  return (
    <>
      {/* Only load GA4 after the user has explicitly accepted */}
      {consent === "accepted" && GA4.measurementId && (
        <GoogleAnalytics gaId={GA4.measurementId} />
      )}

      {/* Show the consent banner when undecided on first visit,
          or when the user reopens it via "Cookie Preferences" */}
      {showBanner && (
        <ConsentBanner onClose={() => updateConsent(consent === "undecided" ? "declined" : consent)} />
      )}
    </>
  );
}