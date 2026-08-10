import { useState, useEffect, useRef, useCallback, memo } from 'react';
import {
  Cable,
  Network,
  Video,
  Wifi,
  Flame,
  Cctv,
  Server,
  Building2,
  BatteryCharging,
  ArrowRight,
  Database,
  Layers,
  ChevronRight,
  Sparkles,
  Activity
} from 'lucide-react';

const solutionsList = [
  {
    id: 'cabling',
    name: 'Structured Cabling System',
    icon: Cable,
    tagline: 'High-density Cat6A / Cat7 and Fiber Optic Backbone',
    description: 'Future-proof copper and optical fiber cabling infrastructures engineered for gigabit speeds, minimal latency, and compliance with strict TIA/EIA industry standards.',
    features: ['Cat6A & Cat7 Copper Cabling', 'Single/Multi-Mode Fiber Ring', 'Raceway & Cable Tray Management', 'OTDR & Fluke DSX-8000 Certification'],
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'enterprise-networking',
    name: 'Enterprise Networking',
    icon: Wifi,
    tagline: 'Core Switching, SD-WAN & Enterprise Wi-Fi 6E',
    description: 'Resilient network backbones featuring high-availability L2/L3 core switching, seamless roaming wireless access points, network segmentation, and SD-WAN optimization.',
    features: ['L3 Core Switch Redundancy', 'Enterprise Wi-Fi 6 / 6E APs', 'Secure VLAN Segmentation & QoS', 'Centralized Cloud Dashboard Control'],
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'admin-systems',
    name: 'Secure Data Systems',
    icon: Database,
    tagline: 'Cloud Workflow Automation & Role-Based Access',
    description: 'Digitize physical workflows with automated cloud tools. We build secure systems that fetch data seamlessly while strictly preventing unauthorized staff from viewing or editing source master sheets.',
    features: ['Physical-to-Digital Flow Conversion', 'Strict Role-Based Access (RBAC)', 'Automated Payroll & Receipting System', 'Master Sheet Source Protection'],
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'security',
    name: 'Security & Surveillance',
    icon: Cctv,
    tagline: 'AI CCTV Surveillance & Perimeter Defense',
    description: 'End-to-end IP CCTV systems with AI video analytics, facial recognition, biometric access control, and centralized video management software (VMS).',
    features: ['4K IP Cameras with Night Vision', 'AI License Plate & Motion Recognition', 'Biometric Access Control Gates', 'Redundant NVR Storage Failover'],
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'unified-comm',
    name: 'Unified Communication',
    icon: Network,
    tagline: 'VoIP IP-PBX, SIP Trunking & Voice Gateways',
    description: 'Seamless voice and video communication networks unifying IP phones, softphones, mobile extensions, and automated interactive voice response (IVR) systems.',
    features: ['IP-PBX Voice Servers', 'SIP Trunking Integration', 'Mobile & Desktop Softphones', 'Call Recording & Detail Analytics'],
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'telepresence',
    name: 'Telepresence & AV Systems',
    icon: Video,
    tagline: 'Boardroom Video Conferencing & Smart Spaces',
    description: 'Immersive 4K video conferencing suites with beamforming microphone arrays, interactive touch panels, and multi-platform cloud room integration.',
    features: ['4K PTZ Auto-Tracking Cameras', 'Beamforming Ceiling Microphones', 'Wireless Content Sharing Devices', 'One-Touch Join Zoom/Teams/Webex'],
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'server-storage',
    name: 'Server & Storage',
    icon: Server,
    tagline: 'Hyperconverged Infrastructure & Data Backup',
    description: 'Scalable server compute nodes, high-speed NVMe storage arrays, automated snapshot backups, and disaster recovery infrastructure.',
    features: ['Rack & Blade Enterprise Servers', 'SAN / NAS Active-Active Arrays', 'VMware & Hyper-V Virtual Clusters', 'Automated Offsite Backup Systems'],
    img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'building-auto',
    name: 'Building Automation',
    icon: Building2,
    tagline: 'Smart Facility Controls & Environmental Sensors',
    description: 'Integrated Building Management Systems (BMS) for automated HVAC control, smart lighting, energy metering, and critical sensor monitoring.',
    features: ['HVAC Control & Energy Audit', 'Smart Lighting Schedules', 'Environmental & Liquid Leak Sensors', 'Centralized BMS Dashboard'],
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'fire-safety',
    name: 'Fire & Safety',
    icon: Flame,
    tagline: 'Addressable Fire Alarms & Suppression',
    description: 'Early-warning smoke detection, aspirating smoke detectors (VESDA), addressable fire alarm panels, and automated gas suppression.',
    features: ['Addressable Smoke Detectors', 'VESDA High-Sensitivity Sampling', 'Automatic Gas Suppression Trigger', 'Integrable Evacuation Paging'],
    img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'ups-power',
    name: 'UPS & Power Backup',
    icon: BatteryCharging,
    tagline: 'Online Double-Conversion UPS & Smart PDUs',
    description: 'Zero-transfer time online UPS systems, rack-mount smart PDUs, battery backup banks, and comprehensive power monitoring software.',
    features: ['Modular Online UPS Solutions', 'Smart Switched Outlet PDUs', 'Lithium / VRLA Battery Banks', 'Power Audit & Thermal Analytics'],
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85'
  }
];

