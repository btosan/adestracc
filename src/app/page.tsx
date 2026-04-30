/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

const PARTNERS = [
  { name: 'Federal Ministry of Arts, Culture, Tourism & Creative Economy', short: 'FMACTCE' },
  { name: 'Niger Delta Development Commission', short: 'NDDC' },
  { name: 'National Orientation Agency', short: 'NOA' },
  { name: 'Independent National Electoral Commission', short: 'INEC' },
];

const IMPACT_STATS = [
  { number: '36+', label: 'Ethnic Groups United' },
  { number: '500+', label: 'Gazetted Chiefs' },
  { number: '25', label: 'LGAs Represented' },
  { number: '4', label: 'Federal Partners' },
];

const NEWS_ITEMS = [
  { title: 'ADESTRACC Partners with NDDC for Youth Cultural Engagement', date: 'April 2025', excerpt: 'New initiative to promote youth participation in cultural preservation activities across Delta State.' },
  { title: 'Annual Convention of Chiefs Holds in Asaba', date: 'March 2025', excerpt: 'Over 200 gazetted chiefs from across Delta State convened to discuss grassroots development strategies.' },
  { title: 'Tourism Promotion Drive Launched Across Delta Communities', date: 'February 2025', excerpt: 'ADESTRACC unveils a new campaign to showcase Delta State heritage tourism to a global audience.' },
];

const GALLERY_IMAGES = [
  { label: 'Royal Court Assembly', color: '#1B3A7A' },
  { label: 'Cultural Festival', color: '#8B1A2E' },
  { label: 'Heritage Exhibition', color: '#C9993A' },
  { label: 'Chiefs Convention', color: '#0F2554' },
  { label: 'Community Development', color: '#2B5099' },
  { label: 'Tourism Showcase', color: '#A82038' },
];

