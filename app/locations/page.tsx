"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Rwanda Province SVG Paths (Simplified for representation)
// In a real app, these would be precise paths. These are approximations for the UI.
const provinces = [
  {
    id: "RW01",
    name: "Kigali City",
    d: "M320 280 L350 280 L350 310 L320 310 Z", // Placeholder
    fill: "#fc7d00",
    branches: [
      {
        id: 1,
        name: "Kigali City Center",
        address: "KN 2 St, Kigali",
        phone: "+250 123 456 789",
        email: "kigali.cc@simba.id",
        type: "Full Service",
      },
      {
        id: 2,
        name: "Remera Hub",
        address: "KG 11 Ave, Remera",
        phone: "+250 987 654 321",
        email: "remera@simba.id",
        type: "Express",
      },
    ],
  },
  {
    id: "RW03",
    name: "Northern Province",
    d: "M280 180 L400 180 L420 250 L250 250 Z", // Placeholder
    fill: "#fc7d00",
    branches: [
      {
        id: 3,
        name: "Musanze Branch",
        address: "Ruhengeri Road, Musanze",
        phone: "+250 555 666 777",
        email: "musanze@simba.id",
        type: "Distribution",
      },
    ],
  },
  {
    id: "RW04",
    name: "Western Province",
    d: "M150 220 L250 220 L280 450 L120 450 Z", // Placeholder
    fill: "#fc7d00",
    branches: [
      {
        id: 4,
        name: "Gisenyi Waterfront",
        address: "Lake Kivu Rd, Rubavu",
        phone: "+250 111 222 333",
        email: "gisenyi@simba.id",
        type: "Full Service",
      },
    ],
  },
  {
    id: "RW05",
    name: "Southern Province",
    d: "M250 350 L350 350 L400 550 L200 550 Z", // Placeholder
    fill: "#fc7d00",
    branches: [
      {
        id: 5,
        name: "Huye Academic",
        address: "University Ave, Huye",
        phone: "+250 444 888 999",
        email: "huye@simba.id",
        type: "Express",
      },
    ],
  },
  {
    id: "RW02",
    name: "Eastern Province",
    d: "M450 250 L600 250 L620 500 L420 500 Z", // Placeholder
    fill: "#fc7d00",
    branches: [
      {
        id: 6,
        name: "Kayonza Junction",
        address: "Highway Blvd, Kayonza",
        phone: "+250 000 111 222",
        email: "kayonza@simba.id",
        type: "Hub",
      },
    ],
  },
];

// Actual Rwanda Path for the whole country to use as background
const rwandaOutline =
  "M318.17 12.39L338.3 22.82L371.3 24.38L375.22 42.12L400.08 51.52L409.25 79.7L434.72 82.84L455.62 101.65L475.21 106.35L485.66 128.3L524.84 133.01L532.68 153.39L537.9 220.81L558.81 241.19L574.48 241.19L592.77 249.03L607.13 294.5L626.73 308.61L626.73 328.98L641.1 336.83L641.1 405.81L655.47 433.99L655.45 464.33C655.45 464.33 656.76 469.79 658.07 472.16L659.38 481.56L671.13 495.67L673.74 516.03L669.83 522.3L637.19 519.16L628.05 528.57L620.21 527.01L592.78 541.12L581.02 536.41L567.96 541.12L560.13 534.85L551 537.98L540.54 534.85L532.69 542.69C532.69 542.69 527.46 544.24 524.85 545.83L513.1 542.69L502.66 547.39L490.9 541.12L475.23 544.25L463.48 539.54L456.95 541.12L446.5 536.41L428.21 544.25L416.46 539.54L412.54 527.01L399.47 523.87L386.41 531.71L370.74 523.87L348.54 533.28L343.32 542.69L311.97 542.69L301.53 528.57L289.77 531.71L274.1 522.3L254.51 528.57L241.45 523.87L228.38 528.57L215.32 523.87L215.34 509.68C215.34 509.68 211.39 509.7 207.48 506.63L191.81 506.63L182.68 494.08L174.84 498.78L170.92 489.37L153.94 489.37L147.42 481.54L133.05 487.8L130.43 475.26L125.21 475.26L112.16 459.58L104.32 464.29L105.62 443.91L99.09 443.91L91.26 431.37L96.48 423.53L86.03 414.12L83.43 400.02L87.35 390.6L82.12 378.07L87.35 370.23L83.43 357.69L93.88 349.85L93.88 338.88L82.12 331.05L75.61 316.94L87.36 302.83L80.83 293.43L87.36 284.02L80.84 274.63L87.36 266.78L100.43 268.35L112.17 257.38L129.17 262.08L143.53 252.68L156.6 257.38L173.57 241.71L193.16 244.84L208.84 230.73L211.45 204.09L223.2 196.25L215.37 172.74L219.29 157.07L227.13 147.66L238.88 149.23L249.33 133.56L267.62 128.85L271.53 113.18L280.68 110.05L289.82 119.45L310.71 103.78L314.63 77.13L327.69 64.59L326.39 36.38L318.55 31.68L318.17 12.39Z";

