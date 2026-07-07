import Hero from "@/components/hero";
import ServicesSection from "@/components/services-section";
import ProcessSection from "@/components/process-section";
import WhyNestlya from "@/components/why-nestlya";
import FeaturedWork from "@/components/featured-work";
import CTA from "@/components/cta";
import TrustStrip from "@/components/trust-strip";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <ProcessSection />
      <WhyNestlya />
      <FeaturedWork />
      <FAQ />
      <CTA />
    </>
  );
}