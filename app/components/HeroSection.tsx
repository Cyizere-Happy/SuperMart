"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
    {
        badge: "100% PURE & NATURAL",
        title: "Fresh Mango\nJuice Just Fruit",
        price: "$39.99",
        image: "/images/hero-mango.png",
    },
    {
        badge: "PREMIUM QUALITY",
        title: "Fresh Vegetables\n& Organic Greens",
        price: "$12.99",
        image: "/images/product-peppers.png",
    },
    {
        badge: "BEST SELECTION",
        title: "Daily Fresh\nFruits & Berries",
        price: "$24.99",
        image: "/images/product-grapes.png",
    },
    {
        badge: "HEALTHY CHOICES",
        title: "Breakfast Cereal\n& Morning Treats",
        price: "$8.99",
        image: "/images/cat-breakfast.png",
    },
    {
        badge: "FARM FRESH",
        title: "Premium Dairy\n& Bakery Items",
        price: "$15.99",
        image: "/images/cat-dairy.png",
    },
    {
        badge: "HOUSEHOLD ESSENTIALS",
        title: "Snacks, Chips\n& Chocolates",
        price: "$6.99",
        image: "/images/cat-snacks.png",
    },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % slides.length);
                setIsAnimating(false);
            }, 400);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    const slide = slides[current];

    return (
        <section className="py-6">
            <div className="hero-section flex flex-col lg:flex-row gap-4 p-6 lg:p-8">
                {/* Left - Main Hero */}
                <div className="flex-1 flex flex-col lg:flex-row items-center gap-6">
                    <div className="flex-1 py-6 lg:py-10 lg:pl-6">
                        <span
                            className={`hero-badge inline-block mb-4 transition-all duration-400 ${isAnimating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
                                }`}
                        >
                            {slide.badge}
                        </span>
                        <h2
                            className={`text-3xl lg:text-4xl font-bold leading-tight mb-4 transition-all duration-400 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                                }`}
                            style={{ color: "var(--text-dark)", whiteSpace: "pre-line" }}
                        >
                            {slide.title}
                        </h2>
                        <p
                            className={`hero-price mb-6 transition-all duration-400 ${isAnimating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
                                }`}
                        >
                            Start from <span>{slide.price}</span>
                        </p>
                        <button className="shop-now-btn">Shop Now</button>

                        {/* Slide Indicators */}
                        <div className="flex items-center gap-2 mt-6">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setIsAnimating(true);
                                        setTimeout(() => {
                                            setCurrent(i);
                                            setIsAnimating(false);
                                        }, 400);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === current
                                            ? "w-8 bg-[#fc7d00]"
                                            : "w-2 bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    aria-label={`Slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div
                        className={`flex-shrink-0 w-[250px] h-[280px] lg:w-[300px] lg:h-[320px] relative transition-all duration-400 ${isAnimating
                                ? "opacity-0 scale-95"
                                : "opacity-100 scale-100"
                            }`}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Right - Promo Cards */}
                <div className="w-full lg:w-[300px] flex flex-col gap-4">
                    {/* 40% Off Card */}
                    <div className="promo-card promo-card-yellow p-5 flex items-center gap-3 cursor-pointer hover:shadow-lg transition-shadow">
                        <div className="flex-1">
                            <h3 className="text-lg font-bold leading-tight mb-1" style={{ color: "var(--text-dark)" }}>
                                40% Off<br />Everyday Fresh
                            </h3>
                            <p className="text-xs opacity-70">Fresh Produce Order Today</p>
                        </div>
                        <div className="w-[100px] h-[90px] relative flex-shrink-0">
                            <Image
                                src="/images/hero-fresh.png"
                                alt="Everyday Fresh"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* 20% Off Card */}
                    <div className="promo-card promo-card-green p-5 flex items-center gap-3 cursor-pointer hover:shadow-lg transition-shadow">
                        <div className="flex-1">
                            <h3 className="text-lg font-bold leading-tight mb-1" style={{ color: "var(--text-dark)" }}>
                                20% Off<br />Healthy Food
                            </h3>
                            <p className="text-xs opacity-70">Start from $29.99</p>
                        </div>
                        <div className="w-[100px] h-[90px] relative flex-shrink-0">
                            <Image
                                src="/images/hero-healthy.png"
                                alt="Healthy Food"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
