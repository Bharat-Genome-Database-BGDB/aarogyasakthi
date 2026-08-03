'use client'; 

import { useState } from "react";
import { supabase } from "@db/supabaseClient";
import "@styles/main.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            org_slug: 'aarogyasakthi',
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            form_intent: 'contact_page',
            status: 'pending'
          }
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to submit inquiry. Please try again.');
    }
  };

  return (
    <main className="contact-container">
      
      <header className="hero-identity-group">
        <h1 className="hero-main-title">Contact & Clinical Collaborations</h1>
        <p className="hero-sub-tagline">
          Connect with our public health and translational clinical team for health screening pilots, institutional partnerships, and community care initiatives.
        </p>
      </header>

      <div className="contact-grid">
        
        {/* Left Column: Context Channels */}
        <aside className="contact-info-sidebar">
          <div className="card">
            <h3><i className="fas fa-clinic-medical"></i> AarogyaSakthi Headquarters</h3>
            <p>
              AarogyaSakthi Initiative<br />
              7, Belhaven Gardens, Kawdiar,<br />
              Thiruvananthapuram, Kerala, India
            </p>
            <p style={{ marginTop: '8px' }}>
              <strong>Email:</strong> contact@aarogyasakthi.org
            </p>
          </div>

          <div className="card">
            <h3><i className="fas fa-heartbeat"></i> Clinical Pilots & Health Screening</h3>
            <p>
              We collaborate with hospitals, healthcare workers, and regional clinics to deploy accessible screening tools, translational health insights, and community-driven preventive programs.
            </p>
          </div>

          <div className="card">
            <h3><i className="fas fa-hands-helping"></i> Community Partnerships & Grants</h3>
            <p>Healthcare organizations, researchers, and public policy partners can connect with our initiative through:</p>
            <ul>
              <li>Community screening & diagnostic camps</li>
              <li>Public health grant joint-proposals</li>
              <li>Clinical trial & field data partnerships</li>
            </ul>
          </div>
        </aside>

        {/* Right Column: Interaction Form Block */}
        <section className="contact-form card">
          {status === 'success' ? (
            <div className="form-success-box" style={{ textAlign: 'center', padding: '40px 20px' }}>
              <i className="fas fa-check-circle" style={{ fontSize: '48px', color: 'var(--health-green, #059669)', marginBottom: '16px' }}></i>
              <h2>Inquiry Submitted Successfully</h2>
              <p>Thank you for reaching out to AarogyaSakthi. Our clinical coordination team will review your message and respond shortly.</p>
              <button 
                type="button" 
                onClick={() => setStatus('idle')} 
                className="form-submit-btn"
                style={{ marginTop: '20px' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {status === 'error' && (
                <div className="form-error-banner" style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', color: '#991b1b', padding: '12px 16px', marginBottom: '16px' }}>
                  <i className="fas fa-exclamation-triangle"></i> {errorMessage}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Full Name / Lead Clinician / Partner</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Dr. / Prof. / Your name" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@organization.org" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Inquiry Classification</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Clinical Pilot, Grant Partnership, or Community Program" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Program or Collaboration Details</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your clinical needs, target population, or public health proposal parameters..." 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="form-submit-btn"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>Submitting Inquiry...</>
                ) : (
                  <>Submit Inquiry <i className="fas fa-paper-plane"></i></>
                )}
              </button>

            </form>
          )}
        </section>

      </div>
    </main>
  );
}