import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/icons";

const footerLinks = {
  Pages: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services#web", label: "Web Development" },
    { href: "/services#mobile", label: "Mobile Apps" },
    { href: "/services#ai", label: "AI & Automation" },
    { href: "/services#custom", label: "Custom Software" },
  ],
};

const socialLinks = [
  { href: "https://github.com/malikagencies", label: "GitHub", Icon: GithubIcon },
  { href: "https://linkedin.com/company/malikagencies", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://twitter.com/malikagencies", label: "Twitter / X", Icon: TwitterIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-black"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Top CTA strip */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container-apple py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="label-sm mb-1">Ready to build?</p>
            <h2
              className="text-white font-semibold text-[20px] tracking-[-0.02em]"
            >
              Let&apos;s turn your idea into a product.
            </h2>
          </div>
          <Link
            href="/contact"
            className="btn-apple shrink-0 !py-2.5 !px-6 !text-[13px]"
            aria-label="Start a project"
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-apple py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-5 group" aria-label="Malik Agencies">
              <div
                className="w-7 h-7 rounded-[8px] flex items-center justify-center group-hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg, #0a84ff 0%, #5e5ce6 100%)" }}
              >
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
                  <path d="M1 11V1L7 8L13 1V11" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-semibold text-[15px] tracking-[-0.02em] text-white/90">
                Malik Agencies
              </span>
            </Link>
            <p className="text-white/40 text-[13px] leading-relaxed max-w-[260px] mb-6">
              We build world-class software for ambitious businesses — from MVPs to enterprise platforms.
            </p>

            {/* Socials */}
            <div className="flex gap-2.5" role="list" aria-label="Social media">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/35 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white/80 font-semibold text-[12px] uppercase tracking-[0.1em] mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5" role="list">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-white/40 text-[13px] hover:text-white/75 transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-white/25 text-[11px]">
            © {year} Malik Agencies. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-white/25 text-[11px] hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/25 text-[11px] hover:text-white/50 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
