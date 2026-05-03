'use client'
import { useState, useEffect, useCallback } from 'react'
import CrudTable from '@/components/admin/CrudTable'
import Modal from '@/components/admin/Modal'
import { FormField, Input, Textarea, SubmitButton } from '@/components/admin/FormField'

interface NewsArticle { id: string; title: string; excerpt: string; content: string; imageUrl?: string; publishedAt: string }

const EMPTY = { title: '', excerpt: '', content: '', imageUrl: '', publishedAt: new Date().toISOString().slice(0, 10) }

export default function NewsAdmin() {
  const [items, setItems] = useState<NewsArticle[]>([])
  const [form, setForm] = useState(EMPTY)
  const [editId, setEditId] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const load = useCallback(async () => {
    const res = await fetch('/api/news'); setItems(await res.json())
  }, [])

  useEffect(() => { load() }, [load])

  const openAdd = () => { setForm(EMPTY); setEditId(null); setShowModal(true) }
  const openEdit = (row: NewsArticle) => {
    setForm({ title: row.title, excerpt: row.excerpt, content: row.content, imageUrl: row.imageUrl || '', publishedAt: row.publishedAt.slice(0, 10) })
    setEditId(row.id); setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    await fetch(`/api/news/${id}`, { method: 'DELETE' }); load()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true)
    const url = editId ? `/api/news/${editId}` : '/api/news'
    await fetch(url, { method: editId ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setLoading(false); setShowModal(false); load()
  }

  const columns = [
    { key: 'title', label: 'Title', render: (r: NewsArticle) => <span style={{ fontWeight: 600 }}>{r.title}</span> },
    { key: 'excerpt', label: 'Excerpt', render: (r: NewsArticle) => <span style={{ color: 'var(--text-muted)' }}>{r.excerpt.slice(0, 80)}...</span> },
    { key: 'publishedAt', label: 'Published', render: (r: NewsArticle) => (
      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{new Date(r.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
    )},
  ]

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 700, color: 'var(--royal-blue-dark)' }}>News Articles</h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>{items.length} article{items.length !== 1 ? 's' : ''}</p>
        </div>
        <button onClick={openAdd} style={{ padding: '10px 24px', background: 'var(--royal-blue)', color: '#fff', border: 'none', borderRadius: '9999px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
          + Add Article
        </button>
      </div>
      <CrudTable data={items} columns={columns} onEdit={openEdit} onDelete={handleDelete} />
      {showModal && (
        <Modal title={editId ? 'Edit Article' : 'New Article'} onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit}>
            <FormField label="Title" required>
              <Input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} required placeholder="Article headline" />
            </FormField>
            <FormField label="Excerpt" required hint="Short summary shown in listings (1-2 sentences)">
              <Textarea value={form.excerpt} onChange={e => setForm(p => ({ ...p, excerpt: e.target.value }))} required rows={2} placeholder="Brief summary..." />
            </FormField>
            <FormField label="Full Content" required>
              <Textarea value={form.content} onChange={e => setForm(p => ({ ...p, content: e.target.value }))} required rows={8} placeholder="Full article content..." />
            </FormField>
            <FormField label="Cover Image URL">
              <Input value={form.imageUrl} onChange={e => setForm(p => ({ ...p, imageUrl: e.target.value }))} placeholder="https://example.com/image.jpg" />
            </FormField>
            <FormField label="Publish Date" required>
              <Input type="date" value={form.publishedAt} onChange={e => setForm(p => ({ ...p, publishedAt: e.target.value }))} required />
            </FormField>
            <SubmitButton loading={loading} isEdit={!!editId} />
          </form>
        </Modal>
      )}
    </div>
  )
}
