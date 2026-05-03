'use client'
import { useState } from 'react'
import Link from 'next/link'

interface Column<T> {
  key: keyof T | string
  label: string
  render?: (row: T) => React.ReactNode
}

interface AdminTableProps<T extends { id: string }> {
  data: T[]
  columns: Column<T>[]
  editPath: string
  onDelete: (id: string) => void
  deleting?: string | null
}

export default function AdminTable<T extends { id: string }>({
  data, columns, editPath, onDelete, deleting,
}: AdminTableProps<T>) {
  return (
    <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #D9D3C7', overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#F5F3EE', borderBottom: '1px solid #D9D3C7' }}>
            {columns.map(col => (
              <th key={String(col.key)} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {col.label}
              </th>
            ))}
            <th style={{ padding: '12px 16px', textAlign: 'right', fontSize: '11px', fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr><td colSpan={columns.length + 1} style={{ padding: '40px', textAlign: 'center', color: '#6B6B6B', fontSize: '14px' }}>No records yet.</td></tr>
          )}
          {data.map((row, i) => (
            <tr key={row.id} style={{ borderBottom: '1px solid #F0EDE8', background: i % 2 === 0 ? '#fff' : '#FDFCFA' }}>
              {columns.map(col => (
                <td key={String(col.key)} style={{ padding: '12px 16px', fontSize: '14px', color: '#2D2D2D', maxWidth: '240px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {col.render ? col.render(row) : String((row as Record<string, unknown>)[String(col.key)] ?? '')}
                </td>
              ))}
              <td style={{ padding: '12px 16px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                <Link href={`${editPath}/${row.id}/edit`} style={{
                  display: 'inline-block', padding: '5px 14px', borderRadius: '50px',
                  background: 'linear-gradient(135deg, #1A3A6B, #2A5298)',
                  color: '#fff', textDecoration: 'none', fontSize: '12px', fontWeight: 600, marginRight: '8px',
                }}>Edit</Link>
                <button onClick={() => onDelete(row.id)} disabled={deleting === row.id} style={{
                  padding: '5px 14px', borderRadius: '50px', border: '1px solid #FECACA',
                  background: deleting === row.id ? '#FEF2F2' : '#FFF5F5',
                  color: '#DC2626', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                }}>
                  {deleting === row.id ? '...' : 'Delete'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
