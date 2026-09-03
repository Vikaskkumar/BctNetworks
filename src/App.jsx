import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SolutionsGrid from './components/SolutionsGrid';
import IndustriesServed from './components/IndustriesServed';
import TechPartners from './components/TechPartners';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-between">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SolutionsGrid />
        <IndustriesServed />
        <TechPartners />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}