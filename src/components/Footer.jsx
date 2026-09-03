import BctLogo from './BctLogo';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="bg-[#090d16] py-6 text-slate-400 text-xs border-t border-slate-900" id="footer">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <BctLogo />
          <span className="text-[10px] text-slate-500">Sector 6, Pratap Nagar, Jaipur • +91 9116141401</span>
        </div>

        <div className="flex gap-4 text-[11px] font-bold">
          {navLinks.map((l) => (
            <a key={l.name} href={l.href} className="hover:text-white transition-colors">{l.name}</a>
          ))}
        </div>

        <p className="text-[10px] text-slate-600 font-bold uppercase">© 2026 BCT Networks</p>
      </div>
    </footer>
  );
};

export default Footer;