import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import AdminSidebar from '@/components/admin/AdminSidebar'

export const metadata = { title: 'ADESTRACC Admin' }

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const unreadCount = await prisma.contactMessage.count({ where: { read: false } })

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F4F5F7' }} >
      <AdminSidebar user={session.user} unreadCount={unreadCount} />
      <main style={{
        flex: 1,
        minWidth: 0,
        padding: '32px',
        overflowY: 'auto',
      }}>
        {/* Mobile top padding so content clears the fixed bar */}
        <div className="admin-content-pad" style={{ display: 'none', height: '56px' }} />
        {children}
      </main>
      <style>{`
        @media (max-width: 768px) {
          .admin-content-pad { display: block !important; }
          main { padding: 20px 16px !important; }
        }
      `}</style>
    </div>
  )
}