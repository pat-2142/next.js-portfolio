"use client";
// ImageWrapper — lazy-loading image with a skeleton placeholder.
// Shows an animated pulse placeholder while the image loads, then fades it in.
// Used in ProjectCard to display project thumbnails.
import Image from "next/image";
import { useState } from "react";
import { ImageProps } from "@/app/lib/types";
import { COLORS } from "@/app/lib/constants";

export default function ImageWrapper({ src, alt, className }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative z-0 w-64 h-48 rounded-2xl">
      {/* Skeleton shown until the image has finished loading */}
      {!loaded && (
        <div
          className="absolute inset-0 rounded-2xl animate-pulse"
          style={{ backgroundColor: COLORS.card }}
        />
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
