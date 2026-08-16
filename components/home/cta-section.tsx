"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CTASection() {
  return (
    <section
      className="section-padding bg-[#0a0a0a]"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div
            className="relative overflow-hidden rounded-2xl border border-[#10b981]/20 p-12 sm:p-16"
            style={{
              background: "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(16,185,129,0.1) 0%, transparent 70%), #141414",
            }}
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#10b981]/30 rounded-tl-2xl" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#10b981]/30 rounded-br-2xl" aria-hidden="true" />

            <p className="text-[#10b981] text-sm font-semibold uppercase tracking-widest mb-4">
              Ready to Start?
            </p>

            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-5"
              style={{ lineHeight: 1.15 }}
            >
              Let&apos;s build something
              <br />
              <span className="text-accent-gradient">extraordinary together.</span>
            </h2>

            <p className="text-[#a1a1a1] text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Book a free 30-minute discovery call. We&apos;ll listen to your idea, ask the
              right questions, and tell you honestly what it takes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="btn-primary text-base px-8 py-3.5"
                aria-label="Start your project with Malik Agencies"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href="mailto:hello@malikagencies.com"
                className="btn-outline text-base px-8 py-3.5"
                aria-label="Send us an email"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Book a Call
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
