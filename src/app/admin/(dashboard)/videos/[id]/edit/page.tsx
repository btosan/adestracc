'use client'
import { use, useEffect, useState } from 'react'
import AdminForm from '@/components/admin/AdminForm'

export default function EditVideo({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [item, setItem] = useState<Record<string, string> | null>(null)
  useEffect(() => { fetch(`/api/videos/${id}`).then(r => r.json()).then(setItem) }, [id])
  if (!item) return <div style={{ padding: '40px', color: '#6B6B6B' }}>Loading...</div>
  return (
    <div style={{ maxWidth: '680px' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', color: '#0F2447', fontWeight: 700, marginBottom: '28px' }}>Edit Video</h1>
      <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid #D9D3C7' }}>
        <AdminForm initialValues={item} fields={[
          { name: 'title', label: 'Title', required: true },
          { name: 'videoUrl', label: 'Video URL', type: 'url', required: true },
          { name: 'thumbnail', label: 'Thumbnail URL', type: 'url' },
          { name: 'description', label: 'Description', type: 'textarea', rows: 3 },
        ]} action={`/api/videos/${id}`} method="PUT" redirectTo="/admin/videos" submitLabel="Save Changes" />
      </div>
    </div>
  )
}
