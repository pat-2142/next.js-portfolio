import { Geist } from 'next/font/google';
import { Navbar } from "./components/layout";
import "./globals.css";

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
