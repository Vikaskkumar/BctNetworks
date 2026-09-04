import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

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
    answer: "Our standard SLA guarantees initial engineer response within 2 business hours for general inquiries, with dedicated 24/7 support options available for mission-critical infrastructure."
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 w-full relative text-[var(--text)] bg-[var(--bg)] overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 min-[360px]:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <span className="w-6 h-[1px] bg-[var(--border)]"></span>
            <span className="text-xs font-bold tracking-[0.18em] text-[var(--muted)] uppercase">FAQ</span>
            <span className="w-6 h-[1px] bg-[var(--border)]"></span>
          </div>
          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[var(--muted)] max-w-lg mx-auto text-sm sm:text-base">
            Everything you need to know about our enterprise services, deployment process, and technical support.
          </p>
        </motion.div>

        {/* Clean Centered FAQ Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`border rounded-2xl bg-[var(--bg)] overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-[var(--text)] shadow-lg' : 'border-[var(--border)] hover:border-[var(--muted)]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left gap-4 font-semibold text-base sm:text-lg focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={20} className={`shrink-0 transition-colors ${isOpen ? 'text-[var(--text)]' : 'text-[var(--muted)]'}`} />
                    <span className={`transition-colors text-[var(--text)] ${isOpen ? 'font-bold' : ''}`}>
                      {faq.question}
                    </span>
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? 'bg-[var(--accent)] text-[var(--accent-text)]' : 'bg-transparent text-[var(--muted)]'
                  }`}>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[var(--muted)] leading-relaxed border-t border-[var(--border)] pt-4 pl-5 sm:pl-12">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
