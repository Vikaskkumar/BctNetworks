import { CheckCircle2 } from 'lucide-react';

const PartnersPage = () => {
  const partnersList = [
    {
      name: 'HPE Aruba Networking',
      tier: 'Gold Solution Partner',
      desc: 'Enterprise wireless Wi-Fi 6E, ClearPass NAC network access control, and Aruba CX switching architecture.',
      category: 'Networking & Wireless'
    },
    {
      name: 'Cisco Systems',
      tier: 'Premier Certified Partner',
      desc: 'Catalyst L2/L3 core switching backbones, Meraki cloud-managed APs, and Cisco Firepower threat defense.',
      category: 'Core Switching & Security'
    },
    {
      name: 'Fortinet',
      tier: 'Advanced Integrator',
      desc: 'FortiGate Next-Gen Firewalls, FortiSwitch, FortiAP, and integrated Security Fabric SD-WAN.',
      category: 'Cybersecurity & SD-WAN'
    },
    {
      name: 'Palo Alto Networks',
      tier: 'Certified Security Partner',
      desc: 'Zero-trust enterprise firewalls, Panorama management, and Prisma Cloud SASE security.',
      category: 'Zero-Trust Security'
    },
    {
      name: 'Juniper Networks',
      tier: 'Select Partner',
      desc: 'High-performance AI-driven Mist Wi-Fi, EX-series campus switching, and SRX security gateways.',
      category: 'AI Networking & Wi-Fi'
    },
    {
      name: 'Ubiquiti Networks',
      tier: 'Enterprise Distributor',
      desc: 'UniFi Enterprise access points, Building-to-Building wireless bridges, and UniFi Protect video.',
      category: 'Wireless & Access'
    },
    {
      name: 'Hikvision & Dahua',
      tier: 'Authorized CCTV Integrator',
      desc: '4K IP surveillance cameras, AI facial recognition, License Plate Recognition (LPR), and VMS storage.',
      category: 'Surveillance & Access Control'
    },
    {
      name: 'Sophos & Schneider Electric',
      tier: 'Certified Power & Security Integrator',
      desc: 'Sophos Intercept X endpoint security and Schneider APC Online Double-Conversion UPS power backup systems.',
      category: 'Power & Endpoint Protection'
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* Header Banner */}
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <span className="text-[#E51D25] font-extrabold text-xs tracking-[0.2em] uppercase">TECHNOLOGY PARTNERSHIPS</span>
          <h1 className="text-3xl sm:text-5xl font-black mt-2 mb-4 tracking-tight">World-Class Global OEM Technology Alliances</h1>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            We partner with leading global hardware and software manufacturers to deliver certified, battle-tested solutions with full OEM warranty support.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnersList.map((p, idx) => (
            <div key={idx} className="border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:border-red-200 dark:hover:border-red-900/50 hover:shadow-xl transition-all bg-white dark:bg-slate-900 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#E51D25] dark:text-red-400 font-extrabold text-[10px] uppercase tracking-widest">{p.category}</span>
                  <span className="bg-red-50 dark:bg-red-950/20 text-[#E51D25] dark:text-red-400 text-xs font-extrabold px-3 py-1 rounded-full">{p.tier}</span>
                </div>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-3">{p.name}</h2>
                <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-6">{p.desc}</p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-slate-300 pt-4 border-t border-gray-100 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500" />
                <span>Certified OEM Engineers & Direct Warranty Support</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
