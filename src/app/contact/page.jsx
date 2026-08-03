//src/app/contact/page.jsx
'use client'; 

import Layout from "@layout/Layout";
import "@styles/main.css";

export default function ContactPage() {
  return (
    <Layout title="Contact & Co-Development" description="Initiate translational health pilot programs, validate clinical AI pipelines, and establish industry partnerships with AarogyaSakthi.">
      <main className="contact-container">
        
        <header className="hero-identity-group">
          <h1 className="hero-main-title">Contact & Collaborations</h1>
          <p className="hero-sub-tagline">Partner with our translational teams to bridge the gap between advanced models and real-world clinical impact.</p>
        </header>

        <div className="contact-grid">
          
          {/* Left Column: Context Channels */}
          <aside className="contact-info-sidebar">
            <div className="info-card">
              <h3><i className="fas fa-map-marker-alt"></i> Translational Desk</h3>
              <p>
                Mayurum, Kowdiar,<br />
                Thiruvananthapuram, Kerala, India
              </p>
              <p style={{ marginTop: '8px' }}>
                <strong>Partner Relations Email:</strong> research@bgdb.org
              </p>
            </div>

            <div className="info-card">
              <h3><i className="fas fa-handshake"></i> Industry Co-Development</h3>
              <p>
                We collaborate with healthcare systems, biotechnology firms, and health-tech enterprises to package machine learning models into robust, field-deployable tools.
              </p>
            </div>

            <div className="info-card">
              <h3><i className="fas fa-microscope"></i> Pilot & SOP Validation</h3>
              <p>Organizations leverage our translational pipelines for:</p>
              <ul>
                <li>Clinical verification of AI models</li>
                <li>Standard Operating Procedure (SOP) stress testing</li>
                <li>Data de-identification and privacy compliance mapping</li>
              </ul>
            </div>
          </aside>

          {/* Right Column: Interaction Form Block */}
          <section className="contact-form-card">
            <form onSubmit={(e) => e.preventDefault()}>
              
              <div className="form-group">
                <label htmlFor="name">Full Name / Contact Person</label>
                <input type="text" id="name" placeholder="Your name" required />
              </div>

              <div className="form-group">
                <label htmlFor="organization">Institution / Corporate Entity</label>
                <input type="text" id="organization" placeholder="e.g., Global Health Network, Hospital, Startup" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Work Email Address</label>
                <input type="email" id="email" placeholder="name@organization.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="engagement">Collaboration Type</label>
                <input type="text" id="engagement" placeholder="Pilot Program, SOP Validation, or Technology Transfer" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Parameters & Objectives</label>
                <textarea id="message" rows="5" placeholder="Describe your operational model, computational requirements, and translation goals..." required></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                Submit Partnership Query <i className="fas fa-paper-plane"></i>
              </button>

            </form>
          </section>

        </div>
      </main>
    </Layout>
  );
}