"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { toggleCart } = useCart();

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/Logo.png"
            alt="Simba"
            width={50}
            height={50}
            className="object-contain"
            priority
          />
        </div>

        {/* Nav links - Center */}
        <div className="flex items-center gap-8">
          {[
            { label: "Home", active: true, href: "/" },
            { label: "About", active: false, href: "#" },
            { label: "Shop", active: false, dropdown: true, href: "/shop" },
            { label: "Pages", active: false, dropdown: true, href: "#" },
            { label: "Blog", active: false, href: "#" },
            { label: "Contact", active: false, href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                link.active
                  ? "text-[#fc7d00]"
                  : "text-gray-700 hover:text-[#fc7d00]"
              }`}
            >
              {link.label}
              {link.dropdown && (
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className="opacity-50"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Right - CTA Button & Cart */}
        <div className="flex items-center gap-6">
          <button
            onClick={toggleCart}
            className="relative p-2 text-gray-700 hover:text-[#fc7d00] transition-colors"
            aria-label="Toggle Cart"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-[#fc7d00] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
              2
            </span>
          </button>
          <button className="px-6 py-2.5 rounded-full border-2 border-[#fc7d00] text-[#fc7d00] text-sm font-semibold hover:bg-[#fc7d00] hover:text-white transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
