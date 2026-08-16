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
      "High-performance web applications built with Next.js, React, and modern tooling. Fast, scalable, and SEO-optimised from day one.",
    features: ["Next.js & React", "API Design", "Performance Tuning", "SEO"],
    href: "/services#web",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform iOS and Android apps using React Native. Native performance with a single codebase — shipped faster, maintained easier.",
    features: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"],
    href: "/services#mobile",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI & Automation",
    description:
      "Integrate AI into your business workflows — from LLM-powered features to end-to-end automation pipelines that save hours every day.",
    features: ["LLM Integration", "RAG Systems", "Workflow Automation", "Custom Agents"],
    href: "/services#ai",
  },
  {
    id: "custom",
    icon: Layers,
    title: "Custom Software",
    description:
      "Bespoke software solutions tailored to your exact business needs — from internal tools to complex SaaS platforms.",
    features: ["System Architecture", "Database Design", "Integrations", "Maintenance"],
    href: "/services#custom",
  },
];

export function ServicesOverview() {
  return (
    <section
      className="section-padding bg-[#0a0a0a]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-[#10b981] text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4"
          >
            Full-stack expertise,
            <br />
            <span className="text-gradient">end to end.</span>
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto leading-relaxed">
            From discovery to deployment, we cover every layer of the stack so you
            don&apos;t have to stitch together multiple vendors.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ id, icon: Icon, title, description, features, href }) => (
            <motion.article
              key={id}
              variants={staggerItem}
              className="card-surface card-hover p-6 flex flex-col group"
              aria-labelledby={`service-${id}-title`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center mb-5 group-hover:bg-[#10b981]/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-[#10b981]" aria-hidden="true" />
              </div>

              <h3
                id={`service-${id}-title`}
                className="text-[#f5f5f5] font-bold text-lg mb-3"
              >
                {title}
              </h3>

              <p className="text-[#a1a1a1] text-sm leading-relaxed mb-5 flex-1">
                {description}
              </p>

              <ul className="flex flex-wrap gap-1.5 mb-5" role="list" aria-label={`${title} features`}>
                {features.map((f) => (
                  <li
                    key={f}
                    className="text-xs px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#a1a1a1]"
                  >
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={href}
                className="flex items-center gap-1.5 text-sm text-[#10b981] font-medium group-hover:gap-2.5 transition-all duration-200"
                aria-label={`Learn more about ${title}`}
              >
                Learn more
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
