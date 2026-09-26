"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CTASection() {
  return (
    <section
      className="section"
      style={{ background: "#000" }}
      aria-labelledby="cta-heading"
    >
      <div className="container-apple">
        <ScrollReveal>
          <div
            className="agency-cta relative overflow-hidden rounded-[28px] p-14 sm:p-20 text-left"
            style={{
              background: "#eeede8",
              border: "1px solid #d5d3cc",
            }}
          >
            {/* Ambient orb */}
            <div
              className="absolute pointer-events-none"
              aria-hidden="true"
              style={{
                top: "-50%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80%",
                height: "200%",
                background: "radial-gradient(ellipse at 50% 20%, rgba(10,132,255,0.1) 0%, rgba(94,92,230,0.06) 30%, transparent 65%)",
                filter: "blur(24px)",
              }}
            />

            {/* Corner hairlines */}
            <div
              className="absolute top-0 left-0 w-20 h-20 rounded-tl-[28px] pointer-events-none"
              aria-hidden="true"
              style={{
                borderTop: "1px solid rgba(10,132,255,0.3)",
                borderLeft: "1px solid rgba(10,132,255,0.3)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-20 h-20 rounded-br-[28px] pointer-events-none"
              aria-hidden="true"
              style={{
                borderBottom: "1px solid rgba(10,132,255,0.3)",
                borderRight: "1px solid rgba(10,132,255,0.3)",
              }}
            />

            <div className="relative z-10">
              <p className="label-sm mb-4">Have a project in mind?</p>

              <h2
                id="cta-heading"
                className="display-lg text-white mb-5"
              >
                Tell us what
                <br />
                <span className="text-gradient-apple">you&apos;re working on.</span>
              </h2>

              <p className="body-lg max-w-md mx-0 mb-10">
                A short note is enough to get the conversation started.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <Link
                  href="/contact"
                  className="btn-apple"
                  aria-label="Start your project"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href="mailto:hello@malikagencies.com"
                  className="btn-ghost"
                  aria-label="Email Malik Agencies"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  Email us
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
