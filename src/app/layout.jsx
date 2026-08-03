import "@/app/globals.scss";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export const metadata = {
  title: "AarogyaSakthi | Life Sciences & Clinical Health Tech Initiative",
  description: "AarogyaSakthi is dedicated to advancing clinical research, genomic healthcare solutions, and scalable public health innovations.",
  keywords: ["AarogyaSakthi", "Genomic Health", "Clinical AI", "Life Sciences", "Public Health Tech"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-content-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}