/* eslint-disable react/no-unescaped-entities */
'use client';
import Link from 'next/link';

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Community Identification & Assessment',
    color: 'var(--royal-blue)',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80',
    desc: 'Our teams work across all 25 LGAs to identify communities with urgent cultural, social, or developmental needs. We consult with local chiefs, elders, and community leaders to understand the unique context and history of each area.',
    activities: ['Field assessment in all 25 LGAs', 'Chief and elder consultations', 'Community needs survey', 'Cultural asset mapping'],
  },
  {
    num: '02',
    title: 'Stakeholder Engagement & Consensus Building',
    color: 'var(--gold)',
    img: 'https://images.unsplash.com/photo-1612538498456-e861df91d474?w=500&q=80',
    desc: 'We convene all relevant stakeholders — traditional rulers, government representatives, community organizations, and federal partners — to build consensus and co-design appropriate interventions.',
    activities: ['Multi-stakeholder forums', 'Inter-ethnic dialogue sessions', 'Government liaison meetings', 'Federal partner briefings'],
  },
  {
    num: '03',
    title: 'Program Design & Resource Mobilization',
    color: 'var(--crimson)',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80',
    desc: 'Based on community assessment and stakeholder consensus, ADESTRACC designs targeted programs and works to mobilize resources from government agencies, NGOs, and development partners for implementation.',
    activities: ['Evidence-based program design', 'Funding proposals to NDDC & partners', 'Volunteer recruitment', 'Budget planning & approvals'],
  },
  {
    num: '04',
    title: 'Implementation & Community Mobilization',
    color: '#5A8040',
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=80',
    desc: 'Programs are rolled out with direct community participation. Traditional institutions serve as the backbone of implementation, ensuring cultural sensitivity and maximum community buy-in at every stage.',
    activities: ['Chief-led mobilization campaigns', 'Community volunteer coordination', 'Youth engagement drives', 'Media and communication strategy'],
  },
  {
    num: '05',
    title: 'Monitoring, Evaluation & Documentation',
    color: '#2A7A5A',
    img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&q=80',
    desc: 'ADESTRACC maintains rigorous monitoring frameworks to track the effectiveness of every initiative. We document outcomes, capture learnings, and share knowledge across communities for continuous improvement.',
    activities: ['Field monitoring visits', 'Beneficiary feedback collection', 'Impact report production', 'Digital documentation archive'],
  },
  {
    num: '06',
    title: 'Sustainability & Knowledge Transfer',
    color: '#6A4A8A',
    img: 'https://images.unsplash.com/photo-1551038247-3d935814b429?w=500&q=80',
    desc: 'Every initiative is designed for long-term sustainability. We build local capacity, establish community ownership structures, and ensure that programs continue to deliver value long after initial implementation.',
    activities: ['Capacity building workshops', 'Community ownership structures', 'Documentation and toolkits', 'Alumni network support'],
  },
];

const HOW_WE_WORK = [
  { title: 'Traditional Authority', desc: 'We leverage the moral authority and community trust of gazetted chiefs to drive change that government institutions alone cannot achieve.' },
  { title: 'Federal Alignment', desc: 'All programs are aligned with national development priorities through our partnerships with NDDC, NOA, INEC, and the Federal Ministry.' },
  { title: 'Ethnic Inclusivity', desc: 'No single ethnic group dominates. We ensure equitable representation and benefit-sharing across all of Delta State\'s 36+ ethnic nationalities.' },
  { title: 'Evidence-Based Approach', desc: 'Decisions are grounded in community data, stakeholder feedback, and documented outcomes from past initiatives.' },
];

