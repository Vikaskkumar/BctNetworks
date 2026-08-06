import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Ecosystem from './components/Ecosystem';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Expertise from './components/Expertise';
import CustomerReviews from './components/CustomerReviews';
import Contact from './components/Contact';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // Smooth scroll back to top when switching views
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isPricingPage = currentHash === '#pricing';
  const isEcosystemPage = currentHash === '#ecosystem';
  const isContactPage = currentHash === '#contact';

  return (
    <div className="min-h-screen bg-[#06060c] font-sans selection:bg-purple-500/30 selection:text-white text-slate-300">
      <Navbar />

      {isPricingPage ? (
        // Render ONLY the pricing page when hash is #pricing
        <div className="pt-20">
          <Pricing />
        </div>
      ) : isEcosystemPage ? (
        // Render ONLY the ecosystem page when hash is #ecosystem
        <div className="pt-20">
          <Ecosystem />
        </div>
      ) : isContactPage ? (
        // Render ONLY the contact page when hash is #contact
        <div className="pt-20">
          <Contact />
        </div>
      ) : (
        // Render home page modules (without Ecosystem, Pricing and Contact)
        <>
          <Hero />
          <Stats />
          <Expertise />
          <CustomerReviews />
          <FAQ />
        </>
      )}

      <Footer />
    </div>
  );
}