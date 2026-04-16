export interface Product {
    id: string;
    name: string;
    image: string;
    weight: string;
    price: number;
    originalPrice?: number;
    rating: number;
    badge?: "sale" | "new";
    category: string;
    subCategory?: string;
    description: string;
    images: string[];
    sizes: string[];
    colors: string[];
    origin: "supermarket" | "coffeeshop";
}

export const sharedMockProducts: Product[] = [
    // --- Supermarket Products ---
    {
        id: "organic-cucumber",
        name: "Fresh Organic Cucumber",
        image: "/images/product-cucumber.png",
        weight: "500g",
        price: 18.33,
        originalPrice: 24.99,
        rating: 4,
        badge: "sale",
        category: "Fruits & Vegetables",
        subCategory: "Fresh Veggies",
        description: "Crispy and refreshing organic cucumbers, grown locally and perfect for summer salads.",
        images: ["/images/product-cucumber.png"],
        sizes: ["Single", "Pack of 3"],
        colors: ["#2d5a27"],
        origin: "supermarket",
    },
    {
        id: "fresh-green-beans",
        name: "Fresh Green Beans",
        image: "/images/product-beans.png",
        weight: "per Kg",
        price: 6.89,
        originalPrice: 9.99,
        rating: 3,
        badge: "sale",
        category: "Fruits & Vegetables",
        subCategory: "Fresh Veggies",
        description: "Farm-fresh green beans, rich in fiber and vitamins. Hand-picked for the best quality.",
        images: ["/images/product-beans.png"],
        sizes: ["500g", "1kg"],
        colors: ["#4a7c44"],
        origin: "supermarket",
    },
    {
        id: "sweet-bell-peppers",
        name: "Sweet Bell Peppers",
        image: "/images/product-peppers.png",
        weight: "2 lb",
        price: 98.28,
        rating: 5,
        category: "Fruits & Vegetables",
        subCategory: "Fresh Veggies",
        description: "Colorful and crunchy bell peppers, perfect for roasting, stuffing, or snacking.",
        images: ["/images/product-peppers.png"],
        sizes: ["Individual", "3-Color Pack"],
        colors: ["#c53030", "#ecc94b", "#48bb78"],
        origin: "supermarket",
    },
    {
        id: "organic-lemons",
        name: "Zesty Organic Lemons",
        image: "/images/product-lemons.png",
        weight: "3 units",
        price: 114.06,
        rating: 4,
        category: "Fruits & Vegetables",
        subCategory: "Fresh Fruits",
        description: "Bright and juicy organic lemons, essential for cooking, baking, and refreshing drinks.",
        images: ["/images/product-lemons.png"],
        sizes: ["3-Pack", "Bag of 1kg"],
        colors: ["#f6e05e"],
        origin: "supermarket",
    },
    {
        id: "red-seedless-grapes",
        name: "Red Seedless Grapes",
        image: "/images/product-grapes.png",
        weight: "1 Kg",
        price: 12.01,
        rating: 3,
        category: "Fruits & Vegetables",
        subCategory: "Fresh Fruits",
        description: "Sweet and succulent seedless grapes, a perfect healthy snack for any time of day.",
        images: ["/images/product-grapes.png"],
        sizes: ["500g Box", "1kg Bag"],
        colors: ["#805ad5"],
        origin: "supermarket",
    },
    // --- Coffee Shop Products ---
    {
        id: "signature-artisan-latte",
        name: "Signature Artisan Latte",
        image: "/images/coffeeshop_hero_latte.png",
        weight: "350ml",
        price: 5.50,
        originalPrice: 6.50,
        rating: 5,
        badge: "new",
        category: "Coffee",
        description: "Our signature latte features perfectly steamed milk and a double shot of our premium house espresso.",
        images: ["/images/coffeeshop_hero_latte.png"],
        sizes: ["Small", "Medium", "Large"],
        colors: ["#d2b48c", "#8b4513"],
        origin: "coffeeshop",
    },
    {
        id: "premium-dark-roast-beans",
        name: "Premium Dark Roast Beans",
        image: "/images/coffeeshop_beans.png",
        weight: "500g",
        price: 18.00,
        rating: 5,
        category: "Beans",
        description: "Exotic dark roasted beans with notes of dark chocolate and smoky oak.",
        images: ["/images/coffeeshop_beans.png"],
        sizes: ["250g", "500g", "1kg"],
        colors: ["#4a3424"],
        origin: "coffeeshop",
    },
    {
        id: "classic-double-espresso",
        name: "Classic Double Espresso",
        image: "/images/coffeeshop_espresso.png",
        weight: "60ml",
        price: 3.25,
        rating: 5,
        category: "Coffee",
        description: "A concentrated burst of flavor with a thick, golden crema.",
        images: ["/images/coffeeshop_espresso.png"],
        sizes: ["Single", "Double"],
        colors: ["#1a1a1a"],
        origin: "coffeeshop",
    },
    {
        id: "flaky-almond-croissant",
        name: "Flaky Almond Croissant",
        image: "/images/coffeeshop_croissant.png",
        weight: "150g",
        price: 4.75,
        rating: 4,
        category: "Pastries",
        description: "Buttery, flaky layers filled with sweet almond cream.",
        images: ["/images/coffeeshop_croissant.png"],
        sizes: ["Standard"],
        colors: ["#f5deb3"],
        origin: "coffeeshop",
    },
    {
        id: "artisan-iced-cold-brew",
        name: "Artisan Iced Cold Brew",
        image: "/images/coffeeshop_cold_brew.png",
        weight: "400ml",
        price: 4.50,
        rating: 5,
        badge: "sale",
        category: "Coffee",
        description: "Steeped for 18 hours for maximum smoothness.",
        images: ["/images/coffeeshop_cold_brew.png"],
        sizes: ["Medium", "Large"],
        colors: ["#2d1e1e"],
        origin: "coffeeshop",
    },
    {
        id: "premium-herbal-tea",
        name: "Premium Herbal Tea",
        image: "/images/coffeeshop_tea.png",
        weight: "300ml",
        price: 3.50,
        rating: 5,
        category: "Tea",
        description: "A calming blend of premium loose-leaf herbal tea.",
        images: ["/images/coffeeshop_tea.png"],
        sizes: ["Standard"],
        colors: ["#6b8e23"],
        origin: "coffeeshop",
    }
];

export const getProductById = (id: string): Product => {
    return sharedMockProducts.find(p => p.id === id) || sharedMockProducts[0];
};
