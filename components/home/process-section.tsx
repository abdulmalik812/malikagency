"use client";


import { ScrollReveal } from "@/components/ui/scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We’ll talk about what you’re building and what you need help with.",
  },
  {
    number: "02",
    title: "Proposal & Scoping",
    description:
      "We’ll agree on the work, timing and cost before we begin.",
  },
  {
    number: "03",
    title: "Design & Architecture",
    description:
      "We work through the design and technical plan together.",
  },
  {
    number: "04",
    title: "Build & Iterate",
    description:
      "We build in stages and share progress as we go.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "We launch the product and can help with what comes next.",
  },
];

export function ProcessSection(){return <section className="section process-section" aria-labelledby="process-heading"><div className="container-apple process-layout"><ScrollReveal className="process-heading"><p className="label-sm">How We Work</p><h2 id="process-heading" className="display-md">From first call<br/><span className="muted">to launch.</span></h2><p className="body-lg">We agree on the plan, then keep you in the loop as we work.</p><div className="process-diagram" aria-hidden="true"><span/><span/><span/></div></ScrollReveal><div className="process-list">{steps.map(({number,title,description})=><ScrollReveal key={number}><div className="process-row"><span className="step-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div></div></ScrollReveal>)}</div></div></section>}
