// layout.tsx — root layout applied to every page in the app.
// Sets global metadata (title template, OG tags, Twitter card) using values
// from constants so they're never duplicated across files.
// Also loads the Geist font and renders the persistent Navbar.
import { Geist } from "next/font/google";
import { Navbar } from "./components/layout";
import "./globals.css";
import type { Metadata } from "next";
import { SITE, COLORS } from "@/app/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.stagingUrl),
  // %s is replaced by each page's own title export (e.g. "Labs & Projects")
  title: {
    template: `%s | ${SITE.name}`,
    default: `${SITE.name} | ${SITE.role}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE.url }],
  openGraph: {
    type: "website",
    url: SITE.stagingUrl,
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
    <html lang="en" className={geist.className}>
      <body
        className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: COLORS.background }}
      >
        <header>
          <Navbar />
        </header>
        <main className="mt-25">{children}</main>
      </body>
    </html>
  );
}
