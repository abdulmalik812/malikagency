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
    color: "#0a84ff",
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
    color: "#30d158",
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
    color: "#bf5af2",
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
    color: "#0a84ff",
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
    color: "#30d158",
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
    color: "#ff9f0a",
    href: "/work/insightboard",
  },
];

const categories = ["All", "Web", "Mobile", "AI", "Custom"];

const categoryColors: Record<string, string> = {
  All:    "#0a84ff",
  Web:    "#0a84ff",
  Mobile: "#30d158",
  AI:     "#bf5af2",
  Custom: "#ff9f0a",
};

export function WorkPageClient() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden text-center"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(94,92,230,0.08) 0%, transparent 60%), #000",
        }}
      >
        <div className="container-apple">
          <ScrollReveal>
            <p className="label-sm mb-4">Our Work</p>
            <h1 className="display-lg text-white mb-5">
              Projects that{" "}
              <span className="text-gradient-apple">speak for themselves.</span>
            </h1>
            <p className="body-lg max-w-xl mx-auto">
              A selection of our recent work across web, mobile, AI, and custom software.
            </p>
          </ScrollReveal>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to top, #000, transparent)" }}
          aria-hidden="true"
        />
      </section>

      {/* ── Filter + Grid ── */}
      <section
        className="section"
        style={{ background: "#000" }}
        aria-label="Portfolio projects"
      >
        <div className="container-apple">

          {/* Filter pills */}
          <div
            className="flex flex-wrap gap-2 justify-center mb-14"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => {
              const isActive = active === cat;
              const col = categoryColors[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  role="tab"
                  aria-selected={isActive}
                  className="px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-200"
                  style={
                    isActive
                      ? {
                          background: `${col}14`,
                          border: `1px solid ${col}44`,
                          color: col,
                          boxShadow: `0 0 20px ${col}14`,
                        }
                      : {
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "rgba(255,255,255,0.45)",
                        }
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Cards grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              role="tabpanel"
              aria-label={`${active} projects`}
            >
              {filtered.map(({ id, title, category, description, result, tech, color, href }) => (
                <motion.article
                  key={id}
                  layout
                  className="glass-card group flex flex-col overflow-hidden"
                  aria-labelledby={`work-${id}-title`}
                >
                  {/* Visual band */}
                  <div
                    className="h-36 w-full relative flex items-center justify-center overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${color}10 0%, transparent 70%)`,
                    }}
                    aria-hidden="true"
                  >
                    {/* Radial glow */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(ellipse 70% 70% at 50% 50%, ${color}18, transparent 70%)`,
                      }}
                    />
                    <div
                      className="relative w-12 h-12 rounded-2xl"
                      style={{
                        background: `${color}18`,
                        border: `1px solid ${color}30`,
                        backdropFilter: "blur(8px)",
                      }}
                    />
                    <div
                      className="absolute top-0 right-0 w-28 h-28 opacity-20"
                      style={{
                        background: `radial-gradient(ellipse at 80% 20%, ${color}60, transparent 60%)`,
                      }}
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-2.5 block"
                      style={{ color }}
                    >
                      {category}
                    </span>

                    <h2
                      id={`work-${id}-title`}
                      className="text-white font-semibold text-[18px] tracking-[-0.02em] mb-2.5"
                    >
                      {title}
                    </h2>

                    <p className="text-white/50 text-[13px] leading-relaxed mb-4 flex-1">
                      {description}
                    </p>

                    {/* Result badge */}
                    <div
                      className="flex items-center gap-2 px-3 py-2 rounded-xl mb-4"
                      style={{
                        background: `${color}10`,
                        border: `1px solid ${color}22`,
                      }}
                      aria-label={`Result: ${result}`}
                    >
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" style={{ color }} aria-hidden="true" />
                      <span className="text-[12px] font-semibold" style={{ color }}>{result}</span>
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
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/35 text-[15px]">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="section text-center"
        style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="container-apple max-w-xl mx-auto">
          <ScrollReveal>
            <h2 className="display-md text-white mb-4">
              Want to be on this page?
            </h2>
            <p className="body-lg mb-10">
              Let&apos;s build something worth showing off.
            </p>
            <Link href="/contact" className="btn-apple">
              Start a Project
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
