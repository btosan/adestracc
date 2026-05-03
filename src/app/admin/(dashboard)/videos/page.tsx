'use client'
import { useState, useEffect, useCallback } from 'react'
import CrudTable from '@/components/admin/CrudTable'
import Modal from '@/components/admin/Modal'
import { FormField, Input, Textarea, SubmitButton } from '@/components/admin/FormField'

interface VideoItem { id: string; title: string; description?: string; videoUrl: string; thumbnail?: string; createdAt: string }

const EMPTY = { title: '', videoUrl: '', description: '', thumbnail: '' }

export default function VideosAdmin() {
  const [items, setItems] = useState<VideoItem[]>([])
  const [form, setForm] = useState(EMPTY)
  const [editId, setEditId] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const load = useCallback(async () => {
    const res = await fetch('/api/videos'); setItems(await res.json())
  }, [])

  useEffect(() => { load() }, [load])

  const openAdd = () => { setForm(EMPTY); setEditId(null); setShowModal(true) }
  const openEdit = (row: VideoItem) => {
    setForm({ title: row.title, videoUrl: row.videoUrl, description: row.description || '', thumbnail: row.thumbnail || '' })
    setEditId(row.id); setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    await fetch(`/api/videos/${id}`, { method: 'DELETE' }); load()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true)
    const url = editId ? `/api/videos/${editId}` : '/api/videos'
    await fetch(url, { method: editId ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setLoading(false); setShowModal(false); load()
  }

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'videoUrl', label: 'URL', render: (r: VideoItem) => (
      <a href={r.videoUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--royal-blue)', fontSize: '12px', wordBreak: 'break-all' }}>
        {r.videoUrl.slice(0, 50)}{r.videoUrl.length > 50 ? '...' : ''}
      </a>
    )},
    { key: 'description', label: 'Description', render: (r: VideoItem) => (
      <span style={{ color: 'var(--text-muted)' }}>{r.description?.slice(0, 60) || '—'}</span>
    )},
  ]

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 700, color: 'var(--royal-blue-dark)' }}>Videos</h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>{items.length} video{items.length !== 1 ? 's' : ''}</p>
        </div>
        <button onClick={openAdd} style={{ padding: '10px 24px', background: 'var(--royal-blue)', color: '#fff', border: 'none', borderRadius: '9999px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
          + Add Video
        </button>
      </div>
      <CrudTable data={items} columns={columns} onEdit={openEdit} onDelete={handleDelete} />
      {showModal && (
        <Modal title={editId ? 'Edit Video' : 'Add Video'} onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit}>
            <FormField label="Title" required>
              <Input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} required placeholder="e.g. ADESTRACC Annual Convention 2024" />
            </FormField>
            <FormField label="Video URL" required hint="YouTube URL (e.g. https://youtube.com/watch?v=...) or direct MP4 URL">
              <Input value={form.videoUrl} onChange={e => setForm(p => ({ ...p, videoUrl: e.target.value }))} required placeholder="https://youtube.com/watch?v=..." />
            </FormField>
            <FormField label="Thumbnail URL" hint="Optional. Leave blank to use YouTube's auto thumbnail.">
              <Input value={form.thumbnail} onChange={e => setForm(p => ({ ...p, thumbnail: e.target.value }))} placeholder="https://example.com/thumb.jpg" />
            </FormField>
            <FormField label="Description">
              <Textarea value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} rows={3} placeholder="Brief description..." />
            </FormField>
            <SubmitButton loading={loading} isEdit={!!editId} />
          </form>
        </Modal>
      )}
    </div>
  )
}
