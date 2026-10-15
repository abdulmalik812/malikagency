"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LayoutGrid, BookOpen } from "lucide-react";
import { ProjectVisual } from "@/components/ui/project-visual";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-reveal";

const projects = [
  {
    id: "ecommerce-platform",
    category: "Web Development",
    title: "TradeSpark E-Commerce",
    description:
      "Online store with inventory tools and a custom admin dashboard.",
    color: "#9bbcd3",
    bg: "from-[#9bbcd3]/[0.08] to-transparent",
    href: "/work/tradespark", visual: "tradespark",
  },
  {
    id: "fintech-app",
    category: "Mobile App",
    title: "Velox Finance App",
    description:
      "Mobile app for tracking spending and setting budget goals.",
    color: "#aec4ad",
    bg: "from-[#aec4ad]/[0.08] to-transparent",
    href: "/work/velox", visual: "velox",
  },
  {
    id: "ai-saas",
    category: "AI / SaaS",
    title: "DocuFlow AI Platform",
    description:
      "Document workflow software for extracting information from business files.",
    color: "#b9b1ca",
    bg: "from-[#b9b1ca]/[0.08] to-transparent",
    href: "/work/docuflow", visual: "docuflow",
  },
];

export function FeaturedWork() {
  return (
    <section
      className="section featured-section"
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
              Selected work.
            </h2>
          </div>
          <Link
            href="/work"
            className="btn-ghost shrink-0 !py-2.5 !px-5 !text-[13px]"
            aria-label="View all portfolio projects"
          >
            View All Work
            <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </ScrollReveal>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {projects.map(({ id, category, title, description, color, href, visual }) => (
            <motion.article
              key={id}
              variants={staggerItem}
              className="glass-card group relative flex flex-col overflow-hidden"
              aria-labelledby={`project-${id}-title`}
            >
              <Link href={href} tabIndex={-1} aria-hidden="true"><ProjectVisual id={visual} title={title}/></Link>
              <div className="p-7 flex flex-col flex-1">
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

                <Link
                  href={href}
                  className="btn-text w-fit"
                  style={{ color }}
                  aria-label={`View case study for ${title}`}
                >
                  View Case Study
                  <BookOpen className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
