/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--royal-blue-dark)] text-white">
      {/* Gold top border */}
      <div className="h-1 bg-gradient-to-r from-[var(--crimson)] via-[var(--gold)] to-[var(--crimson)]" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-[var(--royal-blue)] flex items-center justify-center border-2 border-[var(--gold)]">
                <span className="font-display text-white font-bold">AD</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg text-[var(--gold-bright)]">ADESTRACC</div>
                <div className="text-xs text-white/60 tracking-wider">SINCE 2000</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm font-cormorant text-base">
              The official unified body of gazetted chiefs representing all ethnic groups across Delta State, 
              committed to preserving rich cultural heritage and strengthening grassroots social stability.
            </p>
            <div className="mt-6 flex gap-3">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[var(--gold)] flex items-center justify-center text-xs transition-colors capitalize font-bold"
                  title={s}
                >
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-[var(--gold-bright)] text-sm tracking-widest mb-5">QUICK LINKS</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/our-impact', label: 'Our Impact' },
                { href: '/our-process', label: 'Our Process' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/70 hover:text-[var(--gold-bright)] text-sm transition-colors flex items-center gap-2">
                    <span className="w-4 h-px bg-[var(--gold)]/50" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-[var(--gold-bright)] text-sm tracking-widest mb-5">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={15} className="mt-0.5 text-[var(--gold)] shrink-0" />
                <span>Delta State Secretariat, Asaba, Delta State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone size={15} className="text-[var(--gold)] shrink-0" />
                <a href="tel:+2347039223978" className="hover:text-[var(--gold-bright)]">+234 703 922 3978</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={15} className="text-[var(--gold)] shrink-0" />
                <a href="mailto:info@adestracc.org" className="hover:text-[var(--gold-bright)]">info@adestracc.org</a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-[10px] text-white/40 tracking-widest mb-3">OUR PARTNERS</p>
              <div className="flex flex-col gap-1.5">
                {['NDDC', 'Fed. Ministry of Arts, Culture & Tourism', 'NOA', 'INEC'].map((p) => (
                  <span key={p} className="text-xs text-white/60 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} ADESTRACC. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Uniting Delta's gazetted chiefs — Advancing grassroots peace & stability
          </p>
        </div>
      </div>
    </footer>
  );
}
