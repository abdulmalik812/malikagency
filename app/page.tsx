import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { ProcessSection } from "@/components/home/process-section";
import { FeaturedWork } from "@/components/home/featured-work";
import { TrustedApproach } from "@/components/home/trusted-approach";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Malik Agencies — Software Development Agency",
  description:
    "Malik Agencies builds world-class web apps, mobile applications, and AI-powered software for ambitious businesses. From idea to launch, we deliver.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProcessSection />
      <FeaturedWork />
      <TrustedApproach />
      <CTASection />
    </>
  );
}
