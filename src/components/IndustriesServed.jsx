import React, { useState, useEffect } from 'react';
import { Building2, Server, HeartPulse, Factory } from 'lucide-react';
const industries = [
  {
    name: 'Corporate & Multi-Site',
    icon: Building2,
    desc: 'Dedicated fiber internet, managed SD-WAN, and unified threat management for distributed enterprises.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Data Centers & Cloud',
    icon: Server,
    desc: 'Dark fiber, ultra-low latency optical wavelengths, and high-capacity interconnects for critical infrastructure.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Healthcare & Clinics',
    icon: HeartPulse,
    desc: 'Mission-critical 99.999% uptime, HIPAA-compliant secure data transport, and robust telehealth connectivity.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Industrial & Manufacturing',
    icon: Factory,
    desc: 'Ruggedized edge networking, Industrial IoT (IIoT) connectivity, and pervasive warehouse Wi-Fi coverage.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
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
    <section id="industries" className="bg-black text-white py-24 px-6 min-h-screen flex items-center relative">
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

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

        {/* Left Side: Industry List with Timer */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-2">
              Sector Coverage
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Industries We Serve
            </h2>
          </div>

          <div className="flex flex-col">
            {industries.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`py-6 border-b cursor-pointer transition-all duration-300 ${isActive ? 'border-white' : 'border-white/10 hover:border-white/30'
                    }`}
                >
                  <h3 className={`text-lg font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-500'
                    }`}>
                    {item.name}
                  </h3>

                  {/* Expandable Description & Progress Bar */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                    <p className="text-gray-400 text-sm leading-relaxed pr-4 mb-4">
                      {item.desc}
                    </p>

                    {/* Visual Progress Timer */}
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      {isActive && (
                        <div
                          key={activeIndex} // Forces animation to restart on index change
                          className="h-full bg-white rounded-full animate-timer"
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
        <div className="w-full lg:w-2/3 h-[500px] lg:h-[700px] relative rounded-3xl overflow-hidden group bg-[#121212]">
          {/* Dynamic Background Image */}
          <img
            key={activeItem.name} // Forces re-render for smooth fade/image swap
            src={activeItem.image}
            alt={activeItem.name}
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[5000ms] ease-linear group-hover:scale-105 animate-in fade-in zoom-in-95"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Floating Glassmorphic UI Card */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] max-w-lg bg-[#1c1c1c]/70 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-8 text-white">
              <div className="p-3 bg-white/5 rounded-full border border-white/10">
                <ActiveIcon size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-medium">{activeItem.name}</h4>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              {activeItem.desc}
            </p>

            {/* Simulated Data Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#2a2a2a]/50 rounded-xl p-4 border border-white/5 hover:bg-[#2a2a2a]/80 transition-colors">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                <p className="text-xs text-gray-400 mb-1">Network Reliability</p>
                <p className="text-sm font-semibold text-white">99.99% Uptime</p>
              </div>

              <div className="bg-[#2a2a2a]/50 rounded-xl p-4 border border-white/5 hover:bg-[#2a2a2a]/80 transition-colors">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <p className="text-xs text-gray-400 mb-1">Infrastructure</p>
                <p className="text-sm font-semibold text-white">Zero-Trust Secured</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesServed;