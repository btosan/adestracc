'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, LogIn, Shield } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw]     = useState(false);
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await signIn('credentials', { email, password, redirect: false });
    if (res?.ok) {
      router.push('/admin');
      router.refresh();
    } else {
      setError('Invalid email or password. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      background: 'linear-gradient(135deg, #0F2447 0%, #1B3A7A 60%, #2B5099 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,153,58,0.04) 40px, rgba(201,153,58,0.04) 41px), repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(201,153,58,0.04) 40px, rgba(201,153,58,0.04) 41px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #C9993A, transparent)' }} />

      {/* Left branding panel */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px', maxWidth: '520px' }} className="login-brand">
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            width: '64px', height: '64px',
            background: 'linear-gradient(135deg, #C9993A, #E8B84B)',
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '28px',
            color: '#0F2447', marginBottom: '24px',
          }}>A</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '40px', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
            ADESTRACC<br />
            <span style={{ color: '#C9993A', fontStyle: 'italic', fontWeight: 300 }}>Admin Portal</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.7 }}>
            Manage content, messages, gallery, news, and more for the Association of Delta State Traditional Council of Chiefs.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {['Manage gallery & videos', 'Publish news articles', 'View contact messages', 'Update impact stats'].map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9993A', flexShrink: 0 }} />
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px' }}>{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right form panel */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', flex: 1 }}>
        <div style={{
          background: '#fff', borderRadius: '20px', padding: '48px 44px',
          width: '100%', maxWidth: '440px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.35)', position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)',
            width: '40px', height: '40px', background: 'linear-gradient(135deg, #1B3A7A, #2B5099)',
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(27,58,122,0.4)',
          }}>
            <Shield size={18} color="#C9993A" />
          </div>

          <div style={{ textAlign: 'center', marginBottom: '32px', marginTop: '8px' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: 700, color: '#0F2447', marginBottom: '6px' }}>Sign In</h2>
            <p style={{ fontSize: '13px', color: '#6B6B6B' }}>Enter your admin credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6B6B6B', marginBottom: '7px' }}>
                Email Address
              </label>
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                required autoComplete="email" placeholder="admin@adestracc.org.ng"
                style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #D9D3C7', borderRadius: '10px', fontSize: '14px', fontFamily: 'inherit', outline: 'none', color: '#2D2D2D', transition: 'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor = '#1B3A7A'}
                onBlur={e => e.target.style.borderColor = '#D9D3C7'}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6B6B6B', marginBottom: '7px' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}
                  required autoComplete="current-password" placeholder="••••••••"
                  style={{ width: '100%', padding: '12px 44px 12px 14px', border: '1.5px solid #D9D3C7', borderRadius: '10px', fontSize: '14px', fontFamily: 'inherit', outline: 'none', color: '#2D2D2D', transition: 'border-color 0.2s' }}
                  onFocus={e => e.target.style.borderColor = '#1B3A7A'}
                  onBlur={e => e.target.style.borderColor = '#D9D3C7'}
                />
                <button type="button" onClick={() => setShowPw(!showPw)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#6B6B6B', display: 'flex', alignItems: 'center' }}>
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderLeft: '3px solid #DC2626', borderRadius: '8px', padding: '10px 14px', marginBottom: '18px', fontSize: '13px', color: '#DC2626' }}>
                {error}
              </div>
            )}

            <button type="submit" disabled={loading} style={{
              width: '100%', padding: '14px',
              background: loading ? '#9CA3AF' : 'linear-gradient(135deg, #1B3A7A, #2B5099)',
              color: '#fff', border: 'none', borderRadius: '9999px',
              fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}>
              {loading ? (
                <><div style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid #fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />Signing in...</>
              ) : (
                <><LogIn size={16} />Sign In</>
              )}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '13px', color: '#6B6B6B' }}>
            Need an admin account?{' '}
            <Link href="/admin/register" style={{ color: '#1B3A7A', fontWeight: 700, textDecoration: 'none' }}>Register here</Link>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) { .login-brand { display: none !important; } }
      `}</style>
    </div>
  );
}