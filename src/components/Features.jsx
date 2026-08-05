import React from 'react';

export default function Features() {
  const features = [
    {
      num: "01",
      title: "Built for hospitality, from day one.",
      desc: "Engineering the systems that run hotels, hospitals, cruise ships and stadiums... every screen, every room, every guest.",
      aurora: "bg-purple-600",
      borderHover: "hover:border-purple-500/30 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]",
      iconColor: "text-purple-400",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Global by default.",
      desc: "Local in 100+ cities. Operating centers in Dubai, Riyadh, Dallas, Singapore, and London. We design for local fit, everywhere.",
      aurora: "bg-violet-600",
      borderHover: "hover:border-violet-500/30 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)]",
      iconColor: "text-violet-400",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Carrier-class infrastructure.",
      desc: "99.99% uptime SLA. SOC 2. ISO 27001. Designed for thousands of rooms, hundreds of properties, and seamlessly operating hotels.",
      aurora: "bg-indigo-600",
      borderHover: "hover:border-indigo-500/30 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]",
      iconColor: "text-indigo-400",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white rounded-[2.5rem] py-24 px-6 md:px-12 text-[#06060c] mx-4 md:mx-8 shadow-2xl relative overflow-hidden z-10 my-16 font-sans">
      <div className="max-w-7xl mx-auto text-center">

        {/* Minimalist Header */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-[1px] w-8 bg-black/10"></div>
          <p className="text-xs tracking-widest text-[#06060c]/50 uppercase font-bold">
            The Platform
          </p>
          <div className="h-[1px] w-8 bg-black/10"></div>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[#06060c] mb-20 max-w-3xl mx-auto leading-tight">
          The engine behind the world's hospitality.
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
          {features.map((card, i) => (
            <div
              key={i}
              className={`group relative bg-[#0c0a1a] p-10 rounded-[2rem] border border-purple-500/10 transition-all duration-500 overflow-hidden cursor-default ${card.borderHover} hover:-translate-y-2 shadow-lg`}
            >

              {/* Vibrant Aurora Hover Glow */}
              <div className={`absolute -top-32 -right-32 w-80 h-80 rounded-full ${card.aurora} blur-[120px] opacity-0 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none`}></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Header: Icon & Number */}
                <div className="flex justify-between items-start mb-12">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors ${card.iconColor}`}>
                    {card.icon}
                  </div>
                  <span className="text-5xl font-display font-extrabold text-white/5 group-hover:text-white/10 transition-colors select-none">
                    {card.num}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {card.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}