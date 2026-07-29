import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteMotion } from "@/components/SiteMotion";
import { CookieNotice } from "@/components/CookieNotice";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { StructuredData } from "@/components/StructuredData";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.miniwildgarden.co.uk"),
  title: {
    default: "Mini Wild Garden | Make space for the wild",
    template: "%s | Mini Wild Garden",
  },
  description: "Beautiful, practical guides for helping birds, bees, hedgehogs and other wildlife in British gardens of every size.",
  alternates: { canonical: "/" },
  authors: [{ name: "Natasha Card", url: "/about" }],
  creator: "Natasha Card",
  publisher: "Mini Wild Garden",
  category: "Wildlife gardening",
  keywords: [
    "wildlife gardening",
    "UK garden wildlife",
    "wildlife friendly garden",
    "garden pond",
    "pollinator garden",
    "hedgehog highway",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: "Mini Wild Garden",
    description: "Make space for the wild, one small corner at a time.",
    url: "/",
    siteName: "Mini Wild Garden",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/images/hero-garden.webp", width: 1152, height: 768, alt: "A thriving wildlife garden with a pond and wildflowers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Wild Garden",
    description: "Make space for the wild, one small corner at a time.",
    images: ["/images/hero-garden.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body id="top">
        <StructuredData />
        <GoogleAnalytics />
        <SiteMotion />
        <Header />
        {children}
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
