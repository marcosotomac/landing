import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <ProblemsSection />
        <div id="soluciones">
          <ServicesSection />
        </div>
        <StatsSection />
        <div id="industrias">
          <IndustriesSection />
        </div>
        <div id="testimonios">
          <TestimonialsSection />
        </div>
        <div id="proceso">
          <ProcessSection />
        </div>
        <div id="contacto">
          <CTASection />
        </div>
        <Footer />
      </main>
    </>
  );
}
