"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";

interface Product {
    name: string;
    image: string;
    weight: string;
    price: number;
    originalPrice?: number;
    rating: number;
    badge?: "sale" | "new";
    category?: string;
}

interface ProductSectionProps {
    title: string;
    products: Product[];
    filters?: string[];
    activeFilter?: string;
    onFilterChange?: (filter: string) => void;
}

export default function ProductSection({ title, products, filters, activeFilter: externalFilter, onFilterChange }: ProductSectionProps) {
    const [internalFilter, setInternalFilter] = useState(filters && filters.length > 0 ? filters[0] : "All");
    
    const activeFilter = externalFilter || internalFilter;
    const setActiveFilter = onFilterChange || setInternalFilter;

    // Filter products: if activeFilter is NOT 'All' (or equivalent 'All product'), filter by product.category.
    const filteredProducts = products.filter(product => {
        if (!filters || filters.length === 0) return true; // no tabs
        if (activeFilter.toLowerCase().includes("all")) return true; // show all
        return product.category === activeFilter;
    });

    return (
        <section className="py-10">
            <div className="flex items-center justify-between mb-8">
                <h2 className="section-title">{title}</h2>
                {filters && (
                    <div className="hidden md:flex items-center gap-6">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`filter-tab ${filter === activeFilter ? "active" : ""}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product, idx) => (
                    <ScrollReveal key={`${product.name}-${idx}`} delay={idx * 50}>
                        <ProductCard {...product} />
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
