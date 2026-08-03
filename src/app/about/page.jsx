//src/app/about/page.jsx
'use client';
import "@styles/main.css";

/**
 * @component AboutSection
 * @description Flat scrolling component section detailing AarogyaSakthi's translational history, 
 * mission, and industry integration directives. Integrated directly into the home page viewport.
 */
export default function AboutSection() {
  return (
    <section id="about" className="story-container">
      
      {/* Section Header */}
      <header className="story-hero-section">
        <span className="label-tag" style={{ marginBottom: '0.5rem' }}>Our Mandate</span>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--ink-primary)', fontWeight: '700' }}>
          Our Story & Translational Mission
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '16px', marginTop: '8px' }}>
          Bridging advanced computational discoveries with actionable medical, clinical, and industrial applications.
        </p>
      </header>

      <article className="story-narrative" style={{ marginTop: '40px' }}>
        
        {/* Paragraph Block 1 */}
        <div className="story-block">
          <p>
            Operating as the vital translation engine under the Sivasakthi Science Foundation umbrella, 
            <strong> AarogyaSakthi</strong> bridges the critical operational gap between raw laboratory code and physical clinical settings. 
            While our sister platforms discover predictive model configurations or securely catalogue raw genomic sequencing arrays, 
            our responsibility is implementing those technical systems safely into hospitals, diagnostic grids, and industrial workflows.
          </p>
          <p>
            By building formalized relationships with healthcare organizations, agricultural labs, and health-tech providers, 
            we engineer robust, field-deployable verification pipelines. This ensures that deep data insights are translated smoothly into 
            reproducible, validated software protocols capable of enhancing community wellness infrastructures.
          </p>
        </div>

        {/* Mission & Directives Callout Grid */}
        <div className="story-callout-grid">
          
          <div className="story-card">
            <h3>Our Mission</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
              To package computational genomics and deep AI model structures into clear, accessible Standard Operating Procedures (SOPs) 
              and verified technologies that allow research groups and industry partners to resolve real-world clinical challenges.
            </p>
          </div>

          <div className="story-card">
            <h3>Core Directives</h3>
            <ul>
              <li>Managing safe, scalable industrial Technology Transfers.</li>
              <li>Executing controlled corporate and hospital Pilot Programs.</li>
              <li>Enforcing absolute clinical data de-identification and privacy audits.</li>
              <li>Deploying robust verification pipelines for field systems.</li>
            </ul>
          </div>

        </div>

        {/* Paragraph Block 2 */}
        <div className="story-block" style={{ marginTop: '16px' }}>
          <h2 style={{ fontSize: '24px' }}>Scaling the Implementation Layer</h2>
          <p>
            Our operational journey started with a core realization: advanced machine learning models frequently remain isolated inside 
            academic spaces because they lack clear execution architectures or run into regulatory data barriers. AarogyaSakthi was 
            designed specifically to break down those barriers by introducing proactive quality engineering directly into computational biology.
          </p>
          <p>
            Today, our teams process complex data pipelines, structure cross-organizational pilot initiatives, and build open verification toolsets. 
            By connecting raw computational code directly with industry execution strategies, we make certain that the biological insights 
            of today are successfully delivered into the clinical workflows of tomorrow.
          </p>
        </div>

      </article>
    </section>
  );
}