import type { Metadata } from "next";
import { Globe, Smartphone, Bot, Layers, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack web development, mobile apps, AI automation, and custom software solutions. Transparent pricing, clear timelines, senior expertise.",
};

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    tagline: "Fast, scalable, SEO-ready web applications",
    description:
      "We build production-grade web apps with Next.js and React — from marketing sites to complex SaaS platforms. Every project is architected for performance, scalability, and developer maintainability.",
    includes: [
      "Custom Next.js / React applications",
      "REST & GraphQL API development",
      "Database design & optimization",
      "Authentication & authorization",
      "CMS integration (Sanity, Contentful)",
      "CI/CD pipeline setup",
      "SEO optimization",
      "Performance audits & tuning",
    ],
    timeline: "4–16 weeks depending on scope",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Vercel", "AWS"],
    accent: "#10b981",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps",
    tagline: "Cross-platform iOS & Android with React Native",
    description:
      "Ship to both platforms simultaneously without sacrificing quality. We use React Native with Expo for rapid iteration and near-native performance — with a single TypeScript codebase.",
    includes: [
      "iOS & Android from one codebase",
      "Native device integrations (camera, GPS, biometrics)",
      "Push notifications",
      "Offline-first architecture",
      "App Store & Play Store submission",
      "Analytics & crash reporting setup",
      "Backend API integration",
      "Real-time features (WebSocket/SSE)",
    ],
    timeline: "6–20 weeks depending on complexity",
    tech: ["React Native", "Expo", "TypeScript", "Firebase", "Supabase", "Stripe"],
    accent: "#6366f1",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI & Automation",
    tagline: "LLM-powered features and workflow automation",
    description:
      "Integrate AI meaningfully into your product or operations. From RAG pipelines and custom agents to document processing and intelligent search — we build AI that actually works in production.",
    includes: [
      "LLM integration (OpenAI, Anthropic, Gemini)",
      "RAG systems with vector databases",
      "Custom AI agents & tools",
      "Document processing pipelines",
      "AI-powered search",
      "Workflow automation (n8n, Zapier, custom)",
      "Fine-tuning & prompt engineering",
      "AI cost optimization",
    ],
    timeline: "2–12 weeks depending on scope",
    tech: ["Python", "LangChain", "LlamaIndex", "Pinecone", "OpenAI", "FastAPI", "AWS Lambda"],
    accent: "#f59e0b",
  },
  {
    id: "custom",
    icon: Layers,
    title: "Custom Software",
    tagline: "Bespoke platforms built around your business",
    description:
      "When off-the-shelf doesn't fit, we build from scratch. Internal tools, dashboards, ERP modules, B2B SaaS — complex software delivered with clean architecture and long-term maintainability in mind.",
    includes: [
      "Requirements & system architecture",
      "Full-stack development",
      "Third-party integrations",
      "Admin dashboards",
      "Multi-tenant SaaS setup",
      "Role-based access control",
      "Billing & subscription management",
      "Handover documentation",
    ],
    timeline: "8–24 weeks, milestone-based",
    tech: ["Next.js", "Python", "PostgreSQL", "Docker", "Kubernetes", "Stripe", "Resend"],
    accent: "#ec4899",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-mesh" aria-labelledby="services-page-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-[#10b981] text-sm font-semibold uppercase tracking-widest mb-4">
              Services
            </p>
            <h1
              id="services-page-heading"
              className="font-bold text-[#f5f5f5] mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.15 }}
            >
              What we build — and
              <br />
              <span className="text-accent-gradient">how we build it.</span>
            </h1>
            <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto leading-relaxed">
              Senior engineers, transparent process, and a commitment to long-term quality.
              No junior handoffs, no outsourcing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <div className="bg-[#0a0a0a]">
        {services.map(({ id, icon: Icon, title, tagline, description, includes, timeline, tech, accent }, idx) => (
          <section
            key={id}
            id={id}
            className={`section-padding border-b border-[#2a2a2a] ${idx % 2 === 1 ? "bg-[#0d0d0d]" : ""}`}
            aria-labelledby={`service-${id}-heading`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left — text */}
                <ScrollReveal direction={idx % 2 === 0 ? "left" : "right"}>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: `${accent}18` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: accent }} aria-hidden="true" />
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: accent }}>
                    {tagline}
                  </p>

                  <h2
                    id={`service-${id}-heading`}
                    className="text-3xl sm:text-4xl font-bold text-[#f5f5f5] mb-5"
                  >
                    {title}
                  </h2>

                  <p className="text-[#a1a1a1] leading-relaxed mb-8 text-lg">
                    {description}
                  </p>

                  {/* Timeline */}
                  <div className="flex items-center gap-3 mb-8 p-3.5 rounded-xl border border-[#2a2a2a] bg-[#141414] w-fit">
                    <Clock className="w-4 h-4 text-[#a1a1a1]" aria-hidden="true" />
                    <span className="text-sm text-[#a1a1a1]">
                      <strong className="text-[#f5f5f5]">Timeline:</strong> {timeline}
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-primary"
                    style={{ background: accent }}
                    aria-label={`Start a ${title} project`}
                  >
                    Start a {title} Project
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </ScrollReveal>

                {/* Right — includes + tech */}
                <ScrollReveal direction={idx % 2 === 0 ? "right" : "left"} delay={0.1}>
                  <div className="card-surface p-7 mb-6">
                    <h3 className="text-[#f5f5f5] font-bold text-lg mb-5">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-3" role="list">
                      {includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            className="w-4 h-4 mt-0.5 shrink-0"
                            style={{ color: accent }}
                            aria-hidden="true"
                          />
                          <span className="text-[#a1a1a1] text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-surface p-6">
                    <h3 className="text-[#f5f5f5] font-bold text-base mb-4">
                      Technologies We Use
                    </h3>
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Tech stack">
                      {tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1.5 rounded-full border border-[#2a2a2a] bg-[#1a1a1a] text-[#a1a1a1]"
                          role="listitem"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f5] mb-5">
              Not sure which service fits?
            </h2>
            <p className="text-[#a1a1a1] text-lg mb-8 leading-relaxed">
              Book a free call. We&apos;ll talk through your project and recommend the right approach — no commitment required.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Book a Free Discovery Call
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
