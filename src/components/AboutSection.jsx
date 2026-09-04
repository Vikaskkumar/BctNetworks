import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Network, Layers, Building2, Users, CheckCircle2, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Network,
    title: 'Network Expertise',
    desc: 'Enterprise infrastructure and connectivity.'
  },
  {
    icon: Layers,
    title: 'Integrated Solutions',
    desc: 'Multiple technology disciplines under one organization.'
  },
  {
    icon: Building2,
    title: 'Sector Experience',
    desc: 'Solutions spanning public and private sectors.'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    desc: 'Built around reliability, service and customer experience.'
  }
];

const trustBadges = [
  'ISO Certified',
  'Enterprise Solutions',
  'Integrated Expertise',
  'Public & Private Sector'
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
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[2px] bg-blue-500 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
              Who We Are
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text)] leading-[1.1] mb-6">
            Technology Infrastructure Built Around{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Your Business
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-[var(--muted)] leading-relaxed font-normal max-w-2xl">
            BCT Networks provides integrated technology and infrastructure capabilities across networking, server and storage, security, communication, and related technology systems.
          </motion.p>
        </motion.div>

        {/* 4 Pillars - Clean Minimalist Text Block Columns (NO CARDS) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-14 sm:mb-16 pt-4 border-t border-[var(--border-light)]"
        >
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} variants={itemVariants} className="flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--text)] mb-2">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Single Premium Visual Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-[var(--border-light)] shadow-2xl h-[300px] sm:h-[380px] lg:h-[420px] flex items-end group"
        >
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
            alt="BCT Networks Enterprise Infrastructure"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient Overlay for Crisp Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Banner Inner Content */}
          <div className="relative z-10 p-6 sm:p-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl text-white">
              <div className="flex flex-wrap gap-2 mb-3">
                {trustBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white"
                  >
                    <CheckCircle2 size={12} className="text-cyan-400" />
                    {badge}
                  </span>
                ))}
              </div>
              <h3 className="text-lg sm:text-2xl font-bold tracking-tight mb-2">
                Integrated Technology Infrastructure
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Connected, secure, and efficient enterprise solutions.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors shrink-0 shadow-lg"
            >
              Get a Quote <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;