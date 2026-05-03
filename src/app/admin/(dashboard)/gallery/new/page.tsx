import AdminForm from '@/components/admin/AdminForm'

export default function NewGalleryImage() {
  return (
    <div style={{ maxWidth: '680px' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', color: '#0F2447', fontWeight: 700, marginBottom: '28px' }}>Add Gallery Image</h1>
      <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid #D9D3C7' }}>
        <AdminForm
          fields={[
            { name: 'title', label: 'Title', required: true, placeholder: 'Image title' },
            { name: 'imageUrl', label: 'Image URL', type: 'url', required: true, placeholder: 'https://...' },
            { name: 'category', label: 'Category', type: 'select', required: true, options: [
              { value: 'Heritage', label: 'Heritage' },
              { value: 'Festival', label: 'Festival' },
              { value: 'Chiefs', label: 'Chiefs' },
              { value: 'Community', label: 'Community' },
              { value: 'Tourism', label: 'Tourism' },
              { value: 'Events', label: 'Events' },
            ]},
            { name: 'description', label: 'Description', type: 'textarea', rows: 3, placeholder: 'Optional description...' },
          ]}
          action="/api/gallery"
          method="POST"
          redirectTo="/admin/gallery"
          submitLabel="Add Image"
        />
      </div>
    </div>
  )
}
