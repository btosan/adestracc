'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/our-impact', label: 'Our Impact' },
  { href: '/our-process', label: 'Our Process' },
  { href: '/contact', label: 'Contact' },
];

// Only the homepage gets the transparent → solid scroll transition.
// Every other page starts solid royal blue immediately.
const TRANSPARENT_PAGES = ['/'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = TRANSPARENT_PAGES.includes(pathname);
  const isSolid = !isHomePage || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        backgroundColor: isSolid ? 'rgba(27, 58, 122, 0.99)' : 'transparent',
        backdropFilter: isSolid ? 'blur(12px)' : 'none',
        borderBottom: isSolid ? '1px solid rgba(201,153,58,0.3)' : '1px solid transparent',
        padding: isSolid ? '12px 0' : '20px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '44px', height: '44px',
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 700, fontSize: '18px',
              color: 'var(--royal-blue-deep)',
              flexShrink: 0,
            }}>A</div>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '16px', color: '#fff', lineHeight: 1.1 }}>ADESTRACC</div>
              <div style={{ fontSize: '9px', color: 'rgba(201,153,58,0.9)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Delta State Chiefs</div>
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: pathname === link.href ? 'var(--gold-light)' : 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: pathname === link.href ? 600 : 400,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
                borderBottom: pathname === link.href ? '2px solid var(--gold)' : '2px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none' }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          <div style={{ width: '24px', height: '2px', background: '#fff', marginBottom: '5px', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ width: '24px', height: '2px', background: '#fff', marginBottom: '5px', opacity: menuOpen ? 0 : 1 }} />
          <div style={{ width: '24px', height: '2px', background: '#fff', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(15, 37, 84, 0.98)',
          borderTop: '1px solid rgba(201,153,58,0.3)',
          padding: '20px 24px',
        }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: pathname === link.href ? 'var(--gold-light)' : 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                fontSize: '15px',
                padding: '12px 0',
                borderBottom: '1px solid rgba(201,153,58,0.1)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}