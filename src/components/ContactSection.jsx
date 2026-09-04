import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, CheckCircle2, Send, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const updateForm = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Simulate a network request for a more realistic button state
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' }); // Reset form
    }, 800);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section
      className="py-12 md:py-24 text-[var(--text)] bg-[var(--bg)] relative overflow-hidden w-full"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 min-[360px]:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <span className="w-6 h-[1px] bg-[var(--border)]"></span>
            <span className="text-xs font-bold tracking-[0.15em] text-[var(--muted)] uppercase">Get In Touch</span>
            <span className="w-6 h-[1px] bg-[var(--border)]"></span>
          </div>
          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Let's build your network.
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto text-sm sm:text-lg px-2">
            Tell us about your project. Our engineers will respond within 2 business hours.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-5xl mx-auto"
        >
          {/* Left Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[var(--bg-alt)] border border-[var(--border)] rounded-2xl p-4 min-[360px]:p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-12 flex flex-col items-center justify-center h-full min-h-[320px]"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--border)] flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text)] mb-2 tracking-tight">Requirements Received!</h3>
                  <p className="text-[var(--muted)] mb-8 max-w-sm">
                    Thank you. A network architect from our Jaipur office will reach out shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-text)] font-semibold hover:opacity-90 transition-all active:scale-95"
                  >
                    Submit Another Request <ArrowRight size={16} />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h3 className="text-xl font-bold text-[var(--text)] tracking-tight mb-6">Request a Quote</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={form.name}
                      onChange={updateForm('name')}
                      className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder-[var(--muted)] px-4 py-3.5 focus:outline-none focus:border-[var(--accent)] transition-all shadow-inner"
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={form.email}
                      onChange={updateForm('email')}
                      className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder-[var(--muted)] px-4 py-3.5 focus:outline-none focus:border-[var(--accent)] transition-all shadow-inner"
                    />
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Describe your network requirements..."
                    value={form.message}
                    onChange={updateForm('message')}
                    className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder-[var(--muted)] px-4 py-3.5 focus:outline-none focus:border-[var(--accent)] transition-all resize-none shadow-inner"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl btn-primary font-bold hover:scale-[1.01] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 group"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Requirements'}
                    {!isSubmitting && <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[var(--bg-alt)] border border-[var(--border)] rounded-2xl p-5 sm:p-8 lg:p-10 flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-[var(--text)] tracking-tight mb-8">Direct Contact</h3>

            <div className="space-y-6 mb-auto">
              {[
                { icon: MapPin, text: '67/30, Sector 6, Pratap Nagar, Jaipur — 302033', isLink: false },
                { icon: Phone, text: '+91 9116141401', href: 'tel:+919116141401', isLink: true },
                { icon: Mail, text: 'Sales@bctnetworks.in', href: 'mailto:Sales@bctnetworks.in', isLink: true },
              ].map(({ icon: Icon, text, href, isLink }, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--text)] transition-colors">
                    <Icon size={18} className="text-[var(--muted)] group-hover:text-[var(--text)] transition-colors" />
                  </div>
                  <div className="mt-2.5">
                    {isLink ? (
                      <a href={href} className="text-[15px] text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                        {text}
                      </a>
                    ) : (
                      <span className="text-[15px] text-[var(--muted)] leading-relaxed">
                        {text}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response Time Indicator */}
            <div className="pt-8 mt-8 border-t border-[var(--border)]">
              <p className="text-[11px] font-bold text-[var(--muted)] tracking-widest uppercase mb-2">
                Response Time
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <p className="text-sm text-[var(--muted)]">
                  Typically within <span className="font-semibold text-[var(--text)]">2 business hours</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;