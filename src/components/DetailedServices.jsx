import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Network, Video, Building, Server,
  ShieldCheck, Cable, MessageSquare,
  Flame, MonitorPlay, CheckCircle2, ArrowRight
} from 'lucide-react';
import bgnew2 from '../assets/newbg2.jpg';

const servicesData = [
  {
    id: 1,
    title: 'Enterprise Network',
    tagline: 'Secure, Scalable Connectivity',
    description: 'An enterprise network serves as a secure communication infrastructure that links computers and associated devices within different departments and workgroup networks. This network enables convenient access to information and knowledge from any location and in various formats. By streamlining communication protocols and utilizing integrated tools like messaging, virtual meetings, teamwork, email, internet access, data sharing, video monitoring, access management, public announcements and audio-visual systems, an enterprise network simplifies operations. We provide resilient, trustworthy, and redundant integrated wired and wireless network solutions tailored to the needs of all market sectors.',
    features: ['High-Availability Architecture', 'End-to-End Encryption Protocols', 'Seamless Multi-Site Connectivity', 'Automated Threat Management'],
    icon: <Network className="w-8 h-8 text-blue-400" />,
    image: bgnew2
  },
  {
    id: 2,
    title: 'Telepresence & Collaboration',
    tagline: 'Bridging the Global Divide',
    description: 'Today\'s global business environment requires the involvement of people from multiple locations. Enhanced video telephony, along with efficient interactive tools are the key to reducing overheads, improving efficiency, and saving time spent on travel for collaborating with a group of people across the globe. This technology allows people to arrange instant or scheduled meetings, communicate via rich video, share files and media, and annotate. Tele-education and Tele-medicine are the best examples of telepresence and collaboration.',
    features: ['4K Video Conferencing', 'Interactive Whiteboarding', 'Real-Time File Annotation', 'Cross-Platform Integration'],
    icon: <Video className="w-8 h-8 text-fuchsia-400" />,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2560&q=80'
  },
  {
    id: 3,
    title: 'Building Automation',
    tagline: 'Intelligent Infrastructure',
    description: 'Building Automation, powered by Building Management Systems (BMS), is a multifaceted solution that significantly advances sustainability, cost-effectiveness, safety, and convenience in building management. Through centralized control and monitoring, BMS optimizes various systems, reduces energy expenses, and enhances security and environmental friendliness. It\'s a cornerstone for aligning with eco-friendly initiatives and ensuring a healthier, more efficient built environment while prioritizing the convenience of both building managers and occupants.',
    features: ['HVAC & Lighting Control', 'IoT Sensor Integration', 'Predictive Maintenance Alerts', 'Energy Analytics'],
    icon: <Building className="w-8 h-8 text-emerald-400" />,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2560&q=80'
  },
  {
    id: 4,
    title: 'Server & Storage',
    tagline: 'Robust Backbone for Data',
    description: 'In today\'s highly competitive market, timely access to organizational data across different business processes is absolutely crucial. To support the seamless operation of centralized applications such as ERP, email systems, payroll management, automation, security surveillance systems and the storage of relevant data as a business expands, efficient, scalable, and redundant physical or virtual server and storage solutions are indispensable. By implementing a unified server and storage solution, an organization can significantly enhance its performance and successfully attain its business objectives.',
    features: ['High-Performance NVMe', 'Virtualization Ready', 'Automated Disaster Recovery', 'Scalable Topology'],
    icon: <Server className="w-8 h-8 text-orange-400" />,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2560&q=80'
  },
  {
    id: 5,
    title: 'Security & Surveillance',
    tagline: 'Comprehensive Mitigation',
    description: 'In today\'s highly competitive market, having immediate access to organizational data across various business processes is of utmost importance. To enable the successful deployment of centralized applications such as ERP, email systems, payroll processing, automation, security surveillance systems, and the storage of relevant data to meet the increasing demands of a growing business, it is essential to have efficient, scalable, and redundant physical or virtual server and storage infrastructure. The implementation of a Unified Server and Storage solution offers a path to enhancing an organization\'s performance and reaching its business objectives.',
    features: ['AI-Powered Threat Detection', 'IP-Based CCTV Networks', 'Biometric Access Control', 'Centralized Dashboards'],
    icon: <ShieldCheck className="w-8 h-8 text-red-400" />,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=2560&q=80'
  },
  {
    id: 6,
    title: 'Structure Cabling System',
    tagline: 'The Foundation of Connectivity',
    description: 'In today\'s rapidly evolving business landscape, businesses of all sizes require a unified network that is agile, robust, redundant, and scalable. To support such networks and applications, a passive network is essential. We are experts in building structured cabling system supported by copper and fiber transmission media to meet the demands of modern businesses.',
    features: ['CAT6A & CAT8 Copper', 'High-Density Fiber Optics', 'Certified Fluke Testing', 'Future-Proof Design'],
    icon: <Cable className="w-8 h-8 text-indigo-400" />,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2560&q=80'
  },
  {
    id: 7,
    title: 'Unified Communication',
    tagline: 'Omni-Channel Workflows',
    description: 'Unified Communications (UC) is a term that encompasses various communication mediums, such as Presence-Based Voice and Video Communications, Mobility and Instant Messaging, Fax, and Voice Mail, all under one umbrella. Utilizing UC technology can help improve efficiency, reduce costs, and increase revenue, ultimately leading to enhanced customer service and satisfaction. We have a proven track record of deploying Unified Communication Systems across all market segments, including standalone and complex multi-location networked systems.',
    features: ['Enterprise VoIP & IP-PBX', 'Presence-Based Routing', 'Mobile Workforce Integration', 'Unified Messaging'],
    icon: <MessageSquare className="w-8 h-8 text-sky-400" />,
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=2560&q=80'
  },
  {
    id: 8,
    title: 'Fire & Safety',
    tagline: 'Proactive Life & Asset Protection',
    description: 'Ensuring the safety of both people and infrastructure remains the foremost concern for a wide range of sectors, including private businesses, public establishments, and government entities such as offices, industries, warehouses, hospitality venues, retail spaces, and data centres. The fundamental requirement in averting potential dangers and safeguarding human lives and property is the installation of fire detection and suppression systems. We offer comprehensive solutions for fire detection and gas suppression, coupled with the seamless integration of voice evacuation, access control, and building automation. These solutions are user-friendly and highly responsive to any critical incidents, providing professional safety measures for various environments.',
    features: ['Addressable Fire Panels', 'Clean Agent Gas Suppression', 'Automated Voice Evacuation', '24/7 Monitoring'],
    icon: <Flame className="w-8 h-8 text-orange-500" />,
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=2560&q=80'
  },
  {
    id: 9,
    title: 'Audio Visual',
    tagline: 'Immersive Display Tech',
    description: 'The term "Audio Visual" encompasses a broad range of technologies aimed at integrating and automating sound, lighting, display, and projection systems across various sectors such as business, education, healthcare, entertainment, hospitality, restaurants, retail, government, and the military. These AV systems find applications in collaborative conferencing, which includes audio conferencing, video conferencing, web conferencing, chairman and delegation systems, as well as digital signage. They are extensively utilized in settings like boardrooms, meeting rooms, auditoriums, lecture halls, command and control centres, theatres, outdoor venues, and more. We specialize in the integration of professional AV solutions tailored to meet the diverse needs of different applications and market domains.',
    features: ['Acoustic Treatment', 'Video Wall & Digital Signage', 'Auditorium Control', 'Broadcast Audio Systems'],
    icon: <MonitorPlay className="w-8 h-8 text-violet-400" />,
    image: 'https://images.unsplash.com/photo-1470229722913-7c092bbdd335?auto=format&fit=crop&w=2560&q=80'
  }
];

