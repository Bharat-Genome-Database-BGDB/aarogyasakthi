"use client";

import { useState } from "react";
import Layout from "@layout/Layout";
import "@styles/main.css";

const faqs = [
 {
      q: "What is AarogyaSakthi’s core mandate?",
      a: "AarogyaSakthi is the translational and industry partnership vertical of the Sivasakthi Science Foundation. Our mission is to take advanced computational biology and deep AI research models from pure laboratory discovery and translate them into validated, high-impact clinical workflows, public health initiatives, and scalable software pipelines."
    },
    {
      q: "How does AarogyaSakthi connect with GenAI and BGDB?",
      a: "We act as the implementation layer within the ecosystem. While GenAI focuses on raw machine learning model architectures and the Bharat Genome Database (BGDB) serves as the secure repository for raw genomic sequences, AarogyaSakthi bridges the gap. We package those tools into clinical Standard Operating Procedures (SOPs), software integrations, and technology packages that medical and industrial partners can deploy safely."
    },
    {
      q: "What are your primary translational focus areas?",
      a: "Our current operations center around three main pillars: running localized clinical pilot programs, validating AI-driven computational tools (such as diagnostic screening models and drug-target simulators), and managing secure technology transfers for health-tech startups, healthcare networks, and research institutions."
    },
    {
      q: "How can industry partners co-develop projects with AarogyaSakthi?",
      a: "Medical institutions, agricultural enterprises, and biotechnology firms can submit co-development queries via our interactive contact hub. We evaluate proposals based on technical alignment, public health merit, and safety boundaries. Approved initiatives are executed under strict Master Collaboration Agreements (MCAs) supported by our engineering teams."
    },
    {
      q: "How does AarogyaSakthi handle clinical data security and compliance?",
      a: "Data protection is central to our validation environments. AarogyaSakthi enforces absolute data de-identification and anonymization protocols before any clinical or genomic metadata enters our training or inference setups. We operate in alignment with international biomedical standards and public health compliance guidelines to ensure total institutional security."
    },
    {
      q: "What are your validation benchmarks for Standard Operating Procedures (SOPs)?",
      a: "Every pipeline validated by AarogyaSakthi undergoes rigorous, multi-tiered stress testing against diverse datasets to guarantee reproducibility, accuracy, and absolute transparency. This 'Shift-Left' verification architecture guarantees that algorithms perform predictably and safely in real-world environments before clinical or agricultural field deployment."
    }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Layout 
      title="Frequently Asked Questions | AarogyaSakthi" 
      description="Common inquiries regarding computational access, research partnerships, open-access databases, and academic fellowships."
    >
    <main className="container">
      
      <header className="hero-identity-group">
        <h1 className="hero-main-title">Frequently Asked Questions</h1>
        <p className="hero-sub-tagline">
          Common inquiries regarding computational access, research partnerships, open-access databases, and academic fellowships.
        </p>
      </header>

      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <article key={idx} className="card">
            <h3 className="faq-question">
              <i className="fas fa-question-circle"></i>
              {faq.q}
            </h3>
            <div className="faq-answer">
              <p className="body-text">{faq.a}</p>
            </div>
          </article>
        ))}
      </div>

    </main>
    </Layout>
  );

}