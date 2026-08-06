import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-16 pb-8 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Top Section: 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand & Tagline */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* Play Button Logo mimicking the reference image */}
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <svg
                  className="w-4 h-4 text-black translate-x-[1px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Vardhman Tv
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              All-in-one digital platform for IPTV, OTT, and hospitality solutions.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  24/7 Assistance
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  Status
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-slate-500">
            © 2026 Vardhman Tv. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}