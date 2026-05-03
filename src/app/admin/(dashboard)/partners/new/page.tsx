import AdminForm from '@/components/admin/AdminForm'

export default function NewPartner() {
  return (
    <div style={{ maxWidth: '600px' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', color: '#0F2447', fontWeight: 700, marginBottom: '28px' }}>Add Partner</h1>
      <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid #D9D3C7' }}>
        <AdminForm
          fields={[
            { name: 'name', label: 'Organisation Name', required: true, placeholder: 'e.g. NDDC' },
            { name: 'website', label: 'Website URL', type: 'url', placeholder: 'https://nddc.gov.ng' },
            { name: 'logoUrl', label: 'Logo URL', type: 'url', placeholder: 'https://...' },
          ]}
          action="/api/partners"
          method="POST"
          redirectTo="/admin/partners"
          submitLabel="Add Partner"
        />
      </div>
    </div>
  )
}
