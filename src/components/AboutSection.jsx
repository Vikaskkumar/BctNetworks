import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Shield, Activity } from 'lucide-react';

const AboutSection = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) observer.unobserve(currentRef);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#fcfcfc] dark:from-slate-950 dark:to-slate-900 overflow-hidden transition-colors duration-300"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 max-w-xl">

            {/* Animated Header */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#E51D25]"></span>
                <span className="text-[#E51D25] font-extrabold text-[11px] tracking-[0.2em] uppercase">
                  ABOUT BCT NETWORKS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight uppercase">
                YOUR TRUSTED <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-slate-400">
                  INFRASTRUCTURE
                </span> PARTNER
              </h2>
            </div>

            {/* Animated Paragraphs */}
            <div
              className={`text-gray-600 dark:text-slate-400 text-sm leading-relaxed mb-8 transform transition-all duration-1000 delay-200 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="space-y-5">
                <p>
                  BCT Networks is a Jaipur-based technology infrastructure
                  company delivering integrated solutions in networking,
                  communications, security, audio visual, fire safety, data
                  infrastructure and building automation.
                </p>
                <p>
                  We combine deep technical expertise with best-in-class
                  technologies to design, deploy and maintain future-ready
                  solutions for enterprises and organizations.
                </p>
              </div>

              {/* Features Row */}
              <div className="grid grid-cols-2 gap-4 mt-8 py-6 border-y border-gray-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-950/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#E51D25]" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-900 dark:text-white uppercase">Secure</p>
                    <p className="text-[10px] text-gray-500 dark:text-slate-400 uppercase tracking-wider">Deployments</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-950/20 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-5 h-5 text-[#E51D25]" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-900 dark:text-white uppercase">Scalable</p>
                    <p className="text-[10px] text-gray-500 dark:text-slate-400 uppercase tracking-wider">Architecture</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Button */}
            <div
              className={`transform transition-all duration-1000 delay-300 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <button
                onClick={() => onNavigate && onNavigate('about')}
                className="group relative inline-flex items-center gap-3 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 border-2 border-gray-900 dark:border-slate-700 font-extrabold text-xs px-7 py-4 rounded hover:bg-gray-900 dark:hover:bg-slate-800 hover:text-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(229,29,37,1)] hover:shadow-[0px_0px_0px_0px_rgba(229,29,37,1)] hover:translate-x-[4px] hover:translate-y-[4px] focus:outline-none"
              >
                <span className="tracking-widest uppercase">
                  KNOW MORE ABOUT US
                </span>
                <ArrowRight className="w-4 h-4 text-[#E51D25] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Image Collage */}
          <div className="lg:col-span-7 relative w-full h-[500px] sm:h-[600px] lg:h-[550px] mt-12 lg:mt-0">

            {/* Decorative Elements */}
            <div className={`absolute -top-6 -right-6 w-40 h-40 opacity-20 pointer-events-none transform transition-all duration-1000 delay-500 ease-out ${isVisible ? 'scale-100 opacity-20' : 'scale-50 opacity-0'}`}>
              <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" fill="currentColor" className="text-black dark:text-white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>

            <div className={`absolute -bottom-10 -left-10 w-64 h-64 bg-red-50 dark:bg-red-950/20 rounded-full mix-blend-multiply blur-3xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-70' : 'opacity-0'}`}></div>

            {/* Top Left Image (Server Room Racks) */}
            <div
              className={`absolute top-0 left-0 w-[48%] h-[52%] rounded-xl overflow-hidden shadow-lg z-10 border border-gray-100 dark:border-slate-800 group transform transition-all duration-1000 delay-200 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                alt="Server Room Infrastructure"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Bottom Left Image (Security CCTV) */}
            <div
              className={`absolute bottom-0 left-0 w-[48%] h-[42%] rounded-xl overflow-hidden shadow-lg z-10 border border-gray-100 dark:border-slate-800 group transform transition-all duration-1000 delay-400 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
                alt="CCTV Security Monitoring"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Right Large Image (Structured Cabling Rack) */}
            <div
              className={`absolute top-[8%] right-0 w-[48%] h-[84%] rounded-xl overflow-hidden shadow-2xl z-20 border border-gray-100 dark:border-slate-800 group transform transition-all duration-1000 delay-300 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
                alt="Structured Cabling Rack"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Red Overlay Badge on Right Image */}
            <div
              className={`absolute bottom-[12%] -right-4 bg-[#E51D25] text-white p-4 rounded shadow-xl z-30 transform transition-all duration-1000 delay-600 ease-out ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
              }`}
            >
              <p className="text-xl font-black leading-none">15+</p>
              <p className="text-[9px] font-bold uppercase tracking-wider mt-1 text-red-100">Years Experience</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;