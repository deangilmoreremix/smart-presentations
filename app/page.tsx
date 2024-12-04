"use client";

import { Navbar } from "@/components/navbar";
import { MouseGradient } from "@/components/mouse-gradient";
import { Footer } from "@/components/footer";
import {
  HeroSection,
  InputSection,
  GettingStartedSection,
  PreviewSection,
  HowItWorksSection,
  FeaturesSection,
  IntegrationsSection,
  PresentationTypesSection,
  TemplatesSection,
  PricingSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <MouseGradient />
      <Navbar />
      <HeroSection />
      <InputSection />
      <GettingStartedSection />
      <PreviewSection />
      <HowItWorksSection />
      <FeaturesSection />
      <IntegrationsSection />
      <PresentationTypesSection />
      <TemplatesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}