import { useState, useEffect } from 'react';
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
  Check,
  Database
} from 'lucide-react';

const solutionsList = [
  {
    id: 'cabling',
    name: 'Structured Cabling System',
    icon: Cable,
    tagline: 'High-density Cat6A / Cat7 and Fiber Optic Backbone',
    description: 'Future-proof copper and optical fiber cabling infrastructures engineered for gigabit speeds, minimal latency, and compliance with strict TIA/EIA industry standards.',
    features: ['Cat6A & Cat7 Copper Cabling', 'Single/Multi-Mode Fiber Ring', 'Raceway & Cable Tray Management', 'OTDR & Fluke DSX-8000 Certification'],
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'enterprise-networking',
    name: 'Enterprise Networking',
    icon: Wifi,
    tagline: 'Core Switching, SD-WAN & Enterprise Wi-Fi 6E',
    description: 'Resilient network backbones featuring high-availability L2/L3 core switching, seamless roaming wireless access points, network segmentation, and SD-WAN optimization.',
    features: ['L3 Core Switch Redundancy', 'Enterprise Wi-Fi 6 / 6E APs', 'Secure VLAN Segmentation & QoS', 'Centralized Cloud Dashboard Control'],
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'admin-systems',
    name: 'Secure Data Systems',
    icon: Database,
    tagline: 'Cloud Workflow Automation & Role-Based Access',
    description: 'Digitize physical workflows with automated cloud tools. We build secure systems that fetch data seamlessly while strictly preventing unauthorized staff from viewing or editing source master sheets.',
    features: ['Physical-to-Digital Flow Conversion', 'Strict Role-Based Access (RBAC)', 'Automated Payroll & Receipting System', 'Master Sheet Source Protection'],
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'security',
    name: 'Security & Surveillance',
    icon: Cctv,
    tagline: 'AI CCTV Surveillance & Perimeter Defense',
    description: 'End-to-end IP CCTV systems with AI video analytics, facial recognition, biometric access control, and centralized video management software (VMS).',
    features: ['4K IP Cameras with Night Vision', 'AI License Plate & Motion Recognition', 'Biometric Access Control Gates', 'Redundant NVR Storage Failover'],
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'unified-comm',
    name: 'Unified Communication',
    icon: Network,
    tagline: 'VoIP IP-PBX, SIP Trunking & Voice Gateways',
    description: 'Seamless voice and video communication networks unifying IP phones, softphones, mobile extensions, and automated interactive voice response (IVR) systems.',
    features: ['IP-PBX Voice Servers', 'SIP Trunking Integration', 'Mobile & Desktop Softphones', 'Call Recording & Detail Analytics'],
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'telepresence',
    name: 'Telepresence & AV Systems',
    icon: Video,
    tagline: 'Boardroom Video Conferencing & Smart Spaces',
    description: 'Immersive 4K video conferencing suites with beamforming microphone arrays, interactive touch panels, and multi-platform cloud room integration.',
    features: ['4K PTZ Auto-Tracking Cameras', 'Beamforming Ceiling Microphones', 'Wireless Content Sharing Devices', 'One-Touch Join Zoom/Teams/Webex'],
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'server-storage',
    name: 'Server & Storage',
    icon: Server,
    tagline: 'Hyperconverged Infrastructure & Data Backup',
    description: 'Scalable server compute nodes, high-speed NVMe storage arrays, automated snapshot backups, and disaster recovery infrastructure.',
    features: ['Rack & Blade Enterprise Servers', 'SAN / NAS Active-Active Arrays', 'VMware & Hyper-V Virtual Clusters', 'Automated Offsite Backup Systems'],
    img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'building-auto',
    name: 'Building Automation',
    icon: Building2,
    tagline: 'Smart Facility Controls & Environmental Sensors',
    description: 'Integrated Building Management Systems (BMS) for automated HVAC control, smart lighting, energy metering, and critical sensor monitoring.',
    features: ['HVAC Control & Energy Audit', 'Smart Lighting Schedules', 'Environmental & Liquid Leak Sensors', 'Centralized BMS Dashboard'],
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fire-safety',
    name: 'Fire & Safety',
    icon: Flame,
    tagline: 'Addressable Fire Alarms & Suppression',
    description: 'Early-warning smoke detection, aspirating smoke detectors (VESDA), addressable fire alarm panels, and automated gas suppression.',
    features: ['Addressable Smoke Detectors', 'VESDA High-Sensitivity Sampling', 'Automatic Gas Suppression Trigger', 'Integrable Evacuation Paging'],
    img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ups-power',
    name: 'UPS & Power Backup',
    icon: BatteryCharging,
    tagline: 'Online Double-Conversion UPS & Smart PDUs',
    description: 'Zero-transfer time online UPS systems, rack-mount smart PDUs, battery backup banks, and comprehensive power monitoring software.',
    features: ['Modular Online UPS Solutions', 'Smart Switched Outlet PDUs', 'Lithium / VRLA Battery Banks', 'Power Audit & Thermal Analytics'],
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80'
  }
];

