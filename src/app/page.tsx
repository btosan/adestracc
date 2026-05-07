'use client';
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const SLIDE_PANELS = [
  { bg: '#0F2554' },
  { bg: '#1B3A7A' },
  { bg: '#0F2554' },
  { bg: '#1B3A7A' },
  { bg: '#0F2554' },
  { bg: '#1B3A7A' },
  { bg: '#0F2554' },
] as const;

const HERO_SLIDES = [
  {
    img: '/assets/images/chief-egbodo.jpeg',
    tag: 'Royal Authority',
    heading: 'The Face That Commands Respect',
    sub: 'Chief Egbodo embodies the dignity and gravitas of Delta State traditional leadership — a living symbol of ancestral authority, guiding his people with wisdom and enduring pride.',
    cta: { label: 'Our Story', href: '/about' },
    cta2: { label: 'Contact Us', href: '/contact' },
  },
  {
    img: '/assets/images/chiefs-group.jpeg',
    tag: 'Cultural Preservation',
    heading: 'Custodians of Delta State Heritage',
    sub: 'Uniting gazetted chiefs across all ethnic groups to preserve our rich ancestral legacy and drive sustainable grassroots development across every community in Delta State.',
    cta: { label: 'Our Story', href: '/about' },
    cta2: { label: 'Contact Us', href: '/contact' },
  },
  {
    img: '/assets/images/adestracc-img9.jpg',
    tag: 'Tradition & Governance',
    heading: 'Where Ancient Law Meets Modern Leadership',
    sub: 'ADESTRACC bridges centuries of traditional governance with the demands of today — ensuring our chiefs remain relevant, respected, and empowered to serve their communities.',
    cta: { label: 'Our Story', href: '/about' },
    cta2: { label: 'Contact Us', href: '/contact' },
  },
  {
    img: '/assets/images/chiefs4.jpeg',
    tag: 'The Face of Royalty',
    heading: 'Where Tradition Wears a Living Crown',
    sub: 'A new generation of Delta State chiefs — rooted in ancient authority, dressed in the full regalia of their forebears, leading communities into a dignified and prosperous future.',
    cta: { label: 'Our Story', href: '/about' },
    cta2: { label: 'Contact Us', href: '/contact' },
  },
  {
    img: '/assets/images/adestracc-img-chiefs.jpg',
    tag: 'Unity in Diversity',
    heading: '7 Ethnic Groups, One Powerful Voice',
    sub: "ADESTRACC stands as the official body bridging Delta State's diverse communities through shared values, culture, and tradition — forging unity where division once stood.",
    cta: { label: 'Our Leadership', href: '/about' },
    cta2: { label: 'Join Us', href: '/contact' },
  },
  {
    img: '/assets/images/local-content1.jpeg',
    tag: 'Tourism & Creativity',
    heading: 'Showcasing Delta State to the World',
    sub: "From vibrant festivals to heritage tourism trails, we champion Delta State's creative economy and cultural identity — putting our communities firmly on the global stage.",
    cta: { label: 'Explore More', href: '/our-impact' },
    cta2: { label: 'Gallery', href: '/gallery' },
  },
  {
    img: '/assets/images/adestracc-img3.jpg',
    tag: 'Federal Partnerships',
    heading: "Backed by Nigeria's Highest Institutions",
    sub: "Working hand-in-hand with FMACTCE, NDDC, NOA, and INEC to deliver real, measurable change at the grassroots level across all 25 LGAs in Delta State.",
    cta: { label: 'Our Partners', href: '/about' },
    cta2: { label: 'Our Impact', href: '/our-impact' },
  },
];

const TICKER_ITEMS = [
  'ADESTRACC Partners with NDDC for Youth Cultural Engagement across Delta State',
  'Annual Convention of Chiefs Holds Successfully in Asaba — Over 200 Gazetted Chiefs Attend',
  'Tourism Promotion Drive Launched Across Delta Communities',
  'ADESTRACC Commemorates 5th Year Anniversary with Grand Cultural Summit',
  'New Grassroots Development Fund Launched for All 25 LGAs in Delta State',
];

