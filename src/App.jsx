import { useState, useEffect } from 'react';

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Home Page Showcase Sections
import Hero from './components/Hero';
import TrustedPartners from './components/TrustedPartners';
import AboutSection from './components/AboutSection';
import SolutionsGrid from './components/SolutionsGrid';
import TechPartners from './components/TechPartners';
import IndustriesServed from './components/IndustriesServed';
import FeaturedProject from './components/FeaturedProject';
import WhyChooseUs from './components/WhyChooseUs';
import CtaBanner from './components/CtaBanner';

// Import Dedicated Pages
import AboutPage from './components/pages/AboutPage';
import SolutionsPage from './components/pages/SolutionsPage';
import ServicesPage from './components/pages/ServicesPage';
import IndustriesPage from './components/pages/IndustriesPage';
import ProjectsPage from './components/pages/ProjectsPage';
import PartnersPage from './components/pages/PartnersPage';
import ResourcesPage from './components/pages/ResourcesPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [subFilter, setSubFilter] = useState('all');
  
  // Theme Management
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('bct-theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      body.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      root.removeAttribute('data-theme');
      body.removeAttribute('data-theme');
    }
    localStorage.setItem('bct-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Read URL Hash on load & handle browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'solutions', 'services', 'industries', 'projects', 'partners', 'resources', 'contact'];
      
      if (validPages.includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage('home');
      }
    };

    handleHashChange();
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  // Navigation Trigger Handler
  const handleNavigate = (pageId, filter = 'all') => {
    setActivePage(pageId);
    setSubFilter(filter);
    window.location.hash = `#${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Dynamic Page View
  const renderContent = () => {
    switch (activePage) {
      case 'about':
        return <AboutPage />;
      case 'solutions':
        return <SolutionsPage initialFilter={subFilter} />;
      case 'services':
        return <ServicesPage />;
      case 'industries':
        return <IndustriesPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'partners':
        return <PartnersPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return (
          <main>
            <Hero />
            <TrustedPartners />
            <AboutSection onNavigate={handleNavigate} />
            <SolutionsGrid onNavigate={handleNavigate} />
            <TechPartners />
            <IndustriesServed />
            <FeaturedProject />
            <WhyChooseUs />
            <CtaBanner />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white dark:bg-slate-950 dark:text-slate-100 flex flex-col justify-between transition-colors duration-300">
      <Navbar activePage={activePage} onNavigate={handleNavigate} theme={theme} onToggleTheme={toggleTheme} />
      <div className="flex-grow">
        {renderContent()}
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;