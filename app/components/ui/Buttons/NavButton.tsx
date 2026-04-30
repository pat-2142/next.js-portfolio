"use client";
// Nav link that highlights when its route is active.
// Hover handled via mouse events since COLORS values can't go directly in Tailwind classes.
// Guards against overriding the active state colour on hover.
import { ButtonProps } from "@/app/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLORS } from "@/app/lib/constants";

export default function NavButton({ label, href }: ButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="py-2 px-3 rounded-4xl font-bold text-sm md:text-base transition-colors"
      style={{ backgroundColor: isActive ? COLORS.navActive : "transparent" }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.backgroundColor = COLORS.navHover;
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      {label}
    </Link>
  );
}