const ServiceSection = ({ service, index, setActiveIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-45% 0px -45% 0px' });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 py-20"
    >
      <div className={`max-w-7xl w-full mx-auto flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 flex-1 w-full max-w-2xl bg-slate-950/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_30px_80px_rgba(2,6,23,0.7)]"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/10 shadow-inner mb-8">
            {service.icon}
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {service.title}
          </h2>
          <p className="text-xl text-blue-400 font-medium mb-6">{service.tagline}</p>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">{service.description}</p>


        </motion.div>

        <div className="flex-1 hidden lg:block" />
      </div>
    </section>
  );
};

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = servicesData[activeIndex] ?? servicesData[0];

  useEffect(() => {
    servicesData.forEach((service) => {
      const img = new Image();
      img.src = service.image;
    });
  }, []);

  return (
    <div className="relative isolate overflow-hidden text-slate-50 font-sans selection:bg-blue-500/30">
      <div className="pointer-events-none fixed inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, scale: 1.12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1.06, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.12, filter: 'blur(8px)' }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${activeService.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-slate-950/30" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.78),rgba(2,6,23,0.52),rgba(2,6,23,0.72))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_45%)]" />
      </div>

      <div className="relative z-10 flex flex-col">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 border border-white/10 backdrop-blur-md mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-slate-300 uppercase">Enterprise Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Next-Gen Infrastructure.
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed">
              Delivering secure, scalable, and fully integrated enterprise solutions across networking, automation, and communications.
            </p>
          </motion.div>

          <motion.div
            className="absolute bottom-12 flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs font-semibold tracking-widest text-white uppercase shadow-black drop-shadow-md">Scroll to Explore</span>
            <div className="w-[2px] h-12 bg-gradient-to-b from-white to-transparent rounded-full" />
          </motion.div>
        </section>

        <div className="pb-32">
          {servicesData.map((service, index) => (
            <ServiceSection
              key={service.id}
              service={service}
              index={index}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}