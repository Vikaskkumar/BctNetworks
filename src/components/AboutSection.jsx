import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Activity, ArrowRight, Server, Network } from 'lucide-react';
import { useRef } from 'react';

const feats = [
  {
    icon: Shield,
    title: 'Secure Deployments',
    sub: 'Zero-trust architecture by design'
  },
  {
    icon: Activity,
    title: 'Always-on Infrastructure',
    sub: 'Built for 99.9% uptime with 24/7 NOC'
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const imageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.4 }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 1, ease: [0.25, 1, 0.5, 1] }
  }
};

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityGradient = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 lg:py-32 bg-[#050505] text-white overflow-hidden relative"
      id="about"
    >
      {/* Dynamic Background Elements */}
      <motion.div 
        style={{ opacity: opacityGradient }}
        className="absolute top-0 left-1/4 -translate-x-1/2 w-[300px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[600px] lg:h-[800px] bg-blue-600/10 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto px-4 min-[360px]:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col relative z-20"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="w-10 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-blue-400 uppercase">
              About BCT Networks
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="overflow-hidden">
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.15]">
              Jaipur's most trusted <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 animate-gradient-x bg-[length:200%_auto]">
                infrastructure partner.
              </span>
            </h2>
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 leading-relaxed max-w-xl">
            BCT Networks delivers enterprise networking, cybersecurity, audio-visual systems, structured cabling,
            and building automation — engineered for scale, built for reliability.
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {feats.map(({ icon: Icon, title, sub }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex flex-col gap-3 p-4 sm:p-6 rounded-2xl bg-[#0C0D0F]/80 backdrop-blur-sm border border-white/5 transition-colors cursor-pointer group shadow-xl shadow-black/20"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400 transition-colors">
                  <Icon size={22} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-bold text-gray-100 tracking-tight mb-1">{title}</p>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-black font-bold tracking-wide hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 group shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] text-sm sm:text-base w-full sm:w-auto"
            >
              Work With Us
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Animated Image Grid with Parallax */}
        <motion.div
          variants={imageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 h-auto min-h-[340px] sm:h-[400px] md:h-[600px] items-center overflow-hidden"
        >
          {/* Decorative background grid behind images */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay rounded-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/5 rounded-full animate-[spin_60s_linear_infinite] opacity-20 pointer-events-none" />

          {/* Left Column Image (Moves Up) */}
          <motion.div
            variants={imageVariants}
            style={{ y: y1 }}
            className="col-span-1 flex flex-col gap-6"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-[250px] md:h-[350px] group"
            >
              <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=60"
                alt="Server Room"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
            
            {/* Floating abstract element */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="ml-auto w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg"
            >
              <Network className="text-cyan-400" size={32} />
            </motion.div>
          </motion.div>

          {/* Right Column Image (Moves Down) */}
          <motion.div
            variants={imageVariants}
            style={{ y: y2 }}
            className="col-span-1 flex flex-col gap-6 -mt-16 md:-mt-32"
          >
            {/* Floating abstract element */}
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="mr-auto w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-emerald-500/10 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg z-20 relative"
            >
              <Server className="text-blue-400" size={28} />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-[250px] md:h-[400px] group"
            >
              <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=60"
                alt="Network Infrastructure"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;