const PARTNERS = [
  {
    short: 'FMACTCE',
    name: 'Federal Ministry of Arts, Culture, Tourism & Creative Economy',
    logo: '/assets/icons/fmac.png',
    color: '#006600',
    url: 'https://tourism.gov.ng',
  },
  {
    short: 'NDDC',
    name: 'Niger Delta Development Commission',
    logo: '/assets/icons/nddc.png',
    color: '#003366',
    url: 'https://nddc.gov.ng',
  },
  {
    short: 'NOA',
    name: 'National Orientation Agency',
    logo: '/assets/icons/noa.png',
    color: '#008000',
    url: 'https://noa.gov.ng',
  },
  {
    short: 'INEC',
    name: 'Independent National Electoral Commission',
    logo: '/assets/icons/inec.png',
    color: '#006400',
    url: 'https://inecnigeria.org',
  },
];

const NEWS_ITEMS = [
  {
    img: '/assets/images/adestracc-img4.jpg',
    category: 'Partnership',
    date: 'April 2025',
    title: 'ADESTRACC Partners with NDDC for Youth Cultural Engagement',
    excerpt: 'New initiative to promote youth participation in cultural preservation activities across Delta State communities.',
  },
  {
    img: '/assets/images/adestracc-img5.jpg',
    category: 'Convention',
    date: 'March 2025',
    title: 'Annual Convention of Chiefs Holds in Asaba',
    excerpt: 'Over 200 gazetted chiefs from across Delta State convened to discuss grassroots development strategies.',
  },
  {
    img: '/assets/images/adestracc-img1.jpg',
    category: 'Tourism',
    date: 'February 2025',
    title: 'Tourism Promotion Drive Launched Across Delta Communities',
    excerpt: 'ADESTRACC unveils a new campaign to showcase Delta State heritage tourism to a global audience.',
  },
  {
    img: '/assets/images/adestracc-img2.jpg',
    category: 'Development',
    date: 'January 2025',
    title: 'Grassroots Development Fund Disbursed to 25 LGAs',
    excerpt: 'ADESTRACC successfully disburses community development funds to representatives from all local government areas.',
  },
];

const EVENTS = [
  { day: '18', month: 'JUN', year: '2025', title: 'ADESTRACC Mid-Year Summit', location: 'Warri, Delta State', type: 'Summit' },
  { day: '04', month: 'JUL', year: '2025', title: 'Cultural Heritage Exhibition', location: 'Asaba Cultural Centre', type: 'Exhibition' },
  { day: '22', month: 'AUG', year: '2025', title: 'Chiefs & Community Leaders Forum', location: 'Effurun, Delta State', type: 'Forum' },
  { day: '11', month: 'SEP', year: '2025', title: 'Delta Tourism Showcase 2025', location: 'Sapele, Delta State', type: 'Showcase' },
];

const IMPACT_STATS = [
  { number: '7+', label: 'Ethnic Groups United' },
  { number: '500+', label: 'Gazetted Chiefs' },
  { number: '25', label: 'LGAs Represented' },
  { number: '10', label: 'Federal Partners' },
];

const GALLERY_IMAGES = [
  { label: 'Royal Court Assembly', img: '/assets/images/local-content4.jpeg', span: 'col-span-2 row-span-2' },
  { label: 'Cultural Festival', img: '/assets/images/local-content2.jpeg', span: 'col-span-1' },
  { label: 'Heritage Exhibition', img: '/assets/images/local-content3.jpeg', span: 'col-span-1' },
  { label: 'Chiefs Convention', img: '/assets/images/adestracc-img-chiefs6.jpg', span: 'col-span-1' },
  { label: 'Community Development', img: '/assets/images/local-content5.jpeg', span: 'col-span-1' },
  { label: 'Tourism Showcase', img: '/assets/images/local-content6.jpeg', span: 'col-span-1' },
];

