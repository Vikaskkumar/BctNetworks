import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock } from 'lucide-react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Enterprise Networking',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate premium server request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-[#f8f9fa] dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300 selection:bg-[#E51D25] selection:text-white">
      
      {/* Styles for smooth form and element entrance */}
      <style>{`
        @keyframes contactSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .anim-contact-fade {
          animation: contactSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>

      {/* Header Banner */}
      <section className="bg-[#0a0a0a] text-white py-20 lg:py-28 relative overflow-hidden">
        {/* Glowing backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#E51D25]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block border border-[#E51D25]/30 bg-[#E51D25]/10 text-[#E51D25] px-4 py-1.5 rounded-full font-extrabold text-[10px] tracking-[0.2em] uppercase mb-6">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-2 mb-6 tracking-tight">
            Let's Design Your Network
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Speak with a certified network architect to discuss your infrastructure requirements, schedule a site survey, or request a customized quotation.
          </p>
        </div>
      </section>

      {/* Main Form & Office Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form (7 cols) */}
          <div 
            className="lg:col-span-7 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl transition-all duration-300 anim-contact-fade"
            style={{ animationDelay: '100ms' }}
          >
            {submitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-20 h-20 bg-green-50 dark:bg-green-950/20 rounded-full flex items-center justify-center mx-auto border border-green-200 dark:border-green-900/35">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">Requirements Submitted</h3>
                <p className="text-sm text-gray-600 dark:text-slate-350 max-w-md mx-auto leading-relaxed">
                  Your details have been successfully received. A senior BCT Network Architect has been notified and will contact you within 2 business hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-[#E51D25] hover:bg-[#c9151c] text-white text-xs font-black px-8 py-4 rounded-xl uppercase tracking-wider transition-all shadow-md shadow-red-900/20"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
                  Request Quotation / Consultation
                </h2>
                <p className="text-xs text-gray-500 dark:text-slate-400 font-semibold mb-8">
                  Fields marked with an asterisk (*) are mandatory.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full border border-gray-200 dark:border-slate-800 bg-[#f8f9fa] dark:bg-slate-950 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500/25 focus:border-[#E51D25] focus:bg-white dark:focus:bg-slate-900 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@company.com"
                      className="w-full border border-gray-200 dark:border-slate-800 bg-[#f8f9fa] dark:bg-slate-950 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500/25 focus:border-[#E51D25] focus:bg-white dark:focus:bg-slate-900 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 98765 43210"
                      className="w-full border border-gray-200 dark:border-slate-800 bg-[#f8f9fa] dark:bg-slate-950 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500/25 focus:border-[#E51D25] focus:bg-white dark:focus:bg-slate-900 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase mb-2">Company / Organization</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Acme Enterprises"
                      className="w-full border border-gray-200 dark:border-slate-800 bg-[#f8f9fa] dark:bg-slate-950 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500/25 focus:border-[#E51D25] focus:bg-white dark:focus:bg-slate-900 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase mb-2">Solution Category Requirement</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full border border-gray-200 dark:border-slate-800 bg-[#f8f9fa] dark:bg-slate-950 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500/25 focus:border-[#E51D25] focus:bg-white dark:focus:bg-slate-900 transition-all duration-300"
                  >
                    <option value="Structure Cabling System">Structure Cabling System</option>
                    <option value="Unified Communication & Collaboration">Unified Communication, Telepresence & Collaboration</option>
                    <option value="Enterprise Networking">Enterprise Networking</option>
                    <option value="Firewall & Cyber Security">Firewall & Cyber Security</option>
                    <option value="Audio Visual">Audio Visual Systems</option>
                    <option value="Security & Surveillance">Security & Surveillance</option>
                    <option value="Fire & Safety">Fire & Safety Systems</option>
                    <option value="Server & Storage">Server & Storage Solutions</option>
                    <option value="Building Automation">Building Automation & BMS</option>
                    <option value="UPS & Backups">UPS & Backups</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase mb-2">Project Details & Parameters</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe your site layout, count of network nodes, requested timeline, or any specific compliance standards required..."
                    className="w-full border border-gray-200 dark:border-slate-800 bg-[#f8f9fa] dark:bg-slate-950 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500/25 focus:border-[#E51D25] focus:bg-white dark:focus:bg-slate-900 transition-all duration-300"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E51D25] hover:bg-[#c9151c] disabled:bg-gray-400 text-white text-xs font-black px-8 py-4 rounded-xl uppercase tracking-wider transition-all shadow-lg shadow-red-500/20 flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}</span>
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : ''}`} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Info & Map (5 cols) */}
          <div 
            className="lg:col-span-5 space-y-8 anim-contact-fade"
            style={{ animationDelay: '200ms' }}
          >
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-8 sm:p-10 rounded-3xl shadow-xl space-y-8">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-none">Head Office</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-[#E51D25] flex-shrink-0 border border-red-100 dark:border-red-900/30">
                    <MapPin className="w-5.5 h-5.5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest">Office Address</div>
                    <div className="text-sm font-extrabold text-gray-800 dark:text-slate-200 mt-1 leading-relaxed">
                      67/30, Sector 6, Pratap Nagar,<br />
                      Sanganer, Jaipur - 302033, Rajasthan
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-[#E51D25] flex-shrink-0 border border-red-100 dark:border-red-900/30">
                    <Phone className="w-5.5 h-5.5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest">Direct Phone</div>
                    <a href="tel:+919876543210" className="text-sm font-extrabold text-gray-800 dark:text-slate-200 hover:text-[#E51D25] dark:hover:text-red-400 mt-1 block transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-[#E51D25] flex-shrink-0 border border-red-100 dark:border-red-900/30">
                    <Mail className="w-5.5 h-5.5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest">Inquiries Email</div>
                    <a href="mailto:hello@bctnetworks.co.in" className="text-sm font-extrabold text-gray-800 dark:text-slate-200 hover:text-[#E51D25] dark:hover:text-red-400 mt-1 block transition-colors">
                      hello@bctnetworks.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-[#E51D25] flex-shrink-0 border border-red-100 dark:border-red-900/30">
                    <Clock className="w-5.5 h-5.5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest">Operational Hours</div>
                    <div className="text-sm font-extrabold text-gray-800 dark:text-slate-200 mt-1 leading-relaxed">
                      Mon - Sat: 9:30 AM - 6:30 PM <br />
                      <span className="text-[#E51D25] dark:text-red-400 font-extrabold text-[11px]">(24/7 Dedicated NOC Support)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Card */}
            <div className="border border-gray-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl h-64 relative bg-gray-150 dark:bg-slate-900">
              <iframe
                title="BCT Networks Jaipur Office"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://maps.google.com/maps?q=Sector%206,%20Pratap%20Nagar,%20Sanganer,%20Jaipur&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 opacity-90 dark:opacity-75 grayscale contrast-125 dark:invert dark:contrast-100"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
