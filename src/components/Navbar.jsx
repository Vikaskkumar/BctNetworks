import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import BctLogo from './BctLogo';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${scrolled
          ? 'bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="container-custom h-[72px] flex items-center justify-between relative z-20">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="#home" className="shrink-0 flex items-center text-[var(--text)] transition-opacity hover:opacity-70" onClick={() => setOpen(false)}>
            <BctLogo className="h-6" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] text-[var(--text)] hover:opacity-70 transition-opacity font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full text-[var(--text)] hover:bg-[var(--border)] transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex btn-primary !py-2 !px-4"
          >
            Get Quote
          </a>

          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="md:hidden flex h-9 w-9 items-center justify-center text-[var(--text)] focus:outline-none"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 z-10 w-full bg-[var(--bg)] border-b border-[var(--border)] shadow-xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[20px] font-medium text-[var(--text)] pb-4 border-b border-[var(--border)]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center w-full btn-primary"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}