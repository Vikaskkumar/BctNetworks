import { Building2, Hotel, HeartPulse, GraduationCap, Factory, Landmark, ShoppingCart, Wallet } from 'lucide-react';

const industries = [
  { name: 'Corporate', icon: Building2 },
  { name: 'Hospitality', icon: Hotel },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Education', icon: GraduationCap },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Government', icon: Landmark },
  { name: 'Retail', icon: ShoppingCart },
  { name: 'Finance', icon: Wallet },
];

const IndustriesServed = () => {
  return (
    <section className="section-padding-sm bg-slate-50 dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800" id="industries">
      <div className="container-custom">
        <div className="text-center mb-4">
          <span className="section-tag">SECTOR COVERAGE</span>
          <h2 className="section-title">Industries We Serve</h2>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-8 gap-2">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div key={i} className="card-base flex flex-col items-center justify-center p-2.5 text-center">
                <Icon className="w-5 h-5 text-[#E51D25] mb-1" />
                <span className="text-[10px] font-bold text-gray-800 dark:text-slate-200">{ind.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;