import { 
  Award, 
  Settings2, 
  Network, 
  ShieldCheck, 
  Headset 
} from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    { name: 'Certified Experts', icon: Award },
    { name: 'Vendor-Neutral Approach', icon: Settings2 },
    { name: 'End-to-end Delivery', icon: Network },
    { name: 'Enterprise-grade Security', icon: ShieldCheck },
    { name: '24/7 Support', icon: Headset },
  ];

  return (
    <section className="py-14 bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="mb-2">
              <span className="text-[#E51D25] font-extrabold text-[11px] tracking-[0.2em] uppercase">
                WHY BCT NETWORKS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
              Engineering excellence.<br />
              Reliable outcomes.
            </h2>
          </div>

          {/* Right Column: Benefits Row */}
          <div className="flex-1 w-full overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            <div className="flex items-center justify-between min-w-[600px] lg:min-w-0 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex flex-col sm:flex-row items-center gap-3.5 group">
                    {/* Icon with Stylized Rotated Red Hexagon Wrapper */}
                    <div className="relative flex-shrink-0 flex items-center justify-center w-11 h-11">
                      <div className="absolute inset-0 border-[1.8px] border-[#E51D25] rotate-45 rounded-sm group-hover:rotate-90 group-hover:bg-red-50 dark:group-hover:bg-red-950/20 transition-all duration-300"></div>
                      <Icon strokeWidth={1.6} className="w-5 h-5 text-[#E51D25] dark:text-red-400 relative z-10" />
                    </div>
                    
                    {/* Benefit Text */}
                    <span className="text-xs font-black text-gray-900 dark:text-slate-200 leading-tight max-w-[100px] text-center sm:text-left">
                      {benefit.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;