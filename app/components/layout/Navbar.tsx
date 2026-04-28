"use client";
// Navbar — fixed, glass-morphism top bar that hides when scrolling down.
// Renders both a desktop row of links and a mobile hamburger dropdown.
// Nav links and CV details come from constants so they're never duplicated.

import { useState, useEffect } from "react";
import { NavButton } from "../ui";
import { usePathname } from "next/navigation";
import DownloadButton from "../ui/Buttons/DownloadButton";
import { NAV_LINKS, CV, COLORS, SCROLL_HIDE_THRESHOLD } from "@/app/lib/constants";

// ─── Hook ─────────────────────────────────────────────────────────────────────
// Tracks scroll direction so the navbar can slide out of view on scroll down
// and reappear on scroll up. Only hides after passing SCROLL_HIDE_THRESHOLD px.
function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      setScrollDir(scrollY > lastScrollY && scrollY > SCROLL_HIDE_THRESHOLD ? "down" : "up");
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return scrollDir;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Navbar() {
  const scrollDir = useScrollDirection();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the user navigates to a new route
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className="font-bold fixed z-50 rounded-2xl left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 mb-10 transition-transform duration-300"
      style={{
        color: COLORS.text,
        backgroundColor: COLORS.navbar,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(232, 237, 245, 0.08)",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.15)",
        transform: scrollDir === "down" ? "translateY(-120%)" : "translateY(0)",
      }}
    >
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between p-6 md:p-8">
        <div>PHATSIMO PHEKO</div>

        {/* Desktop links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <NavButton key={link.href} label={link.label} href={link.href} />
          ))}
          <DownloadButton
            label="DOWNLOAD CV"
            href={CV.href}
            target="_blank"
            download={CV.download}
            prefetch={false}
          />
        </div>

        {/* Hamburger button — visible on mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* ── Mobile dropdown menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-end gap-4 px-6 pb-6">
          {NAV_LINKS.map((link) => (
            <NavButton key={link.href} label={link.label} href={link.href} />
          ))}
          <DownloadButton
            label="DOWNLOAD CV"
            href={CV.href}
            target="_blank"
            download={CV.download}
            prefetch={false}
          />
        </div>
      </div>
    </nav>
  );
}
