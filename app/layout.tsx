import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Arham Gill - Full Stack Web Developer",
    template: "%s | Arham Gill",
  },
  description:
    "Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable web applications and sharing insights on web development.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Portfolio",
    "Arham Gill",
  ],
  authors: [{ name: "Arham Gill" }],
  creator: "Arham Gill",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Arham Gill - Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "Arham Gill",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arham Gill - Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
