import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Shield, Wifi } from 'lucide-react';
import bgImage from '../assets/bgi9.jpg';

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
    className="relative min-h-[100dvh] md:min-h-[95vh] flex items-center justify-center pt-32 pb-12 md:pb-24 bg-[#050505] overflow-hidden"
    id="home"
  >
    {/* Background Image */}
    <img
      src={bgImage}
      alt="Network Infrastructure"
      className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
    />

    {/* Refined Gradient Overlay for contrast and depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/10 to-[#050505]/90 pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#050505]/60 pointer-events-none" />

    {/* Ambient Top Glow */}
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />



    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center">
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
          className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full bg-[#0C0D0F]/80 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)] cursor-default"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-gray-300 uppercase text-center">
            Enterprise Networking Solutions
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants} className="relative">
          {/* Subtle text shadow/glow behind the text */}
          <div className="absolute inset-0 blur-3xl bg-blue-500/10 -z-10 rounded-full transform scale-150" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.12] max-w-4xl mx-auto drop-shadow-2xl px-2">
            Network infrastructure <br className="hidden md:block" />
            built to scale with your{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 animate-gradient-x bg-[length:200%_auto]">
                business.
              </span>
              {/* Decorative underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-500/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4"
        >
          We design, deploy, secure, and manage enterprise networks that keep your business
          connected, protected, and operational — <span className="text-gray-200 font-medium">around the clock</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-14 md:mb-24 w-full sm:w-auto px-6"
        >
          <a
            href="#contact"
            className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white text-black font-bold tracking-wide transition-all hover:scale-105 active:scale-95 group overflow-hidden text-sm sm:text-base"
          >
            {/* Hover sweeping glow effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
            Talk to an Architect
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
          <a
            href="#solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#0C0D0F]/60 text-white font-semibold border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95 backdrop-blur-md text-sm sm:text-base"
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Stats Grid - Enhanced Glassmorphism */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-5xl mx-auto relative"
        >
          {/* Subtle glow behind stats */}
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-3xl" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                className="bg-black/40 p-4 sm:p-6 lg:p-10 text-center transition-colors cursor-default relative group"
              >
                {/* Hover gradient accent */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.p
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 + (i * 0.1), type: 'spring', stiffness: 100 }}
                  className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tighter text-white mb-1 sm:mb-2 relative z-10 drop-shadow-md"
                >
                  {m.value}
                </motion.p>
                <p className="text-[9px] sm:text-[11px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] relative z-10">
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