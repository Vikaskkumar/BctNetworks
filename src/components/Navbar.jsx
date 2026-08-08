import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';
import BctLogo from './BctLogo';

const Navbar = ({ activePage = 'home', onNavigate = () => {}, theme = 'light', onToggleTheme = () => {} }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'HOME', href: '#home' },
    { id: 'about', name: 'ABOUT US', href: '#about' },
    {
      id: 'solutions',
      name: 'SOLUTIONS',
      href: '#solutions',
      subItems: [
        { name: 'Enterprise Networking', filter: 'networking', href: '#solutions' },
        { name: 'Security & Surveillance', filter: 'security', href: '#solutions' },
        { name: 'Structured Cabling', filter: 'cabling', href: '#solutions' },
        { name: 'Unified Communication', filter: 'communication', href: '#solutions' },
      ]
    },
    { id: 'services', name: 'SERVICES', href: '#services' },
    {
      id: 'industries',
      name: 'INDUSTRIES',
      href: '#industries',
      subItems: [
        { name: 'Corporate Offices', filter: 'corporate', href: '#industries' },
        { name: 'Hospitality & Hotels', filter: 'hospitality', href: '#industries' },
        { name: 'Healthcare & Hospitals', filter: 'healthcare', href: '#industries' },
      ]
    },
    { id: 'projects', name: 'PROJECTS', href: '#projects' },
    { id: 'partners', name: 'PARTNERS', href: '#partners' },
    {
      id: 'resources',
      name: 'RESOURCES',
      href: '#resources',
      subItems: [
        { name: 'Whitepapers', filter: 'whitepaper', href: '#resources' },
        { name: 'Blueprints', filter: 'blueprint', href: '#resources' },
      ]
    },
    { id: 'contact', name: 'CONTACT US', href: '#contact' },
  ];

  const handleNavClick = (e, pageId, subFilter) => {
    e.preventDefault();
    onNavigate(pageId, subFilter);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled 
          ? 'shadow-md bg-white/95 dark:bg-slate-900/95 border-b-0' 
          : 'shadow-sm bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>

          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex-shrink-0 focus:outline-none rounded cursor-pointer"
          >
            <BctLogo isDark={theme === 'dark'} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8 h-full">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <div key={link.id} className="relative group h-full flex items-center">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`relative flex items-center gap-1 text-[11px] font-extrabold tracking-wider transition-colors duration-200 h-full cursor-pointer ${
                      isActive
                        ? 'text-[#E51D25]'
                        : 'text-gray-800 dark:text-slate-200 hover:text-[#E51D25] dark:hover:text-[#E51D25]'
                    }`}
                  >
                    {link.name}
                    {link.subItems && (
                      <ChevronDown className="w-3 h-3 text-gray-400 dark:text-slate-500 group-hover:rotate-180 transition-transform duration-300" />
                    )}

                    {/* Animated Underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2.5px] bg-[#E51D25] rounded-t-md transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>

                  {/* Desktop Dropdown Menu */}
                  {link.subItems && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform group-hover:translate-y-0 translate-y-2 z-50">
                      <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-xl rounded-lg py-2 w-56 flex flex-col relative before:content-[''] before:absolute before:-top-2 before:left-0 before:w-full before:h-4">
                        {link.subItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={(e) => handleNavClick(e, link.id, subItem.filter)}
                            className="px-4 py-2.5 text-xs font-semibold text-gray-700 dark:text-slate-200 hover:text-[#E51D25] dark:hover:text-[#E51D25] hover:bg-red-50/50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* Dark/Light Mode Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-full border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center gap-2 bg-[#E51D25] hover:bg-[#c9151c] text-white text-xs font-extrabold px-6 py-3 rounded-md hover:-translate-y-0.5 tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex lg:hidden items-center gap-2">
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 text-gray-700 dark:text-slate-300 border border-gray-100 dark:border-slate-800 rounded-full"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500 hover:bg-gray-50 dark:hover:bg-slate-800 focus:outline-none transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-850 overflow-hidden transition-all duration-300 ease-in-out shadow-lg absolute w-full ${
          mobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <div key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-md text-xs font-bold transition-colors ${
                    isActive
                      ? 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400'
                      : 'text-gray-800 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-red-600'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.subItems && <ChevronDown className="w-4 h-4 text-gray-400" />}
                </a>

                {link.subItems && (
                  <div className="pl-8 pr-4 py-1 space-y-1">
                    {link.subItems.map(sub => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        onClick={(e) => handleNavClick(e, link.id, sub.filter)}
                        className="block px-4 py-2 text-xs font-semibold text-gray-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 rounded-md"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="pt-4 mt-2 border-t border-gray-100 dark:border-slate-800 px-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full flex items-center justify-center gap-2 bg-[#E51D25] text-white text-xs font-bold px-4 py-3.5 rounded hover:bg-[#c9151c] transition-colors shadow-sm"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#E51D25] px-4 py-1.5 text-center text-[10px] font-extrabold tracking-[0.16em] text-white uppercase">
        This website is currently under testing
      </div>
    </header>
  );
};

export default Navbar;
