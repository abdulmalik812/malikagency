import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Experience } from "@/components/experience/experience";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = localFont({src:"../public/fonts/inter-latin.woff2",variable:"--font-inter",display:"swap"});

const siteUrl = "https://malikagencies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Malik Agencies — Software Studio",
    template: "%s | Malik Agencies",
  },
  description:
    "Websites, mobile apps and custom software, built with your team.",
  keywords: [
    "software development agency",
    "web development",
    "mobile app development",
    "AI automation",
    "custom software",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Malik Agencies", url: siteUrl }],
  creator: "Malik Agencies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Malik Agencies",
    title: "Malik Agencies — Software Studio",
    description:
      "Websites, mobile apps and custom software, built with your team.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Malik Agencies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malik Agencies — Software Studio",
    description:
      "Websites, mobile apps and custom software, built with your team.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Experience/><a href="#main-content" className="skip-link">Skip to content</a><Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
