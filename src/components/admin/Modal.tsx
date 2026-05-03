'use client'
import { useEffect } from 'react'

interface Props {
  title: string
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ title, onClose, children }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff', borderRadius: '16px', width: '100%', maxWidth: '560px',
          maxHeight: '90vh', overflowY: 'auto',
          boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
        }}
      >
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 24px', borderBottom: '1px solid var(--border)',
        }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 700, color: 'var(--royal-blue-dark)' }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              width: '32px', height: '32px', borderRadius: '50%',
              background: '#F3F4F6', border: 'none', cursor: 'pointer',
              fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ×
          </button>
        </div>
        <div style={{ padding: '24px' }}>{children}</div>
      </div>
    </div>
  )
}
