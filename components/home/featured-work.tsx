"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-reveal";

const projects = [
  {
    id: "ecommerce-platform",
    category: "Web Development",
    title: "TradeSpark E-Commerce",
    description:
      "Full-stack e-commerce with AI-powered recommendations, real-time inventory, and custom admin dashboard.",
    result: "3.2× conversion rate",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    color: "#0a84ff",
    bg: "from-[#0a84ff]/[0.08] to-transparent",
    href: "/work/tradespark",
  },
  {
    id: "fintech-app",
    category: "Mobile App",
    title: "Velox Finance App",
    description:
      "Cross-platform personal finance app with real-time tracking, budget goals, and LLM-powered spend analysis.",
    result: "48k downloads in month one",
    tech: ["React Native", "Plaid", "OpenAI", "Firebase"],
    color: "#30d158",
    bg: "from-[#30d158]/[0.08] to-transparent",
    href: "/work/velox",
  },
  {
    id: "ai-saas",
    category: "AI / SaaS",
    title: "DocuFlow AI Platform",
    description:
      "B2B SaaS that automates document processing and data extraction with custom-trained models.",
    result: "12h/week saved per team",
    tech: ["Python", "LangChain", "Next.js", "AWS"],
    color: "#bf5af2",
    bg: "from-[#bf5af2]/[0.08] to-transparent",
    href: "/work/docuflow",
  },
];

export function FeaturedWork() {
  return (
    <section
      className="section"
      style={{ background: "#000" }}
      aria-labelledby="work-heading"
    >
      <div className="container-apple">
        {/* Header */}
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="label-sm mb-3">Featured Work</p>
            <h2
              id="work-heading"
              className="display-md text-white"
            >
              Projects we&apos;re
              <br />
              <span className="text-gradient-white">proud of.</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="btn-ghost shrink-0 !py-2.5 !px-5 !text-[13px]"
            aria-label="View all portfolio projects"
          >
            View All Work
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </ScrollReveal>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {projects.map(({ id, category, title, description, result, tech, color, bg, href }) => (
            <motion.article
              key={id}
              variants={staggerItem}
              className="glass-card group relative flex flex-col overflow-hidden"
              aria-labelledby={`project-${id}-title`}
            >
              {/* Visual band */}
              <div
                className={`h-36 w-full bg-gradient-to-br ${bg} relative overflow-hidden flex items-center justify-center`}
                aria-hidden="true"
              >
                {/* Abstract accent shape */}
                <div
                  className="absolute"
                  style={{
                    inset: 0,
                    background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${color}18, transparent 70%)`,
                  }}
                />
                <div
                  className="relative w-14 h-14 rounded-2xl"
                  style={{
                    background: `${color}18`,
                    border: `1px solid ${color}30`,
                    backdropFilter: "blur(8px)",
                  }}
                />
                {/* Corner shine */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-20"
                  style={{
                    background: `radial-gradient(ellipse at 80% 20%, ${color}60, transparent 60%)`,
                  }}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Category */}
                <span
                  className="text-[11px] font-600 uppercase tracking-[0.1em] mb-2.5 block"
                  style={{ color, fontWeight: 600 }}
                >
                  {category}
                </span>

                <h3
                  id={`project-${id}-title`}
                  className="text-white font-semibold text-[18px] tracking-[-0.02em] mb-3"
                >
                  {title}
                </h3>

                <p className="text-white/50 text-[13px] leading-relaxed mb-5 flex-1">
                  {description}
                </p>

                {/* Result badge */}
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-xl mb-4"
                  style={{
                    background: `${color}10`,
                    border: `1px solid ${color}22`,
                  }}
                  aria-label={`Project outcome: ${result}`}
                >
                  <TrendingUp className="w-3.5 h-3.5 shrink-0" style={{ color }} aria-hidden="true" />
                  <span className="text-[12px] font-semibold" style={{ color }}>
                    {result}
                  </span>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-5" role="list" aria-label="Technologies used">
                  {tech.map((t) => (
                    <span key={t} className="chip" role="listitem">{t}</span>
                  ))}
                </div>

                <Link
                  href={href}
                  className="btn-text w-fit"
                  style={{ color }}
                  aria-label={`View case study for ${title}`}
                >
                  View Case Study
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
