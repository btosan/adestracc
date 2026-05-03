'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, UserPlus, Shield } from 'lucide-react';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', secretKey: '' });
  const [showPw, setShowPw]           = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError]             = useState('');
  const [loading, setLoading]         = useState(false);
  const router = useRouter();

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (form.password !== form.confirmPassword) { setError('Passwords do not match.'); return; }
    if (form.password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/admin/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password, secretKey: form.secretKey }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Registration failed.'); setLoading(false); return; }
      router.push('/admin/login?registered=1');
    } catch {
      setError('Network error. Please try again.');
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px', border: '1.5px solid #D9D3C7',
    borderRadius: '10px', fontSize: '14px', fontFamily: 'inherit',
    outline: 'none', color: '#2D2D2D', transition: 'border-color 0.2s',
  };
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '11px', fontWeight: 700,
    letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6B6B6B', marginBottom: '7px',
  };
  const focus = (e: React.FocusEvent<HTMLInputElement>) => e.target.style.borderColor = '#1B3A7A';
  const blur  = (e: React.FocusEvent<HTMLInputElement>) => e.target.style.borderColor = '#D9D3C7';

  return (
    <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, #0F2447 0%, #1B3A7A 60%, #2B5099 100%)',
        padding: '24px', position: 'relative', overflow: 'hidden',
      }}
      className='pt-36 mt-36 md:mt-0 md:pt-0'
    >
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,153,58,0.04) 40px, rgba(201,153,58,0.04) 41px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #C9993A, transparent)' }} />

      <div style={{ background: '#fff', borderRadius: '20px', padding: '48px 44px', width: '100%', maxWidth: '480px', boxShadow: '0 32px 80px rgba(0,0,0,0.35)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', width: '40px', height: '40px', background: 'linear-gradient(135deg, #1B3A7A, #2B5099)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(27,58,122,0.4)' }}>
          <Shield size={18} color="#C9993A" />
        </div>

        <div style={{ textAlign: 'center', marginBottom: '32px', marginTop: '8px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: 700, color: '#0F2447', marginBottom: '6px' }}>Create Admin Account</h2>
          <p style={{ fontSize: '13px', color: '#6B6B6B' }}>Requires the admin secret key to proceed</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Full Name</label>
            <input type="text" value={form.name} onChange={set('name')} required placeholder="e.g. Amaka Olomu" style={inputStyle} onFocus={focus} onBlur={blur} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Email Address</label>
            <input type="email" value={form.email} onChange={set('email')} required placeholder="admin@adestracc.org.ng" style={inputStyle} onFocus={focus} onBlur={blur} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Password</label>
            <div style={{ position: 'relative' }}>
              <input type={showPw ? 'text' : 'password'} value={form.password} onChange={set('password')} required placeholder="Min. 8 characters" style={{ ...inputStyle, paddingRight: '44px' }} onFocus={focus} onBlur={blur} />
              <button type="button" onClick={() => setShowPw(!showPw)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#6B6B6B', display: 'flex' }}>
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Confirm Password</label>
            <div style={{ position: 'relative' }}>
              <input type={showConfirm ? 'text' : 'password'} value={form.confirmPassword} onChange={set('confirmPassword')} required placeholder="Repeat password" style={{ ...inputStyle, paddingRight: '44px' }} onFocus={focus} onBlur={blur} />
              <button type="button" onClick={() => setShowConfirm(!showConfirm)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#6B6B6B', display: 'flex' }}>
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={labelStyle}>Admin Secret Key</label>
            <input type="password" value={form.secretKey} onChange={set('secretKey')} required placeholder="Provided by super admin" style={inputStyle} onFocus={focus} onBlur={blur} />
            <p style={{ fontSize: '11px', color: '#6B6B6B', marginTop: '5px' }}>Contact the super admin for the registration key.</p>
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
              <><div style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid #fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />Creating account...</>
            ) : (
              <><UserPlus size={16} />Create Account</>
            )}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '13px', color: '#6B6B6B' }}>
          Already have an account?{' '}
          <Link href="/admin/login" style={{ color: '#1B3A7A', fontWeight: 700, textDecoration: 'none' }}>Sign in</Link>
        </p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}