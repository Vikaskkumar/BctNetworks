import { useState, useEffect, useRef } from 'react';
import {
  Cable,
  Video,
  Wifi,
  ShieldCheck,
  MonitorSpeaker,
  Cctv,
  Flame,
  Server,
  Building2,
  BatteryCharging,
  ArrowRight
} from 'lucide-react';

const SolutionsGrid = ({ onNavigate }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef(null);

  // Intersection observer for the smooth cascade entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  // Data strictly mapped to the 10 categories from your brochure
  const solutions = [
    {
      name: 'Structure Cabling System',
      icon: Cable,
      desc: 'High-density copper and optical fiber backbone infrastructures designed for zero-latency data transmission.',
      partners: 'CommScope, Legrand, D-Link, Molex, Netrack, Belden'
    },
    {
      name: 'Unified Communication & Telepresence',
      icon: Video,
      desc: 'Immersive video conferencing suites and unified voice gateways for seamless enterprise collaboration.',
      partners: 'Cisco, Avaya, Matrix, NEC, Syntel'
    },
    {
      name: 'Enterprise Networking',
      icon: Wifi,
      desc: 'Resilient network backbones featuring L2/L3 core switching and high-density Wi-Fi access points.',
      partners: 'Cisco, Cambium, Aruba, D-Link, Extreme, TP-Link'
    },
    {
      name: 'Firewall & Cyber Security',
      icon: ShieldCheck,
      desc: 'Next-generation firewalls and zero-trust network architectures to secure your perimeter and digital assets.',
      partners: 'Sophos, Zyxel, SonicWall, Palo Alto, Quick Heal, Seqrite'
    },
    {
      name: 'Audio Visual',
      icon: MonitorSpeaker,
      desc: 'Commercial displays, interactive projectors, and acoustic public address (PA) systems for smart spaces.',
      partners: 'Bosch, Samsung, JBL, Harman, LG, Epson, Barco, BenQ'
    },
    {
      name: 'Security & Surveillance',
      icon: Cctv,
      desc: 'End-to-end IP CCTV systems, advanced video analytics, and centralized biometric access control.',
      partners: 'Bosch, Honeywell, Hanwha, Hikvision, Secure'
    },
    {
      name: 'Fire & Safety',
      icon: Flame,
      desc: 'Addressable alarms, VESDA air sampling, and automated gas suppression systems for life safety.',
      partners: 'Bosch, Notifier, Honeywell, Morley, Edwards, GST, Heinrich'
    },
    {
      name: 'Server & Storage',
      icon: Server,
      desc: 'Scalable data center compute nodes and high-speed storage arrays for mission-critical applications.',
      partners: 'Cisco, Dell, HP, Hewlett Packard Enterprise'
    },
    {
      name: 'Building Automation',
      icon: Building2,
      desc: 'Integrated Building Management Systems (BMS), automated HVAC control, and smart energy metering.',
      partners: 'Siemens, Honeywell, Schneider Electric'
    },
    {
      name: 'UPS & Backups',
      icon: BatteryCharging,
      desc: 'Zero-transfer time online double-conversion UPS systems and smart power distribution units.',
      partners: 'Eaton, APC, Luminous, Hitachi'
    },
  ];

  const mapSolutionToCategory = (name) => {
    const n = name.toLowerCase();
    if (n.includes('cabling')) return 'cabling';
    if (n.includes('networking')) return 'enterprise-networking';
    if (n.includes('automation')) return 'building-auto';
    if (n.includes('security') && n.includes('surveillance')) return 'security';
    if (n.includes('firewall') || n.includes('cyber')) return 'security';
    if (n.includes('communication') || n.includes('telepresence')) return 'unified-comm';
    if (n.includes('telepresence')) return 'telepresence';
    if (n.includes('audio') || n.includes('visual')) return 'telepresence'; 
    if (n.includes('server') || n.includes('storage')) return 'server-storage';
    if (n.includes('fire') || n.includes('safety')) return 'fire-safety';
    if (n.includes('ups') || n.includes('power') || n.includes('backup')) return 'ups-power';
    return 'all';
  };

  const visibleSolutions = isExpanded ? solutions : solutions.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa] dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 text-[#E51D25] font-extrabold text-[11px] tracking-[0.2em] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E51D25] animate-pulse"></span>
            OUR EXPERTISE
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1]">
            Enterprise-Grade Solutions. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E51D25] to-red-400">
              Deployed With Precision.
            </span>
          </h2>
        </div>

        {/* 2-Column Solutions Grid (Smaller & Compact Cards) */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12"
        >
          {visibleSolutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                onClick={() => onNavigate && onNavigate('solutions', mapSolutionToCategory(solution.name))}
                className={`group relative flex flex-col p-6 sm:p-8 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl cursor-pointer overflow-hidden transform transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(229,29,37,0.12)] hover:border-[#E51D25]/30 dark:hover:border-[#E51D25]/40 hover:-translate-y-1.5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Background Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-transparent to-transparent dark:from-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">

                  {/* Top Row: Icon & Top Right Arrow Button */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center group-hover:bg-[#E51D25] group-hover:scale-105 transition-all duration-500 shadow-sm">
                      <Icon strokeWidth={1.5} className="w-6 h-6 text-gray-800 dark:text-gray-200 group-hover:text-white transition-colors duration-500" />
                    </div>

                    <div className="w-8 h-8 rounded-full bg-transparent border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-[#E51D25] group-hover:bg-red-50 dark:group-hover:bg-red-900/20 transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#E51D25] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight mb-3 group-hover:text-[#E51D25] transition-colors duration-300">
                    {solution.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                    {solution.desc}
                  </p>

                  {/* Bottom Ribbon: Partners + Explore in Details Button */}
                  <div className="pt-4 mt-auto border-t border-gray-100 dark:border-gray-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] text-gray-400 dark:text-gray-500 font-extrabold tracking-[0.15em] uppercase mb-0.5">
                        OEM Partners
                      </p>
                      <p className="text-[11px] sm:text-xs text-gray-800 dark:text-gray-300 font-bold leading-tight">
                        {solution.partners}
                      </p>
                    </div>

                    {/* Card "Explore in Details" Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onNavigate) onNavigate('solutions', mapSolutionToCategory(solution.name));
                      }}
                      className="inline-flex items-center justify-center gap-1.5 text-[11px] font-extrabold text-[#E51D25] dark:text-red-400 uppercase tracking-wider flex-shrink-0 bg-red-50 dark:bg-red-950/30 px-3 py-2 rounded-lg border border-red-100 dark:border-red-900/40 transition-all duration-300 hover:bg-[#E51D25] hover:text-white dark:hover:bg-[#E51D25] dark:hover:text-white hover:border-[#E51D25]"
                    >
                      <span>Explore in Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Expand / Show More Trigger */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-3 bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 text-[#E51D25] dark:text-red-400 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-350 hover:bg-[#E51D25] hover:text-white dark:hover:bg-[#E51D25] dark:hover:text-white hover:border-[#E51D25] shadow-sm hover:shadow-[#E51D25]/10"
          >
            <span>{isExpanded ? 'Show Less Solutions' : 'Show More Solutions'}</span>
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
          </button>
        </div>

        {/* Action Buttons in Section Footer */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-[#E51D25]/20 hover:-translate-y-1"
          >
            <span>Discuss Your Infrastructure Needs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={() => onNavigate && onNavigate('solutions')}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:border-[#E51D25] dark:hover:border-[#E51D25] hover:text-[#E51D25] dark:hover:text-red-400 transition-all duration-300 shadow-sm hover:-translate-y-1"
          >
            <span>Explore in Details</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SolutionsGrid;