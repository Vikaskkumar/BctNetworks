import React, { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0); // First item open by default

    const faqs = [
        {
            question: "How many devices does Vardhman Tv support?",
            answer: "Our platform is built on carrier-class infrastructure, supporting an unlimited number of concurrent devices per property. It seamlessly manages Smart TVs, tablets, and guest smartphones without bandwidth bottlenecking."
        },
        {
            question: "What uptime guarantee do you offer?",
            answer: "We provide a 99.99% uptime Service Level Agreement (SLA). Our systems are backed by redundant cloud infrastructure, SOC 2 compliance, and 24/7 proactive network monitoring."
        },
        {
            question: "Can I customize the platform for my brand?",
            answer: "Absolutely. The entire user interface—from the TV welcome screen to the mobile guest app—is fully white-labeled. You can customize colors, logos, background videos, and menu layouts to match your property's exact branding."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#050505] py-32 px-4 font-sans border-b border-white/5">
            <div className="max-w-3xl mx-auto flex flex-col items-center">

                {/* Top Badge */}
                <div className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                        FAQ
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight">
                    Frequently asked questions
                </h2>

                {/* FAQ Accordion List */}
                <div className="w-full space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`border rounded-2xl overflow-hidden transition-colors duration-300 bg-[#0a0a0c] ${isOpen ? 'border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'border-white/10 hover:border-white/20'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-blue-100' : 'text-slate-200'}`}>
                                        {faq.question}
                                    </span>

                                    {/* Animated Chevron */}
                                    <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : 'text-slate-500'}`}>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                {/* Smooth Expand/Collapse Content */}
                                <div
                                    className="grid transition-all duration-300 ease-in-out"
                                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                                >
                                    <div className="overflow-hidden">
                                        <p className="p-6 pt-0 text-slate-400 leading-relaxed text-sm md:text-base">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}