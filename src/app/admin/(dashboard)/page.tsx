export const dynamic = 'force-dynamic';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/admin/login');

  const [gallery, videos, news, stats, messages, partners] = await Promise.all([
    prisma.galleryImage.count(),
    prisma.videoItem.count(),
    prisma.newsArticle.count(),
    prisma.impactStat.count(),
    prisma.contactMessage.count(),
    prisma.partner.count(),
  ]);
  const unread = await prisma.contactMessage.count({ where: { read: false } });

  const user      = session.user as { name?: string | null; email?: string | null; role?: string };
  const firstName = user.name?.split(' ')[0] || 'Admin';

  const cards = [
    { label: 'Gallery Images', count: gallery,  href: '/admin/gallery',      icon: '🖼',  color: '#1B3A7A' },
    { label: 'Videos',         count: videos,   href: '/admin/videos',        icon: '▶',   color: '#7C3AED' },
    { label: 'News Articles',  count: news,     href: '/admin/news',          icon: '📰',  color: '#0891B2' },
    { label: 'Impact Stats',   count: stats,    href: '/admin/impact-stats',  icon: '📊',  color: '#C9993A' },
    { label: 'Messages',       count: messages, href: '/admin/messages',      icon: '✉',   color: unread > 0 ? '#8B0000' : '#059669', badge: unread > 0 ? `${unread} unread` : undefined },
    { label: 'Partners',       count: partners, href: '/admin/partners',      icon: '🤝',  color: '#B45309' },
  ];

  return (
    <div className=''>
      <div style={{ marginBottom: '36px' }}>
        <p style={{ fontSize: '13px', color: '#6B6B6B', marginBottom: '4px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Welcome back</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: 700, color: '#0F2447', marginBottom: '4px', lineHeight: 1.1 }}>
          Good day, {firstName} 👋
        </h1>
        <p style={{ fontSize: '14px', color: '#6B6B6B' }}>Here is a snapshot of your ADESTRACC website content.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '18px', marginBottom: '32px' }}>
        {cards.map(card => (
          <Link key={card.href} href={card.href} style={{ textDecoration: 'none' }}>
            <div style={{
              background: '#fff', borderRadius: '16px', padding: '24px',
              border: '1px solid #D9D3C7', borderTop: `3px solid ${card.color}`,
              transition: 'box-shadow 0.2s, transform 0.15s', cursor: 'pointer',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: `${card.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  {card.icon}
                </div>
                {card.badge && (
                  <span style={{ background: '#8B0000', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '9999px' }}>
                    {card.badge}
                  </span>
                )}
              </div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '40px', fontWeight: 700, color: card.color, lineHeight: 1, marginBottom: '4px' }}>
                {card.count}
              </div>
              <div style={{ fontSize: '13px', color: '#6B6B6B', fontWeight: 500 }}>{card.label}</div>
            </div>
          </Link>
        ))}
      </div>

      {unread > 0 && (
        <div style={{
          padding: '20px 24px', background: '#FEF2F2',
          border: '1px solid #FECACA', borderLeft: '4px solid #8B0000',
          borderRadius: '12px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '32px',
        }}>
          <div>
            <div style={{ fontWeight: 700, color: '#8B0000', marginBottom: '2px', fontSize: '15px' }}>
              {unread} Unread Message{unread > 1 ? 's' : ''}
            </div>
            <div style={{ fontSize: '13px', color: '#DC2626' }}>New contact form submissions are waiting for your attention.</div>
          </div>
          <Link href="/admin/messages" style={{ padding: '9px 22px', background: '#8B0000', color: '#fff', borderRadius: '9999px', textDecoration: 'none', fontSize: '13px', fontWeight: 700, whiteSpace: 'nowrap' }}>
            View Messages
          </Link>
        </div>
      )}

      <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #D9D3C7', padding: '28px 32px' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 700, color: '#0F2447', marginBottom: '20px' }}>Quick Actions</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {[
            { label: '+ Add Gallery Image', href: '/admin/gallery'  },
            { label: '+ Add Video',         href: '/admin/videos'   },
            { label: '+ Write Article',     href: '/admin/news'     },
            { label: '+ Add Partner',       href: '/admin/partners' },
          ].map(a => (
            <Link key={a.href} href={a.href} style={{
              padding: '10px 20px', background: '#F5F3EE', border: '1px solid #D9D3C7',
              borderRadius: '9999px', textDecoration: 'none',
              fontSize: '13px', fontWeight: 600, color: '#1B3A7A',
            }}>
              {a.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}