// Memoized SidebarCard component to optimize rendering performance by avoiding redundant layout calculations and repaints
const SidebarCard = memo(({ sol, index, isActive, onMouseEnter, onClick }) => {
  const Icon = sol.icon;

  return (
    <div
      id={`section-${sol.id}`}
      data-sol-id={sol.id}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className="relative pl-0 sm:pl-16 group cursor-pointer transform-gpu will-change-[transform]"
    >
      {/* Circuit Node Indicator */}
      <div className="hidden sm:flex absolute left-[15px] top-6 w-6 h-6 rounded-full items-center justify-center bg-slate-950 border-4 border-slate-900 z-10 transition-transform duration-200 ease-out">
        <div
          className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ease-out ${
            isActive ? 'bg-[#E51D25] shadow-[0_0_12px_#E51D25] scale-125' : 'bg-slate-700 group-hover:bg-red-400'
          }`}
        />
      </div>

      {/* Content Card */}
      <div
        className={`transition-all duration-200 ease-out rounded-2xl p-6 border transform-gpu ${
          isActive
            ? 'bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-900/90 border-[#E51D25]/80 shadow-[0_10px_30px_rgba(229,29,37,0.18)] ring-1 ring-[#E51D25]/40 scale-[1.012]'
            : 'bg-slate-900/40 border-white/5 hover:border-red-500/40 hover:bg-slate-900/70 hover:scale-[1.005]'
        }`}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ease-out ${
                isActive ? 'bg-[#E51D25] text-white shadow-lg shadow-red-500/40 scale-105' : 'bg-slate-800 text-slate-400 group-hover:text-red-400'
              }`}
            >
              <Icon className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span
                className={`font-mono text-[9px] tracking-[0.2em] uppercase mb-1 block transition-colors duration-200 ${
                  isActive ? 'text-red-400 font-bold' : 'text-slate-500 group-hover:text-red-400'
                }`}
              >
                {sol.tagline}
              </span>
              <h2 className={`text-xl font-extrabold tracking-tight transition-colors duration-200 ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                {sol.name}
              </h2>
            </div>
          </div>
          <span className={`text-2xl font-black transition-colors duration-200 ${isActive ? 'text-red-500/30' : 'text-slate-800 group-hover:text-slate-700'}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Mobile Image Display */}
        <div className="lg:hidden w-full h-48 rounded-xl overflow-hidden mb-4 border border-white/10 relative">
          <img src={sol.img} alt={sol.name} loading="lazy" className="w-full h-full object-cover" />
        </div>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
          {sol.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
          {sol.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
              <Activity className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 transition-colors duration-200 ${isActive ? 'text-[#E51D25]' : 'text-slate-600'}`} />
              <span className="leading-tight">{feat}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
              isActive ? 'text-[#E51D25]' : 'text-slate-500 group-hover:text-red-400'
            }`}
          >
            <span>Request Proposal</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" />
          </span>

          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded-full transition-colors duration-200 ${
              isActive ? 'bg-[#E51D25]/20 text-red-400 border border-red-500/30 font-bold' : 'text-slate-600 group-hover:text-slate-400'
            }`}
          >
            {isActive ? 'ACTIVE VIEW' : 'HOVER TO PREVIEW'}
          </span>
        </div>
      </div>
    </div>
  );
});

SidebarCard.displayName = 'SidebarCard';

const SolutionsPage = ({ initialFilter = 'all' }) => {
  const [activeId, setActiveId] = useState(solutionsList[0].id);

  const leftContainerRef = useRef(null);
  const itemRefs = useRef({});
  const cardOffsets = useRef([]);

  // Scroll left sidebar smoothly to targeted category
  const scrollToSection = useCallback((id) => {
    const target = itemRefs.current[id];
    const container = leftContainerRef.current;

    if (target && container) {
      const topOffset = target.offsetTop - container.offsetTop - 16;
      container.scrollTo({ top: topOffset, behavior: 'smooth' });
      setActiveId(id);
    } else {
      const el = document.getElementById(`section-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveId(id);
      }
    }
  }, []);

  // Handle URL deep link navigation
  useEffect(() => {
    if (initialFilter && initialFilter !== 'all') {
      const match = solutionsList.find(
        (s) => s.id === initialFilter || s.id.includes(initialFilter) || initialFilter.includes(s.id)
      );
      if (match) {
        setActiveId(match.id);
        const timer = setTimeout(() => scrollToSection(match.id), 150);
        return () => clearTimeout(timer);
      }
    }
  }, [initialFilter, scrollToSection]);

  // Calculate top offsets of each card relative to scroll container (run once + on resize to avoid reading client rects during scroll)
  useEffect(() => {
    const calculateOffsets = () => {
      const container = leftContainerRef.current;
      if (!container) return;

      const offsets = solutionsList.map((sol) => {
        const el = itemRefs.current[sol.id];
        return {
          id: sol.id,
          top: el ? el.offsetTop : 0
        };
      });
      cardOffsets.current = offsets;
    };

    calculateOffsets();
    const timer = setTimeout(calculateOffsets, 500); // safety fallback for deferred web font/image shifts

    window.addEventListener('resize', calculateOffsets);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateOffsets);
    };
  }, []);

  // Fast & low-latency zero-reflow scroll synchronization
  useEffect(() => {
    const container = leftContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const targetPoint = scrollTop + container.clientHeight / 3;

      let closestId = solutionsList[0].id;
      let minDistance = Infinity;

      cardOffsets.current.forEach((item) => {
        const distance = Math.abs(item.top - targetPoint);
        if (distance < minDistance) {
          minDistance = distance;
          closestId = item.id;
        }
      });

      setActiveId((curr) => (curr !== closestId ? closestId : curr));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const activeIndex = solutionsList.findIndex((s) => s.id === activeId);
  const activeSolution = solutionsList.find((s) => s.id === activeId) || solutionsList[0];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans flex flex-col overflow-x-hidden selection:bg-[#E51D25] selection:text-white relative">

      {/* Background Ambient Grid & Glow */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#E51D25]/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Main Full-Screen Split Layout */}
      <main className="w-full max-w-full px-0 py-0 flex-1 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 h-[calc(100vh-80px)] w-full">

          {/* Left Column (LARGE): Scrollable Categories Sidebar */}
          <div className="lg:col-span-8 h-full flex flex-col relative p-6 sm:p-10 pr-6 overflow-hidden">

            {/* Vertical Circuit Line */}
            <div className="absolute left-[51px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-transparent via-slate-800 to-transparent z-0 hidden sm:block" />

            {/* Sidebar Scroll Container */}
            <div
              ref={leftContainerRef}
              className="flex-1 overflow-y-auto pr-4 space-y-6 scroll-smooth custom-sidebar-scroll relative z-10"
            >
              {solutionsList.map((sol, index) => (
                <div
                  key={sol.id}
                  ref={(el) => (itemRefs.current[sol.id] = el)}
                  data-sol-id={sol.id}
                >
                  <SidebarCard
                    sol={sol}
                    index={index}
                    isActive={activeId === sol.id}
                    onMouseEnter={() => setActiveId(sol.id)}
                    onClick={() => scrollToSection(sol.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (SMALL): High-Vibrancy Master Visualizer Window */}
          <div className="hidden lg:block lg:col-span-4 h-full relative p-6 sm:p-10 pl-2">
            <div className="h-full w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-slate-900 group relative">

              {/* Stacked Images - Fast & hardware-accelerated crossfade with tight scale and opacity transitions */}
              {solutionsList.map((sol) => {
                const isActive = activeId === sol.id;
                return (
                  <div
                    key={sol.id}
                    className={`absolute inset-0 transition-[opacity,transform] duration-200 ease-out transform-gpu will-change-[opacity,transform] ${
                      isActive
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-[1.015] z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={sol.img}
                      alt={sol.name}
                      className="w-full h-full object-cover object-center brightness-105 contrast-105"
                      loading="eager"
                    />
                    
                    {/* Soft subtle bottom gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent pointer-events-none" />
                  </div>
                );
              })}

              {/* Subtle Tech Grid Lines */}
              <div
                className="absolute inset-0 z-20 pointer-events-none opacity-15 mix-blend-overlay"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '48px 48px' }}
              />

              {/* Top Status Bar */}
              <div className="absolute top-6 left-6 right-6 z-30 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-3 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/15 pointer-events-auto shadow-lg">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E51D25] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E51D25]"></span>
                  </div>
                  <span className="text-[10px] font-mono text-white font-bold uppercase tracking-widest">
                    SOLUTION {String(activeIndex + 1).padStart(2, '0')} / {solutionsList.length}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/15 pointer-events-auto shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-red-400" />
                  <span className="text-[10px] font-extrabold text-white uppercase tracking-widest">
                    LIVE VISUALIZER
                  </span>
                </div>
              </div>

              {/* Bottom Glassmorphism Info Panel */}
              <div className="absolute bottom-6 left-6 right-6 z-30">
                <div className="bg-black/65 backdrop-blur-2xl border border-white/20 rounded-3xl p-5 sm:p-6 shadow-2xl transition-all duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#E51D25] text-white rounded-xl shadow-md transition-transform duration-200 hover:scale-105">
                        {activeSolution && <activeSolution.icon className="w-5 h-5" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-widest block mb-0.5">
                          {activeSolution?.tagline}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white leading-none tracking-tight">
                          {activeSolution?.name}
                        </h3>
                      </div>
                    </div>
                    <a
                      href="#contact"
                      className="group flex items-center justify-center w-11 h-11 bg-[#E51D25] hover:bg-red-700 text-white rounded-2xl transition-all duration-200 shadow-lg cursor-pointer hover:scale-105"
                    >
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed line-clamp-2 mb-4">
                    {activeSolution?.description}
                  </p>

                  {/* Scrubber / Progress Bar */}
                  <div className="flex items-center gap-2 w-full pt-2 border-t border-white/10">
                    {solutionsList.map((sol) => (
                      <button
                        key={sol.id}
                        onClick={() => scrollToSection(sol.id)}
                        className={`h-2 rounded-full transition-all duration-300 ease-out cursor-pointer ${
                          activeId === sol.id
                            ? 'flex-1 bg-[#E51D25] shadow-[0_0_12px_#E51D25]'
                            : 'w-3 bg-white/30 hover:bg-white/60'
                        }`}
                        aria-label={`View ${sol.name}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <style jsx>{`
        .custom-sidebar-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-sidebar-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-sidebar-scroll::-webkit-scrollbar-thumb {
          background: rgba(229, 29, 37, 0.4);
          border-radius: 9999px;
        }
        .custom-sidebar-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(229, 29, 37, 0.8);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>
    </div>
  );
};

export default SolutionsPage;