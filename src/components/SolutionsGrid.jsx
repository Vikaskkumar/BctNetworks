import { ArrowRight } from 'lucide-react';

const serviceCards = [
  {
    title: 'Enterprise Wi-Fi 6E High-Density Rollouts',
    stats: '150+ Projects • 99.9% Uptime Guarantee',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=60',
  },
  {
    title: 'Zero-Trust Firewall & Perimeter Security',
    stats: '24/7 NOC Shield • Threat Prevention',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=60',
  },
  {
    title: 'Structured Fiber Optic & Cat6A Cabling',
    stats: 'TIA/EIA Certified • 10Gbps Backbone',
    image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&w=600&q=60',
  },
  {
    title: 'Unified IP Telephony & Commercial AV Systems',
    stats: 'VoIP & UC • Multi-Zone Audio',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=60',
  },
  {
    title: 'AI Video Surveillance & Access Control',
    stats: '4K Smart Cameras • Cloud Storage',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=60',
  },
  {
    title: 'Data Center Rack & Precision Cooling Setup',
    stats: 'Tier-3 Certified • Smart PDU Power',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=60',
  },
];

const SolutionsGrid = () => {
  // Duplicate list to create a seamless infinite marquee loop
  const duplicatedCards = [...serviceCards, ...serviceCards];

  return (
    <section className="section-padding section-border overflow-hidden relative w-full" id="solutions">
      <div className="container-custom mb-8 sm:mb-10 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="section-tag">Featured Solutions</span>
            <h2 className="section-title">
              Enterprise Networking Services
            </h2>
          </div>
          <a href="#contact" className="btn-secondary flex-shrink-0 self-start sm:self-auto">
            View All Services <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Infinite right-to-left marquee slider with clean, high-visibility image cards */}
      <div className="marquee-container py-2 w-full max-w-full overflow-hidden">
        <div className="marquee-track solutions-marquee-track">
          {duplicatedCards.map((card, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex flex-col justify-between group transition-all duration-300 w-[240px] min-[360px]:w-[270px] sm:w-[380px] rounded-2xl p-3.5 sm:p-4 border border-[#272B36] bg-[#0C0D0F] hover:border-white/20 transition-all"
            >
              {/* Clear, high-visibility image banner */}
              <div className="relative overflow-hidden mb-3 sm:mb-4 h-[140px] min-[360px]:h-[160px] sm:h-[220px] rounded-xl">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Clean text section below image */}
              <div className="px-1 pt-1 pb-1">
                <h3 className="text-sm min-[360px]:text-base font-semibold text-white tracking-tight leading-snug mb-1.5">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A6A6] tracking-tight">
                  {card.stats}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;