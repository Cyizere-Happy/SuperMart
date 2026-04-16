"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="max-w-[1440px] mx-auto px-12 py-4">
            <div className="flex flex-col lg:flex-row gap-5">
                
                {/* Main Hero Banner - Left (Wider & Shorter) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-[2] relative rounded-[28px] overflow-hidden min-h-[280px] lg:min-h-[340px] group flex items-center bg-[#f0f3f6]"
                >
                    {/* Content Section */}
                    <div className="relative z-10 w-full lg:w-[60%] p-8 lg:p-14 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <h1 className="text-[32px] lg:text-[44px] font-[900] text-[#1a1c1e] leading-[1] mb-5 tracking-tighter">
                                Fresh Market <br />
                                <span className="text-[#fc7d00]">Direct To Your Door</span>
                            </h1>
                            
                            <p className="text-gray-500 font-bold text-[13px] mb-8 max-w-[320px] leading-relaxed">
                                Join our Simba community for fresh organic produce, quality groceries, and daily essentials.
                            </p>
                            
                            <Link href="/shop" className="block mb-6">
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-[#1a1c1e] w-fit px-10 py-3.5 rounded-full font-[900] text-[11px] uppercase tracking-[0.15em] shadow-xl shadow-gray-200/40 transition-all border border-gray-100/50"
                                >
                                    Shop Now
                                </motion.button>
                            </Link>

                            <Link href="/shop" className="flex items-center gap-2 text-[#fc7d00] font-black text-[11px] uppercase tracking-widest hover:translate-x-2 transition-transform">
                                <span>Enter Marketplace</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                        </motion.div>

                        {/* Pagination indicator */}
                        <div className="absolute bottom-8 left-14 flex items-center gap-2">
                            <span className="text-[10px] font-black text-gray-300">01</span>
                            <div className="w-10 h-0.5 bg-gray-200 relative overflow-hidden rounded-full">
                                <div className="absolute top-0 left-0 w-1/2 h-full bg-[#fc7d00]" />
                            </div>
                            <span className="text-[10px] font-black text-gray-400">02</span>
                        </div>
                    </div>

                    {/* Image Section - Repositioned for wider layout */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="absolute right-0 bottom-0 w-1/2 lg:w-[45%] h-full z-0 flex items-end justify-end pointer-events-none"
                    >
                        <Image
                            src="/images/hero_juice.png"
                            alt="Juice Milk"
                            width={500}
                            height={500}
                            className="object-contain object-right-bottom scale-110 translate-y-4 group-hover:scale-115 transition-transform duration-1000 rounded-[40px]"
                            priority
                        />
                    </motion.div>
                </motion.div>

                {/* Side Promo Banner - Right */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex-[0.85] relative rounded-[28px] overflow-hidden min-h-[280px] lg:min-h-[340px] group bg-[#ffc107] flex flex-col"
                >
                    <div className="relative z-10 p-10 pb-0 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <h2 className="text-[32px] lg:text-[38px] font-[900] text-[#1a1c1e] leading-[1] mb-3 tracking-tighter">
                                20% SALE <br /> OFF
                            </h2>
                            <p className="text-[#1a1c1e]/70 font-bold text-[12px] mb-6 leading-relaxed">
                                Synthetic seeds <br /> Net 2.0 OZ
                            </p>
                            
                            <Link href="/shop">
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-[#1a1c1e] w-fit px-8 py-3 rounded-full font-[900] text-[10px] uppercase tracking-[0.15em] shadow-lg shadow-black/5"
                                >
                                    Shop Now
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image Section - Now takes up the whole bottom part */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex-1 w-full pointer-events-none overflow-hidden relative mt-4"
                    >
                        <Image
                            src="/images/hero_food_box.png"
                            alt="Food Box"
                            fill
                            className="object-cover object-center group-hover:scale-110 transition-transform duration-1000"
                        />
                    </motion.div>

                    {/* Decorative element */}
                    <div className="absolute top-8 right-8">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-20 text-[#1a1c1e]">
                            <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
