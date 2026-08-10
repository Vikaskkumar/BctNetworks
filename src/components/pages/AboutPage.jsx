import { useState, useEffect, useRef } from 'react';
import { Shield, Award, Users, MapPin, Building, Network, CloudCog, Database, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

const FadeInSection = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (currentRef) observer.unobserve(currentRef);
      }
    }, { threshold: 0.1 });

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen font-sans selection:bg-[#E51D25] selection:text-white transition-colors duration-300">

      {/* Page Header Banner */}
      <section className="relative bg-[#0a0a0a] text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E51D25]/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-[#E51D25]"></span>
              <span className="text-[#E51D25] font-extrabold text-xs tracking-[0.2em] uppercase">
                ABOUT BCT NETWORKS
              </span>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Building The Future Of <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Enterprise Connectivity</span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={400}>
            <p className="text-gray-400 max-w-2xl text-base sm:text-lg leading-relaxed">
              Jaipur-based technology infrastructure pioneer delivering integrated solutions in enterprise networking, secure data infrastructure, building automation, and unified communications.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Main Content - Company Story */}
      <section className="py-20 lg:py-28 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-6 space-y-8">
            <FadeInSection>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white leading-tight">
                Engineering Excellence Across Rajasthan and Beyond
              </h2>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="space-y-5 text-gray-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                <p>
                  Founded with a mission to transform enterprise communication and IT infrastructure, BCT Networks brings decades of cumulative engineering experience. We specialize in designing, deploying, securing, and maintaining mission-critical network environments.
                </p>
                <p>
                  From corporate headquarters and multi-specialty hospitals to educational campuses and manufacturing facilities, our vendor-neutral approach guarantees high-performance outcomes tailored to client growth objectives.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={400}>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
                <div className="group border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/60 p-5 rounded-2xl flex items-center gap-4 hover:bg-white dark:hover:bg-slate-900 hover:border-red-100 dark:hover:border-red-900/40 hover:shadow-xl transition-all duration-300">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm group-hover:bg-[#E51D25] dark:group-hover:bg-[#E51D25] transition-colors duration-300">
                    <Building className="w-6 h-6 text-[#E51D25] dark:text-red-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900 dark:text-white">150+</div>
                    <div className="text-[10px] text-gray-500 dark:text-slate-400 font-extrabold uppercase tracking-wider">Projects</div>
                  </div>
                </div>
                <div className="group border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/60 p-5 rounded-2xl flex items-center gap-4 hover:bg-white dark:hover:bg-slate-900 hover:border-red-100 dark:hover:border-red-900/40 hover:shadow-xl transition-all duration-300">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm group-hover:bg-[#E51D25] dark:group-hover:bg-[#E51D25] transition-colors duration-300">
                    <Users className="w-6 h-6 text-[#E51D25] dark:text-red-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900 dark:text-white">50+</div>
                    <div className="text-[10px] text-gray-500 dark:text-slate-400 font-extrabold uppercase tracking-wider">Engineers</div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>

          <div className="lg:col-span-6 relative mt-10 lg:mt-0">
            <FadeInSection delay={300} className="relative">
              {/* Decorative background blocks */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-[#E51D25] rounded-tr-2xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-gray-900 dark:border-slate-400 rounded-bl-2xl opacity-10"></div>

              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-800 group">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80"
                  alt="BCT Data Center Operations"
                  className="w-full h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-[#E51D25] text-white p-6 rounded-xl shadow-xl max-w-[280px] hidden sm:block transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5" />
                  <div className="text-sm font-black uppercase tracking-wider">Headquarters</div>
                </div>
                <div className="text-xs text-red-50 font-medium leading-relaxed">
                  67/30, Sector 6, Pratap Nagar,<br />Sanganer, Jaipur - 302033
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-20 bg-gray-900 dark:bg-slate-900 text-white border-y border-gray-800 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#E51D25] font-extrabold text-xs tracking-widest uppercase">CORE CAPABILITIES</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-4">Integrated Technology Solutions</h2>
              <p className="text-gray-400 text-sm">We provide end-to-end deployment for complex IT environments, ensuring secure, fast, and automated infrastructure.</p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Category 1 */}
            <FadeInSection delay={100}>
              <div className="group h-full bg-gray-800/50 dark:bg-slate-950/60 hover:bg-gray-800 dark:hover:bg-slate-950 border border-gray-700 dark:border-slate-800 hover:border-[#E51D25]/50 p-8 rounded-2xl transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 bg-gray-900 dark:bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-6 h-6 text-[#E51D25] dark:text-red-400" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">Fiber & Enterprise Networking</h3>
                <p className="text-sm text-gray-400 dark:text-slate-400 leading-relaxed flex-grow">
                  Design and deployment of robust structured cabling systems and high-speed fiber networks, built to support complex enterprise bandwidth demands with zero latency.
                </p>
                <a href="#solutions" className="inline-flex items-center gap-2 text-xs font-bold text-[#E51D25] dark:text-red-400 mt-6 group-hover:gap-3 transition-all">
                  EXPLORE <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </FadeInSection>

            {/* Category 2 */}
            <FadeInSection delay={200}>
              <div className="group h-full bg-gray-800/50 dark:bg-slate-950/60 hover:bg-gray-800 dark:hover:bg-slate-950 border border-gray-700 dark:border-slate-800 hover:border-[#E51D25]/50 p-8 rounded-2xl transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 bg-gray-900 dark:bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CloudCog className="w-6 h-6 text-[#E51D25] dark:text-red-400" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">Cloud & Workflow Automation</h3>
                <p className="text-sm text-gray-400 dark:text-slate-400 leading-relaxed flex-grow">
                  Transforming physical operations by digitizing complex workflows. We deploy cloud-based administrative systems that centralize data fetching and automate payroll and receipt processing.
                </p>
                <a href="#solutions" className="inline-flex items-center gap-2 text-xs font-bold text-[#E51D25] dark:text-red-400 mt-6 group-hover:gap-3 transition-all">
                  EXPLORE <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </FadeInSection>

            {/* Category 3 */}
            <FadeInSection delay={300}>
              <div className="group h-full bg-gray-800/50 dark:bg-slate-950/60 hover:bg-gray-800 dark:hover:bg-slate-950 border border-gray-700 dark:border-slate-800 hover:border-[#E51D25]/50 p-8 rounded-2xl transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 bg-gray-900 dark:bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-6 h-6 text-[#E51D25] dark:text-red-400" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">Secure Data Systems</h3>
                <p className="text-sm text-gray-400 dark:text-slate-400 leading-relaxed flex-grow">
                  Centralized, strict role-based data management solutions. We build secure environments ensuring your master source data cannot be viewed or edited by unauthorized staff.
                </p>
                <a href="#solutions" className="inline-flex items-center gap-2 text-xs font-bold text-[#E51D25] dark:text-red-400 mt-6 group-hover:gap-3 transition-all">
                  EXPLORE <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </FadeInSection>

            {/* Category 4 */}
            <FadeInSection delay={400}>
              <div className="group h-full bg-gray-800/50 dark:bg-slate-950/60 hover:bg-gray-800 dark:hover:bg-slate-950 border border-gray-700 dark:border-slate-800 hover:border-[#E51D25]/50 p-8 rounded-2xl transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 bg-gray-900 dark:bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-6 h-6 text-[#E51D25] dark:text-red-400" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">Physical & Cybersecurity</h3>
                <p className="text-sm text-gray-400 dark:text-slate-400 leading-relaxed flex-grow">
                  End-to-end security architectures integrating IP surveillance, biometric access controls, and enterprise-grade firewalls to protect both physical premises and digital assets.
                </p>
                <a href="#solutions" className="inline-flex items-center gap-2 text-xs font-bold text-[#E51D25] dark:text-red-400 mt-6 group-hover:gap-3 transition-all">
                  EXPLORE <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </FadeInSection>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
        {/* Subtle background graphic */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 border-[40px] border-gray-100 dark:border-slate-800/50 rounded-full opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#E51D25] font-extrabold text-xs tracking-widest uppercase">OUR VALUES</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mt-3">Driven By Quality & Trust</h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Shield, title: 'Uncompromising Security', desc: 'Zero-trust network architectures protecting your digital assets.' },
              { icon: Award, title: 'Certified Expertise', desc: 'OEM certified engineers trained across Cisco, HPE, Fortinet & Palo Alto.' },
              { icon: CheckCircle2, title: '99.99% Uptime SLAs', desc: 'Rigorous testing and 24/7 proactive monitoring guarantees.' },
              { icon: MapPin, title: 'Local Presence', desc: 'Dedicated Jaipur NOC team ensuring rapid response and on-site support.' },
            ].map((v, idx) => (
              <FadeInSection key={idx} delay={idx * 150}>
                <div className="group bg-white dark:bg-slate-950 p-8 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-red-50 dark:bg-red-950/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E51D25] dark:group-hover:bg-[#E51D25] transition-colors duration-300">
                    <v.icon className="w-7 h-7 text-[#E51D25] dark:text-red-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-3">{v.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;