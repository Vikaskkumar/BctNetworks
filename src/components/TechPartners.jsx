const TechPartners = () => {
  const partnersList = [
    {
      name: 'CISCO',
      color: '#049FD9',
      logo: (
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-[#049FD9]" viewBox="0 0 24 24" fill="currentColor">
            <rect x="2" y="10" width="2" height="10" rx="1" />
            <rect x="6" y="6" width="2" height="14" rx="1" />
            <rect x="10" y="2" width="2" height="18" rx="1" />
            <rect x="14" y="6" width="2" height="14" rx="1" />
            <rect x="18" y="10" width="2" height="10" rx="1" />
          </svg>
          <span className="font-black text-2xl tracking-wider text-[#049FD9]">CISCO</span>
        </div>
      )
    },
    {
      name: 'HIKVISION',
      color: '#E51D25',
      logo: (
        <div className="flex items-center">
          <span className="font-black text-2xl tracking-tighter text-[#E51D25]">HIK</span>
          <span className="font-black text-2xl tracking-tighter text-gray-800 dark:text-slate-200">VISION</span>
        </div>
      )
    },
    {
      name: 'DAHUA',
      color: '#E51D25',
      logo: (
        <div className="flex items-center gap-1.5">
          <span className="bg-[#E51D25] text-white font-black text-[13px] px-2 py-0.5 rounded-sm">alhua</span>
          <span className="font-extrabold text-lg tracking-tight text-gray-900 dark:text-slate-200">TECHNOLOGY</span>
        </div>
      )
    },
    {
      name: 'FORTINET',
      color: '#C8292B',
      logo: (
        <div className="flex items-center gap-2.5">
          <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
            <div className="bg-[#C8292B] rounded-sm"></div>
            <div className="bg-[#C8292B] rounded-sm"></div>
            <div className="bg-[#C8292B] rounded-sm"></div>
            <div className="bg-[#C8292B] rounded-sm"></div>
          </div>
          <span className="font-black text-lg tracking-widest text-gray-900 dark:text-slate-200">FORTINET</span>
        </div>
      )
    },
    {
      name: 'HPE',
      color: '#01A781',
      logo: (
        <div className="flex items-center gap-2">
          <div className="border-2 border-[#01A781] px-2 py-0.5 text-[11px] font-black text-[#01A781]">HPE</div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-xs tracking-tight text-gray-900 dark:text-slate-200">Hewlett Packard</span>
            <span className="font-bold text-xs tracking-tight text-gray-900 dark:text-slate-200">Enterprise</span>
          </div>
        </div>
      )
    },
    {
      name: 'SOPHOS',
      color: '#0066CC',
      logo: (
        <div className="flex items-center">
          <span className="font-black text-2xl tracking-wider text-[#0066CC]">SOPHOS</span>
        </div>
      )
    },
    {
      name: 'Schneider',
      color: '#3DCD58',
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-6.5 h-6.5 bg-[#3DCD58] rounded-full flex items-center justify-center text-white font-black text-[12px]">
            S
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-xs text-gray-900 dark:text-slate-200">Schneider</span>
            <span className="text-[10px] text-[#3DCD58] font-bold uppercase tracking-wider">Electric</span>
          </div>
        </div>
      )
    },
    {
      name: 'Palo Alto',
      color: '#FA582D',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-[#FA582D]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8 12 11.2 4.8 8 12 4.8zM4.8 10.2L11 13v7.2L4.8 17v-6.8zm8.4 7.2V13l6.2-2.8V17l-6.2 3.4z"/>
          </svg>
          <span className="font-black text-lg text-gray-900 dark:text-slate-200 tracking-tight">paloalto</span>
        </div>
      )
    }
  ];

  // Triplicate the array to make the infinite sliding track seamless
  const extendedPartners = [...partnersList, ...partnersList, ...partnersList];

  return (
    <section className="py-16 bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800/80 transition-colors duration-300 overflow-hidden relative" id="partners">
      
      {/* Dynamic Slide CSS rules */}
      <style>{`
        @keyframes slideLeftToRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-slide-marquee {
          display: flex;
          width: max-content;
          animation: slideLeftToRight 25s linear infinite;
        }
        .animate-slide-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Edge Blur Fades */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h3 className="text-[#E51D25] font-extrabold text-[11px] tracking-[0.25em] uppercase">
            OUR TECHNOLOGY PARTNERS
          </h3>
        </div>

        {/* Sliding Wrapper */}
        <div className="relative overflow-hidden w-full py-4">
          <div className="animate-slide-marquee flex items-center gap-16 sm:gap-24">
            {extendedPartners.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
              >
                {partner.logo}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechPartners;
