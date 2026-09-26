"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Lightbulb, Headphones } from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Built to last",
    description:
      "We write software that your team can understand and maintain.",
    color: "#0a84ff",
  },
  {
    icon: Clock,
    title: "Clear communication",
    description:
      "You’ll know what’s done, what’s next and where we need your input.",
    color: "#30d158",
  },
  {
    icon: Lightbulb,
    title: "Solve the right problem",
    description:
      "We ask questions before we settle on an approach.",
    color: "#ff9f0a",
  },
  {
    icon: Headphones,
    title: "Here after launch",
    description:
      "We can keep working with you as the product changes.",
    color: "#bf5af2",
  },
];

export function TrustedApproach() {
  return (
    <section
      className="section"
      style={{ background: "#000" }}
      aria-labelledby="approach-heading"
    >
      <div className="container-apple">
        <ScrollReveal className="text-center mb-16">
          <p className="label-sm mb-3">Our Approach</p>
          <h2
            id="approach-heading"
            className="display-md text-white mb-5"
          >
            How we like
            <br />
            <span className="text-gradient-apple">to work.</span>
          </h2>
          <p className="body-lg max-w-md mx-auto">
            A few things you can expect when we work together.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map(({ icon: Icon, title, description, color }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="glass-card p-7 group relative overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]"
                style={{
                  background: `radial-gradient(ellipse 50% 50% at 0% 100%, ${color}10, transparent 65%)`,
                }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative z-10"
                style={{ background: `${color}14`, border: `1px solid ${color}22` }}
              >
                <Icon className="w-5 h-5" style={{ color }} aria-hidden="true" />
              </div>

              <h3 className="text-white font-semibold text-[17px] tracking-[-0.02em] mb-3 relative z-10">
                {title}
              </h3>
              <p
                className="text-white/50 text-[13.5px] leading-relaxed relative z-10"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
