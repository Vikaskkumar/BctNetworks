import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Adds a glassy frosted effect when scrolling down the page
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#' },
    { name: 'Network', href: '#' },
    { name: 'Packages', href: '#' },
    { name: 'Support', href: '#' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled
          ? 'bg-[#06060c]/80 backdrop-blur-xl border-b border-purple-500/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
 
          {/* Brand Logo - Vardhman TV */}
          <a href="#" className="flex items-center gap-2.5 group cursor-pointer">
            {/* Elegant Purple Logo Mark */}
            <div className="relative flex items-center justify-center w-8.5 h-8.5 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.4)] overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <svg className="w-5.5 h-5.5 text-white transform transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            {/* Typography */}
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-purple-300 transition-colors">
              Vardhman Tv
            </span>
          </a>
 
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 font-medium text-sm hover:text-white transition-colors duration-200 py-2 font-sans"
              >
                {link.name}
              </a>
            ))}
          </nav>
 
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center">
            <button className="bg-white text-[#06060c] px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-slate-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer">
              Client Login
            </button>
          </div>
 
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="relative w-5 h-4 flex flex-col justify-between overflow-hidden">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-left ${mobileMenuOpen ? 'rotate-45 translate-x-px' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 translate-x-4' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-left ${mobileMenuOpen ? '-rotate-45 translate-x-px' : ''}`} />
            </div>
          </button>
 
        </div>
      </div>
 
      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0a0915]/95 backdrop-blur-2xl border-b border-purple-500/10 shadow-2xl transition-all duration-300 origin-top ${mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-3 text-slate-400 font-medium rounded-lg hover:bg-white/5 hover:text-white transition-colors flex justify-between items-center"
            >
              {link.name}
              <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
          <div className="h-px bg-white/10 my-2"></div>
          <button className="w-full bg-white text-[#06060c] px-4 py-3 rounded-full text-sm font-semibold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer">
            Client Login
          </button>
        </div>
      </div>
    </header>
  );
}