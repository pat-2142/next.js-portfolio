"use client"
import Link from "next/link";

import { ButtonProps } from "@/app/lib/types";

export default function Button({ label, href }: ButtonProps) {
    return (
        <Link href={href} className="py-2 px-3 rounded-4xl text-xs md:text-sm font-bold" style={{ backgroundColor: '#1F2937', color: '#7A8BA0', border: '2px solid #00C2FF' }}>
            {label}
        </Link>
    );
}