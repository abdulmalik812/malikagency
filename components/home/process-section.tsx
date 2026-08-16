"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a focused 30-minute call to understand your vision, goals, existing tech, and constraints. No jargon, no sales pitch.",
  },
  {
    number: "02",
    title: "Proposal & Scoping",
    description:
      "We send a detailed proposal covering scope, timeline, tech stack, and pricing. Clear milestones, no surprises.",
  },
  {
    number: "03",
    title: "Design & Architecture",
    description:
      "We map out the system architecture and design the UI before writing a line of code — saving costly changes later.",
  },
  {
    number: "04",
    title: "Build & Iterate",
    description:
      "Agile sprints with weekly demos. You see real progress every week and can give feedback continuously.",
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
      className="section-padding bg-[#0d0d0d]"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-[#10b981] text-sm font-semibold uppercase tracking-widest mb-3">
            How We Work
          </p>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4"
          >
            Our process, simplified.
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-xl mx-auto">
            A structured, transparent process that delivers on time and on budget.
          </p>
        </ScrollReveal>

        <StaggerContainer className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="hidden lg:block absolute left-[calc(50%-1px)] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#2a2a2a] to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-6 lg:space-y-0">
            {steps.map(({ number, title, description }, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={number}
                  variants={staggerItem}
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                    idx > 0 ? "lg:-mt-2" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`card-surface p-7 relative ${
                      isEven ? "lg:col-start-1" : "lg:col-start-2 lg:row-start-1"
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <div className="shrink-0">
                        <span
                          className="text-4xl font-black text-accent-gradient leading-none"
                          aria-hidden="true"
                        >
                          {number}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-[#f5f5f5] font-bold text-xl mb-2">
                          {title}
                        </h3>
                        <p className="text-[#a1a1a1] leading-relaxed">{description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot (desktop only) */}
                  <div
                    className={`hidden lg:flex items-center justify-center ${
                      isEven ? "lg:col-start-2" : "lg:col-start-1"
                    } lg:row-start-1`}
                    aria-hidden="true"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#10b981] ring-4 ring-[#10b981]/20 ring-offset-2 ring-offset-[#0d0d0d]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
