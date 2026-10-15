export interface Project{id:string;title:string;category:string;description:string;color:string;href:string;liveUrl?:string}
export const projects: Project[] = [
  {
    id: "lolpdf",
    title: "LOLPDF Tools",
    category: "Web",
    description:
      "Free no-login browser toolkit with 50 PDF and image tools, processed on the device.",
    color: "#ff9f0a",
    href: "/work/lolpdf",
    liveUrl: "https://lol-pdf.vercel.app/",
  },
  {
    id: "tradespark",
    title: "TradeSpark E-Commerce",
    category: "Web",
    description:
      "Online store with inventory tools and a vendor dashboard.",
    color: "#0a84ff",
    href: "/work/tradespark",
  },
  {
    id: "velox",
    title: "Velox Finance App",
    category: "Mobile",
    description:
      "Mobile app for tracking spending and setting budget goals.",
    color: "#30d158",
    href: "/work/velox",
  },
  {
    id: "docuflow",
    title: "DocuFlow AI",
    category: "AI",
    description:
      "Document software for extracting information from business files.",
    color: "#bf5af2",
    href: "/work/docuflow",
  },
  {
    id: "nexthire",
    title: "NextHire ATS",
    category: "Web",
    description:
      "Applicant tracking system with team roles and recruiting integrations.",
    color: "#0a84ff",
    href: "/work/nexthire",
  },
  {
    id: "shopmate",
    title: "ShopMate Mobile",
    category: "Mobile",
    description:
      "Retail app with loyalty points, QR scanning and stock lookup.",
    color: "#30d158",
    href: "/work/shopmate",
  },
  {
    id: "insightboard",
    title: "InsightBoard Analytics",
    category: "Custom",
    description:
      "Logistics dashboard for tracking deliveries and driver activity.",
    color: "#ff9f0a",
    href: "/work/insightboard",
  },
];
