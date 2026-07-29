import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://miniwildgarden.co.uk"),
  title: {
    default: "Mini Wild Garden | Make more space for nature",
    template: "%s | Mini Wild Garden",
  },
  description: "Friendly, practical guides for helping birds, bees, hedgehogs and other wildlife in gardens of every size.",
  openGraph: {
    title: "Mini Wild Garden",
    description: "Small spaces. Wilder lives.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body id="top">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
