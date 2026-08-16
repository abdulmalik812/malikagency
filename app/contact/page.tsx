import type { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";
import { LinkedinIcon, TwitterIcon } from "@/components/ui/icons";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Malik Agencies. Tell us about your idea and we'll get back to you within one business day.",
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@malikagencies.com",
    href: "mailto:hello@malikagencies.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/company/malikagencies",
    href: "https://linkedin.com/company/malikagencies",
  },
  {
    icon: TwitterIcon,
    label: "Twitter / X",
    value: "@malikagencies",
    href: "https://twitter.com/malikagencies",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[#10b981] text-sm font-semibold uppercase tracking-widest mb-4">
              Contact
            </p>
            <h1
              className="font-bold text-[#f5f5f5] mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.15 }}
            >
              Let&apos;s build something
              <br />
              <span className="text-accent-gradient">together.</span>
            </h1>
            <p className="text-[#a1a1a1] text-lg max-w-xl leading-relaxed">
              Tell us about your project. We respond to every inquiry within one business day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="section-padding bg-[#0a0a0a]" aria-labelledby="contact-form-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2
                id="contact-form-heading"
                className="text-2xl font-bold text-[#f5f5f5] mb-8"
              >
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="card-surface p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="w-5 h-5 text-[#10b981]" aria-hidden="true" />
                    <h2 className="text-[#f5f5f5] font-bold">What to expect</h2>
                  </div>
                  <ul className="space-y-3" aria-label="What happens after you contact us">
                    {[
                      "We reply within 1 business day",
                      "Free 30-min discovery call",
                      "Detailed proposal in 48 hours",
                      "No commitment required",
                    ].map((item, i) => (
                      <li key={item} className="flex items-center gap-3 text-[#a1a1a1] text-sm">
                        <span
                          className="w-5 h-5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] text-xs font-bold shrink-0"
                          aria-hidden="true"
                        >
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="card-surface p-6">
                  <h2 className="text-[#f5f5f5] font-bold mb-4">Other ways to reach us</h2>
                  <ul className="space-y-3" role="list">
                    {contactMethods.map(({ icon: Icon, label, value, href }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target={href.startsWith("mailto") ? undefined : "_blank"}
                          rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                          className="flex items-center gap-3 group"
                          aria-label={`Contact via ${label}: ${value}`}
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#10b981] transition-colors shrink-0">
                            <Icon className="w-4 h-4 text-[#a1a1a1] group-hover:text-[#10b981] transition-colors" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-xs text-[#a1a1a1]">{label}</p>
                            <p className="text-[#f5f5f5] text-sm font-medium group-hover:text-[#10b981] transition-colors">
                              {value}
                            </p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
