import type { Metadata } from "next";
import "../globals.css";

import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Copywrite from "@/components/Copywrite";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TheNetSense - Expert Web Solutions | Next.js & SEO Optimization",
  description:
    "TheNetSense is a leading web development agency specializing in Creating Customized website for brands. Elevate your online presence with high-performance, scalable websites.",
  keywords: [
    "web development agency",
    "Next.js development",
    "SEO optimization",
    "MERN stack",
    "Google Analytics integration",
    "website design",
    "business websites",
    "frontend development",
    "React.js agency",
    "full-stack development",
  ],
  authors: [{ name: "TheNetSense", url: "https://thenetsense.netlify.app" }], // Updated to 'authors'
  openGraph: {
    title: "TheNetSense - Elevate Your Web Presence",
    description:
      "Boost your business with cutting-edge web solutions powered by Next.js, SEO, and modern tech stacks. Partner with TheNetSense today.",
    url: "https://thenetsense.netlify.app", // Update with actual domain
    type: "website",
    images: [
      {
        url: "https://thenetsense.com/og-image.jpg", // Update with actual image
        width: 1200,
        height: 630,
        alt: "TheNetSense - Web Development Agency",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* <Navbar /> */}
        {children}
        <Footer />
        <Copywrite />
      </body>
    </html>
  );
}
