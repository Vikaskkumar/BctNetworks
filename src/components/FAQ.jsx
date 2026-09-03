import React from 'react';
import { Layers, HeartHandshake, ShieldCheck, Activity, Network, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const whyReasons = [
  {
    title: 'Integrated Expertise',
    desc: 'Multiple infrastructure capabilities under one roof.',
    icon: Layers,
  },
  {
    title: 'Customer Experience',
    desc: 'Strong emphasis on dedicated customer service and support.',
    icon: HeartHandshake,
  },
  {
    title: 'Trust',
    desc: 'A core company value built on transparency and delivery.',
    icon: ShieldCheck,
  },
  {
    title: 'Reliability',
    desc: 'Central to our enterprise infrastructure solutions.',
    icon: Activity,
  },
  {
    title: 'End-to-End Approach',
    desc: 'Networking, servers, security, and communication represented together.',
    icon: Network,
  },
];

const certifications = [
  'ISO 9001 Quality Management',
  'ISO 27001 Information Security',
  'Certified Network Technology Partner',
  'Registered Government Vendor',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg)] border-t border-[var(--border-light)] w-full relative" id="faq">
      <div className="max-w-7xl mx-auto px-4 min-[360px]:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Why BCT Networks */}
          <div>
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-2 block">
                Why BCT Networks?
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)]">
                Built on Experience, Trust and Standards
              </h2>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-6"
            >
              {whyReasons.map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <motion.div variants={itemVariants} key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--surface)] border border-[var(--border-light)] flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-[var(--accent)]" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[var(--text)] mb-1">{reason.title}</h4>
                      <p className="text-sm text-[var(--muted)] leading-relaxed">{reason.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Trust & Certifications */}
          <div className="flex flex-col justify-center">
            <div className="bg-[var(--surface)] border border-[var(--border-light)] rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <Award size={28} className="text-[var(--text)]" />
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)]">Trusted Standards & Recognition</h3>
              </div>

              <div className="flex flex-col gap-4 relative z-10">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-alt)] border border-[var(--border-light)] hover:border-[var(--accent)]/40 transition-colors">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-[var(--text)]">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-[var(--border-light)] relative z-10">
                <p className="text-sm text-[var(--muted)] leading-relaxed italic">
                  "Our certifications represent our commitment to quality, security, and delivering reliable enterprise infrastructure."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
