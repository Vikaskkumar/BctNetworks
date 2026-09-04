import React, { useState, useEffect } from 'react';
import { Building2, HeartPulse, Activity, ShieldCheck, Coffee, GraduationCap, Landmark, Briefcase } from 'lucide-react';
const industries = [
  {
    name: 'Corporate & Enterprise',
    icon: Building2,
    desc: 'Scalable + Unified + Managed',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Healthcare',
    icon: HeartPulse,
    desc: 'Secure + Reliable + Connected',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Hospitality',
    icon: Coffee,
    desc: 'High-Density + Seamless + Operational',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Education',
    icon: GraduationCap,
    desc: 'High-Capacity + Digital + Safe',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Government / Public Sector',
    icon: Landmark,
    desc: 'Mission-Critical + Zero-Trust + Compliant',
    image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Commercial',
    icon: Briefcase,
    desc: 'End-to-End + Integrated + Flexible',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
];


const IndustriesServed = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = industries[activeIndex];
  const ActiveIcon = activeItem.icon;

  // Auto-advance timer (3 seconds per slide)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % industries.length);
    }, 3000);

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
          animation: timer-progress 3s linear forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24 items-center">

        {/* Left Side: Industry List with Timer */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="mb-6 sm:mb-10 lg:mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-blue-500 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                Industries
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)] leading-tight">
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
                  className={`py-4 sm:py-5 border-b cursor-pointer transition-all duration-300 ${isActive ? 'border-[var(--text)]' : 'border-[var(--border)] hover:border-[var(--muted)]'
                    }`}
                >
                  <h3 className={`text-base sm:text-lg font-medium transition-colors duration-300 ${isActive ? 'text-[var(--text)]' : 'text-[var(--muted)]'
                    }`}>
                    {item.name}
                  </h3>

                  {/* Expandable Description & Progress Bar */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-40 opacity-100 mt-3 sm:mt-4' : 'max-h-0 opacity-0'
                    }`}>
                    <p className="text-[var(--muted)] text-xs sm:text-sm leading-relaxed pr-2 sm:pr-4 mb-3 sm:mb-4">
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
        <div className="w-full lg:w-2/3 h-[420px] sm:h-[500px] lg:h-[680px] relative rounded-2xl sm:rounded-3xl overflow-hidden group bg-[var(--surface)]">
          {/* Dynamic Background Image */}
          <img
            key={activeItem.name} // Forces re-render for smooth fade/image swap
            src={activeItem.image}
            alt={activeItem.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-100 dark:opacity-70 transition-transform duration-[5000ms] ease-linear group-hover:scale-105 animate-in fade-in zoom-in-95"
          />


        </div>

      </div>
    </section>
  );
};

export default IndustriesServed;