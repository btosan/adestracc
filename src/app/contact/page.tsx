'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid var(--border)',
    borderRadius: '2px',
    fontSize: '14px',
    fontFamily: 'DM Sans, sans-serif',
    background: '#fff',
    color: 'var(--text-dark)',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: 'var(--text-mid)',
    marginBottom: '8px',
  };

  return (
    <div style={{ paddingTop: '65px' }}>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(160deg, #0F2554 0%, #1B3A7A 100%)',
        padding: '80px 24px 100px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,153,58,0.04) 40px, rgba(201,153,58,0.04) 41px)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '16px' }}>Reach Out</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(38px, 5vw, 64px)', color: '#fff', fontWeight: 700, marginBottom: '20px', lineHeight: 1.1 }}>
            Contact <span style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>ADESTRACC</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.8 }}>
            Whether you're a community leader, partner organization, media outlet, or concerned citizen — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--ivory-dark)', padding: '14px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', fontSize: '12px', color: 'var(--text-light)' }}>
          <Link href="/" style={{ color: 'var(--royal-blue)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span>Contact</span>
        </div>
      </div>

      {/* Contact Cards */}
      <section style={{ padding: '80px 24px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {[
            { icon: '📍', label: 'Our Address', lines: ['ADESTRACC Secretariat', 'Asaba, Delta State', 'Nigeria'] },
            { icon: '📞', label: 'Phone', lines: ['+234 800 000 0000', '+234 801 000 0000'] },
            { icon: '✉️', label: 'Email', lines: ['info@adestracc.org.ng', 'president@adestracc.org.ng'] },
            { icon: '🕐', label: 'Office Hours', lines: ['Monday – Friday', '8:00 AM – 5:00 PM WAT'] },
          ].map((card, i) => (
            <div key={i} style={{
              background: '#fff',
              border: '1px solid var(--border)',
              borderTop: '3px solid var(--gold)',
              padding: '28px 24px',
              borderRadius: '2px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{card.icon}</div>
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '10px' }}>{card.label}</div>
              {card.lines.map((line, j) => (
                <div key={j} style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: 1.8 }}>{line}</div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section style={{ padding: '60px 24px 100px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'start' }}>

          {/* Form */}
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Send a Message</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', color: 'var(--royal-blue-deep)', fontWeight: 700, marginBottom: '32px' }}>
              We'd Love to Hear From You
            </h2>

            {status === 'success' ? (
              <div style={{
                background: '#F0FDF4',
                border: '1px solid #86EFAC',
                borderLeft: '4px solid #22C55E',
                padding: '24px',
                borderRadius: '2px',
              }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', color: '#166534', fontWeight: 700, marginBottom: '8px' }}>Message Sent!</div>
                <p style={{ fontSize: '14px', color: '#166534' }}>Thank you for reaching out. Our team will respond within 2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      required placeholder="Your full name"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      name="email" value={form.email} onChange={handleChange}
                      required type="email" placeholder="your@email.com"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Subject *</label>
                    <select
                      name="subject" value={form.subject} onChange={handleChange}
                      required
                      style={{ ...inputStyle, appearance: 'none' }}
                    >
                      <option value="">Select subject</option>
                      <option value="partnership">Partnership Enquiry</option>
                      <option value="membership">Membership Information</option>
                      <option value="media">Media & Press</option>
                      <option value="event">Event Invitation</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    required placeholder="Write your message here..."
                    rows={6}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                  />
                </div>

                {status === 'error' && (
                  <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', padding: '12px 16px', borderRadius: '2px', marginBottom: '20px', fontSize: '13px', color: '#DC2626' }}>
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    background: 'linear-gradient(135deg, var(--royal-blue), var(--royal-blue-light))',
                    color: '#fff',
                    border: 'none',
                    padding: '16px 40px',
                    borderRadius: '2px',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    opacity: status === 'loading' ? 0.7 : 1,
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Other Ways to Connect</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', color: 'var(--royal-blue-deep)', fontWeight: 700, marginBottom: '28px' }}>
              Quick Contact Options
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              <a
                href="https://wa.me/2348000000000?text=Hello%20ADESTRACC"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  background: '#fff',
                  border: '1px solid var(--border)',
                  borderLeft: '4px solid #25D366',
                  padding: '20px 24px',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  transition: 'transform 0.2s',
                }}
              >
                <div style={{ width: '44px', height: '44px', background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '20px' }}>💬</span>
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '2px' }}>WhatsApp Us</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-light)' }}>+234 800 000 0000 · Usually replies within hours</div>
                </div>
              </a>

              <a
                href="tel:+2348000000000"
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  background: '#fff',
                  border: '1px solid var(--border)',
                  borderLeft: '4px solid var(--royal-blue)',
                  padding: '20px 24px',
                  borderRadius: '2px',
                  textDecoration: 'none',
                }}
              >
                <div style={{ width: '44px', height: '44px', background: 'var(--royal-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '20px', filter: 'invert(1)' }}>📞</span>
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '2px' }}>Call Directly</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-light)' }}>+234 800 000 0000 · Mon–Fri 8am–5pm</div>
                </div>
              </a>
            </div>

            {/* Map placeholder */}
            <div style={{
              height: '240px',
              background: 'linear-gradient(160deg, #1B3A7A, #0F2554)',
              borderRadius: '3px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              border: '1px solid var(--border)',
              gap: '12px',
            }}>
              <div style={{ fontSize: '36px' }}>📍</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', color: '#fff', fontWeight: 600 }}>Asaba, Delta State</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>ADESTRACC Secretariat</div>
              <a
                href="https://maps.google.com/?q=Asaba,+Delta+State,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: '8px',
                  padding: '8px 20px',
                  background: 'rgba(201,153,58,0.9)',
                  borderRadius: '2px',
                  color: 'var(--royal-blue-deep)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
