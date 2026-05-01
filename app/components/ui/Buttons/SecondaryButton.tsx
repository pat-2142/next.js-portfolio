"use client";
// Outlined button for secondary actions — sits visually below PrimaryButton.
// Hover swaps border and background to accentHover, consistent with DownloadButton.
import Link from "next/link";
import { ButtonProps } from "@/app/lib/types";
import { COLORS } from "@/app/lib/constants";

export default function SecondaryButton({ label, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className="py-2 px-3 rounded-4xl text-xs md:text-sm font-bold transition-colors"
      style={{
        backgroundColor: COLORS.cardInner,
        color: COLORS.textSecondary,
        border: `2px solid ${COLORS.accent}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = COLORS.accentHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = COLORS.accent;
      }}
    >
      {label}
    </Link>
  );
}