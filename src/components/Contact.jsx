import React, { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    rooms: '50-150',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        rooms: '50-150',
        message: '',
      });
    }, 600);
  };

  return (
    <section
      ref={formRef}
      className="bg-[#06060c] py-20 lg:py-24 px-4 font-sans flex flex-col items-center border-b border-purple-500/10 overflow-hidden contact-section"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-[1px] w-6 bg-purple-500/30"></div>
              <p className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">
                Get In Touch
              </p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-5 leading-tight contact-title">
              Let's build your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">guest experience.</span>
            </h2>
            
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm contact-desc">
              Have questions about our IPTV middleware, room integrations, or casting features? Talk to our technology experts.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 contact-icon-box">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email Us</p>
                  <a href="mailto:info@vardhmantv.com" className="text-sm font-semibold text-white hover:text-purple-400 transition-colors contact-link">
                    info@vardhmantv.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 contact-icon-box">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Global Operations</p>
                  <p className="text-sm font-semibold text-white contact-link-text">
                    Dubai • Riyadh • Singapore • London
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <div className={`bg-[#0c0a1a]/40 backdrop-blur-md border border-purple-500/10 p-8 rounded-3xl transition-all duration-700 contact-form-card ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {isSubmitted ? (
                <div className="text-center py-10 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-400 text-xs md:text-sm">
                    Thank you for reaching out. A hospitality expert will contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-5 py-2 text-xs font-bold text-black bg-white hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-400 contact-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors contact-input"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-400 contact-label">Work Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors contact-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="company" className="text-xs font-semibold text-slate-400 contact-label">Hotel / Company</label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors contact-input"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="rooms" className="text-xs font-semibold text-slate-400 contact-label">Room Count</label>
                      <select
                        name="rooms"
                        id="rooms"
                        value={formData.rooms}
                        onChange={handleChange}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-colors contact-select"
                      >
                        <option value="under-50" className="bg-[#0c0a1a] text-white">Under 50 rooms</option>
                        <option value="50-150" className="bg-[#0c0a1a] text-white">50 - 150 rooms</option>
                        <option value="over-150" className="bg-[#0c0a1a] text-white">151+ rooms</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-400 contact-label">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help your business?"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none contact-textarea"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full text-xs font-extrabold text-black bg-white hover:bg-slate-100 transition-colors cursor-pointer contact-submit-btn"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
