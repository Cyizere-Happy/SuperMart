"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "#" },
        { label: "Shop", href: "/shop", dropdown: true },
        { label: "Pages", href: "#", dropdown: true },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" },
    ];

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="max-w-[1280px] mx-auto px-12 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center flex-shrink-0">
                    <a href="/">
                        <Image
                            src="/Logo.png"
                            alt="Simba"
                            width={50}
                            height={50}
                            className="object-contain"
                            priority
                        />
                    </a>
                </div>

                {/* Nav links - Center */}
                <div className="flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`text-sm font-medium transition-colors flex items-center gap-1 ${isActive
                                    ? "text-[#fc7d00]"
                                    : "text-gray-700 hover:text-[#fc7d00]"
                                    }`}
                            >
                                {link.label}
                                {link.dropdown && (
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-50">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </a>
                        );
                    })}
                </div>

                {/* Right - CTA Button */}
                <div className="flex items-center">
                    <button className="px-6 py-2.5 rounded-full border-2 border-[#fc7d00] text-[#fc7d00] text-sm font-semibold hover:bg-[#fc7d00] hover:text-white transition-all duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
