// utils.ts
// Pure helper functions — no React, no JSX, no side effects.
// Any file in the project can import from here safely.

import { SITE } from "./constants";

// ─── Page title ───────────────────────────────────────────────────────────────
// Generates a consistent "<Section> | <Name>" page title string.
// Used in per-page metadata exports (e.g. projects/page.tsx).
export function buildPageTitle(section: string): string {
  return `${section} | ${SITE.name}`;
}

// ─── Date range ───────────────────────────────────────────────────────────────
// Formats a start/end date pair into a single display string.
// Used in ExperienceCard and EducationCard headings.
// Example: formatDateRange("October 2023", "Present") → "October 2023 – Present"
export function formatDateRange(startDate: string, endDate: string): string {
  return `${startDate} – ${endDate}`;
}
