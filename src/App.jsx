import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Ecosystem from './components/Ecosystem';
import Pricing from './components/Pricing';

import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#06060c] font-sans selection:bg-purple-500/30 selection:text-white text-slate-300">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Ecosystem />
      <Pricing />
      <Footer />
    </div>
  );
}