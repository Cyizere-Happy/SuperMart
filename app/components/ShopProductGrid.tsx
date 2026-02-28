"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";

const mockProducts = [
  {
    name: "Premium Kitchen Utensil Set",
    image: "/images/product-cucumber.png",
    weight: "12 pcs",
    price: 45.99,
    rating: 5,
    category: "Utensils",
    badge: "new" as const,
  },
  {
    name: "Organic Whole Wheat Cereal",
    image: "/images/cat-breakfast.png",
    weight: "500g",
    price: 8.5,
    rating: 4,
    category: "Breakfast & Cereal",
  },
  {
    name: "Eco-Friendly Dish Soap",
    image: "/images/product-beans.png",
    weight: "750ml",
    price: 12.0,
    rating: 4,
    category: "Detergents",
    badge: "sale" as const,
  },
  {
    name: "Hydrating Face Cream",
    image: "/images/product-peppers.png",
    weight: "50ml",
    price: 24.99,
    rating: 5,
    category: "Cosmetics",
  },
  {
    name: "Educational Building Blocks",
    image: "/images/product-lemons.png",
    weight: "1 set",
    price: 35.0,
    rating: 5,
    category: "Toys for kids",
  },
  {
    name: "Fresh Artisan Pastry Box",
    image: "/images/cat-dairy.png",
    weight: "6 units",
    price: 18.0,
    rating: 4,
    category: "Dairy",
  },
  {
    name: "Stainless Steel Chef Knife",
    image: "/images/product-cucumber.png",
    weight: "8 inch",
    price: 55.0,
    rating: 5,
    category: "Utensils",
  },
  {
    name: "Natural Honey & Oats",
    image: "/images/cat-breakfast.png",
    weight: "400g",
    price: 6.75,
    rating: 4,
    category: "Produce",
  },
  {
    name: "All-Purpose Cleaner",
    image: "/images/product-beans.png",
    weight: "1L",
    price: 15.5,
    rating: 4,
    category: "Detergents",
  },
  {
    name: "Organic Lavender Oil",
    image: "/images/product-peppers.png",
    weight: "30ml",
    price: 19.99,
    rating: 5,
    category: "Cosmetics",
  },
  {
    name: "Soft Plush Lion Toy",
    image: "/Logo.png",
    weight: "Medium",
    price: 22.0,
    rating: 5,
    category: "Toys for kids",
    badge: "new" as const,
  },
  {
    name: "Gourmet Pasta Sauce",
    image: "/images/product-lemons.png",
    weight: "500g",
    price: 9.5,
    rating: 4,
    category: "Meat & Seafood",
  },
];

function ProductGridContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const filteredProducts = categoryParam
    ? mockProducts.filter((p) => p.category === categoryParam || p.category.includes(categoryParam.replace(" & ", "")))
    : mockProducts;

  if (filteredProducts.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-xl font-medium text-gray-500 mb-2">No products found</h3>
        <p className="text-sm text-gray-400">There are currently no items in the "{categoryParam}" category.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        {filteredProducts.map((product, idx) => (
          <ScrollReveal key={`${product.name}-${idx}`} delay={idx * 50}>
            <ProductCard {...product} variant="horizontal" />
          </ScrollReveal>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 border-t border-gray-100 pt-8">
        <button className="w-10 h-10 flex items-center justify-center text-sm font-bold text-gray-400 hover:text-[#fc7d00] transition-colors">
          ←
        </button>
        {[1, 2, 3, "...", 10].map((page, i) => (
          <button
            key={i}
            className={`w-10 h-10 flex items-center justify-center text-xs font-bold rounded-lg transition-all ${page === 1
              ? "bg-[#fc7d00] text-white shadow-lg shadow-[#fc7d00]/20"
              : "text-gray-400 hover:bg-gray-50"
              }`}
          >
            {page}
          </button>
        ))}
        <button className="w-10 h-10 flex items-center justify-center text-sm font-bold text-gray-400 hover:text-[#fc7d00] transition-colors">
          →
        </button>
      </div>
    </div>
  );
}

export default function ShopProductGrid() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-gray-400 animate-pulse">Loading products...</div>}>
      <ProductGridContent />
    </Suspense>
  );
}
