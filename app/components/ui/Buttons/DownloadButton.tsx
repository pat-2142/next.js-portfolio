"use client";
// DownloadButton — accent button that triggers a file download.
// Distinct from PrimaryButton in that it accepts a `download` attribute,
// which instructs the browser to save the linked file instead of navigating.
// Used in Navbar for the CV download link.
import Link from "next/link";
import { ButtonProps } from "@/app/lib/types";
import { COLORS } from "@/app/lib/constants";

export default function DownloadButton({ label, href, download, prefetch, target }: ButtonProps) {
  return (
    <Link
      href={href}
      download={download}
      prefetch={prefetch}
      target={target}
      className="py-2 px-3 rounded-4xl text-sm font-bold transition-colors"
      style={{
        backgroundColor: COLORS.accent,
        color: COLORS.background,
      }}
      // Inline hover handled via Tailwind; accent hover colour applied via class below
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.accentHover)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.accent)}
    >
      {label}
    </Link>
  );
}
