import {
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import BctLogo from './BctLogo';

const LinkedinIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const FacebookIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z" />
  </svg>
);

const InstagramIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = ({ onNavigate = () => { } }) => {
  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    onNavigate(pageId);
  };

  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Industries', id: 'industries' },
    { name: 'Projects', id: 'projects' },
    { name: 'Partners', id: 'partners' },
    { name: 'Resources', id: 'resources' },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <footer className="bg-[#090d16] pt-12 pb-6 border-t border-slate-900 text-slate-400 text-xs transition-colors duration-300" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-10 border-b border-slate-900">

          {/* Column 1: Brand Logo, Tagline & Social Links (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="inline-block cursor-pointer">
              <BctLogo />
            </a>
            <p className="text-[11px] leading-relaxed max-w-sm text-slate-500 font-medium">
              Jaipur-based technology integrator deploying future-proof networks, unified collaboration suites, life safety fire control, and data systems.
            </p>
            {/* Minimal Social Links */}
            <div className="flex items-center gap-2 mt-2">
              {[
                { label: 'LinkedIn', icon: LinkedinIcon },
                { label: 'Facebook', icon: FacebookIcon },
                { label: 'Instagram', icon: InstagramIcon }
              ].map((social) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="w-7 h-7 rounded-lg border border-slate-900 bg-slate-950/50 flex items-center justify-center text-slate-500 hover:text-white hover:border-[#E51D25] hover:bg-[#E51D25] transition-all duration-300"
                  >
                    <SocialIcon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Solutions Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-white text-[10px] font-black tracking-[0.2em] uppercase mb-4">
              SOLUTIONS
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-[11px]">
              {[
                'Structured Cabling',
                'Enterprise Networking',
                'Firewall & Cyber Security',
                'Audio Visual Systems',
                'Security & Surveillance',
                'Building Automation & BMS',
                'UPS & Backups'
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#solutions"
                    onClick={(e) => handleNavClick(e, 'solutions')}
                    className="hover:text-white hover:underline transition-colors font-semibold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation Links (2 cols) */}
          <div className="md:col-span-2">
            <h4 className="text-white text-[10px] font-black tracking-[0.2em] uppercase mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-[11px]">
              {quickLinks.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="hover:text-white hover:underline transition-colors font-semibold"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Simplified Direct Contact Details (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white text-[10px] font-black tracking-[0.2em] uppercase">
              CONTACT INFO
            </h4>
            <ul className="space-y-3 text-[11px]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#E51D25] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed font-semibold">
                  67/30, Sector 6, Pratap Nagar, Jaipur - 302033
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#E51D25] flex-shrink-0" />
                <a href="tel:+9116141401" className="hover:text-white font-semibold transition-colors">
                  +9116141401
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#E51D25] flex-shrink-0" />
                <a href="mailto:Sales@bctnetworks.in" className="hover:text-white font-semibold transition-colors">
                  Sales@bctnetworks.in
                </a>
              </li>
            </ul>

            {/* Compact Newsletter box */}
            <form className="flex mt-1" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Subscribe to insights"
                className="w-full bg-slate-950 border border-slate-900 text-white text-[10px] px-3 py-2 rounded-l focus:outline-none focus:border-red-500 transition-colors placeholder-slate-700"
                required
              />
              <button
                type="submit"
                className="bg-[#E51D25] hover:bg-[#c9151c] text-white px-3 py-2 rounded-r transition-colors flex items-center justify-center flex-shrink-0"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-3 h-3" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-600 font-semibold uppercase tracking-wider">
          <p>© 2026 BCT Networks. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;