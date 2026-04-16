import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategoryBento from "./components/CategoryBento";
import MarketExplorer from "./components/MarketExplorer";
import ProductSection from "./components/ProductSection";
import PromoBanners from "./components/PromoBanners";
import DealOfMonth from "./components/DealOfMonth";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ScrollReveal from "./components/ScrollReveal";
import { sharedMockProducts } from "./data/products";

export default function Home() {
  const supermarketProducts = sharedMockProducts.filter(p => p.origin === "supermarket");
  const bestSellerDisplay = supermarketProducts.slice(0, 5);

  return (
    <div className="min-h-screen bg-white">
      <Preloader />
      <TopBar />
      <Navbar />

      {/* Global content container with large side padding */}
      <div className="max-w-[1440px] mx-auto px-24">
        <ScrollReveal animation="reveal-scale">
          <HeroSection />
        </ScrollReveal>

        {/* Featured Category Bento */}
        <ScrollReveal delay={100}>
          <CategoryBento />
        </ScrollReveal>

        {/* The Hierarchical Market Explorer */}
        <ScrollReveal delay={200}>
          <MarketExplorer />
        </ScrollReveal>

        <ScrollReveal>
          <PromoBanners />
        </ScrollReveal>


        <ScrollReveal>
          <ProductSection
            title="Best Seller"
            products={bestSellerDisplay}
          />
        </ScrollReveal>

        <ScrollReveal animation="reveal-scale">
          <DealOfMonth />
        </ScrollReveal>
      </div>

      <ScrollReveal delay={100}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

