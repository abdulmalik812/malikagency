import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { ProcessSection } from "@/components/home/process-section";
import { FeaturedWork } from "@/components/home/featured-work";
import { TrustedApproach } from "@/components/home/trusted-approach";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Malik Agencies — Software Studio",
  description:
    "Malik Agencies partners with teams to design, build, and evolve web, mobile, and custom software products.",
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
