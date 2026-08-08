import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
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
  Network
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

const comparisonData = [
  { industry: 'Corporate', density: 'High', security: 'Zero-Trust', compliance: 'ISO 27001', uptime: '99.999%', scale: 'Multi-Floor' },
  { industry: 'Hospitality', density: 'High', security: 'Segregated', compliance: 'PCI-DSS', uptime: '99.99%', scale: 'Campus' },
  { industry: 'Healthcare', density: 'Critical', security: 'HIPAA', compliance: 'HIPAA/HITECH', uptime: '99.999%', scale: 'Campus' },
  { industry: 'Education', density: 'Ultra-High', security: 'Filtered', compliance: 'CIPA', uptime: '99.9%', scale: 'Multi-Building' },
  { industry: 'Manufacturing', density: 'Medium', security: 'OT/IT Split', compliance: 'IEC 62443', uptime: '99.99%', scale: 'Wide-Area' },
  { industry: 'Public Sector', density: 'Medium', security: 'Air-Gapped', compliance: 'FIPS 140-2', uptime: '99.999%', scale: 'Regional' },
  { industry: 'Retail', density: 'High', security: 'PCI', compliance: 'PCI-DSS', uptime: '99.9%', scale: 'Multi-Site' },
  { industry: 'Banking', density: 'Low', security: 'Encrypted', compliance: 'RBI/PCI', uptime: '99.999%', scale: 'Distributed' },
];

const IndustriesPage = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Setup scroll tracking for the horizontal pinned section
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Smooth out the progress for the progress bar
  const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Map vertical scroll progress to horizontal translation percentages for robust cross-browser rendering
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  // Set up opacities for different glowing ambient layers to avoid interpolating complex gradient strings
  const glowOpacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.05, 0.15]);
  const glowOpacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.25, 0.05]);

  // Calculate which card should be "active" based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalCards = industriesDetail.length;
    const index = Math.max(0, Math.min(Math.floor(latest * totalCards), totalCards - 1));
    setActiveIndex(index);
  });

  return (
    <div className="bg-[#020617] min-h-screen text-slate-200 font-sans selection:bg-[#E51D25] selection:text-white">

      {/* 1. SCROLL-DRIVEN HORIZONTAL SECTION */}
      {/* Tall container to generate scroll height */}
      <div ref={containerRef} className="relative h-[400vh]">

        {/* Sticky viewport container */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-[#0a0a0a]">

          {/* Background Elements */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            {/* Minimal Network Topology SVG Pattern */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="network-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <circle cx="0" cy="0" r="1.5" fill="rgba(255,255,255,0.3)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#network-grid)" />
            </svg>
          </div>

          {/* Dynamic Background Glow Layer 1 (Red Accent) */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] rounded-[100%] blur-[120px] pointer-events-none z-0 bg-[#E51D25]"
            style={{ opacity: glowOpacity1 }}
          />

          {/* Dynamic Background Glow Layer 2 (Blue-Gray Depth) */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] rounded-[100%] blur-[120px] pointer-events-none z-0 bg-[#334155]"
            style={{ opacity: glowOpacity2 }}
          />

          {/* Top Progress Bar & Header */}
          <div className="absolute top-0 left-0 w-full z-50">
            <motion.div
              className="h-1 bg-[#E51D25] origin-left"
              style={{ scaleX: springProgress }}
            />
            <div className="max-w-[90vw] mx-auto pt-8 md:pt-12 flex justify-between items-end">
              <div>
                <span className="text-[#E51D25] font-extrabold text-[10px] tracking-[0.2em] uppercase mb-2 block">
                  ARCHITECTURE BY SECTOR
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                  Industries We Serve
                </h1>
              </div>
              <div className="hidden md:flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
                <Network className="w-4 h-4" />
                <span>Scroll to Explore</span>
              </div>
            </div>
          </div>

          {/* Horizontal Translating Track */}
          <motion.div
            className="flex gap-6 md:gap-8 px-[5vw] md:px-[10vw] relative z-20 mt-10"
            style={{ x: xTransform }}
          >
            {industriesDetail.map((industry, index) => {
              const isActive = activeIndex === index;
              const Icon = industry.icon;

              return (
                <motion.div
                  key={industry.id}
                  className={`relative flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] flex flex-col bg-[#0f1219]/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl overflow-hidden cursor-default transition-shadow duration-500 ${isActive ? 'shadow-[0_20px_40px_-15px_rgba(229,29,37,0.15)]' : ''
                    }`}
                  animate={{
                    scale: isActive ? 1 : 0.95,
                    opacity: isActive ? 1 : 0.4,
                    y: isActive ? 0 : 20
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Animated Red Accent Line */}
                  <motion.div
                    className="absolute top-0 left-0 h-1 bg-[#E51D25]"
                    initial={{ width: '0%' }}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                  />

                  <div className="p-8 md:p-10 flex flex-col h-full">

                    {/* Icon & Label */}
                    <div className="flex items-center justify-between mb-8">
                      <motion.div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-500 ${isActive ? 'bg-[#E51D25] text-white' : 'bg-slate-800 text-slate-400'
                          }`}
                        animate={{ y: isActive ? 0 : 10 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                      </motion.div>
                      <span className="text-[10px] font-black tracking-widest uppercase text-slate-600">
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

                    {/* Capabilities */}
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
                      href={`#${industry.id}`}
                      className={`group mt-auto inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors ${isActive ? 'text-white hover:text-[#E51D25]' : 'text-slate-500'
                        }`}
                    >
                      Explore Architecture
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* 2. COMPACT COMPARISON GRID */}
      <section className="relative z-10 bg-[#020617] py-24 md:py-32 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#E51D25] font-extrabold text-[10px] tracking-[0.2em] uppercase mb-2 block">
                TECHNICAL SPECIFICATIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Engineering Baselines
              </h2>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
              <ShieldCheck className="w-5 h-5 text-[#E51D25]" />
              <span>All deployments backed by BCT SLA guarantees</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="py-5 px-6 text-xs font-black text-slate-500 uppercase tracking-widest w-[20%]">Sector</th>
                  <th className="py-5 px-6 text-xs font-black text-slate-500 uppercase tracking-widest">Network Density</th>
                  <th className="py-5 px-6 text-xs font-black text-slate-500 uppercase tracking-widest">Security Model</th>
                  <th className="py-5 px-6 text-xs font-black text-slate-500 uppercase tracking-widest">Compliance</th>
                  <th className="py-5 px-6 text-xs font-black text-slate-500 uppercase tracking-widest">Uptime SLA</th>
                  <th className="py-5 px-6 text-xs font-black text-slate-500 uppercase tracking-widest">Avg. Scale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="group hover:bg-slate-900/50 transition-colors cursor-default"
                  >
                    <td className="py-5 px-6">
                      <span className="text-sm font-bold text-white group-hover:text-[#E51D25] transition-colors">
                        {row.industry}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-sm text-slate-400 font-medium">{row.density}</td>
                    <td className="py-5 px-6 text-sm text-slate-400 font-medium">{row.security}</td>
                    <td className="py-5 px-6 text-sm text-slate-400 font-medium">
                      <span className="inline-block px-2.5 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700 text-xs">
                        {row.compliance}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-sm font-mono text-[#E51D25] font-bold">{row.uptime}</td>
                    <td className="py-5 px-6 text-sm text-slate-400 font-medium">{row.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;