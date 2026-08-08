import { motion } from 'framer-motion';
import { 
  Building2, 
  Hotel, 
  HeartPulse, 
  GraduationCap, 
  Factory, 
  Landmark, 
  ShoppingCart, 
  Wallet 
} from 'lucide-react';

const IndustriesServed = () => {
  const industries = [
    { name: 'Corporate Offices', icon: Building2, color: '#3B82F6', glow: 'rgba(59,130,246,0.3)', delay: 0 },
    { name: 'Hospitality', icon: Hotel, color: '#F59E0B', glow: 'rgba(245,158,11,0.3)', delay: 0.08 },
    { name: 'Healthcare', icon: HeartPulse, color: '#E51D25', glow: 'rgba(229,29,37,0.3)', delay: 0.16 },
    { name: 'Education', icon: GraduationCap, color: '#10B981', glow: 'rgba(16,185,129,0.3)', delay: 0.24 },
    { name: 'Manufacturing', icon: Factory, color: '#6366F1', glow: 'rgba(99,102,241,0.3)', delay: 0.32 },
    { name: 'Government', icon: Landmark, color: '#8B5CF6', glow: 'rgba(139,92,246,0.3)', delay: 0.40 },
    { name: 'Retail & Commercial', icon: ShoppingCart, color: '#EC4899', glow: 'rgba(236,72,153,0.3)', delay: 0.48 },
    { name: 'Banking & Finance', icon: Wallet, color: '#14B8A6', glow: 'rgba(20,184,166,0.3)', delay: 0.56 },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.85 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: 'spring', stiffness: 130, damping: 14 }
    }
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: [1, 1.25, 1.15],
      rotate: [0, -12, 12, 0],
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  };

  const glowPulse = {
    rest: { opacity: 0, scale: 0.8 },
    hover: {
      opacity: 1, scale: 1.4,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section 
      className="py-14 bg-slate-50 dark:bg-[#06091a] border-b border-gray-150 dark:border-slate-900 transition-colors duration-300 overflow-hidden relative" 
      id="industries"
    >
      {/* Soft ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,29,37,0.04)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(229,29,37,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Animated faint grid lines */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(rgba(100,100,100,1) 1px,transparent 1px),linear-gradient(90deg,rgba(100,100,100,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-[#E51D25] font-extrabold text-[11px] tracking-[0.25em] uppercase mb-2 block">
            SECTOR COVERAGE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            Industries We Serve
          </h2>
        </motion.div>

        {/* Industries Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="flex flex-col items-center justify-center text-center gap-5 cursor-pointer"
              >
                {/* Large Icon Box */}
                <motion.div
                  className="relative flex items-center justify-center w-36 h-36 rounded-3xl bg-white dark:bg-[#0b1020] border border-gray-200 dark:border-slate-800 overflow-hidden shadow-lg"
                  whileHover={{
                    borderColor: ind.color,
                    boxShadow: `0 20px 45px ${ind.glow}`,
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Glow pulse blob behind icon */}
                  <motion.div
                    variants={glowPulse}
                    className="absolute w-28 h-28 rounded-full blur-2xl pointer-events-none"
                    style={{ backgroundColor: ind.glow.replace('0.3)', '0.5)') }}
                  />

                  {/* Hover fill overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    whileHover={{ backgroundColor: `${ind.color}12` }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Bottom accent bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[3px] rounded-b-3xl"
                    style={{ backgroundColor: ind.color }}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%', transition: { duration: 0.3 } }}
                  />

                  {/* The Animated Icon */}
                  <motion.div variants={iconVariants} style={{ color: ind.color }}>
                    <Icon 
                      strokeWidth={1.1} 
                      className="w-20 h-20 drop-shadow-sm"
                      style={{ filter: `drop-shadow(0 0 6px ${ind.glow})` }}
                    />
                  </motion.div>
                </motion.div>
                
                {/* Industry Label */}
                <motion.h4
                  className="text-[11px] font-black text-gray-700 dark:text-slate-300 leading-tight tracking-wider uppercase max-w-[110px]"
                  whileHover={{ color: ind.color, transition: { duration: 0.2 } }}
                >
                  {ind.name}
                </motion.h4>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default IndustriesServed;