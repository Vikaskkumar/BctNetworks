import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import bgVideo from '../assets/bgvideo.mp4';

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
  hidden: { opacity: 0, y: 25, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
};

const Hero = () => (
  <section
    className="relative w-full min-h-[100dvh] md:min-h-[95vh] flex items-center justify-center pt-28 pb-12 md:pb-24 bg-[var(--bg)] overflow-hidden"
    id="home"
  >
    {/* Ambient Background Base */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-[var(--bg)] to-[var(--bg)] dark:from-[#3B82F6]/5 dark:via-[var(--bg)] dark:to-[var(--bg)] pointer-events-none" />

    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-15 dark:opacity-40 pointer-events-none scale-[1.05] mix-blend-multiply dark:mix-blend-screen dark:contrast-125"
      style={{ filter: 'saturate(1.2)' }}
    >
      <source src={bgVideo} type="video/mp4" />
    </video>

    {/* Smooth Fade Overlays */}
    <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/90 via-transparent to-[var(--bg)] pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[var(--bg)]/50 to-[var(--bg)]/90 pointer-events-none" />

    {/* Ethereal Glows (Light & Dark) */}
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] md:w-[900px] h-[300px] sm:h-[500px] md:h-[600px] bg-indigo-500/10 dark:bg-blue-500/15 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none dark:mix-blend-screen" />
    <div className="hidden dark:block absolute top-1/4 -right-40 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none mix-blend-screen" />
    <div className="hidden dark:block absolute bottom-0 -left-40 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* Eyebrow Badge */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="inline-flex items-center gap-2.5 mb-6 sm:mb-8 px-4 py-1.5 rounded-full bg-white/60 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 backdrop-blur-xl shadow-sm shadow-blue-900/5 dark:shadow-[0_0_20px_rgba(59,130,246,0.15)] cursor-default transition-all"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-cyan-400"></span>
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-blue-700 dark:text-cyan-300 uppercase text-center">
            Enterprise Networking Solutions
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants} className="relative w-full max-w-5xl">
          <div className="absolute inset-0 blur-3xl bg-blue-400/10 dark:bg-blue-500/20 -z-10 rounded-full transform scale-125" />
          <h1 className="text-2xl min-[360px]:text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-extrabold tracking-tighter text-[var(--text)] mb-6 leading-[1.15] sm:leading-[1.1] mx-auto drop-shadow-sm px-2">
            Jaipur's most trusted  <br className="hidden md:block" />
            Network infrastructure{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300 animate-gradient-x bg-[length:200%_auto]">
                partner.
              </span>
              {/* Decorative underline */}
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-blue-500/40 dark:text-cyan-400/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
        </motion.div>

        {/* Services List */}
        <motion.h3
          variants={itemVariants}
          className="text-sm min-[360px]:text-base sm:text-lg md:text-xl font-bold tracking-[0.15em] text-blue-600 dark:text-cyan-400 uppercase mt-4 mb-8 sm:mb-10 max-w-3xl mx-auto drop-shadow-sm"
        >
          CCTV <span className="opacity-40 mx-2 sm:mx-3 text-[var(--text)]">|</span> Networking <span className="opacity-40 mx-2 sm:mx-3 text-[var(--text)]">|</span> IT Infrastructure
        </motion.h3>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4"
        >
          We design, deploy, secure, and manage enterprise networks that keep your business
          connected, protected, and operational — <span className="text-[var(--text)] font-semibold">around the clock</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14 md:mb-24 w-full max-w-[320px] sm:max-w-none mx-auto px-4 sm:px-0"
        >
          <a
            href="#contact"
            className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-b from-gray-900 to-black dark:from-white dark:to-gray-200 text-white dark:text-black font-bold tracking-wide transition-all hover:scale-[1.02] active:scale-95 group overflow-hidden text-sm sm:text-base shadow-xl shadow-blue-900/10 dark:shadow-[0_0_30px_rgba(255,255,255,0.15)] ring-1 ring-gray-900/5 dark:ring-white/50"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-black/10 to-transparent" />
            Contact us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full bg-white/50 dark:bg-black/30 backdrop-blur-xl text-[var(--text)] font-semibold border border-gray-200 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-cyan-500/40 hover:bg-white/80 dark:hover:bg-white/5 transition-all hover:scale-[1.02] active:scale-95 text-sm sm:text-base shadow-sm dark:shadow-[0_0_15px_rgba(0,0,0,0.3)]"
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Premium Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-5xl mx-auto relative px-2 sm:px-0"
        >
          {/* Subtle glow behind stats */}
          <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 blur-3xl rounded-[2.5rem]" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-[2rem] overflow-hidden backdrop-blur-2xl shadow-2xl shadow-[var(--accent-glow)]">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                className="bg-[var(--surface)] p-5 sm:p-8 lg:p-10 text-center transition-all duration-300 hover:bg-[var(--surface-2)] cursor-default relative group"
              >
                {/* Hover Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.h4
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 + (i * 0.1), type: 'spring', stiffness: 100 }}
                  className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tighter text-[var(--text)] mb-2 relative z-10"
                >
                  {m.value}
                </motion.h4>
                <p className="text-[10px] sm:text-xs font-bold text-[var(--muted)] uppercase tracking-[0.15em] sm:tracking-[0.2em] relative z-10">
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