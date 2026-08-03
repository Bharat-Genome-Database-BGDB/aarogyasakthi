'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import "@styles/main.css";

// --- Custom Structural Icon Vector Mapper ---
const TranslationalIcon = ({ name, className }) => {
  const icons = {
    Pilot: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    Validation: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    Transfer: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14M7 23 3 19l4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
    Ecosystem: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  };
  return icons[name] || null;
};

export default function AarogyaSakthiHomePage() {
  const [activeTab, setActiveTab] = useState('All');

  // --- 1. Metric Counters ---
  const metrics = [
    { value: "12+", label: "Active Pilot Programs" },
    { value: "5+", label: "Validated SOPs" },
    { value: "20+", label: "Hospital Nodes" },
    { value: "2", label: "Technology Transfers" }
  ];

  // --- 2. What We Do Parameters ---
  const corePillars = [
    {
      id: "pilots",
      icon: "Pilot",
      title: "Pilot Programs",
      desc: "Deploying production-ready computational diagnostics and analytic suites within regional clinical validation networks."
    },
    {
      id: "validation",
      icon: "Validation",
      title: "Validation & SOPs",
      desc: "Stress-testing algorithmic logic against unrepresented clinical vectors to lock down highly reproducible Check Cases."
    },
    {
      id: "transfer",
      icon: "Transfer",
      title: "Technology Transfer",
      desc: "Packaging verified codebases, trained weight profiles, and custom pipelines into secure industry handoffs."
    }
  ];

  // --- 3. Filterable Translational Projects Registry ---
  const projectsData = [
    {
      id: "proj1",
      category: "Global Health",
      title: "Anemia & Metabolic Comorbidity Prediction",
      desc: "Translating multi-modal deep learning profiles into early risk indicators for regional medical networks."
    },
    {
      id: "proj2",
      category: "AMR",
      title: "AMR Surveillance & Sepsis Mitigation",
      desc: "Integrating predictive sequence resistance mapping into rapid point-of-care emergency workflows."
    },
    {
      id: "proj3",
      category: "Public Health",
      title: "AI-Guided Epidemic Mapping Models",
      desc: "Providing municipal healthcare panels with proactive vector outbreak simulation dashboards."
    },
    {
      id: "proj4",
      category: "Global Health",
      title: "Maternal Wellness Screening Metrics",
      desc: "Deploying secure, low-bandwidth prediction modules within rural clinical environments."
    },
    {
      id: "proj5",
      category: "AMR",
      title: "Pathogen Variant Ingestion Pipelines",
      desc: "Automating clinical sequence parsing to identify localized drug-resistant strains."
    },
    {
      id: "proj6",
      category: "Public Health",
      title: "Translational Bio-Informatics Bootcamps",
      desc: "Structuring professional curriculum tracks to train the next wave of clinical deployment architects."
    }
  ];

  const categories = ['All', 'Global Health', 'AMR', 'Public Health'];
  
  const filteredProjects = activeTab === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <div className="home-container">

      {/* BLOCK 1: Hero Workspace Banner */}
      <section className="hero-section" style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #fbfdfa 100%)' }}>
        <div className="content-wrapper" style={{ position: 'relative' }}>
          <span className="label-tag">Field-Tested Application Vertical</span>
          <h1 className="hero-title">
            Translating <span>AI × Genomics</span> <br />Into Real-World Impact
          </h1>
          <p className="hero-desc">
            We bridge the gap between upstream discovery layers and active patient care. 
            AarogyaSakthi transforms computational code into validated clinical SOPs, 
            industry co-development pipelines, and scalable health programs.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <a href="#projects" className="action-btn-primary">Explore Active Pilots</a>
            <Link href="/contact" className="action-btn-primary" style={{ background: 'transparent', color: 'var(--clinical-green)', border: '1px solid var(--clinical-green)' }}>
              Initiate Co-Development
            </Link>
          </div>
        </div>
      </section>

      {/* BLOCK 2: High-Density Metrics Layer */}
      <section style={{ padding: '3rem 0', background: '#0f172a', color: '#ffffff' }}>
        <div className="content-wrapper">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {metrics.map((m, idx) => (
              <div key={idx}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#34d399' }}>{m.value}</div>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.25rem', fontWeight: '500' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* BLOCK 4: What We Do (Operational Core Grid) */}
      <section id="pillars" className="pillars-section" style={{ borderTop: '1px solid #e2e8f0', background: '#ffffff' }}>
        <div className="content-wrapper">
          <span className="section-subtitle">Operational Core</span>
          <h3 className="section-title">Our Implementation Pipeline</h3>
          
          <div className="pillars-grid">
            {corePillars.map((pillar) => (
              <div key={pillar.id} className="pillar-card">
                <div style={{ marginBottom: '1rem' }}>
                  <TranslationalIcon name={pillar.icon} className="icon-svg" />
                </div>
                <h4 className="pillar-title" style={{ fontWeight: '700' }}>{pillar.title}</h4>
                <p className="pillar-desc" style={{ marginTop: '0.5rem' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 5: The Parent Ecosystem Connection Panel */}
      <section style={{ padding: '4.5rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="content-wrapper" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span className="section-subtitle" style={{ color: 'var(--crimson-red)' }}>Integrated Network</span>
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--ink-primary)', marginTop: '0.5rem' }}>
              The Sivasakthi Architecture
            </h3>
          </div>
          <div>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '15px' }}>
              AarogyaSakthi operates as the deployment mechanism for our entire foundational network. 
              We ingest sequencing catalogs from the <strong>Bharat Genome Database (BGDB)</strong> and process 
              them using machine learning configurations from <strong>GenAI Research Labs</strong>, translating complex algorithms into functional medicine.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 6: Dynamic Filterable Translational Projects Registry */}
      <section id="projects" style={{ padding: '6rem 0', background: '#fbfdfa' }}>
        <div className="content-wrapper">
          <span className="section-subtitle">Active Deployments</span>
          <h3 className="section-title">Translational Project Showcase</h3>

          {/* Filter Bar */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '99px',
                  border: '1px solid',
                  borderColor: activeTab === cat ? 'var(--clinical-green)' : '#cbd5e1',
                  background: activeTab === cat ? 'var(--clinical-green)' : '#ffffff',
                  color: activeTab === cat ? '#ffffff' : 'var(--text-muted)',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="pillars-grid">
            {filteredProjects.map(proj => (
              <div key={proj.id} className="pillar-card" style={{ borderLeft: '3px solid var(--crimson-red)' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--clinical-green)', fontWeight: '700', letterSpacing: '0.05em' }}>
                  {proj.category}
                </span>
                <h4 style={{ fontSize: '18px', fontWeight: '700', margin: '0.5rem 0', color: 'var(--ink-primary)' }}>
                  {proj.title}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {proj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 7: Inline Structural Lead-Generation Strip */}
      <section style={{ background: 'var(--clinical-green)', padding: '5rem 0', color: '#ffffff' }}>
        <div className="content-wrapper" style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h3 style={{ fontSize: '28px', fontWeight: '700', fontFamily: 'var(--font-serif)' }}>
              Have a translational project proposal?
            </h3>
            <p style={{ color: '#d1fae5', marginTop: '0.5rem', fontSize: '15px' }}>
              Let's join forces. Connect with our validation architects to structure a custom clinical pilot program.
            </p>
          </div>
          <div>
            <Link href="/contact" className="action-btn-primary" style={{ background: '#ffffff', color: 'var(--clinical-green)', padding: '12px 32px', borderRadius: '8px' }}>
              Apply for Co-Development
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}