// constants.ts
// App-wide fixed values — update here and changes propagate everywhere.
// Nothing in this file should ever change at runtime.

// ─── Site identity ────────────────────────────────────────────────────────────
// Used in layout.tsx for metadata (title, OG tags, etc.) and ContactCard
export const SITE = {
  name: "Phatsimo Pheko",
  role: "Cybersecurity Consultant",
  url: "https://phatsimopheko.com",
  stagingUrl: "https://next-js-portfolio-gules.vercel.app",
  description:
    "Cybersecurity consultant based in Botswana specialising in SOC operations, SIEM deployment with Wazuh, and Oracle Cloud Infrastructure. OCI Certified.",
  shortDescription:
    "SOC operations, Wazuh SIEM deployment, and OCI-certified cloud security — based in Botswana, open to remote.",
  headshotPath: "/images/headshot.jpg",
  keywords: [
    "Cybersecurity Consultant",
    "SOC Analyst",
    "Wazuh SIEM",
    "OCI Certified",
    "Cloud Security",
    "Botswana",
    "Incident Response",
  ],
} as const;

// ─── Contact details ──────────────────────────────────────────────────────────
// Used in ContactCard. Change once here instead of hunting through JSX.
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
  { label: "LABS & PROJECTS", href: "/projects" },
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
