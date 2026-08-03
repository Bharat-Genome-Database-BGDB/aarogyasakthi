//src/app/about/page.jsx
'use client';

import Layout from "@layout/Layout";
import "@styles/main.css";

/**
 * @component AboutPage
 * @description Flat scrolling page detailing AarogyaSakthi's translational history, 
 * mission, and industry integration directives. Wrapped in the global Layout shell.
 */
export default function AboutPage() {
  return (
    <Layout 
      title="About Our Story & Translational Mission | AarogyaSakthi" 
      description="Bridging advanced computational discoveries with actionable medical, clinical, and industrial applications."
    >
      <main className="container py-xl">
        
        {/* Section Header */}
        <header className="hero mb-lg">
          <span className="badge mb-md">Our Mandate</span>
          <h1 className="hero-title">
            Our Story & Translational Mission
          </h1>
          <p className="hero-tagline">
            Bridging advanced computational discoveries with actionable medical, clinical, and industrial applications.
          </p>
        </header>

        <article className="section-stack">
          
          {/* Paragraph Block 1 */}
          <div className="card p-xl">
            <p className="card-body">
              Operating as the vital translation engine under the Sivasakthi Science Foundation umbrella, 
              <strong> AarogyaSakthi</strong> bridges the critical operational gap between raw laboratory code and physical clinical settings. 
              While our sister platforms discover predictive model configurations or securely catalogue raw genomic sequencing arrays, 
              our responsibility is implementing those technical systems safely into hospitals, diagnostic grids, and industrial workflows.
            </p>
            <p className="card-body" style={{ marginTop: '16px' }}>
              By building formalized relationships with healthcare organizations, agricultural labs, and health-tech providers, 
              we engineer robust, field-deployable verification pipelines. This ensures that deep data insights are translated smoothly into 
              reproducible, validated software protocols capable of enhancing community wellness infrastructures.
            </p>
          </div>

          {/* Mission & Directives Callout Grid */}
          <div className="grid-2">
            <div className="card p-xl">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-body" style={{ marginTop: '12px' }}>
                To package computational genomics and deep AI model structures into clear, accessible Standard Operating Procedures (SOPs) 
                and verified technologies that allow research groups and industry partners to resolve real-world clinical challenges.
              </p>
            </div>

            <div className="card p-xl">
              <h3 className="card-title">Core Directives</h3>
              <ul className="card-list" style={{ marginTop: '12px' }}>
                <li>Managing safe, scalable industrial Technology Transfers.</li>
                <li>Executing controlled corporate and hospital Pilot Programs.</li>
                <li>Enforcing absolute clinical data de-identification and privacy audits.</li>
                <li>Deploying robust verification pipelines for field systems.</li>
              </ul>
            </div>
          </div>

          {/* Paragraph Block 2 */}
          <div className="card p-xl">
            <h2 className="card-title" style={{ fontSize: '1.75rem', marginBottom: '16px' }}>Scaling the Implementation Layer</h2>
            <p className="card-body">
              Our operational journey started with a core realization: advanced machine learning models frequently remain isolated inside 
              academic spaces because they lack clear execution architectures or run into regulatory data barriers. AarogyaSakthi was 
              designed specifically to break down those barriers by introducing proactive quality engineering directly into computational biology.
            </p>
            <p className="card-body" style={{ marginTop: '16px' }}>
              Today, our teams process complex data pipelines, structure cross-organizational pilot initiatives, and build open verification toolsets. 
              By connecting raw computational code directly with industry execution strategies, we make certain that the biological insights 
              of today are successfully delivered into the clinical workflows of tomorrow.
            </p>
          </div>

        </article>
      </main>
    </Layout>
  );
}