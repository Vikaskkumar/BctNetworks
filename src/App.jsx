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
import Login from './components/Login';
import { supabase, isSupabaseConfigured } from './supabaseClient';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [user, setUser] = useState(() => {
    return localStorage.getItem('userEmail') || null;
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // Smooth scroll back to top when switching views
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Listen to Supabase Auth State Changes (Email / Google OAuth)
  useEffect(() => {
    if (!isSupabaseConfigured) return;

    // Check active session on initial render
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user.email);
        localStorage.setItem('userEmail', session.user.email);
      }
    });

    // Subscribe to auth state changes (login, signup, OAuth redirect)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user.email);
        localStorage.setItem('userEmail', session.user.email);
      } else {
        setUser(null);
        localStorage.removeItem('userEmail');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLoginSuccess = (email) => {
    setUser(email);
    localStorage.setItem('userEmail', email);
    window.location.hash = ''; // Redirect to home on login success
  };

  const handleSignOut = async () => {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    setUser(null);
    localStorage.removeItem('userEmail');
    window.location.hash = ''; // Redirect to home on sign out
  };

  const isPricingPage = currentHash === '#pricing';
  const isEcosystemPage = currentHash === '#ecosystem';
  const isContactPage = currentHash === '#contact';
  const isLoginPage = currentHash === '#login';

  return (
    <div className="min-h-screen bg-[#06060c] font-sans selection:bg-purple-500/30 selection:text-white text-slate-300">
      <Navbar user={user} onSignOut={handleSignOut} />

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
      ) : isLoginPage ? (
        // Render ONLY the login page when hash is #login
        <div className="pt-20">
          <Login onLoginSuccess={handleLoginSuccess} />
        </div>
      ) : (
        // Render home page modules (without Ecosystem, Pricing, Contact and Login)
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