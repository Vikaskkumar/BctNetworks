import { ChevronLeft, ChevronRight } from 'lucide-react';

const TechPartners = () => {
  return (
    <section className="py-12 bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800/80 transition-colors duration-300 overflow-hidden" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Navigation */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[#E51D25] font-extrabold text-[11px] tracking-[0.2em] uppercase">
            OUR TECHNOLOGY PARTNERS
          </h3>
          
          <div className="flex items-center gap-2">
            <button 
              className="p-2 border border-gray-200 dark:border-slate-800 rounded-full hover:border-gray-400 dark:hover:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-900 text-gray-500 dark:text-slate-400 transition-colors focus:outline-none"
              aria-label="Previous partners"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button 
              className="p-2 border border-gray-200 dark:border-slate-800 rounded-full hover:border-gray-400 dark:hover:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-900 text-gray-500 dark:text-slate-400 transition-colors focus:outline-none"
              aria-label="Next partners"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Partner Logos Carousel Row */}
        <div className="flex items-center justify-between gap-8 overflow-x-auto pb-4 scrollbar-hide">
          
          {/* CISCO */}
          <div className="flex-shrink-0 flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6 text-[#049FD9]" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="10" width="2" height="10" rx="1" />
              <rect x="6" y="6" width="2" height="14" rx="1" />
              <rect x="10" y="2" width="2" height="18" rx="1" />
              <rect x="14" y="6" width="2" height="14" rx="1" />
              <rect x="18" y="10" width="2" height="10" rx="1" />
            </svg>
            <span className="font-black text-xl tracking-wider text-[#049FD9]">CISCO</span>
          </div>

          {/* HIKVISION */}
          <div className="flex-shrink-0 flex items-center opacity-80 hover:opacity-100 transition-opacity">
            <span className="font-black text-xl tracking-tighter text-[#E51D25]">HIK</span>
            <span className="font-black text-xl tracking-tighter text-gray-800 dark:text-slate-200">VISION</span>
          </div>

          {/* DAHUA */}
          <div className="flex-shrink-0 flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
            <span className="bg-[#E51D25] text-white font-black text-xs px-1.5 py-0.5 rounded-sm">alhua</span>
            <span className="font-extrabold text-base tracking-tight text-gray-900 dark:text-slate-200">TECHNOLOGY</span>
          </div>

          {/* FORTINET */}
          <div className="flex-shrink-0 flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
              <div className="bg-[#C8292B] rounded-sm"></div>
              <div className="bg-[#C8292B] rounded-sm"></div>
              <div className="bg-[#C8292B] rounded-sm"></div>
              <div className="bg-[#C8292B] rounded-sm"></div>
            </div>
            <span className="font-black text-lg tracking-widest text-gray-900 dark:text-slate-200">FORTINET</span>
          </div>

          {/* HPE */}
          <div className="flex-shrink-0 flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <div className="border-2 border-[#01A781] px-1.5 py-0.5 text-[10px] font-black text-[#01A781]">HPE</div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-xs tracking-tight text-gray-900 dark:text-slate-200">Hewlett Packard</span>
              <span className="font-bold text-xs tracking-tight text-gray-900 dark:text-slate-200">Enterprise</span>
            </div>
          </div>

          {/* SOPHOS */}
          <div className="flex-shrink-0 flex items-center opacity-80 hover:opacity-100 transition-opacity">
            <span className="font-black text-xl tracking-wider text-[#0066CC]">SOPHOS</span>
          </div>

          {/* Schneider Electric */}
          <div className="flex-shrink-0 flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-5 h-5 bg-[#3DCD58] rounded-full flex items-center justify-center text-white font-black text-[10px]">
              S
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-xs text-gray-900 dark:text-slate-200">Schneider</span>
              <span className="text-[9px] text-[#3DCD58] font-bold uppercase tracking-wider">Electric</span>
            </div>
          </div>

          {/* Palo Alto */}
          <div className="flex-shrink-0 flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 text-[#FA582D]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8 12 11.2 4.8 8 12 4.8zM4.8 10.2L11 13v7.2L4.8 17v-6.8zm8.4 7.2V13l6.2-2.8V17l-6.2 3.4z"/>
            </svg>
            <span className="font-black text-base text-gray-900 dark:text-slate-200 tracking-tight">paloalto</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechPartners;