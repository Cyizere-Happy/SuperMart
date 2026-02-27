"use client";

const categories = [
    { name: "All Products", count: 120, active: true },
    { name: "Utensils", count: 45, sub: ["Tableware", "Cookware"] },
    { name: "Pastries", count: 32 },
    { name: "Food Products", count: 88, sub: ["Cereals", "Canned Food"] },
    { name: "Detergents", count: 24 },
    { name: "Cosmetics", count: 36 },
    { name: "Fruits & Vegetables", count: 40, sub: ["Fresh Fruits", "Fresh Veggies"] },
    { name: "Toys for kids", count: 41 },
];

const filters = [
    { name: "New Arrival", icon: "✨" },
    { name: "Best Seller", icon: "🔥" },
    { name: "Big Discount", icon: "🏷️" },
];

export default function ShopSidebar() {
    return (
        <aside className="w-full md:w-[260px] flex-shrink-0">
            <div className="mb-10">
                <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">Category</h3>
                <ul className="space-y-4">
                    {categories.map((cat) => (
                        <li key={cat.name} className="group">
                            <div className="flex items-center justify-between cursor-pointer mb-2">
                                <span className={`text-[13px] font-medium transition-colors ${cat.active ? 'text-[#fc7d00]' : 'text-gray-600 group-hover:text-[#fc7d00]'}`}>
                                    {cat.sub ? '▾ ' : ''}{cat.name}
                                </span>
                                <span className="text-[10px] text-gray-300 font-bold group-hover:text-[#fc7d00]">
                                    {cat.count}
                                </span>
                            </div>
                            {cat.sub && (
                                <ul className="ml-4 space-y-2 border-l border-gray-100 pl-4 py-1">
                                    {cat.sub.map((sub) => (
                                        <li key={sub} className="text-[12px] text-gray-400 hover:text-[#fc7d00] cursor-pointer transition-colors">
                                            {sub}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">Filter</h3>
                <ul className="space-y-4">
                    {filters.map((filter) => (
                        <li key={filter.name} className="flex items-center gap-3 group cursor-pointer">
                            <span className="text-sm group-hover:scale-125 transition-transform">{filter.icon}</span>
                            <span className="text-[13px] font-medium text-gray-600 group-hover:text-[#fc7d00] transition-colors">
                                {filter.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
