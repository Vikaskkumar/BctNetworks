import React, { useState, useEffect, useRef } from 'react';

export default function Expertise() {
    const [activeItem, setActiveItem] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [relativeScroll, setRelativeScroll] = useState(0);
    const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });
    const sectionRef = useRef(null);
    const itemRefs = useRef([]);

    // Calculate glowing indicator line position whenever activeItem changes or window resizes
    useEffect(() => {
        const updateIndicator = () => {
            if (itemRefs.current[activeItem]) {
                const el = itemRefs.current[activeItem];
                setIndicatorStyle({
                    top: el.offsetTop,
                    height: el.offsetHeight
                });
            }
        };

        updateIndicator();
        window.addEventListener('resize', updateIndicator);
        return () => window.removeEventListener('resize', updateIndicator);
    }, [activeItem]);

    // Intersection Observer for Entrance Animation & Scroll-linked Active Item Switching
    useEffect(() => {
        let rafId;

        const handleScroll = () => {
            rafId = requestAnimationFrame(() => {
                if (sectionRef.current) {
                    const rect = sectionRef.current.getBoundingClientRect();
                    // Parallax shift calculation for subtle image movement
                    setRelativeScroll(rect.top * -0.05);

                    // Automatic Scroll-Driven Active Item Switcher
                    if (itemRefs.current.length > 0) {
                        const viewportFocalPoint = window.innerHeight * 0.42;
                        let minDistance = Infinity;
                        let closestIndex = 0;

                        itemRefs.current.forEach((el, index) => {
                            if (el) {
                                const itemRect = el.getBoundingClientRect();
                                const itemCenter = itemRect.top + itemRect.height / 2;
                                const distance = Math.abs(itemCenter - viewportFocalPoint);
                                if (distance < minDistance) {
                                    minDistance = distance;
                                    closestIndex = index;
                                }
                            }
                        });

                        setActiveItem(closestIndex);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    const expertiseItems = [
        {
            num: '01',
            title: 'IPTV & OTT Entertainment',
            shortDesc: 'Cinematic in-room entertainment and live TV streaming platforms.',
            image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop',
            features: ['4K Ultra HD Streaming', 'Native Chromecast & AirPlay', 'Customizable User Interface']
        },
        {
            num: '02',
            title: 'Hotels & Resorts',
            shortDesc: 'End-to-end digital solutions for modern hotel management and guest experience.',
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
            features: ['Seamless PMS Integration (OPERA)', 'Smart Room Automation', 'Digital Concierge Services']
        },
        {
            num: '03',
            title: 'Gym & Fitness Centers',
            shortDesc: 'Engaging workout entertainment and digital signage for modern fitness clubs.',
            image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
            features: ['Cardio Screen Integration', 'Class Schedule Digital Signage', 'Bluetooth Audio Sync']
        },
        {
            num: '04',
            title: 'Spa & Wellness',
            shortDesc: 'Serene ambient entertainment and interactive service booking platforms.',
            image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop',
            features: ['Ambient Audio & Video Channels', 'Interactive Treatment Menus', 'In-Room Booking Capabilities']
        },
        {
            num: '05',
            title: 'Travel & Maritime',
            shortDesc: 'Reliable offline and satellite-synced entertainment for cruises and transit.',
            image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?q=80&w=1974&auto=format&fit=crop',
            features: ['Low-Bandwidth VOD Streaming', 'Safety Video Overrides', 'Multi-Language Support']
        },
        {
            num: '06',
            title: 'Enterprise Analytics',
            shortDesc: 'Centralized network management and engagement data across all properties.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
            features: ['Network Health Dashboard', 'Content Usage Tracking', 'Custom Data Reporting']
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="bg-[#030005] py-28 lg:py-36 px-6 md:px-12 font-sans overflow-x-clip border-b border-white/5 relative"
        >
            {/* Background Ambient Glow */}
            <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#7c28d9] opacity-10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

            <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative">

                {/* LEFT COLUMN: List & Titles */}
                <div className="w-full lg:w-5/12 flex flex-col relative z-10 pb-32 lg:pb-[40vh]">

                    {/* Section Header */}
                    <div className={`transition-all duration-1000 ease-out mb-10 lg:mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <p className="text-[#a78bfa] text-xs font-bold tracking-[0.2em] uppercase mb-3 drop-shadow-md">
                            Platform Ecosystem
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                            We Offer <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#7c3aed]">Complete Expertise.</span>
                        </h2>
                    </div>

                    {/* Interactive Hover / Scroll List */}
                    <div className="flex flex-col relative">
                        {/* Animated Glowing Left Border Indicator */}
                        <div
                            className="absolute left-0 w-[2px] bg-[#a855f7] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10"
                            style={{
                                top: `${indicatorStyle.top}px`,
                                height: `${indicatorStyle.height}px`
                            }}
                        ></div>

                        {expertiseItems.map((item, index) => {
                            const isActive = activeItem === index;

                            return (
                                <div
                                    key={index}
                                    ref={(el) => (itemRefs.current[index] = el)}
                                    onMouseEnter={() => setActiveItem(index)}
                                    onClick={() => setActiveItem(index)}
                                    className={`group relative flex items-start py-7 md:py-9 cursor-pointer border-l-[2px] transition-all duration-500 pl-5 md:pl-7 ${isActive ? 'border-transparent bg-white/[0.03]' : 'border-white/5 hover:bg-white/[0.01]'
                                        } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    {/* Number */}
                                    <span className={`font-mono text-xs md:text-sm font-bold mr-5 mt-1 transition-colors duration-300 ${isActive ? 'text-[#a855f7]' : 'text-gray-600'}`}>
                                        {item.num}
                                    </span>

                                    {/* Title & Mobile Description */}
                                    <div className="flex-1">
                                        <h3 className={`text-lg md:text-xl font-semibold mb-1.5 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                            {item.title}
                                        </h3>

                                        <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 lg:grid-rows-[1fr] lg:opacity-40'}`}>
                                            <p className="overflow-hidden text-xs md:text-sm text-gray-400 leading-relaxed pr-4">
                                                {item.shortDesc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Arrow Indicator */}
                                    <div className={`flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'text-white translate-x-1' : 'text-transparent -translate-x-4'}`}>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT COLUMN: Fixed Sticky Layout */}
                <div className="w-full lg:w-7/12 hidden lg:block sticky top-28 xl:top-32 h-[480px] xl:h-[520px] z-20">

                    {/* Animated Container */}
                    <div className={`w-full h-full rounded-[2rem] border border-white/10 bg-[#0a0a0c] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden relative transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>

                        {expertiseItems.map((item, index) => {
                            const isActive = activeItem === index;

                            return (
                                <div
                                    key={index}
                                    className={`absolute inset-0 w-full h-full pointer-events-none transition-all duration-700 ease-in-out ${isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
                                        }`}
                                >
                                    {/* Image Container (Vertically Longer) */}
                                    <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden bg-black">

                                        {/* Scroll Parallax Wrapper */}
                                        <div
                                            className="absolute inset-0 w-full h-full"
                                            style={{ transform: `translateY(${relativeScroll}px)` }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className={`absolute top-[-15%] left-[-5%] w-[110%] h-[130%] object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'scale-100' : 'scale-[1.15]'}`}
                                            />
                                        </div>

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-[#0a0a0c]/20 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent"></div>
                                    </div>

                                    {/* Text Details Panel */}
                                    <div className="absolute bottom-0 left-0 w-full h-[44%] p-6 xl:p-8 flex flex-col justify-end bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c] to-transparent">

                                        <div className={`transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                            <h4 className="text-xl xl:text-2xl font-bold text-white mb-3 tracking-tight">
                                                {item.title} Overview
                                            </h4>

                                            {/* Features List */}
                                            <ul className="space-y-2 xl:space-y-2.5">
                                                {item.features.map((feature, fIndex) => (
                                                    <li key={fIndex} className="flex items-center gap-2.5 xl:gap-3 text-xs xl:text-[14px] font-medium text-gray-300">
                                                        <div className="w-4.5 h-4.5 xl:w-5 xl:h-5 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/40 flex items-center justify-center shadow-[0_0_10px_rgba(124,58,237,0.2)] flex-shrink-0">
                                                            <svg className="w-2.5 h-2.5 xl:w-3 xl:h-3 text-[#a855f7]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                        </div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <button className="mt-4 xl:mt-5 text-xs xl:text-sm font-bold text-[#a855f7] hover:text-white transition-colors flex items-center gap-2 group pointer-events-auto w-fit">
                                                Explore specific modules
                                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>

            </div>
        </section>
    );
}
