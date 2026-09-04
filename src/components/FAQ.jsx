import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Layers, HeartHandshake, ShieldCheck, Network, Award, CheckCircle2, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What technology and infrastructure capabilities does BCT Networks provide?",
    answer: "We offer integrated technology solutions across enterprise networking, structured cabling, server & storage architecture, cybersecurity, communication systems, public address, and security monitoring."
  },
  {
    question: "Do you design custom network solutions tailored to specific industries?",
    answer: "Yes, all our infrastructure solutions are custom-engineered based on comprehensive site assessments to meet the specific requirements of corporate offices, educational institutions, government facilities, healthcare, and industrial sectors."
  },
  {
    question: "What is your typical support response time for enterprise clients?",
    answer: "Our standard SLA guarantees initial engineer response within 2 business hours for general inquiries, with dedicated support options available for mission-critical infrastructure."
  },
  {
    question: "Are your infrastructure solutions ISO certified and compliant?",
    answer: "Yes, BCT Networks adheres to ISO 9001 (Quality Management) and ISO 27001 (Information Security) standards, ensuring reliable, high-quality, and secure enterprise deployments."
  },
  {
    question: "How do you handle multi-site or large-scale project implementations?",
    answer: "We manage end-to-end execution—from initial planning, cabling, and procurement to deployment, hardware configuration, testing, and ongoing maintenance for single or multi-location projects."
  }
];

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
    title: 'Trust & Reliability',
    desc: 'Core company values built on transparency, delivery, and uptime.',
    icon: ShieldCheck,
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 w-full relative text-[var(--text)] overflow-hidden" id="faq">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 min-[360px]:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <span className="w-6 h-[1px] bg-blue-500/50"></span>
            <span className="text-xs font-bold tracking-[0.18em] text-[var(--accent)] uppercase">Got Questions?</span>
            <span className="w-6 h-[1px] bg-blue-500/50"></span>
          </div>
          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Questions</span>
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto text-sm sm:text-base">
            Find answers to common questions about our infrastructure capabilities, deployment process, and service standards.
          </p>
        </motion.div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">

          {/* Left Column: Interactive FAQ Accordion (7 columns) */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-[var(--border-light)] rounded-2xl bg-[var(--surface)] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left gap-4 font-semibold text-sm sm:text-base hover:text-blue-400 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle size={18} className="text-blue-500 shrink-0" />
                      <span className="text-[var(--text)]">{faq.question}</span>
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[var(--muted)] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''
                        }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--border-light)]/50 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Why BCT & Certifications (5 columns) */}
          <div className="lg:col-span-5 space-y-6">


            {/* Certifications Card */}
            <div className="bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shrink-0">
                  <Award size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text)]">Trusted Standards & Recognition</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--bg-alt)] border border-[var(--border-light)]">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-[var(--text)]">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
