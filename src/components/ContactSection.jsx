import { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, Send } from 'lucide-react';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800" id="contact">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 card-base p-5">
          <span className="section-tag">GET IN TOUCH</span>
          <h2 className="section-title mb-3">Request Quotation</h2>
          {submitted ? (
            <div className="text-center py-4 space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
              <p className="text-xs font-bold text-slate-900 dark:text-white">Requirements Received. Architect will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input type="text" placeholder="Full Name *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="p-2 text-xs rounded border border-gray-200 dark:border-slate-800 dark:bg-slate-950 dark:text-white" />
                <input type="email" placeholder="Email Address *" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="p-2 text-xs rounded border border-gray-200 dark:border-slate-800 dark:bg-slate-950 dark:text-white" />
              </div>
              <textarea rows="2" placeholder="Describe requirements..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full p-2 text-xs rounded border border-gray-200 dark:border-slate-800 dark:bg-slate-950 dark:text-white"></textarea>
              <button type="submit" className="btn-primary w-full">
                <span>Send Requirements</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-5 card-base p-5 space-y-2 text-xs">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Direct Contact</h3>
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#E51D25]" /> Sector 6, Pratap Nagar, Jaipur - 302033</div>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#E51D25]" /> +91 9116141401</div>
          <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#E51D25]" /> Sales@bctnetworks.in</div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
