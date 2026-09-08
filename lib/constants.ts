// constants.ts
// App-wide fixed values — update here and changes propagate everywhere.
// Nothing in this file should ever change at runtime.

// ─── Site identity ────────────────────────────────────────────────────────────
// Used in layout.tsx for metadata (title, OG tags, etc.) and ContactCard
export const SITE = {
  name: "Phatsimo Pheko",
  role: "SOC Analyst | Detection Engineering",
  url: "https://phatsimopheko.com",
  stagingUrl: "https://next-js-portfolio-gules.vercel.app",
  description:
    "SOC analyst in Botswana running security operations for an 82-endpoint enterprise estate on Wazuh. Detection engineering, SIEM tuning, OCI certified.",
  shortDescription:
    "SOC analyst in Botswana. Security operations at scale on Wazuh, detection engineering, and a published SIEM lab series. OCI certified.",
  headshotPath: "/images/headshot.jpg",
  // Note: the meta keywords tag has been ignored by search engines for well over
  // a decade. Kept only for completeness — it carries no SEO weight either way.
  keywords: [
    "SOC Analyst",
    "Detection Engineering",
    "Wazuh SIEM",
    "Security Operations",
    "MITRE ATT&CK",
    "Sysmon",
    "OCI Certified",
    "Cloud Security",
    "Botswana",
    "Incident Response",
  ],
} as const;

// ─── Contact details ──────────────────────────────────────────────────────────
// Used in ContactCard. Change once here instead of hunting through JSX.
// github/githubLabel are intentionally retained but not currently rendered —
// the profile's visible repos are front-end practice projects, so linking it
// from a security portfolio undercuts the rest of the site. Restore the list
// item in ContactCard once there's a pinned security repo worth landing on.
export const CONTACT = {
  email: "phatsimopheko11@gmail.com",
  linkedin: "https://linkedin.com/in/phatsimo-pheko-728bb6229",
  linkedinLabel: "linkedin.com/in/phatsimo-pheko-728bb6229",
  github: "https://github.com/pat-2142",
  githubLabel: "github.com/pat-2142",
  portfolio: "https://phatsimopheko.com",
} as const;

// ─── Navigation ───────────────────────────────────────────────────────────────
// Used in Navbar for both desktop and mobile menus — defined once, rendered twice.
export const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "LABS", href: "/labs" },
  { label: "OTHER WORK", href: "/otherwork" },
] as const;

// ─── CV download ──────────────────────────────────────────────────────────────
// Used in Navbar's DownloadButton. Centralised so the filename is never out of sync.
export const CV = {
  href: "/Phatsimo-Pheko-CV.pdf",
  download: "Phatsimo Pheko CV.pdf",
} as const;

// ─── Colour palette ───────────────────────────────────────────────────────────
// Every inline style colour in the project lives here.
// Tailwind classes that reference colours (e.g. bg-[#2A3D54]) are left in the
// components since Tailwind needs the full string at build time.
export const COLORS = {
  background: "#0F1523",      // Page background — layout.tsx body
  text: "#E8EDF5",            // Primary text — SectionWrapper, Navbar
  textMuted: "#C5CEDB",       // Secondary text — SectionWrapper children
  textSecondary: "#7A8BA0",   // Dimmed text — SecondaryButton label
  accent: "#00C2FF",          // Brand accent — PrimaryButton, borders
  accentHover: "#00A8E0",     // Accent hover state — DownloadButton
  card: "#1E2A3B",            // Outer card background — SectionCard
  cardInner: "#2A3D54",       // Inner card background — ObjectCard
  navActive: "#6366F1",       // Active nav link highlight — NavButton
  navHover: "#2c3e50",        // Nav link hover — NavButton
  navbar: "#1e2a3b8c",        // Navbar glass background — Navbar
} as const;

// ─── Scroll behaviour ─────────────────────────────────────────────────────────
// Pixel threshold before the Navbar hides on scroll down — used in Navbar's
// useScrollDirection hook.
export const SCROLL_HIDE_THRESHOLD = 80;

// ─── Motion defaults ──────────────────────────────────────────────────────────
// Used in MotionWrapper. The direction map drives the initial animation offset,
// and duration controls how long the fade-in takes.
export const MOTION_DIRECTION_MAP = {
  up:    { x: 0,   y: 20  },
  down:  { x: 0,   y: -20 },
  left:  { x: -20, y: 0   },
  right: { x: 20,  y: 0   },
} as const;

export const MOTION_DURATION = 0.5;

// ─── Consent ──────────────────────────────────────────────────────────────────
// Controls how analytics consent is stored and defaulted.
// CONSENT_STORAGE_KEY is the localStorage key used by the consent helpers in
// utils.ts. CONSENT_DEFAULT is what the app falls back to before the user has
// made any decision — deliberately "undecided" so GA4 never loads silently.
export const CONSENT = {
  storageKey: "analytics_consent",
  default: "undecided",
} as const;

// ─── GA4 ──────────────────────────────────────────────────────────────────────
// Measurement ID for Google Analytics 4.
// The actual value is read from the environment variable at runtime.
// Set NEXT_PUBLIC_GA_MEASUREMENT_ID in your .env.local file.
export const GA4 = {
  measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
} as const;