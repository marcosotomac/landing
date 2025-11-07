import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";

// Lazy load sections that are below the fold for better initial load performance
const ProblemsSection = dynamic(() => import("@/components/sections/ProblemsSection"), {
  loading: () => <div className="h-screen" />,
});
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"), {
  loading: () => <div className="h-screen" />,
});
const StatsSection = dynamic(() => import("@/components/sections/StatsSection"), {
  loading: () => <div className="h-96" />,
});
const IndustriesSection = dynamic(() => import("@/components/sections/IndustriesSection"), {
  loading: () => <div className="h-screen" />,
});
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), {
  loading: () => <div className="h-screen" />,
});
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"), {
  loading: () => <div className="h-screen" />,
});
const CTASection = dynamic(() => import("@/components/sections/CTASection"), {
  loading: () => <div className="h-96" />,
});
const Footer = dynamic(() => import("@/components/sections/Footer"), {
  loading: () => <div className="h-96" />,
});

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
