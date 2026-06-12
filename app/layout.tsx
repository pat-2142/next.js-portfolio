// layout.tsx — root layout applied to every page in the app.
// Sets global metadata (title template, OG tags, Twitter card) using values
// from constants so they're never duplicated across files.
// Also loads the Geist font and renders the persistent Navbar.
//
// GA4 is conditionally rendered based on the user's consent decision.
// The ConsentProvider wraps the body children so that the Footer and
// ConsentBanner can both read and update consent state via context.

import { Geist } from "next/font/google";
import { Navbar } from "./components/layout";
import { Footer } from "./components/layout";
import "./globals.css";
import type { Metadata } from "next";
import { SITE, COLORS, GA4 } from "@/lib/constants";
import { ConsentProvider } from "@/lib/context/ConsentContext";
import ConsentBannerWrapper from "./components/wrappers/ConsentBannerWrapper";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    template: `%s | ${SITE.name}`,
    default: `${SITE.name} | ${SITE.role}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE.url }],
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} | ${SITE.role}`,
    description: SITE.shortDescription,
    images: [{ url: SITE.headshotPath, width: 800, height: 800, alt: SITE.name }],
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} | ${SITE.role}`,
    description: SITE.shortDescription,
    images: [SITE.headshotPath],
  },
};

const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.className} style={{ colorScheme: "only light" }} suppressHydrationWarning>
      <body
        className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: COLORS.background }}
      >
        <ConsentProvider>
          <header>
            <Navbar />
          </header>
          <main className="mt-25">{children}</main>
          <footer>
            <Footer />
          </footer>
          <ConsentBannerWrapper />
        </ConsentProvider>
      </body>
    </html>
  );
}