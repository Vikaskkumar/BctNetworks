import { ArrowRight, BarChart3, Users, Headphones, CheckCircle2 } from 'lucide-react';
import HeroNetworkDiagram from './HeroNetworkDiagram';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/40 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-gray-100/80 dark:border-slate-800/80 transition-colors duration-300">
      {/* Ambient background glow accents */}
      <div className="absolute top-12 right-1/4 w-[500px] h-[500px] bg-red-500/5 dark:bg-red-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-slate-900/5 dark:bg-slate-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Text and CTAs (5 Cols) */}
          <div className="lg:col-span-5 max-w-xl">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50/80 dark:bg-red-950/20 border border-red-100/80 dark:border-red-900/30 mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#E51D25] animate-pulse" />
              <span className="text-[#E51D25] dark:text-red-400 font-extrabold text-[11px] tracking-[0.18em] uppercase">
                ENTERPRISE NETWORKING SOLUTIONS
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 dark:text-white leading-[1.08] mb-6 tracking-tight">
              Network infrastructure <br />
              that scales with <br />
              your <span className="text-[#E51D25] relative inline-block">
                ambition.
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-red-500/20 rounded-full" />
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg font-medium">
              We design, deploy, secure, and manage enterprise networks 
              that keep your business connected, protected, and 
              always ahead.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#contact" 
                className="group inline-flex justify-center items-center gap-2.5 bg-[#E51D25] hover:bg-[#c9151c] text-white text-xs font-black px-7 py-4 rounded-full transition-all duration-300 shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5 tracking-wider uppercase"
              >
                <span>Talk to a Network Architect</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#solutions" 
                className="group inline-flex justify-center items-center gap-2.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-extrabold px-7 py-4 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 shadow-xs tracking-wider uppercase"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-200/60 dark:border-slate-800/80">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[#E51D25] dark:text-red-500">
                  <CheckCircle2 className="w-4.5 h-4.5 stroke-[2.5]" />
                  <span className="text-xl font-black text-slate-900 dark:text-white leading-none">150+</span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Projects Delivered</span>
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[#E51D25] dark:text-red-500">
                  <BarChart3 className="w-4.5 h-4.5 stroke-[2.5]" />
                  <span className="text-xl font-black text-slate-900 dark:text-white leading-none">99.99%</span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Network Uptime</span>
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[#E51D25] dark:text-red-500">
                  <Users className="w-4.5 h-4.5 stroke-[2.5]" />
                  <span className="text-xl font-black text-slate-900 dark:text-white leading-none">20+</span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Enterprise Clients</span>
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[#E51D25] dark:text-red-500">
                  <Headphones className="w-4.5 h-4.5 stroke-[2.5]" />
                  <span className="text-xl font-black text-slate-900 dark:text-white leading-none">24/7</span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Support & NOC</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: High-Fidelity 3D Isometric Network Topology Component (7 Cols) */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-center">
            <HeroNetworkDiagram />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;