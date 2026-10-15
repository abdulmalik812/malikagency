"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageSquare, BookOpen } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import { projects } from "@/lib/projects";
import { ProjectVisual } from "@/components/ui/project-visual";

const categories = ["All", "Web", "Mobile", "AI", "Custom"];

const categoryColors: Record<string, string> = {
  All:    "#9bbcd3",
  Web:    "#9bbcd3",
  Mobile: "#aec4ad",
  AI:     "#b9b1ca",
  Custom: "#c7b395",
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
            "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(154,171,192,0.08) 0%, transparent 60%), #000",
        }}
      >
        <div className="container-apple">
          <ScrollReveal>
            <p className="label-sm mb-4">Our Work</p>
            <h1 className="display-lg text-white mb-5">
              Selected work.
            </h1>
            <p className="body-lg max-w-xl mx-auto">
              A few web, mobile and software projects.
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
        className="section work-section"
        style={{ background: "#000" }}
        aria-label="Portfolio projects"
      >
        <div className="container-apple">

          {/* Filter pills */}
          <div
            className="flex flex-wrap gap-2 justify-center mb-14"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => {
              const isActive = active === cat;
              const col = categoryColors[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  aria-pressed={isActive}
                  
                  className="px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-200"
                  style={
                    isActive
                      ? {
                          background: "#dbe8ef",
                          border: `1px solid ${col}44`,
                          color: "#071017",
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
              className="work-grid"
              role="region"
              aria-label={`${active} projects`}
            >
              {filtered.map(({ id, title, category, description, color, href }) => (
                <motion.article
                  key={id}
                  layout
                  className="glass-card group flex flex-col overflow-hidden"
                  aria-labelledby={`work-${id}-title`}
                >
                  <Link href={href} tabIndex={-1} aria-hidden="true"><ProjectVisual id={id} title={title}/></Link>

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

                    <Link
                      href={href}
                      className="btn-text w-fit"
                      style={{ color }}
                      aria-label={`View ${title} case study`}
                    >
                      View Case Study
                      <BookOpen
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
              Have a project in mind?
            </h2>
            <p className="body-lg mb-10">
              Tell us what you want to build.
            </p>
            <Link href="/contact" className="btn-apple">
              Talk about your project
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
