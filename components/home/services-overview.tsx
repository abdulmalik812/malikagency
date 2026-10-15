"use client";


import Link from "next/link";
import { Globe, Smartphone, Bot, Layers, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    description:
      "Websites and applications built to fit your product and your team.",
    features: ["Next.js & React", "API Design", "Performance", "SEO"],
    href: "/services#web",
    color: "#9bbcd3",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "iOS and Android apps, built together with React Native.",
    features: ["React Native", "iOS & Android", "Push Notifications", "Offline"],
    href: "/services#mobile",
    color: "#aec4ad",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI & Automation",
    description:
      "Useful AI features and automations, added where they make sense.",
    features: ["LLM Integration", "RAG Systems", "Automation", "Agents"],
    href: "/services#ai",
    color: "#b9b1ca",
  },
  {
    id: "custom",
    icon: Layers,
    title: "Custom Software",
    description:
      "Internal tools and software shaped around the way your business works.",
    features: ["Architecture", "Database Design", "Integrations", "Support"],
    href: "/services#custom",
    color: "#c7b395",
  },
];

export function ServicesOverview(){return <section className="section services-overview" id="capabilities" aria-labelledby="services-heading"><div className="container-apple"><ScrollReveal className="section-heading"><div><p className="label-sm">What We Do</p><h2 id="services-heading" className="display-md">What we can<br/><span className="muted">help you build.</span></h2></div><p className="body-lg">From a first release to an established product, we can help plan, build and maintain it.</p></ScrollReveal><div className="service-list">{services.map(({id,icon:Icon,title,description,features,href},i)=><article key={id} className="service-row"><span className="service-index">0{i+1}</span><div className="service-title"><Icon size={24}/><h3>{title}</h3></div><div className="service-description"><p>{description}</p><ul>{features.map(f=><li key={f}>{f}</li>)}</ul></div><Link href={href} className="service-link" aria-label={`Learn more about ${title}`}><span>Learn more</span><ArrowRight size={20}/></Link></article>)}</div></div></section>}
