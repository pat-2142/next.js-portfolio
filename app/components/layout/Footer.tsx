// Footer — displays site-wide copyright and legal navigation.
// Rendered in the root layout so it appears on every page.
// The author name comes from the SITE constant so it stays in sync
// with the rest of the site if it ever changes.
//
// "Cookie Preferences" triggers the consent banner via the ConsentContext
// so the user can update their analytics preference at any time.

"use client";

import Link from "next/link";
import { SectionWrapper } from "../layout";
import { SITE } from "@/lib/constants";
import { useConsent } from "@/lib/context/ConsentContext";

export default function Footer() {
  const { openPreferences } = useConsent();

  return (
    <SectionWrapper>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="hover:opacity-70 underline underline-offset-2 transition-opacity"
          >
            Privacy Policy
          </Link>
          <button
            onClick={openPreferences}
            className="hover:opacity-70 underline underline-offset-2 transition-opacity cursor-pointer bg-transparent border-none p-0 text-sm text-gray-500"
          >
            Cookie Preferences
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}