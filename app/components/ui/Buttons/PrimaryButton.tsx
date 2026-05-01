"use client";
// Solid accent-coloured CTA button. Used for "VIEW CERTIFICATE", "LIVE PROJECT" etc.
// Hover swaps to accentHover, consistent with DownloadButton.
import Link from "next/link";
import { ButtonProps } from "@/app/lib/types";
import { COLORS } from "@/app/lib/constants";

export default function PrimaryButton({ label, href, target }: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      className="py-2 px-3 rounded-4xl text-xs md:text-sm font-bold transition-colors"
      style={{
        backgroundColor: COLORS.accent,
        color: COLORS.background,
        border: `2px solid ${COLORS.accent}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = COLORS.accentHover;
        e.currentTarget.style.borderColor = COLORS.accentHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = COLORS.accent;
        e.currentTarget.style.borderColor = COLORS.accent;
      }}
    >
      {label}
    </Link>
  );
}