import React, { useState } from 'react';

const LeftArrow = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
);

const RightArrow = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

const CustomerReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const reviews = [
        {
            id: 1,
            quote: "VardhmanTV transformed our guest engagement completely. The platform is flawless, intuitive, and delivers a true 5-star digital experience.",
            name: "Rahul Mehta",
            title: "General Manager, Anantara Jewel Bagh",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
        },
        {
            id: 2,
            quote: "The seamless integration of OTT content boosted guest satisfaction scores instantly. Their team is exceptionally responsive and professional.",
            name: "Aisha Khan",
            title: "Director of Operations, Grand Heritage",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
        }
    ];

    const { quote, name, title, image } = reviews[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    return (
        <section className="bg-[#05070a] py-10 md:py-14 px-4 md:px-8 font-sans relative overflow-hidden border-t border-b border-purple-500/10">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#e2b86d]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10 bg-[#0a111c]/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl">
                <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">

                    {/* Compact Portrait Image */}
                    <div className="md:col-span-4 flex justify-center">
                        <div
                            key={`${currentIndex}-img`}
                            className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border border-[#e2b86d]/30 shadow-xl animate-scaleUp"
                        >
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                            {/* Star Rating Badge */}
                            <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-md rounded-lg py-1 px-2 flex justify-center gap-1 text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quote & Details */}
                    <div className="md:col-span-8 flex flex-col justify-between text-white">

                        {/* Header Tag */}
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e2b86d]"></span>
                            <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#e2b86d] uppercase">TESTIMONIALS</span>
                        </div>

                        {/* Quote Text */}
                        <blockquote key={`${currentIndex}-quote`} className="mb-4 animate-fadeIn">
                            <p className="text-base md:text-lg text-slate-200 font-serif italic leading-relaxed">
                                "{quote}"
                            </p>
                        </blockquote>

                        {/* Author & Controls Row */}
                        <div className="flex items-center justify-between pt-3 border-t border-white/10">
                            <div key={`${currentIndex}-author`} className="animate-fadeIn">
                                <h4 className="text-[#e2b86d] text-sm font-bold">{name}</h4>
                                <p className="text-slate-400 text-xs mt-0.5">{title}</p>
                            </div>

                            {/* Navigation Arrows */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handlePrev}
                                    className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#e2b86d] hover:text-black hover:border-[#e2b86d] transition-all duration-200 cursor-pointer focus:outline-none"
                                    aria-label="Previous review"
                                >
                                    <LeftArrow />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#e2b86d] hover:text-black hover:border-[#e2b86d] transition-all duration-200 cursor-pointer focus:outline-none"
                                    aria-label="Next review"
                                >
                                    <RightArrow />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Embedded CSS Animations */}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-scaleUp {
          animation: scaleUp 0.4s ease-out forwards;
        }
      `}</style>
        </section>
    );
};

export default CustomerReviews;