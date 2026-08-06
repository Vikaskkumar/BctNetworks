import { useState } from 'react';

// Arrow Icons coded as simple SVGs for easy use
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
            quote: "VardhmanTV has transformed the way we engage with our guests. The platform is reliable, easy to use and gives us the insights we need to deliver memorable experiences.",
            name: "Rahul Mehta",
            title: "General Manager, Oceanview Hotel",
            image: "https://images.unsplash.com/photo-1593062096033-9a26b09dd2f6?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            quote: "The seamless integration of OTT content has increased guest satisfaction exponentially. Their support team is top-notch and always available.",
            name: "Aisha Khan",
            title: "Director of Operations, Grand Heritage Resort",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop"
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
        <section className="bg-slate-950 py-16 md:py-20 px-6 font-sans border-t border-b border-purple-500/10 transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">

                    {/* Left Column: Image (Smaller & Compact) */}
                    <div className="md:col-span-5 flex justify-center">
                        <div className="relative w-60 h-60 md:w-68 md:h-68 rounded-2xl overflow-hidden shadow-xl border border-white/5 group">
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Right Column: Content & Navigation */}
                    <div className="md:col-span-7 flex flex-col justify-center space-y-5 text-white pl-0 md:pl-4">
                        
                        {/* Tiny Section Tag */}
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400">Reviews</span>
                        </div>

                        {/* Quote Text */}
                        <blockquote
                            key={`${currentIndex}-quote`}
                            className="relative animate-fadeIn text-lg md:text-xl leading-relaxed font-medium text-slate-100 tracking-tight"
                        >
                            <span className="absolute -left-5 -top-2 text-5xl text-purple-500/20 font-serif">“</span>
                            {quote}
                            <span className="absolute text-5xl text-purple-500/20 font-serif ml-1 -bottom-4">”</span>
                        </blockquote>

                        {/* Citation Details */}
                        <div key={`${currentIndex}-cite`} className="animate-fadeIn delay-100">
                            <h4 className="text-base font-bold text-white leading-snug">{name}</h4>
                            <p className="text-xs text-slate-400 mt-0.5">{title}</p>
                        </div>

                        {/* Simple Animated Navigation Buttons + Dots */}
                        <div className="flex items-center justify-between pt-4 border-t border-purple-500/5">
                            {/* Navigation Arrows */}
                            <div className="flex gap-2.5">
                                <button
                                    onClick={handlePrev}
                                    aria-label="Previous review"
                                    className="p-2.5 rounded-full border border-slate-800 text-slate-400 transition-all duration-300 hover:border-purple-500 hover:text-white hover:bg-purple-500/10 cursor-pointer"
                                >
                                    <LeftArrow />
                                </button>
                                <button
                                    onClick={handleNext}
                                    aria-label="Next review"
                                    className="p-2.5 rounded-full border border-slate-800 text-slate-400 transition-all duration-300 hover:border-purple-500 hover:text-white hover:bg-purple-500/10 cursor-pointer"
                                >
                                    <RightArrow />
                                </button>
                            </div>

                            {/* Dots Navigation */}
                            <div className="flex gap-1.5">
                                {reviews.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                            currentIndex === idx ? 'bg-purple-500 w-4' : 'bg-slate-700 hover:bg-slate-600'
                                        }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    ></button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Animation Definitions */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(6px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
                }
                .delay-100 {
                    animation-delay: 0.08s;
                }
            `}</style>
        </section>
    );
};

export default CustomerReviews;
