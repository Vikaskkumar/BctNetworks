import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Shield, Wifi } from 'lucide-react';
import bgImage from '../assets/bgi4.jfif';

const metrics = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '99.9%', label: 'Network Uptime' },
  { value: '20+', label: 'Enterprise Clients' },
  { value: '24/7', label: 'NOC Support' },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
};

const floatingElementVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Hero = () => (
  <section
    className="relative w-full min-h-[100dvh] md:min-h-[95vh] flex items-center justify-center pt-28 pb-12 md:pb-24 bg-[var(--bg)] overflow-hidden"
    id="home"
  >
    {/* Background Image */}
    <img
      src={bgImage}
      alt="Network Infrastructure"
      loading="eager"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none scale-[1.08]"
      style={{ filter: 'saturate(0.8) contrast(1.1)' }}
    />

    {/* Refined Gradient Overlay for contrast and depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/40 via-[var(--bg)]/10 to-[var(--bg)]/90 pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[var(--bg)]/60 pointer-events-none" />

    {/* Ambient Top Glow */}
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[500px] md:h-[600px] bg-blue-600/20 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none mix-blend-screen" />

    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* Eyebrow Badge */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2.5 mb-6 sm:mb-8 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md cursor-default"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-blue-600 dark:text-blue-400 uppercase text-center">
            Enterprise Networking Solutions
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants} className="relative">
          {/* Subtle text shadow/glow behind the text */}
          <div className="absolute inset-0 blur-3xl bg-blue-500/10 -z-10 rounded-full transform scale-150" />
          <h1 className="text-2xl min-[360px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[var(--text)] mb-4 sm:mb-6 leading-[1.18] sm:leading-[1.12] max-w-4xl mx-auto drop-shadow-sm px-2">
            Network infrastructure <br className="hidden md:block" />
            built to scale with your{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 dark:from-blue-400 dark:via-cyan-300 dark:to-emerald-400 animate-gradient-x bg-[length:200%_auto]">
                business.
              </span>
              {/* Decorative underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-500/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-xs min-[360px]:text-sm sm:text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-3"
        >
          We design, deploy, secure, and manage enterprise networks that keep your business
          connected, protected, and operational — <span className="text-[var(--text)] font-medium">around the clock</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-10 sm:mb-14 md:mb-24 w-full max-w-[420px] sm:max-w-none px-0 sm:px-6"
        >
          <a
            href="#contact"
            className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[var(--text)] text-[var(--bg)] font-bold tracking-wide transition-all hover:scale-105 active:scale-95 group overflow-hidden text-sm sm:text-base"
          >
            {/* Hover sweeping glow effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            Contact us
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
          <a
            href="#solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[var(--surface)]/60 text-[var(--text)] font-semibold border border-[var(--border)] hover:bg-[var(--border-light)] hover:border-[var(--border)] transition-all hover:scale-105 active:scale-95 backdrop-blur-md text-sm sm:text-base"
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Stats Grid - Enhanced Glassmorphism */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-[420px] sm:max-w-5xl mx-auto relative"
        >
          {/* Subtle glow behind stats */}
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-3xl" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-xl shadow-xl">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: 'var(--surface-2)' }}
                className="bg-[var(--surface)] p-3 min-[360px]:p-4 sm:p-6 lg:p-10 text-center transition-colors cursor-default relative group"
              >
                {/* Hover gradient accent */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.h4
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 + (i * 0.1), type: 'spring', stiffness: 100 }}
                  className="text-lg min-[360px]:text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tighter text-[var(--text)] mb-1 sm:mb-2 relative z-10"
                >
                  {m.value}
                </motion.h4>
                <p className="text-[9px] min-[360px]:text-[10px] sm:text-[11px] md:text-xs font-bold text-[var(--muted)] uppercase tracking-[0.15em] sm:tracking-[0.2em] relative z-10">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;