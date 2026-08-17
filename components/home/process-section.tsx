"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "A focused 30-minute conversation to understand your vision, goals, and constraints. No jargon, no sales pitch — just honest exploration.",
  },
  {
    number: "02",
    title: "Proposal & Scoping",
    description:
      "A detailed proposal covering scope, timeline, tech stack, and pricing. Clear milestones, no surprises on either side.",
  },
  {
    number: "03",
    title: "Design & Architecture",
    description:
      "We map out system architecture and design the UI before writing a single line of code — preventing costly changes later.",
  },
  {
    number: "04",
    title: "Build & Iterate",
    description:
      "Agile sprints with weekly demos. You see real progress every week and guide direction with continuous feedback.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "We handle deployment, monitoring, and post-launch support. Your success after launch is part of our commitment.",
  },
];

export function ProcessSection() {
  return (
    <section
      className="section"
      style={{ background: "linear-gradient(180deg, #000 0%, #080808 100%)" }}
      aria-labelledby="process-heading"
    >
      <div className="container-apple">
        <ScrollReveal className="text-center mb-20">
          <p className="label-sm mb-3">How We Work</p>
          <h2
            id="process-heading"
            className="display-md text-white mb-5"
          >
            A process built
            <br />
            <span className="text-gradient-white">for clarity.</span>
          </h2>
          <p className="body-lg max-w-md mx-auto">
            Transparent, structured, and collaborative — at every step.
          </p>
        </ScrollReveal>

        <StaggerContainer>
          <div className="space-y-4">
            {steps.map(({ number, title, description }, idx) => (
              <motion.div
                key={number}
                variants={staggerItem}
                className="glass-card p-7 flex items-start gap-7 group hover:border-white/[0.12]"
              >
                {/* Step number */}
                <div className="shrink-0 pt-0.5">
                  <span className="step-number">{number}</span>
                </div>

                {/* Separator */}
                <div
                  className="shrink-0 w-px self-stretch mt-1.5 mb-1.5"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                  aria-hidden="true"
                />

                {/* Content */}
                <div>
                  <h3 className="text-white font-semibold text-[18px] tracking-[-0.02em] mb-2">
                    {title}
                  </h3>
                  <p className="text-white/50 text-[14px] leading-relaxed max-w-xl">
                    {description}
                  </p>
                </div>

                {/* Right accent dot */}
                <div className="ml-auto shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                  <div className="w-2 h-2 rounded-full bg-[#0a84ff]" />
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
