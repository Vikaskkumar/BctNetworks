import { useState, useEffect } from 'react';
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
  CheckCircle2,
  ArrowRight,
  Zap,
  Activity,
  Award,
  Settings
} from 'lucide-react';

const servicesList = [
  {
    id: 'cabling',
    name: 'Structure Cabling System',
    icon: Cable,
    tagline: 'Gigabit Copper & Fiber Optic Backbone Cabling',
    desc: 'BCT Networks designs and installs structured cabling systems that form the robust foundation of your communication network. From high-density Cat6A/Cat7 networks to campus-wide single-mode/multi-mode fiber optics, our installations guarantee minimal signal degradation and decades of lifecycle safety.',
    specs: [
      'Cat6A & Cat7 copper termination & certification',
      'Single-mode & multi-mode optical fiber splicing',
      'High-durability Valrack & Netrack enclosure setups',
      'OTDR link characterization & Fluke testing reports'
    ],
    partners: ['CommScope', 'Legrand', 'D-Link', 'Molex', 'Netrack', 'Valrack', 'Belden'],
    metrics: { Standard: 'TIA/EIA-568-C', Speed: 'Up to 40 Gbps', Warranty: '25-Year System' },
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'unified-comm',
    name: 'Unified Communication & Collaboration',
    icon: Video,
    tagline: 'Enterprise Telepresence & VoIP Voice Gateways',
    desc: 'Integrate your video conferencing, collaboration spaces, and voice communication under a single, easily manageable IP framework. We deploy hybrid workplace technologies, cloud-room systems, and unified voice setups that bridge geographical gaps seamlessly.',
    specs: [
      'SIP trunking & enterprise IP-PBX configuration',
      'Teams, Zoom, and Webex boardroom integrations',
      'Acoustic ceiling arrays & beamforming microphone tunings',
      'VoIP gatekeepers & secure remote softphone clients'
    ],
    partners: ['Cisco', 'Avaya', 'Matrix', 'NEC', 'Syntel'],
    metrics: { Protocol: 'H.323 / SIP', Latency: 'Sub-15ms Jitter', Availability: '99.99% Path' },
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'networking',
    name: 'Enterprise Networking',
    icon: Wifi,
    tagline: 'L2/L3 Routing & High-Density Campus Wi-Fi 6E',
    desc: 'Deploy resilient local networks designed to accommodate high-density users and sensitive application pathways. We build networks featuring automated traffic shaping, network segmentation, and secure SD-WAN connections for branch offices.',
    specs: [
      'Redundant L3 core routing & spine-leaf topologies',
      'Wi-Fi 6 / 6E campus RF heatmap planning & tuning',
      'Dynamic VLAN segmentation & 802.1X NAC security',
      'SD-WAN configuration with cloud dashboard control'
    ],
    partners: ['Cisco', 'Cambium Networks', 'Aruba', 'D-Link', 'Extreme Networks', 'TP-Link'],
    metrics: { Throughput: 'Multi-Gbps Line', Coverage: '99.9% RF Density', Standards: '802.11ax/be' },
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'security',
    name: 'Firewall & Cyber Security',
    icon: ShieldCheck,
    tagline: 'Zero-Trust Gateways & Next-Gen Perimeter Firewalls',
    desc: 'Protect your enterprise data systems from intrusion and leakage. We build zero-trust networks with deep packet inspection firewalls, real-time threat intelligence, secure endpoints, and segmented administrative zones.',
    specs: [
      'Next-Gen Firewall (NGFW) policies & deep packet scanning',
      'Multi-factor authentication (MFA) & secure VPN portals',
      'Endpoint containment & regular security audits',
      'Intrusion Prevention Systems (IPS) & content filtering'
    ],
    partners: ['Sophos', 'Zyxel Networks', 'SonicWall', 'Palo Alto', 'Quick Heal', 'Seqrite'],
    metrics: { Encryption: 'AES-256 Bit', Response: 'Instant Threat Block', Compliance: 'ISO 27001' },
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'av',
    name: 'Audio Visual Systems',
    icon: MonitorSpeaker,
    tagline: 'Commercial LED Walls, Projection & Public Address',
    desc: 'Design engaging visual spaces and public address sound systems. We deploy professional AV-over-IP networks, commercial LED screens, multi-projector setups, and zoned public address systems for malls, campuses, and offices.',
    specs: [
      'Seamless modular LED video walls & digital signage systems',
      'AV over IP matrix switching & centralized controllers',
      'Public Address (PA) & emergency paging setups',
      'High-performance acoustic calibration & sound treatment'
    ],
    partners: ['Bosch', 'Samsung', 'JBL', 'Harman', 'LG', 'Epson', 'Barco', 'BenQ'],
    metrics: { Resolution: 'Up to 8K HDR', Sound: 'Dante Digital', Controls: 'Centralized Web' },
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'surveillance',
    name: 'Security & Surveillance',
    icon: Cctv,
    tagline: '4K IP Surveillance Cameras & Biometric Access',
    desc: 'Gain complete visibility over your facility. BCT Networks installs intelligent surveillance networks integrated with video analytics, facial detection, license plate recognition, and multi-tier biometric security checkpoints.',
    specs: [
      '4K IP security cameras with laser night-vision systems',
      'AI motion, loitering & license plate recognition alerts',
      'Fingerprint, face, and RFID access control setups',
      'Redundant network video recorders (NVR) with RAID storage'
    ],
    partners: ['Bosch', 'Honeywell', 'Samsung Hanwha', 'Hikvision', 'Secure'],
    metrics: { Storage: 'RAID 5 / 6 Backup', Analytical: 'Edge AI Enabled', Response: 'Automated Alarm' },
    img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fire-safety',
    name: 'Fire & Safety Systems',
    icon: Flame,
    tagline: 'Addressable Fire Alarms & Gas Suppression',
    desc: 'Protect human lives and critical data equipment. We install addressable fire alarm panels, VESDA high-sensitivity air sampling systems, and automatic gas suppression systems designed for server room safety.',
    specs: [
      'Addressable smoke, heat, and flame detection circuits',
      'VESDA aspirating air sampling systems for early alarm warnings',
      'Novec 1230 & FM-200 gas fire suppression integrations',
      'Voice evacuation panel sync & emergency exit integrations'
    ],
    partners: ['Bosch', 'Notifier by Honeywell', 'Honeywell', 'Morley IAS', 'Edwards', 'GST', 'Heinrich'],
    metrics: { Certified: 'EN54 / NFPA Spec', Sensitivity: '0.005% pre-alarm', Latency: 'Zero-Delay' },
    img: 'https://images.unsplash.com/photo-1606206591513-adbf86aa6cf0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'server-storage',
    name: 'Server & Storage Solutions',
    icon: Server,
    tagline: 'Enterprise Virtual Compute & High-Speed NAS/SAN',
    desc: 'Build a private cloud backend ready to handle virtualization, database clusters, and massive operational storage. We deploy enterprise blade servers, NVMe storage arrays, and redundant network storage configurations.',
    specs: [
      'Enterprise rack & blade compute server provisions',
      'Fiber channel SAN arrays & secure NAS setups',
      'VMware ESXi, Hyper-V virtual environment clusters',
      'Local snapshot schedules & encrypted offsite replication'
    ],
    partners: ['Cisco', 'Dell', 'HP', 'Hewlett Packard Enterprise'],
    metrics: { Throughput: '32G Fiber Channel', Virtuals: '200+ VMs Cluster', Recovery: 'RTO Sub-10m' },
    img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'automation',
    name: 'Building Automation',
    icon: Building2,
    tagline: 'Smart BMS, HVAC Integration & Energy Audit Controls',
    desc: 'Optimize your facilities operational costs and comfort metrics. Our Building Management Systems (BMS) consolidate HVAC controls, smart lighting, energy meters, and environmental leak/gas sensors under a unified automation console.',
    specs: [
      'Centralized BMS BACnet/IP software setups',
      'Variable HVAC motor speed control & schedule tunings',
      'Smart lighting grids with motion & daylight sensors',
      'Real-time water leak, gas, and temperature monitoring'
    ],
    partners: ['Siemens', 'Honeywell', 'Schneider Electric'],
    metrics: { Protocol: 'BACnet / Modbus', Savings: '20% Energy Cut', Alert: 'Real-Time Alert' },
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'power',
    name: 'UPS & Backups',
    icon: BatteryCharging,
    tagline: 'Modular Online Double-Conversion Power Systems',
    desc: 'Prevent costly database corruptions and equipment failures caused by power interruptions. We install modular online double-conversion UPS systems, smart power distribution units (PDU), and lithium-ion backup banks.',
    specs: [
      'Online double-conversion UPS arrays (10kVA - 500kVA)',
      'Smart rack PDUs with outlet-level power metering',
      'Lithium-ion & maintenance-free VRLA battery banks',
      'Static transfer switches (STS) for utility routing'
    ],
    partners: ['Eaton', 'APC', 'Luminous', 'Hitachi'],
    metrics: { Transfer: '0ms True Online', Phase: '3-Phase Balanced', Backup: 'Scalable Run-Time' },
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80'
  }
];

