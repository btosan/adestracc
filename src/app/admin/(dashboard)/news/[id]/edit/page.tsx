'use client'
import { use, useEffect, useState } from 'react'
import AdminForm from '@/components/admin/AdminForm'

export default function EditArticle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [item, setItem] = useState<Record<string, string> | null>(null)
  useEffect(() => {
    fetch(`/api/news/${id}`).then(r => r.json()).then((data: Record<string, string>) => {
      setItem({ ...data, publishedAt: data.publishedAt?.split('T')[0] ?? '' })
    })
  }, [id])
  if (!item) return <div style={{ padding: '40px', color: '#6B6B6B' }}>Loading...</div>
  return (
    <div style={{ maxWidth: '800px' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', color: '#0F2447', fontWeight: 700, marginBottom: '28px' }}>Edit Article</h1>
      <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid #D9D3C7' }}>
        <AdminForm initialValues={item} fields={[
          { name: 'title', label: 'Title', required: true },
          { name: 'excerpt', label: 'Excerpt', type: 'textarea', rows: 2, required: true },
          { name: 'content', label: 'Full Content', type: 'textarea', rows: 10, required: true },
          { name: 'imageUrl', label: 'Cover Image URL', type: 'url' },
          { name: 'publishedAt', label: 'Publish Date', type: 'date' },
        ]} action={`/api/news/${id}`} method="PUT" redirectTo="/admin/news" submitLabel="Save Changes" />
      </div>
    </div>
  )
}
