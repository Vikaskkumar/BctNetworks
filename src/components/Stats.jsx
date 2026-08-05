import React, { useState, useEffect, useRef } from 'react';

// Custom component to handle the counting animation when scrolled into view
const AnimatedCounter = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation only when the element comes into the viewport
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

      // easeOutQuart formula for a natural slow-down at the end of the count
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
      <span className="text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]">{suffix}</span>
    </span>
  );
};

export default function Stats() {
  const statsData = [
    { end: 30, suffix: "+", label: "Countries connected" },
    { end: 62, suffix: "+", label: "Hospitality brands" },
    { end: 5, suffix: "", label: "Continents reached" },
    { end: 600, suffix: "+", label: "Hospitality clients" },
    { end: 200, suffix: "K+", label: "Connected rooms" }
  ];

  return (
    <section className="relative bg-[#06060c] py-24 border-y border-purple-500/10 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      <div className="absolute inset-0 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-purple-500/30"></div>
            <p className="text-[11px] tracking-widest text-purple-400 uppercase font-bold">
              The numbers that define our success
            </p>
            <div className="h-[1px] w-6 bg-purple-500/30"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            Proven Performance & Global Scale
          </h2>
        </div>

        {/* Centered Stats Grid with Visuo-style cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {statsData.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-[#0c0a1a]/60 backdrop-blur-md border border-purple-500/10 rounded-3xl p-8 text-center group hover:border-purple-500/20 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)] cursor-default"
            >
              <h4 className="text-4xl md:text-5xl font-display font-extrabold mb-3 text-white tracking-tight">
                <AnimatedCounter end={item.end} suffix={item.suffix} />
              </h4>
              <span className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold group-hover:text-purple-300 transition-colors duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}