import React, { useState, useEffect } from 'react';
import { Building2, HeartPulse, Activity, ShieldCheck, Coffee, GraduationCap, Landmark, Briefcase } from 'lucide-react';
const industries = [
  {
    name: 'Corporate',
    icon: Building2,
    desc: 'Scalable networking and unified threat management for distributed enterprises.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=60',
  },
  {
    name: 'Healthcare',
    icon: HeartPulse,
    desc: 'Mission-critical 99.999% uptime and HIPAA-compliant secure data transport.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=60',
  },
  {
    name: 'Hospitality',
    icon: Coffee,
    desc: 'Seamless high-density guest Wi-Fi and robust operational networks.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=60',
  },
  {
    name: 'Education',
    icon: GraduationCap,
    desc: 'High-capacity connectivity supporting digital learning and campus security.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=60',
  },
  {
    name: 'Government / Public Sector',
    icon: Landmark,
    desc: 'Zero-trust architecture and mission-critical reliability for public services.',
    image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=600&q=60',
  },
  {
    name: 'Commercial',
    icon: Briefcase,
    desc: 'End-to-end communication, AV, and security solutions for commercial spaces.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=60',
  },
];


const IndustriesServed = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = industries[activeIndex];
  const ActiveIcon = activeItem.icon;

  // Auto-advance timer (5 seconds per slide)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % industries.length);
    }, 5000);

    // Cleanup timer on unmount or when activeIndex changes (manual click)
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section id="industries" className="bg-[var(--bg)] text-[var(--text)] py-12 sm:py-20 lg:py-24 px-4 sm:px-6 min-h-screen flex items-center relative overflow-hidden">
      {/* Injecting keyframes for the progress bar animation so it works without Tailwind config changes */}
      <style>{`
        @keyframes timer-progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-timer {
          animation: timer-progress 5s linear forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24 items-center">

        {/* Left Side: Industry List with Timer */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="mb-6 sm:mb-10 lg:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-2">
              Industries
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              Solutions for Demanding Environments
            </h2>
          </div>

          <div className="flex flex-col">
            {industries.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`py-4 sm:py-5 border-b cursor-pointer transition-all duration-300 ${isActive ? 'border-white' : 'border-white/10 hover:border-white/30'
                    }`}
                >
                  <h3 className={`text-base sm:text-lg font-medium transition-colors duration-300 ${isActive ? 'text-[var(--text)]' : 'text-[var(--muted)]'
                    }`}>
                    {item.name}
                  </h3>

                  {/* Expandable Description & Progress Bar */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-40 opacity-100 mt-3 sm:mt-4' : 'max-h-0 opacity-0'
                    }`}>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pr-2 sm:pr-4 mb-3 sm:mb-4">
                      {item.desc}
                    </p>

                    {/* Visual Progress Timer */}
                    <div className="w-full h-1 bg-[var(--border-light)] rounded-full overflow-hidden">
                      {isActive && (
                        <div
                          key={activeIndex} // Forces animation to restart on index change
                          className="h-full bg-[var(--accent)] rounded-full animate-timer"
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Big Interactive Card */}
        <div className="w-full lg:w-2/3 h-[420px] sm:h-[500px] lg:h-[680px] relative rounded-2xl sm:rounded-3xl overflow-hidden group bg-[#121212]">
          {/* Dynamic Background Image */}
          <img
            key={activeItem.name} // Forces re-render for smooth fade/image swap
            src={activeItem.image}
            alt={activeItem.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[5000ms] ease-linear group-hover:scale-105 animate-in fade-in zoom-in-95"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/90 via-[var(--bg)]/40 to-transparent"></div>

          {/* Floating Glassmorphic UI Card */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-[85%] max-w-lg bg-[var(--surface)]/85 backdrop-blur-2xl border border-[var(--border-light)] rounded-xl sm:rounded-2xl p-3.5 sm:p-6 md:p-8 shadow-2xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-6 text-[var(--text)]">
              <div className="p-2 sm:p-3 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 flex-shrink-0">
                <ActiveIcon size={18} className="text-[var(--text)] sm:w-6 sm:h-6" />
              </div>
              <h4 className="text-sm sm:text-xl font-medium leading-tight">{activeItem.name}</h4>
            </div>

            <p className="text-[var(--text-2)] text-xs sm:text-sm md:text-base mb-3 sm:mb-6 leading-relaxed">
              {activeItem.desc}
            </p>

            {/* Simulated Data Cards */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="bg-[var(--bg-alt)]/60 rounded-lg sm:rounded-xl p-2 sm:p-4 border border-[var(--border-light)] hover:bg-[var(--bg-alt)]/90 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <Activity size={14} className="text-blue-500 sm:w-4 sm:h-4" />
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500"></div>
                </div>
                <p className="text-[9px] sm:text-xs text-[var(--muted)] mb-0.5">Network Reliability</p>
                <p className="text-[11px] sm:text-sm font-semibold text-[var(--text)]">99.99% Uptime</p>
              </div>

              <div className="bg-[var(--bg-alt)]/60 rounded-lg sm:rounded-xl p-2 sm:p-4 border border-[var(--border-light)] hover:bg-[var(--bg-alt)]/90 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <ShieldCheck size={14} className="text-emerald-500 sm:w-4 sm:h-4" />
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500"></div>
                </div>
                <p className="text-[9px] sm:text-xs text-[var(--muted)] mb-0.5">Infrastructure</p>
                <p className="text-[11px] sm:text-sm font-semibold text-[var(--text)]">Zero-Trust Secured</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesServed;