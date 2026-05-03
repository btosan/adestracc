import AdminForm from '@/components/admin/AdminForm'

export default function NewVideo() {
  return (
    <div style={{ maxWidth: '680px' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', color: '#0F2447', fontWeight: 700, marginBottom: '28px' }}>Add Video</h1>
      <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid #D9D3C7' }}>
        <AdminForm
          fields={[
            { name: 'title', label: 'Title', required: true, placeholder: 'Video title' },
            { name: 'videoUrl', label: 'Video URL (YouTube embed or direct)', type: 'url', required: true, placeholder: 'https://youtube.com/embed/...' },
            { name: 'thumbnail', label: 'Thumbnail URL', type: 'url', placeholder: 'https://...' },
            { name: 'description', label: 'Description', type: 'textarea', rows: 3 },
          ]}
          action="/api/videos"
          method="POST"
          redirectTo="/admin/videos"
          submitLabel="Add Video"
        />
      </div>
    </div>
  )
}
