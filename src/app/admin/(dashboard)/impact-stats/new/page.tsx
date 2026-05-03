import AdminForm from '@/components/admin/AdminForm'

export default function NewImpactStat() {
  return (
    <div style={{ maxWidth: '600px' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', color: '#0F2447', fontWeight: 700, marginBottom: '28px' }}>Add Impact Stat</h1>
      <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid #D9D3C7' }}>
        <AdminForm
          fields={[
            { name: 'value', label: 'Value', required: true, placeholder: 'e.g. 500+ or 40 Years' },
            { name: 'label', label: 'Label', required: true, placeholder: 'e.g. Gazetted Chiefs' },
            { name: 'icon', label: 'Icon (emoji)', placeholder: 'e.g. 👑' },
            { name: 'description', label: 'Description', type: 'textarea', rows: 2, placeholder: 'Optional supporting text...' },
          ]}
          action="/api/impact-stats"
          method="POST"
          redirectTo="/admin/impact-stats"
          submitLabel="Add Stat"
        />
      </div>
    </div>
  )
}