const SolutionsPage = () => {
  const [activeId, setActiveId] = useState(solutionsList[0].id);

  // Monitor scrolling to dynamically update active capability and stick matching images
  useEffect(() => {
    const handleScroll = () => {
      const viewportMiddle = window.innerHeight / 2.5;
      let closestId = solutionsList[0].id;
      let minDistance = Infinity;

      solutionsList.forEach((sol) => {
        const el = document.getElementById(`section-${sol.id}`);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        
        // Calculate distance from top of section to mid-viewport
        const distance = Math.abs(rect.top - viewportMiddle);
        if (distance < minDistance) {
          minDistance = distance;
          closestId = sol.id;
        }
      });

      if (closestId && closestId !== activeId) {
        setActiveId(closestId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeId]);

  // Click handler to smoothly scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      const offset = 120; // offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveId(id);
    }
  };

  return (
    <div className="bg-[#f8f9fa] dark:bg-slate-950 min-h-screen transition-colors duration-300 selection:bg-[#E51D25] selection:text-white font-sans">
      
      {/* Header Banner */}
      <section className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 py-20 lg:py-28 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E51D25]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block text-[#E51D25] font-extrabold text-[11px] tracking-[0.2em] uppercase mb-4">
            OUR CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight mb-6">
            End-to-End Infrastructure. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E51D25] to-red-400">Zero Compromise.</span>
          </h1>
          <p className="text-gray-500 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Scroll down to explore our comprehensive suite of infrastructure solutions, or select a feature below to jump directly to it.
          </p>

          {/* Quick jump navigation pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 max-w-4xl mx-auto">
            {solutionsList.map((sol) => (
              <button
                key={sol.id}
                onClick={() => scrollToSection(sol.id)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold tracking-wide transition-all duration-300 ${
                  activeId === sol.id
                    ? 'bg-[#E51D25] text-white shadow-[0_4px_14px_0_rgba(229,29,37,0.39)]'
                    : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-350 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
                }`}
              >
                {sol.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Scrollytelling content section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">

          {/* Left Column: Feature detail blocks that scroll vertically */}
          <div className="lg:col-span-7 space-y-24 lg:space-y-36">
            {solutionsList.map((sol) => {
              const Icon = sol.icon;
              const isActive = activeId === sol.id;

              return (
                <div
                  key={sol.id}
                  id={`section-${sol.id}`}
                  className={`scroll-mt-28 transition-all duration-500 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.98]'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isActive ? 'bg-[#E51D25] text-white shadow-md' : 'bg-white dark:bg-slate-800 text-gray-500'
                    }`}>
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <div className="pt-1.5">
                      <span className="text-[#E51D25] dark:text-red-400 font-extrabold text-[10px] tracking-widest uppercase block mb-1">
                        {sol.tagline}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                        {sol.name}
                      </h2>
                    </div>
                  </div>

                  {/* Mobile Image (Visible only on mobile/tablet stack layout) */}
                  <div className="lg:hidden w-full h-[220px] rounded-2xl overflow-hidden my-6 border border-gray-200 dark:border-slate-800 shadow-md">
                    <img
                      src={sol.img}
                      alt={sol.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-gray-600 dark:text-slate-350 text-base leading-relaxed mb-6">
                    {sol.description}
                  </p>

                  {/* Features Bullet Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800/80 rounded-2xl mb-8">
                    {sol.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-slate-300 font-semibold">
                        <Check className="w-4 h-4 text-[#E51D25] dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-black text-[#E51D25] dark:text-red-400 hover:text-[#c9151c] dark:hover:text-red-300 uppercase tracking-widest"
                  >
                    <span>Request Architecture Proposal</span>
                    <ArrowRight className="w-4 h-4 transform hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Media container showing matching images */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32 h-[550px]">
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-800/80 shadow-2xl bg-slate-900">
              
              {/* Overlay shadow for nice depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10 pointer-events-none" />

              {/* Crossfading images stack */}
              {solutionsList.map((sol) => (
                <div
                  key={sol.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeId === sol.id ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  style={{ transitionProperty: 'opacity, transform' }}
                >
                  <img
                    src={sol.img}
                    alt={sol.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating badge for active feature category details inside scrollytelling container */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 bg-black/40 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-white">
                    <span className="text-[9px] font-black text-red-400 tracking-wider uppercase">
                      ACTIVE SOLUTION
                    </span>
                    <h3 className="font-black text-lg mt-0.5 tracking-tight leading-none">
                      {sol.name}
                    </h3>
                  </div>
                </div>
              ))}

              {/* Background ambient red glow inside container */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-[#E51D25]/20 rounded-full blur-2xl z-0 pointer-events-none" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;