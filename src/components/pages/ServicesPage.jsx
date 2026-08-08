import { ShieldCheck, Cpu, Headphones, Settings, FileSearch, ArrowRight, Wrench } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Cpu,
      title: 'Network Design & Architecture',
      desc: 'High-availability network topology designs, heat-map RF planning for Wi-Fi 6, VLAN planning, and capacity scoping by certified network architects.'
    },
    {
      icon: Wrench,
      title: 'Turnkey Installation & Deployment',
      desc: 'Precision rack dress, structured cable pulled, core switch mounting, server clustering, CCTV camera position tuning, and complete commissioning.'
    },
    {
      icon: Headphones,
      title: '24/7 NOC Support & Monitoring',
      desc: 'Round-the-clock Proactive Network Operations Center (NOC) monitoring for instant fault isolation, packet loss detection, and automated ticket escalation.'
    },
    {
      icon: Settings,
      title: 'AMC & SLA Maintenance Contracts',
      desc: 'Comprehensive Annual Maintenance Contracts (AMC) with committed 2-hour emergency on-site technician deployment across Jaipur & Rajasthan.'
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity Audit & Hardening',
      desc: 'Next-Gen Firewall policy audits, zero-trust configuration, penetration testing, firmware patch management, and vulnerability assessments.'
    },
    {
      icon: FileSearch,
      title: 'Fluke Certification & OTDR Testing',
      desc: 'Copper Cat6A Fluke DTX/DSX certification reporting, fiber optic OTDR trace analysis, power meter loss testing, and documentation.'
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* Header Banner */}
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <span className="text-[#E51D25] font-extrabold text-xs tracking-[0.2em] uppercase">SERVICES</span>
          <h1 className="text-3xl sm:text-5xl font-black mt-2 mb-4 tracking-tight">Professional Services & Managed Support</h1>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            From initial site surveys and RF heat-mapping to 24/7 NOC monitoring and guaranteed SLA response times.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:border-red-200 dark:hover:border-red-900/50 hover:shadow-lg transition-all bg-white dark:bg-slate-900 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-[#E51D25] dark:text-red-400 mb-6">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">{srv.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-slate-350 leading-relaxed mb-6">{srv.desc}</p>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-xs font-black text-[#E51D25] dark:text-red-400 hover:text-[#c9151c] dark:hover:text-red-300 uppercase tracking-wider">
                  <span>Schedule Service Request</span>
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

export default ServicesPage;
