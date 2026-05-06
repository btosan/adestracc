import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--royal-blue-deep)',
      color: 'rgba(255,255,255,0.8)',
      borderTop: '3px solid var(--gold)',
    }}>
      {/* Pattern strip */}
      <div style={{
        height: '6px',
        background: 'repeating-linear-gradient(90deg, var(--gold) 0px, var(--gold) 20px, var(--crimson) 20px, var(--crimson) 40px, var(--royal-blue) 40px, var(--royal-blue) 60px)',
        opacity: 0.7,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px', marginBottom: '48px' }}>
          
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
              ADESTRACC
            </div>
            <div style={{ fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Association of Delta State Traditional Council of Chiefs
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', maxWidth: '260px' }}>
              Uniting gazetted chiefs across all ethnicities. Promoting grassroots stability through culture, tradition, tourism & creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', color: 'var(--gold)', marginBottom: '20px', fontWeight: 600 }}>
              Quick Links
            </h4>
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/our-impact', label: 'Our Impact' },
              { href: '/our-process', label: 'Our Process' },
              { href: '/contact', label: 'Contact' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '13px', marginBottom: '10px', transition: 'color 0.2s', letterSpacing: '0.03em' }}>
                → {l.label}
              </Link>
            ))}
          </div>

          {/* Partners */}
          <div>
            <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', color: 'var(--gold)', marginBottom: '20px', fontWeight: 600 }}>
              Our Partners
            </h4>
            {[
              'Federal Ministry of Arts, Culture, Tourism & Creative Economy',
              'Niger Delta Development Commission (NDDC)',
              'National Orientation Agency (NOA)',
              'Independent National Electoral Commission (INEC)',
            ].map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                <span style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }}>◆</span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{p}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', color: 'var(--gold)', marginBottom: '20px', fontWeight: 600 }}>
              Contact
            </h4>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 2 }}>
              <div>📍 Delta State, Nigeria</div>
              <div>📞 +234 703 922 3978</div>
              <div>✉️ info@adestracc.com</div>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
              {['Facebook', 'Twitter', 'Instagram'].map(s => (
                <div key={s} style={{
                  width: '32px', height: '32px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '11px', color: 'var(--gold)',
                  cursor: 'pointer',
                  border: '1px solid rgba(201,153,58,0.3)',
                }}>
                  {s[0]}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} ADESTRACC. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
            Preserving Heritage · Promoting Unity · Building Tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
}
