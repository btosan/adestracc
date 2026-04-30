/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export const metadata: Metadata = {
  title: 'ADESTRACC — Association of Delta State Traditional Council of Chiefs',
  description: 'Official body of gazetted chiefs in Delta State | Fostering unity and grassroots social stability through tradition, culture, tourism & creative development.',
  keywords: 'ADESTRACC, Delta State, Traditional Chiefs, Gazetted Chiefs, Culture, Heritage, Nigeria',
  openGraph: {
    title: "ADESTRACC — Voice of Delta State's Gazetted Chiefs",
    description: 'Preserving heritage, promoting unity, and driving grassroots stability through culture, tradition, tourism & creativity.',
    type: 'website',
  },
  themeColor: '#1B3A7A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        {/* Browser chrome colour — royal blue takeover */}
        <meta name="theme-color" content="#1B3A7A" />
        <meta name="msapplication-navbutton-color" content="#1B3A7A" />
        <meta name="msapplication-TileColor" content="#1B3A7A" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#1B3A7A" />
        <meta name="color-scheme" content="light" />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}