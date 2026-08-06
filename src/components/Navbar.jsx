import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Apply theme class to document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
    } else {
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Track scroll position and URL hash changes
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleHash = () => setActiveHash(window.location.hash || '#');

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHash);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Floating Island Container */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-4 px-4 transition-all duration-300">
        <nav
          className={`flex items-center justify-between transition-all duration-300 rounded-full border border-white/10 ${
            isScrolled
              ? 'w-full max-w-5xl bg-black/60 backdrop-blur-xl py-2.5 px-6 shadow-lg shadow-black/25'
              : 'w-full max-w-7xl bg-transparent py-4 px-4 md:px-6'
          }`}
        >
          {/* Brand / Logo */}
          <a
            href="#"
            onClick={() => {
              window.location.hash = '';
              setActiveHash('#');
            }}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            {/* Minimalist Geometric Icon */}
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.03] navbar-brand-icon">
              <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 5L12 19L20 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Typography brand name */}
            <span className="font-display font-extrabold text-base tracking-tight text-white transition-colors html-light-text-dark">
              VARDHMAN <span className="font-normal text-slate-400">TV</span>
            </span>
          </a>

          {/* Desktop Navigation Links (Simple, Understated) */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link, index) => {
              const isActive = (activeHash === '' && link.href === '#') || activeHash === link.href;

              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setActiveHash(link.href)}
                  className={`text-[13px] font-medium transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 html-light-text-muted'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white rounded-full navbar-active-bar"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Action Buttons (Right Side) */}
          <div className="hidden md:flex items-center gap-5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                /* Sun Icon for Light Mode */
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                /* Moon Icon for Dark Mode */
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <a
              href="#"
              className="text-[13px] font-semibold text-slate-400 hover:text-white transition-colors html-light-text-muted"
            >
              Sign In
            </a>

            {/* Premium Solid Black & White CTA Button */}
            <button className="px-4 py-2 text-xs font-bold text-black bg-white hover:bg-slate-100 rounded-full transition-colors cursor-pointer navbar-cta-btn">
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Hamburger & Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4.5 h-4.5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col justify-between pb-10 animate-in fade-in duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveHash(link.href);
                }}
                className="text-lg font-semibold text-slate-200 hover:text-white py-3.5 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-500 text-sm">→</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-6">
            <button
              onClick={toggleTheme}
              className="w-full py-3 px-5 text-xs font-semibold border border-white/10 rounded-full flex items-center justify-center gap-2 text-slate-300 bg-white/5 cursor-pointer"
            >
              {theme === 'dark' ? (
                <>
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span>Dark Mode</span>
                </>
              )}
            </button>
            <button className="w-full py-3 px-5 text-xs font-bold text-black bg-white rounded-full cursor-pointer">
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </>
  );
}