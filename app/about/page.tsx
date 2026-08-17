import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Users, Lightbulb, Heart } from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Malik Agencies is a software development agency founded by Abdul Malik. We believe great software changes businesses. Learn our story, mission, and values.",
};

const values = [
  {
    icon: Target,
    title: "Outcome-Driven",
    description:
      "We measure success by what your software achieves, not just whether it was delivered. Every decision is tied back to your business goals.",
    color: "#0a84ff",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "We treat every project as a partnership. Full visibility, weekly updates, and a direct line to the engineers building your product.",
    color: "#30d158",
  },
  {
    icon: Lightbulb,
    title: "Thoughtful Craft",
    description:
      "We care deeply about the details — clean architecture, readable code, intuitive UX. What we build today should be maintainable for years.",
    color: "#ff9f0a",
  },
  {
    icon: Heart,
    title: "People First",
    description:
      "We only take on projects we believe in, work with clients we respect, and take care of the humans on both sides of the engagement.",
    color: "#bf5af2",
  },
];

const stats = [
  { label: "Founded", value: "2023" },
  { label: "Projects Shipped", value: "50+" },
  { label: "Countries Served", value: "8" },
  { label: "Client Retention", value: "94%" },
];

const skills = ["Next.js", "TypeScript", "Python", "System Design", "AI/ML", "React Native"];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(10,132,255,0.08) 0%, transparent 60%), #000",
        }}
      >
        <div className="container-apple">
          <ScrollReveal>
            <p className="label-sm mb-4">About Us</p>
            <h1 className="display-lg text-white mb-5 max-w-2xl">
              Software built with
              <br />
              <span className="text-gradient-apple">purpose and precision.</span>
            </h1>
            <p className="body-lg max-w-xl">
              We&apos;re a small, senior team that cares deeply about the software
              we ship. No bloated teams, no junior hand-offs — just experienced
              engineers who take ownership.
            </p>
          </ScrollReveal>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to top, #000, transparent)" }}
          aria-hidden="true"
        />
      </section>

      {/* ── Story ── */}
      <section
        className="section"
        style={{ background: "#000" }}
        aria-labelledby="story-heading"
      >
        <div className="container-apple">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <ScrollReveal>
              <p className="label-sm mb-3">Our Story</p>
              <h2
                id="story-heading"
                className="display-md text-white mb-6"
              >
                Built from frustration.
                <br />
                <span className="text-gradient-white">Driven by standards.</span>
              </h2>
              <div className="space-y-4 text-white/55 text-[15px] leading-relaxed">
                <p>
                  Malik Agencies was founded after watching too many businesses
                  get burned by agencies that over-promised and under-delivered —
                  spaghetti code, missed deadlines, and software that crumbled at scale.
                </p>
                <p>
                  We started with a simple belief: software agencies should be
                  held to the same standard as the software they build. Clean
                  architecture, honest timelines, transparent communication, and
                  code that&apos;s actually maintainable.
                </p>
                <p>
                  Today, we work with startups and growing businesses across
                  e-commerce, fintech, logistics, and SaaS — helping them build
                  software that becomes a competitive advantage, not a liability.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats grid */}
            <ScrollReveal delay={0.12}>
              <div
                className="relative rounded-[24px] p-8 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,132,255,0.06) 0%, rgba(94,92,230,0.04) 100%), rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(10,132,255,0.08), transparent 65%)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative grid grid-cols-2 gap-4">
                  {stats.map(({ label, value }) => (
                    <div
                      key={label}
                      className="text-center p-5 rounded-[16px]"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div
                        className="text-4xl font-bold mb-1 text-white"
                        style={{ letterSpacing: "-0.03em" }}
                      >
                        {value}
                      </div>
                      <div className="text-white/40 text-[12px] font-medium uppercase tracking-wide">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section
        className="section"
        style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        aria-labelledby="founder-heading"
      >
        <div className="container-apple">
          <ScrollReveal className="text-center mb-16">
            <p className="label-sm mb-3">The Team</p>
            <h2 id="founder-heading" className="display-md text-white">
              The person behind
              <br />
              <span className="text-gradient-white">the work.</span>
            </h2>
          </ScrollReveal>

          {/* Founder card — Apple-style horizontal split */}
          <ScrollReveal>
            <div
              className="max-w-3xl mx-auto rounded-[28px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(10,132,255,0.06) 0%, rgba(94,92,230,0.04) 50%, rgba(191,90,242,0.03) 100%), rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Photo */}
                <div className="sm:w-56 shrink-0 relative overflow-hidden" style={{ minHeight: 240 }}>
                  {/* Ambient glow behind photo */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 80%, rgba(10,132,255,0.15), transparent 65%)",
                    }}
                    aria-hidden="true"
                  />
                  <Image
                    src="/photo_founder.png"
                    alt="Abdul Malik — Founder & Lead Engineer at Malik Agencies"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 224px"
                    priority
                  />
                </div>

                {/* Info */}
                <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center">
                  {/* Name + role */}
                  <h3
                    className="text-white font-semibold text-[22px] tracking-[-0.025em] mb-1"
                  >
                    Abdul Malik
                  </h3>
                  <p
                    className="text-[13px] font-semibold uppercase tracking-[0.1em] mb-5"
                    style={{ color: "#0a84ff" }}
                  >
                    Founder & Lead Engineer
                  </p>

                  <p className="text-white/55 text-[14px] leading-relaxed mb-7">
                    Full-stack engineer with a focus on scalable web architecture,
                    API design, and AI integration. Passionate about building
                    software that solves real problems with clean, maintainable code.
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        className="section"
        style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        aria-labelledby="values-heading"
      >
        <div className="container-apple">
          <ScrollReveal className="text-center mb-16">
            <p className="label-sm mb-3">Our Values</p>
            <h2 id="values-heading" className="display-md text-white">
              How we work.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, description, color }) => (
              <div
                key={title}
                className="glass-card p-7 group relative overflow-hidden"
              >
                {/* Hover corner glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]"
                  style={{
                    background: `radial-gradient(ellipse 50% 50% at 0% 100%, ${color}10, transparent 65%)`,
                  }}
                  aria-hidden="true"
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative z-10"
                  style={{ background: `${color}14`, border: `1px solid ${color}22` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} aria-hidden="true" />
                </div>
                <h3 className="text-white font-semibold text-[17px] tracking-[-0.02em] mb-3 relative z-10">
                  {title}
                </h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed relative z-10">
                  {description}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="section"
        style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="container-apple text-center">
          <ScrollReveal>
            <h2 className="display-md text-white mb-4">
              Ready to work together?
            </h2>
            <p className="body-lg max-w-sm mx-auto mb-10">
              Let&apos;s talk about your project.
            </p>
            <Link href="/contact" className="btn-apple">
              Get in Touch
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
