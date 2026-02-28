import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import ImpactSummary from "../components/ImpactSummary";
import JourneySection from "../components/JourneySection";

export const metadata = {
    title: "About Us - Simba SuperMarket",
    description: "Learn about Simba SuperMarket's 10 years of impact and our journey towards providing fresh, organic groceries.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Preloader />
            <TopBar />
            <Navbar />

            <main>
                <ImpactSummary />
                <JourneySection />
            </main>

            <Footer />
        </div>
    );
}
