import { ArrowRight } from 'lucide-react';

const TrustedPartners = () => {
  return (
    <section className="w-full bg-[#f8f9fa] dark:bg-slate-900/40 border-y border-gray-200 dark:border-slate-800/80 py-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          
          {/* Left Title */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <p className="text-[11px] text-gray-500 dark:text-slate-400 font-bold uppercase tracking-wider">
              Trusted technologies.
            </p>
            <p className="text-sm text-gray-900 dark:text-white font-black tracking-tight">
              Proven partnerships.
            </p>
          </div>

          {/* Partner Vector Logos */}
          <div className="flex-1 flex flex-wrap justify-center lg:justify-between items-center gap-8 sm:gap-10 opacity-80 hover:opacity-100 transition-opacity">
            
            {/* HPE Aruba */}
            <div className="flex items-center gap-1.5 font-bold text-gray-900 dark:text-white text-sm tracking-tight">
              <span className="bg-[#FF8300] text-white px-1.5 py-0.5 rounded text-[10px] font-black">HPE</span>
              <span className="font-extrabold text-base tracking-tighter">aruba</span>
              <span className="text-[9px] text-gray-500 dark:text-slate-400 uppercase tracking-widest font-semibold ml-0.5">NETWORKING</span>
            </div>

            {/* Cisco */}
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-gray-800 dark:text-slate-200" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="10" width="2" height="10" rx="1" />
                <rect x="6" y="6" width="2" height="14" rx="1" />
                <rect x="10" y="2" width="2" height="18" rx="1" />
                <rect x="14" y="6" width="2" height="14" rx="1" />
                <rect x="18" y="10" width="2" height="10" rx="1" />
              </svg>
              <span className="font-black text-lg tracking-wider text-gray-900 dark:text-white">CISCO</span>
            </div>

            {/* Fortinet */}
            <div className="flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                <div className="bg-[#C8292B] rounded-sm"></div>
                <div className="bg-[#C8292B] rounded-sm"></div>
                <div className="bg-[#C8292B] rounded-sm"></div>
                <div className="bg-[#C8292B] rounded-sm"></div>
              </div>
              <span className="font-black text-lg tracking-widest text-gray-900 dark:text-white">FORTINET</span>
            </div>

            {/* Palo Alto */}
            <div className="flex items-center gap-1.5">
              <svg className="w-5 h-5 text-[#FA582D]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8 12 11.2 4.8 8 12 4.8zM4.8 10.2L11 13v7.2L4.8 17v-6.8zm8.4 7.2V13l6.2-2.8V17l-6.2 3.4z"/>
              </svg>
              <span className="font-black text-base text-gray-900 dark:text-white tracking-tight">paloalto</span>
            </div>

            {/* Juniper */}
            <div className="flex items-center gap-1">
              <span className="font-black text-lg tracking-tighter text-gray-900 dark:text-white">JUNIPER</span>
              <span className="text-[9px] text-gray-400 dark:text-slate-400 font-semibold tracking-widest uppercase">NETWORKS</span>
            </div>

            {/* Ubiquiti */}
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full border-2 border-gray-900 dark:border-white flex items-center justify-center font-black text-xs text-gray-900 dark:text-white">
                U
              </div>
              <span className="font-extrabold text-base text-gray-900 dark:text-white tracking-tight">Ubiquiti</span>
            </div>

          </div>

          {/* Right Link */}
          <div className="flex-shrink-0">
            <a 
              href="#partners" 
              className="group flex items-center gap-2 text-xs font-extrabold text-gray-800 dark:text-slate-200 hover:text-[#E51D25] dark:hover:text-red-400 transition-colors"
            >
              <span>View all partners</span>
              <ArrowRight className="w-4 h-4 text-[#E51D25] transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;