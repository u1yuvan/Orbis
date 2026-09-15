import React, { useState } from 'react';
import { ExternalLink, X, ArrowRight } from 'lucide-react';

const PROJECTS = [
  { id:1, title:'Nexus VII Analytics',      category:'Cloud AI', sub:'Real-time Galactic Data Platform',    image:'/assets/project1.jpg', tags:['React','Three.js','Python AI','WebGL'],  summary:'High-throughput cosmic analytics engine providing real-time data visualization across multi-cluster infrastructure with sub-10ms latency.', metrics:'3.4M req/sec · 99.999% Uptime · 120ms ML Inference', client:'Galactic Enterprise Corp', year:'2026' },
  { id:2, title:'Orbital Neural Ecosystem', category:'Cloud AI', sub:'AI Cloud Mesh Network',               image:'/assets/project2.jpg', tags:['Kubernetes','Go','GraphQL','TensorFlow'], summary:'Autonomous cloud mesh network that self-optimizes server allocations using machine learning, reducing infrastructure overhead by 42%.',        metrics:'42% Cost Reduction · Zero-Downtime Deployments',         client:'Aether Cloud Systems',    year:'2025' },
  { id:3, title:'Vanguard Mobile Wallet',   category:'Mobile',   sub:'Next-Gen Encrypted Asset App',        image:'/assets/hero_bg.jpg',  tags:['React Native','Biometrics','Node.js','Web3'], summary:'Sleek cross-platform crypto & fiat mobile wallet featuring biometric zero-knowledge authentication and instant cross-border settlement.',  metrics:'1.2M Downloads · 4.9★ App Store Rating',                client:'Vanguard Capital',        year:'2026' },
  { id:4, title:'Hyperion Commerce Portal', category:'Web',      sub:'Immersive 3D Commerce Experience',   image:'/assets/project1.jpg', tags:['Next.js','Stripe API','WebGL','Shopify'], summary:'Futuristic e-commerce portal with interactive 3D product previews, personalized AI recommendations, and lightning-fast checkout.',           metrics:'310% Conversion Lift · 0.4s Page Load',                  client:'Hyperion Luxury Goods',  year:'2025' },
];

const CATEGORIES = ['All','Web','Mobile','Cloud AI'];

