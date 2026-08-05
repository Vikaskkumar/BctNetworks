import React from 'react';

export default function Pricing() {
    const plans = [
        {
            id: 1,
            name: 'Starter Play',
            description: '120+ channels • IPTV service',
            price: '99',
            isPopular: false,
            features: [
                'Live television',
                'Multi-device access',
                'On-demand library',
                'Customer support',
            ],
        },
        {
            id: 2,
            name: 'Family Max',
            description: '320+ channels • IPTV service',
            price: '249',
            isPopular: true,
            badge: 'MOST LOVED',
            features: [
                'Live television',
                'Multi-device access',
                'On-demand library',
                'Customer support',
            ],
        },
        {
            id: 3,
            name: 'Ultra HD',
            description: '540+ channels • IPTV service',
            price: '449',
            isPopular: false,
            features: [
                'Live television',
                'Multi-device access',
                'On-demand library',
                'Customer support',
            ],
        },
    ];

    return (
        <section className="bg-[#06060c] py-24 px-4 font-sans flex flex-col items-center border-b border-purple-500/10">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-3 mb-6">
                    <div className="h-[1px] w-6 bg-purple-500/30"></div>
                    <p className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">
                        Simple Pricing
                    </p>
                    <div className="h-[1px] w-6 bg-purple-500/30"></div>
                </div>
                <h2 className="text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight mb-4 leading-tight">
                    Pick your perfect <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">entertainment plan.</span>
                </h2>
                <p className="text-slate-400 text-lg mt-4">
                    Flexible monthly packages for every kind of household.
                </p>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`relative flex flex-col p-8 rounded-3xl bg-[#0c0a1a]/60 backdrop-blur-md transition-all duration-300 ${plan.isPopular
                                ? 'border border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.15)] -translate-y-2'
                                : 'border border-purple-500/10 hover:border-purple-500/25 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.05)]'
                            }`}
                    >
                        {/* "Most Loved" Badge */}
                        {plan.isPopular && (
                            <div className="absolute top-6 right-6 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_12px_rgba(168,85,247,0.4)]">
                                {plan.badge}
                            </div>
                        )}

                        {/* Icon */}
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-8 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6L12 17.2 5.8 21.7l2.4-7.6L2 9.6h7.6L12 2z" />
                            </svg>
                        </div>

                        {/* Plan Info */}
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-sm text-slate-400 mb-8">{plan.description}</p>

                        {/* Price */}
                        <div className="flex items-start gap-1 mb-8">
                            <span className="text-2xl font-bold text-white mt-1">₹</span>
                            <span className="text-6xl font-extrabold text-white tracking-tighter">
                                {plan.price}
                            </span>
                            <div className="flex flex-col justify-center ml-1 mt-2">
                                <span className="text-[10px] font-semibold text-slate-500 uppercase leading-none">
                                    +GST
                                </span>
                                <span className="text-xs text-slate-400 leading-tight">
                                    / month
                                </span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-purple-500/10 mb-8"></div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-y-4 gap-x-2 mt-auto">
                            {plan.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <svg
                                        className="w-4 h-4 text-purple-400 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-xs text-slate-300 font-medium whitespace-nowrap">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}