import React from 'react';
import { Camera, Network, Server } from 'lucide-react';

const coreServices = [
  {
    icon: Camera,
    title: 'CCTV & Surveillance',
    desc: 'High-definition IP camera systems, AI video analytics, perimeter protection, and centralized VMS monitoring for continuous facility security.',
  },
  {
    icon: Network,
    title: 'Enterprise Networking',
    desc: 'High-performance wired and wireless infrastructure, core switching, optic fiber backbones, and secure SD-WAN connectivity.',
  },
  {
    icon: Server,
    title: 'IT Infrastructure',
    desc: 'Next-gen server clusters, SAN/NAS storage arrays, structured copper & fiber architecture, and resilient data center deployment.',
  }
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-[var(--bg)]" id="about">
      <div className="container-custom">
        <div className="max-w-4xl mb-20">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-8 text-[var(--text)]">
            Integrated technology capabilities.
          </h2>
          <p className="text-xl md:text-2xl text-[var(--muted)] max-w-3xl leading-relaxed">
            BCT Networks provides integrated technology and infrastructure capabilities across networking, server and storage, security, communication, and related technology systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {coreServices.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex flex-col">
              <Icon size={32} className="text-[var(--text)] mb-6" />
              <h3 className="text-xl font-medium text-[var(--text)] mb-4">{title}</h3>
              <p className="text-[var(--muted)] leading-relaxed text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}