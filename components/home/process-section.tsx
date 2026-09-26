"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We’ll talk about what you’re building and what you need help with.",
  },
  {
    number: "02",
    title: "Proposal & Scoping",
    description:
      "We’ll agree on the work, timing and cost before we begin.",
  },
  {
    number: "03",
    title: "Design & Architecture",
    description:
      "We work through the design and technical plan together.",
  },
  {
    number: "04",
    title: "Build & Iterate",
    description:
      "We build in stages and share progress as we go.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "We launch the product and can help with what comes next.",
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
            From first call
            <br />
            <span className="text-gradient-white">to launch.</span>
          </h2>
          <p className="body-lg max-w-md mx-auto">
            We agree on the plan, then keep you in the loop as we work.
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
