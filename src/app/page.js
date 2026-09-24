import Navbar from "@/components/navbar/Navbar";
import HeroSlider from "@/components/hero/HeroSlider";
import CompanyIntro from "@/components/sections/CompanyIntro";
import CapacitySection from "@/components/sections/CapacitySection";
import ProductGallery from "@/components/sections/ProductGallery";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import FactorySection from "@/components/sections/FactorySection";
import QualitySection from "@/components/sections/QualitySection";
import MachineryShowcase from "@/components/sections/MachineryShowcase";
import SustainabilitySection from "@/components/sections/SustainabilitySection";
import SocialCompliance from "@/components/sections/SocialCompliance";
import GlobalCustomers from "@/components/sections/GlobalCustomers";
import WhyDolphin from "@/components/sections/WhyDolphin";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F7F3] text-[#111111]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Sliding Hero Section powered by Swiper.js */}
      <HeroSlider />

      {/* Company Introduction */}
      <CompanyIntro />

      {/* Production Capacity Statistics */}
      <CapacitySection />

      {/* Product Categories & Gallery */}
      <ProductGallery />

      {/* From Sample to Shipment: 8-Step Timeline */}
      <ProcessTimeline />

      {/* Cinematic 30,000 Sq Ft Factory Section */}
      <FactorySection />

      {/* Total Quality Management (TQM) Radial Framework */}
      <QualitySection />

      {/* Machinery Showcase with Category Filters */}
      <MachineryShowcase />

      {/* Sustainability & Environmental Practices */}
      <SustainabilitySection />

      {/* Social Compliance & Workplace Safety */}
      <SocialCompliance />

      {/* International Markets & Buyers */}
      <GlobalCustomers />

      {/* Why Partner with Dolphin: 6 Advantages */}
      <WhyDolphin />

      {/* High-Impact CTA Banner */}
      <CtaSection />

      {/* Direct Contact & Inquiry Form */}
      <ContactSection />

      {/* Multi-Column Footer */}
      <Footer />
    </main>
  );
}
