"use client";
import Image from "next/image";
import { useState } from "react";
import { ImageProps } from "@/app/lib/types";

export default function ImageWrapper({ src, alt, className }: ImageProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative z-0 w-64 h-48 rounded-2xl">
            {!loaded && (
                <div className="absolute inset-0 rounded-2xl bg-[#1E2A3B] animate-pulse" />
            )}
            <Image
                src={src}
                alt={alt}
                fill
                onLoad={() => setLoaded(true)}
                className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
            />
        </div>
    );
}