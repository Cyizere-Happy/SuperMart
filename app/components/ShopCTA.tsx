"use client";

import ScrollReveal from "./ScrollReveal";

export default function ShopCTA() {
    return (
        <section className="py-16">
            <ScrollReveal animation="reveal-scale">
                <div className="relative w-full bg-[#1a1a1a] rounded-3xl overflow-hidden p-12 md:p-20 flex flex-col items-center text-center">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#fc7d00] opacity-10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 max-w-lg leading-tight">
                        Ready to Get Our New Stuff?
                    </h2>

                    <p className="text-gray-400 text-sm md:text-base mb-10 max-w-md">
                        Subscribe to our newsletter and get exclusive offers, new arrivals, and special discounts delivered straight to your inbox.
                    </p>

                    <form className="w-full max-w-md relative flex items-center">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 pr-32 text-white outline-none focus:border-[#fc7d00]/50 transition-colors"
                            required
                        />
                        <button className="absolute right-2 h-10 px-6 bg-[#fc7d00] text-white text-[11px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#d96a00] transition-all whitespace-nowrap">
                            Subscribe
                        </button>
                    </form>

                    <p className="mt-6 text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                        Join 10k+ SIMBA Members today <span className="text-[#fc7d00] ml-2">●</span>
                    </p>
                </div>
            </ScrollReveal>
        </section>
    );
}
