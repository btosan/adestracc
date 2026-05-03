'use client'
import { useState } from 'react'

interface Column<T> {
  key: keyof T | string
  label: string
  render?: (row: T) => React.ReactNode
}

interface Props<T extends { id: string }> {
  data: T[]
  columns: Column<T>[]
  onEdit: (row: T) => void
  onDelete: (id: string) => void
}

export default function CrudTable<T extends { id: string }>({ data, columns, onEdit, onDelete }: Props<T>) {
  const [deleting, setDeleting] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this item? This cannot be undone.')) return
    setDeleting(id)
    onDelete(id)
    setDeleting(null)
  }

  return (
    <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid var(--border)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--border)', background: '#F8F9FB' }}>
            {columns.map(col => (
              <th key={col.label} style={{
                padding: '12px 16px', textAlign: 'left',
                fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--text-muted)',
              }}>
                {col.label}
              </th>
            ))}
            <th style={{ padding: '12px 16px', textAlign: 'right', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
                No items yet. Add your first one above.
              </td>
            </tr>
          ) : data.map((row, i) => (
            <tr key={row.id} style={{ borderBottom: i < data.length - 1 ? '1px solid var(--border)' : 'none', transition: 'background 0.15s' }}>
              {columns.map(col => (
                <td key={col.label} style={{ padding: '14px 16px', fontSize: '13px', color: 'var(--text-body)', maxWidth: '280px' }}>
                  {col.render ? col.render(row) : String((row as Record<string, unknown>)[col.key as string] ?? '')}
                </td>
              ))}
              <td style={{ padding: '14px 16px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                <button
                  onClick={() => onEdit(row)}
                  style={{
                    marginRight: '8px', padding: '6px 14px',
                    background: 'var(--royal-blue)', color: '#fff',
                    border: 'none', borderRadius: '9999px', fontSize: '12px',
                    fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(row.id)}
                  disabled={deleting === row.id}
                  style={{
                    padding: '6px 14px',
                    background: '#FEF2F2', color: '#DC2626',
                    border: '1px solid #FECACA', borderRadius: '9999px', fontSize: '12px',
                    fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
