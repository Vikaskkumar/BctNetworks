import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock } from 'lucide-react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
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
    setSubmitted(true);
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* Header Banner */}
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <span className="text-[#E51D25] font-extrabold text-xs tracking-[0.2em] uppercase">CONTACT US</span>
          <h1 className="text-3xl sm:text-5xl font-black mt-2 mb-4 tracking-tight">Let's Design Your Network Architecture</h1>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            Speak with a certified network architect to discuss your infrastructure requirements, schedule a site survey, or request a customized quotation.
          </p>
        </div>
      </section>

      {/* Main Form & Office Info */}
      <section className="py-16 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">Thank You!</h3>
                <p className="text-sm text-gray-600 dark:text-slate-350 max-w-md mx-auto">
                  Your requirements have been received. A senior BCT Network Architect will contact you within 2 business hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-[#E51D25] text-white text-xs font-bold px-6 py-3 rounded-md uppercase"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Request A Quotation Or Consultation</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:border-[#E51D25]"
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
                      className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:border-[#E51D25]"
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
                      className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:border-[#E51D25]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase mb-2">Company / Organization</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Acme Enterprises"
                      className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:border-[#E51D25]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase mb-2">Solution Requirement</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:border-[#E51D25]"
                  >
                    <option value="Enterprise Networking">Enterprise Networking & Wi-Fi</option>
                    <option value="Security & Surveillance">Security & CCTV Surveillance</option>
                    <option value="Structured Cabling">Structured Cabling System</option>
                    <option value="Unified Communication">Unified Communication (VoIP)</option>
                    <option value="Audio Visual">Audio Visual & Boardrooms</option>
                    <option value="Building Automation">Building Automation & BMS</option>
                    <option value="UPS & Power Backup">UPS & Power Backup</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase mb-2">Project Details & Requirements</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe your site location, number of nodes, coverage requirements, or estimated budget..."
                    className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-slate-100 focus:outline-none focus:border-[#E51D25]"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#E51D25] hover:bg-[#c9151c] text-white text-xs font-black px-8 py-4 rounded-lg uppercase tracking-wider transition-colors shadow-lg shadow-red-500/20 flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#fcfcfc] dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-black text-gray-900 dark:text-white">Head Office</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-[#E51D25] flex-shrink-0">
                    <MapPin className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase">Address</div>
                    <div className="text-sm font-extrabold text-gray-900 dark:text-slate-100 mt-0.5">
                      67/30, Sector 6, Pratap Nagar,<br />
                      Sanganer, Jaipur - 302033, Rajasthan
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-[#E51D25] flex-shrink-0">
                    <Phone className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase">Phone</div>
                    <a href="tel:+919876543210" className="text-sm font-extrabold text-gray-900 dark:text-slate-100 hover:text-[#E51D25] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-[#E51D25] flex-shrink-0">
                    <Mail className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase">Email</div>
                    <a href="mailto:hello@bctnetworks.co.in" className="text-sm font-extrabold text-gray-900 dark:text-slate-100 hover:text-[#E51D25] transition-colors">
                      hello@bctnetworks.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-[#E51D25] flex-shrink-0">
                    <Clock className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase">Working Hours</div>
                    <div className="text-sm font-extrabold text-gray-900 dark:text-slate-100 mt-0.5">
                      Mon - Sat: 9:30 AM - 6:30 PM (24/7 NOC Support)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Placeholder Card */}
            <div className="border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm h-64 relative bg-gray-100 dark:bg-slate-900 flex items-center justify-center">
              <iframe
                title="BCT Networks Jaipur Office"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://maps.google.com/maps?q=Sector%206,%20Pratap%20Nagar,%20Sanganer,%20Jaipur&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 opacity-90 dark:opacity-80"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
