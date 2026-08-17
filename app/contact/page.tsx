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
    color: "#0a84ff",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/company/malikagencies",
    href: "https://linkedin.com/company/malikagencies",
    color: "#30d158",
  },
  {
    icon: TwitterIcon,
    label: "Twitter / X",
    value: "@malikagencies",
    href: "https://twitter.com/malikagencies",
    color: "#5e5ce6",
  },
];

const expectations = [
  "We reply within 1 business day",
  "Free 30-min discovery call",
  "Detailed proposal in 48 hours",
  "No commitment required",
];

export default function ContactPage() {
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
            <p className="label-sm mb-4">Contact</p>
            <h1 className="display-lg text-white mb-5">
              Let&apos;s build something
              <br />
              <span className="text-gradient-apple">together.</span>
            </h1>
            <p className="body-lg max-w-lg">
              Tell us about your project. We respond to every inquiry
              within one business day.
            </p>
          </ScrollReveal>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to top, #000, transparent)" }}
          aria-hidden="true"
        />
      </section>

      {/* ── Form + Sidebar ── */}
      <section
        className="section"
        style={{ background: "#000" }}
        aria-labelledby="contact-form-heading"
      >
        <div className="container-apple">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* ── Form ── */}
            <div className="lg:col-span-3">
              <h2
                id="contact-form-heading"
                className="text-white font-semibold text-[22px] tracking-[-0.025em] mb-8"
              >
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* ── Sidebar ── */}
            <aside className="lg:col-span-2 space-y-4">

              {/* What to expect */}
              <ScrollReveal delay={0.1}>
                <div
                  className="rounded-[20px] p-6"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(10,132,255,0.12)", border: "1px solid rgba(10,132,255,0.2)" }}
                    >
                      <MessageSquare className="w-4 h-4" style={{ color: "#0a84ff" }} aria-hidden="true" />
                    </div>
                    <h2 className="text-white font-semibold text-[15px] tracking-[-0.01em]">
                      What to expect
                    </h2>
                  </div>
                  <ul className="space-y-3.5" aria-label="What happens after you contact us">
                    {expectations.map((item, i) => (
                      <li key={item} className="flex items-center gap-3">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 text-white"
                          style={{
                            background: "rgba(10,132,255,0.12)",
                            border: "1px solid rgba(10,132,255,0.25)",
                            color: "#0a84ff",
                          }}
                          aria-hidden="true"
                        >
                          {i + 1}
                        </span>
                        <span className="text-white/55 text-[13.5px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Contact methods */}
              <ScrollReveal delay={0.18}>
                <div
                  className="rounded-[20px] p-6"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <h2 className="text-white font-semibold text-[15px] tracking-[-0.01em] mb-5">
                    Other ways to reach us
                  </h2>
                  <ul className="space-y-4" role="list">
                    {contactMethods.map(({ icon: Icon, label, value, href, color }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target={href.startsWith("mailto") ? undefined : "_blank"}
                          rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                          className="flex items-center gap-3 group"
                          aria-label={`Contact via ${label}: ${value}`}
                        >
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200"
                            style={{
                              background: `${color}12`,
                              border: `1px solid ${color}22`,
                            }}
                          >
                            <Icon
                              className="w-4 h-4 transition-colors duration-200"
                              style={{ color }}
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="text-white/35 text-[11px] uppercase tracking-wide font-medium">{label}</p>
                            <p className="text-white/70 text-[13px] font-medium group-hover:text-white transition-colors duration-200">
                              {value}
                            </p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Response time badge */}
              <ScrollReveal delay={0.24}>
                <div
                  className="rounded-[20px] p-5 flex items-center gap-4"
                  style={{
                    background: "rgba(48,209,88,0.05)",
                    border: "1px solid rgba(48,209,88,0.15)",
                  }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full animate-pulse shrink-0"
                    style={{ background: "#30d158" }}
                    aria-hidden="true"
                  />
                  <p className="text-white/60 text-[13px]">
                    <strong className="text-white/80 font-semibold">Currently available</strong>
                    {" "}— accepting new projects
                  </p>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
