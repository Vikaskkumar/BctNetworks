import React, { useState, useEffect, useRef } from 'react';

// Correct asset imports matching actual file names in src/assets
import hotelBgImage from '../assets/hotelimgae.jpg';
import ottImage from '../assets/ott.jpeg';
import spaImage from '../assets/spa.jpeg';
import exploreImage from '../assets/explore.png';
import tvImage from '../assets/tv.avif';
import hotelVideosImage from '../assets/Hotel-videos.png';
import diningImage from '../assets/dining.jpeg';

export default function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const navItems = [
    {
      id: 'home',
      label: 'HOME',
      title: 'A wide world of entertainment',
      description: 'Experience world-class culinary creations and seamless digital entertainment right from the comfort of your room.',
      bg: hotelBgImage,
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: 'ott',
      label: 'OTT',
      title: 'Stream your favorites seamlessly',
      description: 'Access Netflix, Prime Video, Hotstar, and more directly on your TV without entering your credentials.',
      bg: ottImage,
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'dining',
      label: 'DINING',
      title: 'In-Room Dining & Culinary',
      description: 'Order from our curated menu and have it delivered discreetly to your suite 24 hours a day.',
      bg: diningImage,
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: 'spa',
      label: 'SPA',
      title: 'Wellness & Relaxation',
      description: 'Book therapeutic treatments and discover ancient Ayurvedic rituals designed to restore your balance.',
      bg: spaImage,
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'explore',
      label: 'EXPLORE',
      title: 'Discover the Pink City',
      description: 'Uncover vibrant colors, historic palaces, and bustling bazaars with our curated local guides.',
      bg: exploreImage,
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 'videos',
      label: 'VIDEOS',
      title: 'Hotel Tours & Gallery',
      description: 'Take a virtual tour of our resort, event spaces, and watch guided wellness tutorials.',
      bg: hotelVideosImage,
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      id: 'settings',
      label: 'SETTINGS',
      title: 'Peace of mind, built in',
      description: 'Customize room environment, pair bluetooth devices, and manage your privacy preferences securely.',
      bg: hotelBgImage,
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const quickAccessCards = [
    { id: 'livetv', title: 'Live TV', subtitle: '200+ CHANNELS', image: tvImage },
    { id: 'ott', title: 'OTT', subtitle: 'LATEST RELEASES', image: ottImage },
    { id: 'activities', title: 'Activities', subtitle: 'AT YOUR FINGERTIPS', image: exploreImage },
    { id: 'dining', title: 'Dining', subtitle: 'DELICIOUS & FRESH', image: spaImage },
  ];

  // --- Faster Scroll Snapping Logic ---
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const scrolled = -rect.top;
          const scrollableDistance = rect.height - windowHeight;

          if (scrollableDistance > 0) {
            let progress = scrolled / scrollableDistance;
            progress = Math.max(0, Math.min(1, progress));
            
            // Snap to the closest whole index faster
            const newIndex = Math.round(progress * (navItems.length - 1));
            setActiveIndex(newIndex);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems.length]);

  // Click-to-Scroll Function
  const scrollToSection = (index) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollableDistance = rect.height - window.innerHeight;
    const absoluteTop = window.scrollY + rect.top;
    const targetScrollY = absoluteTop + (index / (navItems.length - 1)) * scrollableDistance;

    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      // Reduced height multiplier from 85vh to 45vh per item to make scrolling much faster and more responsive
      style={{ height: `${navItems.length * 45}vh` }}
      className="relative w-full bg-[#0b0f19] font-sans text-white expertise-container"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Main Grid Layout: Left Compact Sidebar + Right 3D Screen */}
        <div className="w-full max-w-[1550px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 md:px-10 items-center">
 
          {/* --- LEFT COLUMN: COMPACT SIDEBAR ACCORDION --- */}
          <div className="lg:col-span-4 flex flex-col gap-2 z-20">
            {navItems.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.id}
                  onClick={() => scrollToSection(index)}
                  className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 border expertise-card ${
                    isActive 
                      ? 'bg-[#161b28] border-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.4)]' 
                      : 'bg-[#10141f] border-white/5 hover:bg-[#141924]'
                  }`}
                >
                  <div className="px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`transition-colors duration-300 ${isActive ? 'text-[#e2b86d]' : 'text-slate-400'}`}>
                        {item.icon}
                      </span>
                      <h3 className={`text-xs md:text-sm font-bold tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Smooth Expandable Description Area */}
                  <div 
                    className={`grid transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'grid-rows-[1fr] opacity-150 px-4 pb-3 pt-0' : 'grid-rows-[0fr] opacity-0 px-4 pb-0 pt-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Active Indicator Line */}
                  <div 
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#e2b86d] transition-all duration-400 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* --- RIGHT COLUMN: 3D TV SCREEN --- */}
          <div className="lg:col-span-8 flex justify-center lg:justify-end items-center w-full h-[50vh] lg:h-[68vh]">
            
            {/* The 3D Rotated Frame */}
            <div 
              className="relative w-full aspect-[16/10] max-h-[660px] rounded-[1.2rem] md:rounded-[1.8rem] bg-[#05070a] border-[6px] md:border-[10px] border-[#0a0f18] overflow-hidden will-change-transform expertise-tv-frame"
            >
              
              {/* Bezel Border Highlight */}
              <div className="absolute inset-0 border border-white/10 rounded-[1rem] md:rounded-[1.4rem] z-50 pointer-events-none shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]"></div>

              {/* Status Bar */}
              <div className="absolute top-5 right-6 z-40 flex items-center gap-3 opacity-80">
                <div className="bg-black/60 backdrop-blur-md rounded-full px-3.5 py-1 flex items-center gap-2 text-white text-[10px]">
                  <span className="text-amber-400">☀️ 31°C</span>
                  <span className="text-white/30">|</span>
                  <span className="font-bold tracking-wide">04:13 PM</span>
                </div>
              </div>

              {/* The Sliding Horizontal Track inside the 3D Screen */}
              <div 
                className="absolute inset-0 z-10 w-full h-full flex flex-row flex-nowrap transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                
                {/* SCREEN 0: HOME */}
                <div className="w-full h-full flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hotelBgImage})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  
                  <div className="relative z-20 h-full flex flex-col justify-between p-6 md:p-10">
                    <div>
                      <h2 className="text-[#e2b86d] text-sm md:text-base font-serif italic mb-0.5">Good Afternoon,</h2>
                      <h1 className="text-white text-2xl md:text-4xl font-serif font-bold tracking-wide mb-2">Anantara Jewel Bagh</h1>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e2b86d]/20 border border-[#e2b86d]/30 text-[#e2b86d] text-[9px] font-black tracking-widest uppercase">
                        ROOM 101
                      </span>
                    </div>

                    <div>
                      <p className="text-[#e2b86d] text-[9px] font-extrabold tracking-[0.2em] uppercase mb-2.5 drop-shadow">QUICK ACCESS</p>
                      <div className="grid grid-cols-4 gap-2.5">
                        {quickAccessCards.map((card) => (
                          <div key={card.id} className="relative rounded-xl overflow-hidden border border-white/10 aspect-video bg-black/40">
                            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${card.image})` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                            <div className="absolute bottom-2 left-2.5">
                              <h4 className="text-white text-[11px] font-bold">{card.title}</h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* SCREEN 1: OTT */}
                <div className="w-full h-full flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${ottImage})` }} />
                  <div className="absolute inset-0 bg-[#05070a]/80 backdrop-blur-sm"></div>

                  <div className="relative z-20 h-full flex flex-col justify-center items-center p-6 text-center">
                    <h1 className="text-white text-2xl md:text-4xl font-serif font-bold mb-6">Streaming Apps</h1>
                    
                    <div className="grid grid-cols-3 gap-3.5 w-full max-w-xl">
                      {[
                        { name: 'NETFLIX', bg: 'bg-black', text: 'text-red-600', border: 'border-white/10' },
                        { name: 'prime video', bg: 'bg-[#00a8e1]', text: 'text-white', border: 'border-white/10' },
                        { name: 'Hotstar', bg: 'bg-gradient-to-r from-blue-700 to-indigo-900', text: 'text-white', border: 'border-white/10' },
                        { name: 'YouTube', icon: true, bg: 'bg-[#141414]', text: 'text-red-600', border: 'border-white/10' },
                        { name: 'SonyLIV', bg: 'bg-[#0a1128]', text: 'text-amber-400', border: 'border-white/10' },
                        { name: 'Z5', bg: 'bg-white', text: 'text-purple-600', border: 'border-white/10' },
                      ].map((app, idx) => (
                        <div key={idx} className={`w-full aspect-video rounded-xl ${app.bg} border ${app.border} flex items-center justify-center shadow-lg`}>
                          {app.icon ? (
                            <svg className={`w-8 h-8 ${app.text}`} viewBox="0 0 24 24" fill="currentColor">
                              <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                          ) : (
                            <span className={`font-black text-base md:text-lg tracking-tighter ${app.text}`}>{app.name}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SCREEN 2: DINING */}
                <div className="w-full h-full flex-shrink-0 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${diningImage})` }} />
                  <div className="absolute inset-0 bg-black/60"></div>
                  
                  <div className="relative z-20 text-center px-8">
                    <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h2 className="text-white text-2xl md:text-3xl font-sans font-medium mb-2">In-Room Dining</h2>
                    <p className="text-white/60 max-w-xs mx-auto text-xs">Experience world-class culinary creations delivered discreetly to your suite.</p>
                  </div>
                </div>

                {/* SCREEN 3: SPA */}
                <div className="w-full h-full flex-shrink-0 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${spaImage})` }} />
                  <div className="absolute inset-0 bg-black/60"></div>
                  
                  <div className="relative z-20 text-center px-8">
                    <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md flex items-center justify-center">
                       <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-white text-2xl md:text-3xl font-sans font-medium mb-2">Wellness & Spa</h2>
                    <p className="text-white/60 max-w-xs mx-auto text-xs">Rejuvenate your senses with ancient rituals and modern therapies.</p>
                  </div>
                </div>

                {/* SCREEN 4: EXPLORE */}
                <div className="w-full h-full flex-shrink-0 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${exploreImage})` }} />
                  <div className="absolute inset-0 bg-black/60"></div>
                  
                  <div className="relative z-20 text-center px-8">
                    <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <h2 className="text-white text-2xl md:text-3xl font-sans font-medium mb-2">City Guides</h2>
                    <p className="text-white/60 max-w-xs mx-auto text-xs">Uncover vibrant colors and historic palaces with our curated excursions.</p>
                  </div>
                </div>

                {/* SCREEN 5: VIDEOS */}
                <div className="w-full h-full flex-shrink-0 relative flex flex-col justify-center p-6 md:p-10">
                  <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${hotelVideosImage})` }} />
                  <div className="absolute inset-0 bg-black/80"></div>

                  <div className="relative z-20 w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden border border-white/20 bg-black flex items-center justify-center shadow-xl">
                    <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${hotelBgImage})` }}></div>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-6 h-6 text-white fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>

                {/* SCREEN 6: SETTINGS */}
                <div className="w-full h-full flex-shrink-0 relative p-6 md:p-10 flex flex-col justify-center">
                  <div className="absolute inset-0 bg-[#0a0f18]"></div>
                  
                  <div className="relative z-20">
                    <h2 className="text-white text-2xl font-bold mb-6">System Preferences</h2>
                    <div className="grid grid-cols-2 gap-3 max-w-xl">
                      {[
                        { title: 'Language', val: 'English' },
                        { title: 'Bluetooth Pairing', val: 'Disconnected' },
                        { title: 'Wake-Up Alarm', val: 'Not Set' },
                        { title: 'Sleep Timer', val: '60 Mins' }
                      ].map((setting, idx) => (
                        <div key={idx} className="p-3.5 bg-white/5 border border-white/10 rounded-lg flex justify-between items-center">
                          <h4 className="text-white text-xs">{setting.title}</h4>
                          <span className="text-slate-400 text-[11px]">{setting.val} ›</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}