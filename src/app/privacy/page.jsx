'use client';

import Layout from "@layout/Layout";
import "@styles/main.css";

export default function PrivacyPage() {
  return (
    <Layout 
      title="Data Privacy & Computational Terms | AarogyaSakthi" 
      description="Information about our data privacy practices and computational terms of use."
    >
      <main className="container">
        
      <header className="hero-identity-group">
        <h1 className="hero-main-title">Data Privacy & Computational Terms</h1>
        <p className="hero-sub-tagline">
          Please read our model governance standards and institutional multi-omics data protocols before interfacing with our research engines.
        </p>
      </header>

      <article>
        <div className="privacy-meta-date">
          Last Updated: August 2026
        </div>

        <section className="card">
          <h2>1. Information We Collect</h2>
          <p className="body-text">
              AarogyaSakthi collects information provided directly by users when submitting institutional contact forms, subscribing to updates, or registering for partner research access.
          </p>
        </section>

        <section className="card">
            <h2>2. Clinical & Genomic Data Ethics</h2>
          <p>
              Any clinical datasets, genomic metadata, or public health metrics managed through our platform undergo strict de-identification and ethical review protocols in full compliance with research regulations.
            </p>
        </section>

        <section className="card">
            <h2>3. How Information Is Used</h2>
         <p>
              Collected contact details are strictly used to fulfill institutional requests, facilitate research partnerships, and maintain system security. We do not sell or rent personal information to third parties.
            </p>
        </section>

 <section className="card">
            <h2>4. Ecosystem Governance</h2>
            <p>
              As an SSF Initiative managed by bgdb.org, data protection protocols are audited periodically across all network endpoints.
            </p>
          </section>
      </article>
    </main>
    </Layout>
  );
}