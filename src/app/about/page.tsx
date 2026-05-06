/* eslint-disable @next/next/no-img-element */
'use client';
/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link';
import Image from 'next/image';

const CORE_VALUES = [
  { icon: '⚖️', title: 'Integrity', desc: 'We uphold the values and traditions passed down by our ancestors with honour and transparency.' },
  { icon: '🤝', title: 'Unity', desc: 'Bringing together all ethnic groups of Delta State under one strong, unified voice.' },
  { icon: '🌍', title: 'Heritage', desc: 'Preserving and promoting the rich cultural tapestry of Delta State for future generations.' },
  { icon: '🌱', title: 'Development', desc: 'Driving sustainable grassroots development through creative and economic empowerment.' },
];

const LEADERSHIP = [
  { name: 'Chief Olomu Azuka Hawkins', title: 'President General', image: '/assets/chiefs/hawkins.jpeg', phone: '+234 07039223978', email: 'hawkins4luv@yahoo.com' },
  { name: 'Chief Egbodo O. Frank ', title: 'Pioneer Founding Member', image: '/assets/chiefs/egbodo.jpeg', phone: '+234 08038204080', email: '' },
  { name: 'High Chief Ugo Asibelua JP KSP', title: 'Pioneer Founding Member', image: '/assets/chiefs/adestracc-img11.jpg', phone: '+234 08033118147', email: '' },
  { name: 'Chief Paul A. Isamade', title: 'Pioneer Founding Member', image: '/assets/chiefs/pai.png', phone: '+234 8055559797', email: '' },
  { name: 'Chief Edwin Othuke Asedere', title: 'Pioneer Founding Member', image: '/assets/chiefs/othuke.jpeg', phone: '+234 08052507358', email: '' },
  { name: 'Chief Lucky E. Ojumah', title: 'Pioneer Founding Member', image: '/assets/chiefs/ojumah.jpeg', phone: '+234 07038664487', email: '' },
  { name: 'Amb. Chief Andrew Abrah.', title: 'Pioneer Founding Member', image: '/assets/chiefs/abrah.jpeg', phone: '+234 08061629084', email: '' },
  { name: 'Chief Chinedu Edem', title: 'Pioneer Founding Member', image: '/assets/chiefs/chinedu.jpeg', phone: '+234 08035500660', email: '' },
  { name: 'Barr Faith Benedict O.', title: 'Legal Adviser', image: '/assets/chiefs/adestracc-img-bar.jpg', phone: '+234 08134704397', email: '' },
];

export default function AboutPage() {
  return (
    <div className='pt-[60px] overflow-hidden'>

      {/* Page Hero — legacy of unity */}
      <section style={{
        padding: '80px 24px 100px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        minHeight: '480px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Image
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1800&q=85"
          alt="Traditional chiefs ceremony"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          priority
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, rgba(15,37,84,0.90) 0%, rgba(27,58,122,0.85) 100%)',
        }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,153,58,0.04) 40px, rgba(201,153,58,0.04) 41px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '16px' }}>Our Story</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(38px, 5vw, 64px)', color: '#fff', fontWeight: 700, marginBottom: '20px', lineHeight: 1.1 }}>
            About <span style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>ADESTRACC</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.8 }}>
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

      {/* Full Story — with side photo */}
      <section style={{ background: 'var(--ivory-dark)', padding: '100px 24px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '72px', alignItems: 'center' }}>
            {/* Photo column */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '4px', overflow: 'hidden', height: '600px', position: 'relative' }}>
                <Image
                  src="/assets/images/local-content18.jpeg"
                  alt="Delta State cultural gathering"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              {/* Floating stat badge */}
              <div style={{
                position: 'absolute', bottom: '-24px', right: '-24px',
                background: 'var(--royal-blue-deep)',
                border: '4px solid var(--ivory-dark)',
                borderRadius: '4px',
                padding: '20px 28px',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '42px', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>20+</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>Years of Service</div>
              </div>
            </div>

            {/* Text column   of service*/}
            <div style={{ paddingBottom: '24px' }}>
              <div style={{ textAlign: 'left', marginBottom: '40px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Our History</div>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--royal-blue-deep)', fontWeight: 700 }}>
                  A Legacy of Unity
                </h2>
              </div>
              <div style={{ fontSize: '15px', lineHeight: 2, color: 'var(--text-mid)' }}>
                <p style={{ marginBottom: '20px' }}>
                  ADESTRACC was established as the foremost official body representing all gazetted chiefs across Delta State. Born from the recognition that traditional institutions are the bedrock of our communities, the association was founded on the conviction that a unified voice of chiefs could drive transformative change.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  Delta State is a mosaic of over 36 distinct ethnic groups — Urhobo, Itsekiri, Ijaw, Isoko, Ukwuani, Ika, and Aniocha — each with deep-rooted traditions and cultural expressions. ADESTRACC serves as the bridge that unites these diverse peoples under shared values of respect, collaboration, and progress.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  Over the years, the association has grown into a formidable institution partnering with federal agencies including FMACTCE, NDDC, NOA, and INEC.
                </p>
                <p>
                  Today, ADESTRACC stands as the authoritative voice of grassroots governance in Delta State — championing cultural preservation, youth engagement, civic education, and community resilience across all 25 LGAs.
                </p>
              </div>
            </div>
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
            }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>{v.icon}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: 'var(--royal-blue)', fontWeight: 700, marginBottom: '12px' }}>{v.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-light)', lineHeight: 1.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership — dark section with photo backdrop */}
      <section style={{ position: 'relative', padding: '100px 24px', overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1612538498456-e861df91d474?w=1800&q=60"
          alt="Chiefs assembly backdrop"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,37,84,0.96)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Governance</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', color: '#fff', fontWeight: 700 }}>Executive Leadership</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {LEADERSHIP.map((l, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(201,153,58,0.2)',
                borderTop: '3px solid var(--gold)',
                padding: '32px 28px',
                borderRadius: '2px',
              }}>
                {/* Member photo */}
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                  margin: '0 auto 20px',
                  border: '0.01px solid var(--gold)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                }}>
                  <Image
                    src={l.image}
                    alt={l.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', color: '#fff', fontWeight: 600, marginBottom: '4px', textAlign: 'center' }}>{l.name}</h4>
                <div style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px', textAlign: 'center' }}>{l.title}</div>

                {/* Divider */}
                <div style={{ borderTop: '1px solid rgba(201,153,58,0.15)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href={`tel:${l.phone}`}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      color: 'rgba(255,255,255,0.65)', fontSize: '12px',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                  >
                    <span style={{ fontSize: '14px' }}>📞</span>
                    {l.phone}
                  </a>
                  <a
                    href={`mailto:${l.email}`}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      color: 'rgba(255,255,255,0.65)', fontSize: '12px',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                  >
                    <span style={{ fontSize: '14px' }}>✉️</span>
                    {l.email}
                  </a>
                </div>
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