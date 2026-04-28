"use client";
// NavButton — navigation link that highlights when its route is active.
// Compares its href against the current pathname to apply the active colour.
// Used in Navbar for both desktop and mobile menus.
import { ButtonProps } from "@/app/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLORS } from "@/app/lib/constants";

export default function NavButton({ label, href }: ButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className="py-2 px-3 rounded-4xl font-bold text-sm md:text-base transition-colors"
      style={{ backgroundColor: isActive ? COLORS.navActive : "transparent" }}
      // Tailwind hover class kept here since it only needs the token, not the hex
      href={href}
    >
      {label}
    </Link>
  );
}
