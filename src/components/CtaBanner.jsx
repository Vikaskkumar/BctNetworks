import { ArrowRight } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section className="relative py-16 lg:py-20 bg-[#0a0a0a] overflow-hidden" id="quote">
      
      {/* Background Decorative Mesh & Glow */}
      <div className="absolute inset-0 z-0">
        {/* Subtle red gradient glow on the right */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E51D25]/15 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        {/* Sweeping Line / Wave Graphic */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-full text-white/5 pointer-events-none" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
          fill="none"
        >
          <path 
            d="M0,256 C288,256 320,128 720,128 C1120,128 1152,256 1440,256 L1440,320 L0,320 Z" 
            stroke="currentColor" 
            strokeWidth="1.5"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          {/* Left Text Content */}
          <div className="max-w-2xl">
            <div className="mb-3">
              <span className="text-[#E51D25] font-extrabold text-[11px] tracking-[0.2em] uppercase">
                READY TO BUILD A STRONGER NETWORK?
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
              Let's design the right solution <br className="hidden sm:block" />
              for your business.
            </h2>
            
            <p className="text-sm text-gray-400 max-w-lg leading-relaxed">
              Share your requirements with our experts and get a 
              customized architecture that fits your environment and goals.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center gap-2.5 bg-[#E51D25] text-white text-xs font-black px-8 py-4 rounded hover:bg-[#c9151c] transition-colors shadow-lg shadow-red-900/30 uppercase tracking-wider"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center gap-2.5 bg-white text-gray-900 text-xs font-black px-8 py-4 rounded hover:bg-gray-100 transition-colors uppercase tracking-wider"
            >
              <span>SCHEDULE A CONSULTATION</span>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;