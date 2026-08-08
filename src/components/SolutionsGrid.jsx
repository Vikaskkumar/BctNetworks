import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, MapPin, ArrowRight } from 'lucide-react';
import networkingBg from '../assets/networking.jpg';

const SolutionsGrid = ({ onNavigate }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      name: 'Network Security',
      fullName: 'Firewall & Cyber Security',
      desc: 'Simplify and strengthen network security with integrated zero touch, zero trust access security.',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Wireless Access',
      fullName: 'Enterprise Networking',
      desc: 'High performance 6 GHz Wi-Fi portfolio for an always-on, indoor and outdoor experience.',
      imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Wired Access',
      fullName: 'Structured Cabling System',
      desc: 'Broad edge-core portfolio with consistent operations and free fabric with purchase.',
      imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Cloud Networking',
      fullName: 'Unified Communication',
      desc: 'Unified management with AI for wired, wireless, SD-WAN, and security operations.',
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Audio Visual',
      fullName: 'Audio Visual Systems',
      desc: 'Commercial LED video walls & Dante PA paging for enterprise collaboration.',
      imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Surveillance',
      fullName: 'Security & Surveillance',
      desc: 'AI 4K IP CCTV cameras & biometric access gates for complete physical security.',
      imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Fire & Safety',
      fullName: 'Fire & Safety Systems',
      desc: 'Addressable fire alarms & VESDA air sampling for early detection.',
      imageUrl: 'https://images.unsplash.com/photo-1582131503261-f28d81515150?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Server & Storage',
      fullName: 'Server & Storage Solutions',
      desc: 'Blade server compute & NVMe SAN storage arrays for heavy workloads.',
      imageUrl: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=400&auto=format&fit=crop'
    },
  ];

  const mapSolutionToCategory = (name) => {
    const n = name.toLowerCase();
    if (n.includes('cabling') || n.includes('wired')) return 'cabling';
    if (n.includes('networking') || n.includes('wireless')) return 'enterprise-networking';
    if (n.includes('security') && n.includes('surveillance')) return 'security';
    if (n.includes('firewall') || n.includes('cyber') || n.includes('security')) return 'security';
    if (n.includes('collaboration') || n.includes('communication') || n.includes('cloud')) return 'unified-comm';
    if (n.includes('audio') || n.includes('visual')) return 'telepresence';
    if (n.includes('server') || n.includes('storage')) return 'server-storage';
    if (n.includes('fire') || n.includes('safety')) return 'fire-safety';
    return 'all';
  };

  const visibleSolutions = isExpanded ? solutions : solutions.slice(0, 4);

  return (
    <section
      className="py-12 lg:py-16 text-white overflow-hidden relative transition-colors duration-300 selection:bg-[#E51D25] selection:text-white min-h-screen flex flex-col justify-center"
      id="solutions"
      style={{
        backgroundImage: `url(${networkingBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      {/* Subtle radial color tint on top of overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-purple-900/30 via-blue-900/20 to-purple-900/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Compact Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-extrabold text-[11px] tracking-[0.2em] uppercase mb-4 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-[#E51D25] animate-bounce" />
            <span>ENTERPRISE SERVICES IN JAIPUR & RAJASTHAN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Jaipur Scale. Unified Technology.<br /> Certified Integration.
          </h2>
        </div>

        {/* Animated Cards Grid */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <AnimatePresence>
            {visibleSolutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                layout
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.92, rotateX: 8 },
                  visible: {
                    opacity: 1, y: 0, scale: 1, rotateX: 0,
                    transition: { type: 'spring', stiffness: 100, damping: 15, delay: index * 0.07 }
                  }
                }}
                whileHover={{ y: -10, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                onClick={() => onNavigate && onNavigate('solutions', mapSolutionToCategory(solution.fullName))}
                className="group relative rounded-2xl cursor-pointer overflow-hidden flex flex-col h-[460px]"
                style={{ perspective: 800 }}
              >
                {/* Glassmorphism base */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 group-hover:border-white/50 transition-all duration-400" />

                {/* Animated glow border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: '0 0 40px 2px rgba(139,92,246,0.4), inset 0 0 30px rgba(139,92,246,0.15)' }}
                />

                {/* Shimmer sweep on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none z-20" />

                {/* Background image with zoom */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <img
                    src={solution.imageUrl}
                    alt={solution.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 scale-100 group-hover:scale-110"
                  />
                  {/* Dark scrim so text is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                </div>

                {/* Content sits at bottom */}
                <div className="relative z-10 mt-auto p-6">
                  <h3 className="text-lg font-black text-white tracking-tight mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {solution.name}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed mb-4 line-clamp-2">
                    {solution.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-purple-400 group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
                    <span>Explore</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Top accent pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[10px] font-bold text-white/80 uppercase tracking-wider">
                    Enterprise
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Toggle Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-2.5 bg-white/5 border border-white/10 text-white hover:bg-white/10 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 backdrop-blur-sm"
          >
            <span>{isExpanded ? 'Show Less Solutions' : 'Show More Solutions'}</span>
            <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;