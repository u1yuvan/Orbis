import React, { useState } from 'react';
import { Layout, Smartphone, Cloud, Bot, Sparkles, Shield, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  { id:'web',      Icon:Layout,     title:'Websites & Web Apps',         sub:'Ultra-fast high-converting platforms',        desc:'Bespoke enterprise websites, SaaS dashboards and web apps with WebGL animations, zero-lag performance and cutting-edge SEO.',          features:['React / Next.js Architecture','Custom WebGL / Canvas Animations','Headless CMS Integration','Sub-second Page Load Times'] },
  { id:'mobile',   Icon:Smartphone, title:'Mobile Applications',          sub:'Native & cross-platform experiences',         desc:'Engineered for iOS and Android with fluid UI gestures, offline sync, secure payment integrations, and real-time push notifications.',    features:['iOS & Android Native Apps','Flutter & React Native','Biometric Security & Encrypted Sync','App Store Deployment & ASO'] },
  { id:'cloud',    Icon:Cloud,      title:'Cloud & IT Infrastructure',    sub:'Resilient auto-scaling enterprise backends',  desc:'Migrate and scale on AWS, GCP or Azure with DevOps automation, Kubernetes orchestration, and zero downtime deployments.',              features:['Kubernetes & Docker Microservices','Serverless Architecture','24/7 Infrastructure Monitoring','CI/CD Pipeline Automation'] },
  { id:'ai',       Icon:Bot,        title:'AI & Automation Solutions',    sub:'Custom LLM agents & workflow automation',    desc:'Generative AI, predictive ML models and intelligent bots tailored to streamline operations and unlock business intelligence.',           features:['Custom AI Agents & Chatbots','Predictive Analytics Pipelines','Document Processing & RAG','Workflow API Automations'] },
  { id:'ux',       Icon:Sparkles,   title:'UI/UX & Brand Design',         sub:'Space-age aesthetic visual identities',      desc:'Design systems that captivate at first glance — turning complex flows into intuitive visual journeys backed by UX research.',           features:['Interactive Prototype Design','Design Systems & Component Kits','User Testing & CRO','3D Asset & Visual Identity'] },
  { id:'security', Icon:Shield,     title:'Cyber Security & Compliance',  sub:'Bank-grade defense & code auditing',         desc:'Fortify your services with automated pen testing, vulnerability audits, SOC2 readiness, and end-to-end encryption strategies.',         features:['Penetration Testing & Audits','Zero-Trust Architecture','SOC2 / GDPR Compliance Setup','DDoS Protection & WAF'] },
];

export default function Services({ onOpenProjectWizard }) {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="section-darker">
      {/* Ambient glow left */}
      <div style={{
        position:'absolute', top:'10%', left:'0',
        width:'400px', height:'400px', pointerEvents:'none',
        background:'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
      }}/>

      <div className="container">
        {/* Header */}
        <div style={{ textAlign:'center', maxWidth:'700px', margin:'0 auto 4rem' }}>
          <span className="section-eyebrow">OUR CAPABILITIES</span>
          <h2 style={{ fontSize:'clamp(2rem,4vw,3.1rem)', fontWeight:'800', marginTop:'0.4rem', marginBottom:'1rem' }}>
            Services Built to <span className="gradient-cyan">Outpace Tomorrow</span>
          </h2>
          <p style={{ color:'var(--text-muted)', fontSize:'1.02rem' }}>
            From high-growth startups to global enterprises — scalable digital solutions built for your growth objectives.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(340px,1fr))', gap:'1.8rem' }}>
          {SERVICES.map(({ id, Icon, title, sub, desc, features }, i) => {
            const on = active === i;
            return (
              <div
                key={id}
                className="glass-card"
                onClick={() => setActive(i)}
                style={{
                  padding:'2.4rem',
                  cursor:'pointer',
                  borderColor:  on ? 'rgba(0,240,255,0.55)' : undefined,
                  boxShadow:    on ? '0 0 32px rgba(0,240,255,0.22)' : undefined,
                  background:   on ? 'rgba(14,22,38,0.92)' : undefined,
                  transition:   'all 0.3s ease',
                }}
              >
                {/* Top row */}
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1.4rem' }}>
                  <div style={{
                    width:'52px', height:'52px', borderRadius:'13px',
                    background: on ? 'rgba(0,240,255,0.18)' : 'rgba(0,240,255,0.08)',
                    border:`1px solid rgba(0,240,255,${on?0.5:0.22})`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    color: on ? '#00f0ff' : '#38bdf8',
                    transition:'all 0.3s ease',
                  }}>
                    <Icon size={25} />
                  </div>
                  <ArrowUpRight size={20} style={{ color: on ? '#00f0ff' : 'rgba(255,255,255,0.25)', transition:'all 0.3s ease' }} />
                </div>

                <h3 style={{ fontSize:'1.28rem', fontWeight:'700', marginBottom:'0.35rem' }}>{title}</h3>
                <p style={{ fontSize:'0.84rem', color:'#00f0ff', fontWeight:'600', marginBottom:'1rem' }}>{sub}</p>
                <p style={{ color:'var(--text-muted)', fontSize:'0.92rem', lineHeight:'1.62', marginBottom:'1.4rem' }}>{desc}</p>

                {/* Feature list */}
                <div style={{ display:'flex', flexDirection:'column', gap:'0.55rem', borderTop:'1px solid rgba(255,255,255,0.07)', paddingTop:'1.1rem' }}>
                  {features.map(f => (
                    <div key={f} style={{ display:'flex', alignItems:'center', gap:'0.55rem', fontSize:'0.84rem', color:'#cbd5e1' }}>
                      <CheckCircle2 size={13} style={{ color:'#00f0ff', flexShrink:0 }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="glass-card" style={{
          marginTop:'4rem', padding:'2.4rem 2.8rem',
          display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1.5rem',
          background:'linear-gradient(90deg,rgba(0,240,255,0.10) 0%,rgba(6,10,18,0.85) 100%)',
          border:'1px solid rgba(0,240,255,0.28)',
        }}>
          <div>
            <h3 style={{ fontSize:'1.45rem', fontWeight:'700', marginBottom:'0.3rem' }}>Have a custom project in mind?</h3>
            <p style={{ color:'var(--text-muted)', fontSize:'0.93rem' }}>
              Let's tailor an architecture specifically for your company's scale and goals.
            </p>
          </div>
          <button onClick={onOpenProjectWizard} className="btn-primary">
            Configure Your Scope <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
