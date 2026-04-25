"use client"
import Link from "next/link";

import { ButtonProps } from "@/app/lib/types";

export default function DowmloadButton({ label, href, download, prefetch, target }: ButtonProps) {
    return (
        <Link href={href} download={download} prefetch={prefetch} target={target} className="py-2 px-3 rounded-4xl text-[#0F1523] text-sm font-bold bg-[#00C2FF] hover:bg-[#00A8E0] transition-colors">
            {label}
        </Link>
    );
}