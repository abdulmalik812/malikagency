import type { Metadata } from "next";
import { WorkPageClient } from "./work-client";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Portfolio of web apps, mobile apps, AI tools, and custom software built by Malik Agencies. Real projects, real results.",
};

export default function WorkPage() {
  return <WorkPageClient />;
}