export default function Projects({ onOpenContact }) {
  const [filter,  setFilter]  = useState('All');
  const [selected, setSelected] = useState(null);

  const list = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-dark">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign:'center', maxWidth:'700px', margin:'0 auto 3rem' }}>
          <span className="section-eyebrow">FEATURED WORK</span>
          <h2 style={{ fontSize:'clamp(2rem,4vw,3.1rem)', fontWeight:'800', marginTop:'0.4rem', marginBottom:'1rem' }}>
            Pioneering <span className="gradient-cyan">Digital Case Studies</span>
          </h2>
          <p style={{ color:'var(--text-muted)', fontSize:'1.02rem' }}>
            Explore how we empower visionary companies with breakthrough software solutions.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display:'flex', justifyContent:'center', gap:'0.7rem', marginBottom:'3.5rem', flexWrap:'wrap' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding:'0.5rem 1.35rem', borderRadius:'9999px', cursor:'pointer',
                border:     filter === cat ? '1px solid #00f0ff' : '1px solid rgba(255,255,255,0.14)',
                background: filter === cat ? 'rgba(0,240,255,0.12)' : 'rgba(10,16,28,0.7)',
                color:      filter === cat ? '#00f0ff' : 'rgba(255,255,255,0.65)',
                fontSize:'0.88rem', fontWeight:'600',
                transition:'all 0.25s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(340px,1fr))', gap:'2.2rem' }}>
          {list.map(p => (
            <div
              key={p.id}
              className="glass-card"
              style={{ overflow:'hidden', display:'flex', flexDirection:'column', cursor:'pointer' }}
              onClick={() => setSelected(p)}
            >
              {/* Image */}
              <div style={{ position:'relative', width:'100%', height:'210px', overflow:'hidden' }}>
                <img
                  src={p.image} alt={p.title}
                  style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position:'absolute', top:'0.9rem', right:'0.9rem',
                  background:'rgba(4,7,13,0.8)', backdropFilter:'blur(8px)',
                  border:'1px solid rgba(0,240,255,0.28)', borderRadius:'9999px',
                  padding:'0.3rem 0.85rem', fontSize:'0.72rem', color:'#00f0ff', fontWeight:'700',
                }}>
                  {p.category}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding:'1.8rem', display:'flex', flexDirection:'column', flexGrow:1 }}>
                <span style={{ fontSize:'0.8rem', color:'#38bdf8', fontWeight:'600', marginBottom:'0.25rem' }}>{p.sub}</span>
                <h3 style={{ fontSize:'1.32rem', fontWeight:'700', marginBottom:'0.7rem' }}>{p.title}</h3>
                <p style={{ color:'var(--text-muted)', fontSize:'0.91rem', lineHeight:'1.6', flexGrow:1, marginBottom:'1.4rem' }}>{p.summary}</p>

                {/* Tags */}
                <div style={{ display:'flex', flexWrap:'wrap', gap:'0.45rem', marginBottom:'1.4rem' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize:'0.72rem', padding:'0.22rem 0.6rem', borderRadius:'6px',
                      background:'rgba(0,240,255,0.07)', border:'1px solid rgba(0,240,255,0.18)', color:'rgba(255,255,255,0.78)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{
                  display:'flex', alignItems:'center', justifyContent:'space-between',
                  borderTop:'1px solid rgba(255,255,255,0.07)', paddingTop:'1rem',
                  color:'#38bdf8', fontSize:'0.86rem', fontWeight:'600',
                }}>
                  <span>View Case Study</span>
                  <ExternalLink size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div className="modal-overlay" onClick={() => setSelected(null)}>
            <div
              className="glass-card"
              onClick={e => e.stopPropagation()}
              style={{ maxWidth:'680px', width:'100%', padding:'2.4rem', position:'relative', background:'rgba(8,12,22,0.98)', maxHeight:'90vh', overflowY:'auto' }}
            >
              <button onClick={() => setSelected(null)} style={{ position:'absolute', top:'1.4rem', right:'1.4rem', background:'rgba(255,255,255,0.08)', border:'none', color:'#fff', borderRadius:'50%', width:'34px', height:'34px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <X size={18} />
              </button>
              <img src={selected.image} alt={selected.title} style={{ width:'100%', height:'240px', objectFit:'cover', borderRadius:'12px', marginBottom:'1.4rem' }} />
              <div style={{ fontSize:'0.82rem', color:'#38bdf8', fontWeight:'700', marginBottom:'0.2rem' }}>{selected.client} · {selected.year}</div>
              <h2 style={{ fontSize:'1.75rem', fontWeight:'800', marginBottom:'1rem' }}>{selected.title}</h2>
              <p style={{ color:'var(--text-muted)', lineHeight:'1.72', marginBottom:'1.4rem' }}>{selected.summary}</p>
              <div style={{ background:'rgba(0,240,255,0.08)', border:'1px solid rgba(0,240,255,0.28)', borderRadius:'12px', padding:'1.1rem', marginBottom:'1.5rem' }}>
                <div style={{ fontSize:'0.75rem', color:'#00f0ff', fontWeight:'700', textTransform:'uppercase', marginBottom:'0.25rem' }}>Impact & Key Metrics</div>
                <div style={{ fontSize:'1.05rem', fontWeight:'700' }}>{selected.metrics}</div>
              </div>
              <button onClick={() => { setSelected(null); onOpenContact(); }} className="btn-primary" style={{ width:'100%', justifyContent:'center' }}>
                Request Similar Architecture <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
