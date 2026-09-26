"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export function Hero() {
  return (
    <section
      className="agency-hero relative flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Content */}
      <div className="relative z-10 container-apple agency-hero-content">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="agency-kicker mb-8"
        >
          <span>Independent software studio</span>
          <span aria-hidden="true">/</span>
          <span>Product engineering</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.18 }}
          className="display-xl mb-7 text-white agency-headline"
        >
          Software for
          <br />
          <span>the work ahead.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="body-lg max-w-[560px] mb-10 agency-intro"
        >
          We design and build websites, apps and custom software with your team.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.44 }}
          className="flex flex-col sm:flex-row gap-3 items-start"
        >
          <Link
            href="/contact"
            className="btn-apple"
            aria-label="Start a project with Malik Agencies"
          >
            Discuss a project
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.72 }}
          className="mt-16 pt-7 agency-proof"
        >
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto sm:max-w-lg sm:grid-cols-3">
            {[
              { label: "01", text: "Product strategy & design" },
              { label: "02", text: "Web & mobile engineering" },
              { label: "03", text: "AI & systems integration" },
            ].map(({ label, text }) => (
              <div key={label} className="agency-proof-item">
                <span>{label}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="agency-object" aria-hidden="true">
        <div className="agency-object-orbit agency-object-orbit-one" />
        <div className="agency-object-orbit agency-object-orbit-two" />
        <div className="agency-object-panel agency-object-panel-back" />
        <div className="agency-object-panel agency-object-panel-mid" />
        <div className="agency-object-panel agency-object-panel-front">
          <span className="agency-object-mark">M</span>
          <span className="agency-object-line" />
          <span className="agency-object-line agency-object-line-short" />
          <span className="agency-object-dot" />
        </div>
      </div>

    </section>
  );
}
