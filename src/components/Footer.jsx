import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ArrowRight 
} from 'lucide-react';
import BctLogo from './BctLogo';

const LinkedinIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const Footer = ({ onNavigate = () => {} }) => {
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
    <footer className="bg-[#111111] pt-16 pb-8 border-t border-gray-900" id="contact">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Section: Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="inline-block mb-6 cursor-pointer">
              <BctLogo isDark={true} />
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center text-[#888] hover:text-white hover:border-[#E51D25] hover:bg-[#E51D25] transition-all">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center text-[#888] hover:text-white hover:border-[#E51D25] hover:bg-[#E51D25] transition-all">
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center text-[#888] hover:text-white hover:border-[#E51D25] hover:bg-[#E51D25] transition-all">
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center text-[#888] hover:text-white hover:border-[#E51D25] hover:bg-[#E51D25] transition-all">
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="lg:col-span-1">
            <h4 className="text-white text-[10px] font-extrabold tracking-[0.2em] uppercase mb-5">
              SOLUTIONS
            </h4>
            <ul className="space-y-2.5">
              {[
                'Enterprise Networking',
                'Security & Surveillance',
                'Unified Communication',
                'Audio Visual',
                'Server & Storage',
                'Building Automation',
                'Fire & Safety',
                'UPS & Power Backup'
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#solutions" 
                    onClick={(e) => handleNavClick(e, 'solutions')}
                    className="text-[#888888] hover:text-white text-xs font-medium transition-colors cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-white text-[10px] font-extrabold tracking-[0.2em] uppercase mb-5">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="text-[#888888] hover:text-white text-xs font-medium transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-1">
            <h4 className="text-white text-[10px] font-extrabold tracking-[0.2em] uppercase mb-5">
              CONTACT US
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E51D25] flex-shrink-0 mt-0.5" />
                <span className="text-[#888888] text-xs leading-relaxed font-medium">
                  67/30, Sector 6, Pratap Nagar,<br />
                  Sanganer, Jaipur - 302033
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E51D25] flex-shrink-0" />
                <a href="tel:+919876543210" className="text-[#888888] hover:text-white text-xs font-medium transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E51D25] flex-shrink-0" />
                <a href="mailto:hello@bctnetworks.co.in" className="text-[#888888] hover:text-white text-xs font-medium transition-colors">
                  hello@bctnetworks.co.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#E51D25] flex-shrink-0" />
                <a href="https://www.bctnetworks.co.in" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-white text-xs font-medium transition-colors">
                  www.bctnetworks.co.in
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-white text-[10px] font-extrabold tracking-[0.2em] uppercase mb-5">
              STAY UPDATED
            </h4>
            <p className="text-[#888888] text-xs font-medium leading-relaxed mb-4">
              Subscribe to our newsletter for insights on enterprise networking and infrastructure.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-[#1a1a1a] border border-[#333] text-white text-xs px-3 py-2.5 rounded-l focus:outline-none focus:border-gray-500 transition-colors placeholder-[#666]"
                required
              />
              <button 
                type="submit" 
                className="bg-[#E51D25] hover:bg-[#c9151c] text-white px-3.5 py-2.5 rounded-r transition-colors flex items-center justify-center"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-[#222222] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#666666] text-[11px] font-medium">
            © 2024 BCT Networks. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#666666] hover:text-white text-[11px] font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#666666] hover:text-white text-[11px] font-medium transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;