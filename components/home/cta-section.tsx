"use client";

import Link from "next/link";
import { MessageSquare, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CTASection(){return <section className="section cta-section" aria-labelledby="cta-heading"><div className="container-apple"><ScrollReveal><div className="agency-cta"><div><p className="label-sm">Have a project in mind?</p><h2 id="cta-heading" className="display-lg">Tell us what<br/><span className="muted">you&apos;re working on.</span></h2><p className="body-lg">A short note is enough to get the conversation started.</p><div className="hero-actions"><Link href="/contact" className="btn-apple">Start a Project<MessageSquare size={17}/></Link><a href="mailto:hello@malikagencies.com" className="btn-ghost">Email us<Mail size={17}/></a></div></div><div className="cta-orbit" aria-hidden="true"><div/><div/><div/></div></div></ScrollReveal></div></section>}
