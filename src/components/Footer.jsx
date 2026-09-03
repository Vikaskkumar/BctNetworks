import BctLogo from './BctLogo';

const cols = [
  {
    heading: 'Services',
    links: [
      { name: 'Enterprise Wi-Fi',   href: '#solutions' },
      { name: 'Structured Cabling', href: '#solutions' },
      { name: 'Cybersecurity',      href: '#solutions' },
      { name: 'AV Systems',         href: '#solutions' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { name: 'About Us',   href: '#about' },
      { name: 'Industries', href: '#industries' },
      { name: 'Partners',   href: '#partners' },
      { name: 'FAQ',        href: '#faq' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { name: '+91 9116141401',    href: 'tel:+919116141401' },
      { name: 'Sales@bctnetworks.in', href: 'mailto:Sales@bctnetworks.in' },
      { name: 'Jaipur, Rajasthan', href: '#contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { name: 'Privacy Policy',   href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  },
];

const Footer = () => (
  <footer style={{ background: '#0C0D0F', borderTop: '1px solid #272B36' }}>
    <div className="container-custom py-16">
      {/* Top grid: logo left + nav columns right */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <BctLogo />
          <p style={{ fontSize: 13, color: '#A6A6A6', marginTop: 16, lineHeight: '20px', letterSpacing: '-0.02em' }}>
            Enterprise networking,<br />security &amp; infrastructure<br />solutions in Jaipur.
          </p>
        </div>

        {/* Link columns — exact Carbon style */}
        {cols.map((col) => (
          <div key={col.heading}>
            <p style={{
              fontSize: 11, fontWeight: 600, color: '#A6A6A6',
              letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 18,
            }}>
              {col.heading}
            </p>
            <ul className="flex flex-col gap-3">
              {col.links.map(l => (
                <li key={l.name}>
                  <a href={l.href}
                    style={{ fontSize: 14, color: '#fff', fontWeight: 400, textDecoration: 'none', transition: 'color 0.15s', letterSpacing: '-0.02em' }}
                    className="hover:text-[#A6A6A6]">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom bar */}
    <div style={{ borderTop: '1px solid #272B36' }}>
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 py-6">
        <p style={{ fontSize: 13, color: '#A6A6A6', letterSpacing: '-0.02em' }}>
          Copyright © 2026 BCT Networks. All rights reserved.
        </p>
        <a href="https://bctnetworks.in" style={{ fontSize: 13, color: '#A6A6A6', textDecoration: 'none', transition: 'color 0.15s' }}
          className="hover:text-white">
          bctnetworks.in
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;