import './globals.css';
import { ReactNode } from 'react';
import { Metadata, Viewport } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import { SITE_URL } from '@/lib/site';

const siteTitle = "Publisher's Clearing House — Apply to Win";
const siteDescription =
  'Apply for your chance to win PCH prizes. Real winners since 1953.';

export const metadata: Metadata = {
  title: { default: siteTitle, template: '%s | PCH' },
  description: siteDescription,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "Publisher's Clearing House",
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