const branches = provinces.flatMap((p) => p.branches);

export default function LocationsPage() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  return (
    <div className="min-h-screen bg-[#fffcf8] text-[#1a1a1a] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden">
        {/* Left Side: Map */}
        <div className="flex-1 relative bg-[#f0f4f8] p-4 md:p-8 flex items-center justify-center overflow-hidden">
          {/* Map Controls */}
          <div className="absolute top-8 left-8 z-10 flex flex-col gap-2">
            <button className="w-10 h-10 bg-white shadow-lg rounded-lg flex items-center justify-center hover:bg-gray-50 transition-all">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </button>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <button className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider bg-gray-100 border-b border-gray-200">
                Map
              </button>
              <button className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider hover:bg-gray-50 transition-all text-gray-400">
                Satellite
              </button>
            </div>
          </div>

          {/* Search Overlay */}
          <div className="absolute top-8 right-8 z-10 w-full max-w-[320px]">
            <div className="bg-white shadow-xl rounded-full p-1 flex items-center border border-gray-100">
              <input
                type="text"
                placeholder="Panel number, zip, or city..."
                className="flex-1 bg-transparent px-4 py-2 text-xs font-semibold focus:outline-none placeholder:text-gray-300"
              />
              <button className="bg-[#1a1c1e] text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all">
                Go
              </button>
            </div>
          </div>

          {/* SVG Map of Rwanda */}
          <div className="w-full h-full max-w-[800px] max-h-[600px] relative">
            <svg
              viewBox="0 0 750 600"
              className="w-full h-full drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.1))" }}
            >
              {/* Background Glow */}
              <circle
                cx="375"
                cy="300"
                r="250"
                fill="url(#mapGlow)"
                opacity="0.5"
              />
              <defs>
                <radialGradient id="mapGlow">
                  <stop offset="0%" stopColor="#fc7d00" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#fc7d00" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Rwanda Base Shape */}
              <path
                d={rwandaOutline}
                fill="#ffffff"
                stroke="#e2e8f0"
                strokeWidth="2"
              />

              {/* Provinces / Regions interaction */}
              {provinces.map((province) => (
                <g key={province.id}>
                  {/* Simplified Province Interactive Area */}
                  {/* In a real map, these would be the actual province paths */}
                </g>
              ))}

              {/* Animated Markers for Branches */}
              {branches.map((branch, idx) => (
                <motion.g
                  key={branch.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                  onClick={() => setSelectedBranch(branch)}
                  className="cursor-pointer group"
                >
                  {/* Pulse Effect */}
                  <motion.circle
                    cx={150 + idx * 80} // Distributed for visualization
                    cy={150 + idx * 60}
                    r="12"
                    fill="#fc7d00"
                    opacity="0.3"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {/* Marker Pin */}
                  <circle
                    cx={150 + idx * 80}
                    cy={150 + idx * 60}
                    r="8"
                    fill={
                      selectedBranch.id === branch.id ? "#1a1c1e" : "#fc7d00"
                    }
                    className="transition-colors duration-300"
                  />
                  <text
                    x={150 + idx * 80}
                    cy={150 + idx * 60 + 4}
                    textAnchor="middle"
                    fill="white"
                    fontSize="8"
                    fontWeight="bold"
                    className="pointer-events-none"
                  >
                    {idx + 1}
                  </text>

                  {/* Label on Hover */}
                  <g className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <rect
                      x={150 + idx * 80 + 12}
                      y={150 + idx * 60 - 15}
                      width="100"
                      height="24"
                      rx="4"
                      fill="#1a1c1e"
                    />
                    <text
                      x={150 + idx * 80 + 20}
                      y={150 + idx * 60 + 1}
                      fill="white"
                      fontSize="9"
                      fontWeight="bold"
                    >
                      Click to see details
                    </text>
                  </g>
                </motion.g>
              ))}
            </svg>
          </div>

          {/* Floating 'Hide' Button for Sidebar (Design consistency) */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-xl border border-gray-100 p-2 rounded-l-xl flex items-center justify-center hover:bg-gray-50 transition-all group">
            <div className="flex flex-col items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <span className="text-[8px] font-black uppercase tracking-tighter [writing-mode:vertical-lr]">
                Hide
              </span>
            </div>
          </button>
        </div>

        {/* Right Side: Sidebar */}
        <div className="w-full md:w-[380px] bg-gray-50 border-l border-gray-100 flex flex-col overflow-y-auto custom-scrollbar p-6 space-y-6">
          {/* Contacts Section */}
          <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-[#fc7d00]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">
                  Contacts
                </h3>
              </div>
              <button className="text-gray-300 hover:text-gray-900 transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </button>
            </div>

            <div className="relative z-10">
              <h4 className="text-base font-bold text-[#1a1a1a] mb-1">
                {selectedBranch.name}
              </h4>
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-4">
                Branch Manager |{" "}
                {selectedBranch.address.split(",")[1]?.trim() || "Unit"}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fc7d00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {selectedBranch.phone}
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fc7d00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {selectedBranch.email}
                </div>
              </div>
            </div>
          </section>

          {/* Products Section (Filters) */}
          <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-[#fc7d00]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">
                  Services
                </h3>
              </div>
              <button className="text-gray-300">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Fresh Store", active: true, color: "#fc7d00" },
                { label: "Electronics", active: true, color: "#34d399" },
                { label: "Home Delivery", active: true, color: "#fbbf24" },
                { label: "Pharmacy", active: false, color: "#f87171" },
                { label: "Pharmacy Store", active: true, color: "#60a5fa" },
                { label: "Wholesale", active: false, color: "#a78bfa" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center border ${item.active ? "bg-[#fc7d00] border-[#fc7d00]" : "border-gray-200"}`}
                  >
                    {item.active && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span
                    className={`text-[10px] font-bold ${item.active ? "text-gray-700" : "text-gray-300"}`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[9px] text-gray-300 font-medium mt-4">
              * Colored services available at this branch
            </p>
          </section>

          {/* Packages & Promotions */}
          <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-[#fc7d00]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">
                  Promotions
                </h3>
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-black text-[#1a1a1a]">
                15% off Fresh Veggies in March
              </h4>
              <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                **Prices vary based on branch inventory and seasonal
                availability.
              </p>
              <button className="text-[#fc7d00] text-[10px] font-black uppercase tracking-widest mt-2 hover:underline">
                View bundles
              </button>
            </div>
          </section>

          {/* All Branches List */}
          <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
              Nearby Branches
            </h3>
            <div className="space-y-4">
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch)}
                  className={`cursor-pointer pb-3 border-b border-gray-50 last:border-0 transition-all ${selectedBranch.id === branch.id ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xs font-bold text-[#1a1a1a]">
                        {branch.name}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-medium">
                        {branch.address}
                      </p>
                    </div>
                    <span className="text-[9px] font-black text-[#fc7d00] uppercase tracking-tighter bg-[#fff3e6] px-2 py-0.5 rounded">
                      {branch.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
