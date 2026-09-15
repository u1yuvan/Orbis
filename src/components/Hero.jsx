import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import HeroCanvas from './HeroCanvas';

export default function Hero({ onOpenProjectWizard, onOpenShowreel }) {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '72px',
      }}
    >
      {/* ── Background Image ─────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/assets/hero_bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 28%',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      {/* ── Directional gradient vignette (left text readable, center image visible) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: `
            linear-gradient(
              to right,
              rgba(4,7,13,0.92) 0%,
              rgba(4,7,13,0.78) 25%,
              rgba(4,7,13,0.10) 46%,
              rgba(4,7,13,0.08) 58%,
              rgba(4,7,13,0.55) 78%,
              rgba(4,7,13,0.85) 100%
            ),
            linear-gradient(
              to bottom,
              rgba(4,7,13,0.60) 0%,
              rgba(4,7,13,0.00) 15%,
              rgba(4,7,13,0.00) 68%,
              rgba(4,7,13,1.00) 100%
            )
          `,
        }}
      />

      {/* ── Animated Canvas (beam + rings + asteroids + stars) ────── */}
      <HeroCanvas />

      {/* ── Hero Text Content ─────────────────────────────────────── */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          paddingTop: '2rem',
          paddingBottom: '7rem',
        }}
      >
        <div style={{ maxWidth: '560px' }}>

          {/* Eyebrow tagline */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              fontSize: '0.74rem',
              letterSpacing: '0.40em',
              fontWeight: '600',
              color: 'rgba(255,255,255,0.68)',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            <span>EXPLORE</span>
            <span style={{ color: '#00f0ff' }}>·</span>
            <span>INNOVATE</span>
            <span style={{ color: '#00f0ff' }}>·</span>
            <span>IMPACT</span>
          </div>

          {/* H1 Heading */}
          <h1
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'clamp(2.8rem, 5.2vw, 5rem)',
              fontWeight: '900',
              lineHeight: '1.04',
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              color: '#ffffff',
              marginBottom: '1.35rem',
              textShadow: '0 2px 40px rgba(0,0,0,0.85)',
            }}
          >
            {'BUILD'.split('').map((ch, i) =>
              i < 5 ? <span key={i}>{ch}</span> : null
            )}
            <span
              style={{
                background: 'linear-gradient(90deg,#7dd3fc,#fff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ING
            </span>
            <br />
            DIGITAL
            <br />
            <span
              className="gradient-cyan"
              style={{ filter: 'drop-shadow(0 0 22px rgba(56,189,248,0.6))' }}
            >
              FUTURES
            </span>
          </h1>

          {/* Body text */}
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: 'rgba(214,228,244,0.88)',
              fontWeight: '300',
              lineHeight: '1.68',
              maxWidth: '450px',
              marginBottom: '2.4rem',
              textShadow: '0 1px 14px rgba(0,0,0,0.75)',
            }}
          >
            We create websites, applications and IT solutions<br />
            that help businesses grow beyond limits.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1.1rem' }}>
            <button
              id="hero-start-project"
              onClick={onOpenProjectWizard}
              className="btn-primary"
            >
              Start Your Project
              <ArrowRight size={16} style={{ strokeWidth: 2.5 }} />
            </button>

            {/* Showreel — icon-circle style as in mockup */}
            <button
              id="hero-watch-showreel"
              onClick={onOpenShowreel}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#ffffff',
                fontSize: '0.93rem',
                fontWeight: '600',
                fontFamily: 'var(--font-primary)',
                padding: '0.6rem 0.3rem',
              }}
            >
              <span
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#00f0ff';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,240,255,0.45)';
                  e.currentTarget.style.background = 'rgba(0,240,255,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                }}
              >
                <Play size={14} style={{ fill: '#fff', marginLeft: '2px' }} />
              </span>
              Watch Showreel
            </button>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: 'clamp(1.25rem, 4vw, 3.5rem)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
        }}
      >
        <div
          style={{
            width: '20px',
            height: '32px',
            borderRadius: '12px',
            border: '1.5px solid rgba(255,255,255,0.38)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              width: '3px',
              height: '7px',
              background: '#00f0ff',
              borderRadius: '2px',
              animation: 'scrollDot 1.9s ease-in-out infinite',
            }}
          />
        </div>
        <span
          style={{
            fontSize: '0.69rem',
            letterSpacing: '0.28em',
            fontWeight: '600',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
          }}
        >
          SCROLL TO EXPLORE
        </span>
      </div>

      {/* ── Right side pillar labels ─────────────────────────── */}
      <div
        className="hero-pillars"
        style={{
          position: 'absolute',
          bottom: '2.8rem',
          right: 'clamp(1.25rem, 4vw, 3.5rem)',
          zIndex: 10,
          textAlign: 'right',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.28rem',
        }}
      >
        {['IDEAS','TECHNOLOGY','PEOPLE','A BRIGHTER','TOMORROW'].map((word, i) => (
          <span
            key={i}
            style={{
              fontSize: '0.68rem',
              letterSpacing: '0.22em',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: i >= 3 ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.32)',
            }}
          >
            {word}
          </span>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) { .hero-pillars { display: none !important; } }
      `}</style>
    </section>
  );
}
