import React from 'react';

// Exact imports matching your folder structure
import tvImage from '../assets/tv.avif';
import tabletImage from '../assets/tablet2.png';
import phoneImage from '../assets/phone.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#06060c] flex items-center justify-center overflow-hidden pt-28 pb-16">

      {/* Custom Keyframes for Smooth, High-End Entry Animations */}
      <style>
        {`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes float-subtle {
            0%, 100% { transform: translateY(0px) translateZ(0px); }
            50% { transform: translateY(-12px) translateZ(15px); }
          }
          .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .animate-float-1 { animation: float-subtle 6s ease-in-out infinite; }
          .animate-float-2 { animation: float-subtle 7.5s ease-in-out infinite 1s; }
          .animate-float-3 { animation: float-subtle 5.5s ease-in-out infinite 2s; }
          .perspective-1200 { perspective: 1200px; }
          .transform-style-3d { transform-style: preserve-3d; }
        `}
      </style>

      {/* Modern Mesh Gradient Background - Darker, richer tones */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[5%] w-[70%] h-[70%] bg-purple-900/15 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/15 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-[30%] left-[30%] w-[45%] h-[45%] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen"></div>

        {/* Subtle grid overlay for a high-tech infrastructure feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

        {/* LEFT COLUMN: Copy & Call to Action */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0">

          <div className="opacity-0 animate-fade-in-up mb-6" style={{ animationDelay: '0.1s' }}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-[11px] font-semibold tracking-wider uppercase cursor-default shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              Hospitality • Healthcare • Maritime • Enterprise
            </span>
          </div>

          <h1 className="opacity-0 animate-fade-in-up text-5xl sm:text-6xl lg:text-[4rem] font-display font-extrabold text-white tracking-tight leading-[1.1] mb-6" style={{ animationDelay: '0.2s' }}>
            Enhance your entertainment control with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400">Vardhman Tv</span>
          </h1>

          <p className="opacity-0 animate-fade-in-up text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Deliver cinematic in-room entertainment, seamlessly sync with your PMS, and empower guests with mobile control. An end-to-end ecosystem built for modern properties.
          </p>

          <div className="opacity-0 animate-fade-in-up flex flex-col sm:flex-row gap-4 w-full sm:w-auto" style={{ animationDelay: '0.4s' }}>
            {/* Upgraded Primary Button */}
            <button className="px-8 py-3.5 bg-white text-[#06060c] hover:bg-slate-200 transition-colors rounded-full font-bold text-sm tracking-wide shadow-[0_4px_20px_rgba(255,255,255,0.15)] cursor-pointer">
              Explore Solutions
            </button>
            {/* Upgraded Secondary Button */}
            <button className="px-8 py-3.5 bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/5 text-slate-200 rounded-full font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 group cursor-pointer">
              Book a Demo
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Core Feature Checks */}
          <div className="opacity-0 animate-fade-in-up mt-14 grid grid-cols-2 gap-y-4 gap-x-8 text-sm md:text-base font-medium text-slate-300 font-sans" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                <svg className="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              Live TV & Casting
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                <svg className="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              Guest Mobile App
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                <svg className="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              OPERA & PMS Sync
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                <svg className="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              Room Automation
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Enhanced 3D Spatial Presentation (Larger Devices) */}
        <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[650px] lg:h-[800px] perspective-1200 opacity-0 animate-fade-in-up mt-16 lg:mt-0" style={{ animationDelay: '0.6s' }}>

          <div className="absolute inset-0 transform-style-3d lg:-translate-x-2">

            {/* Glowing orb behind devices for contrast */}
            <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none transform-style-3d translate-z-[-50px]"></div>

            {/* The Smart TV (In-Room Entertainment) */}
            <div className="absolute top-[5%] right-[-5%] w-[95%] sm:w-[90%] lg:w-[105%] aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.95)] animate-float-1 bg-black"
              style={{ transform: 'rotateY(-18deg) rotateX(6deg) rotateZ(2deg) translateZ(-10px)' }}>
              <img src={tvImage} alt="Smart TV OTT" className="w-full h-full object-cover opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none"></div>

              {/* Floating Label */}
              <div className="absolute top-5 left-5 bg-black/80 backdrop-blur-md border border-purple-500/20 text-white text-[11px] sm:text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span> IPTV & OTT Interface
              </div>
            </div>

            {/* The Tablet (Staff & Management) */}
            <div className="absolute bottom-[8%] left-[-5%] w-[55%] sm:w-[50%] lg:w-[60%] aspect-[4/3] rounded-xl overflow-hidden border border-slate-700 shadow-[20px_30px_60px_rgba(0,0,0,0.95)] bg-black animate-float-2"
              style={{ transform: 'translateZ(90px) rotateY(-8deg) rotateX(12deg) rotateZ(-3deg)' }}>
              <img src={tabletImage} alt="Tablet Dashboard" className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-black/30 pointer-events-none"></div>

              {/* Floating Label */}
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-purple-500/20 text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl">
                PMS Dashboard
              </div>
            </div>

            {/* The Phone (Guest Connectivity) */}
            <div className="absolute bottom-[-2%] right-[2%] w-[30%] sm:w-[28%] lg:w-[32%] aspect-[9/19.5] rounded-[2rem] overflow-hidden border-[3px] border-slate-800 shadow-[40px_40px_70px_rgba(0,0,0,0.95)] bg-black animate-float-3"
              style={{ transform: 'translateZ(180px) rotateY(-22deg) rotateX(8deg) rotateZ(6deg)' }}>
              {/* Fake Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-5 bg-slate-900 rounded-b-2xl z-10 shadow-sm border-b border-slate-700/50"></div>
              <img src={phoneImage} alt="Mobile Remote" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none"></div>

              {/* Floating Label */}
              <div className="absolute -right-3 top-[45%] -translate-y-1/2 bg-purple-600/95 backdrop-blur-xl border border-purple-400/30 text-white text-[10px] font-bold px-3 py-1.5 rounded-l-full shadow-2xl">
                Guest App
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}