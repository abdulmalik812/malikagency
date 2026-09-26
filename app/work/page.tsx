import type { Metadata } from "next";
import { WorkPageClient } from "./work-client";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected web, mobile and custom software projects from Malik Agencies.",
};

export default function WorkPage() {
  return <WorkPageClient />;
}
