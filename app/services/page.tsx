import type { Metadata } from "next";
import { Globe, Smartphone, Bot, Layers, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, mobile apps, AI features and custom software, built with your team.",
};

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    tagline: "Websites and web applications",
    description:
      "From marketing sites to SaaS products, we build web software with Next.js and React.",
    includes: [
      "Websites and web apps",
      "APIs and database design",
      "Accounts and permissions",
      "CMS and third-party integrations",
      "Performance and search optimization",
    ],
    timeline: "Timing depends on the scope",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Vercel", "AWS"],
    color: "#0a84ff",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps",
    tagline: "Apps for iOS and Android",
    description:
      "We build for both platforms with React Native and Expo, using one shared codebase.",
    includes: [
      "iOS & Android from one codebase",
      "Camera, location and biometrics",
      "Push notifications",
      "Offline support",
      "App Store & Play Store submission",
      "Analytics and crash reporting",
      "Backend API integration",
    ],
    timeline: "Timing depends on the scope",
    tech: ["React Native", "Expo", "TypeScript", "Firebase", "Supabase", "Stripe"],
    color: "#30d158",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI & Automation",
    tagline: "AI features and workflow automation",
    description:
      "We add language models, document processing or automation where they solve a clear problem.",
    includes: [
      "LLM integration (OpenAI, Anthropic, Gemini)",
      "RAG systems with vector databases",
      "AI assistants and tools",
      "Document processing pipelines",
      "AI-powered search",
      "Workflow automation (n8n, Zapier, custom)",
      "Model and prompt tuning",
      "AI cost optimization",
    ],
    timeline: "Timing depends on the scope",
    tech: ["Python", "LangChain", "LlamaIndex", "Pinecone", "OpenAI", "FastAPI", "AWS Lambda"],
    color: "#bf5af2",
  },
  {
    id: "custom",
    icon: Layers,
    title: "Custom Software",
    tagline: "Tools shaped around your business",
    description:
      "We build internal tools, dashboards and SaaS products when off-the-shelf software isn’t a fit.",
    includes: [
      "Technical planning",
      "Full-stack development",
      "Third-party integrations",
      "Admin dashboards",
      "Multi-account SaaS products",
      "Role-based access control",
      "Billing & subscription management",
      "Documentation and handover",
    ],
    timeline: "Timing depends on the scope",
    tech: ["Next.js", "Python", "PostgreSQL", "Docker", "Kubernetes", "Stripe", "Resend"],
    color: "#ff9f0a",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden text-center"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(10,132,255,0.08) 0%, transparent 60%), #000",
        }}
        aria-labelledby="services-page-heading"
      >
        <div className="container-apple">
          <ScrollReveal>
            <p className="label-sm mb-4">Services</p>
            <h1 id="services-page-heading" className="display-lg text-white mb-5">
              Software for
              <br />
              <span className="text-gradient-apple">your business.</span>
            </h1>
            <p className="body-lg max-w-xl mx-auto">
              Web, mobile and custom software, built with your team.
            </p>
          </ScrollReveal>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to top, #000, transparent)" }}
          aria-hidden="true"
        />
      </section>

      {/* ── Service sections ── */}
      <div style={{ background: "#000" }}>
        {services.map(({ id, icon: Icon, title, tagline, description, includes, timeline, tech, color }, idx) => (
          <section
            key={id}
            id={id}
            className="section"
            style={{
              background: idx % 2 === 1 ? "rgba(255,255,255,0.01)" : "#000",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
            aria-labelledby={`service-${id}-heading`}
          >
            <div className="container-apple">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* ── Left — info ── */}
                <ScrollReveal direction={idx % 2 === 0 ? "left" : "right"}>
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7"
                    style={{ background: `${color}14`, border: `1px solid ${color}22` }}
                  >
                    <Icon className="w-7 h-7" style={{ color }} aria-hidden="true" />
                  </div>

                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-2"
                    style={{ color }}
                  >
                    {tagline}
                  </p>

                  <h2
                    id={`service-${id}-heading`}
                    className="display-md text-white mb-5"
                  >
                    {title}
                  </h2>

                  <p className="body-lg mb-8">{description}</p>

                  {/* Timeline badge */}
                  <div
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl mb-8"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Clock className="w-4 h-4 text-white/40" aria-hidden="true" />
                    <span className="text-[13px] text-white/50">
                      <strong className="text-white/80 font-semibold">Timeline:</strong>{" "}
                      {timeline}
                    </span>
                  </div>

                  <div>
                    <Link
                      href="/contact"
                      className="btn-apple"
                      style={{
                        background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
                        boxShadow: `0 4px 20px ${color}30`,
                      }}
                      aria-label={`Start a ${title} project`}
                    >
                      Start a {title} Project
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </ScrollReveal>

                {/* ── Right — includes + tech ── */}
                <ScrollReveal direction={idx % 2 === 0 ? "right" : "left"} delay={0.1}>
                  {/* What's included */}
                  <div
                    className="rounded-[20px] p-7 mb-4"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <h3 className="text-white font-semibold text-[16px] tracking-[-0.01em] mb-5">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-3" role="list">
                      {includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            className="w-4 h-4 mt-0.5 shrink-0"
                            style={{ color }}
                            aria-hidden="true"
                          />
                          <span className="text-white/55 text-[13.5px] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div
                    className="rounded-[20px] p-6"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <h3 className="text-white font-semibold text-[14px] tracking-[-0.01em] mb-4">
                      Technologies We Use
                    </h3>
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Tech stack">
                      {tech.map((t) => (
                        <span key={t} className="chip" role="listitem">{t}</span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA ── */}
      <section
        className="section text-center"
        style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="container-apple max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="display-md text-white mb-5">
              Not sure where to start?
            </h2>
            <p className="body-lg mb-10">
              Tell us what you’re working on. We’ll talk through the options.
            </p>
            <Link href="/contact" className="btn-apple">
              Talk about your project
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
