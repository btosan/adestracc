'use client'
import { use, useEffect, useState } from 'react'
import AdminForm from '@/components/admin/AdminForm'

export default function EditImpactStat({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [item, setItem] = useState<Record<string, string> | null>(null)
  useEffect(() => {
    fetch('/api/impact-stats').then(r => r.json()).then((all: { id: string }[]) => {
      const found = all.find(i => i.id === id)
      if (found) setItem(found as Record<string, string>)
    })
  }, [id])
  if (!item) return <div style={{ padding: '40px', color: '#6B6B6B' }}>Loading...</div>
  return (
    <div style={{ maxWidth: '600px' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', color: '#0F2447', fontWeight: 700, marginBottom: '28px' }}>Edit Impact Stat</h1>
      <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid #D9D3C7' }}>
        <AdminForm initialValues={item} fields={[
          { name: 'value', label: 'Value', required: true },
          { name: 'label', label: 'Label', required: true },
          { name: 'icon', label: 'Icon (emoji)' },
          { name: 'description', label: 'Description', type: 'textarea', rows: 2 },
        ]} action={`/api/impact-stats/${id}`} method="PUT" redirectTo="/admin/impact-stats" submitLabel="Save Changes" />
      </div>
    </div>
  )
}
