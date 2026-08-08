import { Building2, Hotel, HeartPulse, GraduationCap, Factory, Landmark, ShoppingCart, Wallet, ArrowRight, Check } from 'lucide-react';

const IndustriesPage = () => {
  const industriesDetail = [
    {
      icon: Building2,
      name: 'Corporate Offices & IT Parks',
      tagline: 'High-Density Wi-Fi 6E, Zero-Trust Access & Boardroom AV',
      description: 'Custom infrastructure for corporate workplaces including multi-floor 10G switching backbones, guest portal Wi-Fi, biometric access, and Zoom/Teams boardroom suites.',
      highlights: ['Seamless Multi-Floor Wi-Fi Roaming', 'SD-WAN Branch Connectivity', 'Integrated Smart Boardrooms']
    },
    {
      icon: Hotel,
      name: 'Hospitality & Hotels',
      tagline: 'In-Room High-Speed Wi-Fi, PMS Sync & Digital IPTV',
      description: 'Cinematic in-room entertainment, PMS-integrated Wi-Fi billing, CCTV surveillance across corridors/lobby, and VoIP guest room phones.',
      highlights: ['PMS Integration (Opera, IDS, Fidelio)', '100% In-Room Coverage Guarantee', 'Digital Signage & Background Audio']
    },
    {
      icon: HeartPulse,
      name: 'Healthcare & Hospitals',
      tagline: 'Zero-Downtime Medical Networks, PACS & Real-Time Location',
      description: 'Mission-critical HIPAA-compliant networks supporting PACS image transfers, telemetry monitoring, nurse call systems, and medical Wi-Fi assets.',
      highlights: ['Isolated Medical IoT VLANs', 'Redundant Core Failover', 'Nurse Call & Asset Tracking']
    },
    {
      icon: GraduationCap,
      name: 'Education & Campuses',
      tagline: 'High-Capacity Student Wi-Fi, Auditorium AV & Smart Labs',
      description: 'Campus-wide gigabit fiber backbones, outdoor AP coverage, web content filtering, digital auditorium sound systems, and computer lab switching.',
      highlights: ['Bandwidth Shaping & Firewall Policy', 'Auditorium Pro-AV Systems', 'Campus CCTV Security']
    },
    {
      icon: Factory,
      name: 'Manufacturing & Plants',
      tagline: 'Industrial Ethernet, Ruggedized APs & IoT Automation',
      description: 'Hardened industrial switches, high-bay factory Wi-Fi coverage, perimeter beam intrusion detection, and SCADA automation networking.',
      highlights: ['IP67 Ruggedized Outdoor APs', 'Perimeter Thermal Cameras', 'Industrial DIN-Rail Switching']
    },
    {
      icon: Landmark,
      name: 'Government & Public Sector',
      tagline: 'High-Security Fiber Backbones, Command Center Video Walls',
      description: 'State government networks, municipal video surveillance command centers, secure data backbones, and public Wi-Fi zones.',
      highlights: ['Encrypted IPsec Tunnels', '24/7 Command Center Video Walls', 'Certified TIA/EIA Compliance']
    },
    {
      icon: ShoppingCart,
      name: 'Retail & Commercial Malls',
      tagline: 'POS System Reliability, Guest Wi-Fi Analytics & CCTV',
      description: 'High-reliability POS payment networks, customer footfall analytics Wi-Fi, mall-wide public address, and anti-theft CCTV integration.',
      highlights: ['PCI-DSS Compliant POS VLANs', 'Footfall & Heatmap Analytics', 'Mall-Wide Paging & PA']
    },
    {
      icon: Wallet,
      name: 'Banking & Financial Services',
      tagline: 'Ultra-Secure Branch Connectivity, ATM Networks & Vault Security',
      description: 'Highly secure dual-homed WAN connections for bank branches, remote ATM monitoring, biometric vault access, and surveillance recording.',
      highlights: ['Hardware Encrypted SD-WAN', 'ATM Surveillance & Sensor Sync', 'Biometric Vault Access']
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* Header Banner */}
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <span className="text-[#E51D25] font-extrabold text-xs tracking-[0.2em] uppercase">INDUSTRIES WE SERVE</span>
          <h1 className="text-3xl sm:text-5xl font-black mt-2 mb-4 tracking-tight">Tailored Architecture For Every Sector</h1>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            Every industry has unique compliance, bandwidth, and security needs. We design specialized architectures built to exceed operational requirements.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industriesDetail.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div key={idx} className="border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:border-red-200 dark:hover:border-red-900/50 hover:shadow-xl transition-all bg-white dark:bg-slate-900 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-[#E51D25] dark:text-red-400">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-gray-900 dark:text-white">{ind.name}</h2>
                      <p className="text-xs text-gray-500 dark:text-slate-400 font-semibold">{ind.tagline}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-slate-350 leading-relaxed mb-6">{ind.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {ind.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-800 dark:text-slate-200">
                        <Check className="w-4 h-4 text-[#E51D25] dark:text-red-400" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="#contact" className="inline-flex items-center gap-2 text-xs font-black text-[#E51D25] dark:text-red-400 hover:text-[#c9151c] dark:hover:text-red-300 uppercase tracking-wider">
                  <span>Consult Industry Specialist</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
