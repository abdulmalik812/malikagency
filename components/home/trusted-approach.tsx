"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Lightbulb, Headphones } from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality Without Compromise",
    description:
      "Every line of code is written to production standards. We follow best practices in architecture, security, and performance by default — not as an afterthought.",
  },
  {
    icon: Clock,
    title: "Delivery You Can Count On",
    description:
      "We set realistic timelines and hit them. Weekly demos, clear milestones, and proactive communication mean no surprises at the end.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Partnership",
    description:
      "We don&apos;t just take requirements — we challenge assumptions, suggest better approaches, and think about your business goals, not just the spec.",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    description:
      "We&apos;re available after launch. Retainer maintenance, feature iterations, and dedicated support — we stay invested in your success.",
  },
];

export function TrustedApproach() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)" }}
      aria-labelledby="approach-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-[#10b981] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Approach
          </p>
          <h2
            id="approach-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4"
          >
            Built on principles
            <br />
            <span className="text-gradient">that matter.</span>
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-xl mx-auto">
            The values that guide every project we take on.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="card-surface card-hover p-6 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#10b981]/10 flex items-center justify-center mb-5 group-hover:bg-[#10b981]/20 transition-colors duration-300">
                <Icon className="w-5 h-5 text-[#10b981]" aria-hidden="true" />
              </div>
              <h3 className="text-[#f5f5f5] font-bold text-base mb-3">{title}</h3>
              <p className="text-[#a1a1a1] text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
