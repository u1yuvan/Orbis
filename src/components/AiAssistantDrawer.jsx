import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, User, ArrowRight, MessageSquare } from 'lucide-react';

export default function AiAssistantDrawer({ onOpenProjectWizard, onOpenContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am Orbis AI, your digital transformation assistant. How can I help build your future today?',
    },
  ]);

  const quickPrompts = [
    'Recommend tech stack for my web app',
    'How fast can ORBIS deploy my product?',
    'Schedule a consultation call',
  ];

  const handleSend = (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Generate intelligent AI response
    setTimeout(() => {
      let responseText = '';
      const lower = text.toLowerCase();

      if (lower.includes('tech stack') || lower.includes('stack') || lower.includes('recommend')) {
        responseText = 'For ultra-fast startup web apps, we recommend React / Next.js with WebGL/Canvas micro-animations and Node/Python backends. For mobile apps, we utilize Flutter or React Native for dual iOS/Android launch in record time.';
      } else if (lower.includes('fast') || lower.includes('time') || lower.includes('deploy') || lower.includes('how long')) {
        responseText = 'Our Express Delivery tier ships MVP websites and applications in 1-2 weeks! Enterprise custom systems typically span 3-6 weeks with automated CI/CD deployment.';
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('budget') || lower.includes('estimate')) {
        responseText = 'Our projects range from $5,000 for launch-ready websites to $50,000+ for complex enterprise cloud AI platforms. Click "Start Project" to get an instant tailored quote!';
      } else if (lower.includes('call') || lower.includes('schedule') || lower.includes('contact') || lower.includes('talk')) {
        responseText = 'I can connect you directly with our engineering team! Click "Let\'s Talk" or fill our project inquiry form to schedule a call today.';
      } else {
        responseText = `ORBIS specializes in high-impact web design, mobile apps, and enterprise cloud solutions. Would you like to launch a project wizard or request a consultation?`;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: responseText }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 990,
          background: 'linear-gradient(135deg, #00f0ff 0%, #38bdf8 100%)',
          color: '#030712',
          border: 'none',
          borderRadius: '9999px',
          padding: '0.85rem 1.4rem',
          fontWeight: '700',
          fontSize: '0.9rem',
          cursor: 'pointer',
          boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Bot size={20} />
        <span>ORBIS AI</span>
      </button>

      {/* Chat Drawer */}
      {isOpen && (
        <div
          className="glow-box"
          style={{
            position: 'fixed',
            bottom: '5.5rem',
            right: '2rem',
            zIndex: 995,
            width: 'clamp(320px, 90vw, 400px)',
            height: '500px',
            background: 'rgba(13, 19, 33, 0.96)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            boxShadow: '0 0 40px rgba(56, 189, 248, 0.3)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '1.2rem 1.5rem',
              background: 'rgba(5, 8, 14, 0.8)',
              borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(56,189,248,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f0ff' }}>
                <Bot size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#fff' }}>ORBIS Solution AI</div>
                <div style={{ fontSize: '0.72rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00f0ff' }} />
                  Online • AI Assistant
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div style={{ flex: 1, padding: '1.25rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: m.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '0.85rem 1.1rem',
                    borderRadius: '14px',
                    background: m.sender === 'user' ? 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)' : 'rgba(20, 30, 50, 0.8)',
                    color: m.sender === 'user' ? '#030712' : '#f8fafc',
                    fontWeight: m.sender === 'user' ? '600' : '400',
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    border: m.sender === 'bot' ? '1px solid rgba(56, 189, 248, 0.2)' : 'none',
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div style={{ padding: '0.5rem 1rem', display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(qp)}
                style={{
                  whiteSpace: 'nowrap',
                  fontSize: '0.75rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '9999px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  color: '#38bdf8',
                  cursor: 'pointer',
                }}
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              padding: '0.85rem 1rem',
              background: 'rgba(5, 8, 14, 0.9)',
              borderTop: '1px solid rgba(56, 189, 248, 0.2)',
              display: 'flex',
              gap: '0.5rem',
            }}
          >
            <input
              type="text"
              placeholder="Ask Orbis AI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                background: 'rgba(20, 30, 50, 0.8)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: '8px',
                padding: '0.6rem 0.85rem',
                color: '#fff',
                fontSize: '0.88rem',
              }}
            />
            <button
              type="submit"
              style={{
                background: '#38bdf8',
                border: 'none',
                color: '#030712',
                borderRadius: '8px',
                padding: '0 0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
