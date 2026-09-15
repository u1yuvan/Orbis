import React, { useState } from 'react';
import { Clock, ArrowRight, X } from 'lucide-react';

const POSTS = [
  { id:1, category:'Engineering',    readTime:'5 min', date:'SEP 12, 2026', title:'Architecting Web Applications for the 2030 Spatial Era',               excerpt:'How modern WebGL pipelines, micro-frontend architecture, and edge computing are transforming user engagement.',                    content:'The web ecosystem is shifting towards immersive spatial UI, sub-10ms response times, and AI-first interfaces. In this paper, ORBIS engineering directors share architectural patterns used to construct high-performance digital platforms scaling to millions of concurrent sessions.' },
  { id:2, category:'AI & Security', readTime:'7 min', date:'SEP 04, 2026', title:'Deploying Enterprise Autonomous AI Agents with Zero Trust',             excerpt:'Securing multi-agent AI networks, RAG vector memory pipelines, and enterprise LLM integrations against prompt injection.',          content:'As businesses deploy AI agents for workflow automation, zero-trust security frameworks become paramount. Discover how ORBIS implements bank-grade isolation and cryptographically signed action logs for enterprise LLM agents.' },
  { id:3, category:'UI/UX Design',  readTime:'4 min', date:'AUG 28, 2026', title:'Why Micro-Interactions & Glassmorphism Win Customer Trust',            excerpt:'Exploring visual psychology in modern software. How subtle glow physics and dynamic layout math elevate brand authority.',           content:'First impressions are forged in milliseconds. High-growth tech startups that invest in custom dark mode aesthetics, tactile motion feedback, and crisp typographic hierarchy consistently convert 3× higher than legacy Web2 sites.' },
];

export default function Blog() {
  const [article, setArticle] = useState(null);

  return (
    <section id="blog" className="section-darker">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign:'center', maxWidth:'700px', margin:'0 auto 4rem' }}>
          <span className="section-eyebrow">ORBIS INSIGHTS</span>
          <h2 style={{ fontSize:'clamp(2rem,4vw,3.1rem)', fontWeight:'800', marginTop:'0.4rem', marginBottom:'1rem' }}>
            Thought Leadership & <span className="gradient-cyan">Tech Futures</span>
          </h2>
          <p style={{ color:'var(--text-muted)', fontSize:'1.02rem' }}>
            In-depth analysis on modern software architecture, AI integration, and design innovation.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(310px,1fr))', gap:'2rem' }}>
          {POSTS.map(post => (
            <div key={post.id} className="glass-card" style={{ padding:'2.4rem', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <div>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1.2rem' }}>
                  <span style={{
                    fontSize:'0.72rem', fontWeight:'700', letterSpacing:'0.1em', color:'#00f0ff',
                    background:'rgba(0,240,255,0.08)', padding:'0.28rem 0.72rem',
                    borderRadius:'9999px', border:'1px solid rgba(0,240,255,0.2)',
                  }}>
                    {post.category}
                  </span>
                  <div style={{ display:'flex', alignItems:'center', gap:'0.35rem', fontSize:'0.78rem', color:'var(--text-dim)' }}>
                    <Clock size={13} />{post.readTime}
                  </div>
                </div>
                <h3 style={{ fontSize:'1.28rem', fontWeight:'700', lineHeight:'1.42', marginBottom:'0.8rem' }}>{post.title}</h3>
                <p style={{ color:'var(--text-muted)', fontSize:'0.91rem', lineHeight:'1.62', marginBottom:'1.5rem' }}>{post.excerpt}</p>
              </div>
              <div style={{ borderTop:'1px solid rgba(255,255,255,0.07)', paddingTop:'1.1rem', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <span style={{ fontSize:'0.78rem', color:'var(--text-dim)' }}>{post.date}</span>
                <button onClick={() => setArticle(post)} style={{ background:'transparent', border:'none', color:'#38bdf8', fontWeight:'600', fontSize:'0.88rem', cursor:'pointer', display:'flex', alignItems:'center', gap:'0.4rem' }}>
                  Read Article <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Article Modal */}
        {article && (
          <div className="modal-overlay" onClick={() => setArticle(null)}>
            <div
              className="glass-card"
              onClick={e => e.stopPropagation()}
              style={{ maxWidth:'660px', width:'100%', padding:'2.4rem', position:'relative', background:'rgba(8,12,22,0.98)', maxHeight:'85vh', overflowY:'auto' }}
            >
              <button onClick={() => setArticle(null)} style={{ position:'absolute', top:'1.4rem', right:'1.4rem', background:'rgba(255,255,255,0.08)', border:'none', color:'#fff', borderRadius:'50%', width:'34px', height:'34px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <X size={18} />
              </button>
              <div style={{ fontSize:'0.78rem', color:'#38bdf8', fontWeight:'700', marginBottom:'0.4rem' }}>{article.category} · {article.readTime} read</div>
              <h2 style={{ fontSize:'1.7rem', fontWeight:'800', lineHeight:'1.3', marginBottom:'1.4rem' }}>{article.title}</h2>
              <p style={{ color:'#cbd5e1', fontSize:'1.02rem', lineHeight:'1.8', marginBottom:'2rem' }}>{article.content}</p>
              <button onClick={() => setArticle(null)} className="btn-primary" style={{ padding:'0.7rem 1.5rem' }}>Close Article</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
