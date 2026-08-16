"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const projects = [
  {
    id: "tradespark",
    title: "TradeSpark E-Commerce",
    category: "Web",
    description:
      "Full-stack e-commerce platform with AI recommendations, real-time inventory, and a custom vendor dashboard. Handles 10k+ SKUs.",
    result: "3.2× conversion rate increase",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    accentColor: "#10b981",
    gradient: "from-[#10b981]/25 to-[#059669]/5",
    href: "/work/tradespark",
  },
  {
    id: "velox",
    title: "Velox Finance App",
    category: "Mobile",
    description:
      "Cross-platform personal finance tracker with bank-level security, LLM-powered spend insights, and smart budgeting tools.",
    result: "48k downloads in month one",
    tech: ["React Native", "Plaid", "OpenAI", "Firebase"],
    accentColor: "#6366f1",
    gradient: "from-[#6366f1]/25 to-[#4f46e5]/5",
    href: "/work/velox",
  },
  {
    id: "docuflow",
    title: "DocuFlow AI",
    category: "AI",
    description:
      "B2B document processing SaaS using custom-trained extraction models. Processes invoices, contracts, and forms at 99.2% accuracy.",
    result: "12h/week saved per team",
    tech: ["Python", "LangChain", "Pinecone", "Next.js"],
    accentColor: "#f59e0b",
    gradient: "from-[#f59e0b]/25 to-[#d97706]/5",
    href: "/work/docuflow",
  },
  {
    id: "nexthire",
    title: "NextHire ATS",
    category: "Web",
    description:
      "Custom applicant tracking system for a mid-size recruiting firm. Multi-tenant, role-based, integrated with LinkedIn and Outlook.",
    result: "60% faster hiring cycle",
    tech: ["Next.js", "PostgreSQL", "SendGrid", "OAuth"],
    accentColor: "#10b981",
    gradient: "from-[#10b981]/20 to-transparent",
    href: "/work/nexthire",
  },
  {
    id: "shopmate",
    title: "ShopMate Mobile",
    category: "Mobile",
    description:
      "White-label B2C shopping app for a retail chain. Features loyalty points, QR scanner, and real-time stock lookup.",
    result: "22% increase in in-store revenue",
    tech: ["React Native", "Expo", "Supabase", "Stripe"],
    accentColor: "#6366f1",
    gradient: "from-[#6366f1]/20 to-transparent",
    href: "/work/shopmate",
  },
  {
    id: "insightboard",
    title: "InsightBoard Analytics",
    category: "Custom",
    description:
      "Internal analytics dashboard for a logistics company — live tracking, driver performance, and predictive delay alerts.",
    result: "40% reduction in late deliveries",
    tech: ["Next.js", "Python", "ClickHouse", "Mapbox"],
    accentColor: "#ec4899",
    gradient: "from-[#ec4899]/20 to-transparent",
    href: "/work/insightboard",
  },
];

const categories = ["All", "Web", "Mobile", "AI", "Custom"];

const categoryAccents: Record<string, string> = {
  All: "#10b981",
  Web: "#10b981",
  Mobile: "#6366f1",
  AI: "#f59e0b",
  Custom: "#ec4899",
};

export function WorkPageClient() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-[#10b981] text-sm font-semibold uppercase tracking-widest mb-4">
              Our Work
            </p>
            <h1
              className="font-bold text-[#f5f5f5] mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.15 }}
            >
              Projects that{" "}
              <span className="text-accent-gradient">speak for themselves.</span>
            </h1>
            <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto leading-relaxed">
              A selection of our recent work across web, mobile, AI, and custom software.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-[#0a0a0a]" aria-label="Portfolio projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div
            className="flex flex-wrap gap-2 justify-center mb-12"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                role="tab"
                aria-selected={active === cat}
                className="px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200"
                style={
                  active === cat
                    ? {
                        background: `${categoryAccents[cat]}18`,
                        borderColor: categoryAccents[cat],
                        color: categoryAccents[cat],
                      }
                    : {
                        background: "transparent",
                        borderColor: "#2a2a2a",
                        color: "#a1a1a1",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              role="tabpanel"
              aria-label={`${active} projects`}
            >
              {filtered.map(
                ({ id, title, category, description, result, tech, accentColor, gradient, href }) => (
                  <motion.article
                    key={id}
                    layout
                    className="card-surface card-hover group flex flex-col overflow-hidden"
                    aria-labelledby={`work-${id}-title`}
                  >
                    {/* Gradient band */}
                    <div
                      className={`h-36 w-full bg-gradient-to-br ${gradient} relative flex items-center justify-center`}
                      aria-hidden="true"
                    >
                      <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5" />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <span
                        className="text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: accentColor }}
                      >
                        {category}
                      </span>

                      <h2
                        id={`work-${id}-title`}
                        className="text-[#f5f5f5] font-bold text-xl mb-2"
                      >
                        {title}
                      </h2>

                      <p className="text-[#a1a1a1] text-sm leading-relaxed mb-4 flex-1">
                        {description}
                      </p>

                      {/* Result */}
                      <div
                        className="flex items-center gap-2 px-3 py-2 rounded-lg border mb-4 text-sm font-semibold"
                        style={{
                          borderColor: `${accentColor}33`,
                          background: `${accentColor}11`,
                          color: accentColor,
                        }}
                        aria-label={`Result: ${result}`}
                      >
                        <TrendingUp className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        {result}
                      </div>

                      {/* Tech */}
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
                        className="flex items-center gap-1.5 text-sm font-medium"
                        style={{ color: accentColor }}
                        aria-label={`View ${title} case study`}
                      >
                        View Case Study
                        <ExternalLink
                          className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </motion.article>
                )
              )}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#a1a1a1]">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0d0d0d] border-t border-[#2a2a2a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f5] mb-4">
              Want to be on this page?
            </h2>
            <p className="text-[#a1a1a1] text-lg mb-8">
              Let&apos;s build something worth showing off.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Start a Project
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
