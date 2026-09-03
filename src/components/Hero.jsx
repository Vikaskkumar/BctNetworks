import { ArrowRight } from 'lucide-react';

const metrics = [
  { value: '150+', label: 'Projects' },
  { value: '99.99%', label: 'Uptime' },
  { value: '20+', label: 'Clients' },
  { value: '24/7', label: 'Support' },
];

const Hero = () => (
  <section className="section-padding bg-slate-50/50 dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800" id="home">
    <div className="container-custom">
      <div className="max-w-2xl">
        <span className="section-tag">ENTERPRISE NETWORKING SOLUTIONS</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-3">
          Network infrastructure that scales with your <span className="text-[#E51D25]">ambition.</span>
        </h1>
        <p className="section-subtext mb-4">
          We design, deploy, secure, and manage enterprise networks that keep your business connected, protected, and operational.
        </p>
        <div className="flex flex-wrap gap-2.5 mb-5">
          <a href="#contact" className="btn-primary">
            <span>Talk to Architect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a href="#solutions" className="btn-secondary">
            <span>Explore Solutions</span>
          </a>
        </div>
        <div className="grid grid-cols-4 gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
          {metrics.map((m, i) => (
            <div key={i}>
              <span className="text-sm font-black text-slate-900 dark:text-white block">{m.value}</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;