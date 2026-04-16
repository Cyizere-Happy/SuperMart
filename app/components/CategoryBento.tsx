"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const topCategories = [
    { name: "Organic Produce", image: "/images/cat-produce.png", items: "40+ Items", color: "bg-[#f0f9f0]" },
    { name: "Dairy & Eggs", image: "/images/cat-dairy.png", items: "25+ Items", color: "bg-[#fefce8]" },
    { name: "Meat & Seafood", image: "/images/cat-meat.png", items: "30+ Items", color: "bg-[#fff1f2]" },
    { name: "Breakfast", image: "/images/cat-breakfast.png", items: "15+ Items", color: "bg-[#fff7ed]" },
    { name: "Snacks", image: "/images/cat-snacks.png", items: "50+ Items", color: "bg-[#f0f4ff]" },
    { name: "Frozen Foods", image: "/images/cat-frozen.png", items: "20+ Items", color: "bg-[#f0fdfa]" },
];

export default function CategoryBento() {
    return (
        <section className="py-16">
            <div className="flex items-center justify-between mb-10">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-[900] text-[#1a1c1e] tracking-tight">Shop By Category</h2>
                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">Explore our freshest marketplace arrivals</p>
                </div>
                <button className="text-[#fc7d00] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    View All Categories
                    <span>→</span>
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {topCategories.map((cat, idx) => (
                    <motion.div
                        key={cat.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group flex flex-col items-center cursor-pointer"
                    >
                        {/* Circle Image Container */}
                        <div className={`relative w-32 h-32 mb-4 rounded-full ${cat.color} p-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-black/5 ring-4 ring-transparent group-hover:ring-[#fc7d00]/10`}>
                            <div className="relative w-full h-full overflow-hidden rounded-full">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        
                        <h3 className="text-[14px] font-black text-[#1a1c1e] mb-1 leading-tight group-hover:text-[#fc7d00] transition-colors">{cat.name}</h3>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{cat.items}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
