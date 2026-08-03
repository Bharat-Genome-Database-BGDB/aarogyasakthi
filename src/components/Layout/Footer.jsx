//src/components/Layout/Footer.jsx
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@db/supabaseClient";
import "@styles/footer.css";

/**
 * @component Footer
 * @description Master split two-section footer fully updated for AarogyaSakthi.
 * Coordinates core single-page anchor jumps and institutional ownership data layers.
 */
const Footer = () => {
  const [userRole, setUserRole] = useState("public");
  const [loading, setLoading] = useState(true);

  // --- Auth Role-Based Access Control (RBAC) Listener Preserved ---
  useEffect(() => {
    const fetchRole = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.user) {
          setUserRole("public");
          return;
        }

        const { data: roleData, error } = await supabase
          .from("user_role_assignments")
          .select("role")
          .eq("user_id", session.user.id)
          .single();

        if (!error && roleData?.role) {
          setUserRole(roleData.role.toLowerCase());
        }
      } catch (err) {
        // Silently capture for standard public navigation views
      } finally {
        setLoading(false);
      }
    };

    fetchRole();
  }, []);

  return (
    <footer className="site-footer">
      
      {/* SECTION 1: Top Navigation & Link Directory */}
      <div className="footer-inner">
        
        {/* Column 1: Core Identity Desk */}
        <div className="footer-brand">
          <strong className="footer-brand-title">AarogyaSakthi</strong>
          <address className="footer-address">
            Translational and Industry Partnerships<br />
            Clinical Integration & Technology Transfer
          </address>
        </div>

        {/* Column 2: Initiatives & Legal */}
        <div className="footer-links">
          <h4>About Initiatives</h4>
          <Link href="/#about">Our Mission</Link>
          <Link href="/faq">Frequently Asked Questions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>

        {/* Column 3: Translation & Development */}
        <div className="footer-links">
          <h4>Translational Hub</h4>
          <Link href="/#projects">Pilot Programs</Link>
          <Link href="/contact">Co-Development Form</Link>
          <a href="mailto:research@bgdb.org">Partner Relations</a>
        </div>

        {/* Column 4: Dynamic Portal Gate (RBAC) */}
        {!loading && ["admin", "superadmin", "member"].includes(userRole) && (
          <div className="footer-links member-gate-links">
            <h4>Member Area</h4>
            <Link href="/dashboard">Partner Dashboard</Link>
            <Link href="/internships">Internship Portal</Link>
          </div>
        )}
      </div>

      {/* SECTION 2: Dedicated Base Layer Metadata Attribution Bar */}
      <div className="footer-base-bar">
        <div className="footer-base-container">
          <p className="footer-copyright-statement">
            &copy; 2026 AarogyaSakthi, All rights reserved. An SSF Initiative. Managed by <a href="https://bgdb.org" target="_blank" rel="noopener noreferrer">bgdb.org</a>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;