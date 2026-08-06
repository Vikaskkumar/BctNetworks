import React, { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0); // First item open by default

    // Expanded FAQs to make the two-column layout look substantial
    const faqs = [
        {
            question: "How many devices does VardhmanTV support?",
            answer: "Our platform is built on carrier-class infrastructure, supporting an unlimited number of concurrent devices per property. It seamlessly manages Smart TVs, tablets, and guest smartphones without bandwidth bottlenecking."
        },
        {
            question: "Does it integrate with our existing Property Management System?",
            answer: "Yes, VardhmanTV integrates seamlessly with all major PMS providers (Oracle Opera, Protel, Mews, etc.). This allows for personalized welcome messages, automated billing, and express checkout directly from the TV."
        },
        {
            question: "What uptime guarantee do you offer?",
            answer: "We provide a 99.99% uptime Service Level Agreement (SLA). Our systems are backed by redundant cloud infrastructure, SOC 2 compliance, and 24/7 proactive network monitoring."
        },
        {
            question: "Can I customize the platform for my brand?",
            answer: "Absolutely. The entire user interface—from the TV welcome screen to the mobile guest app—is fully white-labeled. You can customize colors, logos, background videos, and menu layouts to match your property's exact branding."
        },
        {
            question: "How complex is the installation process?",
            answer: "Installation is non-disruptive. We utilize your existing coaxial or ethernet infrastructure. Our deployment team handles the end-to-end setup, typically upgrading an entire floor in a single afternoon without affecting guest operations."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative bg-[#05070a] py-20 lg:py-32 px-6 font-sans overflow-hidden border-t border-b border-purple-500/10">

            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#e2b86d]/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Heading & Sticky CTA */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col justify-start">

                        {/* Tiny Section Tag */}
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e2b86d]"></span>
                            <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#e2b86d] uppercase">Support</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight leading-[1.1]">
                            Frequently <br className="hidden lg:block" />
                            <span className="text-[#e2b86d] italic font-light">asked</span> questions
                        </h2>

                        <p className="text-slate-400 text-base md:text-lg mb-10 max-w-md leading-relaxed">
                            Everything you need to know about VardhmanTV's premium hospitality infrastructure, deployment, and integrations.
                        </p>

                        {/* Contact Widget */}
                        <div className="p-6 md:p-8 rounded-[2rem] bg-[#0a111c]/80 backdrop-blur-xl border border-white/10 shadow-2xl max-w-sm">
                            <h4 className="text-white text-lg font-bold mb-2">Still have questions?</h4>
                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                Our hospitality tech experts are ready to help you design the perfect digital guest experience.
                            </p>
                            <button className="w-full text-black bg-[#e2b86d] hover:bg-white px-6 py-3.5 rounded-xl text-xs font-extrabold tracking-widest uppercase transition-colors duration-300 shadow-[0_0_20px_rgba(226,184,109,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                                Contact Sales
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Sleek Accordion List */}
                    <div className="lg:col-span-7 flex flex-col">
                        <div className="border-t border-white/10">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <div
                                        key={index}
                                        className={`group border-b transition-colors duration-300 ${isOpen ? 'border-[#e2b86d]/50' : 'border-white/10 hover:border-white/30'
                                            }`}
                                    >
                                        <button
                                            onClick={() => toggleFAQ(index)}
                                            className="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none cursor-pointer"
                                        >
                                            {/* Question Text */}
                                            <span className={`text-lg md:text-xl font-medium transition-colors duration-300 pr-8 ${isOpen ? 'text-[#e2b86d]' : 'text-slate-200 group-hover:text-white'
                                                }`}>
                                                {faq.question}
                                            </span>

                                            {/* Animated Plus/Minus Icon */}
                                            <div className={`relative flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-[#e2b86d] bg-[#e2b86d]/10' : 'border-white/20 group-hover:border-white/40 group-hover:bg-white/5'
                                                }`}>
                                                {/* Horizontal Line (Always visible) */}
                                                <div className={`absolute w-3 h-[1.5px] transition-colors duration-300 ${isOpen ? 'bg-[#e2b86d]' : 'bg-slate-300'
                                                    }`} />

                                                {/* Vertical Line (Rotates and fades out to form a Minus) */}
                                                <div className={`absolute w-3 h-[1.5px] transition-all duration-300 ${isOpen ? 'bg-[#e2b86d] rotate-0 opacity-0' : 'bg-slate-300 rotate-90 opacity-100'
                                                    }`} />
                                            </div>
                                        </button>

                                        {/* Smooth Expand/Collapse Content */}
                                        <div
                                            className="grid transition-all duration-500 ease-[cubic-bezier(0.2,0.9,0.3,1.1)]"
                                            style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="pb-8 text-slate-400 leading-relaxed text-sm md:text-base pr-12 md:pr-16">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}