// src/app/not-found.jsx

'use client';

import Link from "next/link";
import Layout from "@layout/Layout";
import "@styles/main.css";

export default function NotFound() {
  return (
    <Layout title="404 - Route Not Found" description="The requested route could not be found within the database portal.">
      <main className="notfound-main">
        <h1 className="notfound-code">404</h1>
        
        <h2 className="notfound-title">Route Not Found</h2>
        
        <p className="notfound-text">
          The page you are looking for doesn't exist or has been consolidated into one of our centralized scientific information hubs.
        </p>

        <Link href="/" className="notfound-btn">
          Return to Homepage
        </Link>
      </main>
    </Layout>
  );
}