"use client";
// HeroCard — the top section of the home page with a bio, CTA buttons, and headshot.
// Uses a skeleton loading pattern (same approach as ImageWrapper) to show an
// animated pulse placeholder while the headshot loads, then fades the image in.
// Marked "use client" because it uses useState to track image load state.

import Image from "next/image";
import { useState } from "react";
import { SectionWrapper } from "../layout";
import { PrimaryButton, SecondaryButton } from "../ui";
import { COLORS, CONTACT } from "@/lib/constants";
import { SITE } from "@/lib/constants";

export default function HeroCard() {
  // Tracks whether the headshot has finished loading
  const [loaded, setLoaded] = useState(false);

  return (
    <SectionWrapper>
      {/* ── Bio column ── */}
      <div className="flex flex-1 flex-col">
        <h1
          className="font-bold text-lg md:text-2xl pb-2"
          style={{ color: COLORS.text }}
        >
          Cybersecurity Consultant | Aspiring Cloud Security Engineer
        </h1>
        <p>
          Cybersecurity consultant based in Botswana with hands-on experience in
          SOC operations, SIEM deployment, and cloud security. I manage endpoint
          monitoring using Wazuh, coordinate incident response workflows, and
          produce security analysis report. I hold three OCI 2025 certifications
          reflecting a deliberate focus on cloud security. My background also
          includes full-cycle software development — from requirements and
          architecture through to deployment and maintenance — giving me a
          practical understanding of how applications are built, which sharpens
          how I assess and secure them. I'm building toward a career at the
          intersection of security operations, cloud infrastructure, and application
          security.
        </p>
        <div className="flex gap-3 mt-5">
          <PrimaryButton label="VISIT LINKEDIN" href={CONTACT.linkedin} target="_blank" />
          <SecondaryButton label="VIEW PROJECTS" href="/projects" />
        </div>
      </div>

      {/* ── Headshot column ── */}
      <div className="flex flex-1 items-center justify-center">
        {/* Outer div matches the image size so the skeleton fills the same space */}
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          {/* Skeleton pulse shown until the image loads */}
          {!loaded && (
            <div
              className="absolute inset-0 rounded-full animate-pulse"
              style={{ backgroundColor: COLORS.card }}
            />
          )}
          <Image
            src={SITE.headshotPath}
            alt={`${SITE.name} headshot`}
            fill
            priority={true}
            onLoad={() => setLoaded(true)}
            className={`rounded-full ring-2 md:ring-5 ring-[#6366F1] object-cover transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
