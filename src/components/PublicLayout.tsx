'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin  = pathname.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh' }}>{children}</main>
      <Footer />
      <FloatingButtons />
    </>
  );
}