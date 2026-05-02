import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { LocalBusinessJsonLd } from "@/components/layout/json-ld";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Professional Cleaning Services Australia`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "professional cleaning services Australia",
    "residential cleaning",
    "commercial cleaning",
    "end of lease cleaning",
    "office cleaning",
    "deep cleaning",
    "carpet cleaning",
    "window cleaning",
    "cleaning company Australia",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Professional Cleaning Services Australia`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Professional Cleaning Services Australia`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
