/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, User, LogOut, LayoutDashboard, ChevronDown } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';

const navLinks = [
  { href: '/',            label: 'Home'        },
  { href: '/about',       label: 'About'       },
  { href: '/our-impact',  label: 'Our Impact'  },
  { href: '/our-process', label: 'Our Process' },
  { href: '/contact',     label: 'Contact'     },
];

const TRANSPARENT_PAGES = ['/'];

type SessionUser = {
  name?:  string | null;
  email?: string | null;
  image?: string | null;
  role?:  string;
};

function UserAvatar({ user, size = 36 }: { user: SessionUser; size?: number }) {
  const initials = user.name
    ? user.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
    : user.email?.[0]?.toUpperCase() ?? 'U';

  if (user.image) {
    return (
      <img src={user.image} alt={user.name ?? 'User'} style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover', border: '2px solid #C9993A' }} />
    );
  }
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: 'linear-gradient(135deg, #C9993A, #E8B84B)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Cormorant Garamond, serif', fontWeight: 700,
      fontSize: size * 0.38, color: '#0F2447',
      border: '2px solid rgba(201,153,58,0.6)', flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [panelOpen, setPanelOpen]   = useState(false);
  const [prevPath, setPrevPath]     = useState('');
  const pathname                    = usePathname();
  const panelRef                    = useRef<HTMLDivElement>(null);
  const { data: session, status }   = useSession();

  const isHomePage = TRANSPARENT_PAGES.includes(pathname);
  const isSolid    = !isHomePage || scrolled;
  const user       = session?.user as SessionUser | undefined;
  const isAdmin    = user?.role === 'ADMIN';

  // Close menus on route change — state comparison during render, no effect needed
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    if (mobileOpen) setMobileOpen(false);
    if (panelOpen) setPanelOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setPanelOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSignOut = async () => {
    setPanelOpen(false);
    await signOut({ callbackUrl: '/' });
  };

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.4s ease',
        backgroundColor: isSolid ? 'rgba(27, 58, 122, 0.99)' : 'transparent',
        backdropFilter: isSolid ? 'blur(12px)' : 'none',
        borderBottom: isSolid ? '1px solid rgba(201,153,58,0.3)' : '1px solid transparent',
        padding: isSolid ? '10px 0' : '20px 0',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px', height: '42px',
              background: 'linear-gradient(135deg, #C9993A 0%, #E8B84B 100%)',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '18px',
              color: '#0F2447', flexShrink: 0,
            }}>A</div>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '15px', color: '#fff', lineHeight: 1.1 }}>ADESTRACC</div>
              <div style={{ fontSize: '9px', color: 'rgba(201,153,58,0.9)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Delta State Chiefs</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map(link => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} style={{
                  padding: '8px 16px', borderRadius: '6px',
                  color: active ? '#E8B84B' : 'rgba(255,255,255,0.85)',
                  textDecoration: 'none', fontSize: '13px',
                  fontWeight: active ? 600 : 400,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  transition: 'color 0.2s, background 0.2s',
                  background: active ? 'rgba(255,255,255,0.08)' : 'transparent',
                  borderBottom: active ? '2px solid #C9993A' : '2px solid transparent',
                }}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right — user control */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div ref={panelRef} style={{ position: 'relative' }} className="desktop-nav">
              {status === 'loading' ? (
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
              ) : session && user ? (
                <button
                  onClick={() => setPanelOpen(!panelOpen)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(201,153,58,0.3)',
                    borderRadius: '9999px', padding: '4px 10px 4px 4px',
                    cursor: 'pointer', transition: 'background 0.2s',
                  }}
                  aria-label="User menu"
                >
                  <UserAvatar user={user} size={30} />
                  <span style={{ fontSize: '13px', color: '#fff', fontWeight: 500, maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {user.name?.split(' ')[0] ?? 'Account'}
                  </span>
                  <ChevronDown size={14} color="rgba(255,255,255,0.7)" style={{ transform: panelOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
              ) : (
                <Link href="/admin/login" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', borderRadius: '50%',
                  border: '1.5px solid rgba(201,153,58,0.5)',
                  background: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.85)', transition: 'all 0.2s',
                }} aria-label="Sign in">
                  <User size={18} />
                </Link>
              )}

              {/* Dropdown panel */}
              {panelOpen && session && user && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 12px)', right: 0,
                  background: '#fff', borderRadius: '14px', minWidth: '240px',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.18)', border: '1px solid #D9D3C7',
                  overflow: 'hidden', zIndex: 200, animation: 'dropIn 0.18s ease',
                }}>
                  <div style={{
                    padding: '20px', background: 'linear-gradient(135deg, #0F2447, #1B3A7A)',
                    display: 'flex', alignItems: 'center', gap: '12px',
                  }}>
                    <UserAvatar user={user} size={42} />
                    <div style={{ overflow: 'hidden' }}>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '17px', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {user.name ?? 'Admin User'}
                      </div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {user.email}
                      </div>
                      <div style={{ marginTop: '4px', display: 'inline-block', background: isAdmin ? 'rgba(201,153,58,0.25)' : 'rgba(255,255,255,0.12)', borderRadius: '9999px', padding: '2px 10px', fontSize: '10px', fontWeight: 700, color: isAdmin ? '#E8B84B' : 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        {user.role ?? 'Editor'}
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: '8px' }}>
                    {isAdmin && (
                      <Link href="/admin" onClick={() => setPanelOpen(false)} style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '11px 14px', borderRadius: '8px', textDecoration: 'none',
                        color: '#0F2447', fontSize: '14px', fontWeight: 500, transition: 'background 0.15s',
                      }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#F5F3EE')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >
                        <LayoutDashboard size={16} color="#1B3A7A" />
                        Admin Dashboard
                      </Link>
                    )}
                    <div style={{ height: '1px', background: '#EDE9DF', margin: '4px 0' }} />
                    <button onClick={handleSignOut} style={{
                      display: 'flex', alignItems: 'center', gap: '10px', width: '100%',
                      padding: '11px 14px', borderRadius: '8px', border: 'none',
                      background: 'transparent', color: '#8B0000',
                      fontSize: '14px', fontWeight: 500, cursor: 'pointer',
                      fontFamily: 'inherit', textAlign: 'left', transition: 'background 0.15s',
                    }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#FEF2F2')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'none', color: '#fff' }} className="hamburger" aria-label="Toggle menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background: 'rgba(15, 37, 84, 0.99)', borderTop: '1px solid rgba(201,153,58,0.3)', padding: '8px 16px 20px' }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{
                display: 'block', color: pathname === link.href ? '#E8B84B' : 'rgba(255,255,255,0.85)',
                textDecoration: 'none', fontSize: '15px', padding: '13px 8px',
                borderBottom: '1px solid rgba(201,153,58,0.1)',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                fontWeight: pathname === link.href ? 600 : 400,
              }}>
                {link.label}
              </Link>
            ))}

            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(201,153,58,0.2)' }}>
              {session && user ? (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 8px 16px' }}>
                    <UserAvatar user={user} size={38} />
                    <div>
                      <div style={{ color: '#fff', fontSize: '14px', fontWeight: 600 }}>{user.name ?? 'Admin'}</div>
                      <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px' }}>{user.email}</div>
                    </div>
                  </div>
                  {isAdmin && (
                    <Link href="/admin" onClick={() => setMobileOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '11px 8px', color: '#E8B84B', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                      <LayoutDashboard size={16} />
                      Admin Dashboard
                    </Link>
                  )}
                  <button onClick={handleSignOut} style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', padding: '11px 8px', background: 'none', border: 'none', color: '#FCA5A5', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </>
              ) : (
                <Link href="/admin/login" onClick={() => setMobileOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '11px 8px', color: '#E8B84B', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                  <User size={16} />
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      <style>{`
        @keyframes dropIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .hamburger { display: block !important; } }
      `}</style>
    </>
  );
}