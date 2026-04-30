"use client";
// SecondaryButton — outlined button for secondary actions.
// Uses the accent colour as a border with a dark fill, so it sits visually
// below PrimaryButton in hierarchy. Used for "VIEW PROJECTS" on the hero.
import Link from "next/link";
import { ButtonProps } from "@/app/lib/types";
import { COLORS } from "@/app/lib/constants";

export default function SecondaryButton({ label, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className="py-2 px-3 rounded-4xl text-xs md:text-sm font-bold"
      style={{
        backgroundColor: COLORS.cardInner,
        color: COLORS.textSecondary,
        border: `2px solid ${COLORS.accent}`,
      }}
    >
      {label}
    </Link>
  );
}
