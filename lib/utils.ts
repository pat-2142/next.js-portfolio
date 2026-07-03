// utils.ts
// Pure helper functions — no React, no JSX, no side effects.
// Any file in the project can import from here safely.

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MdxData } from "./types";

// ─── Page title ───────────────────────────────────────────────────────────────
// Generates a consistent "<Section> | <Name>" page title string.
// Used in per-page metadata exports (e.g. projects/page.tsx).
export function buildPageTitle(section: string): string {
  return `${section}`;
}

// ─── Date range ───────────────────────────────────────────────────────────────
// Formats a start/end date pair into a single display string.
// Used in ExperienceCard and EducationCard headings.
// Example: formatDateRange("October 2023", "Present") → "October 2023 – Present"
export function formatDateRange(startDate: string, endDate: string): string {
  return `${startDate} – ${endDate}`;
}

// ─── Content path ─────────────────────────────────────────────────────────────
// Builds an absolute path to the top-level /content directory at the project
// root. process.cwd() returns the directory Next.js was started from (i.e. the
// project root), so this is stable regardless of which file imports it.
// All MDX reading functions below derive their paths from this constant.
const CONTENT_PATH = path.join(
  process.cwd(),
  "content"
);

// ─── getPostsByCategory ───────────────────────────────────────────────────────
// Reads every .mdx file inside content/<category>/ and returns an array of
// fully-parsed MdxData objects — one per file.
//
// How it works, step by step:
//  1. Build the path to content/<category>/
//  2. Read the directory to get an array of filenames (e.g. ["lab-1.mdx", ...])
//  3. For each file:
//     a. Strip the ".mdx" extension to derive the URL slug
//     b. Read the raw file content as a UTF-8 string
//     c. Pass the content through gray-matter, which splits it into:
//        - `data`    → the YAML frontmatter block (title, description, date …)
//        - `content` → everything after the frontmatter (the MDX body)
//     d. Return a structured MdxData object
//
// This function is intentionally private (no `export`) — callers should use
// the named category helpers below (e.g. getWazuhLabs) instead.
export function getPostsByCategory(category: string): MdxData[] {
  const categoryPath = path.join(
    CONTENT_PATH,
    category
  );

  // Returns a flat list of filenames in the directory (not recursive).
  const files = fs.readdirSync(categoryPath);

  return files.map((file) => {
    // The filename without its extension becomes the slug used in the URL:
    // e.g. "getting-started.mdx" → slug "getting-started"
    // which maps to the route /labs/wazuh-labs/getting-started
    const slug = file.replace(".mdx", "");

    const filePath = path.join(
      categoryPath,
      file
    );

    // Read the raw .mdx file from disk as a plain string.
    const fileContent = fs.readFileSync(
      filePath,
      "utf-8"
    );

    // gray-matter parses the YAML frontmatter delimited by --- at the top of
    // the file, returning it as a plain JS object (`data`) and leaving the
    // remaining MDX markup in `content`.
    //
    // Example .mdx file structure:
    //   ---
    //   title: "My Lab"
    //   description: "A hands-on exercise"
    //   date: "2024-01-15"
    //   ---
    //   ## Introduction
    //   Welcome to the lab...
    const { data, content } = matter(
      fileContent
    );

    return {
      slug,
      category,
      content,       // Raw MDX string — rendered later by <MDXRemote>
      frontmatter:
        data as MdxData["frontmatter"],  // Cast to our known Frontmatter shape
    };
  });
}

// ─── getWazuhLabs ─────────────────────────────────────────────────────────────
// Public helper that returns all posts in the "wazuh-labs" category.
// Used on the /labs listing page to build the grid of lab cards.
// Add a similar function here whenever you introduce a new content category.
export function getWazuhLabs() {
  return getPostsByCategory(
    "wazuh-labs"
  );
}

// ─── getPostBySlug ────────────────────────────────────────────────────────────
// Fetches and parses a single MDX file identified by its category + slug.
// Used in the dynamic [slug] page to render an individual post.
//
// Returns null (instead of throwing) when the file doesn't exist, so the
// calling page can forward the user to Next.js's built-in 404 via notFound().
//
// Path resolved: content/<category>/<slug>.mdx
export function getPostBySlug(
  category: string,
  slug: string
): MdxData | null {
  try {
    const filePath = path.join(
      CONTENT_PATH,
      category,
      `${slug}.mdx`  // Re-add the extension that was stripped when building slugs
    );

    const fileContent = fs.readFileSync(
      filePath,
      "utf-8"
    );

    // Same gray-matter split as in getPostsByCategory — see comments above.
    const { data, content } = matter(
      fileContent
    );

    return {
      slug,
      category,
      content,
      frontmatter:
        data as MdxData["frontmatter"],
    };
  } catch {
    // fs.readFileSync throws if the file path doesn't exist.
    // Returning null lets callers handle the missing-post case gracefully
    // rather than crashing the entire page with an unhandled exception.
    return null;
  }
}