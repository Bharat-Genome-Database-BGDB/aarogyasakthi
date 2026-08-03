// src/app/privacy/page.jsx

'use client';
import Layout from "@layout/Layout";
import "@styles/main.css";

export default function PrivacyPage() {
  return (
    <Layout title="Privacy Policy & Terms" description="Legal guidelines, data translation protocols, technology transfer regulations, and platform terms of use.">
      <main className="privacy-container">
        
        <header className="privacy-hero hero-identity-group">
          <h1 className="hero-main-title">Privacy Policy & Terms of Use</h1>
          <p className="hero-sub-tagline">Please review our clinical data boundaries, technology transfer disclosures, and partnership terms carefully.</p>
        </header>

        <article className="privacy-content">
          <div className="privacy-meta-date">Last Updated: June 2026</div>

          {/* Section 1: Scope of Terms & Commercial Use */}
          <section className="privacy-section">
            <h2>1. Terms of Use & Industry Engagement</h2>
            <p>
              By accessing the AarogyaSakthi platform, you agree to be bound by these terms of use. The materials, metrics, and documentation featured on this portal are engineered to facilitate translational science, validate corporate Standard Operating Procedures (SOPs), and manage industry pilot partnerships.
            </p>
            <p>
              While our computational baselines support open-science goals, using our translation templates, pilot onboarding code shells, or scaling parameters to bypass formalized research criteria or security networks is strictly prohibited.
            </p>
          </section>

          {/* Section 2: Clinical & Partnership Data Collection */}
          <section className="privacy-section">
            <h2>2. Translational Data Protection Policy</h2>
            <p>
              AarogyaSakthi is committed to data privacy and regulatory compliance. When you interface with our co-development grids, contact endpoints, or partner portals, we secure:
            </p>
            <ul>
              <li>Institutional credentials, organizational profiles, and corporate licensing records.</li>
              <li>Authorized developer coordinates and contact emails for validation tracking loops.</li>
              <li>The structural technical text parameters, code contributions, or sample metrics uploaded for project intake.</li>
            </ul>
            <p>
              **Special Clinical Note:** AarogyaSakthi does not directly host unblinded or non-consented personal health information (PHI). All data processed within our collaborative machine learning validation environments must be thoroughly de-identified, anonymized, and managed in absolute compliance with global biomedical and clinical data standards.
            </p>
          </section>

          {/* Section 3: Intellectual Property & Technology Transfer */}
          <section className="privacy-section">
            <h2>3. Intellectual Property & Technology Transfer</h2>
            <p>
              All core platform layout structures, custom UI components, and AarogyaSakthi branding marks are protected institutional properties. 
            </p>
            <p>
              Specific co-developed models, validated clinical tools, and software assets produced during formalized industry pilot programs are regulated by their independent, pre-negotiated Master Collaboration Agreements (MCAs) or Technology Transfer Protocols. 
            </p>
          </section>

          {/* Section 4: Data Distribution Boundaries */}
          <section className="privacy-section">
            <h2>4. Information Security & Third-Party Disclosure</h2>
            <p>
              We protect your institutional data using isolated cloud access parameters. AarogyaSakthi will never sell, lease, or distribute project configurations, corporate communications, or partner emails to unverified third-party marketing networks. Information is disclosed strictly when required by biomedical regulatory audits or explicit legal mandates.
            </p>
          </section>

        </article>
      </main>
    </Layout>
  );
}