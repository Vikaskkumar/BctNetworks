import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Hotel,
  HeartPulse,
  GraduationCap,
  Factory,
  Landmark,
  ShoppingCart,
  Wallet,
  ArrowRight,
  ShieldCheck,
  Check,
  Network,
  Sparkles
} from 'lucide-react';

const industriesDetail = [
  {
    id: 'corporate',
    icon: Building2,
    name: 'Corporate Offices',
    tagline: 'High-Density Wi-Fi 6E & Zero-Trust',
    description: 'Custom infrastructure for corporate workplaces including multi-floor 10G switching backbones, guest portal Wi-Fi, and biometric access.',
    capabilities: ['Multi-Floor Wi-Fi Roaming', 'SD-WAN Connectivity', 'Smart Boardrooms']
  },
  {
    id: 'hospitality',
    icon: Hotel,
    name: 'Hospitality',
    tagline: 'In-Room High-Speed & PMS Sync',
    description: 'Cinematic in-room entertainment, PMS-integrated Wi-Fi billing, CCTV surveillance across corridors, and VoIP guest room phones.',
    capabilities: ['PMS Opera/Fidelio Sync', '100% In-Room Coverage', 'Digital Signage']
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    name: 'Healthcare',
    tagline: 'Zero-Downtime Medical Networks',
    description: 'Mission-critical HIPAA-compliant networks supporting PACS image transfers, telemetry monitoring, and medical asset tracking.',
    capabilities: ['Isolated Medical IoT VLANs', 'Redundant Core Failover', 'Nurse Call Sensors']
  },
  {
    id: 'education',
    icon: GraduationCap,
    name: 'Education Campuses',
    tagline: 'High-Capacity Student Wi-Fi',
    description: 'Campus-wide gigabit fiber backbones, outdoor AP coverage, web content filtering, and digital auditorium sound systems.',
    capabilities: ['Bandwidth Shaping Policy', 'Auditorium Pro-AV', 'Campus CCTV Security']
  },
  {
    id: 'manufacturing',
    icon: Factory,
    name: 'Manufacturing',
    tagline: 'Industrial Ethernet & Automation',
    description: 'Hardened industrial switches, high-bay factory Wi-Fi coverage, perimeter beam intrusion detection, and SCADA automation networking.',
    capabilities: ['IP67 Ruggedized APs', 'Perimeter Thermal Cameras', 'DIN-Rail Switching']
  },
  {
    id: 'government',
    icon: Landmark,
    name: 'Public Sector',
    tagline: 'High-Security Fiber Backbones',
    description: 'State government networks, municipal video surveillance command centers, secure data backbones, and public Wi-Fi zones.',
    capabilities: ['Encrypted IPsec Tunnels', 'Command Center Video Walls', 'TIA/EIA Compliance']
  },
  {
    id: 'retail',
    icon: ShoppingCart,
    name: 'Retail & Commercial',
    tagline: 'POS Reliability & Wi-Fi Analytics',
    description: 'High-reliability POS payment networks, customer footfall analytics Wi-Fi, mall-wide public address, and anti-theft CCTV integration.',
    capabilities: ['PCI-DSS POS VLANs', 'Footfall & Heatmaps', 'Mall-Wide PA Systems']
  },
  {
    id: 'banking',
    icon: Wallet,
    name: 'Banking & Finance',
    tagline: 'Ultra-Secure Branch WAN & Vaults',
    description: 'Highly secure dual-homed WAN connections for bank branches, remote ATM monitoring, biometric vault access, and surveillance.',
    capabilities: ['Hardware Encrypted SD-WAN', 'ATM Sensor Sync', 'Biometric Vault Access']
  }
];

