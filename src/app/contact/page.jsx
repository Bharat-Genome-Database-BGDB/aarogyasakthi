'use client';

import { useState } from "react";
import Layout from "@layout/Layout";
import { supabase } from "@db/supabaseClient";
import "@styles/main.css";
import "@styles/components/forms.css";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    try {
      const { error: supabaseError } = await supabase
        .from("contact_submissions")
        .insert([{
          org_slug: "aarogyasakthi",
          name,
          email,
          subject,
          message,
          form_intent: "contact_page",
          status: "pending"
        }]);

      if (supabaseError) throw new Error(supabaseError.message);

      setFormStatus("success");
      e.target.reset();
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(error.message || "Failed to submit inquiry. Please try again.");
    }
  };

  return (
    <Layout title="Contact & Connect" description="Get in touch with AarogyaSakthi.">
      <main className="container py-xl">
        <header className="hero mb-lg">
          <h1 className="hero-title">Contact & Clinical Collaborations</h1>
          <p className="hero-tagline">
            Connect with our public health and translational clinical team for health screening pilots, institutional partnerships, and community care initiatives.
          </p>
        </header>

        <section className="contact-grid-layout">
          {/* Left Column: Context Channels */}
          <div className="section-stack">
            <div className="card p-xl contact-sidebar">
              <div className="icon-box"><i className="fas fa-clinic-medical"></i></div>
              <h3 className="card-title">AarogyaSakthi Headquarters</h3>
              <p className="card-body">
                AarogyaSakthi Initiative<br />
                7, Belhaven Gardens, Kawdiar,<br />
                Thiruvananthapuram, Kerala, India
              </p>
              <p className="card-body"><strong>Email:</strong> contact@aarogyasakthi.org</p>
            </div>

            <div className="card p-xl contact-sidebar">
              <div className="icon-box"><i className="fas fa-heartbeat"></i></div>
              <h3 className="card-title">Clinical Pilots & Health Screening</h3>
              <p className="card-body">
                We collaborate with hospitals, healthcare workers, and regional clinics to deploy accessible screening tools and preventive health programs.
              </p>
            </div>

            <div className="card p-xl contact-sidebar">
              <div className="icon-box"><i className="fas fa-hands-helping"></i></div>
              <h3 className="card-title">Community Partnerships & Grants</h3>
              <p className="card-body">Healthcare organizations, researchers, and public policy partners can connect through:</p>
              <ul className="card-list">
                <li>Community screening & diagnostic camps</li>
                <li>Public health grant joint-proposals</li>
                <li>Clinical trial & field data partnerships</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interaction Form Block */}
          <section className="card p-xl">
            <h3 className="card-title">Send a Clinical Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name / Lead Clinician / Partner</label>
                <input type="text" id="name" name="name" placeholder="Dr. / Prof. / Your name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="name@organization.org" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Inquiry Classification</label>
                <input type="text" id="subject" name="subject" placeholder="Clinical Pilot, Grant Partnership, or Community Program" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Program or Collaboration Details</label>
                <textarea id="message" name="message" rows="5" placeholder="Describe your clinical needs, target population, or public health proposal parameters..." required></textarea>
              </div>

              {formStatus === "success" && (
                <p className="form-feedback success">✓ Thank you! Your clinical inquiry has been submitted.</p>
              )}
              {formStatus === "error" && (
                <p className="form-feedback error">⚠ Error: {errorMessage}</p>
              )}

              <button type="submit" className="submit-btn" disabled={formStatus === "submitting"}>
                {formStatus === "submitting" ? "Submitting Inquiry..." : "Submit Inquiry"}
              </button>
            </form>
          </section>
        </section>
      </main>
    </Layout>
  );
}