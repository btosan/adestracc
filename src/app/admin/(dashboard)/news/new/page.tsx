import AdminForm from '@/components/admin/AdminForm'

export default function NewArticle() {
  return (
    <div style={{ maxWidth: '800px' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', color: '#0F2447', fontWeight: 700, marginBottom: '28px' }}>Write News Article</h1>
      <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid #D9D3C7' }}>
        <AdminForm
          fields={[
            { name: 'title', label: 'Title', required: true, placeholder: 'Article headline' },
            { name: 'excerpt', label: 'Excerpt', type: 'textarea', rows: 2, required: true, placeholder: 'Short summary (shown in listings)' },
            { name: 'content', label: 'Full Content', type: 'textarea', rows: 10, required: true, placeholder: 'Full article content...' },
            { name: 'imageUrl', label: 'Cover Image URL', type: 'url', placeholder: 'https://...' },
            { name: 'publishedAt', label: 'Publish Date', type: 'date' },
          ]}
          action="/api/news"
          method="POST"
          redirectTo="/admin/news"
          submitLabel="Publish Article"
        />
      </div>
    </div>
  )
}
