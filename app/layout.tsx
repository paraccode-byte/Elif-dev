import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { SITE_CONFIG } from "@/data/site-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.meta.url),
  title: {
    default: SITE_CONFIG.meta.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.meta.description,
  keywords: SITE_CONFIG.meta.keywords,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.meta.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_CONFIG.meta.title,
    description: SITE_CONFIG.meta.description,
    url: SITE_CONFIG.meta.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.logoUrl,
        width: 800,
        height: 800,
        alt: `${SITE_CONFIG.name} Brand Identity`,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.meta.title,
    description: SITE_CONFIG.meta.description,
    images: [SITE_CONFIG.logoUrl],
  },
  icons: {
    icon: SITE_CONFIG.logoUrl,
    shortcut: SITE_CONFIG.logoUrl,
    apple: SITE_CONFIG.logoUrl,
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
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#050507] text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
