"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-bg grain"
      aria-label="Hero section"
    >
      {/* Ambient light blobs — purely decorative */}
      <div
        className="absolute pointer-events-none select-none"
        aria-hidden="true"
        style={{
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "60vw",
          maxWidth: 1000,
          background: "radial-gradient(ellipse at 50% 30%, rgba(10,132,255,0.1) 0%, rgba(94,92,230,0.06) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none select-none"
        aria-hidden="true"
        style={{
          bottom: "0%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(ellipse, rgba(191,90,242,0.05) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Hairline grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-apple text-center pt-24 pb-16">

        {/* Announcement chip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="inline-flex mb-10"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full text-[13px] font-medium text-white/75 hover:text-white transition-colors duration-200"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
            }}
            aria-label="View our latest projects"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse" aria-hidden="true" />
            Available for new projects
            <ChevronRight className="w-3.5 h-3.5 text-white/40" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.18 }}
          className="display-xl mb-6 text-white"
        >
          Software that
          <br />
          <span className="text-gradient-apple">moves the needle.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="body-lg max-w-[560px] mx-auto mb-12"
        >
          Malik Agencies is a full-stack software agency. We design and build
          web apps, mobile apps, and AI-powered products — from first sketch
          to shipped.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.44 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <Link
            href="/contact"
            className="btn-apple"
            aria-label="Start a project with Malik Agencies"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/work"
            className="btn-ghost"
            aria-label="View our portfolio"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.72 }}
          className="mt-20 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          aria-label="Agency statistics"
        >
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto sm:max-w-lg sm:grid-cols-3">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "3×", label: "Avg. ROI" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-700 tracking-tight mb-1 text-white"
                  style={{ fontWeight: 700, letterSpacing: "-0.03em" }}
                >
                  {value}
                </div>
                <div className="text-[12px] font-medium text-white/40 tracking-wide uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade-to-black */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(to top, #000000, transparent)" }}
      />
    </section>
  );
}
