'use client'
import { useState, FormEvent, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface Field {
  name: string
  label: string
  type?: 'text' | 'textarea' | 'url' | 'date' | 'select'
  options?: { value: string; label: string }[]
  required?: boolean
  placeholder?: string
  rows?: number
}

interface AdminFormProps {
  fields: Field[]
  initialValues?: Record<string, string>
  action: string
  method?: 'POST' | 'PUT'
  redirectTo: string
  submitLabel?: string
  children?: ReactNode
}

const inputStyle = {
  width: '100%', padding: '11px 14px', border: '1px solid #D9D3C7', borderRadius: '10px',
  fontSize: '14px', fontFamily: 'inherit', outline: 'none', background: '#FDFCFA',
  color: '#2D2D2D',
}

export default function AdminForm({ fields, initialValues = {}, action, method = 'POST', redirectTo, submitLabel = 'Save' }: AdminFormProps) {
  const [values, setValues] = useState<Record<string, string>>(initialValues)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(action, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Something went wrong')
      } else {
        router.push(redirectTo)
        router.refresh()
      }
    } catch {
      setError('Network error. Please try again.')
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gap: '20px' }}>
        {fields.map(field => (
          <div key={field.name}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#2D2D2D', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {field.label}{field.required && <span style={{ color: '#DC2626' }}> *</span>}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name} required={field.required}
                rows={field.rows ?? 5} placeholder={field.placeholder}
                value={values[field.name] ?? ''}
                onChange={e => setValues(v => ({ ...v, [field.name]: e.target.value }))}
                style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
              />
            ) : field.type === 'select' ? (
              <select
                name={field.name} required={field.required}
                value={values[field.name] ?? ''}
                onChange={e => setValues(v => ({ ...v, [field.name]: e.target.value }))}
                style={{ ...inputStyle, appearance: 'none' }}
              >
                <option value="">Select...</option>
                {field.options?.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            ) : (
              <input
                type={field.type ?? 'text'} name={field.name} required={field.required}
                placeholder={field.placeholder}
                value={values[field.name] ?? ''}
                onChange={e => setValues(v => ({ ...v, [field.name]: e.target.value }))}
                style={inputStyle}
              />
            )}
          </div>
        ))}
      </div>

      {error && (
        <div style={{ marginTop: '16px', background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', padding: '10px 14px', borderRadius: '8px', fontSize: '13px' }}>
          {error}
        </div>
      )}

      <div style={{ marginTop: '28px', display: 'flex', gap: '12px' }}>
        <button type="submit" disabled={loading} style={{
          padding: '12px 32px', borderRadius: '50px', border: 'none',
          background: 'linear-gradient(135deg, #1A3A6B, #2A5298)',
          color: '#fff', fontSize: '14px', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1, fontFamily: 'inherit', letterSpacing: '0.06em',
        }}>
          {loading ? 'Saving...' : submitLabel}
        </button>
        <button type="button" onClick={() => router.back()} style={{
          padding: '12px 24px', borderRadius: '50px', border: '1px solid #D9D3C7',
          background: '#fff', color: '#6B6B6B', fontSize: '14px', fontWeight: 600,
          cursor: 'pointer', fontFamily: 'inherit',
        }}>
          Cancel
        </button>
      </div>
    </form>
  )
}
