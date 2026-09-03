import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SolutionsGrid from './components/SolutionsGrid';
import IndustriesServed from './components/IndustriesServed';
import TechPartners from './components/TechPartners';
import ContactSection from './components/ContactSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#050507', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <AboutSection />
        <SolutionsGrid />
        <IndustriesServed />
        <TechPartners />
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}