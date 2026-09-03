import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import BctLogo from './BctLogo';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 relative ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#272B36]'
          : 'bg-[#050505]/80 backdrop-blur-sm border-b border-transparent md:bg-transparent md:backdrop-blur-none'
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
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[14px] font-normal text-[#A6A6A6] hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 relative z-10">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-[8px] bg-white text-black font-semibold text-[14px] hover:bg-gray-200 transition-colors"
          >
            Get Quote
          </a>

          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="md:hidden relative z-30 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#A6A6A6] hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 active:scale-[0.98]"
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
            animate={{ opacity: 1, height: 'calc(100dvh - 64px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 right-0 z-10 bg-[#050505]/95 backdrop-blur-xl border-t border-[#272B36] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
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
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3.5 text-base font-medium text-[#E5E7EB] hover:bg-white/[0.04] hover:text-white transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-[#A6A6A6]">→</span>
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center py-3.5 rounded-xl bg-white text-black font-semibold text-base shadow-lg shadow-white/10"
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