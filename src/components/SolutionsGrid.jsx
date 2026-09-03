import { ChevronRight } from 'lucide-react';

const solutions = [
  { name: 'Firewall & Security', desc: 'Zero trust firewall protection & CCTV.', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop' },
  { name: 'Enterprise Wi-Fi', desc: 'High performance Wi-Fi 6E infrastructure.', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=400&auto=format&fit=crop' },
  { name: 'Structured Cabling', desc: 'Fiber optics & Cat6A structured cabling.', img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&auto=format&fit=crop' },
  { name: 'Unified Telecom & AV', desc: 'IP Telephony, VoIP & commercial AV systems.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop' },
];

const SolutionsGrid = () => {
  return (
    <section className="section-padding bg-slate-900 text-white" id="solutions">
      <div className="container-custom">
        <div className="text-center max-w-md mx-auto mb-6">
          <span className="section-tag">ENTERPRISE SERVICES</span>
          <h2 className="section-title text-white">Unified Technology Integration</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {solutions.map((item, idx) => (
            <div key={idx} className="group relative rounded-lg overflow-hidden h-48 border border-slate-800">
              <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-3.5 flex flex-col justify-end">
                <h3 className="text-xs font-bold text-white mb-0.5">{item.name}</h3>
                <p className="text-[10px] text-slate-300 mb-1.5">{item.desc}</p>
                <a href="#contact" className="flex items-center gap-0.5 text-[9px] font-bold text-[#E51D25] uppercase">
                  <span>Enquire</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;