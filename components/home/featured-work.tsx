"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-reveal";

const projects = [
  {
    id: "ecommerce-platform",
    category: "Web Development",
    title: "TradeSpark E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with AI-powered product recommendations, real-time inventory management, and a custom admin dashboard.",
    result: "3.2× increase in conversion rate",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    gradient: "from-[#10b981]/20 to-[#059669]/5",
    accent: "#10b981",
    href: "/work/tradespark",
  },
  {
    id: "fintech-app",
    category: "Mobile App",
    title: "Velox Finance App",
    description:
      "Cross-platform personal finance app with real-time transaction tracking, budget goals, and intelligent spend analysis powered by an LLM.",
    result: "48k downloads in first month",
    tech: ["React Native", "Plaid API", "OpenAI", "Firebase"],
    gradient: "from-[#6366f1]/20 to-[#4f46e5]/5",
    accent: "#6366f1",
    href: "/work/velox",
  },
  {
    id: "ai-saas",
    category: "AI / SaaS",
    title: "DocuFlow AI Platform",
    description:
      "B2B SaaS platform that automates document processing and data extraction using custom-trained models — saving 12+ hours per week per team.",
    result: "12h/week saved per team",
    tech: ["Python", "LangChain", "Next.js", "AWS"],
    gradient: "from-[#f59e0b]/20 to-[#d97706]/5",
    accent: "#f59e0b",
    href: "/work/docuflow",
  },
];

export function FeaturedWork() {
  return (
    <section
      className="section-padding bg-[#0a0a0a]"
      aria-labelledby="work-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[#10b981] text-sm font-semibold uppercase tracking-widest mb-3">
              Featured Work
            </p>
            <h2
              id="work-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f5]"
            >
              Projects we&apos;re
              <br />
              <span className="text-gradient">proud of.</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="btn-outline shrink-0"
            aria-label="View all projects in our portfolio"
          >
            View All Work
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map(
            ({ id, category, title, description, result, tech, gradient, accent, href }) => (
              <motion.article
                key={id}
                variants={staggerItem}
                className="card-surface card-hover group relative overflow-hidden flex flex-col"
                aria-labelledby={`project-${id}-title`}
              >
                {/* Top gradient band */}
                <div
                  className={`h-40 w-full bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
                  aria-hidden="true"
                >
                  {/* Abstract pattern */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 50%, ${accent}22 0%, transparent 50%), radial-gradient(circle at 70% 30%, ${accent}11 0%, transparent 50%)`,
                    }}
                  />
                  <div className="relative z-10 w-16 h-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: accent }}
                  >
                    {category}
                  </span>

                  <h3
                    id={`project-${id}-title`}
                    className="text-[#f5f5f5] font-bold text-xl mb-3"
                  >
                    {title}
                  </h3>

                  <p className="text-[#a1a1a1] text-sm leading-relaxed mb-5 flex-1">
                    {description}
                  </p>

                  {/* Result badge */}
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border mb-5"
                    style={{
                      borderColor: `${accent}33`,
                      background: `${accent}11`,
                    }}
                    aria-label={`Project result: ${result}`}
                  >
                    <TrendingUp className="w-4 h-4 shrink-0" style={{ color: accent }} aria-hidden="true" />
                    <span className="text-sm font-semibold" style={{ color: accent }}>
                      {result}
                    </span>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5" role="list" aria-label="Technologies used">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#a1a1a1]"
                        role="listitem"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={href}
                    className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200"
                    style={{ color: accent }}
                    aria-label={`View case study for ${title}`}
                  >
                    View Case Study
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            )
          )}
        </StaggerContainer>
      </div>
    </section>
  );
}
