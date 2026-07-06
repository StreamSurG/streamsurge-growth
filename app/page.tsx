import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pain from "../components/Pain";
import Solutions from "../components/Solutions";
import Plans from "../components/Plans";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />

      <Hero />

      <Pain />

      <Solutions />

      <Plans />

      <Reviews />

      <FAQ />

      <CTA />

      <Footer />
    </main>
  );
}