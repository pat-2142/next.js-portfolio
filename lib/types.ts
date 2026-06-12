import { LinkProps } from "next/link";
import React from "react";

// ─── Layout & UI primitives ───────────────────────────────────────────────────

// Wraps any component that accepts arbitrary child elements.
export interface CardProps {
  children: React.ReactNode;
}

// Props for the SectionWrapper layout component.
// `heading` is optional — omit it on sections that supply their own title.
export interface SectionWrapperProps {
  children: React.ReactNode;
  heading?: string;
}

// Shared props for all button/link components.
// `href` reuses Next.js's own LinkProps["href"] type so it accepts strings,
// URL objects, and dynamic route objects without a separate type definition.
// `download` triggers a file download when set (pass the desired filename).
// `target="_blank"` opens the link in a new tab.
export interface ButtonProps {
    label: string;
    href: LinkProps["href"];
    download?: string;
    prefetch?: boolean;
    target?: string;
}

// ─── Data shapes for static content ──────────────────────────────────────────
// These interfaces mirror the structure of the data arrays in your constants
// file and are used as prop types on the corresponding card components.

export interface ExperienceProps {
    id: number;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];  // Rendered as a bullet list inside ExperienceCard
}

export interface SkillProps {
    id: number;
    domain: string;  // Broad category, e.g. "Cloud & Infrastructure"
    details: string  // Free-form description of specific tools/technologies
}

export interface CertificateProps {
    id: number;
    title: string;
    description: string;
    tags: string[];   // Rendered as Tag badges on the certificate card
    link: string;     // URL to the certificate (e.g. Credly badge, PDF)
}

// Used by the Tag badge component that wraps short label strings in a pill UI.
export interface TagProps {
    children: React.ReactNode;
}

export interface EducationProps {
    id: number;
    course: string;
    institute: string;
    startDate: string;
    endDate: string;
    content: string[];  // Bullet points describing modules, achievements, etc.
}

export interface ProjectProps {
    id: number;
    title: string;
    imageSrc: string         // Path or URL to the project screenshot / thumbnail
    description: string;
    tags: string[];          // Tech stack labels rendered as Tag badges
    liveLink: string;        // URL to the deployed project
    repoLink: string;        // URL to the GitHub (or similar) repository
}

// ─── Animation wrapper ────────────────────────────────────────────────────────
// Props for a motion/animation wrapper component (likely using Framer Motion).
// `direction` controls which axis the element slides in from on mount.
// `delay` staggers animations when multiple elements animate together.
export interface MotionProps {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    className?: string;
};

// Typed wrapper around <img> / Next.js <Image> to enforce alt text and allow
// optional size overrides without spreading untyped props.
export interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
};

// ─── MDX / blog types ─────────────────────────────────────────────────────────

// The YAML block at the top of every .mdx file (between the --- delimiters).
// gray-matter extracts this and returns it as a plain JS object, which we cast
// to this type in getPostBySlug / getPostsByCategory.
// `date` is optional so files without a date field don't cause a type error.
export type Frontmatter = {
    title: string;
    description: string;
    date?: string;
};

// The complete, parsed representation of a single .mdx file.
// Produced by getPostBySlug and getPostsByCategory in utils.ts.
//   slug     → URL-safe filename without extension (e.g. "getting-started")
//   category → parent directory name          (e.g. "wazuh-labs")
//   content  → raw MDX body string, passed to <MDXRemote source={...} />
//   frontmatter → typed metadata extracted from the YAML block
export type MdxData = {
    slug: string;
    category: string;
    content: string;
    frontmatter: Frontmatter;
}

// Props type for dynamic [category]/[slug] page components.
// In Next.js 15+, route params are resolved asynchronously, so `params` is
// typed as a Promise. The page component must `await params` before accessing
// the individual segment values (category, slug).
export type ParamProps = {
    params: Promise<{
      category: string;
      slug: string;
    }>;
  };

  // ─── Consent ──────────────────────────────────────────────────────────────────
// Represents the three possible states of the user's analytics consent
// decision. This type is used by the consent context, banner component,
// and localStorage helpers throughout the app.
//
//   undecided → user has not yet made a choice (banner should be shown)
//   accepted  → user opted in  (GA4 should load)
//   declined  → user opted out (GA4 must not load)
export type ConsentStatus = "undecided" | "accepted" | "declined";

// Props for the ConsentBanner component.
// `onClose` is called when the user makes a decision (accept or decline)
// so the banner can be dismissed after the consent state is updated.
export interface ConsentBannerProps {
  onClose: () => void;
}