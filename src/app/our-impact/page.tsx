'use client';
import Link from 'next/link';

const IMPACT_AREAS = [
  {
    icon: '🏛️',
    title: 'Cultural Preservation',
    color: 'var(--royal-blue)',
    stats: '120+ Heritage Sites',
    img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80',
    desc: 'Documenting, protecting, and celebrating Delta State\'s diverse cultural heritage including festivals, oral traditions, artifacts, and sacred sites across all ethnic groups.',
    highlights: ['Annual Cultural Festival spanning 3 days', 'Heritage documentation in 36 ethnic groups', 'Youth cultural ambassador program', 'Museum partnership initiative'],
  },
  {
    icon: '🕊️',
    title: 'Peace & Stability',
    color: 'var(--crimson)',
    stats: '50+ Conflicts Resolved',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
    desc: 'Leveraging the moral authority of traditional rulers to mediate inter-community disputes, foster reconciliation, and maintain grassroots social order.',
    highlights: ['Community mediation in 25 LGAs', 'Inter-ethnic dialogue forums', 'Crisis response task force', 'Youth restiveness reduction programs'],
  },
  {
    icon: '🌍',
    title: 'Tourism Development',
    color: 'var(--gold)',
    stats: '₦2B+ Revenue Enabled',
    img: 'https://images.unsplash.com/photo-1551038247-3d935814b429?w=600&q=80',
    desc: 'Positioning Delta State as a premier cultural tourism destination, opening heritage sites, and creating sustainable tourism economies in traditional communities.',
    highlights: ['Delta Heritage Tourism Circuit', 'International tour operator partnerships', 'Festival tourism packaging', 'Ecotourism in mangrove communities'],
  },
  {
    icon: '🎨',
    title: 'Creative Economy',
    color: '#5A8040',
    stats: '2,000+ Artisans Empowered',
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80',
    desc: 'Supporting traditional craftspeople, artists, musicians, and cultural entrepreneurs through training, market access, and advocacy for creative sector investment.',
    highlights: ['Traditional craft market network', 'Cultural content creation training', 'NOLLYWOOD Delta collaboration', 'Digital cultural archive project'],
  },
  {
    icon: '🗳️',
    title: 'Civic Engagement',
    color: '#6A4A8A',
    stats: '500K+ Voters Sensitized',
    img: 'https://images.unsplash.com/photo-1612538498456-e861df91d474?w=600&q=80',
    desc: 'Working with INEC and NOA to promote civic participation, voter education, and the role of traditional institutions in democratic governance.',
    highlights: ['Pre-election voter education forums', 'Constitution awareness campaigns', 'Youth civic leadership program', 'INEC collaboration at grassroots'],
  },
  {
    icon: '🏗️',
    title: 'Community Development',
    color: '#2A7A5A',
    stats: '80+ Projects Facilitated',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    desc: 'Partnering with NDDC and state government to channel infrastructure, healthcare, and education investments to underserved traditional communities.',
    highlights: ['Rural infrastructure advocacy', 'NDDC project monitoring', 'Healthcare outreach programs', 'Scholarship facilitation'],
  },
];

const TIMELINE = [
  { year: '1983', event: 'ADESTRACC founded as umbrella body for Delta\'s gazetted chiefs' },
  { year: '1999', event: 'Formalized partnership with Delta State Government on cultural policy' },
  { year: '2006', event: 'Launch of Heritage Documentation Project across 36 ethnic groups' },
  { year: '2012', event: 'First ADESTRACC Annual Cultural Tourism Festival held in Asaba' },
  { year: '2018', event: 'Partnership formalized with NDDC for grassroots development programs' },
  { year: '2021', event: 'Digital archive launched for traditional music, festivals and artifacts' },
  { year: '2023', event: 'Expanded federal partnership with INEC and NOA for civic engagement' },
  { year: '2024', event: 'Launch of Youth Cultural Ambassador Program across all 25 LGAs' },
];

