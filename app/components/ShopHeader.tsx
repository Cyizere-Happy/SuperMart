"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
    "/images/hero-healthy.png",
    "/images/hero-fresh.png",
    "/images/banner-fruit.png",
];

export default function ShopHeader() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Rotate every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
            {/* Iterating Background Images */}
            <div className="absolute inset-0 z-0 bg-gray-900">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={heroImages[currentIndex]}
                            alt="Shop Background"
                            fill
                            className="object-cover brightness-50"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Large Background Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-[180px] md:text-[280px] font-black text-white/10 tracking-tighter leading-none uppercase"
                >
                    Simba
                </motion.h1>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 bg-[#fc7d00] text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded-full shadow-lg">
                        Premium Selection
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
                        SIMBA MARKET
                    </h2>
                    <p className="text-white/80 text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
                        Sourcing Quality • Delivering Freshness
                    </p>
                </motion.div>
            </div>

            {/* Pagination Indicators */}
            <div className="absolute bottom-10 flex gap-3 z-20">
                {heroImages.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1 rounded-full transition-all duration-500 ${currentIndex === idx ? 'w-12 bg-[#fc7d00]' : 'w-4 bg-white/30 hover:bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
}