export default function ProcessPage() {
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
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1800&q=85"
          alt="Community process Delta State"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(15,37,84,0.90) 0%, rgba(27,58,122,0.86) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,153,58,0.04) 40px, rgba(201,153,58,0.04) 41px)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '16px' }}>How We Operate</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(38px, 5vw, 64px)', color: '#fff', fontWeight: 700, marginBottom: '20px', lineHeight: 1.1 }}>
            Our <span style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Process</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.8 }}>
            A structured, community-centred approach to driving lasting cultural preservation and grassroots development across Delta State.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--ivory-dark)', padding: '14px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', fontSize: '12px', color: 'var(--text-light)' }}>
          <Link href="/" style={{ color: 'var(--royal-blue)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span>Our Process</span>
        </div>
      </div>

      {/* Philosophy — split layout with photo */}
      <section style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '72px', alignItems: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Our Philosophy</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 40px)', color: 'var(--royal-blue-deep)', fontWeight: 700, marginBottom: '32px' }}>
              Change That Starts<br />From Within Communities
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: 2, marginBottom: '20px' }}>
              At ADESTRACC, we believe that sustainable development cannot be imposed from outside — it must emerge from within the communities themselves. Our approach places traditional institutions at the centre of every initiative, ensuring that local knowledge, cultural values, and community trust drive every program we undertake.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: 2 }}>
              We serve as the bridge between federal resources and grassroots communities — translating government programs into culturally appropriate actions that people actually embrace and sustain.
            </p>
          </div>
          {/* Photo */}
          <div style={{ borderRadius: '4px', overflow: 'hidden', height: '440px', position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
              alt="Community leaders in consultation"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Quote overlay */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(0deg, rgba(15,37,84,0.9) 0%, transparent 100%)',
              padding: '48px 28px 28px',
            }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', color: '#fff', fontStyle: 'italic', lineHeight: 1.5 }}>
                "Development must emerge from within the community itself."
              </p>
              <div style={{ width: '32px', height: '2px', background: 'var(--gold)', marginTop: '10px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section style={{ background: 'var(--ivory-dark)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Our Principles</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 40px)', color: 'var(--royal-blue-deep)', fontWeight: 700 }}>How We Work</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {HOW_WE_WORK.map((w, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: '2px',
                padding: '32px 28px',
                display: 'flex', flexDirection: 'column', gap: '12px',
              }}>
                <div style={{
                  width: '36px', height: '36px',
                  background: 'var(--royal-blue-deep)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold)',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 700, fontSize: '18px',
                }}>
                  {i + 1}
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', color: 'var(--royal-blue)', fontWeight: 700 }}>{w.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-light)', lineHeight: 1.7 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process — with thumbnail photos */}
      <section style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Step by Step</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--royal-blue-deep)', fontWeight: 700 }}>
            Our 6-Stage Framework
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '200px auto 1fr',
              gap: '0',
              alignItems: 'stretch',
              background: '#fff',
              border: '1px solid var(--border)',
              borderLeft: `5px solid ${step.color}`,
              borderRadius: '2px',
              overflow: 'hidden',
            }}>
              {/* Step photo */}
              <div style={{ overflow: 'hidden', minHeight: '180px' }}>
                <img
                  src={step.img}
                  alt={step.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              {/* Step number */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 24px',
                background: 'var(--ivory-dark)',
                borderRight: '1px solid var(--border)',
                minWidth: '80px',
              }}>
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '52px',
                  fontWeight: 700,
                  color: step.color,
                  lineHeight: 1,
                  opacity: 0.35,
                }}>
                  {step.num}
                </span>
              </div>
              {/* Content */}
              <div style={{ padding: '32px 36px' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', color: 'var(--royal-blue-deep)', fontWeight: 700, marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '20px' }}>{step.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {step.activities.map((a, j) => (
                    <span key={j} style={{
                      background: 'var(--ivory-dark)',
                      border: '1px solid var(--border)',
                      borderRadius: '2px',
                      padding: '5px 14px',
                      fontSize: '12px',
                      color: 'var(--text-mid)',
                      letterSpacing: '0.03em',
                    }}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — with background photo */}
      <section style={{
        position: 'relative',
        padding: '80px 24px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <img
          src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1600&q=80"
          alt="Delta State heritage"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,37,84,0.94) 0%, rgba(27,58,122,0.92) 100%)' }} />
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3vw, 40px)', color: '#fff', fontWeight: 700, marginBottom: '16px' }}>
            Want to Partner With Us?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: 1.8, marginBottom: '36px' }}>
            If your organization shares our commitment to cultural preservation and grassroots development, we welcome collaboration.
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
            Start a Conversation
          </Link>
        </div>
      </section>

    </div>
  );
}