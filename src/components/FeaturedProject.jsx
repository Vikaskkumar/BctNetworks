import { 
  ArrowRight, 
  Share2, 
  Building, 
  Award, 
  Server, 
  Wifi, 
  Shield, 
  Activity 
} from 'lucide-react';

const FeaturedProject = () => {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-950 transition-colors duration-300" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center bg-[#fcfcfc] dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 shadow-sm">
          
          {/* Left Column: Building Photo & Overlay Metrics (6 Cols) */}
          <div className="lg:col-span-6 relative h-[420px] sm:h-[500px] w-full overflow-hidden">
            {/* Office Building Image */}
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" 
              alt="Corporate Office Building at Night" 
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

            {/* Metrics Floating Badges (Left Side Stack) */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
              {/* Badge 1 */}
              <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-xl p-3.5 flex flex-col items-center justify-center min-w-[95px] text-white shadow-lg">
                <Share2 className="w-5 h-5 mb-1 text-gray-300 stroke-[2]" />
                <span className="font-black text-xl leading-none">500+</span>
                <span className="text-[9px] font-extrabold text-gray-300 uppercase tracking-widest mt-1">Nodes</span>
              </div>
              
              {/* Badge 2 */}
              <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-xl p-3.5 flex flex-col items-center justify-center min-w-[95px] text-white shadow-lg">
                <Building className="w-5 h-5 mb-1 text-gray-300 stroke-[2]" />
                <span className="font-black text-xl leading-none">3</span>
                <span className="text-[9px] font-extrabold text-gray-300 uppercase tracking-widest mt-1">Floors</span>
              </div>
              
              {/* Badge 3 */}
              <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-xl p-3.5 flex flex-col items-center justify-center min-w-[95px] text-white shadow-lg">
                <Award className="w-5 h-5 mb-1 text-gray-300 stroke-[2]" />
                <span className="font-black text-xl leading-none">99.99%</span>
                <span className="text-[9px] font-extrabold text-gray-300 uppercase tracking-widest mt-1">Uptime</span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Details & 3D Building Wireframe (6 Cols) */}
          <div className="lg:col-span-6 relative p-8 lg:p-14 h-full flex flex-col justify-center overflow-hidden bg-white dark:bg-slate-900">
            
            {/* Background 3D Isometric Architectural Wireframe SVG */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] opacity-15 dark:opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 200" className="w-full h-full stroke-current text-gray-900 dark:text-slate-100 fill-none" strokeWidth="0.8">
                {/* 3D Wireframe Grid Floors */}
                <polygon points="100,20 170,55 100,90 30,55" />
                <polygon points="100,60 170,95 100,130 30,95" />
                <polygon points="100,100 170,135 100,170 30,135" />
                
                {/* Vertical Pillars */}
                <line x1="30" y1="55" x2="30" y2="135" />
                <line x1="100" y1="20" x2="100" y2="170" strokeWidth="1.2" stroke="#E51D25" />
                <line x1="170" y1="55" x2="170" y2="135" />

                {/* Network Node Badges in Wireframe */}
                <circle cx="100" cy="40" r="5" fill="#E51D25" />
                <circle cx="135" cy="77" r="5" fill="#E51D25" />
                <circle cx="65" cy="117" r="5" fill="#E51D25" />
                <circle cx="100" cy="135" r="5" fill="#E51D25" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="mb-3">
                <span className="text-[#E51D25] font-extrabold text-[11px] tracking-[0.2em] uppercase">
                  FEATURED PROJECT
                </span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white leading-tight mb-4 tracking-tight">
                Corporate Office <br />
                Network Deployment
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-slate-400 mb-8 max-w-md leading-relaxed">
                A complete wired and wireless infrastructure deployment 
                with secure segmentation, high-performance switching, 
                and centralized management.
              </p>
              
              {/* Features List */}
              <div className="flex flex-wrap gap-x-6 gap-y-4 mb-10">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-gray-500 dark:text-slate-450" />
                  <span className="text-xs font-bold text-gray-800 dark:text-slate-200">Core Switching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-gray-500 dark:text-slate-450" />
                  <span className="text-xs font-bold text-gray-800 dark:text-slate-200">Enterprise Wi-Fi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gray-500 dark:text-slate-450" />
                  <span className="text-xs font-bold text-gray-800 dark:text-slate-200">VLAN</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-gray-500 dark:text-slate-450" />
                  <span className="text-xs font-bold text-gray-800 dark:text-slate-200">Monitoring</span>
                </div>
              </div>
              
              <a 
                href="#projects" 
                className="group inline-flex items-center gap-2 text-xs font-extrabold text-[#E51D25] dark:text-red-400 hover:text-[#c9151c] dark:hover:text-red-300 transition-colors uppercase tracking-wider"
              >
                <span>VIEW CASE STUDY</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;