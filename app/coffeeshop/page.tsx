"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Jost, Dancing_Script } from "next/font/google";
import { useCart } from "../context/CartContext";

const jost = Jost({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-jost",
});

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-cursive",
});

export default function CoffeeShopPage() {
    const { addToCart } = useCart();

    return (
        <div className={`min-h-screen bg-[#faf7f2] text-[#1a1a1a] ${jost.variable} ${dancingScript.variable} font-sans flex flex-col overflow-hidden`}>
            <Navbar />

            <main className="flex-1 w-full max-w-[1280px] mx-auto relative pt-12 pb-32">
                {/* Background Decorative Blurs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#fdfcf0] blur-[120px] rounded-full -z-10 opacity-60" />
                <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[#f5efe4] blur-[100px] rounded-full -z-10 opacity-50" />

                <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12">

                    {/* Left Side: Hero Image Group */}
                    <div className="w-full md:w-1/2 relative flex justify-center items-center">
                        <div className="relative w-[500px] h-[400px] hover:scale-[1.05] transition-transform duration-700 ease-in-out rounded-[100px] overflow-hidden shadow-[0_40px_100px_rgba(74,52,36,0.15)] ring-8 ring-white/20">
                            {/* Main Coffee */}
                            <Image
                                src="/images/coffeeshop_hero_latte.png"
                                alt="Signature Artisan Latte"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

             
                    <div className="w-full md:w-1/2 flex flex-col relative z-20">

                        {/* Badge Label */}
                        <div className="absolute -top-10 right-10 bg-[#cdaa7d] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg border-4 border-[#fffaf5] transform rotate-12 hover:rotate-0 transition-transform cursor-default z-30">
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-90">Price</span>
                            <div className="flex items-center -mt-1 font-black">
                                <span className="text-sm">$</span>
                                <span className="text-3xl leading-none">5.50</span>
                            </div>
                        </div>

                        {/* Title Group */}
                        <div className="mb-4">
                            {/* Script Type Subheading */}
                            <h3 className="text-6xl text-[#8b5e3c] font-['var(--font-cursive)'] -mb-4 relative z-10 transform -rotate-3 ml-2 drop-shadow-sm font-bold">
                                Artisan
                            </h3>
                            {/* Main Title */}
                            <h1 className="text-8xl md:text-[110px] font-black tracking-tighter text-[#4a3424] leading-none drop-shadow-sm">
                                Latte
                            </h1>
                        </div>

                        {/* Ratings */}
                        <div className="flex items-center gap-2 mb-8">
                            <div className="flex text-[#cdaa7d] text-sm">
                                {"★★★★★".split("").map((star, i) => (
                                    <span key={i} className="drop-shadow-sm">{star}</span>
                                ))}
                            </div>
                            <span className="font-black text-lg text-[#4a3424] ml-1">4.9</span>
                            <span className="text-xs font-bold text-[#8b5e3c]/60 underline underline-offset-4 cursor-pointer hover:text-[#8b5e3c]">1.2k Reviews</span>
                        </div>

                        {/* Description Card */}
                        <div className="bg-[#fffdfa]/60 backdrop-blur-xl rounded-[40px] p-8 shadow-xl shadow-[#4a3424]/5 max-w-lg mb-8 border border-white/40 relative group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <p className="text-[#4a3424]/80 font-medium leading-relaxed relative z-10 text-[16px]">
                                Experience the perfect harmony of our premium house espresso and silky micro-foam. Each cup is a masterpiece, handcrafted with beans sourced from the volcanic soils of East Africa.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <button className="bg-[#4a3424] hover:bg-[#322419] text-white font-black text-[13px] tracking-widest uppercase px-10 py-4 rounded-full shadow-[0_15px_30px_rgba(74,52,36,0.25)] transition-all active:scale-95 shrink-0">
                                Order Now
                            </button>
                            <button className="bg-transparent border-2 border-[#4a3424]/20 text-[#4a3424] hover:bg-[#4a3424] hover:text-white font-black text-[13px] tracking-widest uppercase px-10 py-4 rounded-full transition-all active:scale-95 shrink-0">
                                View Menu
                            </button>
                        </div>

                    </div>

                </div>
            </main>

            {/* Harmonized Layered SVG Divider */}
            <div className="w-full relative z-30 -mt-24 pointer-events-none">
                {/* Secondary Wave (Lower Opacity) */}
                <svg viewBox="0 0 1440 120" className="w-full h-[80px] md:h-[150px] text-[#f5efe4] fill-current opacity-40 absolute bottom-0 left-0" preserveAspectRatio="none">
                    <path d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z"></path>
                </svg>
                {/* Main Wave */}
                <svg viewBox="0 0 1440 120" className="w-full h-[80px] md:h-[150px] text-[#fffaf5] fill-current relative" preserveAspectRatio="none">
                    <path d="M0,60 C320,120 420,0 720,60 C1020,120 1120,0 1440,60 L1440,120 L0,120 Z"></path>
                </svg>
            </div>

            {/* Category Section with Matching Background */}
            <div className="bg-[#fffaf5] pt-20 pb-16">
                <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">
                    <div className="max-w-3xl mb-16 px-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-[2px] bg-[#cdaa7d]" />
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#cdaa7d]">Premium Selection</span>
                        </div>
                        <h2 className="text-5xl font-black text-[#4a3424] tracking-tight mb-6">Crafted for your palate</h2>
                        <p className="text-[#8b5e3c]/60 font-semibold text-[16px] leading-relaxed max-w-2xl">
                            From the robust intensity of our signature espresso to the delicate notes of our loose-leaf teas, explore a world of artisan beverages.
                        </p>
                    </div>

                    {/* Categories Slider */}
                    <div className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x px-2">
                        {[
                            { name: "Espresso", img: "/images/coffeeshop_espresso.png" },
                            { name: "Latte", img: "/images/coffeeshop_hero_latte.png" },
                            { name: "Pastries", img: "/images/coffeeshop_croissant.png" },
                            { name: "Cold Brew", img: "/images/coffeeshop_cold_brew.png" },
                            { name: "Beans", img: "/images/coffeeshop_beans.png" },
                            { name: "Tea", img: "/images/coffeeshop_tea.png" }
                        ].map((cat, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-5 shrink-0 snap-start cursor-pointer group">
                                <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-sm border border-white group-hover:border-[#cdaa7d] transition-all relative p-3 bg-white hover:shadow-xl hover:shadow-[#4a3424]/5">
                                    <div className="relative w-full h-full">
                                        <Image src={cat.img} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-2xl" />
                                    </div>
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#8b5e3c]/40 group-hover:text-[#4a3424] transition-colors">{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Menu Grid with Harmonized Background */}
            <div className="bg-[#fffaf5] pb-32">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-8 lg:gap-y-32 mt-12">
                        {/* Double Espresso Card */}
                        <div className="bg-[#1a1a1a] rounded-[50px] p-8 relative mt-16 flex flex-col items-center group shadow-2xl hover:-translate-y-2 transition-transform duration-500">
                            <div className="absolute -top-[90px] w-[200px] h-[170px] drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500 rounded-[60px] overflow-hidden">
                                <Image src="/images/coffeeshop_espresso.png" alt="Double Espresso" fill className="object-cover" />
                            </div>

                            <div className="absolute top-12 right-6 bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-md border border-gray-100 z-20 transform hover:scale-110 transition-transform">
                                <div className="flex items-start text-[#1a1a1a] font-black leading-none">
                                    <span className="text-[10px] mt-[1px]">$</span>
                                    <span className="text-lg">3.25</span>
                                </div>
                            </div>

                            <div className="w-full mt-[70px] text-white">
                                <h3 className="text-2xl font-['var(--font-cursive)'] mb-[-8px] ml-1 drop-shadow-sm opacity-70">Classic</h3>
                                <h2 className="text-3xl font-black tracking-tighter mb-3 drop-shadow-sm text-white italic">Espresso</h2>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-[10px] font-black px-3 py-1 bg-white/10 rounded-full text-[#cdaa7d] tracking-widest uppercase">Premium Brew</span>
                                </div>

                                <p className="text-white/60 text-[13px] font-medium leading-relaxed mb-8 h-12 overflow-hidden line-clamp-2">
                                    A concentrated burst of pure coffee essence with a thick, golden crema.
                                </p>

                                <button
                                    onClick={() => addToCart({ id: 'cs-1', name: 'Classic Espresso', price: 3.25, image: '/images/coffeeshop_espresso.png', quantity: 1, category: 'Brewed' })}
                                    className="bg-[#cdaa7d] hover:bg-[#b89568] text-white text-[11px] font-black uppercase tracking-widest px-5 py-4 rounded-full transition-all active:scale-95 shadow-[0_10px_25px_rgba(205,170,125,0.3)] w-full">
                                    Add to Order
                                </button>
                            </div>
                        </div>

                        {/* Almond Croissant Card */}
                        <div className="bg-[#cdaa7d] rounded-[50px] p-8 relative mt-16 flex flex-col items-center group shadow-2xl hover:-translate-y-2 transition-transform duration-500">
                            <div className="absolute -top-[90px] w-[200px] h-[170px] drop-shadow-[0_25px_40px_rgba(74,52,36,0.3)] group-hover:scale-110 transition-transform duration-500 rounded-[60px] overflow-hidden">
                                <Image src="/images/coffeeshop_croissant.png" alt="Almond Croissant" fill className="object-cover" />
                            </div>

                            <div className="absolute top-12 right-6 bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-md border border-gray-100 z-20 transform hover:scale-110 transition-transform">
                                <div className="flex items-start text-[#cdaa7d] font-black leading-none">
                                    <span className="text-[10px] mt-[1px]">$</span>
                                    <span className="text-lg">4.75</span>
                                </div>
                            </div>

                            <div className="w-full mt-[70px] text-white">
                                <h3 className="text-2xl font-['var(--font-cursive)'] mb-[-8px] ml-1 drop-shadow-sm opacity-90">Artisan</h3>
                                <h2 className="text-3xl font-black tracking-tighter mb-3 drop-shadow-sm text-white">Croissant</h2>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-[10px] font-black px-3 py-1 bg-white/20 rounded-full tracking-widest uppercase">Freshly Baked</span>
                                </div>

                                <p className="text-white/80 text-[13px] font-medium leading-relaxed mb-8 h-12 overflow-hidden line-clamp-2">
                                    Flaky buttery layers filled with rich almond cream and toasted slivers.
                                </p>

                                <button
                                    onClick={() => addToCart({ id: 'cs-2', name: 'Almond Croissant', price: 4.75, image: '/images/coffeeshop_croissant.png', quantity: 1, category: 'Pastry' })}
                                    className="bg-[#4a3424] hover:bg-[#322419] text-white text-[11px] font-black uppercase tracking-widest px-5 py-4 rounded-full transition-all active:scale-95 shadow-lg w-full">
                                    Add to Order
                                </button>
                            </div>
                        </div>

                        {/* Coffee Beans Card */}
                        <div className="bg-[#4a3424] rounded-[50px] p-8 relative mt-16 flex flex-col items-center group shadow-2xl hover:-translate-y-2 transition-transform duration-500">
                            <div className="absolute -top-[90px] w-[200px] h-[170px] drop-shadow-[0_25px_40px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform duration-500 rounded-[60px] overflow-hidden">
                                <Image src="/images/coffeeshop_beans.png" alt="Dark Roast" fill className="object-cover" />
                            </div>

                            <div className="absolute top-12 right-6 bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-md border border-gray-100 z-20 transform hover:scale-110 transition-transform">
                                <div className="flex items-start text-[#4a3424] font-black leading-none">
                                    <span className="text-[10px] mt-[1px]">$</span>
                                    <span className="text-lg">18.00</span>
                                </div>
                            </div>

                            <div className="w-full mt-[70px] text-white">
                                <h3 className="text-2xl font-['var(--font-cursive)'] mb-[-8px] ml-1 drop-shadow-sm opacity-90">Dark</h3>
                                <h2 className="text-3xl font-black tracking-tighter mb-3 drop-shadow-sm text-white">Roast</h2>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-[10px] font-black px-3 py-1 bg-white/10 rounded-full text-[#cdaa7d] tracking-widest uppercase">Single Origin</span>
                                </div>

                                <p className="text-white/80 text-[13px] font-medium leading-relaxed mb-8 h-12 overflow-hidden line-clamp-2">
                                    Premium roasted beans with deep chocolatey and smoky oak profiles.
                                </p>

                                <button
                                    onClick={() => addToCart({ id: 'p-2', name: 'Dark Roast Beans', price: 18.00, image: '/images/coffeeshop_beans.png', quantity: 1, category: 'Beans' })}
                                    className="bg-[#cdaa7d] hover:bg-[#b89568] text-white text-[11px] font-black uppercase tracking-widest px-5 py-4 rounded-full transition-all active:scale-95 shadow-[0_10px_25px_rgba(205,170,125,0.3)] w-full">
                                    Add to Order
                                </button>
                            </div>
                        </div>

                        {/* Honey Oat Muffin Card */}
                        <div className="bg-[#8b5e3c] rounded-[50px] p-8 relative mt-16 flex flex-col items-center group shadow-2xl hover:-translate-y-2 transition-transform duration-500">
                            <div className="absolute -top-[90px] w-[200px] h-[170px] drop-shadow-[0_25px_40px_rgba(139,94,60,0.3)] group-hover:scale-110 transition-transform duration-500 rounded-[60px] overflow-hidden">
                                <Image src="/images/cat-breakfast.png" alt="Honey Muffin" fill className="object-cover" />
                            </div>

                            <div className="absolute top-12 right-6 bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-md border border-gray-100 z-20 transform hover:scale-110 transition-transform">
                                <div className="flex items-start text-[#8b5e3c] font-black leading-none">
                                    <span className="text-[10px] mt-[1px]">$</span>
                                    <span className="text-lg">3.95</span>
                                </div>
                            </div>

                            <div className="w-full mt-[70px] text-white">
                                <h3 className="text-2xl font-['var(--font-cursive)'] mb-[-8px] ml-1 drop-shadow-sm opacity-90">Healthy</h3>
                                <h2 className="text-3xl font-black tracking-tighter mb-3 drop-shadow-sm text-white">Muffin</h2>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-[10px] font-black px-3 py-1 bg-[#1a1a1a]/40 rounded-full tracking-widest uppercase">Wholesome</span>
                                </div>

                                <p className="text-white/80 text-[13px] font-medium leading-relaxed mb-8 h-12 overflow-hidden line-clamp-2">
                                    Wholesome oats and natural honey with a hint of morning spice.
                                </p>

                                <button
                                    onClick={() => addToCart({ id: 'p-5', name: 'Honey Oat Muffin', price: 3.95, image: '/images/cat-breakfast.png', quantity: 1, category: 'Pastry' })}
                                    className="bg-[#1a1a1a] hover:bg-black text-white text-[11px] font-black uppercase tracking-widest px-5 py-4 rounded-full transition-all active:scale-95 shadow-lg w-full">
                                    Add to Order
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
