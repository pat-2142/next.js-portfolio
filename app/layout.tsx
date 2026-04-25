import { Geist } from 'next/font/google';
import { Navbar } from "./components/layout";
import "./globals.css";
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://next-js-portfolio-gules.vercel.app'), // swap with https://phatsimopheko.com once live
  title: {
    template: '%s | Phatsimo Pheko',
    default: 'Phatsimo Pheko | Cybersecurity Consultant',
  },
  description:
    'Cybersecurity consultant based in Botswana specialising in SOC operations, SIEM deployment with Wazuh, and Oracle Cloud Infrastructure. OCI Certified.',
  keywords: [
    'Cybersecurity Consultant',
    'SOC Analyst',
    'Wazuh SIEM',
    'OCI Certified',
    'Cloud Security',
    'Botswana',
    'Incident Response',
  ],
  authors: [{ name: 'Phatsimo Pheko', url: 'https://phatsimopheko.com' }],
  openGraph: {
    type: 'website',
    url: 'https://next-js-portfolio-gules.vercel.app',
    title: 'Phatsimo Pheko | Cybersecurity Consultant',
    description:
      'SOC operations, Wazuh SIEM deployment, and OCI-certified cloud security — based in Botswana, open to remote.',
    images: [
      {
        url: '/images/headshot.jpeg',
        width: 800,
        height: 800,
        alt: 'Phatsimo Pheko',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Phatsimo Pheko | Cybersecurity Consultant',
    description:
      'SOC operations, Wazuh SIEM deployment, and OCI-certified cloud security — based in Botswana, open to remote.',
    images: ['/images/headshot.jpeg'],
  },
}

const geist = Geist({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className={'max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'} style={{ backgroundColor: '#0F1523' }}>
        <header>
          <Navbar />
        </header>
        <main className='mt-25'>
          {children}
        </main>
      </body>
    </html>
  );
}
