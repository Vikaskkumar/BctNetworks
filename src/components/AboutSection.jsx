import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, Network, Server } from 'lucide-react';

const coreServices = [
  {
    icon: Camera,
    title: 'CCTV & Surveillance',
    badge: 'Security',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    desc: 'High-definition IP camera systems, AI video analytics, perimeter protection, and centralized VMS monitoring for continuous facility security.',
    features: ['IP & HD Camera Systems', 'Video Management (VMS)', 'Perimeter Access Control']
  },
  {
    icon: Network,
    title: 'Enterprise Networking',
    badge: 'Connectivity',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    desc: 'High-performance wired and wireless infrastructure, core switching, optic fiber backbones, and secure SD-WAN connectivity.',
    features: ['Routing & Switching', 'Enterprise Wi-Fi 6 Solutions', 'Optic Fiber Cabling']
  },
  {
    icon: Server,
    title: 'IT Infrastructure',
    badge: 'Systems',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    desc: 'Next-gen server clusters, SAN/NAS storage arrays, structured copper & fiber architecture, and resilient data center deployment.',
    features: ['Server & Storage Arrays', 'Structured Cabling', 'Data Center Infrastructure']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const AboutSection = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 text-[var(--text)] relative overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 min-[360px]:px-6 lg:px-8 relative z-10">

        {/* Header & Statement - Clean Editorial Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-4xl mb-12 sm:mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[2px] bg-blue-500 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
              Who We Are
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text)] leading-relaxed tracking-tight max-w-4xl mt-2 mb-6"
          >
            BCT Networks provides integrated technology and infrastructure capabilities across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 font-bold">
              networking, server and storage, security, communication
            </span>
            , and related technology systems.
          </motion.h2>
        </motion.div>

        {/* Core Capabilities Cards with Images */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-6 border-t border-[var(--border-light)]"
        >
          {coreServices.map(({ icon: Icon, title, badge, image, desc, features }, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-[var(--surface)] border border-[var(--border-light)] hover:border-blue-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                {/* Image Banner Header */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-[0.85] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-black/30" />
                  
                  {/* Badge & Icon Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="w-10 h-10 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-blue-400 shadow-md">
                      <Icon size={20} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-blue-600/90 backdrop-blur-md px-3 py-1 rounded-full shadow-md">
                      {badge}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-[var(--text)] mb-2.5 group-hover:text-blue-500 transition-colors">
                    {title}
                  </h3>

                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>

              {/* Feature Checklist Footer */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                <div className="pt-4 border-t border-[var(--border-light)] space-y-2">
                  {features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[var(--text)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;