const GALLERY_ITEMS = [
  { label: 'Heritage Festival 2024', h: '260px', span: 2, img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80' },
  { label: 'Chief\'s Assembly', h: '260px', span: 1, img: 'https://images.unsplash.com/photo-1612538498456-e861df91d474?w=500&q=80' },
  { label: 'Cultural Exhibition', h: '260px', span: 1, img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&q=80' },
  { label: 'NDDC Forum', h: '180px', span: 1, img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80' },
  { label: 'Peace Dialogue', h: '180px', span: 1, img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=80' },
  { label: 'Youth Program', h: '180px', span: 1, img: 'https://images.unsplash.com/photo-1551038247-3d935814b429?w=500&q=80' },
  { label: 'Tourism Launch', h: '180px', span: 1, img: 'https://images.unsplash.com/photo-1612538498456-e861df91d474?w=500&q=80' },
];

export default function ImpactPage() {
  return (
    <div style={{ paddingTop: '60px' }}>

      {/* Hero — full-bleed photo */}
      <section style={{
        padding: '80px 24px 100px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '480px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&q=85"
          alt="Community gathering Delta State"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(15,37,84,0.88) 0%, rgba(27,58,122,0.84) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,153,58,0.04) 40px, rgba(201,153,58,0.04) 41px)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '16px' }}>Making a Difference</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(38px, 5vw, 64px)', color: '#fff', fontWeight: 700, marginBottom: '20px', lineHeight: 1.1 }}>
            Our <span style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Impact</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.8 }}>
            Four decades of preserving heritage, building peace, and empowering communities across all of Delta State.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--ivory-dark)', padding: '14px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', fontSize: '12px', color: 'var(--text-light)' }}>
          <Link href="/" style={{ color: 'var(--royal-blue)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span>Our Impact</span>
        </div>
      </div>

      {/* Key Stats */}
      <section style={{ background: 'var(--ivory-dark)', borderBottom: '1px solid var(--border)', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { n: '40+', l: 'Years of Service' },
              { n: '36+', l: 'Ethnic Groups United' },
              { n: '500+', l: 'Gazetted Chiefs' },
              { n: '25', l: 'LGAs Covered' },
              { n: '2,000+', l: 'Artisans Empowered' },
              { n: '4', l: 'Federal Partnerships' },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '44px', fontWeight: 700, color: 'var(--royal-blue)', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas — cards with photos */}
      <section style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Areas of Impact</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--royal-blue-deep)', fontWeight: 700 }}>
            Where We Make a Difference
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {IMPACT_AREAS.map((area, i) => (
            <div key={i} style={{
              background: '#fff',
              border: '1px solid var(--border)',
              borderTop: `4px solid ${area.color}`,
              borderRadius: '2px',
              overflow: 'hidden',
            }}>
              {/* Photo */}
              <div style={{ height: '180px', overflow: 'hidden' }}>
                <img
                  src={area.img}
                  alt={area.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ padding: '28px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{area.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: 'var(--royal-blue-deep)', fontWeight: 700, marginBottom: '6px' }}>{area.title}</h3>
                <div style={{ fontSize: '12px', color: area.color, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>{area.stats}</div>
                <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '20px' }}>{area.desc}</p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  {area.highlights.map((h, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: area.color, flexShrink: 0 }} />
                      <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery — real photos */}
      <section style={{ background: 'var(--ivory-dark)', borderTop: '1px solid var(--border)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Gallery</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(30px, 3vw, 44px)', color: 'var(--royal-blue-deep)', fontWeight: 700 }}>
              Moments of Impact
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'auto auto', gap: '10px' }}>
            {GALLERY_ITEMS.map((g, i) => (
              <div key={i} style={{
                gridColumn: `span ${g.span}`,
                height: g.h,
                borderRadius: '3px',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
              }}>
                <img
                  src={g.img}
                  alt={g.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(15,37,84,0.7) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', zIndex: 1 }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '14px', color: '#fff', fontWeight: 600 }}>{g.label}</div>
                  <div style={{ width: '24px', height: '2px', background: 'var(--gold)', marginTop: '4px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '100px 24px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Through the Years</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--royal-blue-deep)', fontWeight: 700 }}>
            Our Journey
          </h2>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'var(--border)', transform: 'translateX(-50%)' }} />
          {TIMELINE.map((t, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
              marginBottom: '40px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '20px',
                width: '14px',
                height: '14px',
                background: 'var(--gold)',
                borderRadius: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1,
                border: '3px solid var(--ivory)',
              }} />
              <div style={{
                width: '44%',
                background: '#fff',
                border: '1px solid var(--border)',
                borderLeft: '3px solid var(--royal-blue)',
                padding: '20px 24px',
                marginRight: i % 2 === 0 ? '56px' : '0',
                marginLeft: i % 2 === 1 ? '56px' : '0',
                borderRadius: '2px',
              }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: 700, color: 'var(--gold)', marginBottom: '6px' }}>{t.year}</div>
                <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: 1.6 }}>{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}