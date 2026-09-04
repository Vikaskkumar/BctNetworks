import React from 'react';
import { Network, Server, Shield, Cable, MessageSquare, Video, MonitorPlay, Flame, Cpu, ArrowRight } from 'lucide-react';

const solutions = [
  { title: 'Enterprise Network', desc: 'Connect every part of your organization seamlessly.', icon: Network },
  { title: 'Server & Storage', desc: 'Reliable infrastructure for critical business data.', icon: Server },
  { title: 'Security & Surveillance', desc: 'Network security, surveillance, and access protection.', icon: Shield },
  { title: 'Structured Cabling', desc: 'Passive network foundation supporting modern transmission.', icon: Cable },
  { title: 'Unified Communication', desc: 'Bring voice, video, and messaging together.', icon: MessageSquare },
  { title: 'Telepresence', desc: 'Connect people and teams across locations.', icon: Video },
  { title: 'Audio Visual', desc: 'Integrated AV systems for commercial environments.', icon: MonitorPlay },
  { title: 'Fire & Safety', desc: 'Intelligent fire detection and life safety systems.', icon: Flame },
  { title: 'Building Automation', desc: 'Smart centralized control of facility operations.', icon: Cpu },
];

export default function SolutionsGrid() {
  return (
    <section className="py-24 bg-[var(--bg)]" id="solutions">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[var(--text)]">
            Explore our solutions.
          </h2>
          <a href="#contact" className="inline-flex items-center gap-2 text-[var(--text)] hover:opacity-70 transition-opacity font-medium">
            Discuss a Project <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {solutions.map(({ title, desc, icon: Icon }, idx) => (
            <div key={idx} className="group flex flex-col pt-8 border-t border-[var(--border)] cursor-pointer">
              <Icon size={24} className="text-[var(--text)] mb-6" />
              <h3 className="text-xl font-medium text-[var(--text)] mb-3 group-hover:underline underline-offset-4">{title}</h3>
              <p className="text-[var(--muted)] text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}