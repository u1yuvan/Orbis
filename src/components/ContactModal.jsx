import React, { useState } from 'react';
import { X, Send, CheckCircle, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="glow-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '750px',
          width: '100%',
          padding: '2.5rem',
          position: 'relative',
          background: '#0d1321',
          border: '1px solid rgba(56, 189, 248, 0.4)',
        }}
      >
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#fff',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {/* Left Info Column */}
            <div>
              <span style={{ fontSize: '0.82rem', letterSpacing: '0.25em', fontWeight: '700', color: '#38bdf8', textTransform: 'uppercase' }}>
                DIRECT CONSULTATION
              </span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fff', marginTop: '0.3rem', marginBottom: '1rem' }}>
                Let's Build Something Extraordinary
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                Connect directly with our leadership team. We respond to all inquiries within 2 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Email Inquiry</div>
                    <div style={{ color: '#fff', fontWeight: '600', fontSize: '0.95rem' }}>contact@orbis.digital</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Global HQ Hotline</div>
                    <div style={{ color: '#fff', fontWeight: '600', fontSize: '0.95rem' }}>+1 (800) 555-ORBIS</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Innovation Hub</div>
                    <div style={{ color: '#fff', fontWeight: '600', fontSize: '0.95rem' }}>San Francisco • London • Tokyo</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.4rem' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(20, 30, 50, 0.8)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    color: '#fff',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.4rem' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(20, 30, 50, 0.8)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    color: '#fff',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.4rem' }}>
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your product vision..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(20, 30, 50, 0.8)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    color: '#fff',
                    resize: 'none',
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0,240,255,0.2)', color: '#00f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
              <CheckCircle size={32} />
            </div>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', fontWeight: '800', marginBottom: '0.5rem' }}>
              Message Dispatched!
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Thank you, {form.name}. Our tech lead will reach out to <strong>{form.email}</strong> shortly.
            </p>
            <button onClick={handleClose} className="btn-primary">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
