import React from 'react';
import { motion } from 'framer-motion';

// Guaranteed zero-fail inline SVG logo components matching exact OEM brands
const partners = [
  {
    name: 'Synology',
    component: () => (
      <svg viewBox="0 0 180 40" className="h-6 sm:h-8 md:h-9 w-auto text-slate-200">
        <text x="0" y="27" fill="currentColor" fontSize="23" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="3">
          SYNOLOGY
        </text>
      </svg>
    )
  },
  {
    name: 'Fortinet',
    component: () => (
      <svg viewBox="0 0 200 40" className="h-6 sm:h-8 md:h-9 w-auto text-slate-200">
        <rect x="0" y="6" width="11" height="11" fill="#EE3124" rx="2" />
        <rect x="14" y="6" width="11" height="11" fill="#EE3124" rx="2" />
        <rect x="0" y="20" width="11" height="11" fill="#EE3124" rx="2" />
        <rect x="14" y="20" width="11" height="11" fill="#EE3124" rx="2" />
        <text x="34" y="27" fill="currentColor" fontSize="23" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="2">
          FORTINET
        </text>
      </svg>
    )
  },
  {
    name: 'Hewlett Packard Enterprise',
    component: () => (
      <svg viewBox="0 0 260 40" className="h-6 sm:h-8 md:h-9 w-auto text-slate-200">
        <rect x="0" y="7" width="42" height="24" fill="none" stroke="#01A781" strokeWidth="4" rx="2" />
        <text x="9" y="24" fill="#01A781" fontSize="13" fontWeight="900" fontFamily="system-ui, sans-serif">HPE</text>
        <text x="50" y="19" fill="currentColor" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Hewlett Packard</text>
        <text x="50" y="31" fill="currentColor" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Enterprise</text>
      </svg>
    )
  },
  {
    name: 'Sophos',
    component: () => (
      <svg viewBox="0 0 150 40" className="h-6 sm:h-8 md:h-9 w-auto">
        <text x="0" y="28" fill="#2B7FFF" fontSize="26" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="3">
          SOPHOS
        </text>
      </svg>
    )
  },
  {
    name: 'Schneider Electric',
    component: () => (
      <svg viewBox="0 0 210 40" className="h-6 sm:h-8 md:h-9 w-auto text-slate-200">
        <g transform="translate(0, 5)">
          <rect x="0" y="0" width="28" height="28" rx="5" fill="#009639" />
          <path d="M8 20 C8 12, 20 16, 20 8" stroke="#FFFFFF" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </g>
        <text x="36" y="20" fill="currentColor" fontSize="14" fontWeight="800" fontFamily="system-ui, sans-serif">Schneider</text>
        <text x="36" y="31" fill="#009639" fontSize="10" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="1.5">ELECTRIC</text>
      </svg>
    )
  },
  {
    name: 'Palo Alto Networks',
    component: () => (
      <svg viewBox="0 0 180 40" className="h-6 sm:h-8 md:h-9 w-auto text-slate-200">
        <g transform="translate(0, 8)">
          <path d="M11 0 L22 5 L22 16 L11 21 L0 16 L0 5 Z" fill="#FA5823" />
          <path d="M11 0 L22 5 L11 10 L0 5 Z" fill="#FF8359" />
        </g>
        <text x="30" y="26" fill="currentColor" fontSize="21" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">
          paloalto
        </text>
      </svg>
    )
  },
  {
    name: 'Cisco',
    component: () => (
      <svg viewBox="0 0 140 40" className="h-6 sm:h-8 md:h-9 w-auto text-slate-200">
        <g fill="#00BCEB">
          <rect x="2" y="14" width="3" height="6" rx="1.5" />
          <rect x="8" y="10" width="3" height="10" rx="1.5" />
          <rect x="14" y="6" width="3" height="14" rx="1.5" />
          <rect x="20" y="10" width="3" height="10" rx="1.5" />
          <rect x="26" y="14" width="3" height="6" rx="1.5" />
        </g>
        <text x="36" y="27" fill="currentColor" fontSize="22" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="2">
          CISCO
        </text>
      </svg>
    )
  },
  {
    name: 'Hikvision',
    component: () => (
      <svg viewBox="0 0 160 40" className="h-6 sm:h-8 md:h-9 w-auto">
        <text x="0" y="28" fill="#EE3124" fontSize="23" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="2">
          HIKVISION
        </text>
      </svg>
    )
  }
];

const TechPartners = () => (
  <section
    className="py-12 sm:py-16 overflow-hidden relative w-full bg-[#0a0d14] text-white border-y border-white/5"
    id="partners"
  >
    {/* Centered Header matching screenshot */}
    <div className="max-w-7xl mx-auto px-4 text-center mb-8 sm:mb-12">
      <h2 className="text-xs sm:text-sm font-extrabold tracking-[0.28em] text-slate-400 uppercase">
        OUR TECHNOLOGY PARTNERS
      </h2>
    </div>

    {/* Marquee Track Container */}
    <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden">

      {/* Left Fade Overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0a0d14] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25,
        }}
        className="flex w-max items-center"
      >
        {/* Loop 1 */}
        <div className="flex gap-10 sm:gap-14 md:gap-20 items-center pr-10 sm:pr-14 md:pr-20">
          {partners.map((partner, i) => {
            const LogoComp = partner.component;
            return (
              <div
                key={`p1-${i}`}
                className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 cursor-pointer group shrink-0"
              >
                <LogoComp />
              </div>
            );
          })}
        </div>

        {/* Loop 2 (Duplicate for seamless continuous scrolling) */}
        <div className="flex gap-10 sm:gap-14 md:gap-20 items-center pr-10 sm:pr-14 md:pr-20">
          {partners.map((partner, i) => {
            const LogoComp = partner.component;
            return (
              <div
                key={`p2-${i}`}
                className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 cursor-pointer group shrink-0"
              >
                <LogoComp />
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Right Fade Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0a0d14] to-transparent z-10 pointer-events-none" />

    </div>
  </section>
);

export default TechPartners;