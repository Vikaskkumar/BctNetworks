import { Download } from 'lucide-react';

const ResourcesPage = () => {
  const resources = [
    {
      type: 'Whitepaper',
      title: 'Designing Zero-Trust Enterprise Networks in 2024',
      desc: 'A comprehensive engineering guide on micro-segmentation, SASE architecture, and identity-aware access control.',
      size: 'PDF • 4.2 MB'
    },
    {
      type: 'Architecture Blueprint',
      title: 'High-Density Wi-Fi 6E Deployment in Hospitality',
      desc: 'RF heat-map planning, channel selection, and PMS-integrated authentication workflows for hotels and resorts.',
      size: 'PDF • 6.8 MB'
    },
    {
      type: 'Technical Guide',
      title: 'Structured Cabling Standards: Cat6A vs Fiber Backbone',
      desc: 'Bandwidth comparison, distance limitations, and TIA/EIA 568.3-D compliance requirements for corporate campuses.',
      size: 'PDF • 3.1 MB'
    },
    {
      type: 'Case Study Report',
      title: 'Healthcare PACS Imaging Network Latency Optimization',
      desc: 'How isolated VLANs and L3 core switching achieved sub-5ms transfers for heavy DICOM radiology files.',
      size: 'PDF • 2.9 MB'
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* Header Banner */}
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <span className="text-[#E51D25] font-extrabold text-xs tracking-[0.2em] uppercase">RESOURCE CENTER</span>
          <h1 className="text-3xl sm:text-5xl font-black mt-2 mb-4 tracking-tight">Whitepapers, Guides & Blueprints</h1>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            Download technical whitepapers, network blueprints, and implementation guides authored by BCT certified network architects.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((res, idx) => (
            <div key={idx} className="border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:border-red-200 dark:hover:border-red-900/50 hover:shadow-xl transition-all bg-white dark:bg-slate-900 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-50 dark:bg-red-950/20 text-[#E51D25] dark:text-red-400 text-xs font-extrabold px-3 py-1 rounded-full">{res.type}</span>
                  <span className="text-xs text-gray-400 dark:text-slate-400 font-semibold">{res.size}</span>
                </div>
                <h2 className="text-xl font-black text-gray-900 dark:text-white mb-3">{res.title}</h2>
                <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-6">{res.desc}</p>
              </div>

              <button className="inline-flex items-center gap-2 text-xs font-black text-[#E51D25] dark:text-red-400 hover:text-[#c9151c] dark:hover:text-red-300 uppercase tracking-wider">
                <Download className="w-4 h-4" />
                <span>Download Free Resource</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
