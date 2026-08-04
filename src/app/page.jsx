'use client';

import Link from "next/link";
import Layout from "@layout/Layout";

export default function HomePage() {
  return (
    <Layout 
      title="AarogyaSakthi | Advancing Clinical Research & Scalable Health Tech" 
      description="Empowering public health systems and life-science innovations through precision genomics, ethical clinical technology, and accessible care frameworks."
    >
      <div className="container">
        {/* --- HERO SECTION --- */}
        <section className="hero-section">
          <div className="content-wrapper">
            <span className="label-tag">AarogyaSakthi Initiative</span>
            <h1 className="hero-title">
              Advancing Clinical Research & <span>Scalable Health Tech</span>
            </h1>
            <p className="hero-desc">
              Empowering public health systems and life-science innovations through precision genomics, ethical clinical technology, and accessible care frameworks.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                Partner With Us
              </Link>
              <a href="#about" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* --- ABOUT & MISSION SECTION --- */}
        <section id="about" className="about-section">
          <div className="content-wrapper">
            <span className="section-subtitle">Our Vision & Mission</span>
            <h2 className="section-title">Transforming Healthcare Infrastructure</h2>
            <p className="section-lead">
              AarogyaSakthi bridges high-throughput genomic data and everyday healthcare delivery to build actionable, life-saving clinical tools.
            </p>
            
            <div className="about-grid">
              <div className="card">
                <h3>Precision Health</h3>
                <p>Translating genomic discoveries into practical clinical pathways for early disease intervention.</p>
              </div>
              <div className="card">
                <h3>Accessible Care</h3>
                <p>Engineering lightweight, resilient health platforms optimized for rural and underserved medical centers.</p>
              </div>
              <div className="card">
                <h3>Data Sovereignty</h3>
                <p>Maintaining high security, patient privacy, and clinical compliance across every research dataset.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- RESEARCH PILLARS SECTION --- */}
        <section id="research" className="pillars-section">
          <div className="content-wrapper">
            <span className="section-subtitle">Core Initiatives</span>
            <h2 className="section-title">Research & Health Tech Pillars</h2>
            
            <div className="grid grid-cols-3 gap-md">
              <div className="card pillar-card">
                <div className="pillar-icon">🧬</div>
                <h3 className="pillar-title">Genomic Diagnostics</h3>
                <p className="pillar-desc">
                  Building scalable variant analysis pipelines to accelerate rare disease research and population genetics.
                </p>
              </div>

              <div className="card pillar-card">
                <div className="pillar-icon">🏥</div>
                <h3 className="pillar-title">Clinical Decision Systems</h3>
                <p className="pillar-desc">
                  Deploying intelligent, physician-first diagnostic aids to streamline triage and treatment decisions.
                </p>
              </div>

              <div className="card pillar-card">
                <div className="pillar-icon">📊</div>
                <h3 className="pillar-title">Epidemiological Monitoring</h3>
                <p className="pillar-desc">
                  Real-time tracking systems to analyze community health metrics and preempt disease outbreaks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- IMPACT STATS --- */}
        <section id="impact" className="impact-section">
          <div className="content-wrapper">
            <div className="stats-grid">
              <div className="stat-box">
                <span className="stat-number">100%</span>
                <span className="stat-label">Open-Access Research</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">Secure</span>
                <span className="stat-label">Clinical Data Protocols</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">Global</span>
                <span className="stat-label">Institutional Partners</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}