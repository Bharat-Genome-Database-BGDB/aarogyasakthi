// src/app/layout.jsx
import Header from "@/components/Layout/Header"; 
import Footer from "@/components/Layout/Footer";
import "./globals.scss";

// Metadata works flawlessly now that this is a Server Component
export const metadata = {
  title: "AarogyaSakthi",
  description: "Transitional and Industry Partnerships.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome v6 CSS CDN link matching original code setup */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Header />

        {/* Unified main layout container wrapper */}
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}