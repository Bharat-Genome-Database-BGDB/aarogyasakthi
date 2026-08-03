'use client';

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@styles/header.css";

/**
 * @component Header
 * @description Double-Header Navigation structured for AarogyaSakthi.
 * Implements smooth-scrolling hash paths for streamlined page architecture.
 */
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef();

  // --- AarogyaSakthi Smooth-Scroll Navigation Setup ---
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Initiatives", to: "/about" },       
    { label: "Translational Projects", to: "/#projects" }, 
    { label: "Contact Us", to: "/contact" }, 
  ];

  // Global foundation network mapping
  const SSF_ECOSYSTEM = [
    { name: "SSF", url: "https://www.sivasakthifoundation.org" },
    { name: "GenAI", url: "https://genairesearch.org" },
    { name: "BGDB", url: "https://bharatgenomedatabase.org" },
    { name: "AarogyaSakthi", url: "https://aarogyasakthi.com" },
  ];

  return (
    <header className="site-header" ref={menuRef}>
      {/* 1. Top Bar: Global Standard Ecosystem Layout */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <nav className="top-bar-ecosystem">
              {SSF_ECOSYSTEM.map((site, index) => (
                <div key={site.name} className="nav-wrapper-item">
                  <a href={site.url} target="_blank" rel="noopener noreferrer" className="nav-item-link">
                    {site.name}
                  </a>
                  {index < SSF_ECOSYSTEM.length - 1 && <span className="separator">|</span>}
                </div>
              ))}
            </nav>
          </div>
          <div className="top-bar-socials">
            <a href="https://www.linkedin.com/company/sivasakthi-science-foundation" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
              <a href="https://x.com/SSF_handle" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/@SivasakthiScienceFoundation" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/sivasakthiscience/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Shell - Branded for AarogyaSakthi */}
      <div className="main-nav-container">
        <div className="nav-wrapper">
          <Link href="/" className="header__brand">
            <img src="/images/global/Logo.png" alt="AarogyaSakthi Logo" className="brand-logo" />
            <div className="brand-text">
              <h1 className="brand-title">AarogyaSakthi</h1>
              <p className="brand-tagline">Transitional and Industry Partnerships</p>
            </div>
          </Link>

          <button
            className={`mobile-nav-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>

          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              {navLinks.map((link, index) => (
                <li key={index} className="nav-item">
                  <Link 
                    href={link.to} 
                    className={`nav-link-item ${pathname === link.to ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;