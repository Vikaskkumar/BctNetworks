import { 
  Building2, 
  Hotel, 
  HeartPulse, 
  GraduationCap, 
  Factory, 
  Landmark, 
  ShoppingCart, 
  Wallet 
} from 'lucide-react';

const IndustriesServed = () => {
  const industries = [
    { name: 'CORPORATE OFFICES', icon: Building2 },
    { name: 'HOSPITALITY', icon: Hotel },
    { name: 'HEALTHCARE', icon: HeartPulse },
    { name: 'EDUCATION', icon: GraduationCap },
    { name: 'MANUFACTURING', icon: Factory },
    { name: 'GOVERNMENT', icon: Landmark },
    { name: 'RETAIL & COMMERCIAL', icon: ShoppingCart },
    { name: 'BANKING & FINANCE', icon: Wallet },
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800/80 transition-colors duration-300" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h3 className="text-[#E51D25] font-extrabold text-[11px] tracking-[0.2em] uppercase">
            INDUSTRIES WE SERVE
          </h3>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index} 
                className="group flex flex-col items-center justify-center text-center gap-4 cursor-pointer"
              >
                {/* Icon Container with red accent */}
                <div className="relative flex items-center justify-center w-16 h-16 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="absolute top-0 right-2 w-1.5 h-1.5 bg-[#E51D25] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 w-8 h-[2px] bg-[#E51D25] opacity-30 group-hover:w-12 group-hover:opacity-100 transition-all"></div>
                  
                  <Icon 
                    strokeWidth={1.3} 
                    className="w-9 h-9 text-gray-800 dark:text-slate-200 group-hover:text-[#E51D25] dark:group-hover:text-red-400 transition-colors" 
                  />
                </div>
                
                {/* Industry Title */}
                <h4 className="text-[10px] sm:text-[11px] font-extrabold text-gray-900 dark:text-slate-100 leading-tight tracking-wider uppercase max-w-[100px] group-hover:text-[#E51D25] dark:group-hover:text-red-400 transition-colors">
                  {industry.name}
                </h4>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IndustriesServed;