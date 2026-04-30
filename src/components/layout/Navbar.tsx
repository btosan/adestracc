'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/our-impact', label: 'Our Impact' },
  { href: '/our-process', label: 'Our Process' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[var(--royal-blue-dark)] text-white/80 text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="font-display tracking-widest text-[10px] text-[var(--gold-bright)]">
            ASSOCIATION OF DELTA STATE TRADITIONAL COUNCIL OF CHIEFS
          </span>
          <div className="flex items-center gap-6">
            <span>📞 +234 800 000 0000</span>
            <span>✉ info@adestracc.org</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-[var(--border)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-[var(--royal-blue)] flex items-center justify-center border-2 border-[var(--gold)] group-hover:border-[var(--gold-bright)] transition-colors">
                <span className="font-display text-white font-bold text-sm">AD</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[var(--crimson)] border border-white" />
            </div>
            <div>
              <div className={`font-display font-bold text-sm tracking-wide leading-tight ${
                isScrolled || !isHome ? 'text-[var(--royal-blue)]' : 'text-white'
              }`}>
                ADESTRACC
              </div>
              <div className={`text-[9px] tracking-wider font-medium ${
                isScrolled || !isHome ? 'text-[var(--gold)]' : 'text-[var(--gold-bright)]'
              }`}>
                DELTA STATE CHIEFS
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium tracking-wide rounded-md transition-all duration-200 relative group ${
                  pathname === link.href
                    ? 'text-[var(--gold)] bg-[var(--royal-blue)]/5'
                    : isScrolled || !isHome
                    ? 'text-[var(--text-body)] hover:text-[var(--royal-blue)]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[var(--gold)] rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 bg-[var(--royal-blue)] text-white text-sm font-semibold rounded-full hover:bg-[var(--royal-blue-dark)] transition-all duration-200 shadow-md hover:shadow-lg border border-[var(--gold)]/30"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-md ${
              isScrolled || !isHome ? 'text-[var(--royal-blue)]' : 'text-white'
            }`}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-[var(--border)] shadow-xl">
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    pathname === link.href
                      ? 'bg-[var(--royal-blue)] text-white'
                      : 'text-[var(--text-body)] hover:bg-[var(--ivory)]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 px-4 py-3 bg-[var(--royal-blue)] text-white text-sm font-semibold rounded-full text-center"
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
