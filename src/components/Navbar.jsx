import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import BctLogo from './BctLogo';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? 'bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--nav-border)] shadow-sm'
          : 'bg-[var(--bg)]/80 backdrop-blur-sm border-b border-transparent md:bg-transparent md:backdrop-blur-none'
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-3 sm:px-6 lg:px-12 h-[64px] md:h-[80px] flex items-center justify-between gap-2 sm:gap-3 relative z-20">
        {/* Logo */}
        <a
          href="#home"
          className="relative z-10 shrink-0"
          onClick={() => setOpen(false)}
        >
          <BctLogo className="h-9 sm:h-10 md:h-12" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-[14px] font-medium text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--border-light)] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 relative z-10">
          <button
            onClick={toggleTheme}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--border-light)] shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[var(--text)] text-[var(--bg)] font-semibold text-[14px] hover:opacity-90 transition-all shadow-sm hover:scale-[1.02] active:scale-95"
          >
            Get Quote
          </a>

          <button
            onClick={toggleTheme}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--border-light)] transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="md:hidden relative z-30 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--border-light)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 active:scale-[0.98]"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <motion.div
              initial={false}
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 right-0 z-10 w-full bg-[var(--nav-bg)] backdrop-blur-xl border-t border-[var(--border)] max-h-[calc(100vh-64px)] overflow-y-auto shadow-xl"
          >
            <div className="mx-auto max-w-[1300px] px-4 min-[360px]:px-6 py-5 pb-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-base font-medium text-[var(--text)] hover:bg-[var(--border-light)] transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-[var(--muted)]">→</span>
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center py-3.5 rounded-xl bg-[var(--text)] text-[var(--bg)] font-semibold text-base shadow-lg"
              >
                Get Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;