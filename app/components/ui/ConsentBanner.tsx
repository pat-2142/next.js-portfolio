// ConsentBanner.tsx
// Renders a full-width bottom bar asking the user to accept or decline
// analytics tracking. Appears automatically on first visit (undecided state)
// and can be reopened at any time via the Footer's "Cookie Preferences" link.
//
// On accept  → GA4 loads immediately without a page reload
// On decline → banner dismisses, GA4 never loads
// On change  → if the user previously accepted and now declines, the change
//              takes full effect on the next page load (GA4 is already running
//              in the current session). A notice is shown to reflect this.

"use client";

import { useConsent } from "@/lib/context/ConsentContext";
import { ConsentBannerProps } from "@/lib/types";
import { COLORS } from "@/lib/constants";

export default function ConsentBanner({ onClose }: ConsentBannerProps) {
  const { consent, updateConsent } = useConsent();

  // Whether the user has already made a decision in a previous session.
  // When true the banner is being shown via "Cookie Preferences" in the footer
  // rather than automatically on first visit.
  const hasDecidedBefore = consent !== "undecided";

  function handleAccept() {
    updateConsent("accepted");
    onClose();
  }

  function handleDecline() {
    updateConsent("declined");
    onClose();
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-700 shadow-lg"
      style={{ backgroundColor: COLORS.card }}
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="true"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          {/* ── Message ── */}
          <div className="flex-1">
            <p className="text-sm" style={{ color: COLORS.text }}>
              {hasDecidedBefore
                ? "Update your analytics preference. If you disable analytics, the change will take full effect on your next visit."
                : "This site uses Google Analytics to understand how visitors interact with the content. No personal data is sold or shared."}
            </p>
          </div>

          {/* ── Actions ── */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm rounded border border-gray-600 transition-opacity hover:opacity-70 cursor-pointer"
              style={{ color: COLORS.textMuted }}
            >
              {hasDecidedBefore && consent === "declined" ? "Keep declined" : "Decline"}
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm rounded transition-opacity hover:opacity-70 cursor-pointer"
              style={{
                backgroundColor: COLORS.accent,
                color: COLORS.background,
              }}
            >
              {hasDecidedBefore && consent === "accepted" ? "Keep accepted" : "Accept"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}