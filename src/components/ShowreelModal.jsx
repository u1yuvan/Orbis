import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle, ExternalLink } from 'lucide-react';

export default function ShowreelModal({ isOpen, onClose, onOpenProjectWizard }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glow-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '850px',
          width: '100%',
          padding: '0',
          overflow: 'hidden',
          position: 'relative',
          background: '#080b11',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          boxShadow: '0 0 50px rgba(56, 189, 248, 0.35)',
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.2rem 1.8rem',
            background: 'rgba(13, 19, 33, 0.9)',
            borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Sparkles size={18} style={{ color: '#00f0ff' }} />
            <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', letterSpacing: '0.05em' }}>
              ORBIS DIGITAL FUTURES — SHOWREEL 2026
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#fff',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Canvas Container */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000' }}>
          <img
            src="/assets/hero_bg.jpg"
            alt="ORBIS Showreel"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: isPlaying ? 'brightness(0.95)' : 'brightness(0.5)',
              transition: 'all 0.4s ease',
            }}
          />

          {/* Animated Futuristic Sound Wave & Audio visualizer overlay */}
          {isPlaying && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                pointerEvents: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center', marginBottom: '1rem' }}>
                {[40, 75, 25, 90, 50, 85, 30, 95, 60, 45, 80].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: '4px',
                      height: `${h}px`,
                      background: 'linear-gradient(180deg, #00f0ff 0%, #38bdf8 100%)',
                      borderRadius: '4px',
                      boxShadow: '0 0 10px #00f0ff',
                      animation: `pulseGlow ${0.8 + (i % 4) * 0.2}s infinite ease-in-out alternate`,
                    }}
                  />
                ))}
              </div>
              <span
                style={{
                  fontSize: '0.85rem',
                  letterSpacing: '0.3em',
                  color: '#ffffff',
                  fontWeight: '700',
                  background: 'rgba(5, 8, 14, 0.75)',
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                }}
              >
                LIVE REEL PLAYBACK • 4K HDR
              </span>
            </div>
          )}

          {/* Controls Bar Overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1.5rem',
              right: '1.5rem',
              background: 'rgba(5, 8, 14, 0.85)',
              backdropFilter: 'blur(12px)',
              borderRadius: '12px',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              padding: '0.75rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  background: '#38bdf8',
                  border: 'none',
                  color: '#030712',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }} />}
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>

              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-display)' }}>
                01:42 / 03:00
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenProjectWizard();
              }}
              className="btn-primary"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
            >
              Start Project Like This <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
