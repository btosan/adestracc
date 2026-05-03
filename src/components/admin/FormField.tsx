interface Props {
  label: string
  required?: boolean
  children: React.ReactNode
  hint?: string
}

export function FormField({ label, required, children, hint }: Props) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{
        display: 'block', fontSize: '11px', fontWeight: 700,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'var(--text-muted)', marginBottom: '6px',
      }}>
        {label}{required && <span style={{ color: 'var(--crimson)', marginLeft: '3px' }}>*</span>}
      </label>
      {children}
      {hint && <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>{hint}</p>}
    </div>
  )
}

const inputBase: React.CSSProperties = {
  width: '100%', padding: '10px 12px',
  border: '1px solid var(--border)', borderRadius: '8px',
  fontSize: '14px', fontFamily: 'inherit', outline: 'none',
  background: '#fff', color: 'var(--text-body)',
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} style={{ ...inputBase, ...props.style }} />
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} style={{ ...inputBase, resize: 'vertical', lineHeight: 1.6, ...props.style }} />
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} style={{ ...inputBase, ...props.style }} />
}

export function SubmitButton({ loading, label = 'Save', editLabel = 'Update', isEdit }: { loading: boolean; label?: string; editLabel?: string; isEdit?: boolean }) {
  return (
    <button
      type="submit" disabled={loading}
      style={{
        width: '100%', padding: '12px',
        background: loading ? '#9CA3AF' : 'linear-gradient(135deg, var(--royal-blue), var(--royal-blue-light))',
        color: '#fff', border: 'none', borderRadius: '9999px',
        fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em',
        cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit',
        marginTop: '8px',
      }}
    >
      {loading ? 'Saving...' : (isEdit ? editLabel : label)}
    </button>
  )
}
