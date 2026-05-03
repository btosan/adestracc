'use client'
import { use, useEffect, useState } from 'react'
import AdminForm from '@/components/admin/AdminForm'

export default function EditPartner({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [item, setItem] = useState<Record<string, string> | null>(null)
  useEffect(() => {
    fetch('/api/partners').then(r => r.json()).then((all: { id: string }[]) => {
      const found = all.find(i => i.id === id)
      if (found) setItem(found as Record<string, string>)
    })
  }, [id])
  if (!item) return <div style={{ padding: '40px', color: '#6B6B6B' }}>Loading...</div>
  return (
    <div style={{ maxWidth: '600px' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', color: '#0F2447', fontWeight: 700, marginBottom: '28px' }}>Edit Partner</h1>
      <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid #D9D3C7' }}>
        <AdminForm initialValues={item} fields={[
          { name: 'name', label: 'Organisation Name', required: true },
          { name: 'website', label: 'Website URL', type: 'url' },
          { name: 'logoUrl', label: 'Logo URL', type: 'url' },
        ]} action={`/api/partners/${id}`} method="PUT" redirectTo="/admin/partners" submitLabel="Save Changes" />
      </div>
    </div>
  )
}
