import React from 'react';
import { ArrowUp, Globe, Share2, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import OrbisLogo from './OrbisLogo';

export default function Footer({ onOpenContact, onOpenProjectWizard }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      id="contact"
      style={{
        background: 'rgba(3,5,10,1)',
        borderTop: '1px solid rgba(56,189,248,0.14)',
        paddingTop: '5rem',
        paddingBottom: '2.8rem',
        position: 'relative',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position:'absolute', top:'0', left:'50%', transform:'translateX(-50%)',
        width:'600px', height:'200px', pointerEvents:'none',
        background:'radial-gradient(ellipse, rgba(0,240,255,0.06) 0%, transparent 70%)',
      }}/>

      <div className="container">
        {/* Top grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))', gap:'3rem', marginBottom:'4rem' }}>

          {/* Brand column — canonical logo */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'0.7rem', marginBottom:'1.2rem' }}>
              <OrbisLogo size={32} glow={true} color="#00f0ff" />
              <span style={{ fontFamily:'var(--font-display)', fontSize:'1.3rem', fontWeight:'700', letterSpacing:'0.22em', textTransform:'uppercase' }}>
                ORBIS
              </span>
            </div>
            <p style={{ color:'var(--text-muted)', fontSize:'0.9rem', lineHeight:'1.68', marginBottom:'1.5rem' }}>
              We create websites, applications and IT solutions that help businesses grow beyond limits.
            </p>
            {/* Contact info */}
            <div style={{ display:'flex', flexDirection:'column', gap:'0.85rem', marginBottom:'1.5rem', fontSize:'0.88rem', color:'var(--text-muted)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.6rem' }}><Mail size={15} style={{ color:'#00f0ff' }} /> contact@orbis.digital</div>
              <div style={{ display:'flex', alignItems:'center', gap:'0.6rem' }}><Phone size={15} style={{ color:'#00f0ff' }} /> +1 (800) 555-ORBIS</div>
              <div style={{ display:'flex', alignItems:'center', gap:'0.6rem' }}><MapPin size={15} style={{ color:'#00f0ff' }} /> SF · London · Tokyo</div>
            </div>
            <div style={{ display:'flex', gap:'0.85rem', color:'rgba(255,255,255,0.45)' }}>
              <a href="#" aria-label="Global" style={{ color:'inherit', transition:'color 0.2s' }} onMouseEnter={e=>e.currentTarget.style.color='#00f0ff'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.45)'}><Globe size={17}/></a>
              <a href="#" aria-label="Share"  style={{ color:'inherit', transition:'color 0.2s' }} onMouseEnter={e=>e.currentTarget.style.color='#00f0ff'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.45)'}><Share2 size={17}/></a>
              <a href="#" aria-label="Chat"   style={{ color:'inherit', transition:'color 0.2s' }} onMouseEnter={e=>e.currentTarget.style.color='#00f0ff'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.45)'}><MessageCircle size={17}/></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize:'0.95rem', fontWeight:'700', marginBottom:'1.2rem', color:'#fff' }}>Navigation</h4>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.72rem', fontSize:'0.88rem', color:'var(--text-muted)' }}>
              {['Home','About Vision','Capabilities','Case Studies','ORBIS Insights'].map(l=>(
                <a key={l} href={`#${l.split(' ')[0].toLowerCase()}`} style={{ color:'inherit', textDecoration:'none', transition:'color 0.2s' }}
                  onMouseEnter={e=>e.currentTarget.style.color='#fff'} onMouseLeave={e=>e.currentTarget.style.color='var(--text-muted)'}>
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ fontSize:'0.95rem', fontWeight:'700', marginBottom:'1.2rem', color:'#fff' }}>Solutions</h4>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.72rem', fontSize:'0.88rem', color:'var(--text-muted)' }}>
              {['High-Performance Web Platforms','iOS & Android Native Apps','Enterprise Cloud Infrastructure','Generative AI Agents','Cyber Security Audits'].map(s=>(
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontSize:'0.95rem', fontWeight:'700', marginBottom:'1.2rem', color:'#fff' }}>Stay Ahead</h4>
            <p style={{ color:'var(--text-muted)', fontSize:'0.86rem', marginBottom:'1rem' }}>
              Subscribe to the ORBIS Tech Briefing for monthly insights.
            </p>
            <div style={{ display:'flex', gap:'0.5rem', marginBottom:'1.5rem' }}>
              <input
                type="email"
                placeholder="Work email"
                style={{
                  flex:1, padding:'0.65rem 0.85rem', borderRadius:'8px',
                  background:'rgba(14,20,34,0.8)', border:'1px solid rgba(56,189,248,0.2)',
                  color:'#fff', fontSize:'0.85rem',
                }}
              />
              <button onClick={onOpenProjectWizard} className="btn-primary" style={{ padding:'0.65rem 1rem', fontSize:'0.82rem' }}>
                Join
              </button>
            </div>
            <button onClick={onOpenContact} className="btn-outline" style={{ width:'100%', justifyContent:'center', fontSize:'0.88rem' }}>
              Let's Talk
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop:'1px solid rgba(255,255,255,0.07)',
          paddingTop:'2rem',
          display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1rem',
          fontSize:'0.82rem', color:'var(--text-dim)',
        }}>
          <span>© {new Date().getFullYear()} ORBIS Inc. All rights reserved. Building Digital Futures.</span>
          <div style={{ display:'flex', alignItems:'center', gap:'1.5rem' }}>
            <span style={{ cursor:'pointer' }}>Privacy Policy</span>
            <span style={{ cursor:'pointer' }}>Terms of Service</span>
            <button onClick={scrollTop} style={{
              background:'rgba(0,240,255,0.1)', border:'1px solid rgba(0,240,255,0.3)',
              color:'#00f0ff', borderRadius:'50%', width:'34px', height:'34px',
              cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
              transition:'all 0.25s ease',
            }}
            onMouseEnter={e=>{e.currentTarget.style.background='rgba(0,240,255,0.22)';e.currentTarget.style.boxShadow='0 0 16px rgba(0,240,255,0.4)'}}
            onMouseLeave={e=>{e.currentTarget.style.background='rgba(0,240,255,0.1)';e.currentTarget.style.boxShadow='none'}}
            >
              <ArrowUp size={16}/>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
