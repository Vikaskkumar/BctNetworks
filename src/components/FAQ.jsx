import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What types of networking solutions does BCT Networks provide?',
    a: 'BCT Networks covers the full spectrum — enterprise Wi-Fi (Wi-Fi 6E), structured cabling (Cat6A, Cat7, fiber), firewall & cybersecurity, IP surveillance, VoIP/unified communications, AV systems, and building automation for commercial environments.',
  },
  {
    q: 'Do you offer post-installation support and maintenance?',
    a: 'Yes. All our projects include a warranty period and optional Annual Maintenance Contracts (AMC). We also offer 24/7 NOC monitoring for enterprise clients who need continuous uptime assurance.',
  },
  {
    q: 'Which OEM brands and vendors do you work with?',
    a: 'We are certified partners with Cisco, HPE Aruba, Fortinet, Palo Alto, Hikvision, Dahua, Sophos, Schneider Electric, and several other leading technology brands — ensuring you always receive genuine, warrantied hardware.',
  },
  {
    q: 'How long does a typical network deployment take?',
    a: 'Deployment timelines vary by project scope. A structured cabling project for a mid-size office typically takes 3–7 days, while a full enterprise network rollout may span 2–6 weeks including design, procurement, installation, and testing.',
  },
  {
    q: 'Do you serve clients outside Jaipur?',
    a: 'Yes. While our headquarters is in Jaipur, Rajasthan, we have delivered projects across Rajasthan and other states. Contact us to discuss logistics for your location.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="section-padding section-border" id="faq">
      {/* Carbon subtle blue glow background */}
      <div className="glow-blue absolute left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-30 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Need answers?</h2>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((item, i) => (
            <div key={i}
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                background: '#0C0D0F',
                border: '1px solid #272B36',
                borderRadius: 12,
                cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { if (open !== i) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              onMouseLeave={e => { if (open !== i) e.currentTarget.style.borderColor = '#272B36'; }}>

              {/* Question row */}
              <div className="flex items-center justify-between gap-4 px-6 py-5">
                <span style={{ fontSize: 15, fontWeight: 500, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.4 }}>{item.q}</span>
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full"
                  style={{ border: '1px solid #272B36', color: '#A6A6A6', transition: 'border-color 0.15s, color 0.15s' }}>
                  {open === i
                    ? <Minus size={14} style={{ color: '#0066FF' }} />
                    : <Plus size={14} />}
                </div>
              </div>

              {/* Answer */}
              {open === i && (
                <div style={{ borderTop: '1px solid #272B36' }} className="px-6 py-4">
                  <p style={{ fontSize: 14, color: '#A6A6A6', lineHeight: '22px', letterSpacing: '-0.02em' }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