const IndustriesPage = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  
  const [translateX, setTranslateX] = useState(0);
  const [scrollRange, setScrollRange] = useState(0);

  const touchStartX = useRef(0);
  const touchStartTranslateX = useRef(0);

  // Calculate dynamic scroll range based on viewport width vs track width
  useEffect(() => {
    const calculateRange = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Align last card exactly to right viewport edge by subtracting right padding margin (10vw)
        const rightPadding = viewportWidth * 0.1;
        const range = trackWidth - rightPadding - viewportWidth;
        setScrollRange(Math.max(0, range));
      }
    };

    calculateRange();
    const timer = setTimeout(calculateRange, 500);

    window.addEventListener('resize', calculateRange);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateRange);
    };
  }, []);

  // Intercept scroll and drag gestures to lock vertical page scroll and translate horizontal cards
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const handleWheel = (e) => {
      if (scrollRange <= 0) return;

      const nextX = translateX - e.deltaY;
      const isScrollingHorizontal =
        (e.deltaY > 0 && translateX > -scrollRange) || // scrolling down, not at end
        (e.deltaY < 0 && translateX < 0);            // scrolling up, not at start

      if (isScrollingHorizontal) {
        e.preventDefault();
        setTranslateX(Math.max(-scrollRange, Math.min(0, nextX)));
      }
    };

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartTranslateX.current = translateX;
    };

    const handleTouchMove = (e) => {
      if (scrollRange <= 0) return;

      const touchX = e.touches[0].clientX;
      const diffX = touchX - touchStartX.current;
      const nextX = touchStartTranslateX.current + diffX;

      const isScrollingHorizontal =
        (diffX < 0 && translateX > -scrollRange) || // swiping left (scroll down)
        (diffX > 0 && translateX < 0);            // swiping right (scroll up)

      if (isScrollingHorizontal) {
        e.preventDefault();
        setTranslateX(Math.max(-scrollRange, Math.min(0, nextX)));
      }
    };

    element.addEventListener('wheel', handleWheel, { passive: false });
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      element.removeEventListener('wheel', handleWheel);
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
    };
  }, [translateX, scrollRange]);

  const progress = scrollRange > 0 ? -translateX / scrollRange : 0;
  const activeIndex = Math.max(
    0,
    Math.min(Math.floor(progress * industriesDetail.length), industriesDetail.length - 1)
  );

  return (
    <div className="bg-[#020617] min-h-screen text-slate-200 font-sans selection:bg-[#E51D25] selection:text-white">

      {/* Main pinned viewport section matching flush under navbar */}
      <div 
        ref={containerRef} 
        className="h-[calc(100vh-80px)] w-full flex flex-col justify-center overflow-hidden bg-[#020617] relative z-10"
      >
        {/* Background SVG Grid with parallax shift */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          animate={{ x: progress * -40 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="0" cy="0" r="1.5" fill="rgba(255,255,255,0.4)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network-grid)" />
          </svg>
        </motion.div>

        {/* Dynamic Background Glow Layer 1 */}
        <motion.div
          className="absolute w-[80vw] h-[50vh] rounded-[100%] blur-[120px] pointer-events-none z-0 bg-[#E51D25]"
          style={{ 
            left: "50%",
            top: "50%",
            y: "-50%"
          }}
          animate={{
            x: `${-50 + (progress * 10)}%`,
            opacity: 0.15 - (Math.abs(progress - 0.5) * 0.08)
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />

        {/* Dynamic Background Glow Layer 2 */}
        <motion.div
          className="absolute w-[80vw] h-[50vh] rounded-[100%] blur-[120px] pointer-events-none z-0 bg-red-800"
          style={{ 
            left: "50%",
            top: "50%",
            y: "-50%"
          }}
          animate={{
            x: `${-50 - (progress * 10)}%`,
            opacity: 0.05 + (Math.abs(progress - 0.5) * 0.15)
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />

        {/* Top Progress Bar & Header */}
        <div className="absolute top-0 left-0 w-full z-30">
          <div className="w-full h-1 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              className="h-full bg-[#E51D25]"
              style={{ width: `${progress * 100}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </div>
          <div className="max-w-[90vw] mx-auto pt-6 sm:pt-10 flex justify-between items-end">
            <div>
              <span className="text-[#E51D25] font-extrabold text-[10px] tracking-[0.2em] uppercase mb-1 block">
                ARCHITECTURE BY SECTOR
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Industries We Serve
              </h1>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
              <Network className="w-4 h-4 text-red-500 animate-pulse" />
              <span>Scroll to slide</span>
            </div>
          </div>
        </div>

        {/* Horizontal Translating Track (Accelerated with hardware GPU composites) */}
        <motion.div
          ref={trackRef}
          className="flex gap-6 md:gap-8 px-[10vw] relative z-20 mt-12 transform-gpu will-change-transform"
          animate={{ x: translateX }}
          transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.5 }}
        >
          {industriesDetail.map((industry, index) => {
            const isActive = activeIndex === index;
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.id}
                className={`relative flex-shrink-0 w-[80vw] sm:w-[45vw] lg:w-[30vw] flex flex-col bg-[#0f1219]/85 backdrop-blur-xl border rounded-2xl overflow-hidden cursor-default transition-all duration-300 ${
                  isActive 
                    ? 'border-[#E51D25]/60 shadow-[0_20px_40px_-15px_rgba(229,29,37,0.25)] ring-1 ring-[#E51D25]/30' 
                    : 'border-slate-800/80'
                }`}
                animate={{
                  scale: isActive ? 1.02 : 0.95,
                  opacity: isActive ? 1 : 0.45,
                  y: isActive ? 0 : 15
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                {/* Glowing top line for focused industry */}
                <div
                  className={`absolute top-0 inset-x-0 h-[2px] transition-all duration-300 ${
                    isActive ? 'bg-gradient-to-r from-[#E51D25] to-red-500 opacity-100' : 'bg-transparent opacity-0'
                  }`}
                />

                <div className="p-8 md:p-10 flex flex-col h-full">
                  {/* Icon & Label */}
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'bg-[#E51D25] text-white shadow-lg shadow-red-500/30' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-mono font-black tracking-widest uppercase text-slate-500">
                      {String(index + 1).padStart(2, '0')} / {String(industriesDetail.length).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
                    {industry.name}
                  </h2>
                  <p className="text-[#E51D25] text-xs font-bold uppercase tracking-wider mb-6">
                    {industry.tagline}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                    {industry.description}
                  </p>

                  {/* Capabilities list */}
                  <div className="space-y-3 mb-10">
                    {industry.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-[#E51D25]" />
                        <span className="text-xs font-semibold text-slate-300">{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`group mt-auto inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors ${
                      isActive ? 'text-white hover:text-[#E51D25]' : 'text-slate-500'
                    }`}
                  >
                    <span>Get Infrastructure Consultation</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-250" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default IndustriesPage;