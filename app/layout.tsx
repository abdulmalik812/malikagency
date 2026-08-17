import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://malikagencies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Malik Agencies — Software Development Agency",
    template: "%s | Malik Agencies",
  },
  description:
    "Malik Agencies builds world-class web apps, mobile applications, and AI-powered software for ambitious businesses. From idea to launch, we deliver.",
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
    title: "Malik Agencies — Software Development Agency",
    description:
      "We build world-class web apps, mobile applications, and AI-powered software for ambitious businesses.",
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
    title: "Malik Agencies — Software Development Agency",
    description:
      "We build world-class web apps, mobile applications, and AI-powered software for ambitious businesses.",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
