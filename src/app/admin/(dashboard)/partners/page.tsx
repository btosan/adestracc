'use client'
import { useState, useEffect, useCallback } from 'react'
import CrudTable from '@/components/admin/CrudTable'
import Modal from '@/components/admin/Modal'
import { FormField, Input, SubmitButton } from '@/components/admin/FormField'

interface Partner { id: string; name: string; logoUrl?: string; website?: string }

const EMPTY = { name: '', logoUrl: '', website: '' }

export default function PartnersAdmin() {
  const [items, setItems] = useState<Partner[]>([])
  const [form, setForm] = useState(EMPTY)
  const [editId, setEditId] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const load = useCallback(async () => {
    const res = await fetch('/api/partners'); setItems(await res.json())
  }, [])

  useEffect(() => { load() }, [load])

  const openAdd = () => { setForm(EMPTY); setEditId(null); setShowModal(true) }
  const openEdit = (row: Partner) => {
    setForm({ name: row.name, logoUrl: row.logoUrl || '', website: row.website || '' })
    setEditId(row.id); setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    await fetch(`/api/partners/${id}`, { method: 'DELETE' }); load()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true)
    const url = editId ? `/api/partners/${editId}` : '/api/partners'
    await fetch(url, { method: editId ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setLoading(false); setShowModal(false); load()
  }

  const columns = [
    { key: 'logoUrl', label: 'Logo', render: (r: Partner) =>
      r.logoUrl ? <img src={r.logoUrl} alt={r.name} style={{ height: '36px', objectFit: 'contain', maxWidth: '80px' }} /> : <span style={{ color: 'var(--text-muted)' }}>No logo</span>
    },
    { key: 'name', label: 'Name', render: (r: Partner) => <span style={{ fontWeight: 600 }}>{r.name}</span> },
    { key: 'website', label: 'Website', render: (r: Partner) =>
      r.website ? <a href={r.website} target="_blank" rel="noreferrer" style={{ color: 'var(--royal-blue)', fontSize: '12px' }}>{r.website}</a> : <span style={{ color: 'var(--text-muted)' }}>—</span>
    },
  ]

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 700, color: 'var(--royal-blue-dark)' }}>Partners</h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>{items.length} partner{items.length !== 1 ? 's' : ''}</p>
        </div>
        <button onClick={openAdd} style={{ padding: '10px 24px', background: 'var(--royal-blue)', color: '#fff', border: 'none', borderRadius: '9999px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
          + Add Partner
        </button>
      </div>
      <CrudTable data={items} columns={columns} onEdit={openEdit} onDelete={handleDelete} />
      {showModal && (
        <Modal title={editId ? 'Edit Partner' : 'Add Partner'} onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit}>
            <FormField label="Partner Name" required>
              <Input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required placeholder="e.g. Niger Delta Development Commission" />
            </FormField>
            <FormField label="Logo URL" hint="Direct URL to partner's logo image">
              <Input value={form.logoUrl} onChange={e => setForm(p => ({ ...p, logoUrl: e.target.value }))} placeholder="https://example.com/logo.png" />
            </FormField>
            <FormField label="Website URL">
              <Input value={form.website} onChange={e => setForm(p => ({ ...p, website: e.target.value }))} placeholder="https://nddc.gov.ng" type="url" />
            </FormField>
            <SubmitButton loading={loading} isEdit={!!editId} />
          </form>
        </Modal>
      )}
    </div>
  )
}
