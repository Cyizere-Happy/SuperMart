import ScrollReveal from "./ScrollReveal";

export default function ImpactSummary() {
    return (
        <section className="pt-12 md:pt-16 pb-1 bg-white">
            <div className="max-w-[1440px] mx-auto px-12 md:px-24">
                <ScrollReveal animation="reveal-left">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 tracking-tight">
                        10 Years of Impact Summary
                    </h2>
                </ScrollReveal>

                <div className="max-w-3xl">
                    <ScrollReveal animation="reveal-left" delay={200}>
                        <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium mb-5">
            In 2023 Simba Supermarket celebrated its growth, marking over a decade of serving Kigali and Rwanda with a wide range of products. We reflected on milestones that shaped the company and celebrated through events across Kigali, highlighting our commitment to quality, affordability, and community impact. Our journey includes opening branches, expanding categories like furniture and cosmetics, and creating 450 jobs, reinforcing a destination.
        </p>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">
            Our core values focus on respect, service, and excellence. We treat each individual with dignity, provide quality products at low prices, and continuously seek innovative ideas to exceed customer expectations, driving growth and community impact through sustainable practices worldwide.
        </p>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
