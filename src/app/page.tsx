'use client';
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
  { label: 'Royal Court Assembly', img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80' },
  { label: 'Cultural Festival', img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=80' },
  { label: 'Heritage Exhibition', img: 'https://images.unsplash.com/photo-1551038247-3d935814b429?w=500&q=80' },
  { label: 'Chiefs Convention', img: 'https://images.unsplash.com/photo-1612538498456-e861df91d474?w=500&q=80' },
  { label: 'Community Development', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80' },
  { label: 'Tourism Showcase', img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&q=80' },
];

// Hero background images — layered for depth
const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1800&q=85', // traditional ceremony
  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1800&q=85', // African culture
];

export default function HomePage() {
  return (
    <div style={{ paddingTop: 0 }}>

      {/* ─── HERO ─── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}>
        {/* Full-bleed hero photo */}
        <img
          src={HERO_IMAGES[0]}
          alt="Traditional chiefs assembly"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />
        {/* Rich overlay — royal blue gradient over image */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, rgba(15,37,84,0.88) 0%, rgba(27,58,122,0.82) 45%, rgba(43,80,153,0.78) 100%)',
        }} />
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

          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.8, maxWidth: '680px', margin: '0 auto 48px', fontWeight: 300 }}>
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


      {/* ─── WHO WE ARE BANNER ─── */}
      <section style={{ background: 'var(--royal-blue-deep)', padding: '0' }}>
        <style>{`
          .who-we-are-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
          .who-card-img {
            transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          .who-card:hover .who-card-img {
            transform: scale(1.07);
          }
          .who-card-overlay {
            background: linear-gradient(0deg, rgba(15,37,84,0.85) 0%, rgba(15,37,84,0.2) 55%, transparent 100%);
            transition: background 0.4s ease;
          }
          .who-card:hover .who-card-overlay {
            background: linear-gradient(0deg, rgba(15,37,84,0.92) 0%, rgba(15,37,84,0.45) 60%, rgba(15,37,84,0.1) 100%);
          }
          .who-card-content {
            transition: transform 0.4s ease;
          }
          .who-card:hover .who-card-content {
            transform: translateY(-6px);
          }
          .who-card-accent {
            width: 0px;
            height: 2px;
            background: var(--gold);
            transition: width 0.4s ease 0.1s;
          }
          .who-card:hover .who-card-accent {
            width: 40px;
          }
          @media (max-width: 640px) {
            .who-we-are-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        `}</style>

        {/* Top label bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '20px', padding: '20px 24px',
          borderBottom: '1px solid rgba(201,153,58,0.2)',
        }}>
          <div style={{ height: '1px', width: '48px', background: 'var(--gold)', opacity: 0.6 }} />
          <span style={{
            fontSize: '10px', letterSpacing: '0.35em',
            color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600,
          }}>
            Who We Are
          </span>
          <div style={{ height: '1px', width: '48px', background: 'var(--gold)', opacity: 0.6 }} />
        </div>

        {/* 4-image grid */}
        <div className="who-we-are-grid">
          {[
            {
              img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=85',
              label: 'Custodians of Tradition',
              sub: 'Gazetted chiefs preserving Delta State\'s ancestral values',
              position: 'center 30%',
            },
            {
              img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=700&q=85',
              label: 'Voice of Unity',
              sub: '36+ ethnic groups unified under one body',
              position: 'center 40%',
            },
            {
              img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=85',
              label: 'Champions of Heritage',
              sub: 'Celebrating the rich cultural tapestry of Delta State',
              position: 'center 35%',
            },
            {
              img: 'https://images.unsplash.com/photo-1612538498456-e861df91d474?w=700&q=85',
              label: 'Builders of Tomorrow',
              sub: 'Driving grassroots development through tradition',
              position: 'center 45%',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="who-card"
              style={{
                position: 'relative',
                height: '420px',
                overflow: 'hidden',
                cursor: 'default',
                borderRight: i < 3 ? '1px solid rgba(201,153,58,0.15)' : 'none',
              }}
            >
              {/* Photo */}
              <img
                src={card.img}
                alt={card.label}
                className="who-card-img"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: card.position,
                }}
              />

              {/* Gradient overlay */}
              <div className="who-card-overlay" style={{ position: 'absolute', inset: 0 }} />

              {/* Gold left rule */}
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: '3px', height: '100%',
                background: 'linear-gradient(180deg, var(--gold) 0%, transparent 100%)',
                opacity: 0.5,
              }} />

              {/* Number badge */}
              <div style={{
                position: 'absolute', top: '20px', right: '20px',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '11px', fontWeight: 700,
                color: 'rgba(201,153,58,0.5)',
                letterSpacing: '0.15em',
              }}>
                0{i + 1}
              </div>

              {/* Text content */}
              <div
                className="who-card-content"
                style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '28px 24px',
                }}
              >
                <div className="who-card-accent" style={{ marginBottom: '12px' }} />
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.2,
                  marginBottom: '8px',
                }}>
                  {card.label}
                </h3>
                <p style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.6,
                  letterSpacing: '0.02em',
                }}>
                  {card.sub}
                </p>
              </div>
            </div>
          ))}
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

          {/* Visual card with real photo */}
          <div style={{ position: 'relative' }}>
            {/* Real photo behind the card */}
            <div style={{
              borderRadius: '4px',
              overflow: 'hidden',
              position: 'relative',
              height: '380px',
            }}>
              <img
                src="https://images.unsplash.com/photo-1612538498456-e861df91d474?w=700&q=80"
                alt="Delta State chiefs gathering"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Overlay with founding year badge */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(0deg, rgba(15,37,84,0.92) 0%, transparent 100%)',
                padding: '40px 32px 28px',
              }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '48px', fontWeight: 700, color: 'var(--gold-light)', lineHeight: 1 }}>
                  2020
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>
                  Est. Year · Four Decades of Service
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
              borderRadius: '4px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
            }}>
              <img
                src={img.img}
                alt={img.label}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  display: 'block',
                }}
                onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              {/* Label overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(0deg, rgba(15,37,84,0.75) 0%, transparent 60%)',
              }} />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 1 }}>
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
              { title: 'ADESTRACC Annual Convention 2024', duration: '12:34', views: '2.4K', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80' },
              { title: 'Cultural Heritage Preservation in Delta State', duration: '8:12', views: '1.8K', img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80' },
              { title: 'NDDC Partnership Launch Ceremony', duration: '15:45', views: '3.1K', img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80' },
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
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <img src={v.img} alt={v.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,37,84,0.55)' }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{
                      width: '56px', height: '56px',
                      background: 'rgba(201,153,58,0.9)',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <div style={{ width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '20px solid white', marginLeft: '4px' }} />
                    </div>
                  </div>
                  <div style={{ position: 'absolute', bottom: '12px', right: '12px', fontSize: '11px', color: 'rgba(255,255,255,0.9)', background: 'rgba(0,0,0,0.5)', padding: '2px 8px', borderRadius: '10px' }}>
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
              overflow: 'hidden',
              cursor: 'pointer',
            }}>
              {/* News card photo */}
              <div style={{ height: '160px', overflow: 'hidden' }}>
                <img
                  src={[
                    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
                    'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80',
                    'https://images.unsplash.com/photo-1551038247-3d935814b429?w=600&q=80',
                  ][i]}
                  alt={n.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ padding: '28px' }}>
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
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section style={{
        position: 'relative',
        padding: '80px 24px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Background photo */}
        <img
          src="https://images.unsplash.com/photo-1612538498456-e861df91d474?w=1600&q=80"
          alt="Chiefs gathering"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(139,26,46,0.92) 0%, rgba(107,16,32,0.95) 100%)',
        }} />
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
