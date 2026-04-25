"use client";
import { useState, useEffect } from "react";
import { NavButton } from "../ui";
import { usePathname } from "next/navigation";
import DownloadButton from "../ui/Buttons/DownloadButton";

function useScrollDirection() {
    const [scrollDir, setScrollDir] = useState("up");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;
            setScrollDir(scrollY > lastScrollY && scrollY > 80 ? "down" : "up");
            lastScrollY = scrollY;
        };

        window.addEventListener("scroll", updateScrollDir);
        return () => window.removeEventListener("scroll", updateScrollDir);
    }, []);

    return scrollDir;
}

export default function Navbar() {
    const scrollDir = useScrollDirection();
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <nav
            className="font-bold fixed z-50 rounded-2xl left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 mb-10 transition-transform duration-300"
            style={{
                color: '#E8EDF5',
                backgroundColor: '#1e2a3b8c',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(232, 237, 245, 0.08)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15)',
                transform: scrollDir === "down" ? "translateY(-120%)" : "translateY(0)",
            }}
        >
            {/* Top bar */}
            <div className="flex items-center justify-between p-6 md:p-8">
                <div>PHATSIMO</div>

                {/* Desktop links — hidden on mobile */}
                <div className="hidden md:flex items-center gap-4">
                    <NavButton label="HOME" href="/" />
                    <NavButton label="LABS & PROJECTS" href="/projects" />
                    <DownloadButton
                        label="DOWNLOAD CV"
                        href="/Phatsimo Pheko CV.pdf"
                        target="_blank"
                        download="Phatsimo Pheko CV.pdf"
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
                    <span
                        className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                            menuOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                            menuOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                            menuOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </button>
            </div>

            {/* Mobile dropdown menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col items-end gap-4 px-6 pb-6">
                    <NavButton label="HOME" href="/" />
                    <NavButton label="LABS & PROJECTS" href="/projects" />
                    <DownloadButton
                        label="DOWNLOAD CV"
                        href="/Phatsimo Pheko CV.pdf"
                        target="_blank"
                        download="Phatsimo Pheko CV.pdf"
                        prefetch={false}
                    />
                </div>
            </div>
        </nav>
    );
}