import React, { useState, useEffect, useRef } from 'react';

// Custom component to handle the counting animation when scrolled into view
const AnimatedCounter = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef}>
      {count}
      <span className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">{suffix}</span>
    </span>
  );
};

export default function Stats() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statsData = [
    { end: 30, suffix: "+", label: "Countries connected" },
    { end: 62, suffix: "+", label: "Hospitality brands" },
    { end: 5, suffix: "", label: "Continents reached" },
    { end: 600, suffix: "+", label: "Hospitality clients" },
    { end: 200, suffix: "K+", label: "Connected rooms" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#05050a] py-12 md:py-16 border-y border-purple-500/10 overflow-hidden"
    >
      {/* Top glowing boundary line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.03),transparent_60%)] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Compact stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {statsData.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl py-6 px-4 text-center group hover:bg-white/[0.04] hover:border-purple-500/30 hover:-translate-y-0.5 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_25px_rgba(124,58,237,0.1)] cursor-default ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stat Number */}
              <h4 className="text-3xl md:text-4xl font-sans font-extrabold mb-1.5 text-white tracking-tight">
                <AnimatedCounter end={item.end} suffix={item.suffix} />
              </h4>
              
              {/* Stat Label */}
              <span className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-wider font-semibold group-hover:text-purple-300 transition-colors duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}