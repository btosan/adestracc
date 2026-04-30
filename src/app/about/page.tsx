import Link from 'next/link';

const CORE_VALUES = [
  { icon: '⚖️', title: 'Integrity', desc: 'We uphold the values and traditions passed down by our ancestors with honour and transparency.' },
  { icon: '🤝', title: 'Unity', desc: 'Bringing together all ethnic groups of Delta State under one strong, unified voice.' },
  { icon: '🌍', title: 'Heritage', desc: 'Preserving and promoting the rich cultural tapestry of Delta State for future generations.' },
  { icon: '🌱', title: 'Development', desc: 'Driving sustainable grassroots development through creative and economic empowerment.' },
];

const LEADERSHIP = [
  { name: 'HRH Chief [Name Placeholder]', title: 'President General', ethnic: 'Urhobo' },
  { name: 'HRH Chief [Name Placeholder]', title: 'Vice President', ethnic: 'Itsekiri' },
  { name: 'HRH Chief [Name Placeholder]', title: 'Secretary General', ethnic: 'Ijaw' },
  { name: 'HRH Chief [Name Placeholder]', title: 'Financial Secretary', ethnic: 'Isoko' },
  { name: 'HRH Chief [Name Placeholder]', title: 'PRO', ethnic: 'Ndokwa' },
  { name: 'HRH Chief [Name Placeholder]', title: 'Legal Adviser', ethnic: 'Ukwuani' },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px' }}>

      {/* Page Hero */}
      <section style={{
        background: 'linear-gradient(160deg, #0F2554 0%, #1B3A7A 100%)',
        padding: '80px 24px 100px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,153,58,0.04) 40px, rgba(201,153,58,0.04) 41px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '16px' }}>Our Story</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(38px, 5vw, 64px)', color: '#fff', fontWeight: 700, marginBottom: '20px', lineHeight: 1.1 }}>
            About <span style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>ADESTRACC</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.8 }}>
            The official unified body representing gazetted chiefs across all ethnic groups in Delta State, Nigeria.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--ivory-dark)', padding: '14px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', fontSize: '12px', color: 'var(--text-light)' }}>
          <Link href="/" style={{ color: 'var(--royal-blue)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span>About</span>
        </div>
      </div>

      {/* Mission & Vision */}
      <section style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
          {[
            { label: 'Our Mission', color: 'var(--royal-blue)', text: 'To unite all gazetted traditional chiefs of Delta State regardless of ethnicity, advancing grassroots peace, social stability, and sustainable development through the powerful instruments of culture, tradition, tourism, and creative enterprise.' },
            { label: 'Our Vision', color: 'var(--crimson)', text: 'A Delta State where traditional institutions are respected pillars of community development — where cultural heritage flourishes, all ethnic groups coexist in harmony, and every community thrives in peace and prosperity.' },
            { label: 'Our Mandate', color: 'var(--gold)', text: 'To serve as the collective voice of gazetted chiefs in matters of governance, cultural preservation, inter-ethnic dialogue, and grassroots advocacy — ensuring that traditional values remain central to Delta State\'s development agenda.' },
          ].map((item, i) => (
            <div key={i} style={{
              borderTop: `4px solid ${item.color}`,
              padding: '36px 32px',
              background: '#fff',
              border: '1px solid var(--border)',
              borderTopWidth: '4px',
              borderTopColor: item.color,
            }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: item.color, textTransform: 'uppercase', marginBottom: '16px', fontWeight: 600 }}>{item.label}</div>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', color: 'var(--royal-blue-deep)', lineHeight: 1.7, fontStyle: 'italic' }}>
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Full Story */}
      <section style={{ background: 'var(--ivory-dark)', padding: '100px 24px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Our History</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--royal-blue-deep)', fontWeight: 700 }}>
              A Legacy of Unity
            </h2>
          </div>
          <div style={{ fontSize: '16px', lineHeight: 2, color: 'var(--text-mid)' }}>
            <p style={{ marginBottom: '24px' }}>
              ADESTRACC — the Association of Delta State Traditional Council of Chiefs — was established as the foremost official body representing all gazetted chiefs across Delta State. Born from the recognition that traditional institutions are the bedrock of our communities, the association was founded on the conviction that a unified voice of chiefs could drive transformative change.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Delta State is a mosaic of over 36 distinct ethnic groups — Urhobo, Itsekiri, Ijaw, Isoko, Ndokwa, Ukwuani, and many more — each with deep-rooted traditions and cultural expressions. ADESTRACC serves as the bridge that unites these diverse peoples under shared values of respect, collaboration, and progress.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Over the years, the association has grown into a formidable institution partnering with federal agencies including the Federal Ministry of Arts, Culture, Tourism & Creative Economy, the Niger Delta Development Commission (NDDC), the National Orientation Agency (NOA), and the Independent National Electoral Commission (INEC).
            </p>
            <p>
              Today, ADESTRACC stands as the authoritative voice of grassroots governance in Delta State — championing cultural preservation, youth engagement, civic education, economic development, and community resilience across all 25 local government areas.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>What Drives Us</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--royal-blue-deep)', fontWeight: 700 }}>Core Values</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '28px' }}>
          {CORE_VALUES.map((v, i) => (
            <div key={i} style={{
              padding: '40px 32px',
              background: '#fff',
              border: '1px solid var(--border)',
              borderRadius: '2px',
              textAlign: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>{v.icon}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: 'var(--royal-blue)', fontWeight: 700, marginBottom: '12px' }}>{v.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-light)', lineHeight: 1.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section style={{ background: 'var(--royal-blue-deep)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Governance</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', color: '#fff', fontWeight: 700 }}>Executive Leadership</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {LEADERSHIP.map((l, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(201,153,58,0.2)',
                borderTop: '3px solid var(--gold)',
                padding: '28px 24px',
                borderRadius: '2px',
              }}>
                <div style={{
                  width: '56px', height: '56px',
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 700, fontSize: '22px',
                  color: 'var(--royal-blue-deep)',
                  marginBottom: '16px',
                }}>
                  {l.name.split(' ')[2]?.[0] || 'C'}
                </div>
                <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', color: '#fff', fontWeight: 600, marginBottom: '4px' }}>{l.name}</h4>
                <div style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>{l.title}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)' }}>{l.ethnic} Ethnic Group</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Collaboration</div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--royal-blue-deep)', fontWeight: 700, marginBottom: '48px' }}>
          Our Federal Partners
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', textAlign: 'left' }}>
          {[
            { short: 'FMACTCE', full: 'Federal Ministry of Arts, Culture, Tourism & Creative Economy', desc: 'Supporting cultural promotion, tourism development, and creative economy initiatives across Nigeria.' },
            { short: 'NDDC', full: 'Niger Delta Development Commission', desc: 'Driving infrastructure, youth empowerment, and environmental restoration across the Niger Delta.' },
            { short: 'NOA', full: 'National Orientation Agency', desc: 'Advancing civic education, patriotism, and national values at the grassroots level.' },
            { short: 'INEC', full: 'Independent National Electoral Commission', desc: 'Promoting voter education and ensuring credible elections through traditional institution engagement.' },
          ].map((p, i) => (
            <div key={i} style={{
              background: '#fff',
              border: '1px solid var(--border)',
              borderLeft: '4px solid var(--royal-blue)',
              padding: '28px 24px',
              borderRadius: '2px',
            }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 700, color: 'var(--royal-blue)', marginBottom: '4px' }}>{p.short}</div>
              <div style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.full}</div>
              <p style={{ fontSize: '13px', color: 'var(--text-light)', lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
