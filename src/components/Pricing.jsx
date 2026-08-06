import React, { useState, useEffect, useRef } from 'react';

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Staggered entrance animation observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    const plans = [
        {
            id: 1,
            name: 'Starter Suite',
            description: 'Ideal option for boutique hotels & guest houses.',
            priceMonthly: '99',
            priceAnnually: '79',
            isPopular: false,
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            features: [
                '120+ Live HD Channels',
                'Standard PMS Synchronization',
                'Custom Guest Branding',
                'In-room Digital Concierge',
                '24/7 Email & Chat Support'
            ],
        },
        {
            id: 2,
            name: 'Professional Hub',
            description: 'Perfect choice for premium hotels & luxury resorts.',
            priceMonthly: '249',
            priceAnnually: '199',
            isPopular: true,
            badge: 'MOST LOVED',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            features: [
                '320+ Live 4K Channels',
                'Real-time PMS Integration (OPERA)',
                'Chromecast & AirPlay Sync',
                'Smart Room IoT Controller',
                'Interactive TV Guest Checkout',
                'Priority Phone Support'
            ],
        },
        {
            id: 3,
            name: 'Enterprise Core',
            description: 'Designed for large-scale hotels & global brands.',
            priceMonthly: '449',
            priceAnnually: '359',
            isPopular: false,
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            features: [
                '540+ Custom Channels',
                '8K HDR Streaming Support',
                'Custom PMS Integration APIs',
                'Interactive Service Booking UI',
                'Real-time Network Analytics',
                'Dedicated Account Manager'
            ],
        },
    ];

    return (
        <section 
            ref={sectionRef}
            className="bg-[#06060c] py-20 lg:py-24 px-4 font-sans flex flex-col items-center border-b border-purple-500/10 overflow-hidden"
        >
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                    <div className="h-[1px] w-6 bg-purple-500/30"></div>
                    <p className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">
                        Flexible Pricing
                    </p>
                    <div className="h-[1px] w-6 bg-purple-500/30"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4 leading-tight">
                    Pick your perfect <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">entertainment plan.</span>
                </h2>
                <p className="text-slate-400 text-base md:text-lg mt-3">
                    Flexible monthly & annual packages tailored for every type of hospitality scale.
                </p>
            </div>

            {/* Billing Cycle Switcher */}
            <div className={`flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-full p-1 mb-16 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
                <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                        billingCycle === 'monthly'
                            ? 'bg-[#7c3aed] text-white shadow-lg'
                            : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                    Monthly Billing
                </button>
                <button
                    onClick={() => setBillingCycle('annually')}
                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                        billingCycle === 'annually'
                            ? 'bg-[#7c3aed] text-white shadow-lg'
                            : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                    Annual Billing
                    <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                        Save 20%
                    </span>
                </button>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
                {plans.map((plan, i) => {
                    const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceAnnually;

                    return (
                        <div
                            key={plan.id}
                            className={`relative flex flex-col p-6 xl:p-8 rounded-3xl bg-[#0c0a1a]/40 backdrop-blur-md transition-all duration-500 ${
                                plan.isPopular
                                    ? 'border border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.12)] md:-translate-y-2'
                                    : 'border border-purple-500/10 hover:border-purple-500/25 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.06)]'
                            } ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            {/* "Most Loved" Badge */}
                            {plan.isPopular && (
                                <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                                    {plan.badge}
                                </div>
                            )}

                            {/* Icon */}
                            <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.08)]">
                                {plan.icon}
                            </div>

                            {/* Plan Info */}
                            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                            <p className="text-xs text-slate-400 leading-relaxed mb-6">{plan.description}</p>

                            {/* Price */}
                            <div className="flex items-start gap-0.5 mb-6">
                                <span className="text-xl font-bold text-white mt-1">₹</span>
                                <span className="text-5xl font-extrabold text-white tracking-tighter transition-all duration-300">
                                    {price}
                                </span>
                                <div className="flex flex-col justify-center ml-1 mt-1.5">
                                    <span className="text-[9px] font-semibold text-slate-500 uppercase leading-none">
                                        +GST
                                    </span>
                                    <span className="text-xs text-slate-400 leading-tight">
                                        / room
                                    </span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-[1px] bg-purple-500/10 mb-6"></div>

                            {/* Features list */}
                            <ul className="space-y-3.5 mb-8 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="w-4.5 h-4.5 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-xs xl:text-sm text-slate-300 font-medium">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Action Button */}
                            <button
                                className={`w-full py-3 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                                    plan.isPopular
                                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/20 hover:scale-[1.02]'
                                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/5 hover:border-white/10'
                                }`}
                            >
                                Choose Plan
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}