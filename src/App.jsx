import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import bgVideo from './assets/bg3.mp4';

// Lazy loaded components (below the fold)
const AboutSection = lazy(() => import('./components/AboutSection'));
const SolutionsGrid = lazy(() => import('./components/SolutionsGrid'));
const IndustriesServed = lazy(() => import('./components/IndustriesServed'));
const TechPartners = lazy(() => import('./components/TechPartners'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="app-root min-h-screen relative">
      {/* Global Fixed Background Video */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-15 dark:opacity-30 scale-[1.05] mix-blend-multiply dark:mix-blend-screen dark:contrast-125"
          style={{ filter: 'saturate(1.2)' }}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Global Overlays - Removed to let video shine */}
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main style={{ flex: 1 }}>
          <Hero />

          <Suspense fallback={<div className="min-h-screen" style={{ background: 'var(--bg)' }} />}>
            <AboutSection />
            <SolutionsGrid />
            <IndustriesServed />
            <TechPartners />
            <ContactSection />
            <FAQ />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}