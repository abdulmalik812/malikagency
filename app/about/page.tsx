import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Users, Lightbulb, Heart } from "lucide-react";
import { ScrollReveal, StaggerContainer } from "@/components/ui/scroll-reveal";

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
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "We treat every project as a partnership. You have full visibility, weekly updates, and a direct line to the engineers building your product.",
  },
  {
    icon: Lightbulb,
    title: "Thoughtful Craft",
    description:
      "We care deeply about the details — clean architecture, readable code, intuitive UX. What we build today should be maintainable for years.",
  },
  {
    icon: Heart,
    title: "People First",
    description:
      "We only take on projects we believe in, work with clients we respect, and take care of the humans on both sides of the project.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[#10b981] text-sm font-semibold uppercase tracking-widest mb-4">
              About Us
            </p>
            <h1
              className="font-bold text-[#f5f5f5] mb-5 max-w-3xl"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.15 }}
            >
              Software built with
              <br />
              <span className="text-accent-gradient">purpose and precision.</span>
            </h1>
            <p className="text-[#a1a1a1] text-lg max-w-2xl leading-relaxed">
              We&apos;re a small, senior team that cares deeply about the software we ship.
              No bloated teams, no junior hand-offs — just experienced engineers who take ownership.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-[#0a0a0a]" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-[#10b981] text-sm font-semibold uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2
                id="story-heading"
                className="text-3xl sm:text-4xl font-bold text-[#f5f5f5] mb-6"
              >
                Built from frustration.
                <br />
                <span className="text-gradient">Driven by standards.</span>
              </h2>
              <div className="space-y-4 text-[#a1a1a1] leading-relaxed">
                <p>
                  Malik Agencies was founded after watching too many businesses get burned by
                  agencies that over-promised and under-delivered — spaghetti code, missed deadlines,
                  and software that crumbled at scale.
                </p>
                <p>
                  We started with a simple belief: software agencies should be held to the same
                  standard as the software they build. That means clean architecture, honest timelines,
                  transparent communication, and code that&apos;s actually maintainable.
                </p>
                <p>
                  Today, we work with startups and growing businesses across e-commerce, fintech,
                  logistics, and SaaS — helping them build software that becomes a competitive
                  advantage, not a liability.
                </p>
              </div>
            </ScrollReveal>

            {/* Story visual */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="relative">
                <div
                  className="card-surface p-8 relative overflow-hidden"
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 70%)",
                    }}
                  />
                  {/* Stats grid */}
                  <div className="relative grid grid-cols-2 gap-6">
                    {[
                      { label: "Founded", value: "2023" },
                      { label: "Projects Shipped", value: "50+" },
                      { label: "Countries Served", value: "8" },
                      { label: "Client Retention", value: "94%" },
                    ].map(({ label, value }) => (
                      <div key={label} className="text-center p-4 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
                        <div className="text-3xl font-black text-accent-gradient mb-1">{value}</div>
                        <div className="text-[#a1a1a1] text-sm">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-[#0d0d0d] border-t border-[#2a2a2a]" aria-labelledby="founder-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[#10b981] text-sm font-semibold uppercase tracking-widest mb-3">
              The Team
            </p>
            <h2
              id="founder-heading"
              className="text-3xl sm:text-4xl font-bold text-[#f5f5f5]"
            >
              The people behind the work.
            </h2>
          </ScrollReveal>

          <div className="max-w-md mx-auto">
            <ScrollReveal>
              <div className="card-surface card-hover p-8 text-center">
                {/* Avatar */}
                <div
                  className="w-24 h-24 rounded-2xl mx-auto mb-5 flex items-center justify-center text-3xl font-black text-white"
                  style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
                  aria-hidden="true"
                >
                  A
                </div>
                <h3 className="text-[#f5f5f5] font-bold text-xl mb-1">Abdul Malik</h3>
                <p className="text-[#10b981] text-sm font-medium mb-4">
                  Founder & Lead Engineer
                </p>
                <p className="text-[#a1a1a1] text-sm leading-relaxed mb-6">
                  Full-stack engineer with a focus on scalable web architecture, API design, and
                  AI integration. Passionate about building software that solves real problems
                  with clean, maintainable code.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Next.js", "TypeScript", "Python", "System Design", "AI/ML"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#a1a1a1]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#0a0a0a] border-t border-[#2a2a2a]" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[#10b981] text-sm font-semibold uppercase tracking-widest mb-3">
              Our Values
            </p>
            <h2
              id="values-heading"
              className="text-3xl sm:text-4xl font-bold text-[#f5f5f5]"
            >
              How we work.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="card-surface card-hover p-6 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#10b981]/10 flex items-center justify-center mb-5 group-hover:bg-[#10b981]/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#10b981]" aria-hidden="true" />
                </div>
                <h3 className="text-[#f5f5f5] font-bold text-base mb-3">{title}</h3>
                <p className="text-[#a1a1a1] text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0d0d0d] border-t border-[#2a2a2a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f5] mb-4">
              Ready to work together?
            </h2>
            <p className="text-[#a1a1a1] text-lg mb-8">
              Let&apos;s talk about your project.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Get in Touch
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
