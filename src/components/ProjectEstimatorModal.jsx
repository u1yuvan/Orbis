import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Sparkles, Send } from 'lucide-react';

export default function ProjectEstimatorModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    serviceType: 'Websites & Web Apps',
    timeline: '1 Month',
    budget: '$15,000 - $35,000',
    name: '',
    email: '',
    company: '',
    details: '',
  });

  if (!isOpen) return null;

  const services = [
    'Websites & Web Apps',
    'Mobile Application',
    'Cloud & IT Infrastructure',
    'AI & Automation Suite',
    'UI/UX Brand Redesign',
  ];

  const timelines = ['Express (1-2 Weeks)', 'Standard (3-4 Weeks)', 'Enterprise (2-3 Months)'];
  const budgets = ['$5,000 - $15,000', '$15,000 - $35,000', '$35,000 - $75,000', '$75,000+'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glow-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '650px',
          width: '100%',
          padding: '2.5rem',
          position: 'relative',
          background: '#0d1321',
          border: '1px solid rgba(56, 189, 248, 0.4)',
        }}
      >
        <button
          onClick={onClose}
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
          <div>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', marginBottom: '0.4rem' }}>
              <Sparkles size={18} />
              <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                PROJECT BUILDER & ESTIMATOR
              </span>
            </div>

            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fff', marginBottom: '1.5rem' }}>
              Start Your Digital Project
            </h2>

            {/* Step Progress Bar */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  style={{
                    flex: 1,
                    height: '4px',
                    borderRadius: '2px',
                    background: s <= step ? '#00f0ff' : 'rgba(255, 255, 255, 0.15)',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.9)', fontWeight: '600', marginBottom: '1rem' }}>
                  Step 1: Select Primary Service Required
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {services.map((item) => (
                    <div
                      key={item}
                      onClick={() => setFormData({ ...formData, serviceType: item })}
                      style={{
                        padding: '1rem 1.25rem',
                        borderRadius: '10px',
                        border: formData.serviceType === item ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)',
                        background: formData.serviceType === item ? 'rgba(56, 189, 248, 0.15)' : 'rgba(20, 30, 50, 0.5)',
                        color: '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontWeight: '500',
                      }}
                    >
                      <span>{item}</span>
                      {formData.serviceType === item && <Check size={18} style={{ color: '#00f0ff' }} />}
                    </div>
                  ))}
                </div>

                <button onClick={() => setStep(2)} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Continue to Budget & Scope <ArrowRight size={18} />
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.9)', fontWeight: '600', marginBottom: '0.75rem' }}>
                  Step 2: Desired Timeline & Estimated Budget
                </label>

                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Target Timeline:</span>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                    {timelines.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: t })}
                        style={{
                          flex: '1 1 120px',
                          padding: '0.6rem 0.8rem',
                          borderRadius: '8px',
                          border: formData.timeline === t ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)',
                          background: formData.timeline === t ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                          color: '#fff',
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Estimated Investment:</span>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b })}
                        style={{
                          padding: '0.75rem',
                          borderRadius: '8px',
                          border: formData.budget === b ? '1px solid #00f0ff' : '1px solid rgba(255,255,255,0.1)',
                          background: formData.budget === b ? 'rgba(0, 240, 255, 0.15)' : 'transparent',
                          color: '#fff',
                          fontWeight: '600',
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button onClick={() => setStep(1)} className="btn-secondary" style={{ padding: '0.85rem 1.25rem' }}>
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button onClick={() => setStep(3)} className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                    Continue to Details <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.9)', fontWeight: '600', marginBottom: '1rem' }}>
                  Step 3: Where should we send your custom proposal?
                </label>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(20, 30, 50, 0.8)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      color: '#fff',
                      fontSize: '0.95rem',
                    }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(20, 30, 50, 0.8)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      color: '#fff',
                      fontSize: '0.95rem',
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Company Name (Optional)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(20, 30, 50, 0.8)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      color: '#fff',
                      fontSize: '0.95rem',
                    }}
                  />
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your goals or technical requirements..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(20, 30, 50, 0.8)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      resize: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button type="button" onClick={() => setStep(2)} className="btn-secondary" style={{ padding: '0.85rem 1.25rem' }}>
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button type="submit" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                    Submit Inquiry <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(0, 240, 255, 0.15)',
                border: '1px solid #00f0ff',
                color: '#00f0ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
              }}
            >
              <Check size={32} />
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fff', marginBottom: '0.5rem' }}>
              Project Scope Received!
            </h3>

            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
              Thank you, <strong style={{ color: '#fff' }}>{formData.name}</strong>. Our senior solutions architect is reviewing your <strong style={{ color: '#38bdf8' }}>{formData.serviceType}</strong> inquiry ({formData.budget}). We will contact you at <strong style={{ color: '#fff' }}>{formData.email}</strong> within 4 hours.
            </p>

            <button onClick={handleReset} className="btn-primary" style={{ padding: '0.8rem 2rem' }}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
