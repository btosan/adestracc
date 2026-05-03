'use client'
import { use, useEffect, useState } from 'react'
import AdminForm from '@/components/admin/AdminForm'

export default function EditGalleryImage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [item, setItem] = useState<Record<string, string> | null>(null)
  useEffect(() => { fetch(`/api/gallery/${id}`).then(r => r.json()).then(setItem) }, [id])
  if (!item) return <div style={{ padding: '40px', color: '#6B6B6B' }}>Loading...</div>
  return (
    <div style={{ maxWidth: '680px' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', color: '#0F2447', fontWeight: 700, marginBottom: '28px' }}>Edit Gallery Image</h1>
      <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid #D9D3C7' }}>
        <AdminForm initialValues={item} fields={[
          { name: 'title', label: 'Title', required: true },
          { name: 'imageUrl', label: 'Image URL', type: 'url', required: true },
          { name: 'category', label: 'Category', type: 'select', required: true, options: [
            { value: 'Heritage', label: 'Heritage' }, { value: 'Festival', label: 'Festival' },
            { value: 'Chiefs', label: 'Chiefs' }, { value: 'Community', label: 'Community' },
            { value: 'Tourism', label: 'Tourism' }, { value: 'Events', label: 'Events' },
          ]},
          { name: 'description', label: 'Description', type: 'textarea', rows: 3 },
        ]} action={`/api/gallery/${id}`} method="PUT" redirectTo="/admin/gallery" submitLabel="Save Changes" />
      </div>
    </div>
  )
}