const VIDEO_ITEMS = [
  {
    src: '/assets/videos/localcontent.mp4',
    title: 'ADESTRACC Local Content Implementation',
    views: '2.4K',
    poster: '/assets/videos/local-content-implementation.png',
  },
  {
    src: '/assets/videos/gbaramatu-visit.mp4',
    title: 'Tantita Security Services with ADESTRACC',
    views: '1.8K',
    poster: '/assets/videos/gbaramatu-visit.png',
  },
  {
    src: '/assets/videos/nddc-partnership.mp4',
    title: 'NDDC In Partnership With ADESTRACC',
    views: '3.1K',
    poster: '/assets/videos/nndc-partnership.png',
  },
  {
    src: '/assets/videos/local-content.mp4',
    title: 'ADESTRACC Local Content Implementation',
    views: '2.4K',
    poster: '/assets/videos/local-content-dev4.png',
  },
  {
    src: '/assets/videos/localcontent2.mp4',
    title: 'ADESTRACC Local Content Development',
    views: '2.4K',
    poster: '/assets/images/adestracc-img1.jpg',
  },
];

// ─── HERO SLIDER ─────────────────────────────────────────────────────────────

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => { setCurrent(idx); setFading(false); }, 300);
  }, [fading]);

  useEffect(() => {
    const t = setInterval(() => goTo((current + 1) % HERO_SLIDES.length), 6500);
    return () => clearInterval(t);
  }, [current, goTo]);

  const slide = HERO_SLIDES[current];
  const panelBg = SLIDE_PANELS[current % SLIDE_PANELS.length].bg;

  return (
    <section>

      {/* ══ DESKTOP ══ */}
      <div className="hidden md:flex" style={{ minHeight: '95vh' }}>

        {/* Left panel */}
        <div
          className="flex flex-col justify-center relative"
          style={{
            width: '44%',
            flexShrink: 0,
            background: panelBg,
            transition: 'background 0.5s ease',
            paddingLeft: 'max(24px, calc((100vw - 1200px) / 2 + 24px))',
            paddingRight: '60px',
            paddingTop: '80px',
            paddingBottom: '48px',
          }}
        >
          {/* Gold left border */}
          <div style={{
            position: 'absolute', left: 0, top: '20%', bottom: '20%',
            width: '4px',
            background: 'linear-gradient(180deg, transparent, #C9993A 35%, #C9993A 65%, transparent)',
          }} />

          {/* Association name */}
          <div style={{
            marginBottom: '32px',
            paddingBottom: '22px',
            borderBottom: '1px solid rgba(201,153,58,0.2)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '7px' }}>
              <div style={{ width: '20px', height: '1px', background: '#C9993A', flexShrink: 0 }} />
              <span style={{
                fontSize: '9px', fontWeight: 800, letterSpacing: '0.28em',
                textTransform: 'uppercase', color: '#C9993A',
              }}>
                Official Body
              </span>
            </div>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(12px, 1.05vw, 15px)',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.52)',
              lineHeight: 1.45,
              letterSpacing: '0.01em',
              margin: 0,
            }}>
              Association of Delta State Traditional<br />Council of Chiefs
            </p>
          </div>

          {/* Tag pill */}
          <span style={{
            display: 'inline-block', alignSelf: 'flex-start',
            fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em',
            textTransform: 'uppercase',
            padding: '6px 14px', marginBottom: '24px',
            background: 'rgba(201,153,58,0.14)',
            color: '#E8B84B',
            border: '1px solid rgba(201,153,58,0.35)',
            opacity: fading ? 0 : 1,
            transition: 'opacity 0.3s ease',
          }}>
            {slide.tag}
          </span>

          {/* Heading */}
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(28px, 2.6vw, 52px)',
            fontWeight: 700, color: '#fff', lineHeight: 1.1,
            marginBottom: '18px',
            opacity: fading ? 0 : 1, transition: 'opacity 0.3s ease',
          }}>
            {slide.heading}
          </h1>

          {/* Gold underline */}
          <div style={{
            width: '48px', height: '3px', background: '#C9993A',
            marginBottom: '18px',
            opacity: fading ? 0 : 1, transition: 'opacity 0.3s ease',
          }} />

          {/* Sub text */}
          <p style={{
            color: 'rgba(255,255,255,0.7)', fontSize: '14px',
            lineHeight: 1.85, marginBottom: '32px', maxWidth: '380px',
            opacity: fading ? 0 : 1, transition: 'opacity 0.3s ease',
          }}>
            {slide.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3" style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.3s ease' }}>
            <Link href={slide.cta.href} style={{
              display: 'inline-block', textDecoration: 'none',
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', padding: '13px 30px',
              background: 'linear-gradient(135deg, #C9993A, #E8B84B)',
              color: '#0F2554',
            }}>
              {slide.cta.label}
            </Link>
            <Link href={slide.cta2.href} style={{
              display: 'inline-block', textDecoration: 'none',
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', padding: '13px 30px',
              border: '1.5px solid rgba(255,255,255,0.3)', color: '#fff',
            }}>
              {slide.cta2.label}
            </Link>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3" style={{ marginTop: '48px' }}>
            <button
              onClick={() => goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
              aria-label="Previous"
              style={{
                width: '38px', height: '38px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(201,153,58,0.4)',
                color: '#C9993A', fontSize: '22px', cursor: 'pointer',
              }}
            >‹</button>

            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} style={{
                  width: i === current ? '28px' : '8px', height: '8px',
                  borderRadius: i === current ? '4px' : '50%',
                  background: i === current ? '#C9993A' : 'rgba(255,255,255,0.25)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'all 0.3s ease',
                }} />
              ))}
            </div>

            <button
              onClick={() => goTo((current + 1) % HERO_SLIDES.length)}
              aria-label="Next"
              style={{
                width: '38px', height: '38px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(201,153,58,0.4)',
                color: '#C9993A', fontSize: '22px', cursor: 'pointer',
              }}
            >›</button>

            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px', marginLeft: '6px', fontFamily: 'Cormorant Garamond, serif' }}>
              {String(current + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Right image panel — hover reveals full image via object-contain + bg color */}
        <div className="flex-1 relative overflow-hidden hero-right-panel" style={{ minHeight: '95vh' }}>
          {HERO_SLIDES.map((s, i) => (
            <div
              key={i}
              className="hero-img-wrapper"
              style={{
                position: 'absolute',
                inset: 0,
                opacity: i === current ? 1 : 0,
                transition: 'opacity 0.6s ease',
                backgroundColor: SLIDE_PANELS[i % SLIDE_PANELS.length].bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {/* Cover layer — shown by default, hidden on hover */}
              <Image
                src={s.img}
                alt={s.heading}
                fill
                priority={i === 0}
                className="hero-slide-cover"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  transition: 'opacity 0.35s ease',
                }}
              />
              {/* Contain layer — hidden by default, shown on hover. Uses next/image with known dimensions via fill+contain trick */}
              <div
                className="hero-slide-contain-wrap"
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.35s ease',
                  zIndex: 2,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt={s.heading}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          ))}

          {/* Slide counter badge */}
          <div style={{
            position: 'absolute', bottom: '24px', right: '24px', zIndex: 10,
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            background: 'rgba(0,0,0,0.45)',
            border: '1px solid rgba(201,153,58,0.5)',
            padding: '10px 16px',
            backdropFilter: 'blur(6px)',
          }}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '30px', fontWeight: 700, color: '#C9993A', lineHeight: 1 }}>
              {String(current + 1).padStart(2, '0')}
            </span>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.12em' }}>
              / {String(HERO_SLIDES.length).padStart(2, '0')}
            </span>
          </div>

          {/* Hover styles */}
          <style>{`
            .hero-img-wrapper:hover .hero-slide-cover {
              opacity: 0 !important;
            }
            .hero-img-wrapper:hover .hero-slide-contain-wrap {
              opacity: 1 !important;
            }
          `}</style>
        </div>
      </div>

      {/* ══ MOBILE ══ */}
      <div className="flex flex-col md:hidden">
        <div style={{ background: panelBg, transition: 'background 0.5s ease', paddingTop: '80px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '28px 20px 28px' }}>

            {/* Association name — mobile */}
            <div style={{
              marginBottom: '20px',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(201,153,58,0.2)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <div style={{ width: '16px', height: '1px', background: '#C9993A', flexShrink: 0 }} />
                <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#C9993A' }}>
                  Official Body
                </span>
              </div>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '13px', fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.4, margin: 0,
              }}>
                Association of Delta State Traditional Council of Chiefs
              </p>
            </div>

            <span style={{
              display: 'inline-block', fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '5px 12px', marginBottom: '16px',
              background: 'rgba(201,153,58,0.14)', color: '#E8B84B',
              border: '1px solid rgba(201,153,58,0.35)',
            }}>
              {slide.tag}
            </span>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(26px, 7.5vw, 40px)',
              fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: '12px',
            }}>
              {slide.heading}
            </h1>
            <div style={{ width: '40px', height: '3px', background: '#C9993A', marginBottom: '14px' }} />
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.8, marginBottom: '24px' }}>
              {slide.sub}
            </p>
            <div className="flex flex-wrap gap-3" style={{ marginBottom: '28px' }}>
              <Link href={slide.cta.href} style={{
                display: 'inline-block', textDecoration: 'none',
                fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', padding: '12px 24px',
                background: 'linear-gradient(135deg, #C9993A, #E8B84B)', color: '#0F2554',
              }}>
                {slide.cta.label}
              </Link>
              <Link href={slide.cta2.href} style={{
                display: 'inline-block', textDecoration: 'none',
                fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', padding: '12px 24px',
                border: '1.5px solid rgba(255,255,255,0.3)', color: '#fff',
              }}>
                {slide.cta2.label}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)} aria-label="Previous" style={{
                width: '32px', height: '32px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(201,153,58,0.4)',
                color: '#C9993A', fontSize: '18px', cursor: 'pointer',
              }}>‹</button>
              {HERO_SLIDES.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} style={{
                  width: i === current ? '22px' : '7px', height: '7px',
                  borderRadius: i === current ? '3px' : '50%',
                  background: i === current ? '#C9993A' : 'rgba(255,255,255,0.25)',
                  border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s',
                }} />
              ))}
              <button onClick={() => goTo((current + 1) % HERO_SLIDES.length)} aria-label="Next" style={{
                width: '32px', height: '32px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(201,153,58,0.4)',
                color: '#C9993A', fontSize: '18px', cursor: 'pointer',
              }}>›</button>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', width: '100%', height: '90vh' }}>
          {HERO_SLIDES.map((s, i) => (
            <Image key={i} src={s.img} alt={s.heading} fill priority={i === 0} style={{
              objectFit: 'cover', objectPosition: 'center top',
              opacity: i === current ? 1 : 0, transition: 'opacity 0.5s ease',
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TICKER ───────────────────────────────────────────────────────────────────

function NewsTicker() {
  const fullText = TICKER_ITEMS.join('     ◆     ');
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', overflow: 'hidden', background: '#08183A', borderBottom: '3px solid #C9993A' }}>
      <div style={{
        flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '10px 20px', background: '#C9993A', color: '#08183A',
        fontSize: '10px', fontWeight: 800, letterSpacing: '0.22em',
        textTransform: 'uppercase', whiteSpace: 'nowrap', minWidth: '120px',
      }}>
        Latest News
      </div>
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'center', padding: '10px 0' }}>
        <span style={{
          whiteSpace: 'nowrap', fontSize: '13px',
          color: 'rgba(255,255,255,0.8)',
          display: 'inline-block',
          paddingLeft: '100%',
          animation: 'marquee 55s linear infinite',
        }}>
          {fullText}
        </span>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-100%); } }`}</style>
    </div>
  );
}

// ─── PARTNERS SECTION ─────────────────────────────────────────────────────────

function PartnersSection() {
  return (
    <section style={{ background: '#F8F7F2', borderBottom: '1px solid #E2DDD0', padding: '52px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C9993A' }} />
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9993A' }}>
              Official Partners
            </span>
            <div style={{ width: '40px', height: '1px', background: '#C9993A' }} />
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#0F2554', lineHeight: 1.2 }}>
            Institutions That Back Our Mission
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {PARTNERS.map((p) => (
            <a key={p.short} href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  background: '#fff', border: '1px solid #E2DDD0',
                  borderTop: `4px solid ${p.color}`,
                  padding: '28px 20px 24px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  textAlign: 'center', gap: '14px',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                  cursor: 'pointer', height: '100%',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(15,37,84,0.12)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  position: 'relative', width: '72px', height: '72px', flexShrink: 0,
                  background: '#fff', borderRadius: '4px', padding: '6px', boxSizing: 'border-box',
                }}>
                  <Image src={p.logo} alt={`${p.short} logo`} fill style={{ objectFit: 'contain', padding: '4px' }} />
                </div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 700, color: p.color, lineHeight: 1 }}>
                  {p.short}
                </div>
                <div style={{ fontSize: '12px', color: '#7A7A7A', lineHeight: 1.5, maxWidth: '180px' }}>{p.name}</div>
                <div style={{ marginTop: 'auto', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9993A', borderTop: '1px solid #F0EFE8', width: '100%', textAlign: 'center', paddingTop: '12px' }}>
                  Official Website ↗
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── VIDEO CARD ───────────────────────────────────────────────────────────────

function VideoCard({ src, title, views, poster }: { src: string; title: string; views: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  const onEnded = () => setPlaying(false);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    v.currentTime = pct * v.duration;
  };

  return (
    <div style={{ overflow: 'hidden', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,153,58,0.18)' }}>
      <div style={{ position: 'relative', overflow: 'hidden', height: '210px', background: '#000', cursor: 'pointer' }} onClick={togglePlay}>
        <video ref={videoRef} src={src} poster={poster} preload="metadata" onTimeUpdate={onTimeUpdate} onEnded={onEnded} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {!playing && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,24,58,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(201,153,58,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
              <div style={{ width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '20px solid #fff', marginLeft: '5px' }} />
            </div>
          </div>
        )}
        {playing && (
          <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.55)', borderRadius: '4px', padding: '4px 8px', display: 'flex', alignItems: 'center', gap: '3px', cursor: 'pointer' }}>
            <div style={{ width: '3px', height: '12px', background: '#fff', borderRadius: '1px' }} />
            <div style={{ width: '3px', height: '12px', background: '#fff', borderRadius: '1px' }} />
          </div>
        )}
      </div>
      <div onClick={seek} style={{ width: '100%', height: '3px', background: 'rgba(255,255,255,0.1)', cursor: 'pointer' }}>
        <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #C9993A, #E8B84B)', transition: 'width 0.1s linear' }} />
      </div>
      <div style={{ padding: '18px 20px 20px' }}>
        <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: 600, color: '#fff', lineHeight: 1.3, marginBottom: '6px' }}>{title}</h4>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>{views} views</div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div style={{ paddingTop: 0 }} className="overflow-x-hidden">

      <HeroSlider />
      <NewsTicker />

      {/* ── STATS BAR ── */}
      <section style={{ background: '#F0EFE8', borderBottom: '1px solid #E2DDD0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} className="stats-grid">
            {IMPACT_STATS.map((stat, i) => (
              <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px 16px', textAlign: 'center', borderRight: i < 3 ? '1px solid #E2DDD0' : 'none' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#1B3A7A', lineHeight: 1, marginBottom: '6px' }}>
                  {stat.number}
                </span>
                <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A7A7A' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .stats-grid > div:nth-child(2) { border-right: none !important; }
            .stats-grid > div:nth-child(1),
            .stats-grid > div:nth-child(2) { border-bottom: 1px solid #E2DDD0; }
          }
        `}</style>
      </section>

      <PartnersSection />

      {/* ── ABOUT ── */}
      <section style={{ background: '#fff', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '72px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ overflow: 'hidden', position: 'relative', height: '440px' }}>
              <Image src="/assets/images/adestracc-img-chiefs4.jpg" alt="ADESTRACC Chiefs" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 32px 28px', background: 'linear-gradient(0deg, rgba(15,37,84,0.82) 0%, transparent 60%)', zIndex: 1 }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '56px', fontWeight: 700, color: '#E8B84B', lineHeight: 1 }}>2020</div>
                <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Founded · Serving Delta State</div>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '-12px', right: '-12px', width: '72%', height: '72%', border: '2px solid #C9993A', opacity: 0.35, zIndex: -1 }} />
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '112px', height: '112px', background: '#0F2554', border: '2px solid #C9993A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.18)' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '34px', fontWeight: 700, color: '#C9993A', lineHeight: 1 }}>25</span>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginTop: '4px', lineHeight: 1.4, padding: '0 8px' }}>LGAs<br />Represented</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#C9993A', marginBottom: '12px' }}>Who We Are</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 700, color: '#0F2554', lineHeight: 1.1, marginBottom: '20px' }}>
              Voice of Delta State's<br /><em style={{ color: '#8B1A2E', fontStyle: 'italic' }}>Gazetted Chiefs</em>
            </h2>
            <div style={{ width: '48px', height: '3px', background: '#C9993A', marginBottom: '24px' }} />
            <p style={{ color: '#4A4A4A', fontSize: '15px', lineHeight: '1.9', marginBottom: '16px' }}>
              ADESTRACC is the official unified body representing gazetted chiefs across all ethnic groups in Delta State. We stand as custodians of our ancestors' values while championing modern opportunities that empower our communities.
            </p>
            <p style={{ color: '#4A4A4A', fontSize: '15px', lineHeight: '1.9', marginBottom: '36px' }}>
              Through tradition, culture, tourism, and creativity, we promote peace, unity, and sustainable community development — showcasing the beauty of Delta State to the world.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '36px' }}>
              {['Cultural Preservation', 'Tourism Promotion', 'Grassroots Development', 'Pan-Ethnic Unity'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 500, color: '#1B3A7A' }}>
                  <span style={{ color: '#C9993A', fontSize: '12px', flexShrink: 0 }}>◆</span>{f}
                </div>
              ))}
            </div>
            <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1B3A7A', borderBottom: '2px solid #C9993A', paddingBottom: '4px', textDecoration: 'none' }}>
              Read Our Full Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section style={{ background: '#F8F7F2', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#C9993A', marginBottom: '10px' }}>Latest</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 700, color: '#0F2554' }}>News & Updates</h2>
            </div>
            <Link href="/our-impact" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1B3A7A', borderBottom: '2px solid #C9993A', paddingBottom: '2px', textDecoration: 'none' }}>View All →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '20px' }} className="news-grid">
            <article style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', height: '440px' }} className="news-featured">
              <Image src={NEWS_ITEMS[0].img} alt={NEWS_ITEMS[0].title} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} className="news-img-zoom" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(15,37,84,0.92) 0%, rgba(15,37,84,0.1) 55%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '36px', zIndex: 1 }}>
                <span style={{ display: 'inline-block', fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 12px', marginBottom: '12px', background: '#8B1A2E', color: '#fff' }}>{NEWS_ITEMS[0].category}</span>
                <div style={{ fontSize: '11px', color: '#C9993A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>{NEWS_ITEMS[0].date}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: '10px' }}>{NEWS_ITEMS[0].title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{NEWS_ITEMS[0].excerpt}</p>
                <div style={{ marginTop: '16px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Read More →</div>
              </div>
            </article>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {NEWS_ITEMS.slice(1).map((n, i) => (
                <article key={i} style={{ display: 'flex', cursor: 'pointer', overflow: 'hidden', background: '#fff', border: '1px solid #E2DDD0', borderTop: '3px solid #1B3A7A' }} className="news-card">
                  <div style={{ position: 'relative', flexShrink: 0, width: '100px', minHeight: '110px', overflow: 'hidden' }}>
                    <Image src={n.img} alt={n.title} fill style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} className="news-img-zoom" />
                  </div>
                  <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '3px 8px', background: '#F0EFE8', color: '#1B3A7A' }}>{n.category}</span>
                      <span style={{ fontSize: '11px', color: '#C9993A', fontWeight: 500 }}>{n.date}</span>
                    </div>
                    <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '15px', fontWeight: 600, color: '#0F2554', lineHeight: 1.35, marginBottom: '4px' }}>{n.title}</h4>
                    <p style={{ fontSize: '12px', color: '#7A7A7A', lineHeight: 1.6, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{n.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .news-img-zoom:hover { transform: scale(1.05) !important; }
          @media (max-width: 768px) {
            .news-grid { grid-template-columns: 1fr !important; }
            .news-featured { height: 300px !important; }
          }
        `}</style>
      </section>

      {/* ── EVENTS + GALLERY ── */}
      <section style={{ background: '#fff', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '56px' }}>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#C9993A', marginBottom: '10px' }}>Calendar</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 700, color: '#0F2554', marginBottom: '32px' }}>Upcoming Events</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {EVENTS.map((ev, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'stretch', cursor: 'pointer', border: '1px solid #E2DDD0', background: '#FAFAF7', overflow: 'hidden' }}>
                  <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '14px 16px', textAlign: 'center', background: i === 0 ? '#0F2554' : '#1B3A7A', minWidth: '70px' }}>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{ev.day}</span>
                    <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.65)', marginTop: '2px', letterSpacing: '0.12em' }}>{ev.month}</span>
                    <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>{ev.year}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '12px 16px' }}>
                    <span style={{ display: 'inline-block', alignSelf: 'flex-start', fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '3px 8px', marginBottom: '6px', background: 'rgba(201,153,58,0.12)', color: '#C9993A' }}>{ev.type}</span>
                    <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px', fontWeight: 600, color: '#0F2554', lineHeight: 1.3, marginBottom: '4px' }}>{ev.title}</h4>
                    <div style={{ fontSize: '12px', color: '#7A7A7A' }}>📍 {ev.location}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/events" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '24px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1B3A7A', borderBottom: '2px solid #C9993A', paddingBottom: '3px', textDecoration: 'none' }}>
              View All Events →
            </Link>
          </div>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#C9993A', marginBottom: '10px' }}>Gallery</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 700, color: '#0F2554', marginBottom: '32px' }}>Heritage in Focus</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto', gap: '8px', height: '360px' }}>
              {GALLERY_IMAGES.map((img, i) => (
                <div key={i} className={`relative overflow-hidden cursor-pointer group ${img.span}`} style={{ position: 'relative', overflow: 'hidden' }}>
                  <Image src={img.img} alt={img.label} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} className="gallery-img" />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,37,84,0)', transition: 'background 0.3s ease' }} className="gallery-overlay" />
                  <div style={{ position: 'absolute', bottom: '8px', left: '8px', right: '8px', zIndex: 2, opacity: 0, transition: 'opacity 0.3s ease' }} className="gallery-label">
                    <div style={{ color: '#fff', fontSize: '11px', fontWeight: 600 }}>{img.label}</div>
                    <div style={{ width: '20px', height: '2px', background: '#C9993A', marginTop: '4px' }} />
                  </div>
                </div>
              ))}
            </div>
            <Link href="/gallery" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '24px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1B3A7A', borderBottom: '2px solid #C9993A', paddingBottom: '3px', textDecoration: 'none' }}>
              View Full Gallery →
            </Link>
          </div>
        </div>
        <style>{`
          .gallery-img { transition: transform 0.5s ease !important; }
          .group:hover .gallery-img { transform: scale(1.08) !important; }
          .group:hover .gallery-overlay { background: rgba(15,37,84,0.55) !important; }
          .group:hover .gallery-label { opacity: 1 !important; }
        `}</style>
      </section>

      {/* ── VIDEOS ── */}
      <section style={{ background: '#08183A', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201,153,58,0.02) 80px, rgba(201,153,58,0.02) 81px)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#C9993A', marginBottom: '10px' }}>Watch & Listen</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 700, color: '#fff' }}>Stories From Our Chiefs</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {VIDEO_ITEMS.map((v, i) => (
              <VideoCard key={i} src={v.src} title={v.title} views={v.views} poster={v.poster} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ position: 'relative', padding: '96px 24px', textAlign: 'center', overflow: 'hidden' }}>
        <Image src="/assets/images/adestracc-img-chiefs5.jpg" alt="Chiefs gathering" fill style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(135deg, rgba(139,26,46,0.94) 0%, rgba(90,10,22,0.97) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 41px)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '24px' }}>
            <div style={{ height: '1px', width: '64px', background: 'rgba(255,255,255,0.25)' }} />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px' }}>◆</span>
            <div style={{ height: '1px', width: '64px', background: 'rgba(255,255,255,0.25)' }} />
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px, 4vw, 52px)', fontWeight: 700, color: '#fff', marginBottom: '16px', lineHeight: 1.15 }}>
            Together, We Build a Stronger Future
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '15px', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto 40px' }}>
            Join ADESTRACC in preserving Delta State's rich heritage and driving sustainable grassroots development across all communities.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <Link href="/contact" style={{ display: 'inline-block', textDecoration: 'none', fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '16px 48px', background: 'linear-gradient(135deg, #C9993A, #E8B84B)', color: '#0F2554' }}>
              Connect With Us
            </Link>
            <Link href="/about" style={{ display: 'inline-block', textDecoration: 'none', fontSize: '11px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '16px 48px', border: '1.5px solid rgba(255,255,255,0.32)', color: '#fff' }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
