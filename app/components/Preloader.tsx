"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        // Check if preloader has already been shown in this session
        const hasShown = sessionStorage.getItem('simba-loader-done');

        if (hasShown) {
            setShouldRender(false);
            setLoading(false);
            window.dispatchEvent(new Event('simba-loader-finished'));
            return;
        }

        // Hide loader after a delay to simulate loading
        const timer = setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('simba-loader-done', 'true');
            // Dispatch event to start entrance animations
            window.dispatchEvent(new Event('simba-loader-finished'));

            // Remove from DOM after fade-out transition
            setTimeout(() => setShouldRender(false), 800);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    if (!shouldRender) return null;

    return (
        <div className={`fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${!loading ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'}`}>
            {/* Logo and Spinner Container */}
            <div className="relative flex items-center justify-center w-[140px] h-[140px]">
                {/* SVG Spinner - Elegant thin strokes */}
                <svg className="animate-spin h-full w-full absolute inset-0 text-[#fc7d00]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1"></circle>
                    <circle className="opacity-100" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="16 48" strokeLinecap="round"></circle>
                </svg>

                {/* Center Logo using standard img tag */}
                <img
                    src="/Logo.png"
                    alt="Simba Logo"
                    className="w-20 h-20 object-contain relative z-10"
                />
            </div>

            {/* Loading Text */}
            <div className="mt-8 text-[#fc7d00] font-bold tracking-[0.3em] text-xs uppercase animate-pulse">
                Loading...
            </div>
        </div>
    );
}
