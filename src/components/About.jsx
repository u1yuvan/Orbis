import React from 'react';
import { Compass, Lightbulb, Zap, Award, Users, ShieldCheck, Cpu } from 'lucide-react';

const STATS = [
  { label: 'Projects Completed',      value: '180+', icon: Award      },
  { label: 'Enterprise Clients',      value: '45+',  icon: Users      },
  { label: 'System Uptime',           value: '99.99%',icon: ShieldCheck },
  { label: 'AI Models Deployed',      value: '120+', icon: Cpu        },
];

const PILLARS = [
  { title: 'EXPLORE',   n: '01', Icon: Compass,    desc: 'We venture beyond standard frameworks — researching cutting-edge algorithms, scalable architectures, and next-gen user-experience paradigms that push boundaries.' },
  { title: 'INNOVATE',  n: '02', Icon: Lightbulb,  desc: 'Transforming complex ideas into sleek, lightning-fast digital products engineered for high performance, security, and effortless scalability.' },
  { title: 'IMPACT',    n: '03', Icon: Zap,         desc: 'Delivering quantifiable business transformation, accelerating market expansion, and shaping a brighter technological future for global leaders.' },
];

export default function About() {
  return (
    <section id="about" className="section-dark">
      {/* Ambient glow orb */}
      <div style={{
        position:'absolute', top:'15%', right:'4%',
        width:'520px', height:'520px', pointerEvents:'none',
        background:'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)',
      }}/>

      <div className="container">
        {/* ── Section Header ─────────────────────────────────────── */}
        <div style={{ textAlign:'center', maxWidth:'700px', margin:'0 auto 4.5rem' }}>
          <span className="section-eyebrow">WHO WE ARE</span>
          <h2 style={{ fontSize:'clamp(2rem,4vw,3.1rem)', fontWeight:'800', marginTop:'0.4rem', marginBottom:'1rem' }}>
            Engineering the{' '}
            <span className="gradient-cyan">Next Horizon</span>{' '}
            of Technology
          </h2>
          <p style={{ color:'var(--text-muted)', fontSize:'1.02rem', lineHeight:'1.72' }}>
            At ORBIS, we are more than a software studio. We are architects of digital transformation,
            blending space-age design aesthetics with bulletproof engineering to craft platforms that dominate markets.
          </p>
        </div>

        {/* ── Three pillars ─────────────────────────────────────── */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'2rem', marginBottom:'5rem' }}>
          {PILLARS.map(({ title, n, Icon, desc }) => (
            <div key={title} className="glass-card" style={{ padding:'2.4rem', overflow:'hidden' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1.4rem' }}>
                <div style={{
                  width:'52px', height:'52px', borderRadius:'13px',
                  background:'rgba(0,240,255,0.1)', border:'1px solid rgba(0,240,255,0.28)',
                  display:'flex', alignItems:'center', justifyContent:'center', color:'#00f0ff',
                }}>
                  <Icon size={26} />
                </div>
                <span style={{ fontSize:'0.72rem', letterSpacing:'0.14em', fontWeight:'700', color:'rgba(255,255,255,0.35)' }}>
                  PILLAR {n}
                </span>
              </div>
              <h3 style={{ fontSize:'1.35rem', fontFamily:'var(--font-display)', fontWeight:'700', letterSpacing:'0.06em', marginBottom:'0.8rem' }}>
                {title}
              </h3>
              <p style={{ color:'var(--text-muted)', fontSize:'0.94rem', lineHeight:'1.65' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Metrics banner ────────────────────────────────────── */}
        <div className="glass-card" style={{
          padding:'2.8rem 2rem',
          background:'linear-gradient(135deg,rgba(10,16,28,0.95) 0%,rgba(6,10,18,0.98) 100%)',
          border:'1px solid rgba(56,189,248,0.22)',
        }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'2.5rem', textAlign:'center' }}>
            {STATS.map(({ label, value, icon: Icon }) => (
              <div key={label}>
                <div style={{ color:'#00f0ff', marginBottom:'0.4rem', display:'flex', justifyContent:'center' }}>
                  <Icon size={20} />
                </div>
                <div style={{ fontSize:'2.6rem', fontFamily:'var(--font-display)', fontWeight:'800', lineHeight:'1', marginBottom:'0.3rem' }}>
                  {value}
                </div>
                <div style={{ fontSize:'0.85rem', color:'var(--text-muted)', fontWeight:'500' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
