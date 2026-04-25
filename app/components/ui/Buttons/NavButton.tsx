"use client"

import { ButtonProps } from "@/app/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButton({ label, href }: ButtonProps) {
    const pathname = usePathname();
    
    return (
        <Link className="py-2 px-3 rounded-4xl font-bold text-sm md:text-base hover:bg-[#2c3e50] transition-colors" style={{ backgroundColor: pathname === href ? "#6366F1  " : "" }} href={href}>{label}</Link>
    );
}