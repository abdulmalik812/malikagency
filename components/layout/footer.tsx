import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";
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
  {
    href: "https://github.com/malikagencies",
    label: "GitHub",
    Icon: GithubIcon,
  },
  {
    href: "https://linkedin.com/company/malikagencies",
    label: "LinkedIn",
    Icon: LinkedinIcon,
  },
  {
    href: "https://twitter.com/malikagencies",
    label: "Twitter / X",
    Icon: TwitterIcon,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[#2a2a2a] bg-[#0a0a0a]"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* CTA Banner */}
      <div className="border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#10b981] mb-1">
              Ready to build?
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-[#f5f5f5]">
              Let&apos;s turn your idea into a product.
            </h2>
          </div>
          <Link
            href="/contact"
            className="btn-primary shrink-0"
            aria-label="Start a project with Malik Agencies"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-[#10b981] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <span className="font-bold text-lg text-[#f5f5f5]">
                Malik<span className="text-[#10b981]">.</span>
              </span>
            </Link>
            <p className="text-[#a1a1a1] text-sm leading-relaxed max-w-xs">
              We build world-class software for ambitious businesses — from MVPs to enterprise platforms.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-6" role="list" aria-label="Social media links">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-[#2a2a2a] flex items-center justify-center text-[#a1a1a1] hover:text-[#10b981] hover:border-[#10b981] transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[#f5f5f5] font-semibold text-sm mb-4">
                {title}
              </h3>
              <ul className="space-y-2" role="list">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[#a1a1a1] text-sm hover:text-[#10b981] transition-colors duration-200"
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
        <div className="mt-12 pt-6 border-t border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#a1a1a1] text-xs">
            © {year} Malik Agencies. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-[#a1a1a1] text-xs hover:text-[#f5f5f5] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#a1a1a1] text-xs hover:text-[#f5f5f5] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
