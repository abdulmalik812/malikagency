export interface Project{id:string;title:string;category:string;description:string;color:string;href:string;liveUrl?:string}
export const projects: Project[] = [
  {
    id: "lolpdf",
    title: "LOLPDF Tools",
    category: "Web",
    description:
      "A free online toolbox with 50 PDF and image tools: merge, split, compress and sign PDFs, remove image backgrounds, resize photos and more. Everything runs on the visitor's own device - no sign-up, no uploads, so private files never leave the computer or phone. Built for anyone who needs a quick document job done without installing software or hitting a paywall.",
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
  {
    id: "memerhub",
    title: "MemerHub",
    category: "Web",
    description:
      "A curated museum of internet memes, styled as the internet's group chat. It pairs 36 hand-picked classics with a live feed of 130+ memes - Vine-era legends, reaction images and whatever the internet is doing now. Visitors pick their era and save the ones that get them. A playful project that shows how far a strong idea and personality can carry a simple site.",
    color: "#ffd60a",
    href: "/work/memerhub",
    liveUrl: "https://memer-hub.vercel.app/",
  },
  {
    id: "stichclothing",
    title: "Stich Clothing",
    category: "Web",
    description:
      "The online store for a Lucknow clothing brand selling t-shirts, caps, mugs, pyjamas and more. Shoppers browse the drop by category or search, check photos, pick a size and add pieces to the cart. Checkout happens on WhatsApp: the full order goes straight to the team, and no card details are ever asked on the site. Lucknow orders ship the same day, other cities are confirmed on WhatsApp before dispatch, and tracking details come back on WhatsApp too. The brand also takes custom designs, team orders and gift runs.",
    color: "#ed1c24",
    href: "/work/stichclothing",
    liveUrl: "https://stichclothing.vercel.app/",
  },
];
