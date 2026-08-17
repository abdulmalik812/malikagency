"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Smartphone, Bot, Layers, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-reveal";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance web applications built with Next.js and React. Fast, scalable, and SEO-optimised from day one.",
    features: ["Next.js & React", "API Design", "Performance", "SEO"],
    href: "/services#web",
    color: "#0a84ff",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform iOS and Android apps with native performance. One codebase, shipped faster, maintained easier.",
    features: ["React Native", "iOS & Android", "Push Notifications", "Offline"],
    href: "/services#mobile",
    color: "#30d158",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI & Automation",
    description:
      "Integrate AI into your workflows — from LLM-powered features to end-to-end automation that saves hours daily.",
    features: ["LLM Integration", "RAG Systems", "Automation", "Agents"],
    href: "/services#ai",
    color: "#bf5af2",
  },
  {
    id: "custom",
    icon: Layers,
    title: "Custom Software",
    description:
      "Bespoke software solutions — from internal tools to complex SaaS platforms, architected for longevity.",
    features: ["Architecture", "Database Design", "Integrations", "Support"],
    href: "/services#custom",
    color: "#ff9f0a",
  },
];

export function ServicesOverview() {
  return (
    <section
      className="section"
      style={{ background: "#000" }}
      aria-labelledby="services-heading"
    >
      <div className="container-apple">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="label-sm mb-3">What We Do</p>
          <h2
            id="services-heading"
            className="display-md text-white mb-5"
          >
            Full-stack expertise,
            <br />
            <span className="text-gradient-apple">end to end.</span>
          </h2>
          <p className="body-lg max-w-xl mx-auto">
            From discovery to deployment, we cover every layer of the stack
            so you don&apos;t need to stitch together multiple vendors.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map(({ id, icon: Icon, title, description, features, href, color }) => (
            <motion.article
              key={id}
              variants={staggerItem}
              className="glass-card p-7 flex flex-col group relative overflow-hidden"
              aria-labelledby={`service-${id}-title`}
            >
              {/* Subtle color glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]"
                style={{
                  background: `radial-gradient(ellipse 60% 40% at 0% 0%, ${color}12, transparent 70%)`,
                }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative z-10"
                style={{ background: `${color}14`, border: `1px solid ${color}20` }}
              >
                <Icon className="w-5 h-5" style={{ color }} aria-hidden="true" />
              </div>

              <h3
                id={`service-${id}-title`}
                className="text-white font-semibold text-[19px] tracking-[-0.02em] mb-3 relative z-10"
              >
                {title}
              </h3>

              <p className="text-white/55 text-[14px] leading-relaxed mb-5 flex-1 relative z-10">
                {description}
              </p>

              {/* Feature chips */}
              <ul className="flex flex-wrap gap-2 mb-6 relative z-10" role="list" aria-label={`${title} capabilities`}>
                {features.map((f) => (
                  <li key={f} className="chip">
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={href}
                className="btn-text relative z-10 w-fit"
                style={{ color }}
                aria-label={`Learn more about ${title}`}
              >
                Learn more
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
