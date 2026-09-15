import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import OrbisLogo from './OrbisLogo';

const NAV_LINKS = [
  { name: 'Home',     href: '#home'     },
  { name: 'About',    href: '#about'    },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog',     href: '#blog'     },
  { name: 'Contact',  href: '#contact'  },
];

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeLink, setActiveLink]     = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position:   'fixed',
        top:        0,
        left:       0,
        width:      '100%',
        zIndex:     100,
        transition: 'all 0.35s ease',
        background: scrolled
          ? 'rgba(4,7,13,0.88)'
          : 'linear-gradient(180deg,rgba(4,7,13,0.7) 0%,rgba(4,7,13,0) 100%)',
        backdropFilter:  scrolled ? 'blur(18px) saturate(1.3)' : 'blur(2px)',
        borderBottom:    scrolled ? '1px solid rgba(56,189,248,0.14)' : 'none',
        padding:         scrolled ? '0.7rem 0' : '1.15rem 0',
      }}
    >
      <div
        className="container"
        style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem' }}
      >
        {/* ── Brand ──────────────────────────────────────────────────── */}
        <a
          href="#home"
          onClick={() => setActiveLink('#home')}
          style={{
            display:        'flex',
            alignItems:     'center',
            gap:            '0.7rem',
            textDecoration: 'none',
            flexShrink:     0,
          }}
        >
          {/* Canonical ORBIS logo — same component used in Footer */}
          <OrbisLogo size={34} glow={true} color="#00f0ff" />

          <span
            style={{
              fontFamily:  'var(--font-display)',
              fontSize:    '1.32rem',
              fontWeight:  '700',
              letterSpacing:'0.24em',
              color:       '#ffffff',
              textTransform:'uppercase',
            }}
          >
            ORBIS
          </span>
        </a>

        {/* ── Desktop nav links ───────────────────────────────────────── */}
        <nav className="desktop-nav" style={{ display:'none', gap:'1.9rem', alignItems:'center' }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              style={{
                color:          activeLink === link.href ? '#00f0ff' : 'rgba(255,255,255,0.78)',
                textDecoration: 'none',
                fontSize:       '0.9rem',
                fontWeight:     activeLink === link.href ? '600' : '400',
                letterSpacing:  '0.02em',
                transition:     'color 0.2s ease',
                position:       'relative',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = activeLink === link.href ? '#00f0ff' : 'rgba(255,255,255,0.78)'}
            >
              {link.name}
              {activeLink === link.href && (
                <span
                  style={{
                    position:   'absolute',
                    bottom:     '-4px',
                    left:       '0',
                    width:      '100%',
                    height:     '2px',
                    background: '#00f0ff',
                    borderRadius:'1px',
                    boxShadow:  '0 0 8px #00f0ff',
                  }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* ── Let's Talk CTA ─────────────────────────────────────────── */}
        <button
          onClick={onOpenContact}
          className="btn-nav desktop-nav"
          style={{ display: 'none' }}
        >
          Let's Talk <ArrowRight size={14} style={{ strokeWidth: 2.5 }} />
        </button>

        {/* ── Mobile hamburger ───────────────────────────────────────── */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          style={{
            background: 'transparent',
            border:     'none',
            color:      '#fff',
            cursor:     'pointer',
            padding:    '0.3rem',
          }}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ── Mobile menu drawer ─────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          style={{
            position:     'absolute',
            top:          '100%',
            left:         0,
            width:        '100%',
            background:   'rgba(4,7,13,0.97)',
            backdropFilter:'blur(20px)',
            borderBottom: '1px solid rgba(56,189,248,0.18)',
            padding:      '1.5rem 2rem',
            display:      'flex',
            flexDirection:'column',
            gap:          '1.2rem',
          }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => { setActiveLink(link.href); setMobileOpen(false); }}
              style={{
                color:          '#fff',
                textDecoration: 'none',
                fontSize:       '1.05rem',
                fontWeight:     '500',
              }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { setMobileOpen(false); onOpenContact(); }}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
          >
            Let's Talk <ArrowRight size={16} />
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav  { display: flex !important; }
          .mobile-toggle{ display: none  !important; }
        }
      `}</style>
    </header>
  );
}
