"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";
import { Product, sharedMockProducts } from "../data/products";

const categories = [
    { name: "All Products", count: 120 },
    { name: "Fruits & Vegetables", count: 40, sub: ["Fresh Fruits", "Fresh Veggies"] },
    { name: "Food Products", count: 88, sub: ["Cereals", "Canned Food"] },
    { name: "Utensils", count: 45, sub: ["Tableware", "Cookware"] },
    { name: "Pastries", count: 32 },
    { name: "Detergents", count: 24 },
    { name: "Cosmetics", count: 36 },
    { name: "Toys for kids", count: 41 },
];

export default function MarketExplorer() {
    const [selectedCategory, setSelectedCategory] = useState("All Products");
    const [selectedSub, setSelectedSub] = useState<string | null>(null);

    const handleCategoryClick = (name: string) => {
        setSelectedCategory(name);
        setSelectedSub(null);
    };

    const handleSubClick = (sub: string) => {
        setSelectedSub(sub);
    };

    const supermarketProducts = sharedMockProducts.filter(p => p.origin === "supermarket");

    const filteredProducts = supermarketProducts.filter(p => {
        if (selectedCategory === "All Products") return true;
        if (selectedSub) return p.subCategory === selectedSub;
        return p.category === selectedCategory;
    });

    return (
        <section className="py-16">
            {/* Top Categories Chip Bar - Handles wide range with scroll */}
            <div className="mb-12">
                <h3 className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-6 px-4">Popular Categories</h3>
                <div className="flex gap-4 overflow-x-auto pb-6 px-4 scrollbar-hide no-scrollbar">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat.name}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCategoryClick(cat.name)}
                            className={`flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-[24px] border transition-all duration-300 ${selectedCategory === cat.name ? 'bg-[#fc7d00] border-[#fc7d00] text-white shadow-lg shadow-[#fc7d00]/20' : 'bg-white border-gray-100 text-gray-600 hover:border-[#fc7d00]/30 hover:shadow-sm'}`}
                        >
                            <span className="text-[14px] font-[900] whitespace-nowrap">{cat.name}</span>
                        </motion.button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                
                {/* Sidebar Explorer */}
                <div className="w-full lg:w-[280px] flex-shrink-0">
                    <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm sticky top-24">
                        <h3 className="text-[10px] font-black tracking-[0.2em] text-[#fc7d00] uppercase mb-8 flex items-center gap-2">
                            <span className="w-4 h-0.5 bg-[#fc7d00]"></span>
                            Market Explorer
                        </h3>
                        
                        <ul className="space-y-1">
                            {categories.map((cat) => {
                                const isActive = selectedCategory === cat.name;
                                return (
                                    <li key={cat.name} className="group">
                                        <div 
                                            onClick={() => handleCategoryClick(cat.name)}
                                            className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-300 ${isActive ? 'bg-[#fff5eb] text-[#fc7d00]' : 'hover:bg-gray-50 text-gray-600'}`}
                                        >
                                            <span className={`text-[13px] font-bold ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}>
                                                {cat.name}
                                            </span>
                                            <span className={`text-[10px] font-black ${isActive ? 'text-[#fc7d00]' : 'text-gray-300'}`}>
                                                {cat.count}
                                            </span>
                                        </div>
                                        
                                        <AnimatePresence>
                                            {cat.sub && isActive && (
                                                <motion.div 
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="ml-4 mt-2 mb-4 space-y-1 overflow-hidden"
                                                >
                                                    {cat.sub.map((sub) => (
                                                        <div 
                                                            key={sub}
                                                            onClick={() => handleSubClick(sub)}
                                                            className={`text-[12px] p-2 pl-4 rounded-xl cursor-pointer transition-all ${selectedSub === sub ? 'text-[#fc7d00] font-bold bg-[#fff5eb]/50' : 'text-gray-400 hover:text-[#fc7d00] hover:bg-gray-50'}`}
                                                        >
                                                            • {sub}
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-10 pt-8 border-t border-gray-50">
                            <h4 className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-4">Quick Perks</h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-[10px] text-green-600 font-bold">✓</div>
                                    <span className="text-[11px] font-[900] text-gray-600">100% Organic</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[10px] text-[#fc7d00] font-bold">★</div>
                                    <span className="text-[11px] font-[900] text-gray-600">Fast Delivery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Grid Area */}
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-8 px-4">
                        <div>
                            <h2 className="text-3xl font-black text-[#1a1c1e] tracking-tight mb-2">
                                {selectedSub || selectedCategory}
                            </h2>
                            <p className="text-[12px] text-gray-400 font-bold uppercase tracking-widest">
                                Discover {filteredProducts.length} Premium Essentials
                            </p>
                        </div>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredProducts.map((product, idx) => (
                                <ScrollReveal key={product.id} delay={idx * 50}>
                                    <ProductCard {...product} />
                                </ScrollReveal>
                            ))}
                        </div>
                    ) : (
                        <div className="h-[400px] flex flex-col items-center justify-center text-center bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-100">
                            <span className="text-4xl mb-4">📦</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Coming Soon!</h3>
                            <p className="text-gray-400 text-sm max-w-[280px]">We are restocking our {selectedSub || selectedCategory} section with the freshest items.</p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
