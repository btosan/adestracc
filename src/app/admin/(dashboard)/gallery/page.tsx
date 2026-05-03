'use client'
import { useState, useEffect, useCallback } from 'react'
import CrudTable from '@/components/admin/CrudTable'
import Modal from '@/components/admin/Modal'
import { FormField, Input, Textarea, Select, SubmitButton } from '@/components/admin/FormField'

interface GalleryImage { id: string; title: string; description?: string; imageUrl: string; category: string; createdAt: string }

const CATEGORIES = ['Cultural Festival', 'Chiefs Assembly', 'Community Development', 'Heritage', 'Tourism', 'Partners', 'Other']

const EMPTY = { title: '', imageUrl: '', category: CATEGORIES[0], description: '' }

export default function GalleryAdmin() {
  const [items, setItems] = useState<GalleryImage[]>([])
  const [form, setForm] = useState(EMPTY)
  const [editId, setEditId] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const load = useCallback(async () => {
    const res = await fetch('/api/gallery'); setItems(await res.json())
  }, [])

  useEffect(() => { load() }, [load])

  const openAdd = () => { setForm(EMPTY); setEditId(null); setShowModal(true) }
  const openEdit = (row: GalleryImage) => {
    setForm({ title: row.title, imageUrl: row.imageUrl, category: row.category, description: row.description || '' })
    setEditId(row.id); setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    await fetch(`/api/gallery/${id}`, { method: 'DELETE' }); load()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true)
    const method = editId ? 'PUT' : 'POST'
    const url = editId ? `/api/gallery/${editId}` : '/api/gallery'
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setLoading(false); setShowModal(false); load()
  }

  const columns = [
    { key: 'imageUrl', label: 'Preview', render: (r: GalleryImage) => (
      <img src={r.imageUrl} alt={r.title} style={{ width: '56px', height: '40px', objectFit: 'cover', borderRadius: '6px', background: '#F3F4F6' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
    )},
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category', render: (r: GalleryImage) => (
      <span style={{ background: '#EFF6FF', color: 'var(--royal-blue)', padding: '3px 10px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600 }}>{r.category}</span>
    )},
    { key: 'description', label: 'Description', render: (r: GalleryImage) => (
      <span style={{ color: 'var(--text-muted)' }}>{r.description ? r.description.slice(0, 60) + (r.description.length > 60 ? '...' : '') : '—'}</span>
    )},
  ]

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 700, color: 'var(--royal-blue-dark)' }}>Gallery Images</h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>{items.length} image{items.length !== 1 ? 's' : ''}</p>
        </div>
        <button onClick={openAdd} style={{
          padding: '10px 24px', background: 'var(--royal-blue)', color: '#fff',
          border: 'none', borderRadius: '9999px', fontSize: '14px', fontWeight: 700,
          cursor: 'pointer', fontFamily: 'inherit',
        }}>
          + Add Image
        </button>
      </div>

      <CrudTable data={items} columns={columns} onEdit={openEdit} onDelete={handleDelete} />

      {showModal && (
        <Modal title={editId ? 'Edit Image' : 'Add Gallery Image'} onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit}>
            <FormField label="Title" required>
              <Input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} required placeholder="e.g. Cultural Festival 2024" />
            </FormField>
            <FormField label="Image URL" required hint="Paste a direct image URL (HTTPS)">
              <Input value={form.imageUrl} onChange={e => setForm(p => ({ ...p, imageUrl: e.target.value }))} required placeholder="https://example.com/image.jpg" />
            </FormField>
            <FormField label="Category" required>
              <Select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}>
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </Select>
            </FormField>
            <FormField label="Description">
              <Textarea value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} rows={3} placeholder="Optional description..." />
            </FormField>
            <SubmitButton loading={loading} isEdit={!!editId} />
          </form>
        </Modal>
      )}
    </div>
  )
}
