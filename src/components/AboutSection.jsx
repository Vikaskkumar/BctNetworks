import { Shield, Activity } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section-padding bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800" id="about">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7">
          <span className="section-tag">ABOUT BCT NETWORKS</span>
          <h2 className="section-title mb-2">Trusted Infrastructure Partner</h2>
          <p className="section-subtext mb-4">
            BCT Networks is a Jaipur-based technology integrator deploying future-proof enterprise networking, cybersecurity, audio-visual, and building automation systems.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#E51D25]" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Secure Deployments</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#E51D25]" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Scalable Architecture</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-2">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80" alt="Server Room" className="rounded-lg h-36 w-full object-cover" />
          <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80" alt="Cabling" className="rounded-lg h-36 w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;