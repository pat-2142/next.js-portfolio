"use client";
// PrimaryButton — solid accent-coloured call-to-action button.
// Used for main actions like "VIEW CERTIFICATE", "LIVE PROJECT", "LINKEDIN".
import Link from "next/link";
import { ButtonProps } from "@/app/lib/types";
import { COLORS } from "@/app/lib/constants";

export default function PrimaryButton({ label, href, target }: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      className="py-2 px-3 rounded-4xl text-xs md:text-sm font-bold"
      style={{
        backgroundColor: COLORS.accent,
        color: COLORS.background,
        border: `2px solid ${COLORS.accent}`,
      }}
    >
      {label}
    </Link>
  );
}
