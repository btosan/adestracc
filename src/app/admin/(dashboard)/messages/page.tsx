'use client'
import { useState, useEffect, useCallback } from 'react'

interface ContactMessage { id: string; name: string; email: string; subject: string; message: string; read: boolean; createdAt: string }

export default function MessagesAdmin() {
  const [items, setItems] = useState<ContactMessage[]>([])
  const [selected, setSelected] = useState<ContactMessage | null>(null)

  const load = useCallback(async () => {
    const res = await fetch('/api/contact-messages'); setItems(await res.json())
  }, [])

  useEffect(() => { load() }, [load])

  const markRead = async (id: string) => {
    await fetch(`/api/contact-messages/${id}`, { method: 'PATCH' }); load()
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this message permanently?')) return
    await fetch(`/api/contact-messages/${id}`, { method: 'DELETE' })
    setSelected(null); load()
  }

  const unread = items.filter(i => !i.read).length

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 700, color: 'var(--royal-blue-dark)' }}>Messages</h1>
          {unread > 0 && <span style={{ background: 'var(--crimson)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '9999px' }}>{unread} unread</span>}
        </div>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{items.length} total message{items.length !== 1 ? 's' : ''}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 1.2fr' : '1fr', gap: '20px' }}>
        {/* List */}
        <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
          {items.length === 0 ? (
            <div style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)' }}>No messages yet.</div>
          ) : items.map((msg, i) => (
            <div
              key={msg.id}
              onClick={() => { setSelected(msg); if (!msg.read) markRead(msg.id) }}
              style={{
                padding: '16px 20px',
                borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none',
                background: selected?.id === msg.id ? '#EFF6FF' : msg.read ? '#fff' : '#FEFCE8',
                cursor: 'pointer', transition: 'background 0.15s',
                borderLeft: !msg.read ? '3px solid var(--gold)' : '3px solid transparent',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                <div style={{ fontWeight: msg.read ? 500 : 700, fontSize: '14px', color: 'var(--text-body)' }}>{msg.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  {new Date(msg.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                </div>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--royal-blue)', marginBottom: '2px' }}>{msg.subject}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{msg.message.slice(0, 60)}...</div>
            </div>
          ))}
        </div>

        {/* Detail */}
        {selected && (
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 700, color: 'var(--royal-blue-dark)', marginBottom: '2px' }}>{selected.subject}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{new Date(selected.createdAt).toLocaleString('en-GB')}</div>
              </div>
              <button onClick={() => handleDelete(selected.id)} style={{ padding: '6px 14px', background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                Delete
              </button>
            </div>

            <div style={{ marginBottom: '20px', padding: '16px', background: '#F8F9FB', borderRadius: '8px' }}>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2px' }}>From</div>
                  <div style={{ fontSize: '14px', fontWeight: 600 }}>{selected.name}</div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2px' }}>Email</div>
                  <a href={`mailto:${selected.email}`} style={{ fontSize: '14px', color: 'var(--royal-blue)' }}>{selected.email}</a>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
              {selected.message}
            </div>

            <div style={{ marginTop: '24px' }}>
              <a
                href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject)}`}
                style={{
                  display: 'inline-block', padding: '10px 24px',
                  background: 'linear-gradient(135deg, var(--royal-blue), var(--royal-blue-light))',
                  color: '#fff', borderRadius: '9999px', textDecoration: 'none',
                  fontSize: '13px', fontWeight: 700,
                }}
              >
                ↩ Reply via Email
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
