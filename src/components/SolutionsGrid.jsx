import React from 'react';
import { Network, Server, Shield, Cable, MessageSquare, Video, MonitorPlay, Flame, Cpu, ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: 'Enterprise Network',
    desc: 'Connect every part of your organization seamlessly.',
    icon: Network,
  },
  {
    title: 'Server & Storage',
    desc: 'Reliable infrastructure for critical business data.',
    icon: Server,
  },
  {
    title: 'Security & Surveillance',
    desc: 'Network security, surveillance, and access protection.',
    icon: Shield,
  },
  {
    title: 'Structured Cabling',
    desc: 'Passive network foundation supporting modern transmission.',
    icon: Cable,
  },
  {
    title: 'Unified Communication',
    desc: 'Bring voice, video, and messaging together.',
    icon: MessageSquare,
  },
  {
    title: 'Telepresence & Collaboration',
    desc: 'Connect people and teams across locations.',
    icon: Video,
  },
  {
    title: 'Audio Visual',
    desc: 'Integrated AV systems for commercial environments.',
    icon: MonitorPlay,
  },
  {
    title: 'Fire & Safety',
    desc: 'Intelligent fire detection and life safety systems.',
    icon: Flame,
  },
  {
    title: 'Building Automation',
    desc: 'Smart centralized control of facility operations.',
    icon: Cpu,
  },
];

const row1 = solutions.slice(0, 5);
const row2 = solutions.slice(5, 9).concat(solutions[0]);

const SolutionCard = ({ title, desc, icon: Icon }) => (
  <div className="group w-[300px] sm:w-[350px] shrink-0 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border-light)] hover:border-[var(--accent)]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    
    <div className="w-12 h-12 rounded-xl bg-[var(--bg-alt)] border border-[var(--border-light)] flex items-center justify-center mb-5 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-colors duration-300 relative z-10">
      <Icon size={24} className="text-[var(--text-2)] group-hover:text-white transition-colors duration-300" />
    </div>

    <h3 className="text-lg font-bold text-[var(--text)] mb-2 relative z-10 group-hover:text-[var(--accent)] transition-colors">
      {title}
    </h3>
    <p className="text-sm text-[var(--muted)] leading-relaxed flex-grow relative z-10">
      {desc}
    </p>

    <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[var(--accent)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
      Explore <ArrowRight size={14} />
    </div>
  </div>
);

const SolutionsGrid = () => {
  return (
    <section className="py-16 sm:py-24 bg-[var(--bg-alt)] border-y border-[var(--border-light)] w-full overflow-hidden" id="solutions">
      
      <div className="max-w-7xl mx-auto px-4 min-[360px]:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-blue-500 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                Our Solutions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text)]">
              Integrated Technology Infrastructure
            </h2>
          </div>
          
          <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--surface)] border border-[var(--border-light)] text-[var(--text)] font-semibold text-sm hover:border-[var(--accent)]/50 transition-colors shrink-0 shadow-sm">
            Discuss a Project <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="relative w-full flex flex-col gap-6 select-none pb-8">
        {/* Gradients for smooth fade in/out */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--bg-alt)] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--bg-alt)] to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className="flex w-max animate-scroll gap-6 px-4">
          {[...row1, ...row1, ...row1, ...row1].map((sol, idx) => (
            <SolutionCard key={`r1-${idx}`} {...sol} />
          ))}
        </div>

        {/* Row 2 - Reversed or just staggered */}
        <div className="flex w-max animate-scroll-reverse gap-6 px-4 ml-12">
          {[...row2, ...row2, ...row2, ...row2].map((sol, idx) => (
            <SolutionCard key={`r2-${idx}`} {...sol} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default SolutionsGrid;