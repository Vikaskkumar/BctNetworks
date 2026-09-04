import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import bgVideo from '../assets/bg3.mp4';

const metrics = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '99.9%', label: 'Network Uptime' },
  { value: '20+', label: 'Enterprise Clients' },
  { value: '24/7', label: 'NOC Support' },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col justify-end pb-24 pt-36 animate-fade-in overflow-hidden" id="home">
      {/* Hero-only Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-75"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Soft top gradient and bottom fade to section background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[var(--bg)]" />
      </div>

      <div className="container-custom relative z-10 text-[var(--text)]">



        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-end">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-alt)]/80 text-xs font-medium text-[var(--text)] mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="tracking-wide">CCTV &nbsp;|&nbsp; Networking &nbsp;|&nbsp; IT Infrastructure</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-medium tracking-tighter leading-[1.06] mb-6">
              Jaipur's trusted network infrastructure partner.
            </h1>

            <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mb-10 font-normal leading-relaxed">
              We design, deploy, secure, and manage enterprise networks, data centers, and surveillance infrastructure around the clock.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="group w-full sm:w-auto btn-primary !py-3.5 !px-8 text-[15px] gap-2"
              >
                <span>Contact sales</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#solutions"
                className="group w-full sm:w-auto btn-secondary !py-3.5 !px-8 text-[15px] gap-2"
              >
                <span>Explore solutions</span>
                <ArrowUpRight size={16} className="opacity-60 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
            </div>
          </div>

          {/* Right Column: Stats pushed right with clean borders */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[var(--border)] lg:pl-12 text-left lg:text-right">
            {metrics.map((m, i) => (
              <div key={i} className="flex flex-col lg:items-end group">
                <span className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text)] group-hover:opacity-80 transition-opacity">
                  {m.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-[var(--muted)] mt-1 font-medium">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}