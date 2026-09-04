import React from 'react';
import { motion } from 'framer-motion';

// Using direct transparent SVGs from public CDNs so the CSS filter trick works flawlessly
const partners = [
  { name: 'CISCO', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
  { name: 'HIKVISION', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Hikvision_logo.svg' },
  { name: 'DAHUA', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Dahua_Technology_logo.svg' },
  { name: 'FORTINET', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Fortinet_logo.svg' },
  { name: 'HPE ARUBA', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Aruba_Networks_logo.svg' },
  { name: 'SOPHOS', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Sophos_logo.svg' },
  { name: 'SCHNEIDER', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Schneider_Electric_2007.svg' },
  { name: 'PALO ALTO', logo: 'https://logo.clearbit.com/paloaltonetworks.com' } // Fallback to Clearbit for Palo Alto
];

const TechPartners = () => (
  <section
    className="py-10 md:py-14 overflow-hidden relative w-full"
    id="partners"
  >
    {/* Minimalist Header */}
    <div className="max-w-7xl mx-auto px-4 text-center mb-6 sm:mb-10">
      <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-gray-500 uppercase">
        Certified OEM Technology Partners
      </p>
    </div>

    {/* Marquee Ticker Container */}
    <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden">

      {/* Left Dark Gradient Fade Mask */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-40 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 30, // Smooth, elegant speed
        }}
        className="flex w-max tech-marquee-track"
      >
        {/* Block 1 */}
        <div className="flex gap-4 sm:gap-8 md:gap-14 pr-4 sm:pr-8 md:pr-14 items-center">
          {partners.map((partner, i) => (
            <div
              key={`first-${i}`}
              className="flex items-center gap-2.5 sm:gap-4 px-3 sm:px-6 py-2.5 sm:py-4 rounded-xl border border-transparent hover:bg-[var(--surface)] hover:border-[var(--border)] transition-all duration-500 cursor-default group"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-4 sm:h-6 md:h-7 w-auto object-contain brightness-0 invert opacity-40 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-500"
                onError={(e) => e.target.style.display = 'none'}
              />
              <span className="text-[11px] sm:text-sm font-bold tracking-[0.14em] sm:tracking-[0.16em] text-[var(--muted)] group-hover:text-[var(--text)] transition-colors duration-500 uppercase whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Block 2 (Exact duplicate for seamless looping) */}
        <div className="flex gap-4 sm:gap-8 md:gap-14 pr-4 sm:pr-8 md:pr-14 items-center">
          {partners.map((partner, i) => (
            <div
              key={`second-${i}`}
              className="flex items-center gap-2.5 sm:gap-4 px-3 sm:px-6 py-2.5 sm:py-4 rounded-xl border border-transparent hover:bg-[var(--surface)] hover:border-[var(--border)] transition-all duration-500 cursor-default group"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-4 sm:h-6 md:h-7 w-auto object-contain brightness-0 invert opacity-40 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-500"
                onError={(e) => e.target.style.display = 'none'}
              />
              <span className="text-[11px] sm:text-sm font-bold tracking-[0.14em] sm:tracking-[0.16em] text-[var(--muted)] group-hover:text-[var(--text)] transition-colors duration-500 uppercase whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Dark Gradient Fade Mask */}
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-40 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />

    </div>
  </section>
);

export default TechPartners;