const ServicesPage = () => {
  const [activeId, setActiveId] = useState(servicesList[0].id);

  // Monitor scrolling to dynamically update active service section and stick matching images
  useEffect(() => {
    const handleScroll = () => {
      const viewportMiddle = window.innerHeight / 2.5;
      let closestId = servicesList[0].id;
      let minDistance = Infinity;

      servicesList.forEach((sol) => {
        const el = document.getElementById(`service-${sol.id}`);
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
    const el = document.getElementById(`service-${id}`);
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
    <div className="bg-[#f8f9fa] dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300 selection:bg-[#E51D25] selection:text-white">
      
      {/* Styles for dynamic crossfade animations */}
      <style>{`
        @keyframes pulseBeam {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
        .anim-beam {
          animation: pulseBeam 5s infinite ease-in-out;
        }
      `}</style>

      {/* Hero Banner */}
      <section className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 py-20 lg:py-28 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E51D25]/10 rounded-full blur-[100px] pointer-events-none anim-beam" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block text-[#E51D25] font-extrabold text-[11px] tracking-[0.2em] uppercase mb-4">
            OUR CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight mb-6">
            Core Service Offerings
          </h1>
          <p className="text-gray-500 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Certified integration, detailed site engineering, and professional maintenance contracts covering all ten layers of enterprise facility technology.
          </p>

          {/* Quick jump navigation pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 max-w-4xl mx-auto">
            {servicesList.map((sol) => (
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
            {servicesList.map((sol) => {
              const Icon = sol.icon;
              const isActive = activeId === sol.id;

              return (
                <div
                  key={sol.id}
                  id={`service-${sol.id}`}
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
                    {sol.desc}
                  </p>

                  {/* Specifications Checklist */}
                  <h4 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest mb-3">
                    ENGINEERING SPECIFICATIONS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800/80 rounded-2xl mb-6">
                    {sol.specs.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-slate-300 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#E51D25] dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Design Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {Object.entries(sol.metrics).map(([key, val]) => (
                      <div key={key} className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-3 rounded-xl text-center">
                        <span className="text-[9px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-wider block mb-0.5">
                          {key}
                        </span>
                        <span className="text-xs font-black text-gray-800 dark:text-white truncate block">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Partners Ribbon */}
                  <div className="pt-4 border-t border-gray-200 dark:border-slate-800">
                    <span className="text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest block mb-2">
                      OEM PARTNERS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sol.partners.map((partner) => (
                        <span
                          key={partner}
                          className="bg-gray-100 dark:bg-slate-900 text-gray-800 dark:text-slate-200 text-[10px] font-bold px-3 py-1 rounded-lg border border-gray-200 dark:border-slate-800"
                        >
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-black text-[#E51D25] dark:text-red-400 hover:text-[#c9151c] dark:hover:text-red-300 uppercase tracking-widest"
                    >
                      <span>Request Architecture Proposal</span>
                      <ArrowRight className="w-4 h-4 transform hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
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
              {servicesList.map((sol) => (
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
                  
                  {/* Floating badge for active service details inside scrollytelling container */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 bg-black/40 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-white">
                    <span className="text-[9px] font-black text-red-400 tracking-wider uppercase">
                      ACTIVE SERVICE
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

      {/* Deployment Methodology Section */}
      <section className="py-20 bg-gray-900 text-white border-t border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#E51D25] font-extrabold text-xs tracking-widest uppercase">OUR PROCESS</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-4">Service Deployment Methodology</h2>
            <p className="text-gray-400 text-sm">How we guarantee engineering precision and zero downtime across installations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Audit & Survey', desc: 'Detailed site engineering, RF heatmap scans, and capacity scoping assessments.', icon: Activity },
              { num: '02', title: 'Design & Scope', desc: 'Bespoke high-availability network topologies and bill of materials scoping.', icon: Zap },
              { num: '03', title: 'Deploy & Test', desc: 'Precision rack dressing, fiber optic OTDR traces, and Fluke certifications.', icon: Settings },
              { num: '04', title: 'Support & AMC', desc: 'Dedicated 24/7 NOC monitoring, firmware patches, and committed SLA maintenance.', icon: Award },
            ].map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="group relative bg-gray-800/40 border border-gray-700/50 p-8 rounded-2xl flex flex-col justify-between hover:bg-gray-800 transition-all duration-300">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-black text-gray-700 group-hover:text-[#E51D25] transition-colors">{step.num}</span>
                    <StepIcon className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
