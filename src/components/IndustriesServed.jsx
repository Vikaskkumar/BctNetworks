import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  Hotel,
  HeartPulse,
  GraduationCap,
} from "lucide-react";

const industries = [
  {
    name: "Corporate & Enterprise",
    icon: Building2,
    desc: "High-density Wi-Fi and zero-trust security for modern offices and tech campuses.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    bg: "#ffffff",
    text: "#111827",
    muted: "#4B5563",
  },
  {
    name: "Hospitality & Leisure",
    icon: Hotel,
    desc: "Seamless guest Wi-Fi, IPTV, and smart building automation for premium hotels.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    bg: "#E85D04",
    text: "#ffffff",
    muted: "#ffedd5",
  },
  {
    name: "Healthcare & Medical",
    icon: HeartPulse,
    desc: "Mission-critical network uptime and secure infrastructure for modern healthcare.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    bg: "#050505",
    text: "#ffffff",
    muted: "#9CA3AF",
  },
  {
    name: "Higher Education",
    icon: GraduationCap,
    desc: "Campus-wide connectivity and secure remote access for universities and schools.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80",
    bg: "#2563EB",
    text: "#ffffff",
    muted: "#BFDBFE",
  },
];

const IndustryCard = ({ item, index, progress }) => {
  const Icon = item.icon;

  // Each card gets a section of the scroll progress
  const start = index / industries.length;
  const end = (index + 1) / industries.length;

  // Card enters from right
  const x = useTransform(
    progress,
    [start, end],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"]
  );

  // Fade in
  const opacity = useTransform(
    progress,
    [start, start + 0.05, end],
    index === 0 ? [1, 1, 1] : [0, 1, 1]
  );

  // Slight zoom effect
  const scale = useTransform(
    progress,
    [start, end],
    index === 0 ? [1, 0.97] : [0.96, 1]
  );

  // Image zoom
  const imageScale = useTransform(
    progress,
    [start, end],
    [1.08, 1]
  );

  return (
    <motion.div
      style={{
        x,
        opacity,
        scale,
        zIndex: index + 1,
      }}
      className="absolute inset-0 flex items-center justify-center px-4 md:px-6"
    >
      <article
        className="relative flex h-[calc(100vh-190px)] min-h-[460px] max-h-[640px] w-full max-w-[1140px] overflow-hidden rounded-[28px] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.5)]"
        style={{ backgroundColor: item.bg }}
      >
        <div className="flex h-full w-full flex-col md:flex-row">
          {/* TEXT */}
          <div className="flex flex-1 flex-col justify-center p-7 sm:p-9 md:p-12 lg:p-14">
            <div
              className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{
                backgroundColor:
                  item.bg === "#ffffff"
                    ? "#F3F4F6"
                    : "rgba(255,255,255,0.15)",
              }}
            >
              <Icon
                size={25}
                strokeWidth={2.3}
                style={{ color: item.text }}
              />
            </div>

            <p
              className="mb-3 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: item.muted }}
            >
              0{index + 1} / Industry
            </p>

            <h3
              className="max-w-xl text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: item.text }}
            >
              {item.name}
            </h3>

            <p
              className="mt-5 max-w-lg text-sm leading-7 md:text-base"
              style={{ color: item.muted }}
            >
              {item.desc}
            </p>

            <div
              className="mt-7 text-sm font-semibold"
              style={{ color: item.text }}
            >
              Explore solutions →
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative h-[42%] w-full overflow-hidden md:h-full md:w-1/2">
            <motion.img
              src={item.image}
              alt={`${item.name} environment`}
              style={{ scale: imageScale }}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </article>
    </motion.div>
  );
};

const IndustriesServed = () => {
  const sectionRef = useRef(null);

  /*
    IMPORTANT:
    The section remains exactly 100vh.

    "start end"  = section enters viewport
    "end start"  = section leaves viewport

    This gives us scroll progress without making
    the section 400vh tall.
  */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative h-screen overflow-hidden bg-[#090909]"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[12%] top-[5%] h-[35vw] w-[35vw] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute -right-[12%] bottom-[5%] h-[35vw] w-[35vw] rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      {/* HEADER */}
      <div className="relative z-40 px-6 pt-16 text-center md:pt-20">
        <div className="mb-2 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-white/20" />

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            Sector Coverage
          </span>

          <span className="h-px w-8 bg-white/20" />
        </div>

        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Tailored networks for{" "}
          <span className="text-white/40">
            demanding environments.
          </span>
        </h2>
      </div>

      {/* CARDS */}
      <div className="relative mt-6 h-[calc(100vh-190px)]">
        {industries.map((item, index) => (
          <IndustryCard
            key={item.name}
            item={item}
            index={index}
            progress={scrollYProgress}
          />
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-2">
        {industries.map((_, index) => (
          <div
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-white/40"
          />
        ))}
      </div>
    </section>
  );
};

export default IndustriesServed;