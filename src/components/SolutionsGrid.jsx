import {
  ArrowRight,
  Cable,
  Network,
  Video,
  Wifi,
  Flame,
  MonitorSpeaker,
  Cctv,
  Server,
  Building2,
  BatteryCharging
} from 'lucide-react';

const SolutionsGrid = () => {
  const solutions = [
    { name: 'STRUCTURED CABLING SYSTEM', icon: Cable },
    { name: 'UNIFIED COMMUNICATION', icon: Network },
    { name: 'TELEPRESENCE & COLLABORATION', icon: Video },
    { name: 'ENTERPRISE NETWORKING', icon: Wifi },
    { name: 'FIRE & SAFETY', icon: Flame },
    { name: 'AUDIO VISUAL', icon: MonitorSpeaker },
    { name: 'SECURITY & SURVEILLANCE', icon: Cctv },
    { name: 'SERVER & STORAGE', icon: Server },
    { name: 'BUILDING AUTOMATION', icon: Building2 },
    { name: 'UPS & POWER BACKUP', icon: BatteryCharging },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#fcfcfc] dark:bg-slate-900/60 border-t border-gray-100 dark:border-slate-800/80 transition-colors duration-300" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-3">
            <span className="text-[#E51D25] font-extrabold text-[11px] tracking-[0.2em] uppercase">
              OUR SOLUTIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
            COMPREHENSIVE SOLUTIONS FOR EVERY NEED
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group flex flex-row items-center gap-4 p-4 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md hover:border-red-100 dark:hover:border-red-900/50 transition-all duration-300 cursor-pointer"
              >
                {/* Icon Container */}
                <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-md bg-red-50/50 dark:bg-red-950/20 group-hover:bg-red-50 dark:group-hover:bg-red-900/30 transition-colors">
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#E51D25] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Icon strokeWidth={1.6} className="w-6 h-6 text-[#E51D25] dark:text-red-400 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Solution Title */}
                <div>
                  <h3 className="text-xs font-black text-gray-900 dark:text-slate-100 group-hover:text-[#E51D25] dark:group-hover:text-red-400 transition-colors tracking-wide leading-tight">
                    {solution.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-4px] group-hover:translate-x-0">
                    <span className="text-[9px] font-extrabold text-gray-500 dark:text-slate-400 uppercase tracking-widest">
                      VIEW DETAILS
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#E51D25] dark:text-red-400" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic CTA Strip */}
        <div className="border-t border-gray-100 dark:border-slate-800/85 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto text-center md:text-left">
          <div>
            <h4 className="text-sm font-black text-gray-800 dark:text-slate-200 uppercase tracking-wider">
              Need a highly customized network architecture?
            </h4>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
              Our OEM certified engineering team can design bespoke configurations tailored to your space and density requirements.
            </p>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-black text-[#E51D25] hover:text-[#c9151c] dark:text-red-400 dark:hover:text-red-300 uppercase tracking-wider"
          >
            <span>Consult BCT Networks Architects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default SolutionsGrid;