import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import ShopHeader from "../components/ShopHeader";
import ShopSidebar from "../components/ShopSidebar";
import ShopFilterBar from "../components/ShopFilterBar";
import ShopProductGrid from "../components/ShopProductGrid";
import ShopCTA from "../components/ShopCTA";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
    title: "Shop - Simba SuperMarket",
    description: "Browse our wide range of fresh produce, utensils, pastries, and more at Simba SuperMarket.",
};

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-white">
            <Preloader />
            <TopBar />
            <Navbar />

            <main>
                {/* Header Section */}
                <ScrollReveal animation="reveal-scale">
                    <ShopHeader />
                </ScrollReveal>

                {/* Main Content Sections */}
                <div className="max-w-[1440px] mx-auto px-12 md:px-24 py-16">
                    <div className="flex flex-col md:flex-row gap-20">

                        {/* Sidebar */}
                        <ScrollReveal animation="reveal-left" className="hidden md:block">
                            <ShopSidebar />
                        </ScrollReveal>

                        {/* Product Content Area */}
                        <div className="flex-1">
                            <ScrollReveal delay={100}>
                                <ShopFilterBar />
                            </ScrollReveal>

                            <ShopProductGrid />
                        </div>
                    </div>

                    {/* Recommendations Header */}
                    <ScrollReveal className="mt-20 mb-10">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                                Explore our recommendations
                            </h2>
                            <div className="flex gap-2">
                                <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors">←</button>
                                <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors">→</button>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Reuse Product Grid for recommendations for now */}
                    <ShopProductGrid />
                </div>
            </main>

            <Footer />
        </div>
    );
}
