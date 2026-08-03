'use client';
import React from 'react';
import Head from 'next/head';

/**
 * @component SEO
 * @description Standardized SEO metadata injector tailored specifically for AarogyaSakthi.
 * Coordinates page crawler attributes to protect institutional brand positioning.
 * * @param {string} title - Page-specific title breadcrumb
 * @param {string} description - Explicit meta description string
 * @param {Array<string>} keywords - Array of keyword indexes
 * @param {string} image - Path to the active social sharing image asset
 */
const SEO = ({ title, description, keywords, image }) => {
  // --- AAROGYASAKTHI BRANDING CONFIGURATION ---
  const brandName = 'AarogyaSakthi';
  const titleSuffix = ' | AarogyaSakthi';
  const siteUrl = 'https://aarogyasakthi.com';
  const defaultImage = '/images/global/Seo_aarogyasakthi.png';
  
  // --- LOGIC RESOLUTION ---
  const pageTitle = title 
    ? `${title}${titleSuffix}` 
    : `${brandName} | Transitional and Industry Partnerships`;

  const pageDescription = description || 'Translating deep computational genomics models and cutting-edge artificial intelligence pipelines into real-world healthcare impact, validated SOPs, and commercial pilot programs.';
  
  const defaultKeywords = [
    'AarogyaSakthi',
    'Genomics Translation',
    'AI Healthcare India',
    'Technology Transfer',
    'Clinical Validation',
    'Sivasakthi Science Foundation',
    'Biotech Industry Partnerships',
    'Public Health Innovation'
  ];
  
  const pageKeywords = keywords?.length ? keywords.join(', ') : defaultKeywords.join(', ');
  const pageImage = image || `${siteUrl}${defaultImage}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />

      {/* Twitter Card Architecture */}
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SEO;