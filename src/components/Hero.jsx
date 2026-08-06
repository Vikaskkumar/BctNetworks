import React, { useEffect, useState, useRef } from 'react';

// Exact imports matching your folder structure
import tvImage from '../assets/tv.avif';
import tabletImage from '../assets/tablet2.png';
import phoneImage from '../assets/phone.png';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  // Advanced scroll parallax and entrance observer
  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      // Use requestAnimationFrame for buttery smooth parallax
      animationFrameId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Trigger entrance animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[#030005] flex items-center justify-center overflow-hidden pt-32 pb-20 font-sans"
    >
      {/* Advanced Keyframes & Smooth Easing */}
      <style>
        {`
          @keyframes float-1 {
            0%, 100% { transform: translateY(0px) rotateX(2deg) rotateY(-5deg); }
            50% { transform: translateY(-10px) rotateX(2deg) rotateY(-5deg); }
          }
          @keyframes float-2 {
            0%, 100% { transform: translateY(0px) rotateX(15deg) rotateY(15deg) rotateZ(-2deg); }
            50% { transform: translateY(-15px) rotateX(15deg) rotateY(15deg) rotateZ(-2deg); }
          }
          @keyframes float-3 {
            0%, 100% { transform: translateY(0px) rotateX(5deg) rotateY(-15deg) rotateZ(5deg); }
            50% { transform: translateY(-20px) rotateX(5deg) rotateY(-15deg) rotateZ(5deg); }
          }
          
          .animate-device-1 { animation: float-1 8s ease-in-out infinite; }
          .animate-device-2 { animation: float-2 6s ease-in-out infinite 1s; }
          .animate-device-3 { animation: float-3 7s ease-in-out infinite 2s; }
          
          .perspective-container { perspective: 1200px; }
          .preserve-3d { transform-style: preserve-3d; }
          
          /* Custom spring bezier for entrance */
          .spring-enter { transition-timing-function: cubic-bezier(0.2, 0.9, 0.3, 1.1); }
        `}
      </style>

      {/* Background Image with Parallax & Theme Overlay Mask */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out" 
        style={{ 
          backgroundImage: "url('/hero-bg.png')",
          transform: `translateY(${scrollY * 0.15}px)`
        }}
      >
        {/* Left-to-right fade mask: left is slightly shaded for contrast, right is completely clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030005]/65 via-[#030005]/35 to-transparent html-light-hero-overlay transition-colors duration-500"></div>
      </div>

      {/* Background Lighting / Glow replicating the reference image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Massive purple radial glow behind the screens */}
        <div className="absolute top-[10%] right-[-10%] w-[70%] h-[80%] bg-[#7c28d9] opacity-15 blur-[180px] rounded-full mix-blend-screen"></div>
        {/* Subtle ambient glow on the left */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#4c1d95] opacity-10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        {/* LEFT COLUMN: Typography & UI (Matching Reference) */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left z-20">

          {/* Badge */}
          <div
            className={`transition-all duration-1000 ease-out mb-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full border border-[#8b5cf6] text-[#a78bfa] text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase shadow-[0_0_15px_rgba(139,92,246,0.15)]">
              IPTV • OTT • Hospitality Platform
            </span>
          </div>

          {/* Main Heading (Smaller) */}
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-5 transition-all duration-1000 delay-100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            One Platform.<br />
            <span className="text-[#a855f7] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Limitless Guest<br />Experiences.
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-base sm:text-lg text-gray-400 mb-8 max-w-md leading-relaxed transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            An all-in-one hospitality technology platform to streamline operations, engage guests and grow your business.
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <button className="px-7 py-3.5 bg-[#7c3aed] hover:bg-[#6d28d9] hover:scale-105 transition-all duration-300 rounded-full font-semibold text-white text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
              Book a Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
            <button className="px-7 py-3.5 bg-transparent border border-gray-600 hover:border-gray-400 hover:bg-white/5 text-white rounded-full font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group">
              Explore Platform
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN: Advanced Spatial Devices (Smaller Device Images) */}
        <div className="w-full lg:w-[55%] relative h-[420px] sm:h-[500px] lg:h-[580px] perspective-container mt-8 lg:mt-0 z-10">

          <div className="absolute inset-0 preserve-3d">

            {/* 1. The Smart TV (Back Layer - Reduced Width) */}
            <div
              className={`absolute inset-0 transition-all duration-[1500ms] delay-[200ms] spring-enter ${isVisible ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-20'}`}
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              <div className="absolute top-[8%] right-[2%] w-[68%] sm:w-[65%] lg:w-[70%] aspect-video animate-device-1 preserve-3d rounded-md bg-[#0a0a0a] border-[3px] border-[#1a1a1a] shadow-[-20px_20px_50px_rgba(0,0,0,0.8)]">
                <img src={tvImage} alt="Smart TV Interface" className="w-full h-full object-cover rounded-sm opacity-90" />
                {/* TV Screen Glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
              </div>
            </div>

            {/* 2. The Tablet (Middle Layer - Reduced Width) */}
            <div
              className={`absolute inset-0 transition-all duration-[1500ms] delay-[400ms] spring-enter ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-32'}`}
              style={{ transform: `translateY(${scrollY * -0.15}px)` }}
            >
              <div className="absolute bottom-[10%] left-[2%] lg:left-[-5%] w-[44%] sm:w-[42%] lg:w-[46%] aspect-[16/10] animate-device-2 preserve-3d rounded-[1rem] bg-black border-[5px] border-[#151515] shadow-[-25px_25px_50px_rgba(0,0,0,0.95)]">
                <img src={tabletImage} alt="Tablet Dashboard" className="w-full h-full object-cover rounded-md opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-bl from-white/10 via-transparent to-transparent pointer-events-none rounded-md"></div>
              </div>
            </div>

            {/* 3. The Phone (Front Layer - Reduced Width) */}
            <div
              className={`absolute inset-0 transition-all duration-[1500ms] delay-[600ms] spring-enter ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-48'}`}
              style={{ transform: `translateY(${scrollY * -0.25}px)` }}
            >
              <div className="absolute bottom-[2%] right-[8%] w-[18%] sm:w-[16%] lg:w-[19%] aspect-[9/19.5] animate-device-3 preserve-3d rounded-[1.6rem] bg-black border-[3px] border-[#222] shadow-[-30px_30px_60px_rgba(0,0,0,0.99)]">
                {/* Phone Notch/Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[45%] h-4 bg-[#0a0a0a] rounded-b-lg z-10 shadow-sm border-b border-[#222]"></div>
                <img src={phoneImage} alt="Mobile Remote" className="w-full h-full object-cover rounded-[1.4rem]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/15 pointer-events-none rounded-[1.4rem]"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}