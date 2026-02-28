import ScrollReveal from "./ScrollReveal";

const milestones = [
    {
        title: "Inception",
        description: "Reflection on ten years of milestones that shaped SIMBA.",
        position: { x: 15, y: 70 },
        delay: 0
    },
    {
        title: "Expansion",
        description: "Expanding to serve various communities in Rwanda.",
        position: { x: 35, y: 80 },
        delay: 200
    },
    {
        title: "Excellence",
        description: "Quality products provided at affordable prices.",
        position: { x: 50, y: 40 },
        delay: 400
    },
    {
        title: "Achievements",
        description: "First best retail exhibitor.",
        position: { x: 70, y: 60 },
        delay: 600
    },
    {
        title: "DESTINATION",
        description: "",
        position: { x: 90, y: 18 }, // Moved slightly down to prevent clipping
        isDestination: true,
        delay: 800
    }
];

export default function JourneySection() {
    return (
        <section className="pt-0 pb-48 lg:pb-56 bg-white overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto px-12 md:px-24 relative lg:min-h-[500px] min-h-[900px]">

                {/* SVG Path Background - Aligned to milestones */}
                <div className="absolute inset-0 pointer-events-none hidden lg:block">
                    <svg width="100%" height="100%" viewBox="0 0 1000 500" fill="none" preserveAspectRatio="none">
                        <path
                            d="M 150 350 C 250 350 300 400 350 400 S 450 200 500 200 S 650 300 700 300 S 850 90 900 90"
                            stroke="#e5e7eb"
                            strokeWidth="3.5"
                            strokeDasharray="8 8"
                            className="opacity-80"
                        />
                    </svg>
                </div>

                {/* Milestones */}
                {milestones.map((milestone, idx) => {
                    const isValidation = milestone.title === "Excellence";
                    const isExpansion = milestone.title === "Expansion";
                    const isPartnerships = milestone.title === "Achievements";

                    return (
                        <div
                            key={idx}
                            className="lg:absolute relative mb-16 lg:mb-0 transform lg:-translate-x-1/2 lg:-translate-y-1/2 group z-10"
                            style={{
                                left: `${milestone.position.x}%`,
                                top: `${milestone.position.y}%`
                            }}
                        >
                            <ScrollReveal animation="reveal-scale" delay={milestone.delay}>
                                <div className="flex flex-col items-center">

                                    {/* Connection Dot - Scaled down */}
                                    <div className={`relative flex items-center justify-center ${milestone.isDestination ? 'w-14 h-14' : 'w-9 h-9'}`}>
                                        {milestone.isDestination && (
                                            <>
                                                <div className="absolute inset-3 rounded-full border border-[#fc7d00] opacity-20 animate-ping"></div>
                                                <div className="absolute -inset-0.5 rounded-full border border-[#fc7d00] opacity-5"></div>
                                                <div className="absolute -inset-3 rounded-full border border-[#fc7d00] opacity-5"></div>

                                                {/* Destination Label */}
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[7px] font-black px-3.5 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 z-20">
                                                    <div className="w-1 h-1 rounded-full bg-[#fc7d00]"></div>
                                                    {milestone.title}
                                                </div>
                                            </>
                                        )}

                                        {/* The Dot itself */}
                                        <div className={`rounded-full bg-white shadow-lg flex items-center justify-center border-[4px] border-[#fcfcfc] group-hover:border-orange-50 transition-all ${milestone.isDestination ? 'w-9 h-9' : 'w-6 h-6'}`}>
                                            <div className={`rounded-full bg-[#fc7d00] ${milestone.isDestination ? 'w-4 h-4' : 'w-2.5 h-2.5'} shadow-md shadow-orange-400`}></div>
                                        </div>
                                    </div>

                                    {/* Milestone Content - Scaled down */}
                                    {!milestone.isDestination && (
                                        <div className={`mt-5 text-center lg:w-[180px] w-full ${isValidation ? 'lg:absolute lg:bottom-full lg:mb-10 lg:mt-0' : isExpansion ? 'lg:absolute lg:top-full lg:mt-10' : isPartnerships ? 'lg:absolute lg:top-full lg:mt-10' : ''}`}>
                                            <h4 className="text-lg font-black text-gray-900 mb-0.5 tracking-tight">
                                                {milestone.title}
                                            </h4>
                                            <p className="text-[11px] text-gray-400 font-medium leading-relaxed px-4 lg:px-0">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>
                        </div>
                    );
                })}

                {/* Explore Stories Button - Scaled down */}
                <div className="lg:absolute relative mt-48 lg:mt-0 lg:-bottom-32 lg:left-1/2 lg:-translate-x-1/2 z-30 flex justify-center w-full">
                    <ScrollReveal animation="reveal-scale" delay={1000}>
                        <button className="bg-black text-white px-8 py-3.5 rounded-full font-black text-[9px] uppercase tracking-[0.2em] hover:bg-[#fc7d00] transition-all hover:scale-105 active:scale-95 flex items-center gap-2.5 shadow-lg shadow-black/5 group">
                            Explore Stories <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
