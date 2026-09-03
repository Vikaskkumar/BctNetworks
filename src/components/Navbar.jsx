import { useState } from 'react';
import { ArrowRight, Menu, X, Sun, Moon } from 'lucide-react';
import BctLogo from './BctLogo';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SOLUTIONS', href: '#solutions' },
  { name: 'INDUSTRIES', href: '#industries' },
  { name: 'CONTACT', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    setDark(isDark);
    localStorage.setItem('bct-theme', isDark ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800">
      <div className="container-custom flex items-center justify-between h-14">
        <a href="#home"><BctLogo /></a>
        <nav className="hidden md:flex items-center space-x-5 text-xs font-bold">
          {navLinks.map((l) => (
            <a key={l.name} href={l.href} className="text-slate-700 dark:text-slate-300 hover:text-[#E51D25]">{l.name}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="p-1 text-slate-700 dark:text-slate-300" aria-label="Toggle Theme">
            {dark ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4" />}
          </button>
          <a href="#contact" className="btn-primary">
            <span>QUOTE</span>
            <ArrowRight className="w-3 h-3" />
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-1 text-slate-700 dark:text-slate-300">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 p-3 space-y-2 text-xs font-bold">
          {navLinks.map((l) => (
            <a key={l.name} href={l.href} onClick={() => setMenuOpen(false)} className="block py-1 text-slate-700 dark:text-slate-300">{l.name}</a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
