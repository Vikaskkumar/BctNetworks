import { useState } from 'react';
import { ArrowRight, Share2, Building, Award } from 'lucide-react';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'corp-1',
      category: 'corporate',
      title: 'Corporate Office Network Deployment',
      client: 'Tier-1 IT Solutions HQ, Jaipur',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      nodes: '500+ Nodes',
      floors: '3 Floors',
      uptime: '99.99%',
      desc: 'Complete wired and Wi-Fi 6 infrastructure with dual core switch redundancy, zero-trust VLAN segmentation, biometric access, and Zoom rooms.',
      tech: ['Cisco Core Switching', 'Aruba Wi-Fi 6', 'Fortinet SD-WAN', 'Polycom AV']
    },
    {
      id: 'hosp-1',
      category: 'hospitality',
      title: '5-Star Luxury Resort Wi-Fi & IPTV Rollout',
      client: 'Heritage Resort & Spa, Udaipur',
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      nodes: '1,200+ Nodes',
      floors: '180 Villas',
      uptime: '99.98%',
      desc: 'Full estate fiber-to-the-villa backbone, in-room IP TV entertainment with Opera PMS integration, and outdoor pool Wi-Fi coverage.',
      tech: ['HPE Aruba Networks', 'CommScope Fiber', 'Dahua 4K CCTV', 'Samsung IPTV']
    },
    {
      id: 'health-1',
      category: 'healthcare',
      title: '300-Bed Super Specialty Hospital Infrastructure',
      client: 'Metro Healthcare Hospital, Jaipur',
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      nodes: '850+ Nodes',
      floors: '7 Floors',
      uptime: '99.999%',
      desc: 'Zero-downtime medical network architecture isolated for PACS image servers, telemetry, nurse call, and biometric ICU access.',
      tech: ['Cisco Catalyst 9300', 'Palo Alto Next-Gen Firewall', 'Schneider UPS']
    },
    {
      id: 'edu-1',
      category: 'education',
      title: 'University Campus Fiber & Auditorium AV',
      client: 'International University Campus, Kota',
      img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
      nodes: '2,500+ Users',
      floors: '12 Buildings',
      uptime: '99.95%',
      desc: 'Multi-gigabit campus fiber ring connecting 12 academic blocks, outdoor Wi-Fi zones, 1200-seater auditorium pro-AV sound system.',
      tech: ['Ruckus Wireless', 'Juniper Switches', 'Dante Audio System']
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* Header Banner */}
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <span className="text-[#E51D25] font-extrabold text-xs tracking-[0.2em] uppercase">FEATURED PROJECTS</span>
          <h1 className="text-3xl sm:text-5xl font-black mt-2 mb-4 tracking-tight">Enterprise Success Stories & Deployments</h1>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            Real-world case studies showcasing how BCT Networks engineered high-performance infrastructure across complex environments.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {['all', 'corporate', 'hospitality', 'healthcare', 'education'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                  filter === cat 
                    ? 'bg-[#E51D25] text-white shadow-md' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-16 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="space-y-12">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative h-[300px] lg:h-auto">
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <div className="bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg text-white text-xs font-bold flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{proj.nodes}</span>
                  </div>
                  <div className="bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg text-white text-xs font-bold flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5" />
                    <span>{proj.floors}</span>
                  </div>
                  <div className="bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg text-white text-xs font-bold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>{proj.uptime}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[#E51D25] font-extrabold text-[10px] tracking-widest uppercase">{proj.client}</span>
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white mt-1 mb-3">{proj.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-slate-350 leading-relaxed mb-6">{proj.desc}</p>
                  
                  <div className="mb-6">
                    <span className="text-xs font-extrabold text-gray-900 dark:text-white uppercase tracking-wider block mb-2">Technologies Used:</span>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((t, idx) => (
                        <span key={idx} className="bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-200 text-xs font-bold px-3 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a href="#quote" className="inline-flex items-center gap-2 text-xs font-black text-[#E51D25] dark:text-red-400 hover:text-[#c9151c] dark:hover:text-red-300 uppercase tracking-wider">
                  <span>Download Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
