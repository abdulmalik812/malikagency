export function ProjectVisual({ id, title }: { id: string; title: string }) {
  if (id === "lolpdf") return <div className="project-visual visual-lolpdf" aria-hidden="true"><img src="/projects/lolpdf.jpg" alt="" loading="lazy"/></div>;
  return <div className={`project-visual visual-${id}`} aria-hidden="true"><span className="visual-word">{title.split(" ")[0]}</span><div className="visual-shape"><i/><i/><i/><i/><i/></div><span className="visual-code">{id === "velox" || id === "shopmate" ? "iOS / Android" : id === "docuflow" ? "Document workflow" : id === "nexthire" ? "Applicant tracking" : id === "insightboard" ? "Logistics dashboard" : "Web platform"}</span></div>;
}
