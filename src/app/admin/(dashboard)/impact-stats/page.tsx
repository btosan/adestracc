'use client'
import { useState, useEffect, useCallback } from 'react'
import CrudTable from '@/components/admin/CrudTable'
import Modal from '@/components/admin/Modal'
import { FormField, Input, SubmitButton } from '@/components/admin/FormField'

interface ImpactStat { id: string; label: string; value: string; description?: string; icon?: string }

const EMPTY = { label: '', value: '', description: '', icon: '' }

export default function ImpactStatsAdmin() {
  const [items, setItems] = useState<ImpactStat[]>([])
  const [form, setForm] = useState(EMPTY)
  const [editId, setEditId] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const load = useCallback(async () => {
    const res = await fetch('/api/impact-stats'); setItems(await res.json())
  }, [])

  useEffect(() => { load() }, [load])

  const openAdd = () => { setForm(EMPTY); setEditId(null); setShowModal(true) }
  const openEdit = (row: ImpactStat) => {
    setForm({ label: row.label, value: row.value, description: row.description || '', icon: row.icon || '' })
    setEditId(row.id); setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    await fetch(`/api/impact-stats/${id}`, { method: 'DELETE' }); load()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true)
    const url = editId ? `/api/impact-stats/${editId}` : '/api/impact-stats'
    await fetch(url, { method: editId ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setLoading(false); setShowModal(false); load()
  }

  const columns = [
    { key: 'icon', label: 'Icon', render: (r: ImpactStat) => <span style={{ fontSize: '20px' }}>{r.icon || '—'}</span> },
    { key: 'value', label: 'Value', render: (r: ImpactStat) => <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 700, color: 'var(--royal-blue)' }}>{r.value}</span> },
    { key: 'label', label: 'Label', render: (r: ImpactStat) => <span style={{ fontWeight: 600 }}>{r.label}</span> },
    { key: 'description', label: 'Description', render: (r: ImpactStat) => <span style={{ color: 'var(--text-muted)' }}>{r.description || '—'}</span> },
  ]

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 700, color: 'var(--royal-blue-dark)' }}>Impact Stats</h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>These numbers appear on the homepage and Impact page.</p>
        </div>
        <button onClick={openAdd} style={{ padding: '10px 24px', background: 'var(--royal-blue)', color: '#fff', border: 'none', borderRadius: '9999px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
          + Add Stat
        </button>
      </div>
      <CrudTable data={items} columns={columns} onEdit={openEdit} onDelete={handleDelete} />
      {showModal && (
        <Modal title={editId ? 'Edit Stat' : 'Add Impact Stat'} onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit}>
            <FormField label="Value" required hint="e.g. 500+, 36, ₦2B+">
              <Input value={form.value} onChange={e => setForm(p => ({ ...p, value: e.target.value }))} required placeholder="500+" />
            </FormField>
            <FormField label="Label" required hint="Short label displayed below the value">
              <Input value={form.label} onChange={e => setForm(p => ({ ...p, label: e.target.value }))} required placeholder="Gazetted Chiefs" />
            </FormField>
            <FormField label="Description" hint="Optional longer description">
              <Input value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} placeholder="Member chiefs across all LGAs" />
            </FormField>
            <FormField label="Icon" hint="Paste an emoji (e.g. 👑, 🤝, 📍)">
              <Input value={form.icon} onChange={e => setForm(p => ({ ...p, icon: e.target.value }))} placeholder="👑" />
            </FormField>
            <SubmitButton loading={loading} isEdit={!!editId} />
          </form>
        </Modal>
      )}
    </div>
  )
}
