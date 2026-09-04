import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

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
    <div className="app-root min-h-screen relative flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        <Hero />

        <Suspense fallback={<div className="min-h-screen bg-[var(--bg)]" />}>
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
  );
}