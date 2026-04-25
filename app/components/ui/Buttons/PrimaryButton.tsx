"use client"
import Link from "next/link";

import { ButtonProps } from "@/app/lib/types";

export default function Button({ label, href, target }: ButtonProps) {
    return (
        <Link href={href} className="py-2 px-3 rounded-4xl text-xs md:text-sm font-bold" target={target} style={{ backgroundColor: '#00C2FF', color: '#0F1523', border: '2px solid #00C2FF' }}>
            {label}
        </Link>
    );
}