export default function HomePage() {
  return (
    <div style={{ paddingTop: 0 }}>

      {/* ─── HERO ─── */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #0F2554 0%, #1B3A7A 45%, #2B5099 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}>
        {/* Geometric pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,153,58,0.05) 40px, rgba(201,153,58,0.05) 41px), repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(201,153,58,0.05) 40px, rgba(201,153,58,0.05) 41px)',
          pointerEvents: 'none',
        }} />

        {/* Gold accent lines */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

        {/* Crimson side accent */}
        <div style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '4px', background: 'linear-gradient(180deg, transparent, var(--crimson), transparent)' }} />
        <div style={{ position: 'absolute', right: 0, top: '20%', bottom: '20%', width: '4px', background: 'linear-gradient(180deg, transparent, var(--crimson), transparent)' }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px' }}>
          {/* Ornament */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '28px' }}>
            <div style={{ height: '1px', width: '60px', background: 'var(--gold)' }} />
            <span style={{ color: 'var(--gold)', fontSize: '20px' }}>◆</span>
            <div style={{ height: '1px', width: '60px', background: 'var(--gold)' }} />
          </div>

          <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 500 }}>
            Official Body of Gazetted Chiefs · Delta State, Nigeria
          </div>

          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(42px, 7vw, 80px)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.1,
            marginBottom: '12px',
          }}>
            Association of Delta State
          </h1>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(42px, 7vw, 80px)',
            fontWeight: 300,
            color: 'var(--gold-light)',
            fontStyle: 'italic',
            lineHeight: 1.1,
            marginBottom: '32px',
          }}>
            Traditional Council of Chiefs
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px', lineHeight: 1.8, maxWidth: '680px', margin: '0 auto 48px', fontWeight: 300 }}>
            Uniting gazetted chiefs across all ethnicities — preserving our rich cultural heritage and strengthening grassroots social stability through tradition, culture, tourism & creativity.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about" style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
              color: 'var(--royal-blue-deep)',
              padding: '14px 36px',
              borderRadius: '2px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}>
              Discover Our Story
            </Link>
            <Link href="/contact" style={{
              display: 'inline-block',
              border: '2px solid rgba(255,255,255,0.4)',
              color: '#fff',
              padding: '14px 36px',
              borderRadius: '2px',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
        }}>
          <span>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg, rgba(201,153,58,0.6), transparent)' }} />
        </div>
      </section>

      {/* ─── PARTNERS STRIP ─── */}
      <section style={{
        background: 'var(--ivory-dark)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '28px 24px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', justifyContent: 'center' }}>
            <div style={{ height: '1px', flex: 1, background: 'var(--border)', maxWidth: '120px' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--text-light)', textTransform: 'uppercase' }}>In Partnership With</span>
            <div style={{ height: '1px', flex: 1, background: 'var(--border)', maxWidth: '120px' }} />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', alignItems: 'center' }}>
            {PARTNERS.map(p => (
              <div key={p.short} style={{
                background: '#fff',
                border: '1px solid var(--border)',
                borderLeft: '3px solid var(--gold)',
                padding: '10px 20px',
                borderRadius: '2px',
                display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '15px', color: 'var(--royal-blue)' }}>{p.short}</span>
                <span style={{ fontSize: '11px', color: 'var(--text-light)', maxWidth: '140px', lineHeight: 1.3 }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT INTRO ─── */}
      <section style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 500 }}>
              Who We Are
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 700, color: 'var(--royal-blue-deep)', lineHeight: 1.15, marginBottom: '24px' }}>
              Voice of Delta State's<br />
              <span style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>Gazetted Chiefs</span>
            </h2>
            <p style={{ color: 'var(--text-mid)', fontSize: '15px', lineHeight: 1.85, marginBottom: '20px' }}>
              ADESTRACC is the official unified body representing gazetted chiefs across all ethnic groups in Delta State. We stand as custodians of our ancestors' values while championing modern opportunities that empower our communities.
            </p>
            <p style={{ color: 'var(--text-mid)', fontSize: '15px', lineHeight: 1.85, marginBottom: '36px' }}>
              Through tradition, culture, tourism, and creativity, we promote peace, unity, and sustainable community development — showcasing the beauty of Delta State to the world.
            </p>
            <Link href="/about" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              color: 'var(--royal-blue)',
              fontWeight: 600, fontSize: '13px',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none',
              borderBottom: '2px solid var(--gold)', paddingBottom: '4px',
            }}>
              Read Our Full Story <span>→</span>
            </Link>
          </div>

          {/* Visual card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'linear-gradient(160deg, var(--royal-blue-deep) 0%, var(--royal-blue) 100%)',
              borderRadius: '4px',
              padding: '48px 40px',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '140px', height: '140px',
                background: 'radial-gradient(circle, rgba(201,153,58,0.15) 0%, transparent 70%)',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '52px', fontWeight: 700, color: 'var(--gold-light)', lineHeight: 1, marginBottom: '8px' }}>
                  1983
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '32px' }}>
                  Year Founded
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '24px' }}>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontStyle: 'italic', lineHeight: 1.5, color: 'rgba(255,255,255,0.85)' }}>
                    "Together, we celebrate our identity. Together, we build a stronger future."
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative frame offset */}
            <div style={{
              position: 'absolute', bottom: '-12px', right: '-12px',
              width: '80%', height: '80%',
              border: '2px solid var(--gold)',
              borderRadius: '4px',
              zIndex: -1,
              opacity: 0.4,
            }} />
          </div>
        </div>
      </section>

      {/* ─── IMPACT STATS ─── */}
      <section style={{
        background: 'var(--ivory-dark)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>
            Our Reach
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 44px)', color: 'var(--royal-blue-deep)', marginBottom: '56px', fontWeight: 700 }}>
            Uniting Delta State's Heritage
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px' }}>
            {IMPACT_STATS.map(stat => (
              <div key={stat.label} style={{ position: 'relative' }}>
                <div style={{
                  width: '4px', height: '40px',
                  background: 'var(--gold)',
                  margin: '0 auto 16px',
                }} />
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '56px', fontWeight: 700, color: 'var(--royal-blue)', lineHeight: 1 }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-light)', marginTop: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMAGE GALLERY ─── */}
      <section style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Gallery</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--royal-blue-deep)', fontWeight: 700 }}>
            Moments of Heritage & Unity
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto auto',
          gap: '12px',
        }}>
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} style={{
              gridColumn: i === 0 ? 'span 2' : 'span 1',
              height: i === 0 ? '320px' : '200px',
              background: `linear-gradient(160deg, ${img.color}dd, ${img.color}88)`,
              borderRadius: '4px',
              display: 'flex', alignItems: 'flex-end',
              padding: '20px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 11px)',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px', color: '#fff', fontWeight: 600 }}>{img.label}</div>
                <div style={{ width: '30px', height: '2px', background: 'var(--gold)', marginTop: '6px' }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── VIDEO SECTION ─── */}
      <section style={{
        background: 'var(--royal-blue-deep)',
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,153,58,0.03) 60px, rgba(201,153,58,0.03) 61px)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Watch & Listen</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', color: '#fff', fontWeight: 700 }}>
              Stories From the Chiefs
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'ADESTRACC Annual Convention 2024', duration: '12:34', views: '2.4K' },
              { title: 'Cultural Heritage Preservation in Delta State', duration: '8:12', views: '1.8K' },
              { title: 'NDDC Partnership Launch Ceremony', duration: '15:45', views: '3.1K' },
            ].map((v, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(201,153,58,0.2)',
                borderRadius: '4px',
                overflow: 'hidden',
                cursor: 'pointer',
              }}>
                <div style={{
                  height: '180px',
                  background: `linear-gradient(160deg, rgba(27,58,122,0.8), rgba(15,37,84,0.9))`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                }}>
                  <div style={{
                    width: '56px', height: '56px',
                    background: 'rgba(201,153,58,0.9)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{ width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '20px solid white', marginLeft: '4px' }} />
                  </div>
                  <div style={{ position: 'absolute', bottom: '12px', right: '12px', fontSize: '11px', color: 'rgba(255,255,255,0.7)', background: 'rgba(0,0,0,0.4)', padding: '2px 8px', borderRadius: '10px' }}>
                    {v.duration}
                  </div>
                </div>
                <div style={{ padding: '16px 20px' }}>
                  <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '17px', color: '#fff', fontWeight: 600, marginBottom: '6px', lineHeight: 1.3 }}>{v.title}</h4>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>{v.views} views</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWS ─── */}
      <section style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Latest</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 40px)', color: 'var(--royal-blue-deep)', fontWeight: 700 }}>
              News & Updates
            </h2>
          </div>
          <Link href="/our-impact" style={{ color: 'var(--royal-blue)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '2px solid var(--gold)', paddingBottom: '2px' }}>
            View All →
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
          {NEWS_ITEMS.map((n, i) => (
            <article key={i} style={{
              background: '#fff',
              border: '1px solid var(--border)',
              borderTop: '3px solid var(--royal-blue)',
              borderRadius: '2px',
              padding: '28px',
              transition: 'box-shadow 0.3s ease, transform 0.2s ease',
              cursor: 'pointer',
            }}>
              <div style={{ fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 500 }}>
                {n.date}
              </div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '21px', color: 'var(--royal-blue-deep)', fontWeight: 600, lineHeight: 1.3, marginBottom: '12px' }}>
                {n.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-light)', lineHeight: 1.7 }}>
                {n.excerpt}
              </p>
              <div style={{ marginTop: '20px', fontSize: '12px', color: 'var(--royal-blue)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Read More →
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--crimson) 0%, #6B1020 100%)',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.02) 30px, rgba(255,255,255,0.02) 31px)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ height: '1px', width: '60px', background: 'rgba(255,255,255,0.4)' }} />
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px' }}>◆</span>
            <div style={{ height: '1px', width: '60px', background: 'rgba(255,255,255,0.4)' }} />
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
            Together, We Build a Stronger Future
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', marginBottom: '36px', maxWidth: '560px', margin: '0 auto 36px' }}>
            Join ADESTRACC in preserving Delta State's rich heritage and driving sustainable grassroots development.
          </p>
          <Link href="/contact" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
            color: 'var(--royal-blue-deep)',
            padding: '16px 48px',
            borderRadius: '2px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            Connect With Us
          </Link>
        </div>
      </section>

    </div>
  );
}
