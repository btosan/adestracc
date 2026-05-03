'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import {
  LayoutDashboard, Image, Video, Newspaper,
  BarChart2, Mail, Handshake, LogOut, Menu, X, Home
} from 'lucide-react'

const NAV = [
  { href: '/admin',              label: 'Dashboard',    icon: LayoutDashboard },
  { href: '/admin/gallery',      label: 'Gallery',      icon: Image           },
  { href: '/admin/videos',       label: 'Videos',       icon: Video           },
  { href: '/admin/news',         label: 'News Articles',icon: Newspaper       },
  { href: '/admin/impact-stats', label: 'Impact Stats', icon: BarChart2       },
  { href: '/admin/messages',     label: 'Messages',     icon: Mail            },
  { href: '/admin/partners',     label: 'Partners',     icon: Handshake       },
  { href: '/',         label: 'Home',         icon: Home            },
]

interface Props {
  user?: { name?: string | null; email?: string | null }
  unreadCount?: number
}

export default function AdminSidebar({ user, unreadCount = 0 }: Props) {
  const pathname    = usePathname()
  const [open, setOpen] = useState(false)

  const sidebarContent = (
    <>
      {/* Brand */}
      <div style={{
        padding: '24px 20px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '38px', height: '38px', flexShrink: 0,
            background: 'linear-gradient(135deg, #C9993A, #E8B84B)',
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '17px',
            color: '#0F2447',
          }}>A</div>
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '15px', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>ADESTRACC</div>
            <div style={{ fontSize: '9px', color: 'rgba(201,153,58,0.85)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Admin Panel</div>
          </div>
        </div>
        {/* Close button — mobile only */}
        <button
          onClick={() => setOpen(false)}
          className="sidebar-close"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', padding: '4px', display: 'none' }}
        >
          <X size={20} />
        </button>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '12px 10px', overflowY: 'auto' }}>
        {NAV.map(item => {
          const active = pathname === item.href ||
            (item.href !== '/admin' && pathname.startsWith(item.href))
          const Icon = item.icon
          const isMessages = item.href === '/admin/messages'
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', gap: '11px',
                padding: '10px 14px', borderRadius: '9px', marginBottom: '2px',
                textDecoration: 'none', fontSize: '13.5px',
                color: active ? '#fff' : 'rgba(255,255,255,0.62)',
                background: active ? 'rgba(255,255,255,0.11)' : 'transparent',
                borderLeft: active ? '3px solid #C9993A' : '3px solid transparent',
                fontWeight: active ? 600 : 400,
                transition: 'background 0.15s, color 0.15s',
                position: 'relative',
              }}
            >
              <Icon size={16} style={{ flexShrink: 0 }} />
              <span style={{ flex: 1 }}>{item.label}</span>
              {isMessages && unreadCount > 0 && (
                <span style={{
                  background: '#8B0000', color: '#fff',
                  fontSize: '10px', fontWeight: 700,
                  padding: '2px 7px', borderRadius: '9999px',
                  lineHeight: 1.4,
                }}>
                  {unreadCount}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* User footer */}
      <div style={{
        padding: '14px 10px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}>
        <div style={{
          padding: '10px 14px', marginBottom: '6px',
          background: 'rgba(255,255,255,0.05)', borderRadius: '9px',
        }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', marginBottom: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {user?.name || 'Admin'}
          </div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {user?.email}
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          style={{
            width: '100%', padding: '9px 14px',
            background: 'rgba(139,0,0,0.25)',
            border: '1px solid rgba(139,0,0,0.4)',
            borderRadius: '9px', color: '#FCA5A5',
            fontSize: '13px', fontWeight: 600,
            cursor: 'pointer', fontFamily: 'inherit',
            textAlign: 'left', display: 'flex',
            alignItems: 'center', gap: '8px',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(139,0,0,0.4)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(139,0,0,0.25)')}
        >
          <LogOut size={14} />
          Sign Out
        </button>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile top bar */}
      <div className="admin-mobile-bar" style={{
        display: 'none', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 90,
        background: '#0F2447', padding: '12px 20px',
        borderBottom: '1px solid rgba(201,153,58,0.2)',
        alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '30px', height: '30px', background: 'linear-gradient(135deg, #C9993A, #E8B84B)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '14px', color: '#0F2447' }}>A</div>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '15px', color: '#fff' }}>ADESTRACC Admin</span>
        </div>
        <button onClick={() => setOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: '4px', display: 'flex' }}>
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 98, display: 'none' }}
          className="admin-overlay"
        />
      )}

      {/* Sidebar — desktop: static | mobile: slide-in drawer */}
      <aside
        className={`admin-sidebar${open ? ' admin-sidebar-open' : ''}`}
        style={{
          width: '248px', flexShrink: 0,
          background: 'linear-gradient(180deg, #0F2447 0%, #1B3A7A 100%)',
          display: 'flex', flexDirection: 'column',
          borderRight: '1px solid rgba(201,153,58,0.15)',
          minHeight: '100vh', position: 'sticky', top: 0, height: '100vh',
          overflowY: 'auto',
        }}
      >
        {sidebarContent}
      </aside>

      <style>{`
        @media (max-width: 768px) {
          .admin-mobile-bar   { display: flex !important; }
          .admin-overlay      { display: block !important; }
          .admin-sidebar {
            position: fixed !important;
            top: 0; left: 0; height: 100vh !important;
            z-index: 99;
            transform: translateX(-100%);
            transition: transform 0.25s ease;
            min-height: unset !important;
          }
          .admin-sidebar.admin-sidebar-open {
            transform: translateX(0);
          }
          .sidebar-close { display: block !important; }
        }
      `}</style>
    </>
  )
}