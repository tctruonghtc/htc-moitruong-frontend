import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";
import { siteConfig } from "@/lib/site";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HTC Môi Trường | Giải pháp Tài nguyên & Môi trường",
    template: "%s | HTC Môi Trường",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "HTC Môi Trường | Giải pháp Tài nguyên & Môi trường",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "HTC Môi Trường",
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${outfit.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
