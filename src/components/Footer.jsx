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
  <footer style={{ background: 'transparent' }} className="w-full overflow-hidden">
    <div className="container-custom py-10 sm:py-16">
      {/* Top grid: logo left + nav columns right */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10">
        {/* Brand column */}
        <div className="col-span-2 sm:col-span-1 lg:col-span-1">
          <BctLogo />
          <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 16, lineHeight: '20px', letterSpacing: '-0.02em' }}>
            Enterprise networking,<br />security &amp; infrastructure<br />solutions in Jaipur.
          </p>
        </div>

        {/* Link columns — exact Carbon style */}
        {cols.map((col) => (
          <div key={col.heading}>
            <p style={{
              fontSize: 11, fontWeight: 600, color: 'var(--muted)',
              letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 18,
            }}>
              {col.heading}
            </p>
            <ul className="flex flex-col gap-3">
              {col.links.map(l => (
                <li key={l.name}>
                  <a href={l.href}
                    style={{ fontSize: 14, color: 'var(--text)', fontWeight: 400, textDecoration: 'none', transition: 'color 0.15s', letterSpacing: '-0.02em' }}
                    className="hover:text-[var(--muted)]">
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
    <div style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 py-6">
        <p style={{ fontSize: 13, color: 'var(--muted)', letterSpacing: '-0.02em' }}>
          Copyright © 2026 BCT Networks. All rights reserved.
        </p>
        <a href="https://bctnetworks.in" style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.15s' }}
          className="hover:text-[var(--text)]">
          bctnetworks.in
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;