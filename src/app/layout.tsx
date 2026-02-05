import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header, Footer, WhatsAppFloat } from '@/components/ui';
import { LocalBusinessJsonLd } from '@/components/seo';
import { siteConfig } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline} | #1 Rack Manufacturer in Madurai & Tamil Nadu`,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Leading rack manufacturer in Madurai, Tamil Nadu. Supermarket racks, display racks, steel racks, warehouse racks, pharmacy racks & more. Factory-direct pricing. 38 districts served.',
  keywords: [
    'rack manufacturers Madurai',
    'rack manufacturers Tamil Nadu',
    'supermarket racks Madurai',
    'display racks Madurai',
    'steel racks manufacturer',
    'warehouse racks Tamil Nadu',
    'storage racks Madurai',
    'hyper store racks',
    'fruit vegetable racks',
    'pharmacy racks',
    'garments racks',
    'heavy duty racks',
    'industrial racks',
    'custom rack manufacturer',
    'Racks Madurai',
  ],
  authors: [{ name: 'Racks Madurai' }],
  creator: 'Racks Madurai',
  publisher: 'Racks Madurai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Racks Madurai - Premium Display Rack Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/images/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-your-google-verification-code',
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-screen bg-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
