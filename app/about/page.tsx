import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Users, Lightbulb, Heart } from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the people behind Malik Agencies and learn how we work with clients.",
};

const values = [
  {
    icon: Target,
    title: "Start with the problem",
    description:
      "We take time to understand what the software needs to do.",
    color: "#0a84ff",
  },
  {
    icon: Users,
    title: "Work together",
    description:
      "You work directly with the people building your product.",
    color: "#30d158",
  },
  {
    icon: Lightbulb,
    title: "Keep it maintainable",
    description:
      "We aim for clear design and code your team can keep working on.",
    color: "#ff9f0a",
  },
  {
    icon: Heart,
    title: "Be straightforward",
    description:
      "We’re honest about the scope, tradeoffs and timing.",
    color: "#bf5af2",
  },
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
            <p className="label-sm mb-4">About</p>
            <h1 className="display-lg text-white mb-5 max-w-2xl">
              A small team,
              <br />
              <span className="text-gradient-apple">close to the work.</span>
            </h1>
            <p className="body-lg max-w-xl">
              We work directly with our clients, from the first conversation
              through launch and ongoing support.
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
                Clear plans.
                <br />
                <span className="text-gradient-white">Careful work.</span>
              </h2>
              <div className="space-y-4 text-white/55 text-[15px] leading-relaxed">
                <p>
                  Malik Agencies was founded by Abdul Malik to give clients a more
                  direct, practical way to build software.
                </p>
                <p>
                  We keep projects clear: agree on the scope, share progress and
                  make decisions together.
                </p>
                <p>
                  Our work includes websites, mobile apps and custom tools for
                  growing businesses.
                </p>
              </div>
            </ScrollReveal>

            {/* Working principles */}
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
                <div className="relative space-y-4">
                  {[
                    "Talk directly with the team",
                    "Agree on scope before we start",
                    "Build for the people who use it",
                  ].map((item) => (
                    <div key={item} className="border-b border-white/10 pb-4 text-white/70 text-[15px]">
                      {item}
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
              The people behind
              <br />
              <span className="text-gradient-white">the work.</span>
            </h2>
          </ScrollReveal>

          {/* Team cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {/* Abdul Malik — Founder card */}
            <ScrollReveal>
              <div
                className="rounded-[28px] overflow-hidden h-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,132,255,0.06) 0%, rgba(94,92,230,0.04) 50%, rgba(191,90,242,0.03) 100%), rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex flex-col">
                  {/* Photo */}
                  <div className="relative overflow-hidden" style={{ minHeight: 260 }}>
                    <div
                      className="absolute inset-0 pointer-events-none z-10"
                      style={{
                        background:
                          "radial-gradient(ellipse at 50% 90%, rgba(10,132,255,0.18), transparent 65%)",
                      }}
                      aria-hidden="true"
                    />
                    <Image
                      src="/photo_founder.png"
                      alt="Abdul Malik — Founder & Lead Engineer at Malik Agencies"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>

                  {/* Info */}
                  <div className="p-8 flex flex-col">
                    <h3 className="text-white font-semibold text-[22px] tracking-[-0.025em] mb-1">
                      Abdul Malik
                    </h3>
                    <p
                      className="text-[13px] font-semibold uppercase tracking-[0.1em] mb-5"
                      style={{ color: "#0a84ff" }}
                    >
                      Founder &amp; Lead Engineer
                    </p>
                    <p className="text-white/55 text-[14px] leading-relaxed mb-7">
                      Abdul leads product engineering, from early technical planning
                      through implementation.
                    </p>
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

            {/* Alina Farooqui — AI/ML Engineer card */}
            <ScrollReveal>
              <div
                className="rounded-[28px] overflow-hidden h-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(191,90,242,0.06) 0%, rgba(94,92,230,0.04) 50%, rgba(10,132,255,0.03) 100%), rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex flex-col">
                  {/* Photo placeholder with AI-themed gradient */}
                  <div className="relative overflow-hidden flex items-center justify-center" style={{ minHeight: 260, background: "linear-gradient(135deg, rgba(191,90,242,0.12) 0%, rgba(94,92,230,0.10) 50%, rgba(10,132,255,0.08) 100%)" }}>
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at 50% 90%, rgba(191,90,242,0.20), transparent 65%)",
                      }}
                      aria-hidden="true"
                    />
                    <div
                      className="relative z-10 flex items-center justify-center rounded-full text-white font-bold"
                      style={{
                        width: 96,
                        height: 96,
                        fontSize: 36,
                        background: "linear-gradient(135deg, #bf5af2, #5e5ce6)",
                        boxShadow: "0 0 40px rgba(191,90,242,0.35)",
                      }}
                    >
                      AF
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-8 flex flex-col">
                    <h3 className="text-white font-semibold text-[22px] tracking-[-0.025em] mb-1">
                      Alina Farooqui
                    </h3>
                    <p
                      className="text-[13px] font-semibold uppercase tracking-[0.1em] mb-5"
                      style={{ color: "#bf5af2" }}
                    >
                      AI / ML Engineer
                    </p>
                    <p className="text-white/55 text-[14px] leading-relaxed mb-7">
                      Alina works on machine learning and AI features for software products.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "PyTorch", "LLMs", "MLOps", "Data Science"].map((skill) => (
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
              Have a project in mind?
            </h2>
            <p className="body-lg max-w-sm mx-auto mb-10">
              Tell us what you&apos;re planning.
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
