import React, { useState, useEffect } from 'react';
import { Building2, HeartPulse, Coffee, GraduationCap, Landmark, Briefcase, ArrowRight } from 'lucide-react';

const industries = [
  {
    name: 'Corporate & Enterprise',
    icon: Building2,
    tag: 'Enterprise IT & Networks',
    fullDesc: 'High-density Wi-Fi 6, core routing & switching, and unified communications built for enterprise environments.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=75',
  },
  {
    name: 'Healthcare',
    icon: HeartPulse,
    tag: 'Mission-Critical & Compliant',
    fullDesc: 'Zero-downtime medical network infrastructure, CCTV surveillance, and secure patient data isolation.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=75',
  },
  {
    name: 'Hospitality',
    icon: Coffee,
    tag: 'Guest Wi-Fi & AV Integration',
    fullDesc: 'Seamless guest Wi-Fi coverage, IPTV/OTT integration, IP telephony, and centralized security monitoring.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=75',
  },
  {
    name: 'Education',
    icon: GraduationCap,
    tag: 'Campus Fiber & Safety',
    fullDesc: 'Campus-wide fiber backbones, digital classroom AV systems, public announcements, and IP surveillance.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=75',
  },
  {
    name: 'Government / Public Sector',
    icon: Landmark,
    tag: 'Zero-Trust & ISO Compliant',
    fullDesc: 'ISO 27001 compliant secure network backbones, redundant servers, and perimeter access control.',
    image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=800&q=75',
  },
  {
    name: 'Commercial',
    icon: Briefcase,
    tag: 'Smart Facility Infrastructure',
    fullDesc: 'Structured copper and fiber cabling, rack assembly, data center design, and 24/7 security integration.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=75',
  },
];

const IndustriesServed = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeItem = industries[activeIndex];

  // Preload all images on mount for instant zero-lag switching
  useEffect(() => {
    industries.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  // Snappy Automatic Image Rotation Timer (Cycles every 3 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="industries" className="text-[var(--text)] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 min-[360px]:px-6 lg:px-8 relative z-10">

        <div
          className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Left Column: Fixed-Height List Items */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-blue-500 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Industries
                </span>
              </div>
            </div>

            <div className="flex flex-col border-t border-[var(--border-light)]">
              {industries.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`py-4 px-3 sm:px-4 border-b border-[var(--border-light)] text-left transition-all duration-200 flex items-center justify-between group focus:outline-none relative overflow-hidden ${isActive
                        ? 'bg-[var(--surface)] border-l-4 border-l-blue-500 pl-4 sm:pl-5 shadow-sm'
                        : 'hover:bg-[var(--surface)]/40'
                      }`}
                  >
                    <h3 className={`text-base sm:text-lg font-bold transition-colors ${isActive ? 'text-blue-500' : 'text-[var(--text)] group-hover:text-blue-400'
                      }`}>
                      {item.name}
                    </h3>

                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isActive ? 'bg-blue-500 text-white' : 'bg-transparent text-[var(--muted)] group-hover:text-[var(--text)]'
                      }`}>
                      <ArrowRight size={16} className={`transition-transform ${isActive ? 'translate-x-0.5' : '-rotate-45 group-hover:rotate-0'}`} />
                    </div>

                    {/* Progress Loader Line Track */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--border-light)] overflow-hidden pointer-events-none">
                      <div
                        key={`${index}-${activeIndex}-${isPaused}`}
                        className={`h-full bg-blue-500 ${isActive && !isPaused ? 'w-full transition-all duration-[3000ms] ease-linear' : 'w-0 transition-none'
                          }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hardware-Accelerated Zero-Lag Image Container */}
          <div className="w-full lg:w-7/12 h-[420px] sm:h-[480px] lg:h-[540px] relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--border-light)] bg-slate-900 shadow-2xl flex flex-col justify-end">

            {/* Pre-rendered Layered Images for Instant 0ms Cross-Fade */}
            {industries.map((item, idx) => (
              <img
                key={idx}
                src={item.image}
                alt={item.name}
                loading="eager"
                className={`absolute inset-0 w-full h-full object-cover object-center brightness-90 transition-all duration-500 ease-out ${idx === activeIndex
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-105 z-0 pointer-events-none'
                  }`}
              />
            ))}

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-20 pointer-events-none" />

            {/* Overlay Banner Info */}
            <div className="relative z-30 p-6 sm:p-8 lg:p-10 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                {activeItem.name}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                {activeItem.fullDesc}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;