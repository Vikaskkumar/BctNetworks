import React from 'react';

export default function Footer() {
  const footerLinks = [
    {
      title: "Platform",
      links: ["IPTV Core", "OTT Delivery", "Mobile App", "Casting", "Digital Signage"]
    },
    {
      title: "Industries",
      links: ["Hospitality", "Healthcare", "Maritime", "Enterprise", "Stadiums"]
    },
    {
      title: "Company",
      links: ["About Us", "Customers", "News & Blog", "Careers", "Partners"]
    },
    {
      title: "Connect",
      links: ["Contact Sales", "Book a Demo", "Support Portal", "System Status", "Developer API"]
    }
  ];

  return (
    <footer className="relative bg-[#06060c] pt-24 pb-10 px-4 md:px-8 border-t border-purple-500/10 overflow-hidden font-sans">

      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">

          {/* Brand Column (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <div className="font-display font-bold text-3xl tracking-tight text-white mb-6 flex items-center gap-3">
              {/* Glowing Logo Mark */}
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-600 to-indigo-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
              Vardhman Tv
            </div>

            <p className="text-sm text-slate-400 mb-10 max-w-sm leading-relaxed">
              Next-generation technology for hospitality. The intelligent OTT platform behind every screen, every app, and every guest experience.
            </p>

            {/* Glassmorphic Location Pills */}
            <div className="flex flex-wrap gap-2 text-[10px] font-bold tracking-widest uppercase text-slate-400">
              {['London', 'New York', 'Dubai', 'Mumbai', 'Singapore'].map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 border border-purple-500/10 rounded-full bg-purple-500/5 backdrop-blur-md hover:bg-purple-500/15 hover:text-white transition-colors cursor-default"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx} className="lg:col-span-1">
              <h4 className="font-semibold text-white mb-6 text-xs tracking-widest uppercase opacity-85">
                {column.title}
              </h4>
              <ul className="space-y-4 text-sm text-slate-400">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="flex items-center group transition-all duration-300"
                    >
                      {/* Sliding arrow animation on hover */}
                      <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-purple-500 opacity-0 group-hover:opacity-100">
                        ›
                      </span>
                      <span className="group-hover:text-purple-300 group-hover:translate-x-1 transition-transform duration-300">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-purple-500/10 text-xs text-slate-500">
          <p>© 2026 Vardhman Tv Inc. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}