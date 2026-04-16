import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const categories = [
    { name: "Breakfast & Cereal", image: "/images/cat-breakfast.png" },
    { name: "Produce", image: "/images/cat-produce.png" },
    { name: "Dairy", image: "/images/cat-dairy.png" },
    { name: "Meat & Seafood", image: "/images/cat-meat.png" },
    { name: "Snacks & Lunch Ideas", image: "/images/cat-snacks.png" },
    { name: "Frozen Foods", image: "/images/cat-frozen.png" },
];

interface CategorySectionProps {
    activeCategory?: string;
    onSelectCategory?: (category: string) => void;
}

export default function CategorySection({ activeCategory, onSelectCategory }: CategorySectionProps) {
    return (
        <section className="py-12">
            <h2 className="section-title text-center mb-10">Shop by category</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                {categories.map((cat, index) => {
                    const isActive = activeCategory === cat.name;
                    return (
                        <ScrollReveal key={cat.name} animation="reveal-scale" delay={index * 100}>
                            <div 
                                onClick={() => onSelectCategory?.(cat.name)}
                                className="block group cursor-pointer"
                            >
                                <div className="category-item">
                                    <div className={`category-circle transition-all duration-300 ${isActive ? 'ring-4 ring-[#fc7d00] scale-110 shadow-lg' : 'group-hover:scale-105'}`}>
                                        <Image
                                            src={cat.image}
                                            alt={cat.name}
                                            width={90}
                                            height={90}
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                    <span className={`category-name transition-colors ${isActive ? 'text-[#fc7d00] font-bold' : 'group-hover:text-[#fc7d00]'}`}>
                                        {cat.name}
                                    </span>
                                </div>
                            </div>
                        </ScrollReveal>
                    );
                })}
            </div>
        </section>
    );
}
