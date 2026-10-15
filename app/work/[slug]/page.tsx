import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectVisual } from "@/components/ui/project-visual";
import { ArrowLeft, ArrowUpRight, MessageSquare } from "lucide-react";
export function generateStaticParams() { return projects.map(p => ({ slug: p.id })); }
export async function generateMetadata({ params }: { params: Promise<{slug: string}> }) { const {slug}=await params; return { title: projects.find(p=>p.id===slug)?.title || "Work" }; }
export default async function ProjectPage({ params }: { params: Promise<{slug: string}> }) {
 const {slug}=await params; const project=projects.find(p=>p.id===slug); if(!project) notFound();
 return <><section className="project-page-head container-apple"><Link href="/work" className="btn-text"><ArrowLeft size={17}/>All work</Link><p className="label-sm">{project.category}</p><h1 className="display-lg">{project.title}</h1><p className="body-lg">{project.description}</p>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-apple mt-8" style={{display:"inline-flex"}}>Visit live site<ArrowUpRight size={16}/></a>}</section><div className="container-apple project-page-art"><ProjectVisual id={project.id} title={project.title}/></div><section className="section container-apple"><h2 className="display-md">Have a project in mind?</h2><p className="body-lg my-6">Tell us what you want to build.</p><Link href="/contact" className="btn-apple">Talk about your project<MessageSquare size={17}/></Link></section></>;
}
