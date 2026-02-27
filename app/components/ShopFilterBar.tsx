"use client";

export default function ShopFilterBar() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="text-gray-400 text-xs font-medium tracking-wide">
                Showing <span className="text-gray-900 font-bold">1–12</span> of 120 results
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
                <div className="relative flex-1 md:w-[300px]">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full h-10 bg-gray-50 border-none rounded-lg px-4 text-sm focus:ring-1 focus:ring-[#fc7d00] transition-all outline-none"
                    />
                </div>
                <button className="h-10 px-6 bg-[#fc7d00] text-white text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-[#d96a00] transition-colors">
                    Query
                </button>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Sort by:</span>
                <select className="bg-transparent text-[13px] font-bold outline-none cursor-pointer">
                    <option>Default Sorting</option>
                    <option>Newest Arrivals</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Seller</option>
                </select>
            </div>
        </div>
    );
}
