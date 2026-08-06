import React, { useEffect, useState, useRef } from 'react';

export default function Ecosystem() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger advanced entrance animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      name: "Hospitality",
      desc: "Hotels & Resorts",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" />,
      color: "from-purple-500 to-indigo-400"
    },
    {
      name: "Healthcare",
      desc: "Hospitals & Clinics",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />,
      color: "from-violet-500 to-purple-400"
    },
    {
      name: "Maritime",
      desc: "Cruise Lines",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
      color: "from-indigo-500 to-violet-400"
    },
    {
      name: "Enterprise",
      desc: "Offices & Co-working",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      color: "from-purple-600 to-indigo-500"
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-[#06060c] py-20 md:py-24 px-4 md:px-8 overflow-hidden border-b border-purple-500/10 font-sans">

      {/* CSS Spin Animations */}
      <style>
        {`
          @keyframes spin-slow { 100% { transform: rotate(360deg); } }
          @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
          .animate-spin-slow { animation: spin-slow 40s linear infinite; }
          .animate-spin-reverse { animation: spin-reverse 40s linear infinite; }
          .animate-spin-slower { animation: spin-slow 55s linear infinite; }
          .animate-spin-reverse-slower { animation: spin-reverse 55s linear infinite; }
        `}
      </style>

      {/* Ambient Background Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/15 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Content & Industries */}
          <div className="flex flex-col">

            {/* Header Area */}
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-purple-500"></div>
                <p className="text-xs tracking-widest text-purple-400 uppercase font-bold">
                  The Vardhman Tv Ecosystem
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-5 leading-tight tracking-tight">
                One intelligent core.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500">Limitless possibilities.</span>
              </h2>

              <p className="text-slate-400 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
                We combine IPTV, OTT entertainment, smart room connectivity, and guest engagement into one unified platform.
              </p>
            </div>

            {/* Compact Glassmorphic Industry Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className={`group relative bg-[#0c0a1a]/60 backdrop-blur-md border border-purple-500/10 p-4.5 rounded-2xl flex items-center gap-4 hover:bg-purple-900/15 hover:border-purple-500/30 transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_4px_20px_rgba(168,85,247,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${ind.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className={`w-12 h-12 rounded-xl flex flex-shrink-0 items-center justify-center bg-slate-950 border border-white/5 group-hover:border-transparent relative z-10 transition-colors`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${ind.color} opacity-20 rounded-xl`}></div>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {ind.icon}
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <h4 className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">{ind.name}</h4>
                    <p className="text-[11px] text-slate-500">{ind.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className={`flex flex-wrap items-center gap-5 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button className="px-7 py-3 bg-white text-[#06060c] hover:bg-slate-200 transition-transform hover:scale-105 rounded-full text-sm font-bold tracking-wide shadow-[0_4px_15px_rgba(255,255,255,0.1)] cursor-pointer">
                Explore Architecture
              </button>
              <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                View integrations <span className="text-purple-500 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Compact Animated Orbital Diagram */}
          <div className={`relative h-[400px] md:h-[580px] lg:h-[650px] flex items-center justify-center scale-90 sm:scale-100 lg:scale-105 transition-all duration-[1500ms] ease-[cubic-bezier(0.2,0.9,0.3,1.1)] delay-300 ${isVisible ? 'opacity-100 scale-100 lg:scale-105 translate-x-0' : 'opacity-0 scale-75 translate-x-20'}`}>

            {/* Central Core */}
            <div className="absolute z-30 w-32 h-32 md:w-42 md:h-42 bg-slate-950 rounded-full flex flex-col items-center justify-center border border-slate-700 shadow-[0_0_50px_rgba(168,85,247,0.35)] hover:scale-105 transition-transform duration-500 cursor-default">
              <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-950 via-[#0e0c1b] to-black border border-purple-500/30"></div>
              <span className="relative z-10 font-bold text-white text-base md:text-xl tracking-wide">Vardhman Tv</span>
              <span className="relative z-10 text-[10px] tracking-widest text-purple-400 font-mono mt-1.5">AI CORE</span>
            </div>

            {/* INNER ORBIT RING */}
            <div className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] border border-purple-500/10 rounded-full animate-spin-slow z-20">

              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-reverse flex flex-col items-center gap-1.5 hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-12 h-12 bg-slate-900 border border-purple-500/50 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="text-[10px] font-medium text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-md">PMS Sync</span>
                </div>
              </div>

              <div className="absolute bottom-[14%] right-[4%] -translate-x-1/2 translate-y-1/2">
                <div className="animate-spin-reverse flex flex-col items-center gap-1.5 hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-12 h-12 bg-slate-900 border border-indigo-500/50 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="text-[10px] font-medium text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-md">Smart Room</span>
                </div>
              </div>

              <div className="absolute bottom-[14%] left-[4%] translate-x-1/2 translate-y-1/2">
                <div className="animate-spin-reverse flex flex-col items-center gap-1.5 hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-12 h-12 bg-slate-900 border border-violet-500/50 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                    <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
                  </div>
                  <span className="text-[10px] font-medium text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-md">Wi-Fi & Cast</span>
                </div>
              </div>
            </div>

            {/* OUTER ORBIT RING */}
            <div className="absolute w-[420px] h-[420px] md:w-[500px] md:h-[500px] border border-purple-500/10 border-dashed rounded-full animate-spin-slower z-10">

              <div className="absolute top-[14%] right-[4%] -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-reverse-slower flex flex-col items-center gap-1.5">
                  <div className="w-10 h-10 bg-slate-900 border border-purple-500/40 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.2)] hover:bg-purple-900/40 transition-colors">
                    <svg className="w-4.5 h-4.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <span className="text-[9.5px] font-medium text-slate-500">Guest App</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="animate-spin-reverse-slower flex flex-col items-center gap-1.5">
                  <div className="w-10 h-10 bg-slate-900 border border-indigo-500/40 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.2)] hover:bg-indigo-900/40 transition-colors">
                    <svg className="w-4.5 h-4.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <span className="text-[9.5px] font-medium text-slate-500">Sensors</span>
                </div>
              </div>

              <div className="absolute top-[14%] left-[4%] translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-reverse-slower flex flex-col items-center gap-1.5">
                  <div className="w-10 h-10 bg-slate-900 border border-violet-500/40 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.2)] hover:bg-violet-900/40 transition-colors">
                    <svg className="w-4.5 h-4.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <span className="text-[9.5px] font-medium text-slate-500">Staff UI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}