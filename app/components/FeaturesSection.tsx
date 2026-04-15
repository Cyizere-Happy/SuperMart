"use client";

import ScrollReveal from "./ScrollReveal";

const features = [
    {
        num: "01",
        title: "Fresh\nDelivery",
        desc: "Speedy delivery ensuring your groceries arrive as fresh as when they were picked.",
        color: "#6b8afc", // Blue
        bgColor: "#ecf0ff",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
        ),
    },
    {
        num: "02",
        title: "Organic\nAssortment",
        desc: "A wide variety of 100% certified organic products for a healthier lifestyle.",
        color: "#fc6b7a", // Red/Pink
        bgColor: "#ffecf0",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
            </svg>
        ),
    },
    {
        num: "03",
        title: "Support\n24/7",
        desc: "Our dedicated support team is available around the clock to assist you.",
        color: "#74d444", // Green
        bgColor: "#effee9",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
        ),
    },
    {
        num: "04",
        title: "Global\nCoverage",
        desc: "We source the finest items globally to bring the world's best to your table.",
        color: "#ff6bb8", // Pink
        bgColor: "#ffecf6",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
    },
    {
        num: "05",
        title: "Secure\nPayment",
        desc: "Multiple safe payment methods with end-to-end encryption for peace of mind.",
        color: "#4bd5a8", // Teal/Mint
        bgColor: "#e9fcf4",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
        ),
    },
    {
        num: "06",
        title: "Easy\nReturns",
        desc: "Not satisfied? Enjoy our hassle-free return policy within 30 days.",
        color: "#54cdde", // Cyan
        bgColor: "#eafafc",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10"></polyline>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
            </svg>
        ),
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] tracking-tight">
                        Why Choose Us?
                    </h2>
                    <p className="text-gray-500 font-medium max-w-xl mx-auto">
                        Experience the pinnacle of grocery shopping with our dedicated services designed exclusively for your convenience and health.
                    </p>
                </div>

                {/* Scattered Grid mimicking the image layout */}
                <div className="relative">
                    {/* Faint dotted connecting lines across the background */}
                    <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none stroke-gray-200">
                        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                            {/* Drawing curved dotted paths loosely connecting the cards. 
                   These rough coordinates assume standard desktop layout. */}
                            <path d="M 0,150 Q 150,140 300,200 T 700,100 T 1100,50" fill="none" strokeDasharray="8 8" strokeWidth="2" />
                            <path d="M 0,350 Q 200,320 400,450 T 800,250 T 1100,250" fill="none" strokeDasharray="8 8" strokeWidth="2" />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative z-10">
                        {features.map((feature, idx) => (
                            <ScrollReveal
                                key={feature.num}
                                delay={idx * 150}
                                className={`flex justify-center ${idx === 1 ? 'lg:translate-y-24' :
                                        idx === 4 ? 'lg:translate-y-20' :
                                            idx === 2 ? 'lg:-translate-y-6' : ''
                                    }`}
                            >
                                <div
                                    className="w-full max-w-[280px] rounded-3xl pb-[5px] transition-transform duration-300 hover:-translate-y-2"
                                    style={{ backgroundColor: feature.color }}
                                >
                                    <div className="relative h-full bg-white rounded-[22px] p-6 shadow-sm border-2 border-transparent hover:shadow-xl transition-shadow flex flex-col"
                                        style={{ borderColor: feature.bgColor }}>

                                        {/* Top Push Pin */}
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full shadow-md z-20 flex items-center justify-center transform -rotate-12"
                                            style={{ backgroundColor: feature.color, boxShadow: `0 4px 6px ${feature.color}60` }}>
                                            <div className="w-2 h-2 rounded-full bg-white/40"></div>
                                            <div className="absolute -bottom-2 -left-1 w-2 h-3 bg-gray-400/30 rounded-full blur-[2px] transform rotate-45"></div>
                                        </div>

                                        {/* Header: Number and Badge */}
                                        <div className="flex justify-between items-start mb-4">
                                            <span
                                                className="text-4xl font-black tracking-tighter"
                                                style={{ color: feature.color }}
                                            >
                                                {feature.num}
                                            </span>
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center text-white transform hover:rotate-12 transition-transform"
                                                style={{ backgroundColor: feature.color }}
                                            >
                                                {feature.icon}
                                            </div>
                                        </div>

                                        {/* Body: Title and Description */}
                                        <div className="flex-1 mt-2">
                                            <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 whitespace-pre-line leading-tight">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm font-medium leading-relaxed" style={{ color: '#6b7280' }}>
                                                {feature.desc}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
