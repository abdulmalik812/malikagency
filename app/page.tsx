import type { Metadata } from "next";
import { ScrollSculpture } from "@/components/experience/scroll-sculpture";
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
    <div className="home-story">
      <ScrollSculpture />
      <div className="story-chapter chapter-hero" data-side="right"><div className="story-stage"><span className="story-stage-label">01 / Explore</span></div><Hero /></div>
      <div className="story-chapter chapter-services" data-side="left"><div className="story-stage"><span className="story-stage-label">02 / Architecture</span></div><ServicesOverview /></div>
      <div className="story-chapter chapter-process" data-side="right"><div className="story-stage"><span className="story-stage-label">03 / Build</span></div><ProcessSection /></div>
      <div className="story-chapter chapter-work" data-side="left"><div className="story-stage"><span className="story-stage-label">04 / Connect</span></div><FeaturedWork /></div>
      <div className="story-chapter chapter-approach" data-side="right"><div className="story-stage"><span className="story-stage-label">05 / Refine</span></div><TrustedApproach /></div>
      <div className="story-chapter chapter-cta" data-side="left"><div className="story-stage"><span className="story-stage-label">06 / Launch</span></div><CTASection /></div>
    </div>
  );
}
